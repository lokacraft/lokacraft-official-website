import React from "react";
import { ServiceCards } from "@/components/ui/service-cards";
import { ServiceFeature } from "./ServiceFeature";
import service1 from "../../../../../public/images/service/service1.png";
import service2 from "../../../../../public/images/service/service2.png";
import service3 from "../../../../../public/images/service/service3.png";
import service4 from "../../../../../public/images/service/service4.png";
import service5 from "../../../../../public/images/service/service5.png";
import service6 from "../../../../../public/images/service/service6.png";


const OurService = () => {
  const services = [
    {
      title: "Website Development",
      tags: "Company Profile, E-Commerce, Custom",
      backgroundImage: service1,
    },
    {
      title: "Mobile App",
      tags: "Android, IOS, Hybrid Apps For Business",
      backgroundImage: service2,
    },
    {
      title: "System Integration",
      tags: "Enterprise Solution, CRM, API",
      backgroundImage: service3,
    },
    {
      title: "Cloud Service",
      tags: "Server Management, Hosting, Backup",
      backgroundImage: service4,
    },
    {
      title: "Training & Consulting",
      tags: "Digital Transformation, IT, Training",
      backgroundImage: service5,
    },
    {
      title: "Enterprise Solution",
      tags: "Custom Software Development",
      backgroundImage: service6,
    },
  ];

  const servicesData = [
    {
      imageSrc: service1,
      title: "Website Development",
      description:
        "We build your digital identity through websites that are not only visually appealing but also functional, responsive, and optimized for search engines.",
      services: [
        "Website Company Profile",
        "Website E-Commerce",
        "Website App Custom",
      ],
      imagePosition: "left", // Posisi gambar di kiri
    },
    {
      imageSrc: service2,
      title: "Mobile Apps",
      description:
        "Bring your business to the fingertips of millions with intuitive, secure, and high-performance mobile applications on Android and iOS platforms.",
      services: ["Android", "iOS", "Hybrid Apps For Business"],
      imagePosition: "right", // Posisi gambar di kanan
    },
    {
      imageSrc: service3,
      title: "System Integration",
      description:
        "Crafting user-centric designs that are both beautiful and easy to use, ensuring a delightful user journey from start to finish.",
      services: [
        "Prototyping & Wireframing",
        "User Research",
        "Design Systems",
      ],
      imagePosition: "left", 
    },
    {
      imageSrc: service4,
      title: "Cloud Service",
      description:
        "Crafting user-centric designs that are both beautiful and easy to use, ensuring a delightful user journey from start to finish.",
      services: [
        "Prototyping & Wireframing",
        "User Research",
        "Design Systems",
      ],
      imagePosition: "right", 
    },
    {
      imageSrc: service5,
      title: "Training & Consulting",
      description:
        "Crafting user-centric designs that are both beautiful and easy to use, ensuring a delightful user journey from start to finish.",
      services: [
        "Prototyping & Wireframing",
        "User Research",
        "Design Systems",
      ],
      imagePosition: "left", 
    },
    {
      imageSrc: service6,
      title: "Enterprise Solution",
      description:
        "Crafting user-centric designs that are both beautiful and easy to use, ensuring a delightful user journey from start to finish.",
      services: [
        "Prototyping & Wireframing",
        "User Research",
        "Design Systems",
      ],
      imagePosition: "right", 
    },
  ];
  return (
    <div className="w-full h-full relative px-[15vh] bg-[#121212]">
      <div className="h-full w-full mx-auto justify-center items-center text-center">
        <h1 className="text-[86px] font-normal mt-[20vh] mb-[5vh]">
          Explore Our Solution
        </h1>
        <ServiceCards services={services} />
        <div className="mx-auto my-[20vh]">

        {servicesData.map((service) => (
          <ServiceFeature 
            key={service.title} // Key unik sangat penting untuk list
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
            services={service.services}
            imagePosition={service.imagePosition}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
