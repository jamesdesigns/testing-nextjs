import Image from 'next/image'

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-0">

      <ul className="container xl-auto flex justify-between bg-white pt-4 pb-4">
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
            <a className="text-zinc-700 hover:text-sky-600" href="#">Shop</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-zinc-700 hover:text-sky-600" href="#">Science</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-zinc-700 hover:text-sky-600" href="#">Opportunity</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-zinc-700 hover:text-sky-600" href="#">Company</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-zinc-700 hover:text-sky-600" href="#">Discover</a>
          </li>
        </div>
        <div className="flex flex-row items-center font-light pr-10">
          <li className="mr-5">
            <a className="text-zinc-700 hover:text-sky-600" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" className="w-6 h-6 ml-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <span className="text-xs">&nbsp;Search</span>
            </a>
          </li>
          <li className="mr-6">
            <a className="text-zinc-700 hover:text-sky-600" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" className="w-6 h-6 ml-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span className="text-xs">&nbsp;Log In</span>
            </a>
          </li>
          <li className="mr-6"><a className="text-zinc-700 hover:text-sky-600" href="#"><img src="https://aseaglobal.com/wp-content/uploads/2023/02/US-flag.jpg" alt="EN" width="24" height="auto" /><span className="text-xs">&nbsp;EN</span></a></li>
          <li className="mr-6"><a className="text-zinc-700 hover:text-sky-600" href="#"><img src="icons8-contrast-100.png" alt="Contrast Switch" width="24" height="auto" /><span className="text-xs">Light</span></a></li>
        </div>
      </ul>
      

    <div className="relative flex items-start">
        <div className="flex items-start flex-row font-light content-start z-[10]">
            <span><a href="#" className="text-zinc-500 hover:text-sky-600">
              <img src="icons8-home.svg" width="24" height="auto" />
              </a>
            </span>
            <span>&nbsp;</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <span>&nbsp;</span>
            <span><a href="#!" className="text-zinc-500 hover:text-sky-600">Shop</a></span>
            <span>&nbsp;</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <span>&nbsp;</span>
            <span><a href="#!" className="text-zinc-500 hover:text-sky-600">RENU28</a></span>
        </div>
      </div>


      <footer className="container xl-auto bg-white font-light text-center text-neutral-600 dark:text-neutral-200 lg:text-left pl-10 pr-10">
        <div className="mx-5 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">

            <div className="">
              <h6
                className="mb-6 flex items-center justify-center font-semibold uppercase md:justify-start">
                Shop
              </h6>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">ASEA Redox Supplement</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">RENU28</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">RENUAdvanced</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">ASEA Redox Clay Mask</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">Cell Performance</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">ASEA VIA</a>
              </p>
            </div>


            <div className="">
              <h6
                className="mb-6 flex justify-center font-semibold uppercase md:justify-start">
                Science
              </h6>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">Science Overview</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">Redox Cell Signaling</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">Science</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">Science</a>
              </p>
            </div>


            <div className="">
              <h6
                className="mb-6 flex justify-center font-semibold uppercase md:justify-start">
                Opportunity
              </h6>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">Earn</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">Events</a>
              </p>
            </div>

            <div className="">
              <h6
                className="mb-6 flex justify-center font-semibold uppercase md:justify-start">
                Company
              </h6>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">Contact us</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">About us</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">Leadership</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">Careers</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">Mission Vision Values</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">Advisory Council</a>
              </p>
            </div>

            <div>
              <h6
                className="mb-6 flex justify-center font-semibold uppercase md:justify-start">
                Discover
              </h6>
              <p className="mb-3 flex items-center justify-center md:justify-start">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">Press release</a>
              </p>
              <p className="mb-3 flex items-center justify-center md:justify-start">
                <a href="#!" className="text-zinc-700 hover:text-sky-600">Media mention</a>
              </p>
            </div>
          </div>
        </div>


        <div className="bg-zinc-100 pt-8 pb-8 text-sm text-center dark:bg-neutral-700">
          <span>© 2023 ASEA LLC, All rights reserved.</span>
        </div>
      </footer>
      
    </main>
  )
}
