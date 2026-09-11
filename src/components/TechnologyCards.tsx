import React, { use, useState } from "react";
import type { ITechnologyType } from "../Types/ITechnologyType";
import { toast } from "react-toastify";
import { RiCloseLargeLine } from "react-icons/ri";

const TechnologyCards = ({ technologyPromise }): Promise<ITechnologyType> => {
  const data = use(technologyPromise);
  const [addedIds, setAddedIds] = useState<string[]>([]);

  const addedTechnologies = data.filter((technology: ITechnologyType) =>
    addedIds.includes(technology.id),
  );

  const handleRemove = (id: string) => {
    setAddedIds(addedIds.filter((addedId) => addedId !== id));
    toast.info(`${id} is removed from the stack !`);
  };

  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-5xl mb-5">Explore the <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]'>Technologies</span></h2>
      <p>Add any technologies you like — each one can be added only once.</p>

      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {data.map((technology: ITechnologyType) => {
            const isAdded = addedIds.includes(technology.id);

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
                    <span className="text-yellow-400">★</span>{" "}
                    {technology.rating}
                  </span>
                </div>

                {!isAdded && (
                  <button
                    onClick={() => {
                      setAddedIds([...addedIds, technology.id]);
                      toast.success(`${technology.name} added to stack!`);
                    }}
                    className="w-full bg-gray-900 text-white font-medium py-3 rounded-xl hover:bg-gray-800 transition cursor-pointer"
                  >
                    Add to Stack
                  </button>
                )}
                {isAdded && (
                  <button disabled={true}
                    className="w-full bg-pink-50 text-pink-500 font-medium py-3 rounded-xl">
                    ✓ Added to Stack
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="col-span-1 bg-white rounded-2xl border border-gray-100 p-6 h-fit sticky top-5">
          <h3 className="text-lg font-bold text-gray-900 mb-1">Your Stack</h3>

          {addedTechnologies.length === 0 ? (
            <>
              <p className="text-gray-400 text-sm mb-4">
                No technologies selected yet.
              </p>
              <div className="border border-dashed border-gray-200 rounded-xl h-24 flex items-center justify-center">
                <span className="text-gray-300 text-sm">
                  Your stack is empty.
                </span>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-400 text-sm mb-4">
                {addedTechnologies.length} Technology Selected
              </p>
              <ul className="flex flex-col gap-2 mb-4">
                {addedTechnologies.map((technology: ITechnologyType) => (
                  <li
                    key={technology.id}
                    className="flex items-center justify-between gap-2 border border-gray-100 rounded-xl px-3 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <img className="w-6 h-6" src={technology.icon} />
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {technology.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {technology.category}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemove(technology.id)}
                      className="text-gray-400 hover:text-gray-600 cursor-pointer"
                    >
                      <RiCloseLargeLine />
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  setAddedIds([]);
                  toast.error("Stack Cleared");
                }}
                className="w-full border border-red-200 text-red-500 font-medium py-2 rounded-xl hover:bg-red-50 transition cursor-pointer"
              >
                Remove All
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnologyCards;
