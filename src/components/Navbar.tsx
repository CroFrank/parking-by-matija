const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <a href="/" className="flex items-center max-sm:mb-4">
            <img
              className="h-8 w-auto mr-4"
              src={"/src/assets/favicon.svg"}
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
