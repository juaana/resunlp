import Card from "../components/Card";

function CardResumenTemplate({ apuntes }) {
  return (
    <div className="lg:col-span-2 flex flex-col">
      <h2 className="text-2xl mb-2 font-bold animate-slide-in-top">Apuntes</h2>
      <div className="grid grid-cols-2 gap-3">
        {apuntes.map((apunte, index) => (
          <div 
            key={index} 
            className="col-span-1 bg-neutral-800 text-white shadow-md hover:shadow-sm hover:shadow-neutral-600 border border-neutral-700 rounded-xl p-5 hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between"
          >
            <Card
              title={apunte.title}
              practice={apunte.practice} 
              link={apunte.link} 
              external={apunte.external}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardResumenTemplate;
