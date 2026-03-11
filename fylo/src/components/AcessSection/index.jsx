import './index.scss';
import { Paragraph } from '../Paragraph';
import { Button } from '../Button';

export function AcessSection(){

    return(
        <section className="acessSection">
            <h2 className="title">Get early access today</h2>
            <Paragraph>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
            questions, our support team would be happy to help you.</Paragraph>

            <div className="action">
                <input type="email" name="email" id="email" placeholder="example@gmail.com"/>
                <Button>Get Started for free</Button>

            </div>
        </section>
    )
}