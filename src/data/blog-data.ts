import { StaticImageData } from 'next/image';

// Impor gambar Anda
import blogImage1 from '../../public/images/blog/blog1.png'; // Ganti dengan path gambar Anda
import blogImage2 from '../../public/images/blog/blog2.png'; // Ganti dengan path gambar Anda
import blogImage3 from '../../public/images/blog/blog3.png'; // Ganti dengan path gambar Anda

// Tipe data untuk artikel terkait
interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

// Tipe data untuk postingan blog lengkap
export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: StaticImageData | string;
  content: string;
  relatedPosts: RelatedPost[];
}

// Contoh data blog
export const blogPosts: BlogPost[] = [
  {
    slug: 'masa-depan-ai',
    title: 'Masa Depan AI dalam Kehidupan Sehari-hari',
    author: 'Dany Prastya',
    date: '10 Agustus 2025',
    image: blogImage1,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.`,
    relatedPosts: [
      { slug: 'post-lain-1', title: 'Aplikasi Cloud untuk Efisiensi UMKM', excerpt: 'Adipiscing elit, sed do eiusmod tempor incididunt...', date: '11 Agustus 2025' },
      { slug: 'post-lain-2', title: 'Digitalisasi untuk UMKM: Langkah Kecil', excerpt: 'Ut enim ad minim veniam, quis nostrud...', date: '12 Agustus 2025' },
    ],
  },
  {
    slug: 'aplikasi-cloud-umkm',
    title: 'Masa Depan AI dalam Kehidupan Sehari-hari',
    author: 'Dany Prastya',
    date: '10 Agustus 2025',
    image: blogImage2,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.`,
    relatedPosts: [
      { slug: 'post-lain-1', title: 'Aplikasi Cloud untuk Efisiensi UMKM', excerpt: 'Adipiscing elit, sed do eiusmod tempor incididunt...', date: '11 Agustus 2025' },
      { slug: 'post-lain-2', title: 'Digitalisasi untuk UMKM: Langkah Kecil', excerpt: 'Ut enim ad minim veniam, quis nostrud...', date: '12 Agustus 2025' },
    ],
  },
  {
    slug: 'bisnis-teknologi',
    title: 'Masa Depan AI dalam Kehidupan Sehari-hari',
    author: 'Dany Prastya',
    date: '10 Agustus 2025',
    image: blogImage3,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.`,
    relatedPosts: [
      { slug: 'post-lain-1', title: 'Aplikasi Cloud untuk Efisiensi UMKM', excerpt: 'Adipiscing elit, sed do eiusmod tempor incididunt...', date: '11 Agustus 2025' },
      { slug: 'post-lain-2', title: 'Digitalisasi untuk UMKM: Langkah Kecil', excerpt: 'Ut enim ad minim veniam, quis nostrud...', date: '12 Agustus 2025' },
    ],
  },
  // ... (tambahkan objek untuk postingan blog lainnya di sini)
];