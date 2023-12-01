const Navbar2 = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <a href="/" className="flex items-center max-sm:mb-4">
            <img
              className="h-8 w-auto mr-4"
              src="http://localhost:3000/src/assets/favicon.svg"
              alt="Logo image"
            />
            <h2 className="text-gray-800 text-lg font-bold hover:text-gray-700">
              Parking - Airport Zagreb by Matija
            </h2>
          </a>

          <div className="flex items-center">
            <a
              href="http://localhost:3000/"
              className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer"
            >
              Naslovnica
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar2
