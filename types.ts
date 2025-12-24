
import React from 'react';

export type TabType = 'overview' | 'levels' | 'assessment' | 'resources';

export interface Module {
  id: number;
  name: string;
  duration: string;
  type: string;
}

export interface Level {
  id: number;
  title: string;
  subtitle: string;
  verse: string;
  reference: string;
  color: string;
  modules: Module[];
  activities: string[];
}

export interface UserProgress {
  level1: number;
  level2: number;
  level3: number;
  level4: number;
  completedActivities: string[];
}

export interface Feature {
  icon: React.ElementType;
  title: string;
  desc: string;
}

export interface Statistic {
  number: string;
  label: string;
  desc: string;
}

export interface LeadershipResource {
  id: number;
  title: string;
  description: string;
  verse: string;
  benefit: string;
  category: string;
}
