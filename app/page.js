import PdfViewer from "./component/PdfViewer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      
      <PdfViewer pdfPath="./document.pdf"   />

    </main>
  );
}
