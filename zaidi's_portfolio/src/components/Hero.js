import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import pfp from "./../zaidipic.jpeg";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const navigation = [
  // { name: 'About Me', id: 'about' },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  // { name: "Contact Me", id: "contact" },
];

export default function Hero() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleToggle = (e) => {
    e.target.checked ? setTheme("dark") : setTheme("light");
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <header className="fixed bg-base-300 shadow-2xl shadow-neutral inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link
              className="text-sm font-semibold leading-6 cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              to={"home"}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Me
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-sm font-semibold leading-6 cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="hidden"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
              />

              <SunIcon className="swap-off fill-current w-6 h-6" />
              <MoonIcon className="swap-on fill-current w-6 h-6" />
            </label>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-2/3 overflow-y-auto backdrop-brightness-90 backdrop-blur-2xl bg-transparent px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <div className="-m-1.5 p-1.5">
                <label className="swap swap-rotate">
                  <input
                    type="checkbox"
                    className="hidden"
                    onChange={handleToggle}
                    checked={theme === "light" ? false : true}
                  />
                  <SunIcon className="swap-off fill-current w-6 h-6" />
                  <MoonIcon className="swap-on fill-current w-6 h-6" />
                </label>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 btn btn-ghost"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="lg:py-24" id="home">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-32"
            data-aos="zoom-in"
          >
            <div className="grid justify-center items-center">
              <img
                src={pfp}
                alt="Faizan Fareed Khan"
                className="w-72 rounded-full drop-shadow-2xl"
              />
            </div>
            <div className="grid justify-center items-center mt-3">
              <div className="text-center">
                <div className="text-2xl tracking-tight sm:text-3xl">
                  Hello, It's
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Syed Zaman Haider
                </h1>
                <p className="mt-6 text-2xl leading-8">
                  <TypeAnimation
                    sequence={[
                      "I'm a Frontend Developer",
                      2000,
                      "I'm a Web Developer",
                      2000,
                      "I'm a Full Stack Developer",
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <p>
                    I am a frontend developer with expertise in React, Angular,
                    and Vue.js. I build dynamic, responsive, and user-friendly
                    web applications, focusing on performance and clean code.
                    Passionate about creating seamless user experiences and
                    staying updated with modern technologies to deliver
                    high-quality solutions.
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-4">
                  <a
                    href="https://www.linkedin.com/in/syed-zaman-haider-031840277/"
                    target="_blank"
                    className="btn btn-outline btn-square"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-8 w-8"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>

                  <a
                    href="https://wa.me/923039943639"
                    target="_blank"
                    className="btn btn-outline btn-square"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.373 0 12c0 2.11.551 4.09 1.592 5.86L0 24l6.293-1.64A11.935 11.935 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.003 21.5c-1.768 0-3.497-.465-5.02-1.35l-.36-.212-3.13.817.835-3.05-.234-.38A9.49 9.49 0 0 1 2.5 12c0-5.246 4.254-9.5 9.5-9.5S21.5 6.754 21.5 12s-4.254 9.5-9.497 9.5zM17 14.736c-.256-.128-1.52-.747-1.754-.833-.234-.085-.405-.128-.576.128s-.66.832-.81 1.003c-.149.17-.298.192-.554.064-.256-.128-1.08-.398-2.057-1.27-.76-.677-1.27-1.512-1.42-1.768-.149-.256-.016-.394.112-.521.115-.114.256-.298.384-.447.128-.149.17-.256.256-.426.085-.17.042-.319-.021-.447-.063-.128-.576-1.39-.79-1.902-.208-.5-.42-.427-.576-.435l-.491-.008c-.17 0-.447.063-.68.298s-.895.873-.895 2.13c0 1.256.916 2.47 1.044 2.64.128.17 1.8 2.742 4.366 3.84.611.263 1.088.42 1.46.536.613.195 1.172.167 1.614.101.492-.072 1.52-.622 1.732-1.225.213-.603.213-1.12.149-1.225-.064-.106-.234-.17-.49-.298z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
