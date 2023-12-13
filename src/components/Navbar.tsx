const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 w-full z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <a href="/" className="flex items-center mb-5 md:mb-0">
            <img
              className="h-8 w-auto mr-4"
              src="/favicon.svg"
              alt="Logo image"
            />
            <span className="text-gray-800 text-lg font-bold hover:text-gray-700">
              Parking - Airport Zagreb by Matija
            </span>
          </a>

          <div className="flex items-center">
            <a
              href="/gallery"
              className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer"
            >
              Galerija
            </a>
            <a
              href="#pricing"
              className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer"
            >
              Cjenik
            </a>
            <a
              href="#contact"
              className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
