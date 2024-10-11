import React from 'react'

interface SectionDividerProps {
  fillColor: string;
  bgColor: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ fillColor, bgColor }) => {
  return (
    <div className="section-divider" style={{ backgroundColor: bgColor }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill={fillColor}
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}

export default SectionDivider