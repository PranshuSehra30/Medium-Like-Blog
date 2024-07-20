import { memo } from "react";

const Quote = () => {
  return (
    <div className="h-screen bg-slate-200 flex justify-center items-center">
      <div className=" w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <blockquote className=" text-left font-semibold text-xl lg:text-2xl text-gray-800 italic border-l-4 border-blue-500 pl-4">
          "You don't have to become something you're not to be better than you were."
        </blockquote>
        <div className="mt-4 text-left text-lg font-medium text-gray-900">
          Tony Stubblebine
        </div>
        <div className="text-left text-md text-gray-500">
            
          CEO, Medium .
        </div>
      </div>
    </div>
  );
};

export default memo(Quote);
