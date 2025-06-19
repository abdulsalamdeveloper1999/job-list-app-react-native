import { JobModel } from "@/models/jobmodel";
import React, { createContext, useContext, useState } from "react";

type JobContextType = {
  selectedJob: JobModel | null;
  setSelectedJob: (job: JobModel) => void;
};

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedJob, setSelectedJob] = useState<JobModel | null>(null);

  return (
    <JobContext.Provider value={{ selectedJob, setSelectedJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJob must be used within a JobProvider");
  }

  return context;
};
