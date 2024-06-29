import Image from "next/image";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b text-white">
      <Image src='/collaby-logo.svg' width={200} height={200} alt="logo" />
    </main>
  );
}

