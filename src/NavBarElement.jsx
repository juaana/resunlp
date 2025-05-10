

function NavBarElement({link, children}) {
  

    return (
      <>
        <li>
          <a href={link}>{children}</a>
        </li>   
      </>
    )
  }
  
  export default NavBarElement