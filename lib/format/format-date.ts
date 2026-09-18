const ENGLISH_MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const MYANMAR_MONTHS = [
  "ဇန်", "ဖေ", "မတ်", "ဧ", "မေ", "ဇွန်",
  "ဇူ", "ဩ", "စက်", "အောက်", "နို", "ဒီ",
];

function toMyanmarDigits(value: string) {
  return value.replace(/[0-9]/g, (digit) => "၀၁၂၃၄၅၆၇၈၉"[Number(digit)]);
}

export function formatDate(value: string, locale: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})(?:$|T)/.exec(value);

  if (!match) {
    return value;
  }

  const [, year, month, day] = match;
  const monthIndex = Number(month) - 1;

  if (monthIndex < 0 || monthIndex >= ENGLISH_MONTHS.length) {
    return value;
  }

  const numericDay = String(Number(day));

  if (locale === "my") {
    return `${toMyanmarDigits(year)} ${MYANMAR_MONTHS[monthIndex]} ${toMyanmarDigits(numericDay)}`;
  }

  return `${ENGLISH_MONTHS[monthIndex]} ${numericDay}, ${year}`;
}
