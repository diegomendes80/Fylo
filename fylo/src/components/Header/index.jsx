import './index.scss';
import { Nav } from '../Nav';

export function Header(){
    return(
        <header className="header">
            <img src="logo.svg" alt="logo do fylo" className="header__logo"/>
            <Nav className="header__nav"/>
            
        </header>

    )
}