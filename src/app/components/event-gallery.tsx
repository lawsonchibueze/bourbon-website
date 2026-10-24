"use client";

import { useState } from "react";
import Image from "next/image";

type EventGalleryProps = {
  images: string[];
  eventName: string;
};

export default function EventGallery({ images, eventName }: EventGalleryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleImages = isExpanded ? images : images.slice(0, 5);
  const remainingCount = images.length - 5;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleImages.map((image, index) => (
          <div
            key={image}
            className={`relative overflow-hidden bg-muted ${
              index === 1 || index === 9 ? "md:col-span-2" : ""
            }`}
          >
            <Image
              width={1920}
              height={1280}
              src={image}
              alt={`${eventName} event photo ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {remainingCount > 0 && (
        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          className="mt-6 text-sm font-medium text-brand underline-offset-4 hover:underline"
        >
          {isExpanded ? "Show less" : `+${remainingCount} more images`}
        </button>
      )}
    </>
  );
}
