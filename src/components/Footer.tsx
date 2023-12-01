const Footer = () => {
  return (
    // <footer className="text-gray-600 body-font">
    //   <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    //     <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
    //       © 2023AstroBiz —
    //     </p>
    //   </div>
    // </footer>
    <footer className="container mx-auto flex flex-col items-center p-5 text-sm">
      <p>Copyright © 2023. All rights reserved.</p>
      <a href="https://github.com/CroFrank" target="_blank" rel="noopener">
        Made by: <span className="text-yellow-700">Fran Branković</span>
      </a>
    </footer>
  )
}

export default Footer
