import React from 'react';
import './Emojis.css'

const Emojis = ({ emojis, onSelectEmoji, onClose }) => {
  return (
    <div className="emoji-popup"
      onClick={onClose}
    >
      <div className="emoji-popup-content">
        {emojis.map((emoji, index) => (
          <article key={index}>
            <div
              key={index}
              onClick={() => onSelectEmoji(emoji)}
            >
              {emoji}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Emojis;
