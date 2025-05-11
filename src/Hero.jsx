
function Hero({title, description}) {
  

    return (
      <>
        <div className="py-8 col-span-6 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="animate-slide-in-top mb-4 text-4xl font-extrabold tracking-tight leading-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="animate-fade-in mb-8 text-lg font-normal text-neutral-400 lg:text-xl sm:px-8 md:px-16">
            {description}
          </p>
        </div>
      </>
    )
  }
  
  export default Hero