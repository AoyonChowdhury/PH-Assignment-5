import React, { use } from "react";
import type { ITechnologyType } from "../Types/ITechnologyType";

const TechnologyCards = ({ technologyPromise }) => {
  const data = use(technologyPromise);
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-5xl mb-5">Explore the Technologies</h2>
      <p>Add any technologies you like — each one can be added only once.</p>

      <div className="grid grid-cols-4 gap-4 mt-6">
        {/* Tech cards take up 3 of the 4 columns */}
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {data.map((technology: ITechnologyType) => {
            return (
              <div
                key={technology.id}
                className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-cyan-500 text-4xl">
                    <img className="w-10 h-10" src={technology.icon} />
                  </div>
                  <span className="bg-blue-50 text-blue-500 text-xs font-medium px-3 py-1 rounded-full">
                    {technology.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {technology.name}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {technology.description}
                </p>

                <div className="flex items-center gap-3 text-sm mb-5">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-xs font-medium">
                    {technology.category}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {technology.difficulty}
                  </span>
                  <span className="flex items-center gap-1 text-gray-700 text-xs font-medium ml-auto">
                    <span className="text-yellow-400">★</span> {technology.rating}
                  </span>
                </div>

                <button className="w-full bg-gray-900 text-white font-medium py-3 rounded-xl hover:bg-gray-800 transition cursor-pointer">
                  Add to Stack
                </button>
              </div>
            );
          })}
        </div>

        <div className="col-span-1 bg-white rounded-2xl border border-gray-100 p-6 h-fit sticky top-5">
          <h3 className="text-lg font-bold text-gray-900 mb-1">Your Stack</h3>
          <p className="text-gray-400 text-sm mb-4">No technologies selected yet.</p>
          <div className="border border-dashed border-gray-200 rounded-xl h-24 flex items-center justify-center">
            <span className="text-gray-300 text-sm">Your stack is empty.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCards;