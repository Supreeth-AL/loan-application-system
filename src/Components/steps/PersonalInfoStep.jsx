import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../common/FormInput";
import FormSelect from "../common/FormSelect";

import { personalInfoSchema } from "../../schemas/personalInfoSchema";

import { useLoanForm } from "../../context/LoanFormContext";

function PersonalInfoStep() {
  const { formData, updateFormData } =
    useLoanForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      personalInfoSchema
    ),

    defaultValues: {
      fullName: formData.fullName || "",
      email: formData.email || "",
      phone: formData.phone || "",
      dob: formData.dob || "",
      gender: formData.gender || "",
      maritalStatus:
        formData.maritalStatus || "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    updateFormData(data);

    alert(
      "Personal Information Saved"
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Step 2: Personal Information
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          label="Full Name"
          type="text"
          placeholder="Enter full name"
          register={register}
          name="fullName"
          error={errors.fullName}
        />

        <FormInput
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          register={register}
          name="email"
          error={errors.email}
        />

        <FormInput
          label="Phone Number"
          type="number"
          placeholder="Enter phone number"
          register={register}
          name="phone"
          error={errors.phone}
        />

        <FormInput
          label="Date of Birth"
          type="date"
          register={register}
          name="dob"
          error={errors.dob}
        />

        <FormSelect
          label="Gender"
          register={register}
          name="gender"
          error={errors.gender}
          options={[
            {
              label: "Male",
              value: "male",
            },

            {
              label: "Female",
              value: "female",
            },

            {
              label: "Other",
              value: "other",
            },
          ]}
        />

        <FormSelect
          label="Marital Status"
          register={register}
          name="maritalStatus"
          error={errors.maritalStatus}
          options={[
            {
              label: "Single",
              value: "single",
            },

            {
              label: "Married",
              value: "married",
            },
          ]}
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Save Personal Information
        </button>
      </form>
    </div>
  );
}

export default PersonalInfoStep;