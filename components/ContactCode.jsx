import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'shameerkashif.me',
    href: 'https://shameerkashif.me',
  },
  {
    social: 'blog',
    link: 'blog.shameerkashif.me',
    href: 'https://blog.shameerkashif.me',
  },
  {
    social: 'WA',
    link: '+923192205651',
    href: 'tel:+923192205651',
  },
  {
    social: 'email',
    link: 'me@shameerkashif.me',
    href: 'mailto:me@shameerkashif.me',
  },
  {
    social: 'github',
    link: 'hash3liZer',
    href: 'https://github.com/hash3liZer',
  },
  {
    social: 'linkedin',
    link: 'hash3liZer',
    href: 'https://www.linkedin.com/in/hash3lizer/',
  },
  {
    social: 'twitter/x',
    link: 'hash3liZer',
    href: 'https://www.twitter.com/hash3liZer',
  },
  {
    social: 'instagram',
    link: 'shameerkashif_',
    href: 'https://www.instagram.com/shameerkashif_',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
