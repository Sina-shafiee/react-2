import React, { useState } from 'react';

function Highlighter(props) {
  const [color, setColor] = useState(props.color);
  function highlightPurple() {
    // props.color = "purple";
    setColor(color === 'blue' ? props.color : 'blue');
  }

  return (
    <span className={color} onClick={highlightPurple}>
      {props.word}
    </span>
  );
}

export default Highlighter;
