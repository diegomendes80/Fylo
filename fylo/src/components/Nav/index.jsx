import './index.scss';
import { NavLink } from '../NavLink';

export function Nav(){
    return(
        <nav>
                <NavLink href="#">Features</NavLink>
                <NavLink href="#">Team</NavLink>
                <NavLink href="#">Sign In</NavLink>
        </nav>
    )
}