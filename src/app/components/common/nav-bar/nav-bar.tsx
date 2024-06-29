import React from "react";
import Link from "next/link";
import { List, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVBAR_ITEMS } from "@/lib/constants";

import { auth } from "@clerk/nextjs/server";
import { SignedIn, SignInButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const NavbarLinks = () => (
  <>
    {NAVBAR_ITEMS.map((item) => (
      <li className="text-black">
        <Button variant="ghost" asChild>
          <Link className="flex gap-4" href={item.href}>
            <item.icon />
            {item.label}
          </Link>
        </Button>
      </li>
    ))}
  </>
);
export default async function NavBar() {
  const { userId } = auth();
  return (
    <nav className="flex w-full bg-white px-3 py-2 shadow md:shadow-md ">
      <ul className="w-full gap-4 hidden md:flex">
        <li>
          <span className="text-primary text-2xl font-semibold">Collably</span>
        </li>
        <div className="flex-1" />
        <NavbarLinks />
        <div className="flex-1" />
        <Button asChild>
          <li>Sign Up</li>
        </Button>
      </ul>
      <div>
        {" "}
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="justify-center md:hidden">
              <List className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="h-full w-10/12 flex flex-col md:hidden">
            <SheetHeader>
              <span className="text-primary text-2xl font-semibold">
                Collably
              </span>

              {/* <SheetClose> */}
              {/*   <X /> */}
              {/* </SheetClose> */}
            </SheetHeader>
            <ul>
              <NavbarLinks />
            </ul>
            <div className="flex-1" />
            <SheetFooter className="flex flex-col gap-3">
              {!userId && (
                <>
                  <SignInButton>
                    <Button variant="outline" className="text-black">
                      Login
                    </Button>
                  </SignInButton>
                  <Button className="text-white">Register</Button>
                </>
              )}
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <span className="text-primary text-2xl font-semibold">Collably</span>
      </div>
    </nav>
  );
}
