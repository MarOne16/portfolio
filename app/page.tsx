import React from 'react';
import Lamp from '@/components/lamp/lamp';
import Marone from '@/components/marone/Marone';

export default function page() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[ url('https://www.transparenttextures.com/patterns/concrete-wall.png'])">
      <Marone />
    </div>
  );
}