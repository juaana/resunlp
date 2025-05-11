import { Link } from "react-router-dom";
function Button({link, children, className, external}) {
  
  return external ? (
      <>
       <button className={`bg-neutral-200 text-stone-900 rounded-xl w-full py-3 font-medium text-lg transition-colors duration-300 hover:bg-neutral-700 hover:text-white border border-transparent hover:border-neutral-500 ${className}`}><a href={link} target="_blank" rel="noopener noreferrer">{children}</a></button>
      </>
    ) : (
      <>
       <button className={`bg-neutral-200 text-stone-900 rounded-xl w-full py-3 font-medium text-lg transition-colors duration-300 hover:bg-neutral-700 hover:text-white border border-transparent hover:border-neutral-500 ${className}`}><Link to={link}>{children}</Link></button>
      </>
    )
  }
  
  export default Button