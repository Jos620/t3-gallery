import { db } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.image.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="bg-foreground text-background flex h-max w-48 flex-col gap-1 p-1"
          >
            <img src={img.url} alt="" />
            <p>{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
