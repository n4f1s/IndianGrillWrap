"use client"


import Zoom, {
  type ControlledProps,
  type UncontrolledProps,
} from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

export type ImageZoomProps = UncontrolledProps & {
  isZoomed?: ControlledProps["isZoomed"]
  onZoomChange?: ControlledProps["onZoomChange"]
  className?: string
  backdropClassName?: string
}

// Specialised menu component
type ZoomableMenuImageProps = {
  src: string
  alt: string
}

export default function ZoomableMenuImage({ src, alt }: ZoomableMenuImageProps) {
  return (
    <div className="relative w-full rounded-2xl">
      <Zoom>
        <div className="relative w-full aspect-video overflow-hidden rounded-xl">
          <img
            alt={alt}
            src={src}
            className="w-full h-full object-cover md:object-contain cursor-zoom-in"
          />
        </div>
      </Zoom>

      <p className="mt-2 text-sm sm:text-base font-semibold text-primary text-center">
        Click or tap to open a larger, zoomed view of the full menu. 
      </p>
    </div>
  )
}
