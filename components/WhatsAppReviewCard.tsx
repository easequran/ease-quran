import Image from "next/image";

interface WhatsAppReviewCardProps {
  src: string;
  alt: string;
  caption: string;
}

export default function WhatsAppReviewCard({ src, alt, caption }: WhatsAppReviewCardProps) {
  return (
    <figure className="flex flex-col items-center">
      {/* Phone-style frame */}
      <div className="relative w-full max-w-[300px] rounded-[2rem] border-[6px] border-navy bg-navy shadow-xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-navy rounded-b-2xl z-10" />
        <div className="relative bg-[#E5DDD5]">
          <Image
            src={src}
            alt={alt}
            width={600}
            height={900}
            quality={85}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <figcaption className="text-grey text-xs mt-3 text-center font-medium">
        {caption}
      </figcaption>
    </figure>
  );
}
