import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

// footer
const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          {/* brand logo */}
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
            title="Car Hub"
          />
          {/* brand copyright */}
          <p className="text-base text-gray-700">
            &copy; Car Hub {new Date().getFullYear()}-
            {(new Date().getFullYear() % 100) + 1} <br /> All rights reserved.
          </p>
        </div>

        {/* footer links */}
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              {/* link title */}
              <h3 className="font-bold">{link.title}</h3>

              {/* show all sublinks */}
              {link.links.map((item) => (
                <Link
                  key={`${link.title}-${item.title}`}
                  href={item.url}
                  className="text-gray-500"
                  title={item.title}
                >
                  {/* sublink title */}
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* footer bottom */}
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        {/* brand copyright */}
        <p>&copy; {new Date().getFullYear()} Car Hub. All rights reserved</p>

        <div className="footer__copyrights-link">
          {/* brand privacy policy */}
          <Link href="/" className="text-gray-500" title="Privacy Policy">
            Privacy Policy
          </Link>

          {/* brand terms of use */}
          <Link href="/" className="text-gray-500" title="Terms of Use">
            Terms of Use
          </Link>

          {/* github source code */}
          <a
            target="_blank"
            href="https://github.com/sanidhyy/car-showcase"
            rel="noopener noreferrer"
            title="Source Code"
            className="text-gray-500"
          >
            <Image
              src="/github.svg"
              alt="github"
              width={25}
              height={25}
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
