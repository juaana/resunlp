import coffeeIcon from "./assets/coffee-icon.svg"
function Footer() {
  return (
    <footer className="border-t border-neutral-700 text-white mt-10 py-8 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-3">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-neutral-400 transition-colors"
            href="https://juanazabaleta.com.ar/"
          >
            Juana Zabaleta
          </a>{" "}
          | Todos los derechos reservados.
        </p>

        
        <a
          href="https://cafecito.app/juanazabaleta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2  text-natural-200 font-medium py-1.5 px-3 "
        >
        <img
            src={coffeeIcon}
            alt="Cafecito logo"
            className="w-4 h-4"
          />
        Invitame un cafecito
        </a>

        <div className="flex gap-4">
          <a
            href="https://github.com/juaana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-neutral-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/juanazabaleta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-neutral-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jjuanazabaleta@gmail.com"
            className="hover:underline hover:text-neutral-400 transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
