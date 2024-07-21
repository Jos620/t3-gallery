import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Images } from "./_components/images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <SignedOut>
        <p className="text-center text-2xl">Please sign in above</p>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </div>
  );
}
