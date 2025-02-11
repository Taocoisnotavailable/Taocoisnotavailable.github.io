import React from 'react';

type BentoBoxProps = {
  children: React.ReactNode;
  bgColor: string;
  isLarge?: boolean;
  expandedContent: React.ReactNode;
  isExpanded: boolean;
  onExpand: () => void;
}

const BentoBox = ({ children, bgColor, isLarge = false, expandedContent, isExpanded, onExpand }: BentoBoxProps) => {
  return (
    <div 
      onClick={onExpand}
      className={`rounded-2xl p-8 shadow-xl cursor-pointer transition-all duration-500 relative
        ${isLarge ? 'col-span-2' : 'col-span-1'}
        ${isExpanded ? 'z-20 hover:scale-100' : 'hover:scale-105 z-10'}`}
      style={{ 
        background: bgColor,
        transform: isExpanded ? 'scale(1.1)' : 'scale(1)',
        height: isExpanded ? '400px' : '250px',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
      <div className={`transition-opacity duration-500 ${isExpanded ? 'opacity-30' : 'opacity-100'}`}>
        {children}
      </div>
      
      <div className={`absolute top-1/2 left-0 w-full px-8 transition-all duration-500
        ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        {expandedContent}
      </div>
    </div>
  );
};

export default BentoBox;