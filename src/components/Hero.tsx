const Hero = () => {
  return (
    <section
      className="relative sm:px-20 bg-cover bg-center text-black"
      style={{
        backgroundImage: 'url("/p.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-60"></div>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 max-md:flex max-md:justify-center z-10">
          <img className="h-80" alt="hero" src="/plane.svg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center z-10">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-shadow-black">
            Parking - Airport Zagreb by Matija
          </h1>
          <p className="mb-8 leading-relaxed font-medium">
            Odaberite najbolje parkirno mjesto za svoje potrebe. Otvoreno 24
            sata dnevno, 7 dana u tjednu. Lako nas je pronaći i mi se brinemo o
            Vašem automobilu i Vašem transferu do i od zračne luke. Sve što
            trebate učiniti je kontaktirati nas kako bismo provjerili
            dostupnost.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
