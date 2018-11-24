import React from 'react';

export const DropletIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3.004c.25.386.525.772.827 1.172.297.395 1.308 1.664 1.495 1.91C11.522 7.663 12 8.802 12 10.5c0 2.002-1.613 3.5-4 3.5s-4-1.498-4-3.5c0-1.698.48-2.837 1.678-4.414.187-.246 1.198-1.515 1.495-1.91.302-.4.576-.786.827-1.172z" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd"/>
  </svg>
);

export const CheckIcon = ({ backgroundColor, outlineColor, checkColor }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor, boxShadow: `inset 0 0 0 1px ${outlineColor}`, borderRadius: '2px' }}>
    <path d="M4 9l2 2M6 11l6-6" stroke={ checkColor } strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square"/>
  </svg>
);

export const RadioIcon = ({ selected }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <circle stroke="currentColor" cx="8" cy="8" r="7.5"/>
      <circle fill={ selected ? 'currentColor' : 'transparent' } cx="8" cy="8" r="4"/>
    </g>
  </svg>
);
