import './index.scss';
import { CommentCard } from '../CommentCard';
import { Image } from '../Image';


export function CommentSection() {

    const comments = [
        {
            image: "profile-1.jpg",
            name: "Satish Patel",
            func: "Founder & CEO, Huddle",
            comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        },

        {
            image: "profile-2.jpg",
            name: "Bruce McKenzie",
            func: "Founder & CEO, Huddle",
            comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        },

        {
            image: "profile-3.jpg",
            name: "Iva Boyd",
            func: "Founder & CEO, Huddle",
            comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        }
    ];

    return(
        <section className="commentSection">
          

            <div className="commentSection__cards">
                {comments.map((comment, index) => {
                    return(
                        <CommentCard
                            key={index}
                            image={comment.image}
                            name={comment.name}
                            func={comment.func}
                            comment={comment.comment}
                        ></CommentCard>
                    )
                })}
            </div>
        </section>
    )

}