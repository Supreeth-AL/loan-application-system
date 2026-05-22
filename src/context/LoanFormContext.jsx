import {
  createContext,
  useContext,
  useState,
} from "react";

const LoanFormContext = createContext();

export function LoanFormProvider({
  children,
}) {
  const [currentStep, setCurrentStep] =
    useState(1);

  const [formData, setFormData] =
    useState({
      loanType: "",
      loanAmount: "",
      loanTenure: "",
      interestRate: "",

      fullName: "",
      email: "",
      phone: "",

      dob: "",
      gender: "",
      maritalStatus: "",
    });

  const updateFormData = (newData) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <LoanFormContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        formData,
        updateFormData,
      }}
    >
      {children}
    </LoanFormContext.Provider>
  );
}

export function useLoanForm() {
  return useContext(LoanFormContext);
}