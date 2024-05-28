import PdfViewer from "./component/PdfViewer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <h1 className="text-lg font-semibold ">My PDF View</h1>
      <div className="flex gap-4">
        <PdfViewer pdfPath="./sampl-pdf.pdf" />
      </div>

    </main>
  );
}
