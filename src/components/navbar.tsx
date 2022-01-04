import logo from '../assets/Vector.png';

const Navbar = () => {
    return (
        <nav className="navbar" >
            <div className="logo">
                <img src={logo} alt="logo" />
                <h3>SORTING VISUALIZER.</h3>
            </div>
        </nav>
    )
}

export default Navbar;
