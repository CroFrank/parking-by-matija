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
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">1 Dan</h2>
                <p className="text-xl mt-2">10 € / 75,35kn</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">2 Dana</h2>
                <p className="text-xl mt-2">16 € / 120,55kn</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">3 Dana</h2>
                <p className="text-xl mt-2">22 € / 161,80kn</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">4 Dana</h2>
                <p className="text-xl mt-2">26 € / 195,90kn</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">5 Dana</h2>
                <p className="text-xl mt-2">32 € / 241,10kn</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">6 Dana</h2>
                <p className="text-xl mt-2">36 € / 271,24kn</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">7 Dana</h2>
                <p className="text-xl mt-2">42 € / 316,45kn</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">Svaki idući Dan</h2>
                <p className="text-xl mt-2">+4 € / 30,14kn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
