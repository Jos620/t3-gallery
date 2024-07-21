import { db } from "@/server/db";
import { images } from "@/server/db/schema";
import { auth } from "@clerk/nextjs/server";
import {
  createUploadthing,
  type FileRouter as BaseFileRouter,
} from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const fileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      const user = auth();

      if (!user.userId) throw new UploadThingError("Unauthorized");

      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db.insert(images).values({
        name: file.name,
        url: file.url,
        userId: metadata.userId,
      });

      return { uploadedBy: metadata.userId };
    }),
} satisfies BaseFileRouter;

export type FileRouter = typeof fileRouter;
