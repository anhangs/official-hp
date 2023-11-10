import Image from "next/image";
import ClientCounter from "@/app/_components/sample/clientCounter/clientCounter";
import ServerCounter from '@/app/_components/sample/serverCounter/serverCounter'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientCounter initialCount={0} />
      <ServerCounter initialCount={0} />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a>live</a>
      </div>
    </main>
  );
}
