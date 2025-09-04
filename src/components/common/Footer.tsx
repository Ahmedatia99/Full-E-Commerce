import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-white sm:justify-start">
              <span className="text-2xl font-bold">Exclusive</span>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
              Subscribe to our newsletter
            </p>
            <span>Get 10% off your first order</span>
            {/* Social media */}
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-white/75"
                >
                  <FaFacebook className="size-6" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-white/75"
                >
                  <FaInstagram className="size-6" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-white/75"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="size-6" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-white/75"
                >
                  <FaGithub className="size-6" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-white/75"
                >
                  <FaDribbble className="size-6" />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Support</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="#"
                  >
                    111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="#"
                  >
                    exclusive@gmail.com
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="#"
                  >
                    +88015-88888-9999
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Account</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="#"
                  >
                    My Account
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="#"
                  >
                    Login / Register
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="#"
                  >
                    Cart
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="#"
                  >
                    Wishlist
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="#"
                  >
                    shop
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Quick Link</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="#"
                  >
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="#"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Download App</p>
              <span className="text-xs text-gray-300">
                Save $3 with App New User Only
              </span>
              <div className="mt-8 space-y-4 text-sm flex">
                <div className="flex gap-2 flex-col">
                  <div className="flex items-center gap-2 border border-gray-300 p-1.5 py-1.5 rounded-md cursor-pointer w-40">
                    <FaGooglePlay className="size-7" />
                    <p className="text-[10px] text-gray-400 flex flex-col">
                      Get it on{" "}
                      <span className="text-lg text-white font-semibold">
                        Google Play
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 border border-gray-300 p-1.5 py-1.5 rounded-md cursor-pointer w-40">
                    <FaApple className="size-10" />
                    <p className="text-[10px] text-gray-400">
                      Download on the{" "}
                      <span className="text-lg text-white font-semibold">
                        APP Store
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-white">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-white underline transition hover:text-white/75"
                href="#"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                className="inline-block text-white underline transition hover:text-white/75"
                href="#"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
              &copy; 2022 Company Name
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
