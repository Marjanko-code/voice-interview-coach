import { exportPDF } from '../api';

function ExportButton() {
  return (
    <div className="text-right">
      <button
        onClick={exportPDF}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Export PDF
      </button>
    </div>
  );
}

export default ExportButton;