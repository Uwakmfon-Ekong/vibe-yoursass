'use client'

import Footer from '@/common/footer'
import Header from '@/common/navbar'
import Link from 'next/link'


export default function NotFound() {
 
  return (
    <div className="flex flex-col min-h-screen ">
      
      
      <Header />

     
      <main className="py-10 flex items-center justify-center px-4">
        <div className="text-center">
          <h1
            className="text-9xl font-extrabold text-primary mb-4"
           
          >
            404
          </h1>

          <h2
            className="text-3xl sm:text-4xl font-bold text-primary mb-6"
          
          >
            Page Not Found
          </h2>

          <p
            className="text-lg text-neutral-400 mb-8"
            
          >
            Oops! The page you are looking for does not exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-full transition transform hover:scale-105"
           
           
          >
            Go Back Home
          </Link>
        </div>
      </main>

      
      <Footer />
    </div>
  )
}
