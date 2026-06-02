import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position coordinates for Lerp animation (Smooth lag)
  const cursorPosition = useRef({ x: 0, y: 0 });
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device is touch or mobile
    const checkTouch = () => {
      const match = window.matchMedia('(pointer: coarse)').matches || 
                    'ontouchstart' in window || 
                    navigator.maxTouchPoints > 0;
      setIsTouchDevice(match);
      if (match) {
        document.documentElement.classList.remove('no-cursor');
      } else {
        document.documentElement.classList.add('no-cursor');
      }
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    if (isTouchDevice) {
      return;
    }

    // Set visibility when mouse moves
    const onMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Event delegation for hovered elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if target is interactive (or parent is interactive)
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive-cursor') ||
        target.tagName === 'A' || 
        target.tagName === 'BUTTON';

      if (isInteractive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    // Animation Loop with Lerp (spring lag)
    let animationFrameId: number;
    const render = () => {
      const ease = 0.15; // lerp ease factor (0.15 gives beautiful springy lag)
      
      // Calculate interpolation
      cursorPosition.current.x += (mousePosition.current.x - cursorPosition.current.x) * ease;
      cursorPosition.current.y += (mousePosition.current.y - cursorPosition.current.y) * ease;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${cursorPosition.current.x}px, ${cursorPosition.current.y}px, 0) translate(-50%, -50%) scale(${isHovered ? 2.66 : 1})`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
      document.documentElement.classList.remove('no-cursor');
    };
  }, [isVisible, isHovered, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorDotRef}
      id="custom-cursor"
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-shadow duration-300 ${
        isClicking ? 'bg-amber-400' : 'bg-white'
      }`}
      style={{
        width: '12px',
        height: '12px',
        mixBlendMode: 'difference',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-out, background-color 0.15s ease',
        transform: 'translate3d(0, 0, 0) translate(-50%, -50%)',
        boxShadow: isHovered ? '0 0 12px rgba(255, 255, 255, 0.4)' : 'none',
      }}
    />
  );
}
