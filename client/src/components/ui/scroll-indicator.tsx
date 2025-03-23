import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ['hero', 'storage', 'tokenization', 'investing', 'buying', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(id => 
        document.getElementById(id)
      );
      
      const currentSection = sectionElements.findIndex(element => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      if (currentSection !== -1) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress">
      {sections.map((_, index) => (
        <div
          key={index}
          className={`scroll-dot ${index === activeSection ? 'active' : ''}`}
          onClick={() => {
            document.getElementById(sections[index])?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ))}
    </div>
  );
}