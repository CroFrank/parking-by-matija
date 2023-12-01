const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative" id="contact">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Kontakt
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Slobodno nas kontaktirajte za informacije o dostupnosti, a mi ćemo
            se potrudit pronaći mjesto za vas.
          </p>
          <div className="mt-5">
            <img
              alt="image of a mobile phone"
              className="m-auto object-fit object-center h-10 inline pr-5"
              src="./mobile.svg"
            />
            <span className="inline font-semibold">+385 92 102 8847</span>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1086.3782426216576!2d16.08391586970568!3d45.762214433797844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476679219a3016a5%3A0x6310cff89782ed5c!2sParking%20-%20Airport%20Zagreb%20by%20Matija!5e1!3m2!1shr!2shr!4v1701373474755!5m2!1shr!2shr"
          loading="lazy"
          className="mx-auto w-full h-80 sm:h-96"
          title="location on google map - Osjecka Ul. 11, 10410, Velika Kosnica"
        ></iframe>
      </div>
    </section>
  )
}

export default Contact
