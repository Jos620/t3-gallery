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
    <div className="flex h-full w-full min-w-0 flex-col md:flex-row">
      <div className="flex h-full w-full flex-shrink items-center justify-center p-4">
        <Image
          src={image.url}
          alt={image.name}
          width={384}
          height={384}
          className="object-contain shadow-xl"
        />
      </div>

      <div className="flex h-full w-full flex-col gap-2 border-l border-t border-muted bg-background md:w-64 md:flex-shrink-0 md:border-t-0 lg:w-96">
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
