'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './lamp.module.css';
import Image from 'next/image';

export default function Lamp() {
  const lampRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const targetAngle = useRef(0);
  const currentAngle = useRef(0);
  const animationFrame = useRef<number | null>(null);
  const [isOn, setIsOn] = useState(true);

  const animate = () => {
    const speed = 0.05;
    const threshold = 0.1;
    
    if (targetAngle.current === 0 && !isWaving.current) {
      // Initialize spring physics for wave
      isWaving.current = true;
      velocity.current = 0;
      springStartAngle.current = currentAngle.current;
    }
    
    if (isWaving.current && targetAngle.current === 0) {
      // Spring physics parameters
      const springStrength = 0.15; // how strong the spring pulls back
      const damping = 0.92; // velocity damping (0-1)
      const overshoot = 0.1; // how much it overshoots (>1 for overshoot)
      
      // Calculate spring force
      const displacement = currentAngle.current - 0; // distance from target (0)
      const force = -displacement * springStrength * overshoot;
      
      // Update velocity and position
      velocity.current += force;
      velocity.current *= damping;
      currentAngle.current += velocity.current;
      
      // Stop when movement is minimal
      if (Math.abs(velocity.current) < 0.1 && Math.abs(currentAngle.current) < 0.5) {
        isWaving.current = false;
        currentAngle.current = 0;
        velocity.current = 0;
      }
    } else {
      // Normal smooth transition
      currentAngle.current += (targetAngle.current - currentAngle.current) * speed;
      if (Math.abs(currentAngle.current - targetAngle.current) < threshold) {
        currentAngle.current = targetAngle.current;
      }
    }
    
    if (lampRef.current) {
      lampRef.current.style.transform = `rotate(${currentAngle.current}deg)`;
    }
    
    animationFrame.current = requestAnimationFrame(animate);
  };
  
  // Add these refs to your component
  const isWaving = useRef(false);
  const velocity = useRef(0);
  const springStartAngle = useRef(0);

  useEffect(() => {
    const handleMouseDown = () => {
      isDragging.current = true;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      targetAngle.current = 0; // Smoothly return to center
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      const centerX = window.innerWidth / 2;
      const centerY = 0; // lamp hangs from top

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const angleRad = Math.atan2(dy, dx);
      let angleDeg = angleRad * (180 / Math.PI);

      // Subtract 90 to make straight-down = 0°
      angleDeg -= 90;

      // Clamp angle to [-30, 30] for realism
      angleDeg = Math.max(-30, Math.min(30, angleDeg));

      targetAngle.current = angleDeg;
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);
  console.log('isOn', isOn);
  return (
    <div className={`${styles.lampContainer} hidden dark:flex `} ref={lampRef}>
        {isOn ? (
          <Image onClick={() => setIsOn(false)} className={styles.lamp} src="/lampOn.png" alt="Lamp" width={200} height={500} />
        ) : (
          <Image onClick={() => setIsOn(true)} className={styles.lamp} src="/lamp.png" alt="Lamp" width={200} height={500} />
        )}
      {isOn && <div  className={styles.lampShade}></div>}

    </div>
  );
}
