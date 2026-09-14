const labels: Record<string, string> = {
  sale: "ရောင်းရန်", rent: "ငှားရန်", house: "လုံးချင်းအိမ်", condo: "ကွန်ဒို",
  apartment: "တိုက်ခန်း", land: "မြေကွက်", shop: "ဆိုင်ခန်း", office: "ရုံးခန်း",
  warehouse: "ဂိုဒေါင်", sqft: "စတုရန်းပေ", sqm: "စတုရန်းမီတာ", acre: "ဧက", perch: "ပတ်ချ်",
};
export function formatLabel(value: string) {
  return labels[value] ?? value;
}
