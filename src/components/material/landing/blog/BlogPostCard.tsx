import Image from "next/image";
import Link from "next/link";

interface BlogPostCardProps {
  image: any;
  tag: string;
  title: string;
  date: string;
  className?: string;
}

export function BlogPostCard({
  image,
  tag,
  title,
  date,
  className = "",
}: BlogPostCardProps) {
  return (
    <div
      className={`relative w-[400px] mx-auto h-[520px] flex justify-end items-start ${className}`}
    >
      {/* Card with gradient border */}
      <div className="relative bg-[#ABFA54] p-[2px] h-full rounded-2xl">
        <div className=" bg-transparent p-2 h-full rounded-2xl overflow-hidden w-full flex flex-col">
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
              <div className="rounded-full p-[1px] bg-transparent">
                {/* KOTAK DALAM (Konten) - Dengan posisi 'relative' */}
                <div className="relative bg-transparent border border-[#7400B8] text-black rounded-full py-[4px] px-[18px] group overflow-hidden">
                  {/* --- KONTEN TEKS --- */}
                  {/* Diberi 'relative' agar berada di atas lapisan gradasi hover */}
                  <h2 className="relative text-sm font-normal">{tag}</h2>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-black text-[30px] font-semibold leading-none w-full">
                {title}
              </h3>
            </div>
          </div>
          {/* Date */}
          <p className="text-black text-sm w-full justify-start flex px-4 py-2">{date}</p>
        </div>
      </div>
    </div>
  );
}

interface BlogData {
  slug:string;
  image: any;
  tag: string;
  title: string;
  date: string;
}

interface BlogPostCardsProps {
  cards: BlogData[];
  className?: string;
}

export function BlogPostCards({ cards, className = "" }: BlogPostCardsProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ${className}`}
    >
      {cards.map((card, index) => (
        <Link href={`/blog/${card.slug}`} key={card.slug}>
        <BlogPostCard
          key={index}
          image={card.image}
          tag={card.tag}
          title={card.title}
          date={card.date}
        />
        </Link>
      ))}
    </div>
  );
}
