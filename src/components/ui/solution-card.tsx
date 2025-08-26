import Image from "next/image";

interface SolutionCardProps {
  image: any;
  title: string;
  className?: string;
}

export function SolutionCard({
  image,
  title,
  className = "",
}: SolutionCardProps) {
  return (
    <div
      className={`relative w-[400px] mx-auto h-[520px] mt-[12vh] mb-[2vh] flex justify-end items-start ${className}`}
    >
      {/* Card with gradient border */}
      <div className="relative bg-gradient-to-b from-[#ABFA54] to-[#7400B8] p-[2px] h-[415px] rounded-2xl">
        <div className=" bg-black p-2 h-[410px] rounded-2xl overflow-hidden w-full flex flex-col">
          {/* Image */}
          <div className="relative h-[350px] w-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover rounded-[0.69rem]"
            />
          </div>
          <div className="w-full h-full  gap-5 flex justify-start items-start">
            {/* Content */}
            <div className="p-4 space-y-5 flex items-start  justify-start flex-col text-left">
              {/* Title */}
              <h3 className="text-white text-center text-[24px] font-light leading-none w-full">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SolutionData {
  image: any;
  title: string;
}

interface SolutionCardsProps {
  cards: SolutionData[];
  className?: string;
}

export function SolutionCards({ cards, className = "" }: SolutionCardsProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ${className}`}
    >
      {cards.map((card, index) => (
        <SolutionCard
          key={index}
          image={card.image}
          title={card.title}
        />
      ))}
    </div>
  );
}
