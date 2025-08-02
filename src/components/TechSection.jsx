"use client";

import Image from 'next/image';
import React, { useState } from 'react';
const TechSection = () => {


    const [hoveredIndex, setHoveredIndex] = useState(null);
    const technologies = [
        { src: "/icons/github-svgrepo-com.svg", alt: "GitHub" },
        { src: "/icons/aws-svgrepo-com.svg", alt: "AWS" },
        { src: "/icons/express-svgrepo-com.svg", alt: "Express.js" },
        { src: "/icons/figma-svgrepo-com.svg", alt: "Figma" },
        { src: "/icons/csharp-svgrepo-com.svg", alt: "C#" },
        { src: "/icons/css3-svgrepo-com.svg", alt: "CSS3" },
        { src: "/icons/javascript-svgrepo-com.svg", alt: "JavaScript" },
        { src: "/icons/linux-svgrepo-com.svg", alt: "Linux" },
        { src: "/icons/node-js-svgrepo-com.svg", alt: "Node.js" },
        { src: "/icons/react-svgrepo-com.svg", alt: "React" },
        { src: "/icons/sql-svgrepo-com.svg", alt: "SQL" },
        { src: "/icons/tailwind-svgrepo-com.svg", alt: "Tailwind CSS" },
        { src: "/icons/django.svg", alt: "Django" },
        { src: "/icons/html.svg", alt: "HTML5" },
        { src: "/icons/java.svg", alt: "Java" },
        { src: "/icons/python.svg", alt: "Python" },
        { src: "/icons/postgresql.svg", alt: "PostgreSQL" },
      ];

    return (
        <section className="relative flex flex-col items-center justify-center my-auto w-screen mb-8 p-4 gap-8">
            <div>
                <h2 className="text-center font-bold text-5xl">My Technologies</h2>
            </div>
            <div className="max-w-7xl flex flex-wrap items-center justify-center gap-4">
                {technologies.map((tech, index) => (
                    <div
                    key={tech.src}
                    className={`group relative flex flex-col items-center justify-center cursor-pointer rounded-lg transition-all duration-300 ease-in-out
                                sm:scale-80 md:scale-100 hover:shadow-lg ${hoveredIndex === index ? 'z-10' : ''}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Image
                            src={tech.src}
                            alt={tech.alt}
                            width={80}
                            height={80}
                            className={`transition-transform duration-150 ease-in-out ${hoveredIndex === index ? 'scale-165' : ''} transform-gpu transform-origin-bottom`} />
                    </div>
                ))}
            </div>
        </section>
    )

}


export default TechSection