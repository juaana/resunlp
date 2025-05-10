import NavBarElement from "./NavBarElement";

function NavBar() {
  return (
    <>
      <nav className="py-3 mt-5 bg-neutral-800/30 backdrop-blur-lg min-w-96 w-1/3 justify-center mx-auto rounded-full sticky animate-blurred-fade-in border-1 border-neutral-600">
        <ul  className="flex text-stone-200 text-md justify-center space-between gap-6">
          <NavBarElement link="#">Inicio</NavBarElement>
          <NavBarElement link="#">Materias</NavBarElement>
          <NavBarElement link="#">Notas</NavBarElement>          
        </ul>
      </nav>      
    </>
  )
}

export default NavBar
