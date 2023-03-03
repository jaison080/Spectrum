import './Navbar.css';

const Navbar = () => {

    return(
        <div className="navbar">
            <ul>
            <div className="navbar_list">
                <li> Home</li>
                <li><a href='#components/QnA/QnA' >QnA</a></li>
                <li>Job</li>
                <li>Housing</li>
                <li>Therapy</li>
                <li>Contact</li>
            </div>
            </ul>
        </div>
    )

}

export default Navbar;