export interface JobModel {
  id?: string;
  imageUrl: string;
  jobTitle: string;
  companyName: string;
  location: string;
  minSalary: number;
  maxSalary: number;
  description: string;
  linkedinUrl: string;
}

export const initialForm: JobModel = {
  jobTitle: "",
  companyName: "",
  location: "",
  minSalary: 0,
  maxSalary: 0,
  description: "",
  linkedinUrl: "",
  imageUrl: "",
};
