import Image from "next/image";
import Logo1 from "../../../../public/images/ArthalokaLogo.png";
import Link from "next/link";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import {
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandTiktok,
} from "@tabler/icons-react";

function Footer() {
  return (
    <footer className="w-full bg-[#121212] text-white py-16 px-[15vh]">
      <div className="max-w-7xl mx-auto ">
        {/* Main Footer Content */}
        <div className="flex flex-row justify-between">
          {/* Company Info Section */}
          <div className="flex-col space-y-6 flex  w-[400px]">
            <Link
              href="/"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Image
                priority
                quality={100}
                alt="Arthaloka Logo"
                src={Logo1 || "/placeholder.svg"}
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">
                  ARTHA LOKA
                </span>
                <span className="text-sm font-semibold text-white">
                  TECHNOLOGY
                </span>
              </div>
            </Link>

            <h2 className="text-xl font-semibold text-white">
              Bridging Innovation With Essence
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              A digital company committed to providing innovative and impactful
              technology solutions for the advancement of MSMEs, education, and
              industry in Indonesia.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h3 className="text-[22px] font-semibold text-[#ABFA54]">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Solution Column */}
          <div className="space-y-4">
            <h3 className="text-[22px] font-semibold text-[#ABFA54]">
              Our Solution
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-apps"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/system-integration"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  System Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-services"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/training"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  Training & Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/enterprise"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  Enterprise Solution
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products Column */}
          <div className="space-y-4">
            <h3 className="text-[22px] font-semibold text-[#ABFA54]">
              Our Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/lokacraft"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  LokaCraft
                </Link>
              </li>
              <li>
                <Link
                  href="/products/lokahr"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  LokaHR
                </Link>
              </li>
              <li>
                <Link
                  href="/products/lokatrade"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  LokaTrade
                </Link>
              </li>
              <li>
                <Link
                  href="/products/lokaaqua"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  LokaAqua
                </Link>
              </li>
              <li>
                <Link
                  href="/products/lokaedu"
                  className="text-gray-300 text-[14px] hover:text-white transition-colors"
                >
                  LokaEdu
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#ABFA54]">Contact</h3>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">
                  <span className="font-medium">Email:</span>{" "}
                  arthalokatechnology@gmail.com
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-medium">Phone Number:</span> +62
                  812-2553-4012
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#ABFA54]">
                Social Media
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <InstagramLogoIcon className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <IconBrandLinkedin className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <IconBrandWhatsapp className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <IconBrandTiktok className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm flex items-center">
            <span className="mr-2">©</span>
            Copyright Arthaloka Technology 2024
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
