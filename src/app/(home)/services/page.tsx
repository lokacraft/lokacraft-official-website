// Direktif ini diperlukan untuk Framer Motion dan event handler
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { 
    Globe, 
    Smartphone, 
    GitMerge, 
    Cloud, 
    Users, 
    Briefcase,
    ArrowRight,
    Linkedin,
    Twitter,
    Instagram
} from 'lucide-react';

// --- IMPOR GAMBAR LOKAL ---
// Pastikan path dan nama file ini sesuai dengan yang ada di direktori public/img Anda
import heroImage from '../../../../public/images/home/Mission1.png';
import webDevImage from '../../../../public/images/home/Mission1.png';
import mobileAppsImage from '../../../../public/images/home/Mission2.png';
import systemIntegrationImage from '../../../../public/images/home/Mission3.png';
import cloudServiceImage from '../../../../public/images/home/Mission4.png';
import trainingImage from '../../../../public/images/home/Mission1.png';
import enterpriseImage from '../../../../public/images/home/Mission3.png';
import Hero from '@/components/material/landing/service/Hero';
import ContactBanner from '@/components/material/landing/service/ContactBanner';


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

// Komponen untuk kartu solusi di bagian "Explore Our Solutions"
const SolutionCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <motion.div 
        variants={fadeInUp}
        className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4 border border-gray-700 hover:border-blue-500 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
    >
        <div className="text-blue-500">{icon}</div>
        <span className="text-gray-300 font-medium">{title}</span>
    </motion.div>
);

