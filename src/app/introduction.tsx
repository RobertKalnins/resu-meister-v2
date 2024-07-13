/* introduction.tsx */
import { useState, useEffect } from 'react';

interface IntroductionProps {
  lines: string[];
  onFinish: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({ lines, onFinish }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        const fadeOutTimer = setTimeout(() => {
          setCurrentLineIndex(currentLineIndex + 1);
          setIsVisible(true);
        }, 1000); // 1 second fade-out time
        return () => clearTimeout(fadeOutTimer);
      }, 5000); // 3 seconds display time
      return () => clearTimeout(timer);
    } else {
      onFinish();
    }
  }, [currentLineIndex, lines, onFinish]);

  return (
    <div className="relative h-screen flex items-center px-4 justify-center"> {/* Adjust height as needed */}
      {currentLineIndex < lines.length && (
        <p
          key={currentLineIndex}
          className={`absolute text-white transition-opacity duration-1000 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {lines[currentLineIndex]}
        </p>
      )}
    </div>
  );
};

export default Introduction;
