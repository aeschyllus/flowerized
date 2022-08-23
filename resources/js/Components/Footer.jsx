import { Link } from "@inertiajs/inertia-react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

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
          <h2 className="text-lg uppercase font-bold">Follow Us</h2>
          <ul className="flex space-x-3 text-xl text-neutral-500">
            <li>
              <AiFillFacebook />
            </li>
            <li>
              <AiFillInstagram />
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
