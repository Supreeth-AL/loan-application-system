function FormInput({
  label,
  type,
  placeholder,
  register,
  name,
  error,
  disabled = false,
}) {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2 font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={`${name}-error`}
        {...register(name)}
        className={`w-full border rounded-lg px-4 py-3 outline-none text-sm md:text-base ${
          error
            ? "border-red-500"
            : "border-gray-300"
        } ${
          disabled
            ? "bg-gray-100"
            : ""
        }`}
      />

      {error && (
        <p
          id={`${name}-error`}
          className="text-red-500 text-sm mt-1"
        >
          {error.message}
        </p>
      )}
    </div>
  );
}

export default FormInput;