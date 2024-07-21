import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-muted py-4">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <div className="h-10 w-10 rounded-lg bg-white"></div>
        </Link>

        <nav>
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
}
