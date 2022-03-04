import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar.js'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-black min-h-screen flex max-w-[1500px] mx-auto'>
        <Sidebar />
        {/* sidebar */}
        {/* Feed */}
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  )
}

export default Home
