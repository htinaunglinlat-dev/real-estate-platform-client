import type { City, Region, Township, Ward } from "@/types/property";

export const regions: Region[] = [
  { id: 1, nameMm: "ရန်ကုန်တိုင်းဒေသကြီး", nameEn: "Yangon Region", slug: "yangon" },
  { id: 2, nameMm: "မန္တလေးတိုင်းဒေသကြီး", nameEn: "Mandalay Region", slug: "mandalay" },
];

export const cities: City[] = [
  { id: 1, regionId: 1, nameMm: "ရန်ကုန်", nameEn: "Yangon", slug: "yangon" },
  { id: 2, regionId: 2, nameMm: "မန္တလေး", nameEn: "Mandalay", slug: "mandalay" },
];

export const townships: Township[] = [
  { id: 1, cityId: 1, nameMm: "ဗဟန်း", nameEn: "Bahan", slug: "bahan" },
  { id: 2, cityId: 1, nameMm: "ကမာရွတ်", nameEn: "Kamayut", slug: "kamayut" },
  { id: 3, cityId: 1, nameMm: "သန်လျင်", nameEn: "Thanlyin", slug: "thanlyin" },
  { id: 4, cityId: 1, nameMm: "တောင်ဥက္ကလာပ", nameEn: "South Okkalapa", slug: "south-okkalapa" },
  { id: 5, cityId: 2, nameMm: "ချမ်းအေးသာစံ", nameEn: "Chanayethazan", slug: "chanayethazan" },
];

export const wards: Ward[] = [
  { id: 1, townshipId: 1, nameMm: "ရွှေတောင်ကြား", nameEn: "Shwe Taung Kyar", slug: "shwe-taung-kyar" },
  { id: 2, townshipId: 2, nameMm: "လှည်းတန်း", nameEn: "Hledan", slug: "hledan" },
  { id: 3, townshipId: 3, nameMm: "စတားစီးတီး", nameEn: "Star City", slug: "star-city" },
];
