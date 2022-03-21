// For add Item to Cart

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// For Delete Item to Cart

export const DeleteCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
