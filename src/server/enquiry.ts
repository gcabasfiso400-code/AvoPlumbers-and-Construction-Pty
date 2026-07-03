import { createServerFn } from "@tanstack/react-start";
import { appendFile } from "node:fs/promises";

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    try {
      const logEntry = JSON.stringify({
        timestamp: new Date().toISOString(),
        ...data,
      }) + "\n";
      
      await appendFile("enquiries.log", logEntry);
      
      return { success: true };
    } catch (error) {
      console.error("Failed to log enquiry:", error);
      throw new Error("Internal Server Error");
    }
  });
