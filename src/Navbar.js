import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>ltech blog</h1>
            <div className="links">
               <Link to="/">Home</Link>
               <Link  to="/create" style={{
                color: "white",
                backgroundColor: "cyan",
                borderRadius: 8
               }}>new blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;