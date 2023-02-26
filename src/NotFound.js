import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
           <h2>opps</h2>
           <p>the page not found</p>
           <Link to="/">Back to Home Please...</Link>
        </div>
     );
}
 
export default NotFound;