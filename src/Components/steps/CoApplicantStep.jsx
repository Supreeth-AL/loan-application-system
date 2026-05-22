import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../common/FormInput";
import FormSelect from "../common/FormSelect";

import { coApplicantSchema } from "../../schemas/coApplicantSchema";

import { useLoanForm } from "../../context/LoanFormContext";

function CoApplicantStep() {
  const { formData, updateFormData } =
    useLoanForm();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      coApplicantSchema
    ),

    defaultValues: {
      hasCoApplicant:
        formData.hasCoApplicant || false,

      coApplicantName:
        formData.coApplicantName || "",

      relationship:
        formData.relationship || "",

      coApplicantIncome:
        formData.coApplicantIncome || "",
    },
  });

  const hasCoApplicant =
    watch("hasCoApplicant");

  const onSubmit = (data) => {
    console.log(data);

    updateFormData(data);

    alert(
      "Co-Applicant Information Saved"
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Step 6: Co-Applicant
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              {...register(
                "hasCoApplicant"
              )}
              className="w-5 h-5"
            />

            <span className="font-medium text-gray-700">
              Add Co-Applicant
            </span>
          </label>
        </div>

        {hasCoApplicant && (
          <>
            <FormInput
              label="Co-Applicant Name"
              type="text"
              placeholder="Enter co-applicant name"
              register={register}
              name="coApplicantName"
              error={
                errors.coApplicantName
              }
            />

            <FormSelect
              label="Relationship"
              register={register}
              name="relationship"
              error={
                errors.relationship
              }
              options={[
                {
                  label: "Spouse",
                  value: "spouse",
                },

                {
                  label: "Parent",
                  value: "parent",
                },

                {
                  label: "Sibling",
                  value: "sibling",
                },

                {
                  label: "Friend",
                  value: "friend",
                },
              ]}
            />

            <FormInput
              label="Co-Applicant Income"
              type="number"
              placeholder="Enter income"
              register={register}
              name="coApplicantIncome"
              error={
                errors.coApplicantIncome
              }
            />
          </>
        )}

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Save Co-Applicant Information
        </button>
      </form>
    </div>
  );
}

export default CoApplicantStep;