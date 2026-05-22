function FormInput({
  label,
  type,
  placeholder,
  register,
  name,
  error,
}) {
  return (
    <div className="mb-5">
      <label className="block mb-2 font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full border rounded-lg px-4 py-3 outline-none ${
          error
            ? "border-red-500"
            : "border-gray-300"
        }`}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default FormInput;