import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import type { FormData } from "../types";

export const saveContact = async (data: FormData) => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      ...data,
      createdAt: new Date(),
      status: "pending",
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving contact:", error);
    return { success: false, error };
  }
};
