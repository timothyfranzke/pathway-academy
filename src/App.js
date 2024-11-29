import logo from './logo.svg';
import './App.css';
import Mission from './components/Mission';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import { Header, Hero } from './components/Hero';
import ScrollingGallery from './components/ScrollingGallery';
import AboutMe from './components/About';
import Features from './components/Icons';
import SocialMedia from './components/SocialMedia';

const App = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Features />
        <Mission />
        <AboutMe />
        <ScrollingGallery />
        <SocialMedia />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;