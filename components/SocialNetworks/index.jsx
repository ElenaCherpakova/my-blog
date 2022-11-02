import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import styles from './index.module.scss';
import cl from 'classnames';
import ScreenEgg from '../ScreenEgg';
const socialNetworks = [{
  id: 1,
  icon: AiFillLinkedin,
  link: 'https://www.linkedin.com/in//',
}, {
  id: 2,
  icon: AiFillGithub,
  link: 'https://github.com/ElenaCherpakova',
}, {
  id: 3,
  icon: AiFillInstagram,
  link: 'https://www.instagram.com/elenacherpakova/',
}]

const SocialNetworks = ({ className }) => {
  return (
    <ScreenEgg>
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map(({ id, link, icon }) => (
          <li key={id}>
            <a href={link} target="_blank" rel="noreferrer" className={styles.listLink}>
              {React.createElement(
                icon,
                { color: 'black', size: '2.9rem' }
              )}

            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  )
};


export default SocialNetworks;