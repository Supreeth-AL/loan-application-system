import {
  createContext,
  useContext,
  useState,
} from "react";

import {
  useEffect,
} from "react";

import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../utils/localStorage";

const LoanFormContext = createContext();

export function LoanFormProvider({
  children,
}) {
  const savedData = loadFromLocalStorage();

  const [currentStep, setCurrentStep] =
    useState(
      savedData?.currentStep || 1
    );


  const [formData, setFormData] =
    useState(
      savedData?.formData || {
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

        panNumber: "",
        aadhaarNumber: "",

        addressLine: "",
        pinCode: "",
        city: "",
        state: "",

        employmentType: "",
        companyName: "",
        monthlySalary: "",

        businessName: "",
        annualIncome: "",

        hasCoApplicant: false,
        coApplicantName: "",
        relationship: "",
        coApplicantIncome: "",

        uploadedDocuments: [],

        signature: "",
      }
    );

  const updateFormData = (newData) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  useEffect(() => {
    saveToLocalStorage({
      formData,
      currentStep,
    });
  }, [formData, currentStep]);

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