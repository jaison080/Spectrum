import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { GiHamburgerMenu} from "react-icons/gi";
import { useState } from 'react';

const Navbar = () => {

    const[showNavbar,setShowNavbar] = useState(false);

    const navbarHandler = () => {
        if(showNavbar === false){
            setShowNavbar(true);
        }
        else{
            setShowNavbar(false);
        }
    }

    return(
        <div>
        <div className="navbar">
            <ul>
            <div className="navbar_list">
                <li> <NavLink to="/blogs" className={({isActive}) => 
                    isActive ? 'active':undefined
                }
                end
                >Home</NavLink></li>
                <li><NavLink to="/qna" className={({isActive}) => 
                    isActive ? "active":undefined
                }>QnA</NavLink></li>
                <li><NavLink to="/jobs" className={({isActive}) => 
                    isActive ? 'active':undefined
                }>Job</NavLink></li>
                <li><NavLink to="/housing" className={({isActive}) => 
                    isActive ? 'active':undefined
                }>Housing</NavLink></li>
                <li><NavLink to="/therapy" className={({isActive}) => 
                    isActive ? 'active':undefined
                }>Therapy</NavLink></li>
                <li><NavLink to="/contact" className={({isActive}) => 
                    isActive ? 'active':undefined
                }>Contact</NavLink></li>
            </div>
            </ul>
        </div>
        <div className='mobile_navbar'>
        <div className='hamburger-menu'>
            <GiHamburgerMenu onClick={navbarHandler} className='' />
        </div>
        {showNavbar && <ul>
            <div className="navbar_list_mobile">
                <li> <NavLink to="/blogs" className={({isActive}) => 
                    isActive ? 'active':undefined
                }
                end
                >Home</NavLink></li>
                <li><NavLink to="/qna" className={({isActive}) => 
                    isActive ? "active":undefined
                }>QnA</NavLink></li>
                <li><NavLink to="/jobs" className={({isActive}) => 
                    isActive ? 'active':undefined
                }>Job</NavLink></li>
                <li><NavLink to="/housing" className={({isActive}) => 
                    isActive ? 'active':undefined
                }>Housing</NavLink></li>
                <li><NavLink to="/therapy" className={({isActive}) => 
                    isActive ? 'active':undefined
                }>Therapy</NavLink></li>
                <li><NavLink to="/contact" className={({isActive}) => 
                    isActive ? 'active':undefined
                }>Contact</NavLink></li>
            </div>
            </ul>}
        </div>
        </div>
    )

}

export default Navbar;