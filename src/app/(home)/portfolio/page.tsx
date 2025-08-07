// Direktif ini diperlukan untuk Framer Motion dan event handler
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { 
    Linkedin,
    Twitter,
    Instagram,
    ArrowRight
} from 'lucide-react';

// --- IMPOR GAMBAR LOKAL ---
// Pastikan path dan nama file ini sesuai dengan yang ada di direktori public/img Anda
import portfolioBgImage from '../../../../public/images/home/Mission1.png';
import heroLaptopImage from '../../../../public/images/home/Mission1.png'; // Gunakan .png untuk transparansi
import projectPoseidonImage from '../../../../public/images/portfolio/port1.png';
import projectLokaCraftImage from '../../../../public/images/home/Mission1.png';
import projectArthaEdImage from '../../../../public/images/home/Mission1.png';
import ctaBgImage from '../../../../public/images/home/Mission1.png';
import ContactBanner from '@/components/material/landing/portfolio/ContactBanner';


// --- VARIAN ANIMASI (FRAMER MOTION) ---
const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeInOut" }
    }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const sliderVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};


// --- DATA PROYEK (DUMMY) ---
const projects = [
    {
        id: 1,
        title: "Website Development For POSEIDON ITB 2024",
        category: "Website",
        client: "Himpunan Oseanografi 'Poseidon' ITB",
        description: "Arthaloka Technology designed and developed a fully responsive and informative company profile website. Focusing on a clean and modern UI/UX design, we created a platform that is not only visually appealing but also user-friendly. This website is designed to convey all important information about the organization and the event 'THE OCEANOGRAPHY PRESENTATION FOR INDONESIA' in a clear and effective manner.",
        image: projectPoseidonImage,
    },
    // {
    //     id: 2,
    //     title: "LokaCraft Project Management Dashboard",
    //     category: "Web Application",
    //     client: "Internal Product",
    //     description: "A comprehensive dashboard for our LokaCraft platform. It allows users to manage tasks, track project timelines, collaborate with team members, and generate insightful reports, all within a single, intuitive interface.",
    //     image: projectLokaCraftImage,
    // },
    // {
    //     id: 3,
    //     title: "Artha-Edu E-Learning Platform",
    //     category: "Mobile & Web App",
    //     client: "Education Partner",
    //     description: "An integrated e-learning solution for educational institutions. The platform supports video lectures, interactive quizzes, assignment submissions, and real-time student-teacher communication to facilitate modern digital learning.",
    //     image: projectArthaEdImage,
    // }
];


// --- KOMPONEN-KOMPONEN KECIL ---

const CustomButton = ({ children, variant = 'primary', className = '' }: { children: React.ReactNode, variant?: 'primary' | 'secondary', className?: string }) => {
    const baseClasses = "px-6 py-2 rounded-md font-semibold transition-all duration-300";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "border-2 border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white"
    };
    return (
        <a href='https://poseidonitb.vercel.app/' target="_blank" className={`${baseClasses} ${variants[variant]} ${className}`}>
            {children}
        </a>
    );
};


// --- KOMPONEN UTAMA HALAMAN ---
export default function PortfolioPage() {
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };
    
    // Menggunakan modulo untuk membuat slider berputar (looping)
    const projectIndex = ((page % projects.length) + projects.length) % projects.length;

    return (
        <div className=" text-gray-300 font-sans">
            {/* Navbar Sederhana */}
             {/* <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-white">Arthaloka</div>
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#" className="text-white hover:text-blue-400">Home</a>
                        <a href="#" className="text-white hover:text-blue-400">About Us</a>
                        <a href="#" className="text-white hover:text-blue-400">Services</a>
                        <a href="#" className="text-white hover:text-blue-400">Products</a>
                        <a href="#" className="text-blue-400 font-semibold">Portfolio</a>
                        <CustomButton variant='secondary' className="!border-white !text-white hover:!bg-white hover:!text-gray-900">Contact Us</CustomButton>
                    </div>
                    <div className="md:hidden">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </div>
                </div>
            </nav> */}

            {/* Hero Section */}
            <header className="relative h-screen w-screen flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src={portfolioBgImage}
                        alt="Portfolio background"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6">
                     <motion.div 
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
                    >
                        <motion.div variants={fadeInUp} className="lg:w-1/2 text-center lg:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                                Our Portfolio: Transforming Ideas into Digital Reality
                            </h1>
                            <p className="text-lg text-gray-300 mb-8">
                                Here are some selected projects that reflect the quality and commitment of Arthaloka Technology in delivering impactful digital solutions.
                            </p>
                            <CustomButton variant="secondary" className="!border-white !text-white hover:!bg-white hover:!text-gray-900">Let&apos;s work together</CustomButton>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="lg:w-1/2 w-full mt-8 lg:mt-0">
                            <div className="relative w-full h-80">
                                <Image 
                                    src={heroLaptopImage} 
                                    alt="Laptop showcase"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </header>
            
            {/* Main Content - Projects Slider */}
            <main className="py-24">
                <div className="container mx-auto px-6">
                    <div className="relative h-[600px] md:h-[500px] lg:h-[650px] overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={page}
                                custom={direction}
                                variants={sliderVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute w-full h-full bg-gray-800 p-8 rounded-lg flex flex-col lg:flex-row items-center gap-8"
                            >
                                {/* Project Image */}
                                <div className="w-full lg:w-1/2 h-64 lg:h-full relative">
                                    <Image 
                                        src={projects[projectIndex].image}
                                        alt={projects[projectIndex].title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-md"
                                        // width={1000}
                                        // height={1000}
                                        quality={100}
                                    />
                                </div>
                                {/* Project Details */}
                                <div className="w-full lg:w-1/2">
                                    <p className="text-blue-400 font-semibold mb-2">{projects[projectIndex].category}</p>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{projects[projectIndex].title}</h2>
                                    <p className="text-gray-400 mb-6 text-sm">{projects[projectIndex].description}</p>
                                    <p className="text-sm text-gray-500 mb-6">Client: <span className="font-medium text-gray-300">{projects[projectIndex].client}</span></p>
                                    <CustomButton variant="secondary">Visit Website</CustomButton>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <button onClick={() => paginate(-1)} className="hover:text-white">&lt; Previous</button>
                        {projects.map((_, i) => (
                            <button 
                                key={i} 
                                onClick={() => setPage([i, i > projectIndex ? 1 : -1])}
                                className={`h-8 w-8 rounded-md transition-colors ${i === projectIndex ? 'bg-blue-600 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button onClick={() => paginate(1)} className="hover:text-white">Next &gt;</button>
                    </div>
                </div>
            </main>
            <ContactBanner />

            {/* CTA Section */}
            {/* <section className="py-24">
                 <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gray-800 rounded-lg p-10 py-16 text-center overflow-hidden container mx-auto px-6"
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
                           Let&apos;s Create Your Success Story
                        </h3>
                        <div className="flex justify-center space-x-4 mt-6">
                            <CustomButton variant="primary">Get Started</CustomButton>
                            <CustomButton variant="secondary">Contact Us</CustomButton>
                        </div>
                    </div>
                </motion.div>
            </section> */}

            
        </div>
    );
}
