import './index.scss';
import { Image } from '../Image';
import { NavLink } from '../NavLink';
import { Paragraph } from '../Paragraph';
import { AcessSection } from '../AcessSection';

export function Footer(){
    return(
        <section className="footer">
            
            <AcessSection/>

            <div className="footer__present">
                <Image src="logo.svg"></Image>

                <div className="present__text">
                    <Image src="icon-location.svg"></Image>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Paragraph>

                </div>
            </div>
            

            <div className="footer__contact1">
                <span>
                    <Image src="icon-phone.svg"></Image>
                    <Paragraph>+1-543-123-4567</Paragraph>
                </span>

                <span>
                    <Image src="icon-email.svg"></Image>
                    <Paragraph>contact@fylo.com</Paragraph>
                </span>
            </div>

            <div className="footer__contact2">
                <NavLink href="#">About Us</NavLink>
                <NavLink href="#">Jobs</NavLink>
                <NavLink href="#">Press</NavLink>
                <NavLink href="#">Blog</NavLink>
            </div>

            <div className="footer__contact3">
                <NavLink href="#">Contact Us</NavLink>
                <NavLink href="#">Terms</NavLink>
                <NavLink href="#">Privacy</NavLink>
            </div>

            <div className="footer__social">
                <Image src="icon-facebook.svg"></Image>
                <Image src="icon-twitter.svg"></Image>
                <Image src="icon-instagram.svg"></Image>
            </div>
        </section>
    )
}