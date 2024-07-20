import { Link } from "react-router-dom";
import { HomeAppbar } from "../components/Appbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HomeAppbar />
      <div className=" border-black ">
        <div className="ml-8 flex flex-col gap-10 pb-20">
          <div className="text-[70px] font-extrabold">Human <br />
          Stories & Ideas</div>
          <p className="text-3xl">
          Unlock a World of Ideas: <br />
          <br></br> Discover Stories, Expertise, and Insights <br /> from Writers on Every Topic.
           
          </p>
          <div>
            <Link to={"/signin"}>
              <button className="bg-black hover:bg-white border border-black hover:text-black text-white rounded-3xl px-5 py-2.5">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="pl-9 mt-10  border-t">
        <p className="font-bold text-[50px]">Explore, Engage, Evolve 
            
        </p>
        <br></br>
        <p className="text-[17px]">
          {" "}
           <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome <br>
        </br> Your Digital Hub of Enriching Content and Thoughtful Insights
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Embark on a journey of discovery and delve into a world brimming with knowledge, inspiration, and creativity.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Discover Our Categories</h2>
      <p className="text-lg text-gray-700 mb-4">
        Explore a diverse array of topics tailored to pique your interests and satisfy your curiosity:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li className="text-lg text-gray-700">
          <strong>Depth of Content:</strong> Enjoy meticulously researched and thoughtfully crafted articles offering in-depth analysis and actionable advice.
        </li>
        <li className="text-lg text-gray-700">
          <strong>Diverse Perspectives:</strong> Gain insights from a multitude of viewpoints and experiences shared by our diverse roster of writers and contributors.
        </li>
        <li className="text-lg text-gray-700">
          <strong>Interactive Engagement:</strong> Participate in meaningful discussions, exchange ideas, and build connections within our vibrant community.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Start Your Journey Today</h2>
      <p className="text-lg text-gray-700 mb-6">
        Begin a transformative journey of exploration and growth with our blog. Whether you're seeking practical solutions, creative inspiration, or thought-provoking insights, our platform is your ultimate destination for personal and professional development. Join us and elevate your experience today.
      </p>
      </p>
      </div>
      

      <Footer />
    </>
  );
};

export default Home;