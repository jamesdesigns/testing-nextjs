import Image from 'next/image'

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-0">

    <div className="fixed bg-white w-full z-50 border-solid border-1 border-gray-600">
      <ul className="container mx-auto flex justify-between bg-white pt-4 pb-4">
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
            <a className="text-zinc-700 hover:text-blue-700" href="#">Shop</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-zinc-700 hover:text-blue-700" href="#">Science</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-zinc-700 hover:text-blue-700" href="#">Opportunity</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-zinc-700 hover:text-blue-700" href="#">Company</a>
          </li>
          <li className="mr-6 px-8">
            <a className="text-zinc-700 hover:text-blue-600" href="#">Discover</a>
          </li>
        </div>
        <div className="flex flex-row items-center font-light pr-10">
          <li className="mr-5">
            <a className="text-zinc-700 hover:text-blue-700" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" className="w-6 h-6 ml-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              {/* <span className="text-xs">&nbsp;Search</span> */}
            </a>
          </li>
          <li className="mr-6">
            <a className="text-zinc-700 hover:text-blue-700" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" className="w-6 h-6 ml-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            {/* <span className="text-xs">&nbsp;Log In</span> */}
            </a>
          </li>
          <li className="mr-6"><a className="text-zinc-700 hover:text-blue-700" href="#"><img src="https://aseaglobal.com/wp-content/uploads/2023/02/US-flag.jpg" alt="EN" width="24" height="auto" />
          {/* <span className="text-xs">&nbsp;EN</span> */}
          </a></li>
          <li className="mr-6"><a className="text-zinc-700 hover:text-blue-700" href="#"><img src="icons8-contrast-100.png" alt="Contrast Switch" width="24" height="auto" />
          {/* <span className="text-xs">Light</span> */}
          </a></li>
        </div>
      </ul>
    </div>
      

    <div className="fixed container xl-auto relative flex items-start pl-10 ml-4 pt-20 mt-10">
        {/* <div className="flex items-start flex-row font-light content-start z-[10] float-left"> */}
        <div className="flex justify-start justify-items-start">
            <span><a href="#" className="text-zinc-500 hover:text-blue-700">
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
            <span><a href="#" className="text-zinc-500 hover:text-blue-700">Shop</a></span>
            <span>&nbsp;</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <span>&nbsp;</span>
            <span><a href="#" className="text-zinc-500 hover:text-blue-700">RENU28</a></span>
        </div>
      </div>

