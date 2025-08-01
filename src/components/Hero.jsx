// components/Hero.jsx
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const Hero = () => {
  const finalText = "Hi I'm Juwon";
  const [displayText, setDisplayText] = useState('');
  const [isDecoding, setIsDecoding] = useState(true);
  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() => {
        return finalText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            if (letter === ' ') return ' ';
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('');
      });
      
      if (iteration >= finalText.length) {
        clearInterval(interval);
        setIsDecoding(false);
      }
      
      iteration += 1; 
    }, 100);

    return () => clearInterval(interval);
  }, [finalText]);

  return (
    <>
      <section className="relative flex items-center justify-center my-auto w-screen h-screen">
        <div className="absolute top-2 right-2 flex flex-row gap-2 justify-center items-center">
            <a
                href="https://github.com/almightyprogrammer"
                target="_blank"
                rel="noopener noreferrer"
            >
            <Image
                src="/icons/github-svgrepo-com.svg" 
                alt="GitHub Icon"
                width={30} 
                height={30} 
            />
            </a>

            <a href="mailto:lehman0308@gmail.com?subject=Inquiry from your website">
            <Image
                src="/icons/gmail.svg"
                alt="Gmail Icon"
                width={30}
                height={22}
            />
            </a>

            <a href="https://www.linkedin.com/in/hanjws/" target="_blank" rel="noopener noreferrer">
            <Image
                src="/icons/LinkedIn_icon.svg"
                alt="Linkedin Icon"
                width={30}
                height={30}
            />
            </a>

            

        </div>
        <div className="max-w-7xl px-4 py-4 flex flex-col items-center justify-center">
          <div className="space-y-6">
            <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center tracking-wider">
              {displayText}
              {isDecoding && <span className="animate-pulse">_</span>}
            </h1>
            
            <h2 className={`text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl transition-all duration-1000 ${
              isDecoding ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              A full-stack developer graduating Nov 2025 in CS & Math from UOA
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;