export function Logo() {
  return (
    <div className="flex h-11 w-10 flex-col gap-[2px] rounded-sm bg-foreground p-[2px]">
      <div className="h-full rounded-[3px] bg-background"></div>
      <div className="flex flex-col gap-[1px]">
        <div className="h-1 w-[55%] rounded-[3px] bg-background"></div>
        <div className="h-1 w-[30%] rounded-[3px] bg-background"></div>
      </div>
    </div>
  );
}
