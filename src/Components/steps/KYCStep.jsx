import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../common/FormInput";

import { kycSchema } from "../../schemas/kycSchema";

import {
  verifyPAN,
  verifyAadhaar,
} from "../../services/kycService";

import { useLoanForm } from "../../context/LoanFormContext";

function KYCStep() {
  const { formData, updateFormData } =
    useLoanForm();

  const [loading, setLoading] =
    useState(false);

  const [verificationStatus, setVerificationStatus] =
    useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(kycSchema),

    defaultValues: {
      panNumber:
        formData.panNumber || "",

      aadhaarNumber:
        formData.aadhaarNumber || "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);

    setVerificationStatus("");

    try {
      const panResponse =
        await verifyPAN(
          data.panNumber
        );

      const aadhaarResponse =
        await verifyAadhaar(
          data.aadhaarNumber
        );

      if (
        panResponse.success &&
        aadhaarResponse.success
      ) {
        updateFormData(data);

        setVerificationStatus(
          "KYC verification completed successfully"
        );
      }
    } catch (error) {
      setVerificationStatus(
        "Verification failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Step 3: KYC Verification
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          label="PAN Number"
          type="text"
          placeholder="ABCDE1234F"
          register={register}
          name="panNumber"
          error={errors.panNumber}
        />

        <FormInput
          label="Aadhaar Number"
          type="text"
          placeholder="123412341234"
          register={register}
          name="aadhaarNumber"
          error={errors.aadhaarNumber}
        />

        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 rounded-lg text-white ${
            loading
              ? "bg-gray-400"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading
            ? "Verifying..."
            : "Verify KYC"}
        </button>
      </form>

      {verificationStatus && (
        <div className="mt-5 p-4 bg-green-100 text-green-700 rounded-lg">
          {verificationStatus}
        </div>
      )}
    </div>
  );
}

export default KYCStep;