import { useLoanForm } from "../context/LoanFormContext";

import LoanDetailsStep from "../components/steps/LoanDetailsStep";
import PersonalInfoStep from "../components/steps/PersonalInfoStep";
import KYCStep from "../components/steps/KYCStep";

import ProgressBar from "../components/common/ProgressBar";
import StepNavigation from "../components/common/StepNavigation";

import AddressStep from "../components/steps/AddressStep";
import EmploymentStep from "../components/steps/EmploymentStep";

import CoApplicantStep from "../components/steps/CoApplicantStep";
import DocumentUploadStep from "../components/steps/DocumentUploadStep";

import ESignatureStep from "../Components/steps/ESignatureStep";
import ReviewSubmitStep from "../components/steps/ReviewSubmitStep";

function LoanApplicationPage() {
  const {
    currentStep,
    setCurrentStep,
  } = useLoanForm();

  const totalSteps = 9;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <LoanDetailsStep />;

      case 2:
        return <PersonalInfoStep />;

      case 3:
        return <KYCStep />;

      case 4:
        return <AddressStep />;

      case 5:
        return <EmploymentStep />;

      case 6:
        return <CoApplicantStep />;

      case 7:
        return <DocumentUploadStep />;

      case 8:
        return <ESignatureStep />;

      case 9:
        return <ReviewSubmitStep />;

      default:
        return <LoanDetailsStep />;
    }
  };

  return (
    <div className="bg-white p-4 md:p-8 rounded-xl shadow-md">
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
      />

      {renderStep()}

      <StepNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
}

export default LoanApplicationPage;