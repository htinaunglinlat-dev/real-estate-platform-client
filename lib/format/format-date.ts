export function formatDate(value: string) {
  // Some browsers omit Myanmar locale data; keep month names deterministic.
  const months = ["ဇန်နဝါရီ", "ဖေဖော်ဝါရီ", "မတ်", "ဧပြီ", "မေ", "ဇွန်", "ဇူလိုင်", "ဩဂုတ်", "စက်တင်ဘာ", "အောက်တိုဘာ", "နိုဝင်ဘာ", "ဒီဇင်ဘာ"];
  const parts = new Intl.DateTimeFormat("en-US", {
    year: "numeric", month: "numeric", day: "numeric", timeZone: "Asia/Yangon",
  }).formatToParts(new Date(value));
  const part = (type: string) => parts.find((item) => item.type === type)!.value;
  const digits = (text: string) => text.replace(/[0-9]/g, (digit) => "၀၁၂၃၄၅၆၇၈၉"[Number(digit)]);
  return `${digits(part("year"))} ခုနှစ်၊ ${months[Number(part("month")) - 1]} ${digits(part("day"))} ရက်`;
}
