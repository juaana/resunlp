import { useState } from "react";
import Card from "../components/Card";

function CardResumenTemplate({ items = [], type = "apuntes" }) {
  const [showAll, setShowAll] = useState(false);
  const [filtroTipo, setFiltroTipo] = useState(type);

  // Asegurarnos de que 'items' es un array
  if (!Array.isArray(items)) {
    console.error("Se esperaban los items como un arreglo.");
    return null;
  }

  // Filtrar los items según el tipo seleccionado
  const filteredItems = items.filter(item => item.type === filtroTipo);
  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, 4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>

      <div className="col-span-6 flex gap-4">
        {/* Botón para filtrar por 'apuntes' */}
        <button
          onClick={() => setFiltroTipo("apuntes")}
          className={`px-3 py-1 ${filtroTipo === "apuntes" ? "text-white border-b-2 border-white" : "text-neutral-400"}`}
          aria-selected={filtroTipo === "apuntes"}
          aria-label="Mostrar solo apuntes"
        >
          Apuntes
        </button>
        
        {/* Botón para filtrar por 'ejercicios' */}
        <button
          onClick={() => setFiltroTipo("ejercicios")}
          className={`px-3 py-1 ${filtroTipo === "ejercicios" ? "text-white border-b-2 border-white" : "text-neutral-400"}`}
          aria-selected={filtroTipo === "ejercicios"}
          aria-label="Mostrar solo ejercicios"
        >
          Ejercicios
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
        {/* Si no hay items que coincidan con el filtro */}
        {itemsToShow.length === 0 ? (
          <div className="col-span-2 flex flex-col text-center">
            <p className="text-center text-neutral-500">No hay elementos disponibles para el tipo seleccionado.</p>
          </div>
        ) : (
          itemsToShow.map((item, index) => (
            <div
              key={item.id || index} // Usar 'item.id' como clave, con fallback al índice
              className="col-span-1 bg-neutral-800 text-white shadow-md hover:shadow-sm hover:shadow-neutral-600 border border-neutral-700 rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
            >
              <Card
                title={item.title}
                practice={item.practice}
                link={item.link}
                external
                buttonText={`Ver ${filtroTipo.slice(0, -1)}`} 
              />
            </div>
          ))
        )}
      </div>

      {/* Mostrar botón 'Ver más' si hay más de 4 elementos */}
      {filteredItems.length > 4 && (
        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={toggleShowAll}
            className="border-neutral-500 mt-2 text-neutral-200 rounded-xl py-2 px-10 font-small text-md transition-colors duration-300 hover:bg-neutral-700 hover:text-white"
          >
            {showAll ? "Ver menos" : "Ver más"}
          </button>
        </div>
      )}
    </>
  );
}

export default CardResumenTemplate;