<div className="bg-white w-full">

      <footer className="container mx-auto bg-white font-light text-center text-neutral-600 dark:text-neutral-200 lg:text-left pl-6 pr-6">
        <div className="mx-5 py-16 text-left md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">

            <div className="">
              <h6 className="text-slate-950 mb-6 flex items-center text-left font-semibold uppercase md:justify-start">Shop</h6>
              <p className="mb-3">
                <a href="#" className="text-zinc-700 hover:text-blue-700">ASEA Redox Supplement</a>
              </p>
              <p className="mb-3">
                <a href="#" className="text-zinc-700 hover:text-blue-700">RENU28</a>
              </p>
              <p className="mb-3">
                <a href="#" className="text-zinc-700 hover:text-blue-700">REDOXEnergy</a>
              </p>
              <p className="mb-3">
                <a href="#" className="text-zinc-700 hover:text-blue-700">REDOXMood</a>
              </p>
              <p className="mb-3">
                <a href="#" className="text-zinc-700 hover:text-blue-700">REDOXRadiance</a>
              </p>
              <p className="mb-3">
                <a href="#" className="text-zinc-700 hover:text-blue-700">RENUAdvanced Foaming Cleanser</a>
              </p>
              <p className="mb-3">
                <a href="#" className="text-zinc-700 hover:text-blue-700">RENUAdvanced Balancing Cleanser</a>
              </p>
            </div>


            <div className="">
              <h6 className="text-slate-950 mb-6 flex text-left font-semibold uppercase md:justify-start">Shop (Cont.)</h6>
              <p className="mb-3">
                <a href="#" className="text-zinc-700 hover:text-blue-700">RENUAdvanced Glow Serum</a>
              </p>
              <p className="mb-3">
                <a href="#" className="text-zinc-700 hover:text-blue-700">RENUAdvanced Hydrating Moisturizer</a>
              </p>
              <p className="mb-3">
                <a href="#" className="text-zinc-700 hover:text-blue-700">Redox Clay Mask</a>
              </p>
              <p className="mb-3">
                <a href="#" className="text-zinc-700 hover:text-blue-700">Via Biome</a>
              </p>
              <p className="mb-3">
                <a href="#" className="text-zinc-700 hover:text-blue-700">Via Lifemax</a>
              </p>
              <p className="mb-3">
                <a href="#" className="text-zinc-700 hover:text-blue-700">Via Source</a>
              </p>
              <p className="mb-3">
                <a href="#" className="text-zinc-700 hover:text-blue-700">Via Omega</a>
              </p>
            </div>


            <div className="">
              <h6 className="text-slate-950 mb-6 flex text-left font-semibold uppercase md:justify-start">Science</h6>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-blue-700">Redox Cell Signaling</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-blue-700">Science Overview</a>
              </p>
              <br></br>
              <h6 className="text-slate-950 mb-6 flex text-left font-semibold uppercase md:justify-start">Opportunity</h6>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-blue-700">Earn</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-blue-700">Events</a>
              </p>
            </div>

            <div className="">
              <h6 className="text-slate-950 mb-6 flex text-left font-semibold uppercase md:justify-start">Company</h6>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-blue-700">About Us</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-blue-700">Advisory Council</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-blue-700">Careers</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-blue-700">Contact Us</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-blue-700">Leadership</a>
              </p>
              <p className="mb-3">
                <a href="#!" className="text-zinc-700 hover:text-blue-700">Mission Vision Values</a>
              </p>
            </div>

            <div>
              <h6 className="text-slate-950 mb-6 flex text-left font-semibold uppercase md:justify-start">Discover</h6>
              <p className="mb-3 flex items-center text-left md:justify-start">
                <a href="#!" className="text-zinc-700 hover:text-blue-700">Media Mention</a>
              </p>
              <p className="mb-3 flex items-center text-left md:justify-start">
                <a href="#!" className="text-zinc-700 hover:text-blue-700">Press Release</a>
              </p>
            </div>
          </div>
        </div>

      </footer>


      <div className="bg-zinc-100 w-full">
        <ul className="container flex flex-col md:flex-row mx-auto justify-between bg-zinc-100 pt-7 pb-7">
            <div className="flex flex-row items-center pl-10 pb-4 md:pb-0 text-zinc-700 text-sm font-light">
              <li>Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;  Cookie Preference  &nbsp;&nbsp;|&nbsp;&nbsp;  Notices</li>
            </div>

            <div className="flex flex-row items-center font-light pb-4 md:pb-0 mx-auto md:pl-20">
              <li className="mr-0 px-0">
                <a className="text-zinc-700 hover:text-blue-700" href="#"><img src="twitter.png" alt="Twitter Icon" width="48" height="auto" /></a>
              </li>
              <li className="mr-0 px-0">
                <a className="text-zinc-700 hover:text-blue-700" href="#"><img src="Instagram.png" alt="Instagram Icon" width="48" height="auto" /></a>
              </li>
              <li className="mr-0 px-0">
                <a className="text-zinc-700 hover:text-blue-700" href="#"><img src="Facebook.png" alt="Facebook Icon" width="48" height="auto" /></a>
              </li>
              <li className="mr-0 px-0">
                <a className="text-zinc-700 hover:text-blue-700" href="#"><img src="YouTube.png" alt="YouTube Icon" width="48" height="auto" /></a>
              </li>
              <li className="mr- px-0">
                <a className="text-zinc-700 hover:text-blue-700" href="#"><img src="LinkedIn.png" alt="LinkedIn Icon" width="48" height="auto" /></a>
              </li>
            </div>

            <div className="flex flex-row items-center mx-auto font-light md:pr-20">
              <li className="mr-5 text-zinc-700 text-sm">© 2023 ASEA LLC, All rights reserved.</li>
            </div>
          </ul>
      </div>
    </div>

    <div className="blue-talk-icon absolute bottom-0 right-0 pb-3 pr-10">
      <img src="Blue-Talk-Icon.png" alt="Talk" width="75" height="auto" />
    </div>
      
    </main>
  )
}
