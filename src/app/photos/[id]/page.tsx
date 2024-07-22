import PhotoFullPage from "@/components/photo/full-page";

interface PhotoModalProps {
  params: {
    id: string;
  };
}

export default async function PhotoPage({ params }: PhotoModalProps) {
  const parsedId = parseInt(params.id, 10);
  if (Number.isNaN(parsedId)) throw new Error("Invalid ID");

  return <PhotoFullPage id={parsedId} />;
}
