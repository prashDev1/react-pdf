import { useState } from "react";

const usePdfViewer = (pdfPath) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    setPageNumber(prevPageNumber => Math.max(1, prevPageNumber - 1));
  };

  const goToNextPage = () => {
    setPageNumber(prevPageNumber => Math.min(numPages, prevPageNumber + 1));
  };

  const zoomIn = () => {
    setScale(prevScale => Math.min(2, prevScale + 0.1));
  };

  const zoomOut = () => {
    setScale(prevScale => Math.max(0.5, prevScale - 0.1));
  };
  const onDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfPath.split('/').pop(); // Get the file name from the path
    link.click();
  };

  const onPrint = () => {
    window.print();
  };

  return {
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
  };
};

export default usePdfViewer;
