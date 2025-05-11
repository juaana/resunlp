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

  const { title, description, resources, apuntes } = materia;  

  return (
    <div className="text-white p-8">
      <Hero title={title} description={description} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {resources && (
          <div className="col-span-1 lg:col-span-1">
            <Recursos resources={resources} />
          </div>
        )}
        {apuntes && (
          <CardResumenTemplate apuntes={apuntes} />
        )}
        
      </div>
    </div>
  );
}

export default SubjectTemplate;
