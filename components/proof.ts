// Shared proof data (real student/parent proof) used on homepage + location pages.

export interface ReviewItem {
  src: string;
  caption: string;
  alt: string;
}

export interface VideoItem {
  id: string;
  name: string;
  caption: string;
  description: string;
  uploadDate: string;
}

export const reviews: ReviewItem[] = [
  {
    src: "/images/review-1.webp",
    caption: "Parent feedback — shared via WhatsApp",
    alt: "Screenshot of a WhatsApp conversation where a parent describes how patiently the teacher helped their child pronounce Quran letters correctly during a trial class",
  },
  {
    src: "/images/review-2.webp",
    caption: "Student feedback — shared via WhatsApp",
    alt: "Screenshot of a WhatsApp message where a student replies \"Very good\" with a thumbs-up emoji after their first Quran trial class",
  },
];

export const videos: VideoItem[] = [
  {
    id: "u_j-zh0jFL8",
    name: "Saman Imran — Ease Quran student testimonial",
    caption: "Saman Imran — student in the UK",
    description:
      "Saman Imran, an Ease Quran Online Academy student in the UK, shares her experience learning Quran online with a certified teacher.",
    uploadDate: "2024-06-01",
  },
  {
    id: "1eQ9zKKLWfQ",
    name: "Younas Rahman — Ease Quran student testimonial",
    caption: "Younas Rahman — student in the UK",
    description:
      "Younas Rahman, an Ease Quran Online Academy student in the UK, shares his experience learning Quran online with a certified teacher.",
    uploadDate: "2024-06-01",
  },
];
