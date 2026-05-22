function StepNavigation({
  currentStep,
  totalSteps,
  handleNext,
  handlePrevious,
}) {
  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={handlePrevious}
        disabled={currentStep === 1}
        className={`px-6 py-2 rounded-lg font-medium ${
          currentStep === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-gray-600 text-white hover:bg-gray-700"
        }`}
      >
        Previous
      </button>

      <button
        onClick={handleNext}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        {currentStep === totalSteps
          ? "Finish"
          : "Next"}
      </button>
    </div>
  );
}

export default StepNavigation;