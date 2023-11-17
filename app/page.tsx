import Image from 'next/image'

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-0">

      <ul className="w-24 min-w-full flex justify-between bg-white pt-2 pb-2">
        <div className="flex-row pl-10">
          <li><Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/ASEA Logo Black.svg"
          alt="ASEA Logo"
          width={100}
          height={25}
          priority
        /></li>
        </div>
        <div className="flex flex-row items-center">
          <li className="mr-6 px-8">
            <a className="text-gray-500 hover:text-blue-800" href="#">Products</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-gray-500 hover:text-blue-800" href="#">Opportunity</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-gray-500 hover:text-blue-800" href="#">Science</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-gray-500 hover:text-blue-800" href="#">Company</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-gray-500 hover:text-blue-800" href="#">Discover</a>
          </li>
        </div>
        <div className="flex flex-row items-center pr-10">
          <li className="mr-6">
            <a className="text-black-500 hover:text-blue-800" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </a>
          </li>
          <li className="mr-6">
            <a className="text-black-500 hover:text-blue-800" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            </a>
          </li>
          <li className="mr-6"><a className="text-gray-500 hover:text-blue-800" href="#">EN</a></li>
        </div>
      </ul>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>



      <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left pl-10 pr-10">
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="flex flex-row">
          <span><a href="#!" className="text-gray-500 hover:text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            </a>
          </span>
          <span>&nbsp;</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <span>&nbsp;</span>
          <span><a href="#!" className="text-gray-500 hover:text-blue-800">Products</a></span>
          <span>&nbsp;</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <span>&nbsp;</span>
          <span><a href="#!" className="text-gray-500 hover:text-blue-800">RENU28</a></span>
        </div>

        <div className="flex justify-center">
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg> */}
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg> */}
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fill-rule="evenodd"
                clip-rule="evenodd" />
            </svg> */}
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg> */}
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg> */}
          </a>
          <a href="#!" className="text-neutral-600 dark:text-neutral-200">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg> */}
          </a>
        </div>
        </div>

        <div className="mx-5 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">

            <div className="">
              <h6
                className="mb-5 flex items-center justify-center font-semibold uppercase md:justify-start">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-4 w-4">
                  <path
                    d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg> */}
                TW elements
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div className="">
              <h6
                className="mb-5 flex items-center justify-center font-semibold uppercase md:justify-start">
                Products
              </h6>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">ASEA Redox Supplement</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">RENU28</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">RENUAdvanced</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">ASEA Redox Clay Mask</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">Cell Performance</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">ASEA VIA</a>
              </p>
            </div>

            <div className="">
              <h6
                className="mb-5 flex justify-center font-semibold uppercase md:justify-start">
                Opportunity
              </h6>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">Earn</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">Events</a>
              </p>
            </div>

            <div className="">
              <h6
                className="mb-5 flex justify-center font-semibold uppercase md:justify-start">
                Science
              </h6>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">Science</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">Science</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">Science</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">Science</a>
              </p>
            </div>

            <div className="">
              <h6
                className="mb-5 flex justify-center font-semibold uppercase md:justify-start">
                Company
              </h6>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">Contact us</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">About us</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">Leadership</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">Careers</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">Mission Vision Values</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-blue-800">Advisory Council</a>
              </p>
            </div>

            <div>
              <h6
                className="mb-5 flex justify-center font-semibold uppercase md:justify-start">
                Discover
              </h6>
              <p className="mb-5 flex items-center justify-center md:justify-start">
                <a href="#!" className="text-gray-500 hover:text-blue-800">Press release</a>
              </p>
              <p className="mb-5 flex items-center justify-center md:justify-start">
                <a href="#!" className="text-gray-500 hover:text-blue-800">Media mention</a>
              </p>
            </div>
          </div>
        </div>


        <div className="bg-neutral-200 p-8 text-center dark:bg-neutral-700">
          <span>© 2023 ASEA LLC, All rights reserved.</span>
        </div>
      </footer>
      
    </main>
  )
}
