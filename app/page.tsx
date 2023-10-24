'use client'

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#87BD40] flex h-screen items-center justify-center">
      <Image src={'/logo.png'} alt={'Image'} width={500} height={500} />
    </main>
  )
}
