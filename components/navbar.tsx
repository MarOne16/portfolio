import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='w*full h-12 flex items-center justify-end gap-2 pr-1 bg-white'>
            <Link href={'/about'} className='text-xl font-bold text-black'>
                    About
            </Link>
            <Link href={'/contact'} className='text-xl font-bold text-black' >
                    contact
            </Link>
            <Link href={'/projects'} className='text-xl font-bold text-black' >
                    projects
            </Link>
        </div>
    );
}

export default Navbar;
