import './index.scss';
import { AdvantageCard } from '../AdvantageCard';

export function AdvantageSection() {

  const advantages = [

    {
      title: "Access your files, anywhere",
      description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
      image: "icon-access-anywhere.svg"
    },
    {
      title: "Security you can trust",
      description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
      image: "icon-security.svg"
    },
    {
      title: "Real-time collaboration",
      description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
      image: "icon-collaboration.svg"
    },

    {
      title: "Store any type of file",
      description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      image: "icon-any-file.svg"
    }

  ]

  return(
    <section className="advantageSection">
      <div className="cards">
        {advantages.map((advantage, index) => {
          return(
            <AdvantageCard
            key={index}
            title={advantage.title}
            description={advantage.description}
            image={advantage.image}
          />
          )
      })

      }
      </div>
    </section>
  )


}
