import { Link } from "react-router-dom"
import SocialList from "../Components/socialList"
import Logo from '/src/assets/logo.svg'



function Navbar(){
  return( 
    <div className="px-24 navbar shadow-sm fixed  z-50"  >
      
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to={''}>Our Programmers</Link>
                <ul className="p-2">
                  <li><Link to={''}>Angular</Link></li>
                  <li><Link to={''}>React</Link></li>
                </ul>
              </li>
           
            <li><Link to={''}>Awards</Link></li>
            <li><Link to={''}>About Us</Link></li>
            <li><Link to={''}>Article</Link></li>
            <li><Link to={''}>Contact Us</Link></li>
          </ul>
        </div>
        
          <Link to={''} className="w-[15%] flex items-center">
            <img className="object-cover"  alt="Graduation Hat Logo" src={Logo} />
            <h2 className="text-2xl font-bold">UniBase.</h2>
          </Link>
       
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base ">

            <li><Link to={'/home'}>Home</Link></li>

            <li><Link to={'/uniList'}>Universites</Link></li>

            <li><Link to={'/about'}>About </Link></li>

            <li><Link to={'/books'}>Books </Link></li>  

        </ul>

      </div>

      <div className="navbar-end flex gap-5">
          <SocialList listClasses={'bg-gradient-to-l from-cyan-500 to-blue-400 p-2.5 rounded-full'}/>

      </div>

    </div>
  )
}

export default Navbar