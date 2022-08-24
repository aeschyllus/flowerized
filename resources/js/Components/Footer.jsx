import { Link } from "@inertiajs/inertia-react";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const footerLinks = [
    { href: "/", name: "Home" },
    { href: "/events", name: "Events" },
    { href: "/customize", name: "Customize" },
    { href: "/about-us", name: "About Us" },
    { href: "/contact-us", name: "Contact Us" },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-[1300px] mx-auto px-5 py-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section>
          <h2 className="text-lg uppercase font-bold">
            Blooms by Marra Flower Shop
          </h2>
          <p className="text-neutral-500">Flower Delivery Manila</p>
          <p className="text-neutral-500">
            Express love through flowers. Shop with us now!
          </p>
        </section>
        <section>
          <h2 className="text-lg uppercase font-bold">Explore</h2>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-neutral-500 hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-lg uppercase font-bold">Contact Us</h2>
          <ul className="text-neutral-500">
            <li className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/bloomsbymarra"
                className="text-xl"
              >
                <AiFillFacebook />
              </a>
              <p>Blooms by Marra</p>
            </li>
            <li className="flex items-center space-x-3">
              <a className="text-xl">
                <AiFillPhone />
              </a>
              <p>(+63) 999-604-0668</p>
            </li>
            <li className="flex items-center space-x-3">
              <a className="text-xl">
                <FaMapMarkerAlt />
              </a>
              <p>III McArthur Highway, Marulas, Valenzuela</p>
            </li>
          </ul>
        </section>
      </div>
      <p className="text-center text-neutral-500 pb-14">
        &#169; 2022 Copyright | All rights reserved
      </p>
    </footer>
  );
}
