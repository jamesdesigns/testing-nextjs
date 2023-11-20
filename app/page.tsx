import Image from 'next/image'

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-0">

      <ul className="container xl-auto flex justify-between bg-white pt-2 pb-2">
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
        <div className="flex flex-row items-center font-light">
          <li className="mr-6 px-8">
            <a className="text-gray-500 hover:text-sky-600" href="#">Shop</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-gray-500 hover:text-sky-600" href="#">Opportunity</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-gray-500 hover:text-sky-600" href="#">Science</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-gray-500 hover:text-sky-600" href="#">Company</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-gray-500 hover:text-sky-600" href="#">Discover</a>
          </li>
        </div>
        <div className="flex flex-row items-center font-light pr-10">
          <li className="mr-6">
            <a className="text-black-500 hover:text-sky-600" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" className="w-6 h-6 ml-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <span className="text-xs">&nbsp;Search</span>
            </a>
          </li>
          <li className="mr-6">
            <a className="text-black-500 hover:text-sky-600" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" className="w-6 h-6 ml-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span className="text-xs">&nbsp;Log In</span>
            </a>
          </li>
          <li className="mr-6"><a className="text-black-500 hover:text-sky-600" href="#"><img src="https://aseaglobal.com/wp-content/uploads/2023/02/US-flag.jpg" alt="EN" width="24" height="auto" /><span className="text-xs">&nbsp;EN</span></a></li>
        </div>
      </ul>
      

    <div className="relative flex items-start">
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}

        <div className="flex items-start flex-row font-light content-start z-[10]">
            <span><a href="#!" className="text-gray-500 hover:text-sky-600">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg> */}
              <img src="icons8-home.svg" width="24" height="auto" />
              </a>
            </span>
            <span>&nbsp;</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <span>&nbsp;</span>
            <span><a href="#!" className="text-gray-500 hover:text-sky-600">Shop</a></span>
            <span>&nbsp;</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <span>&nbsp;</span>
            <span><a href="#!" className="text-gray-500 hover:text-sky-600">RENU28</a></span>
        </div>
      </div>

      <footer className="container xl-auto bg-white font-light text-center text-neutral-600 dark:text-neutral-200 lg:text-left pl-10 pr-10">
        <div className="mx-5 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">

            <div className="">
              <h6
                className="mb-5 flex items-center justify-center font-semibold uppercase md:justify-start">
                Shop
              </h6>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">ASEA Redox Supplement</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">RENU28</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">RENUAdvanced</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">ASEA Redox Clay Mask</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">Cell Performance</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">ASEA VIA</a>
              </p>
            </div>

            <div className="">
              <h6
                className="mb-5 flex justify-center font-semibold uppercase md:justify-start">
                Opportunity
              </h6>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">Earn</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">Events</a>
              </p>
            </div>

            <div className="">
              <h6
                className="mb-5 flex justify-center font-semibold uppercase md:justify-start">
                Science
              </h6>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">Science</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">Science</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">Science</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">Science</a>
              </p>
            </div>

            <div className="">
              <h6
                className="mb-5 flex justify-center font-semibold uppercase md:justify-start">
                Company
              </h6>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">Contact us</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">About us</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">Leadership</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">Careers</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">Mission Vision Values</a>
              </p>
              <p className="mb-5">
                <a href="#!" className="text-gray-500 hover:text-sky-600">Advisory Council</a>
              </p>
            </div>

            <div>
              <h6
                className="mb-5 flex justify-center font-semibold uppercase md:justify-start">
                Discover
              </h6>
              <p className="mb-5 flex items-center justify-center md:justify-start">
                <a href="#!" className="text-gray-500 hover:text-sky-600">Press release</a>
              </p>
              <p className="mb-5 flex items-center justify-center md:justify-start">
                <a href="#!" className="text-gray-500 hover:text-sky-600">Media mention</a>
              </p>
            </div>
          </div>
        </div>


        <div className="bg-gray-100 pt-8 pb-8 text-xs text-center dark:bg-neutral-700">
          <span>© 2023 ASEA LLC, All rights reserved.</span>
        </div>
      </footer>
      
    </main>
  )
}
