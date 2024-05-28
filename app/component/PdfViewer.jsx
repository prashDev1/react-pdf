"use client";
import { Document, Page, pdfjs } from "react-pdf";
import usePdfViewer from "../hooks/usePdfViewer";
import PdfControls from "./PdfControls";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfViewer = ({ pdfPath }) => {
  const {
    numPages,
    pageNumber,
    scale,
    onDocumentLoadSuccess,
    goToPreviousPage,
    goToNextPage,
    zoomIn,
    zoomOut,
    onDownload,
    onPrint
  } = usePdfViewer(pdfPath);

  

  return (
    <div className="w-full max-w-screen-lg mx-auto p-4">
      <PdfControls
        numPages={numPages}
        pageNumber={pageNumber}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        onDownload={onDownload}
        onPrint={onPrint}
      />
      <div className="pdf-viewer-container max-h-screen overflow-y-auto">
        <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
