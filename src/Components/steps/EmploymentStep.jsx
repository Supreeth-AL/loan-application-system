import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../common/FormInput";
import FormSelect from "../common/FormSelect";

import { employmentSchema } from "../../schemas/employmentSchema";

import { useLoanForm } from "../../context/LoanFormContext";

function EmploymentStep() {
  const { formData, updateFormData } =
    useLoanForm();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      employmentSchema
    ),

    defaultValues: {
      employmentType:
        formData.employmentType || "",

      companyName:
        formData.companyName || "",

      monthlySalary:
        formData.monthlySalary || "",

      businessName:
        formData.businessName || "",

      annualIncome:
        formData.annualIncome || "",
    },
  });

  const employmentType =
    watch("employmentType");

  const onSubmit = (data) => {
    console.log(data);

    updateFormData(data);

    alert(
      "Employment Information Saved"
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Step 5: Employment & Income
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormSelect
          label="Employment Type"
          register={register}
          name="employmentType"
          error={errors.employmentType}
          options={[
            {
              label: "Salaried",
              value: "salaried",
            },

            {
              label: "Self Employed",
              value: "self-employed",
            },
          ]}
        />

        {employmentType ===
          "salaried" && (
          <>
            <FormInput
              label="Company Name"
              type="text"
              placeholder="Enter company name"
              register={register}
              name="companyName"
              error={
                errors.companyName
              }
            />

            <FormInput
              label="Monthly Salary"
              type="number"
              placeholder="Enter monthly salary"
              register={register}
              name="monthlySalary"
              error={
                errors.monthlySalary
              }
            />
          </>
        )}

        {employmentType ===
          "self-employed" && (
          <>
            <FormInput
              label="Business Name"
              type="text"
              placeholder="Enter business name"
              register={register}
              name="businessName"
              error={
                errors.businessName
              }
            />

            <FormInput
              label="Annual Income"
              type="number"
              placeholder="Enter annual income"
              register={register}
              name="annualIncome"
              error={
                errors.annualIncome
              }
            />
          </>
        )}

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Save Employment Information
        </button>
      </form>
    </div>
  );
}

export default EmploymentStep;