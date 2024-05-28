import {
  FaArrowLeft,
  FaArrowRight,
  FaSearchPlus,
  FaSearchMinus,
  FaDownload,
  FaPrint,
} from "react-icons/fa";

const PdfControls = ({
  numPages,
  pageNumber,
  goToPreviousPage,
  goToNextPage,
  zoomIn,
  zoomOut,
  onDownload,
  onPrint,
  pagination,
}) => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 mb-3">
        {pagination && (
          <>
            <button
              onClick={goToPreviousPage}
              className={`px-4 py-2 rounded flex items-center ${
                pageNumber <= 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              disabled={pageNumber <= 1}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={goToNextPage}
              className={`px-4 py-2 rounded flex items-center ${
                pageNumber >= numPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              disabled={pageNumber >= numPages}
            >
              <FaArrowRight />
            </button>
          </>
        )}
        <button
          onClick={zoomIn}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
        >
          <FaSearchPlus />
        </button>
        <button
          onClick={zoomOut}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
        >
          <FaSearchMinus />
        </button>
        <button
          onClick={onDownload}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 flex items-center"
        >
          <FaDownload />
        </button>
        <button
          onClick={onPrint}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 flex items-center"
        >
          <FaPrint />
        </button>
      </div>
      {pagination && <div className="flex items-center justify-center text-gray-900 mb-3">
        <span>
          Page {pageNumber} of {numPages}
        </span>
      </div>}
    </>
  );
};

export default PdfControls;
