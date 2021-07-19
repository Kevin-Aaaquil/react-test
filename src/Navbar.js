import {Link} from 'react-router-dom'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The super awesome website</h1>
            <div className="links">
                <Link to="/" style={{
                    color:"white",
                    backgroundColor:'#8d2ce7',
                    borderRadius:"8px"
                }}>Home</Link>
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor:'#8d2ce7',
                    borderRadius:"8px"
                }}>Create</Link>
            </div>
        </nav>
    );
}
 
export default Navbar ;