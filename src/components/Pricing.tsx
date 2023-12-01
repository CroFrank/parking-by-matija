const Pricing = () => {
  return (
    <section className="text-gray-600 body-font" id="pricing">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Cjenik
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="max-w-screen-md mx-auto p-4">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">1. Dan</h2>
                <p className="text-xl font-bold mt-2">10 €</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">2. Dan</h2>
                <p className="text-xl font-bold mt-2">16 €</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">3. Dan</h2>
                <p className="text-xl font-bold mt-2">22 €</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">4. Dan</h2>
                <p className="text-xl font-bold mt-2">26 €</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">5. Dan</h2>
                <p className="text-xl font-bold mt-2">32 €</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">6. Dan</h2>
                <p className="text-xl font-bold mt-2">36 €</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">7. Dan</h2>
                <p className="text-xl font-bold mt-2">42 €</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">Svaki idući Dan</h2>
                <p className="text-xl font-bold mt-2">+4 €</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
