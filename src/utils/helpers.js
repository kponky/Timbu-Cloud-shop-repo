export const formatCurrency = (value, currency) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(value);
};


// export const formatCurrency = (value, currency) => {
//   if (typeof value !== 'number' || isNaN(value)) {
//   return ''; // or a default value
//   }
//   return new Intl.NumberFormat("en-NG", {
//   style: "currency",
//   currency: currency,
//   }).format(value);
//   };
  