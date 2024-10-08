"use client";

import { Logo } from "@/components/logo";
import { UploadButton } from "@/components/uploadthing/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="border-b border-muted py-4">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="flex">
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh();
              }}
            />
            <UserButton />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
}
