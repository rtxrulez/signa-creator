export const updateOneSinga = singa => {
  console.log("ac", singa);
  return {
    type: "UPDATE_ONE_SINGA",
    payload: singa
  };
};
