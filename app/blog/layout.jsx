import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Blog pages reuse the site chrome so the experience is one continuous site.
export default function BlogLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
