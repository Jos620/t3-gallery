import { getMyImages } from "@/server/queries";
import Image from "next/image";

export async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((img) => (
        <div
          key={img.id}
          className="flex h-max flex-col gap-1 bg-foreground p-1 text-background"
        >
          <Image src={img.url} alt={img.name} width={190} height={190} />
          <p>{img.name}</p>
        </div>
      ))}
    </div>
  );
}
