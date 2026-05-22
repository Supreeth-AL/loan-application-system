export const getAddressByPinCode = (
  pinCode
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockData = {
        "560001": {
          city: "Bangalore",
          state: "Karnataka",
        },

        "110001": {
          city: "New Delhi",
          state: "Delhi",
        },

        "400001": {
          city: "Mumbai",
          state: "Maharashtra",
        },
      };

      resolve(
        mockData[pinCode] || {
          city: "",
          state: "",
        }
      );
    }, 1500);
  });
};