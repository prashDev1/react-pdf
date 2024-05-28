"use client";
import { Document, Page, pdfjs } from "react-pdf";
import usePdfViewer from "../hooks/usePdfViewer";
import PdfControls from "./PdfControls";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfViewer = ({ pdfPath, pagination = false }) => {
  const {
    isLoading,
    numPages,
    pageNumber,
    scale,
    onDocumentLoadSuccess,
    goToPreviousPage,
    goToNextPage,
    zoomIn,
    zoomOut,
    onDownload,
    onPrint,
  } = usePdfViewer(pdfPath);

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <>
          <Page key={`page_${i}`} pageNumber={i} scale={scale} />{" "}
          <p className="text-center">{`Page ${i}`}</p>{" "}
        </>
      );
    }
    return pages;
  };

  return (
    <div className="shadow-2xl max-w-screen-sm bg-slate-400 rounded-lg mx-auto p-3">
      <h1 className="text-lg font-semibold text-center mb-3 ">My PDF View</h1>
      <PdfControls
        numPages={numPages}
        pageNumber={pageNumber}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        onDownload={onDownload}
        onPrint={onPrint}
        pagination={pagination}
      />
      <div className=" max-h-screen overflow-y-auto">
        <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}>
          {pagination ? (
            <>
              <Page pageNumber={pageNumber} scale={scale} />
              <p className="text-center">{`Page ${pageNumber}`}</p>
            </>
          ) : (
            renderPages()
          )}
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
