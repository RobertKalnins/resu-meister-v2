/* introduction.tsx */
import { useState, useEffect } from 'react';

interface IntroductionProps {
  lines: string[];
  onFinish: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({ lines, onFinish }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const timer = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
      }, 2000); // Change delay as needed
      return () => clearTimeout(timer);
    } else {
      onFinish();
    }
  }, [currentLineIndex, lines, onFinish]);

  return (
    <div>
      {lines.slice(0, currentLineIndex).map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default Introduction;