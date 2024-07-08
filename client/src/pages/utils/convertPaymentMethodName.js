export function convertPaymentMethodName(name) {
  let tempName = name;

  if (name === "Union Bank") {
    tempName = "UnionBank";
  }

  return tempName;
}
