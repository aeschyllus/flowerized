import { Link, usePage } from "@inertiajs/inertia-react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { IoFlowerOutline } from "react-icons/io5";
import NavLink from "./NavLink";
import NavLinkMobile from "./NavLinkMobile";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { component, props } = usePage();
  const { auth } = props;
  const navLinks = [
    { href: "/", active: component === "Home", name: "Home" },
    { href: "/events", active: component === "Events", name: "Events" },
    {
      href: "/customize",
      active: component === "Customize",
      name: "Customize",
    },
    { href: "/about-us", active: component === "AboutUs", name: "About Us" },
    {
      href: "/contact-us",
      active: component === "ContactUs",
      name: "Contact Us",
    },
  ];

  const toggleNav = () => setNav(!nav);
  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <>
      <header className="fixed w-full bg-white flex items-center justify-between py-3 px-3 lg:px-5 h-14 border-b border-yellow-600 uppercase z-10">
        <IoFlowerOutline className="text-2xl lg:hidden text-yellow-600" />

        <div className="hidden lg:flex items-center space-x-7">
          <div className="text-yellow-600 flex items-center space-x-3">
            <IoFlowerOutline className="text-2xl" />
            <h1 className="text-3xl">Flowerized</h1>
          </div>

          <ul className="flex space-x-3">
            {navLinks.map((navLink) => (
              <NavLink
                key={navLink.name}
                href={navLink.href}
                active={navLink.active}
                name={navLink.name}
              />
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center divide-x divide-yellow-600 space-x-3">
          {auth.user && (
            <div className="relative mx-3">
              <BsCart2 className="text-2xl" />
              <span className="absolute top-0 right-0 bg-red-500 text-xs text-white px-1 rounded-full translate-x-1/2 -translate-y-1/2">
                2
              </span>
            </div>
          )}

          {auth.user ? (
            <div className="relative">
              <button
                className="pl-3 flex items-center"
                onClick={toggleDropdown}
              >
                Hello, {auth.user.first_name}{" "}
                <BiChevronDown className="text-lg" />
              </button>

              <div
                className={`bg-yellow-600 absolute right-0 origin-top-right w-56 mt-2 ${
                  dropdown
                    ? "transition ease-out transform opacity-100 scale-100"
                    : "transition ease-in transform opacity-0 scale-95"
                }`}
              >
                <div className="py-1 text-white">
                  {auth.user.is_admin && <p className="px-4 py-2">Dashboard</p>}
                  <p className="px-4 py-2">Profile</p>
                  <Link
                    href="/logout"
                    as="button"
                    method="post"
                    className="px-4 py-2 uppercase"
                  >
                    Log out
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <ul className="flex items-center space-x-3 pl-3">
              <li>
                <Link href="/login">Sign In</Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="bg-yellow-500 text-white rounded-lg px-2 py-1"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </div>

        <ul className="flex lg:hidden space-x-3 text-xl">
          {auth.user && (
            <li>
              <div className="relative">
                <BsCart2 />
                <span className="absolute top-0 right-0 bg-red-500 text-xs text-white px-1 rounded-full translate-x-1/2 -translate-y-1/2">
                  2
                </span>
              </div>
            </li>
          )}
          <li>
            <button onClick={toggleNav}>
              {nav ? <AiOutlineClose /> : <FiMenu />}
            </button>
          </li>
        </ul>
      </header>

      <nav
        className={`fixed w-full mt-14 lg:hidden bg-yellow-600 transition z-10 ${
          nav ? "scale-100 ease-in" : "scale-0 ease-out"
        }`}
      >
        <ul className="text-white py-5 px-7 space-y-5">
          {navLinks.map((navLink) => (
            <NavLinkMobile
              key={navLink.name}
              href={navLink.href}
              active={navLink.active}
              name={navLink.name}
            />
          ))}

          {auth.user ? (
            <>
              <li>
                <button href="/profile" className="uppercase">
                  {component === "Profile" && (
                    <span className="absolute mt-2 left-3 bg-red-500 w-2 h-2 rounded-full"></span>
                  )}
                  Profile
                </button>
              </li>
              <li>
                <button
                  href="/logout"
                  as="button"
                  method="post"
                  className="uppercase"
                >
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button href="/login" className="uppercase">
                  Sign In
                </button>
              </li>
              <li>
                <button href="/regsiter" className="uppercase">
                  Sign Up
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
