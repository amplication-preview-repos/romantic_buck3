import { Appointment } from "../appointment/Appointment";

export type Client = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  interestedIn: string | null;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
