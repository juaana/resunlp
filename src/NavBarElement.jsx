import { Link } from 'react-router-dom';




function NavBarElement({link, children}) {
  

    return (
      <>
        <li>
            <Link to={link}>{children}</Link>
        </li>   
      </>
    )
  }
  
  export default NavBarElement