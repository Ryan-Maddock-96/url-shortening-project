import {useState} from 'react';
import logo from '../images/logo.svg';
import {GiHamburgerMenu} from 'react-icons/gi';

const Navigation = () => {

    const [isMobile, setIsMobile] = useState(false);

    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 900));
    window.addEventListener('load', () => setIsMobile(window.innerWidth <= 900));

    return (
        <nav>
            <img src={logo} alt="Shortly Logo"/>
            {isMobile ? <div className='menu'><GiHamburgerMenu/></div> : ''}
            <div className="links" style={{display: isMobile ? 'none': 'flex'}}>
                <a>Features</a>
                <a>Pricing</a>
                <a>Resources</a>
                <div className="links-right">
                    <a>Login</a>
                    <button>Sign Up</button>
                </div>
            </div>
        </nav>
    );
} 

export default Navigation;