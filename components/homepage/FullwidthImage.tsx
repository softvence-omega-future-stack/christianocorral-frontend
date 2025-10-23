// components/homepage/FullWidthImage.tsx

import Image from "next/image";

export default function FullWidthImage() {
  return (
    <div className="my-20">
      <Image
        src="/images/iphone-banner.jpg"
        alt="iPhone Banner"
        className="w-full h-80 md:h-[400px] object-cover rounded-none"
        width={256}
        height={256}
      />
    </div>
  );
}
