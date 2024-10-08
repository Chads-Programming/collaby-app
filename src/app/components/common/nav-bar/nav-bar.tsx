import React from "react";
import Link from "next/link";
import { List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVBAR_ITEMS } from "@/lib/constants";

import { auth } from "@clerk/nextjs/server";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavbarLinks = () => (
  <>
    {NAVBAR_ITEMS.map((item) => (
      <li className="text-black" key={item.href}>
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

export const NavBar = async () => {
  const { userId } = auth();
  return (
    <nav className="flex w-full border-b bg-white px-3 py-2 shadow md:px-8 md:shadow-md">
      <ul className="hidden w-full gap-4 md:flex md:items-center">
        <Link href="/">
          <span className="text-2xl font-semibold text-primary">Collably</span>
        </Link>
        <div className="flex-1" />
        <NavbarLinks />
        <div className="flex-1" />
        {!userId ? (
          <li>
            <SignInButton>
              <Button>Log In</Button>
            </SignInButton>
          </li>
        ) : (
          <SignOutButton>
            <Button>Sign Out</Button>
          </SignOutButton>
        )}
      </ul>
      <div className="flex w-full items-center justify-between md:hidden">
        <span className="text-2xl font-semibold text-primary">Collably</span>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="justify-center md:hidden">
              <List className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex h-full w-10/12 flex-col md:hidden">
            <SheetHeader>
              <span className="text-2xl font-semibold text-primary">
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
      </div>
    </nav>
  );
};
