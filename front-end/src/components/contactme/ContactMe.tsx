import { FC, useEffect } from 'react';

import { ContactMeImage } from '../../types/ContactMeImage';

import contactMeStyle from './ContactMe.module.scss';

import emailBlack from './images/email_black.png';
import emailColored from './images/email_colored.png';

import telegramBlack from './images/telegram_black.png';
import telegramColored from './images/telegram_colored.png';

import whatsappBlack from './images/whatsapp_black.png';
import whatsappColored from './images/whatsapp_colored.png';

import linkedinBlack from './images/linkedin_black.png';
import linkedinColored from './images/linkedin_colored.png';

import githubBlack from './images/github_black.png';
import githubColored from './images/github_colored.png';

const images: ContactMeImage[] = [
  {
    black: emailBlack,
    colored: emailColored,
    link: 'mailto:vv.dementianov@gmail.com',
    alt: 'email'
  },
  {
    black: telegramBlack,
    colored: telegramColored,
    link: 'https://t.me/dementianov',
    alt: 'telegram'
  },
  {
    black: whatsappBlack,
    colored: whatsappColored,
    link: 'https://wa.me/79222170300',
    alt: 'whatsapp'
  },
  {
    black: linkedinBlack,
    colored: linkedinColored,
    link: 'https://www.linkedin.com/in/vasilii-dementianov/',
    alt: 'linkedin'
  }
];

const ContactMe: FC = () => {
  useEffect(() => {
    images.forEach((image) => {
      const imgBlack = new Image();
      const imgColored = new Image();

      imgBlack.src = image.black;
      imgColored.src = image.colored;
    });

    const githubImgBlack = new Image();
    const githubImgColored = new Image();

    githubImgBlack.src = githubBlack;
    githubImgColored.src = githubColored;
  }, []);

  return (
    <section className={contactMeStyle.container}>
      <section className={contactMeStyle.contactWays}>
        <p>You can contact me via:</p>
        <div className={contactMeStyle.images}>
          {images.map((i) => (
            <a href={i.link} target="_blank" rel="noreferrer">
              <img
                src={i.black}
                alt={i.alt}
                onMouseOver={(e) => (e.currentTarget.src = i.colored)}
                onMouseOut={(e) => (e.currentTarget.src = i.black)}
              />
            </a>
          ))}
        </div>
      </section>
      <section className={contactMeStyle.contactWays}>
        <p>See my GitHub:</p>
        <div className={contactMeStyle.images}>
          <a href="https://github.com/VasiliyDementyanov" target="_blank" rel="noreferrer">
            <img
              src={githubBlack}
              alt="github"
              onMouseOver={(e) => (e.currentTarget.src = githubColored)}
              onMouseOut={(e) => (e.currentTarget.src = githubBlack)}
            />
          </a>
        </div>
      </section>
    </section>
  );
};

export default ContactMe;
