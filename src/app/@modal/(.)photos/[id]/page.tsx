import { Modal } from "./modal";
import PhotoFullPage from "@/components/photo/full-page";

interface PhotoModalProps {
  params: {
    id: string;
  };
}

export default async function PhotoModal({ params }: PhotoModalProps) {
  const parsedId = parseInt(params.id, 10);
  if (Number.isNaN(parsedId)) throw new Error("Invalid ID");

  return (
    <Modal>
      <PhotoFullPage id={parsedId} />
    </Modal>
  );
}
