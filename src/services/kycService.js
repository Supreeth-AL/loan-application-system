export const verifyPAN = (panNumber) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message:
          "PAN verified successfully",
      });
    }, 2000);
  });
};

export const verifyAadhaar = (
  aadhaarNumber
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message:
          "Aadhaar verified successfully",
      });
    }, 2000);
  });
};