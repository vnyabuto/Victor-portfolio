import React from 'react';
import "./SkillCard.css";
import { BsPatchCheckFill } from 'react-icons/bs';

const SkillCard = ({ data, title }) => {
  return (
    <div className='skill-card'>
      <h3 className="title gradient-text">{title}</h3>
      <div className="skill-content">
        {data.map((list, index) => (
          <div className='skill-details' key={index}>
            <div className="icon-and-name">
              <BsPatchCheckFill className='skill-icon' />
              <h4 className="skill-name">{list.skill}</h4>
            </div>
            <small className="muted skill-level">{list.level}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
