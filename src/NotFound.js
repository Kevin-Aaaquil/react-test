import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry Bish</h2>
            <p>404: Page cannot be found</p>
            <Link to="/"><button>Visit My Blog Website Made on React</button></Link>
            <h4>P.S. Its my first time xD</h4>
        </div>
     );
}
 
export default NotFound;