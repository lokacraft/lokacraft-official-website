// import Hero from '@/components/material/landing/product/Hero'
// import Brief from '@/components/material/landing/product/Brief'
// import React from 'react'
// import FeaturedClient from '@/components/material/landing/home/FeaturedClient'
// import Plans from '@/components/material/landing/product/Plans'
// import WhyChooseUs from '@/components/material/landing/product/WhyChooseUs'

// function ProductPage() {
//   return (
//     <div className="w-full flex flex-col">
//       {/* Hero */}
//       <Hero />
//       {/* Brief */}
//       <Brief />
//       {/* Porto */}
//       <FeaturedClient />
//       {/* Why Choose Us */}
//       <WhyChooseUs />
//       {/* Pricing and Package */}
//       <Plans />
//     </div>
//   )
// }

// export default ProductPage
// Direktif ini diperlukan untuk Framer Motion dan event handler
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { 
    Linkedin,
    Twitter,
    Instagram,
    Users,
    Briefcase,
    BookOpen,
    Building
} from 'lucide-react';
import Hero from '@/components/material/landing/product/Hero'

// --- IMPOR GAMBAR LOKAL ---
// Pastikan path dan nama file ini sesuai dengan yang ada di direktori public/img Anda
import productHeroImage from '../../../../public/images/home/Mission1.png';
import lokaCraftImage from '../../../../public/images/product/prod1.png';
import lokaHrImage from '../../../../public/images/product/prod2.png';
import lokaAquaImage from '../../../../public/images/product/prod3.png';
import humanCenteredImage from '../../../../public/images/home/Mission1.png';
import scalableSecureImage from '../../../../public/images/home/Mission1.png';
import localFocusImage from '../../../../public/images/home/Mission1.png';
import ctaBgImage from '../../../../public/images/home/Mission1.png';
import ContactBanner from '@/components/material/landing/product/ContactBanner';


// --- VARIAN ANIMASI (FRAMER MOTION) ---
const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeInOut" }
    }
};

