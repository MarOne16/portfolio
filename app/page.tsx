import React from 'react';
// import {Marone} from '@/components';
import Marone from '@/components/marone/Marone';

export default function page() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[ url('https://www.transparenttextures.com/patterns/concrete-wall.png'])">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div> */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
      <Marone />
    </div>
  );
}