import Image from "next/image";
import NavBar from "../components/common/nav-bar/nav-bar";
import Hero from "./components/hero/hero";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b text-white">
      <NavBar />
      <Hero />
      {/* <Image src="/collaby-logo.svg" width={200} height={200} alt="logo" /> */}
    </main>
  );
}