const staggerContainer = {
    whileInView: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

// --- KOMPONEN-KOMPONEN KECIL ---

// Komponen untuk tombol dengan gaya kustom
const CustomButton = ({ children, variant = 'primary', className = '' }: { children: React.ReactNode, variant?: 'primary' | 'secondary', className?: string }) => {
    const baseClasses = "px-6 py-2 rounded-md font-semibold transition-all duration-300";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "border-2 border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white"
    };
    return (
        <button className={`${baseClasses} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

// Komponen untuk kartu produk di bagian "Our Flagship Products"
const ProductCard = ({ image, title, description, large = false, className = '' }: { image: StaticImageData, title: string, description: string, large?: boolean, className?: string }) => (
    <motion.div 
        variants={fadeInUp}
        className={`bg-gray-800 rounded-lg overflow-hidden flex flex-col group ${className}`}
    >
        <div className="relative w-full h-60">
            <Image 
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
                placeholder="blur"
            />
        </div>
        <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
            <a href="#" className="text-blue-500 font-semibold hover:text-blue-400 transition-colors">Learn More</a>
        </div>
    </motion.div>
);

// Komponen untuk kartu filosofi
const PhilosophyCard = ({ image, title, description }: { image: StaticImageData, title: string, description: string }) => (
    <motion.div variants={fadeInUp} className="flex flex-col">
        <div className="relative w-full h-48 mb-4">
            <Image 
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                placeholder="blur"
            />
        </div>
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
);

// --- KOMPONEN UTAMA HALAMAN ---
export default function ProductPage() {
    return (
        <div className="text-gray-300 font-sans">
            {/* Navbar Sederhana */}
            {/* <nav className="sticky top-0 bg-gray-900/80 backdrop-blur-sm z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-white">Arthaloka</div>
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#" className="hover:text-blue-400">Home</a>
                        <a href="#" className="hover:text-blue-400">Services</a>
                        <a href="#" className="text-blue-400 font-semibold">Products</a>
                        <a href="#" className="hover:text-blue-400">About</a>
                        <a href="#" className="hover:text-blue-400">Contact</a>
                    </div>
                    <div className="md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </div>
                </div>
            </nav> */}
            <Hero />

            <main className="container mx-auto px-6 lg:px-[5vw] py-16 z-20">
                {/* Hero Section */}
                {/* <motion.section 
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                    className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-24"
                >
                    <motion.div variants={fadeInUp} className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                            Innovative Platforms to Accelerate Your Growth
                        </h1>
                        <p className="text-lg text-gray-400 mb-8">
                            Discover our suite of ready-to-deploy products designed to solve complex challenges and drive efficiency in your business.
                        </p>
                        <CustomButton variant="primary">Explore Products</CustomButton>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="lg:w-1/2 w-full mt-8 lg:mt-0">
                        <div className="relative w-full h-80">
                            <Image 
                                src={productHeroImage} 
                                alt="Product Showcase"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg"
                                placeholder="blur"
                            />
                        </div>
                    </motion.div>
                </motion.section> */}

                {/* Flagship Products Section */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, amount: 0.1 }}
                    className="mb-24"
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center text-white mb-10">
                        Our Flagship Products
                    </motion.h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Loka Craft - Spans two rows on large screens */}
                        <ProductCard 
                            image={lokaCraftImage}
                            title="Loka Craft"
                            description="A comprehensive project management and team collaboration platform. Streamline workflows, track progress, and enhance productivity with a suite of powerful, integrated tools."
                            className="lg:row-span-2 col-span-1 lg:col-span-2"
                        />
                        {/* Loka HR */}
                        <ProductCard 
                            image={lokaHrImage}
                            title="Loka HR"
                            description="An all-in-one Human Resources management system. Simplify payroll, attendance, leave management, and employee data with our secure and user-friendly platform."
                        />
                        {/* Loka Aqua */}
                        <ProductCard 
                            image={lokaAquaImage}
                            title="Loka Aqua"
                            description="Advanced IoT and data analytics for modern aquaculture. Monitor water quality, automate feeding, and gain actionable insights to maximize yield and sustainability."
                        />
                    </div>
                </motion.section>

                {/* Philosophy Section */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, amount: 0.2 }}
                    className="my-24"
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center text-white mb-10">
                        The Philosophy Behind Our Products
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PhilosophyCard 
                            image={humanCenteredImage}
                            title="Human-Centered Design"
                            description="Every product is crafted with the end-user in mind. We prioritize intuitive interfaces and seamless experiences to solve real-world problems effectively."
                        />
                        <PhilosophyCard 
                            image={scalableSecureImage}
                            title="Scalable & Secure"
                            description="Built with enterprise-grade architecture, our products are designed to grow with your business and are fortified with robust security protocols to protect your data."
                        />
                        <PhilosophyCard 
                            image={localFocusImage}
                            title="Local Focus, Global Standards"
                            description="We understand the unique needs of the local market while adhering to global standards of quality, reliability, and innovation in every product we build."
                        />
                    </div>
                </motion.section>

                {/* Empowering Industry Section */}
                <motion.section 
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, amount: 0.2 }}
                    className="my-24 text-center"
                >
                     <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-10">
                        Empowering Every Industry
                    </motion.h2>
                    <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
                        <button className="bg-gray-800 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">SMEs</button>
                        <button className="bg-gray-800 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">Industries</button>
                        <button className="bg-gray-800 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">Education</button>
                        <button className="bg-gray-800 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">Consultants</button>
                    </motion.div>
                </motion.section>

                {/* CTA Section */}
                {/* <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gray-800 rounded-lg p-10 py-16 text-center overflow-hidden"
                >
                    <div className="absolute inset-0 z-0">
                        <Image 
                            src={ctaBgImage}
                            alt="Abstract background"
                            layout="fill"
                            objectFit="cover"
                            className="opacity-10"
                        />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Ready to Find the Right Solution?
                        </h3>
                        <div className="flex justify-center space-x-4 mt-6">
                            <CustomButton variant="primary">Get Started</CustomButton>
                            <CustomButton variant="secondary">Contact Us</CustomButton>
                        </div>
                    </div>
                </motion.section> */}
            </main>
                <ContactBanner />

            {/* Footer */}
            {/* <footer className="bg-gray-900 border-t border-gray-800">
                 <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Arthaloka</h4>
                            <p className="text-sm text-gray-400">
                                Empowering businesses through innovative and reliable technology solutions.
                            </p>
                        </div>
                        <div>
                            <h5 className="font-semibold text-white mb-4">Products</h5>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-gray-400 hover:text-blue-400">Loka Craft</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-blue-400">Loka HR</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-blue-400">Loka Aqua</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-white mb-4">Company</h5>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-gray-400 hover:text-blue-400">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-blue-400">Services</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-blue-400">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-white mb-4">Connect</h5>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-blue-400"><Twitter /></a>
                                <a href="#" className="text-gray-400 hover:text-blue-400"><Linkedin /></a>
                                <a href="#" className="text-gray-400 hover:text-blue-400"><Instagram /></a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Arthaloka. All Rights Reserved.</p>
                    </div>
                </div>
            </footer> */}
        </div>
    );
}
