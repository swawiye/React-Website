//import { useImperativeHandle } from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";

function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Greenify</Link>
        <ul>
            <CustomLink to="/about">About Us</CustomLink>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/contact">Contact Us</CustomLink>
        </ul>
    </nav>
}
export default  Navbar;

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}