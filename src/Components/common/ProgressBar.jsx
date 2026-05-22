function ProgressBar({ currentStep, totalSteps }) {
  const progressPercentage =
    (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-blue-600">
          Step {currentStep} of {totalSteps}
        </span>

        <span className="text-sm font-medium text-blue-600">
          {Math.round(progressPercentage)}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
          style={{
            width: `${progressPercentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;