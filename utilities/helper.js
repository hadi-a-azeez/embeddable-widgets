export const validation = (name, email, password) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let isValid = false;
  let error = {};
  if (name !== "") {
    if (email.match(validRegex)) {
      if (password !== "") {
        isValid = true;
      } else {
        isValid = false;
        error = { state: true, message: "Password field is required" };
      }
    } else {
      isValid = false;
      error = { state: true, message: "Enter a valid email" };
    }
  } else {
    isValid = false;
    error = { state: true, message: "Name field is required" };
  }
  return { isValid, error };
};

// const validation = () => {
//   const validRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if (email !== "") {
//     if (email.match(validRegex)) {
//       if (password !== "") {
//         return true;
//       }
//       setIsError({ state: true, message: "Password field is required" });
//       return false;
//     } else {
//       setIsError({ state: true, message: "Enter a valid email" });
//       return false;
//     }
//   }
//   setIsError({ state: true, message: "email field is required" });
//   return false;
// };
