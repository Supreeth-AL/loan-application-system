import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../common/FormInput";

import { loanDetailsSchema } from "../../schemas/loanDetailsSchema";

import { useLoanForm } from "../../context/LoanFormContext";

function LoanDetailsStep() {
  const { formData, updateFormData } =
    useLoanForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      loanDetailsSchema
    ),

    defaultValues: {
      loanType: formData.loanType || "",
      loanAmount: formData.loanAmount || "",
      loanTenure: formData.loanTenure || "",
      interestRate:
        formData.interestRate || "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    updateFormData(data);

    alert("Loan Details Saved");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Step 1: Loan Details
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-5">
          <label className="block mb-2 font-medium text-gray-700">
            Loan Type
          </label>

          <select
            {...register("loanType")}
            className={`w-full border rounded-lg px-4 py-3 outline-none ${
              errors.loanType
                ? "border-red-500"
                : "border-gray-300"
            }`}
          >
            <option value="">
              Select Loan Type
            </option>

            <option value="home">
              Home Loan
            </option>

            <option value="car">
              Car Loan
            </option>

            <option value="personal">
              Personal Loan
            </option>
          </select>

          {errors.loanType && (
            <p className="text-red-500 text-sm mt-1">
              {
                errors.loanType.message
              }
            </p>
          )}
        </div>

        <FormInput
          label="Loan Amount"
          type="number"
          placeholder="Enter loan amount"
          register={register}
          name="loanAmount"
          error={errors.loanAmount}
        />

        <FormInput
          label="Loan Tenure (Years)"
          type="number"
          placeholder="Enter loan tenure"
          register={register}
          name="loanTenure"
          error={errors.loanTenure}
        />

        <FormInput
          label="Interest Rate (%)"
          type="number"
          placeholder="Enter interest rate"
          register={register}
          name="interestRate"
          error={errors.interestRate}
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Save Loan Details
        </button>
      </form>
    </div>
  );
}

export default LoanDetailsStep;