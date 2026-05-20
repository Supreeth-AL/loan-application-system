import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-white p-10 rounded-xl shadow-md text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Welcome to Loan Portal
      </h2>

      <p className="text-gray-600 mb-6">
        Apply for your loan using our secure multi-step application form.
      </p>

      <Link
        to="/loan-form"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Start Application
      </Link>
    </div>
  );
}

export default HomePage;