import { BackgroundGradient } from "./background-gradient";

interface Props {
  img: string;
  name: string;
  description: string;
}
export function BackgroundGradientCard({ img, name, description }: Props) {
  return (
    <BackgroundGradient className="rounded-[22px] flex flex-col justify-center items-center p-1 sm:p-10 bg-white dark:bg-zinc-900">
      <img
        src={img}
        alt="jordans"
        height="400"
        width="400"
        className="object-contain"
      />
      <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        {name}
      </p>

      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </BackgroundGradient>
  );
}
