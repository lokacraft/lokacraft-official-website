import Image from "next/image";

interface ServiceCard {
  title: string;
  tags: string;
  backgroundImage: any;
}

interface ServiceCardsProps {
  services: ServiceCard[];
}

const ServiceCard = ({ title, tags, backgroundImage }: ServiceCard) => {
  return (
    <div className="relative h-[260px] w-[370px] rounded-2xl overflow-hidden group cursor-pointer text-left">
      {/* Background Image */}
      <div className="absolute inset-0 size-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-[#7400B8]/70 transition-opacity duration-300 group-hover:bg-[#7400B8]/80" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6">
        {/* Service Title - Top */}
        <h3 className="text-white text-[38px] font-normal leading-tight">{title}</h3>

        {/* Service Tags - Bottom */}
        <p className="text-white/90 text-[16px] font-medium">{tags}</p>
      </div>
    </div>
  );
};

export const ServiceCards = ({ services }: ServiceCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          tags={service.tags}
          backgroundImage={service.backgroundImage}
        />
      ))}
    </div>
  );
};
