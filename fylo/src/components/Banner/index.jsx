import './index.scss';
import { Paragraph } from '../Paragraph';
import { BannerTitle } from '../BannerTitle';
import { Button } from '../Button';
import { Image } from '../Image';

export function Banner() {

    return (
        <section className="banner">

            <div className="banner__img">
                <Image src="illustration-intro.png" alt="ilustração de um computador" />
            </div>

            <div className="banner__content">
                <BannerTitle >All your files in one secure location, accessible anywhere.</BannerTitle>
                <Paragraph >Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</Paragraph>
                <Button >Get Started</Button>
            </div>
            

    
        </section>
    )
}
