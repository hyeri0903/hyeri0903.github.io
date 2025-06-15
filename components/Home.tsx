'use client';

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center text-center mx-auto px-4 py-8 dark:bg-black transition-colors">
      <div>
        <h1 className="text-left text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white w-full">
          Hi, <br />
          I'm{' '}
          <motion.div
            className="relative inline-block"
            whileHover="hovered"
            initial="initial"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-extrabold hover:scale-110 hover:text-blue-400 cursor-pointer">
              Hyeri Jung
            </span>
            <motion.span
              variants={{
                initial: { opacity: 0, scale: 0.5, rotate: 0 },
                hovered: { opacity: 1, scale: 1.5, rotate: 15 }
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute -top-4 -right-3 text-red-500 text-2xl z-10 pointer-events-none"
            >
              ❤️
            </motion.span>
            .
          </motion.div>
          <br/>
          Web Developer
        </h1>

        <p className="mt-5 text-left text-3xl lg:text-5xl leading-relaxed text-gray-600 dark:text-gray-300 font-normal">
           Backend developer specializing in web services.
        </p>
      </div>
      <a href="#profile" aria-label="Scroll to about section" className="absolute bottom-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </a>
    </section>
  );
}
