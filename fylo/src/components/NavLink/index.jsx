import './index.scss';

export function NavLink({ children, ...props }) {
    return <a className='header__nav-link'{...props}>{children}</a>
}