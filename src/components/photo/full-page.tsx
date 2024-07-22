import type { Image as ImageSchema } from "@/server/db/schema";
import Image from "next/image";
import { getImage } from "@/server/queries";
import { clerkClient } from "@clerk/nextjs/server";

interface PhotoFullPage {
  id: ImageSchema["id"];
}

export default async function PhotoFullPage({ id }: PhotoFullPage) {
  const image = await getImage(id);

  const uploaderInfo = await clerkClient().users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex w-full flex-shrink items-center justify-center">
        <Image
          src={image.url}
          alt={image.name}
          width={384}
          height={384}
          className="object-contain"
        />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col gap-2 border-l border-muted">
        <div className="border-b border-muted p-4">
          <h1 className="text-lg font-bold">{image.name}</h1>
        </div>

        <div>
          <div className="flex flex-col px-4 py-2">
            <span className="font-bold">Uploaded By:</span>
            <span>{uploaderInfo.fullName}</span>
          </div>

          <div className="flex flex-col px-4 py-2">
            <span className="font-bold">Created on:</span>
            <span>{new Date(image.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
