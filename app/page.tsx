import Image from 'next/image'
import { Collapse, Dropdown, Ripple, initTE} from 'tw-elements'
import 'styles.css'

export default function Home() {

  return (
    <body>
    <main className="flex min-h-screen flex-col items-center justify-between p-0">

    <div className="fixed bg-white w-full z-50 border-solid border-1 border-gray-600 ">
      <header>
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
            <a className="logo" href="#">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="ASEA Logo Black.svg"
                alt="ASEA Logo"
                width={108}
                height={27}
              />
            </a>
            <input type="checkbox" id="check" />

            <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:text-lg">
            <li className="relative group text-zinc-700">
                    <a href="#" className="mr-4 text-zinc-700 hover:text-blue-700">Shop</a> 
                    {/* <i className="fa-solid fa-chevron-down fa-2xs pt-3 text-zinc-700"></i> */}

                    <ul className="flex flex-row absolute bg-white p-3 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg pt-20 pb-20 pl-5 w-full">
                      <div>
                      <li className="text-sm hover:bg-slate-100 leading-8 pl-5 pr-10 text-zinc-700 hover:text-blue-700"><b><a href="#">Filter</a></b></li>
                      <li className="text-sm hover:bg-slate-100 leading-8  pl-5 pr-10 text-zinc-700 hover:text-blue-700"><a href="#">New Arrivals</a></li>
                      <li className="text-sm hover:bg-slate-100 leading-8  pl-5 pr-10 text-zinc-700 hover:text-blue-700"><a href="#">Beauty + Skincare</a></li>
                      <li className="text-sm hover:bg-slate-100 leading-8  pl-5 pr-10 text-zinc-700 hover:text-blue-700"><a href="#">Brain and Mind</a></li>
                      <li className="text-sm hover:bg-slate-100 leading-8  pl-5 pr-10 text-zinc-700 hover:text-blue-700"><a href="#">Daily</a></li>
                      <li className="text-sm hover:bg-slate-100 leading-8  pl-5 pr-10 text-zinc-700 hover:text-blue-700"><a href="#">Energy</a></li>
                      <li className="text-sm hover:bg-slate-100 leading-8  pl-5 pr-10 text-zinc-700 hover:text-blue-700"><a href="#">Gut Health</a></li>
                      <li className="text-sm hover:bg-slate-100 leading-8  pl-5 pr-10 text-zinc-700 hover:text-blue-700"><a href="#">Redox</a></li>
                      <li className="text-sm hover:bg-slate-100 leading-8  pl-5 pr-10 text-zinc-700 hover:text-blue-700"><a href="#">Supplements</a></li>
                      <li className="text-sm hover:bg-slate-100 leading-8  pl-5 pr-10 text-zinc-700 hover:text-blue-700"><a href="#">Uplift Mood</a></li>
                      </div>
                      <ul>
                        <div className="min-w-full">
                          <li className="pl-5 pr-10 text-zinc-700 mr-20 hover:text-blue-700">image one</li>
                          <li className="pl-5 pr-10 text-zinc-700 hover:text-blue-700">image two</li>
                          <li className="pl-5 pr-10 text-zinc-700 hover:text-blue-700">image three</li>
                          <li className="pl-5 pr-10 text-zinc-700 hover:text-blue-700">image four</li>
                        </div>
                      </ul>

                      <ul>
                        <div className="min-w-full">
                          <li className="mr-6 px-8 text-zinc-700 hovertext-blue-700">image five</li>
                          <li className="mr-6 px-8 text-zinc-700 hover:text-blue-700">image six</li>
                          <li className="mr-6 px-8 text-zinc-700 hover:text-blue-700">image seven</li>
                          <li className="mr-6 px-8text-zinc-700 hover:text-blue-700">image eight</li>
                        </div>
                      </ul>
                    </ul>


            </li>
              <li><a href="#" className="text-zinc-700 hover:text-blue-700">Science</a></li>
              <li><a href="#" className="text-zinc-700 hover:text-blue-700">Opportunity</a></li>
              <li><a href="#" className="text-zinc-700 hover:text-blue-700">Company</a></li>
              <li><a href="#" className="text-zinc-700 hover:text-blue-700">Discover</a></li>

              <label htmlFor="check" className="close-menu">X</label>
            </span>
            
            <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:text-lg">
              <li>            
                  <a className="text-zinc-700 hover:text-blue-700" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth="2" stroke="currentColor" className="w-6 h-6 ml-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </a></li>
              <li>            
                <a className="text-zinc-700 hover:text-blue-700" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth="2" stroke="currentColor" className="w-6 h-6 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  </a></li>
              <li><a className="text-zinc-700 hover:text-blue-700" href="#"><img src="https://aseaglobal.com/wp-content/uploads/2023/02/US-flag.jpg" alt="EN" width="24" height="auto" />
                </a></li>
              <li><a className="text-zinc-700 hover:text-blue-700" href="#"><img src="icons8-contrast-100.png" alt="Contrast Switch" width="24" height="auto" />
                </a></li>

              <label htmlFor="check" className="close-menu">X</label>
            </span>

            <label htmlFor="check" className="open-menu">Menu</label>
          </ul>
        </nav>
      </header>
    </div>


<div className="bg-white w-full pt-20 mt-20 pl-20">
        <h1>Hello Test.</h1>
</div>

<div className="bg-white w-full">

      <footer className="container mx-auto bg-white font-light text-center text-neutral-600 dark:text-neutral-200 lg:text-left pl-6 pr-6">
        <div className="mx-5 py-16 text-left md:text-left">
          <div className="grid grid-cols-5 gap-5">

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
  </body>


  )

}

