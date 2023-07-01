import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Button from "@components/elements/button/Button";
import Link from "next/link";

export default async function MainNav() {
  return (
    <header dir="ltr" className="sticky  top-0 left-0 bg-background-foreground">
      <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">
          medications
        </Link>

        <div>
          <Button>
            <HiOutlineShoppingCart />
            سلة المشتريات
          </Button>
        </div>
      </nav>
    </header>
  );
}
