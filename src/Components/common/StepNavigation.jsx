function StepNavigation({
  currentStep,
  totalSteps,
  handleNext,
  handlePrevious,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 mt-8">
      <button
        onClick={handlePrevious}
        disabled={currentStep === 1}
        className={`px-6 py-3 rounded-lg font-medium text-sm md:text-base ${
          currentStep === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-gray-600 text-white hover:bg-gray-700"
        }`}
      >
        Previous
      </button>

      <button
        onClick={handleNext}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-sm md:text-base"
      >
        {currentStep === totalSteps
          ? "Finish"
          : "Next"}
      </button>
    </div>
  );
}

export default StepNavigation;