import { JobModel } from "@/models/jobmodel";
import { getAuth, signOut } from "@firebase/auth";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import uuid from "react-native-uuid";
import { db } from "../config/firebaseConfig";

export class FirestoreOperations {
  static async createJob(data: JobModel) {
    try {
      const id = uuid.v4();

      const docRef = doc(db, "jobs", id);

      const jobData = {
        ...data,
        id: docRef.id,
        createdAt: Timestamp.now(),
      };

      await setDoc(docRef, jobData);

      return "Job Created successfully";
    } catch (error: any) {
      console.error(error.message);
      return "Job creation failed: " + error.message;
    }
  }

  static async getJobs() {
    const jobs: JobModel[] = [];

    try {
      const res = await getDocs(collection(db, "jobs"));
      res.forEach((job) => {
        jobs.push({
          ...(job.data() as JobModel),

          id: job.id,
        });
      });
      // console.log(jobs);

      return jobs;
    } catch (error: any) {
      console.error(error.message);
      return [];
    }
  }

  static async logout() {
    try {
      await signOut(getAuth());
      console.log("User signed out!");
      return true;
    } catch (error: any) {
      console.log(error);
      return false;
    }
  }
}
