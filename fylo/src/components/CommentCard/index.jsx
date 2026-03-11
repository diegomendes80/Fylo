import "./index.scss";
import { Image } from '../Image';
import { Paragraph } from "../Paragraph";


export function CommentCard({ image, name, func, comment }) {
  return (
    <div className="cards__card">
      <Paragraph className="card__comment">
        {comment}
      </Paragraph>
      <div className="card__profile">
            <Image
            src={image}
            alt={name}
            className="profile__image"
            ></Image>
            <div className="profile__info">
                <p className="profile__name">{name}</p>
                <p className="profile__position">{func}</p>
            </div>
      </div>
    </div>
  );
}
