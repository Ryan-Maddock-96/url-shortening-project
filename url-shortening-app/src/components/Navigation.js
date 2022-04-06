import logo from '../images/logo.svg';

const Navigation = () => (
    <nav>
        <img src={logo} alt='Shortly Logo' />
        <div className='links'>
            <a>Features</a>
            <a>Pricing</a>
            <a>Resources</a>
        </div>
        <a>Login</a>
        <a>Sign Up</a>
    </nav>
);

export default Navigation;