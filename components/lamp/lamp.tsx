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

  const isWaving = useRef(false);
  const velocity = useRef(0);
  const springStartAngle = useRef(0);

  function isUnderAnotherElement(targetElement) {
    const rect = targetElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
  
    const topElement = document.elementFromPoint(centerX, centerY);
  
    return topElement !== targetElement && targetElement.contains(topElement) === false;
  }

  const animate = () => {
    const speed = 0.05;
    const threshold = 0.1;

    if (targetAngle.current === 0 && !isWaving.current) {
      isWaving.current = true;
      velocity.current = 0;
      springStartAngle.current = currentAngle.current;
    }

    if (isWaving.current && targetAngle.current === 0) {
      const springStrength = 0.15;
      const damping = 0.92;
      const overshoot = 0.1;

      const displacement = currentAngle.current;
      const force = -displacement * springStrength * overshoot;

      velocity.current += force;
      velocity.current *= damping;
      currentAngle.current += velocity.current;

      if (Math.abs(velocity.current) < 0.1 && Math.abs(currentAngle.current) < 0.5) {
        isWaving.current = false;
        currentAngle.current = 0;
        velocity.current = 0;
      }
    } else {
      currentAngle.current += (targetAngle.current - currentAngle.current) * speed;
      if (Math.abs(currentAngle.current - targetAngle.current) < threshold) {
        currentAngle.current = targetAngle.current;
      }
    }

    if (lampRef.current) {
      lampRef.current.style.transform = `rotate(${currentAngle.current}deg)`;
      console.log(`Current Angle: ${currentAngle.current}`);
    }
    animationFrame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleMouseDown = () => {
      isDragging.current = true;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      targetAngle.current = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      const centerX = window.innerWidth / 2;
      const centerY = 0;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const angleRad = Math.atan2(dy, dx);
      let angleDeg = angleRad * (180 / Math.PI);
      angleDeg -= 90;

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
  }, [isOn]);


  return (
    <div className={`${styles.lampContainer}  hidden dark:flex`} ref={lampRef}  style={{ cursor: isDragging.current ? 'grabbing' : 'grap' }}>
      {isOn ? (
        <Image onClick={() => setIsOn(false)} className={styles.lamp} src="/lampOn.png" alt="Lamp" width={200} height={500} 
         
         />
      ) : (
        <Image onClick={() => setIsOn(true)} className={styles.lamp} src="/lamp.png" alt="Lamp" width={200} height={500} />
      )}
      {isOn && <div id='light' className={styles.lampShade}></div>}
    </div>
  );
}
