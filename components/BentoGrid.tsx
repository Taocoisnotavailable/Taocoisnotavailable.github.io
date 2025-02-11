"use client";

import React, { useState } from 'react';
import BentoBox from './BentoBox';

type BoxId = 'profile' | 'about' | 'skills' | 'projects' | null;

const BentoGrid = () => {
  const [expandedBox, setExpandedBox] = useState<BoxId>(null);

  return (
    <div className="min-h-screen p-8" style={{ background: '#D7DEDC' }}>
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
        <BentoBox 
          bgColor="#CFCFCD"
          isExpanded={expandedBox === 'profile'}
          onExpand={() => setExpandedBox(expandedBox === 'profile' ? null : 'profile')}
          expandedContent={
            <div className="text-zinc-800">
              <h3 className="font-bold mb-4">More About Me</h3>
              <p>Hi! I'm a senior at Seven Lakes Highschool aspiring to gain a career in computer science.</p>
            </div>
          }>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full mb-4" style={{ background: '#9A879D' }}></div>
            <h2 className="text-xl font-medium text-zinc-800">Carlos Losin</h2>
          </div>
        </BentoBox>
        
        <BentoBox 
          bgColor="#9A879D" 
          isLarge
          isExpanded={expandedBox === 'about'}
          onExpand={() => setExpandedBox(expandedBox === 'about' ? null : 'about')}
          expandedContent={
            <div className="text-white">
              <p className="leading-relaxed">I'm currently working on my 201-301 CCNA certification. I'm planning on going to UTSA to study computer science with a focus in cybersecurity.</p>
            </div>
          }>
          <h2 className="text-xl font-medium text-white mb-4">About Me</h2>
          <div className="h-20 bg-white/10 rounded"></div>
        </BentoBox>
        
        <BentoBox 
          bgColor="#7A3B69" 
          isLarge
          isExpanded={expandedBox === 'skills'}
          onExpand={() => setExpandedBox(expandedBox === 'skills' ? null : 'skills')}
          expandedContent={
            <div className="text-white">
              <h3 className="font-bold mb-4">Technical Skills</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Java, Javascript, Python</li>
                <li>Network and Security Fundamentals</li>
                <li></li>
              </ul>
            </div>
          }>
          <h2 className="text-xl font-medium text-white mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 bg-white/10 rounded"></div>
            <div className="h-32 bg-white/10 rounded"></div>
          </div>
        </BentoBox>
        
        <BentoBox 
          bgColor="#563440"
          isExpanded={expandedBox === 'projects'}
          onExpand={() => setExpandedBox(expandedBox === 'projects' ? null : 'projects')}
          expandedContent={
            <div className="text-white">
              <h3 className="font-bold mb-4">Featured Projects</h3>
              <ul className="space-y-2">
                <li className="font-medium">a whole</li>
                <li className="font-medium">lotta</li>
                <li className="font-medium">nothing</li>
              </ul>
            </div>
          }>
          <h2 className="text-xl font-medium text-white mb-4">Projects</h2>
          <div className="h-32 bg-white/10 rounded"></div>
        </BentoBox>
      </div>
    </div>
  );
};

export default BentoGrid;