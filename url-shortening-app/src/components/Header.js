import image from '../images/illustration-working.svg';

const Header = () => (
    <header>
        <div className='headerInfo'>
            <h1>More than just shorter Links</h1>
            <h2>Build your brand's recognition and get detailed insights on how your links are performing</h2>
            <button>Get Started</button>
        </div>
        <img src={image} />
    </header>
);

export default Header;