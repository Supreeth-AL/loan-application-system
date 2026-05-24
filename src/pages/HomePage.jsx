import { Link } from "react-router-dom";
import {
  clearLocalStorage,
} from "../utils/localStorage";

function HomePage() {
  const handleClearData = () => {
    clearLocalStorage();

    window.location.reload();
  };

  return (
    <div className="bg-white p-10 rounded-xl shadow-md text-center">
      <h2 style={{ color: "#2563eb" }} className="text-3xl font-bold mb-4">
  Welcome to Loan Portal
</h2>

      <p className="text-gray-600 mb-6">
        Apply for your loan using our secure multi-step application form.
      </p>

      <Link
        to="/loan-form"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mt-8 "
      >
        Start Application
      </Link>

      <button
        onClick={handleClearData}
        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 ml-4 mt-8"
      >
        Clear Saved Data
      </button>
    </div>
  );
}

export default HomePage;