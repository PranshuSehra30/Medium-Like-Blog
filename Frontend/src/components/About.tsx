import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa'; // Correct import
const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back to Home Button */}
      <Link to={"/"}>
        <button className="bg-black hover:bg-white border border-black hover:text-black text-white rounded-md px-5 py-2.5 mb-8">
          <div className="flex justify-center items-center gap-2">
            <IoMdArrowRoundBack /> Home
          </div>
        </button>
      </Link>
      
      {/* Our Story Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="text-lg text-slate-600">
          Welcome to Medium! 
          <br></br>
          Our journey started with a simple idea -
          <br>
          </br> to create a platform where writers and readers can connect and share their stories. 
          <br></br>Our team is passionate about building a community where ideas can flourish and creativity is celebrated.
        </p>
      </div>

      {/* History Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-2">History</h2>
        <p className="text-slate-600">
          Founded in 2023, Medium began as a small startup with a big vision. Over the years, we've grown into a thriving platform with millions of readers and writers from around the world. Our dedication to quality content and user experience has been the cornerstone of our success.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
        <p className="text-slate-600">
          Our mission is to empower individuals to share their stories and connect with a global audience. We believe in the power of words and aim to provide a platform that fosters creativity, innovation, and thoughtful discussion.
        </p>
      </div>

      {/* Team Section */}
      
        
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-semibold mb-2">About the Developer</h2>
        <p className="text-slate-600">Developed by [Pranshu Sehra]</p>
        <a
          href="https://github.com/PranshuSehra30/Medium-Like-Blog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 text-blue-500 hover:underline"
        >
          <FaGithub className="mr-2" /> Visit My GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
