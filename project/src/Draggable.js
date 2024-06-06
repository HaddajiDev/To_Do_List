import React, { useRef, useState, useEffect } from 'react';


const Draggable = () => {
  const elementRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ vx: 0, vy: 0 });
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      e.preventDefault();
      if (isDragging) {
        const dx = e.clientX - lastMousePosition.x;
        const dy = e.clientY - lastMousePosition.y;

        setPosition((prevPosition) => ({
          x: prevPosition.x + dx,
          y: prevPosition.y + dy,
        }));

        setVelocity({ vx: dx, vy: dy });
        setLastMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseUp = (e) => {
      e.preventDefault();
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, lastMousePosition]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setLastMousePosition({ x: e.clientX, y: e.clientY });
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
  };

  useEffect(() => {
    if (!isDragging) {
      const { vx, vy } = velocity;
      let friction = 0.95;
      let x = position.x;
      let y = position.y;

      const animateThrow = () => {
        x += vx;
        y += vy;
        const newVx = vx * friction;
        const newVy = vy * friction;

        if (Math.abs(newVx) > 0.1 || Math.abs(newVy) > 0.1) {
          setPosition({ x, y });
          setVelocity({ vx: newVx, vy: newVy });
          requestRef.current = requestAnimationFrame(animateThrow);
        } else {
          setVelocity({ vx: 0, vy: 0 });
        }
      };

      requestRef.current = requestAnimationFrame(animateThrow);
    }
  }, [isDragging, velocity, position]);

  return (
    <div
      ref={elementRef}
      className="draggable"
      onMouseDown={handleMouseDown}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      Draggable
    </div>
  );
};

export default Draggable;
