"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { GALLERY_IMAGES } from "@/lib/constants"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>("All")

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))]
  }, [])

  const filteredImages = useMemo(() => {
    return selectedCategory && selectedCategory !== "All"
      ? GALLERY_IMAGES.filter((img) => img.category === selectedCategory)
      : GALLERY_IMAGES
  }, [selectedCategory])

  return (
    <section className="py-20 bg-primary/5" id="gallery">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Gallery"
          description="Explore special moments from our daily activities and discover the cheerful and educational environment we offer."
        />

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category ? "bg-primary" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <GalleryItem key={index} image={image} onClick={() => setSelectedImage(image.src)} />
          ))}
        </div>

        {selectedImage && (
          <ImageLightbox src={selectedImage || "/placeholder.svg"} onClose={() => setSelectedImage(null)} />
        )}
      </div>
    </section>
  )
}

interface GalleryItemProps {
  image: (typeof GALLERY_IMAGES)[0]
  onClick: () => void
}

function GalleryItem({ image, onClick }: GalleryItemProps) {
  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl"
      onClick={onClick}
    >
      <div className="aspect-w-4 aspect-h-3 relative">
        <Image
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="font-medium">{image.alt}</p>
        <span className="text-sm opacity-80">{image.category}</span>
      </div>
    </div>
  )
}

interface ImageLightboxProps {
  src: string
  onClose: () => void
}

function ImageLightbox({ src, onClose }: ImageLightboxProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-w-4xl w-full">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-white hover:bg-white/10"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>
        <div className="relative aspect-w-16 aspect-h-9">
          <Image src={src || "/placeholder.svg"} alt="Enlarged image" fill className="object-contain" />
        </div>
      </div>
    </div>
  )
}

