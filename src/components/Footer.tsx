const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col items-center p-2 text-sm">
      <div className="flex flex-col items-center pb-5 sm:pr-5">
        <p>Matija Pranjić j.d.o.o.</p>
        <p>OIB: 18467436358</p>
        <p>Osječka 11, Velika Kosnica, 10410 Velika Gorica</p>
        <p>Phone: (+385) 92 102-8847</p>
      </div>

      <div className="flex flex-col items-center pb-5">
        <p>Copyright © 2023. All rights reserved.</p>
        <a
          href="https://portfolio-crofrank.vercel.app/"
          target="_blank"
          rel="noopener"
        >
          Made by:{" "}
          <a
            className="text-yellow-700"
            href="https://www.weblifesupport.com/"
            title="Contact Developer"
          >
            Fran Branković
          </a>
        </a>
      </div>
    </footer>
  )
}

export default Footer
