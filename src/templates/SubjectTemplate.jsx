import { useParams } from "react-router-dom";  
import Hero from "../Hero";
import materias from '../data/subjectMainData.json'; 
import Recursos from "../components/Recursos";
import CardResumenTemplate from "./CardResumenTemplate";

function SubjectTemplate() {
  const { slug } = useParams();  
  const materia = materias.find(m => m.slug === slug);  

  if (!materia) {
    return <div>Materia no encontrada</div>;
  }

  const { title, description, resources, apuntes, ejercicios, id } = materia;  

  // Combinamos apuntes y ejercicios en un solo array si existen
  const combinedItems = [
    ...(apuntes || []), 
    ...(ejercicios || [])
  ]; // Esto junta ambos arrays en uno solo, asegurándose de que no sean undefined

  return (
    <div className="text-white p-8">
      <Hero title={title} description={description} />

      <div className={`grid gap-8 mt-10 ${resources ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'}`}>
        {resources && (
          <div className="col-span-1">
            <Recursos resources={resources} />
          </div>
        )}

        {combinedItems.length > 0 ? (
          <div className={`col-span-1 lg:col-span-${resources ? '2' : '2'} text-center text-neutral-500 `}>
          <CardResumenTemplate items={combinedItems} type="apuntes" />
          </div>
        ) : null}
      </div>
  </div>

  );
}

export default SubjectTemplate;
