import { useNavigate } from "react-router-dom";

import { useLoanForm } from "../../context/LoanFormContext";

import { calculateEMI } from "../../utils/calculateEMI";

function ReviewSubmitStep() {
  const { formData } =
    useLoanForm();

  const navigate = useNavigate();

  const emi =
  formData.loanAmount &&
  formData.interestRate &&
  formData.loanTenure
    ? calculateEMI(
        Number(formData.loanAmount),
        Number(formData.interestRate),
        Number(formData.loanTenure)
      )
    : "0.00";

  const handleFinalSubmit = () => {
    console.log(formData);

    alert(
      "Loan Application Submitted Successfully"
    );

    navigate("/success");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Review & Submit
      </h2>

      <div className="bg-white shadow rounded-xl p-4 md:p-6 space-y-6 overflow-auto">
        <div>
          <h3 className="text-xl font-bold mb-3">
            Loan Details
          </h3>

          <p>
            <strong>Loan Type:</strong>{" "}
            {formData.loanType}
          </p>

          <p>
            <strong>Loan Amount:</strong> ₹
            {formData.loanAmount}
          </p>

          <p>
            <strong>Loan Tenure:</strong>{" "}
            {formData.loanTenure} Years
          </p>

          <p>
            <strong>Interest Rate:</strong>{" "}
            {formData.interestRate}%
          </p>

          <p className="text-green-600 font-bold mt-3">
            Monthly EMI: ₹{emi}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">
            Personal Information
          </h3>

          <p>
            <strong>Name:</strong>{" "}
            {formData.fullName}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {formData.email}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {formData.phone}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">
            Address Information
          </h3>

          <p>
            <strong>Address:</strong>{" "}
            {formData.addressLine}
          </p>

          <p>
            <strong>City:</strong>{" "}
            {formData.city}
          </p>

          <p>
            <strong>State:</strong>{" "}
            {formData.state}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">
            Employment Details
          </h3>

          <p>
            <strong>
              Employment Type:
            </strong>{" "}
            {formData.employmentType}
          </p>
        </div>

        {formData.signature && (
          <div>
            <h3 className="text-xl font-bold mb-3">
              Signature
            </h3>

            <img
              src={formData.signature}
              alt="Signature"
              className="border rounded-lg"
            />
          </div>
        )}

        <button
          onClick={handleFinalSubmit}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
}

export default ReviewSubmitStep;