import Head from 'next/head'
import Image from 'next/image'
import Home from './Components/Home'
import Navbar from './Components/Navbar'


export default function Index() {
  return (
    <div className="max-w-[100rem] mx-auto px-8 pt-5 font-['Montserrat'] bg-gradient-to-b from-[#111827] to-[#07000A] text-white">
      <Head>
        <title>Mintify.</title>
        <meta name="description" content="Mintify." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Home />
      </main>
    </div>
  )
}