import { Meteors } from "./meteors";
interface Props {
  name: string;
  description: string;
}

export function MeteorsCard({ name, description }:Props) {
  return (
    <div className="">
      <div className=" w-full relative max-w-screen-md z-10">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-white dark:bg-slate-950 border dark:border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-black dark:text-white mb-4 relative z-50">
            {name}
          </h1>

          <p className="font-normal text-base text-slate-900 dark:text-slate-500 mb-4 relative z-50">
            {description}
          </p>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-black dark:text-gray-300">
            Explore
          </button>

          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
