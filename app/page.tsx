import Image from 'next/image'
import { Collapse, Dropdown, Ripple, initTE} from 'tw-elements'

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
          width={108}
          height={27}
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
{/* initTE({Collapse, Dropdown, Ripple }); */}
{/* 
<nav
  className="relative flex w-full items-center justify-between bg-neutral-50 py-2 text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-300 dark:shadow-black/5 lg:flex-wrap lg:justify-start"
  data-te-navbar-ref>
  <div className="px-6">
    <button
      className="border-0 bg-transparent py-3 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContentY"
      aria-controls="navbarSupportedContentY"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="[&>svg]:w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-8 w-8">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </span>
    </button>
    <div
      className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContentY"
      data-te-collapse-item>
      <ul className="mr-auto flex flex-row" data-te-navbar-nav-ref>
        <li data-te-nav-item-ref>
          <a
            className="block py-2 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="#!"
            data-te-ripple-init
            data-te-ripple-color="light"
            >Regular link</a>
        </li>
        <li className="static" data-te-nav-item-ref data-te-dropdown-ref>
          <a
            className="flex items-center whitespace-nowrap py-2 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="#"
            data-te-ripple-init
            data-te-ripple-color="light"
            type="button"
            id="dropdownMenuButtonX"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-nav-link-ref
            >Mega menu
            <span className="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </a>
          <div
            className="absolute left-0 right-0 top-full z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButtonY"
            data-te-dropdown-menu-ref>
            <div className="px-6 py-5 lg:px-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p
                    className="block w-full border-b border-neutral-200 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-neutral-500 dark:text-white">
                    Lorem ipsum
                  </p>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Dolor sit</a>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Amet consectetur</a>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Cras justo odio</a>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Adipisicing elit</a>
                </div>
                <div>
                  <p
                    className="block w-full border-b border-neutral-200 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-neutral-500 dark:text-white">
                    Explit voluptas
                  </p>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Perspiciatis quo</a>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Cras justo odio</a>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Laudantium maiores</a>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Provident dolor</a>
                </div>
                <div>
                  <p
                    className="block w-full border-b border-neutral-200 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-neutral-500 dark:text-white">
                    Iste quaerato
                  </p>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Cras justo odio</a>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Est iure</a>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Praesentium</a>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Laboriosam</a>
                </div>
                <div>
                  <p
                    className="block w-full border-b border-neutral-200 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-neutral-500 dark:text-white">
                    Cras justo odio
                  </p>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Saepe</a>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Vel alias</a>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Sunt doloribus</a>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Cum dolores</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav> */}


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
              <li className="mr-5 text-zinc-700 text-sm">© 2023 ASEA LLC, All rights reserved.</li>
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
              <li className="text-zinc-700 text-sm"><a className="hover:text-blue-700" href="#">Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;  <a className="hover:text-blue-700" href="#">Cookie Preference</a>  &nbsp;&nbsp;|&nbsp;&nbsp;  <a className="hover:text-blue-700" href="#">Notices</a></li>
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

