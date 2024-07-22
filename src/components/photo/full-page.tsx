import type { Image as ImageSchema } from "@/server/db/schema";
import Image from "next/image";
import { getImage } from "@/server/queries";

interface PhotoFullPage {
  id: ImageSchema["id"];
}

export default async function PhotoFullPage({ id }: PhotoFullPage) {
  const image = await getImage(id);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <Image
          src={image.url}
          alt={image.name}
          width={384}
          height={384}
          className="object-contain"
        />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l border-muted">
        <h1 className="text-2xl font-bold">{image.name}</h1>
      </div>
    </div>
  );
}
