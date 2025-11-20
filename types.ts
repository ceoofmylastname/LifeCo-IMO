import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface SolutionType {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  theme: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TierItem {
  name: string;
  focus: string;
  features: string[];
  highlight?: boolean;
}