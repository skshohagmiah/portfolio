'use client';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center mt-8 md:mt-0" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <div className="container relative z-10 mx-auto text-center text-white px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4">Hi, I&apos;m <span className="text-blue-400">Shohag Miah</span></h1>
        <p className="text-lg md:text-2xl lg:text-3xl mb-4">A Passionate <span className="text-green-400">Web Developer</span> and Learner</p>
        <p className="text-md md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
          I specialize in creating <span className="">beautiful</span>, <span className="">responsive</span>, and <span className="">user-friendly</span> websites. Let&apos;s work together to build something amazing that stands out in the digital world.
        </p>
        <div className="space-x-4 flex flex-col md:flex-row justify-center items-center">
          <Link href="#about">
            <button className="mb-4 md:mb-0 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
              Learn More About Me
            </button>
          </Link>
          <Link href="#contact">
            <button className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <Link href="https://github.com/skshohagmiah" passHref>
            <div className="cursor-pointer text-gray-300 hover:text-white transition duration-300">
              <FaGithub size={30} />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/shohag-miah-9483802a7/" passHref>
            <div className="cursor-pointer text-gray-300 hover:text-white transition duration-300">
              <FaLinkedin size={30} />
            </div>
          </Link>
          <Link href="https://x.com/shohagmiah84832" passHref>
            <div className="cursor-pointer text-gray-300 hover:text-white transition duration-300">
              <FaTwitter size={30} />
            </div>
          </Link>
        </div>
      </div>
        <div className="absolute bottom-40 md:bottom-10 left-1/2 transform -translate-x-1/2 text-gray-300 hidden md:block mt-8">
          <a href="#about" className="flex flex-col items-center">
            <span className="animate-bounce p-2">↓</span>
            <span className="">Scroll Down</span>
          </a>
        </div>
    </section>
  );
}
