export const calculateEMI = (
  principal,
  annualRate,
  tenureYears
) => {
  const monthlyRate =
    annualRate / 12 / 100;

  const numberOfMonths =
    tenureYears * 12;

  const emi =
    (principal *
      monthlyRate *
      Math.pow(
        1 + monthlyRate,
        numberOfMonths
      )) /
    (Math.pow(
      1 + monthlyRate,
      numberOfMonths
    ) -
      1);

  return emi.toFixed(2);
};