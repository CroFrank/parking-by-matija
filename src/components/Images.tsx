import { useState } from "react"

const Images = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openModal = (imgName: string) => {
    setSelectedImage(imgName)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:gap-8">
          {images.map((image: string, i: number) => (
            <div
              onClick={() => openModal(image)}
              key={i}
              className="relative flex h-72 items-end justify-end overflow-hidden rounded-md shadow-lg hover:shadow-xl md:h-96 hover:cursor-pointer"
            >
              <div className="absolute inset-0 flex h-full w-full object-cover object-center  transition duration-300 hover:scale-105">
                <img
                  src={`${image}`}
                  alt="Parking airport Zagreb"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          onClick={closeModal}
          id="modal"
          className="flex fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 justify-center items-center z-50 hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8 md:h-10 md:w-10 text-white fixed top-10 right-5 sm:top-20 sm:right-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <img
            src={`${selectedImage}`}
            alt="Parking airport Zagreb"
            className="w-10/12 lg:w-1/2 lg:h-1/2 object-contain"
          />
        </div>
      )}
    </>
  )
}

export default Images
