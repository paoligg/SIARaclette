'use client'
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center py-4">
      <div>
        <a href="/" className="text-2xl font-bold">Ballon tz'or</a>
      </div>
      <div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-end">
          <a href="/about" className="text-xl">About</a>
          <a href="/contact" className="text-xl">Contact</a>
        </div>
      )}
    </nav>
  );
}