import Image from "next/image";
import NavBar from "../components/common/nav-bar/nav-bar";
import Hero from "./components/hero/hero";
import { FiltersSidebar } from "./components/filters-sidebar/filters-sidebar";

export default async function JobsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b text-white bg-muted">
      <NavBar />
      <section>
        <Hero />
        <FiltersSidebar />
      </section>
    </main>
  );
}
