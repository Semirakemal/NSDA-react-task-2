import React from "react";
import DailyQuranVerse from "./Daily";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100 text-center p-6">
      
      <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
        السلام عليكم ورحمة الله وبركاته
      </h1>

      
      <p className="text-gray-700 text-lg max-w-2xl mb-8">
        Manage your daily goals with intention, discipline, and remembrance of
        Allah ﷻ.
      </p>

      
      <div className="w-full max-w-xl">
        <DailyQuranVerse />
      </div>
    </div>
  );
}

export default Home;