import Badge from "./Badge";
import Button from "./Button";
function Card({title, year, quarter, courseYear, slug, practice, external, link}) {
  

    return (
      <>
        <div>
            <ul className="flex gap-1 sm:mt-0">
                {year? (<li> <Badge>{year}</Badge></li>) : null}
                {practice? (<li> <Badge>{practice}</Badge></li>) : null}
                {quarter? (<li> <Badge>{quarter}</Badge></li>) : null}
                {courseYear? (<li> <Badge>{courseYear}</Badge></li>) : null}
            </ul>
            <h3 className=" mb-7 mt-5 text-3xl font-bold tracking-tight text-white">
                {title}
            </h3>
        </div>
        {external? (<Button external link={link}>Ver más</Button>) : (<Button link={`/materia/${slug}`}>Ver más</Button>)}
          
      </>
    )
  }
  
  export default Card