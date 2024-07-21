import { generateUploadButton } from "@uploadthing/react";
import type { FileRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<FileRouter>();
