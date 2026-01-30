
export enum PillarType {
  HEART = 'Heart',
  WORKSPACE = 'Workspace',
  MENTOR = 'Mentor',
  VAULT = 'Vault',
  NETWORK = 'Network',
  PROFILE = 'Profile'
}

export type WorkMode = 'Office' | 'Remote' | 'Field';

export interface Task {
  id: string;
  title: string;
  status: 'Todo' | 'Doing' | 'Done';
  points: number;
  assignee: string;
  dueDate: string;
}

export interface Project {
  id: string;
  title: string;
  status: 'On-going' | 'Paused' | 'Done';
  progress: number;
  description: string;
}

export interface Feedback {
  id: string;
  mentor: string;
  rating: number;
  comment: string;
  date: string;
  visibility: 'Private' | 'Team' | 'Public';
}
