import ImageGallery from "./Ejercicio7";

export default function Imagenes() {
  const urls = [
    "https://i.imgur.com/fWPDGfF.jpeg",
    "https://i.imgur.com/AxeeEIh.jpeg",
    "https://i.imgur.com/1NQs2oG.jpeg",
  ];

  return (
    <>
      <ImageGallery imagenes={urls} />
    </>
  );
}