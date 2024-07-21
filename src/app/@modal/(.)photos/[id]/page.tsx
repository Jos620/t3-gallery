import Image from "next/image";
import { getImage } from "@/server/queries";

interface PhotoModalProps {
  params: {
    id: string;
  };
}

export default async function PhotoModal({ params }: PhotoModalProps) {
  const parsedId = parseInt(params.id, 10);
  if (Number.isNaN(parsedId)) throw new Error("Invalid ID");

  const image = await getImage(parsedId);

  return (
    <div>
      <Image src={image.url} alt={image.name} width={480} height={480} />
    </div>
  );
}
