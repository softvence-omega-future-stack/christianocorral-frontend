// components/homepage/FullWidthImage.tsx
import Image from "next/image";

export default function FullWidthImage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* 1. Container keeps the image’s original aspect ratio */}
      <div className="relative w-full pb-[31.25%]">
        {/* 2. Image fills the container, stays contained, full-width */}
        <Image
          src="/home/ibg.png"
          alt="iPhone Banner"
          fill
          className="object-contain"
          sizes="100vw"
          priority
          quality={95}
        />
      </div>
    </div>
  );
}