import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../common/FormInput";

import { addressSchema } from "../../schemas/addressSchema";

import { getAddressByPinCode } from "../../services/addressService";

import { useLoanForm } from "../../context/LoanFormContext";

function AddressStep() {
  const { formData, updateFormData } =
    useLoanForm();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addressSchema),

    defaultValues: {
      addressLine:
        formData.addressLine || "",

      pinCode: formData.pinCode || "",

      city: formData.city || "",

      state: formData.state || "",
    },
  });

  const pinCode = watch("pinCode");

  useEffect(() => {
    const fetchAddress = async () => {
      if (pinCode.length === 6) {
        const response =
          await getAddressByPinCode(
            pinCode
          );

        setValue(
          "city",
          response.city
        );

        setValue(
          "state",
          response.state
        );
      }
    };

    fetchAddress();
  }, [pinCode, setValue]);

  const onSubmit = (data) => {
    console.log(data);

    updateFormData(data);

    alert(
      "Address Information Saved"
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Step 4: Address Information
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          label="Address Line"
          type="text"
          placeholder="Enter address"
          register={register}
          name="addressLine"
          error={errors.addressLine}
        />

        <FormInput
          label="PIN Code"
          type="text"
          placeholder="Enter PIN code"
          register={register}
          name="pinCode"
          error={errors.pinCode}
        />

        <FormInput
          label="City"
          type="text"
          placeholder="City"
          register={register}
          name="city"
          error={errors.city}
        />

        <FormInput
          label="State"
          type="text"
          placeholder="State"
          register={register}
          name="state"
          error={errors.state}
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Save Address Information
        </button>
      </form>
    </div>
  );
}

export default AddressStep;