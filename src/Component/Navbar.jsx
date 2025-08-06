import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            boxShadow: "0px 0px 10px 0px #ccc",
            padding: "10px 20px"
        }}>
            <img src="/image/logo.png" alt="logo" width={"40px"}/>
            <ul style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                listStyle: "none",
                gap: "40px",
            }}>
                <li><Link to="/" style={{textDecoration: "none", color: "black"}}>Home</Link></li>
                <li><Link to="/gallery" style={{textDecoration: "none", color: "black"}}>Gallery</Link></li>
                <li><Link to="/Services" style={{textDecoration: "none", color: "black"}}>Services</Link></li>
                <li><Link to="/AboutUs" style={{textDecoration: "none", color: "black"}}>About us</Link></li>
                <li><Link to="/Contact" style={{textDecoration: "none", color: "black"}}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar