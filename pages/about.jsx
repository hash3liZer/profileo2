const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3><br />
      <p>My profile lies at this link:&nbsp;
        <a
          href="https://blog.shameerkashif.me/resume"
          target="_blank"
          rel="noopener"
          // className={styles.underline}
        >
          https://blog.shameerkashif.me/resume
        </a>
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
