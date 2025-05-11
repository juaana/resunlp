import NavBarElement from "./NavBarElement";

function NavBar() {
  return (
    <>
      <nav className="top-4 z-50 col-span-6 py-3 mt-5 bg-neutral-800/30 backdrop-blur-lg w-2/3 md:w-1/3 justify-center mx-auto rounded-full sticky animate-blurred-fade-in border border-neutral-600">
      <ul className="flex flex-wrap items-center justify-center gap-6 text-stone-200 text-md">
        <NavBarElement link="/">Inicio</NavBarElement>
        <NavBarElement link="#">Materias</NavBarElement>
        <NavBarElement link="#">Notas</NavBarElement>
      </ul>
    </nav>

    </>
  )
}

export default NavBar
