import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { getGitHubData } from '../lib/github';

// Server Component — runs at build time during `next build` (static export),
// so the GitHub data is baked into the exported HTML.
export default async function Home() {
  const data = await getGitHubData();

  return (
    <>
      <Navbar avatar={data.user.avatar_url} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work data={data} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
