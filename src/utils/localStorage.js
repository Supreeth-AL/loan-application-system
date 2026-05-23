const STORAGE_KEY =
  "loanApplicationData";

export const saveToLocalStorage = (
  data
) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
};

export const loadFromLocalStorage =
  () => {
    const savedData =
      localStorage.getItem(
        STORAGE_KEY
      );

    return savedData
      ? JSON.parse(savedData)
      : null;
  };

export const clearLocalStorage =
  () => {
    localStorage.removeItem(
      STORAGE_KEY
    );
  };