import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-muted border-b py-4">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <div className="h-10 w-10 rounded-lg bg-white"></div>
        </Link>

        <nav>
          <Link href="/signin">
            <Button variant="link">Sign in</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
