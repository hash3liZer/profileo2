import Head from 'next/head';
import Script from 'next/script';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="My name is Shameer Kashif aka hash3liZer. I do Cyber Security, break things, play CTFs. I am more into Web & Binary Exploitation"
      />
      <meta
        name="keywords"
        content="Shameer, Shameer Kashif, hash3liZer, portfolio, cyber security, ctfs, web exploitation, binary exploitation"
      />
      <meta property="og:title" content="Shameer Kashif | hash3liZer" />
      <meta
        property="og:description"
        content="My name is Shameer Kashif aka hash3liZer. I do Cyber Security, break things, play CTFs. I am more into Web & Binary Exploitation"
      />
      
      <meta property="og:image" content="https://github.com/user-attachments/assets/6d314326-0216-43ee-9162-fb8a1b8c3029" />
      <meta property="og:url" content="https://shameerkashif.me" />
      <meta name="twitter:card" content="summary_large_image" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GLL1KK0TWH"></script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GLL1KK0TWH');
        `}
      </Script>
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Shameer Kashif',
};
