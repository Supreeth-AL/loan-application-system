function FormSelect({
  label,
  register,
  name,
  options,
  error,
}) {
  return (
    <div className="mb-5">
      <label className="block mb-2 font-medium text-gray-700">
        {label}
      </label>

      <select
        {...register(name)}
        className={`w-full border rounded-lg px-4 py-3 outline-none ${
          error
            ? "border-red-500"
            : "border-gray-300"
        }`}
      >
        <option value="">
          Select {label}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default FormSelect;