import Link from 'next/link';
import React from 'react';

const TheHeader = () => {
    return (
        <header>
            <div>
            <Link href='/'>HOME</Link>
            <Link href='/about'>ABOUT</Link>
            <Link href='/blog'>BLOG</Link>
            </div> 
        </header>
    );
};

export default TheHeader;