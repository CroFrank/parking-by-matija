const Parking = () => {
  return (
    <section className="text-gray-600">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-80 overflow-hidden">
            <a href="/gallery">
              <img
                alt="feature"
                className="m-auto object-fit object-center h-full w-1/2"
                src="http://localhost:3000/src/assets/test.jpg"
              />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <img
                  alt="symbol image of location"
                  className="m-auto object-fit object-center h-full w-1/2"
                  src="./location.svg"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Lokacija
                </h2>
                <p className="leading-relaxed text-base">
                  Samo <b>5 minuta</b> udaljenosti od zračne luke, uživajte u
                  kratkoj vožnji do zračne luke uz našu uslugu prijevoza koja je
                  dostupna 24/7.
                </p>
              </div>
            </div>
            <div className="sm:w-1/3 text-center sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <img
                  alt="symbol image of home"
                  className="m-auto object-fit object-center h-full w-1/2"
                  src="./home.svg"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Sigurnost
                </h2>
                <p className="leading-relaxed text-base">
                  Parking je pod video nadzorom, osvijetljen i ograđen unutar
                  našeg dvorišta, a nalazi se u tihoj i mirnoj ulici.
                </p>
              </div>
            </div>
            <div className="sm:w-1/3 text-center sm:pl-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <img
                  alt="symbol image of tranfer by two arrows"
                  className="m-auto object-fit object-center h-full w-1/2"
                  src="./transfer.svg"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Transfer
                </h2>
                <p className="leading-relaxed text-base">
                  Nudimo <b>besplatan</b> prijevoz do zračne luke, a po Vašem
                  povratku i prijevoz natrag do parkinga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Parking