// Komponen untuk detail setiap layanan
const ServiceDetail = ({ title, description, list, imageUrl, reverse = false }: { title: string, description: string, list: string[], imageUrl: StaticImageData, reverse?: boolean }) => (
    <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-20 mb-20`}
    >
        <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-400 mb-6">{description}</p>
            <ul className="space-y-3">
                {list.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
        <div className="lg:w-1/2 w-full h-64 lg:h-80 relative">
            <Image 
                src={imageUrl}
                alt={`${title} service`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                placeholder="blur" // Menambahkan efek blur saat loading
            />
        </div>
    </motion.div>
);

// Komponen untuk kartu di bagian "Human-Centered Approach"
const ApproachCard = ({ title, description }: { title: string, description: string }) => (
    <motion.div 
        variants={fadeInUp}
        className="bg-gray-800 p-6 rounded-lg border border-gray-700"
    >
        <h4 className="text-xl font-bold text-blue-400 mb-3">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
);


// --- KOMPONEN UTAMA HALAMAN ---
export default function ServicesPage() {
    const services = [
        {
            title: "Website Development",
            description: "We build responsive, high-performance websites tailored to your business needs, ensuring a seamless user experience across all devices. From corporate sites to complex web applications, we deliver excellence.",
            list: ["Custom Web Design & Development", "E-commerce Solutions", "Content Management Systems (CMS)", "Web Application Development"],
            imageUrl: webDevImage
        },
        {
            title: "Mobile Apps",
            description: "Engage your customers on the go with our intuitive and powerful mobile applications. We develop for both iOS and Android, focusing on performance, scalability, and user-centric design.",
            list: ["Native iOS & Android Apps", "Cross-Platform Development", "UI/UX Design for Mobile", "App Maintenance & Support"],
            imageUrl: mobileAppsImage
        },
        {
            title: "System Integration",
            description: "We streamline your business processes by integrating disparate systems and software applications. Our solutions improve data flow, reduce manual effort, and enhance overall operational efficiency.",
            list: ["API Development & Integration", "Third-Party Software Integration", "Data Synchronization Solutions", "Legacy System Modernization"],
            imageUrl: systemIntegrationImage
        },
        {
            title: "Cloud Service",
            description: "Leverage the power of the cloud with our comprehensive services. We help you migrate, manage, and optimize your cloud infrastructure for better scalability, security, and cost-effectiveness.",
            list: ["Cloud Migration & Strategy", "Infrastructure as a Service (IaaS)", "Serverless Architecture", "DevOps & Automation"],
            imageUrl: cloudServiceImage
        },
        {
            title: "Training & Consulting",
            description: "Empower your team with our expert-led training and consulting services. We provide insights and knowledge on the latest technologies and best practices to help you stay ahead of the curve.",
            list: ["Corporate Technology Training", "IT Strategy Consulting", "Digital Transformation Roadmap", "Agile & Scrum Coaching"],
            imageUrl: trainingImage
        },
        {
            title: "Enterprise Solution",
            description: "We deliver robust, scalable, and secure enterprise-level solutions that solve complex business challenges. Our focus is on creating systems that support your long-term growth and success.",
            list: ["Enterprise Resource Planning (ERP)", "Customer Relationship Management (CRM)", "Business Process Management (BPM)", "Data Analytics & BI"],
            imageUrl: enterpriseImage
        }
    ];

    return (
        <div className=" text-gray-300 font-sans">
            {/* Navbar Sederhana */}
            {/* <nav className="sticky top-0 bg-gray-900/80 backdrop-blur-sm z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-white">Arthaloka</div>
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#" className="hover:text-blue-400">Home</a>
                        <a href="#" className="text-blue-400 font-semibold">Services</a>
                        <a href="#" className="hover:text-blue-400">About</a>
                        <a href="#" className="hover:text-blue-400">Contact</a>
                    </div>
                    <div className="md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </div>
                </div>
            </nav> */}
            <Hero />

            <main className="container mx-auto px-6 py-16">
                {/* Hero Section */}
                {/* <motion.section 
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                    className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-24"
                >
                    <motion.div variants={fadeInUp} className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                            Comprehensive Technology Solutions
                        </h1>
                        <p className="text-lg text-gray-400 mb-8">
                            From custom software development to strategic IT consulting, we provide end-to-end solutions to power your digital transformation.
                        </p>
                        <CustomButton variant="primary">Get Started</CustomButton>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="lg:w-1/2 w-full mt-8 lg:mt-0">
                        <div className="relative w-full h-80">
                            <Image 
                                src={heroImage}
                                alt="Solutions Showcase"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg"
                                placeholder="blur"
                            />
                        </div>
                    </motion.div>
                </motion.section> */}

                {/* Explore Solutions Section */}
                <motion.section 
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="mb-24"
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center text-white mb-10">
                        Explore Our Solutions
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <SolutionCard icon={<Globe size={28} />} title="Website Development" />
                        <SolutionCard icon={<Smartphone size={28} />} title="Mobile Apps" />
                        <SolutionCard icon={<GitMerge size={28} />} title="System Integration" />
                        <SolutionCard icon={<Cloud size={28} />} title="Cloud Service" />
                        <SolutionCard icon={<Users size={28} />} title="Training & Consulting" />
                        <SolutionCard icon={<Briefcase size={28} />} title="Enterprise Solution" />
                    </div>
                </motion.section>

                {/* Services Details Section */}
                <section>
                    {services.map((service, index) => (
                        <ServiceDetail 
                            key={service.title}
                            {...service}
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </section>

                {/* Human-Centered Approach Section */}
                <motion.section 
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="my-24 text-center"
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-10">
                        A Human-Centered Approach in Every Solution
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <ApproachCard 
                            title="Strategic Partnership"
                            description="We work as an extension of your team, deeply understanding your goals to build solutions that deliver real business value and drive growth."
                        />
                        <ApproachCard 
                            title="Continuous Innovation"
                            description="Technology is always evolving, and so are we. We are committed to continuous learning and innovation to bring you the most effective and modern solutions."
                        />
                        <ApproachCard 
                            title="End-to-End Support"
                            description="Our relationship doesn’t end at launch. We provide ongoing support, maintenance, and consultation to ensure your technology investment continues to perform."
                        />
                    </div>
                </motion.section>

                {/* CTA Section */}
                {/* <motion.section 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ duration: 0.8 }}
                    className="bg-gray-800 rounded-lg p-10 text-center flex flex-col md:flex-row justify-between items-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-4 md:mb-0">
                        Have a Digital Challenge That Needs Solving?
                    </h3>
                    <div className="flex space-x-4">
                        <CustomButton variant="primary">Get Started</CustomButton>
                        <CustomButton variant="secondary">Contact Us</CustomButton>
                    </div>
                </motion.section> */}
            </main>
                <ContactBanner />

            {/* Footer */}
            {/* <footer className="bg-gray-900 border-t border-gray-800">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Arthaloka</h4>
                            <p className="text-sm text-gray-400">
                                Empowering businesses through innovative and reliable technology solutions.
                            </p>
                        </div>
                        <div>
                            <h5 className="font-semibold text-white mb-4">Services</h5>
                            <ul className="space-y-2 text-sm">
                                {services.slice(0, 4).map(s => <li key={s.title}><a href="#" className="text-gray-400 hover:text-blue-400">{s.title}</a></li>)}
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-white mb-4">Company</h5>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-gray-400 hover:text-blue-400">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-blue-400">Careers</a></li>
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
