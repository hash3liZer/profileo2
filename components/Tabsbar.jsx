import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="_app.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="something_about_me.html" path="https://blog.shameerkashif.me/resume" />
      <Tab icon="/css_icon.svg" filename="write_me_an_email.css" path="/contact" />
      {/* <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" /> */}
      <Tab icon="/json_icon.svg" filename="__data.json" path="https://blog.shameerkashif.me" />
      <Tab icon="/markdown_icon.svg" filename="cracked_github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
