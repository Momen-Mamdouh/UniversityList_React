import { Link } from "react-router-dom"
import SocialList from "../Utilities/Components/socialList"
import Logo from '/src/assets/logo.svg'

function Footer(){
    return(
    <footer className="footer sm:footer-horizontal  text-base-content px-10 pt-10 pb-5 ">
        
        <aside className="md:mx-10 mx-0">
        <div className="w-[15%] flex items-center ">
            <img className="object-cover"  alt="Graduation Hat Logo" src={Logo} />
            <h2 className="text-3xl font-bold">UniBase.</h2>
          </div>
            <p className="md:w-1/3 w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur sapiente nulla, quo aut molestiae?
            </p>

            <nav className="py-5">
                <SocialList />
            </nav>
        </aside>

        <nav>
            <h6 className="footer-title">Pages</h6>
            <Link to={''} className="link link-hover">Home</Link>
            <Link to={''} className="link link-hover">Portfolios</Link>
            <Link to={''} className="link link-hover">Services</Link>
            <Link to={''} className="link link-hover">Works</Link>
            <Link to={''} className="link link-hover">Career</Link>

        </nav>

        <nav className="px-16">
            <h6 className="footer-title">Company</h6>
            <Link to={''} className="link link-hover">Terms Conditions</Link>
            <Link to={''} className="link link-hover">Privacy Policy</Link>
            <Link to={''} className="link link-hover">Cookies</Link>
            <Link to={''} className="link link-hover">Careers</Link>
        </nav>

        <nav className="me-24">

            <h6 className="footer-title">Community</h6>
            <Link to={''} className="link link-hover">Help Center</Link>
            <Link to={''} className="link link-hover">Forum</Link>
            <Link to={''} className="link link-hover">Webinars</Link>
            <Link to={''} className="link link-hover">Professionals</Link>

        </nav>
        
   
    </footer>
  
    )
}

export default Footer