import { Button } from "./moving-border";

interface Props {
    title:string
}

export function MovingBorderButton({title}:Props) {
  return (
    <div>
      <Button
        borderRadius="2rem"
        className=":bg-slate-900 text-xl p-2 font-bold border-3 text-white border-neutral-200 dark:border-slate-800"
      >
     {title}
      </Button>
    </div>
  );
}
