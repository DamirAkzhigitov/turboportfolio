export interface ResumeIBlock {
  text: string;
  type: string;
}

export type ResumeIItem = ResumeIBlock | string;

export interface WorkPlace {
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string[];
}
