import { createContext, useContext, useState } from "react";

const LoanFormContext = createContext();

export function LoanFormProvider({ children }) {
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormDate] = useState({
        loanType: "",
        loanAmount: "",
        fullName: "",
        email: "",
        phone: "",
    });

    const updateFormData = (newData) => {
        setFormData((prev) => ({
            ...prev,
            ...newData,
        }));
    }

    return(
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