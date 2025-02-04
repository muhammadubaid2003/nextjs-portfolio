import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='logo'>Portfolio</h1>
      <nav>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#education">Education</Link>
        <Link href="#contact">Contact</Link>
        
      </nav>
    </header>
  );
};

export default Header;
