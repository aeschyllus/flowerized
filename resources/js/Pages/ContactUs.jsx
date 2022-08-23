import contactUs from "@/assets/images/contact.webp";
import { AiFillFacebook, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section>
      <div className="max-w-[1300px] mx-auto flex py-14">
        <img src={contactUs} alt="/" className="w-96 hidden lg:block" />
        <div className="px-8 space-y-5">
          <h2 className="text-3xl uppercase text-yellow-600 tracking-widest">
            Contact Us
          </h2>
          <p className="text-lg">Want to stay connected? Reach out to us!</p>
          <div className="flex items-center space-x-3">
            <a
              href="https://www.facebook.com/bloomsbymarra"
              className="transition hover:text-yellow-600"
            >
              <AiFillFacebook className="text-3xl" />
            </a>
            <p className="text-lg">
              Chat with us on our official Facebook page
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <a>
              <AiFillInstagram className="text-3xl" />
            </a>
            <p className="text-lg">
              Slide through our DMs on our official Instagram account
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <a>
              <AiFillPhone className="text-3xl" />
            </a>
            <p className="text-lg">Give us a call/text at (+63) 999-604-0668</p>
          </div>
          <div className="flex items-center space-x-3">
            <a>
              <FaMapMarkerAlt className="text-3xl" />
            </a>
            <p className="text-lg">
              Visit us at our physical store located at III McArthur Highway,
              Marulas, Valenzuela
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
