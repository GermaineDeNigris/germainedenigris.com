import React from 'react';

function MainSection() {
  const word = "Germaine";
  const middleIndex = Math.floor(word.length / 2);
  
  const splitText = (text) => {
    return text.split('').map((char, index) => {
      // Calculate distance from the middle
      const distanceFromMiddle = Math.abs(middleIndex - index);
      // Calculate animation delay (letters closer to the middle have less delay)
      const animationDelay = 0.1 * distanceFromMiddle + 's'; 

      return (
        <span key={index} style={{ animationDelay: animationDelay }} className="fall-letter">
          {char}
        </span>
      );
    });
  };

  return (
    <section  id="top">
      <div>
        <br /><br /><br />
        <p id="unique-p">
          I am a passionate frontend developer based in Paris, France. My specialities are <strong>React JS</strong> and <strong>CSS</strong>, and I love building apps that are beautiful and delightful to use.
        </p>
        <h1 id="unique-header">{splitText(word)}</h1>
      </div>
    </section>
  );
}

export default MainSection;