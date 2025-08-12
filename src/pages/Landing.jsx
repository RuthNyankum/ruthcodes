import React, { useState, useEffect } from 'react';

import Home from './Home';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Contact from './Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

import { FiBriefcase, FiCode, FiHome, FiMail, FiUser } from 'react-icons/fi';

function Landing() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      // console.log('Element not found:', sectionId); // Debug log
    }
  };

  const navItems = [
    { id: 'home', icon: FiHome, label: 'Home' },
    { id: 'about', icon: FiUser, label: 'About' },
    { id: 'work', icon: FiBriefcase, label: 'Work' },
    { id: 'skills', icon: FiCode, label: 'Skills' },
    { id: 'contact', icon: FiMail, label: 'Contact' },
  ];

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Scroll spy effect
  useEffect(() => {
    // Only set up scroll spy after loading is complete
    if (isLoading) return;

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is 50% visible
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [isLoading]);

  // Show loader while loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen">
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main>
        <section id="home" className="min-h-screen">
          <Home scrollToSection={scrollToSection} />
        </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="work" className="min-h-screen">
          <Work />
        </section>

        <section id="skills" className="min-h-screen">
          <Skills />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Landing;
