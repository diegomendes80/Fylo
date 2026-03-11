import './index.scss';
import {Image} from '../Image';
import { Paragraph } from '../Paragraph';

export function AdvantageCard({title, description, image}) {
    return(
        <div className="advantages__card">
            <Image src={image} alt={title}/>
            <h2>{title}</h2>
            <Paragraph>{description}</Paragraph>
        </div>
    )
}
         
  