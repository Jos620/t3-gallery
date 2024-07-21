import { getMyImages } from "@/server/queries";

export async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((img) => (
        <div
          key={img.id}
          className="flex h-max w-48 flex-col gap-1 bg-foreground p-1 text-background"
        >
          <img src={img.url} alt="" />
          <p>{img.name}</p>
        </div>
      ))}
    </div>
  );
}
