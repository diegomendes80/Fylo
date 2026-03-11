import './index.scss';
import {Image} from '../Image';
import { NavLink } from '../NavLink';
import { Paragraph } from '../Paragraph';

export function WorkSection() {

    return (
        <section className="workSection">
            
                   
                <div className="work__img">
                    <Image src="illustration-stay-productive.png" alt="Stay productive illustration"/>
                </div> 

                <div className="work__content">
                    <h2>Stay productive, wherever you are</h2>
                    <Paragraph>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</Paragraph>
                    <Paragraph>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</Paragraph>

                    <div className="content__link">
                        <NavLink href="#">See how Fylo works</NavLink>
                        <Image src="icon-arrow.svg" alt="Arrow icon"/>
                    </div>
                </div>

           
        </section>
    )

}