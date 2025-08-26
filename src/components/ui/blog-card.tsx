import Image from "next/image";

interface BlogCardProps {
  image: any;
  tag: string;
  title: string;
  date: string;
  className?: string;
}

export function BlogCard({
  image,
  tag,
  title,
  date,
  className = "",
}: BlogCardProps) {
  return (
    <div
      className={`relative w-[400px] mx-auto h-[520px] mt-[12vh] mb-[2vh] flex justify-end items-start ${className}`}
    >
      {/* Card with gradient border */}
      <div className="relative bg-[#ABFA54] p-[2px] h-[515px] rounded-2xl">
        <div className=" bg-black p-2 h-[510px] rounded-2xl overflow-hidden w-full flex flex-col">
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
              {/* Tag */}
              <div className="rounded-full p-[1px] bg-gradient-to-r from-[#ABFA54] to-[#7400B8]">
                {/* KOTAK DALAM (Konten) - Dengan posisi 'relative' */}
                <div className="relative bg-[#121212] text-white rounded-full py-[4px] px-[18px] group overflow-hidden">
                  {/* --- LAPISAN GRADASI UNTUK HOVER --- */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#ABFA54] to-[#7400B8] 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                  />

                  {/* --- KONTEN TEKS --- */}
                  {/* Diberi 'relative' agar berada di atas lapisan gradasi hover */}
                  <h2 className="relative text-sm font-normal">{tag}</h2>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-[30px] font-light leading-none w-full">
                {title}
              </h3>
            </div>
          </div>
          {/* Date */}
          <p className="text-white text-sm  w-full justify-start flex px-4 py-2">{date}</p>
        </div>
      </div>
    </div>
  );
}

interface BlogData {
  image: any;
  tag: string;
  title: string;
  date: string;
}

interface BlogCardsProps {
  cards: BlogData[];
  className?: string;
}

export function BlogCards({ cards, className = "" }: BlogCardsProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ${className}`}
    >
      {cards.map((card, index) => (
        <BlogCard
          key={index}
          image={card.image}
          tag={card.tag}
          title={card.title}
          date={card.date}
        />
      ))}
    </div>
  );
}
