import Link from "next/link";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  return (
    <footer className="border-t bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            မြန်မာနိုင်ငံတစ်ဝန်းရှိ ရွေးချယ်ထားသော အိမ်ခြံမြေများကို
            အချက်အလက်ပြည့်စုံစွာ ရှာဖွေလိုက်ပါ။
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">လေ့လာရန်</p>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <Link href="/properties">အိမ်ခြံမြေ အားလုံး</Link>
            <Link href="/blogs">ဆောင်းပါးများ</Link>
            <Link href="/login">အကောင့်ဝင်ရန်</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">ဆက်သွယ်ရန်</p>
          <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
            <a href="tel:+959450880220">+95 9 450 880 220</a>
            <a href="mailto:hello@haven.mm">hello@haven.mm</a>
            <span>ရန်ကုန်၊ မြန်မာ</span>
          </div>
        </div>
      </div>
      <div className="border-t px-5 py-5 text-center text-xs text-muted-foreground">
        © ၂၀၂၆ ဟေဗင် အိမ်ခြံမြေ။ သင့်စိတ်ကြိုက် နေရာသစ်အတွက်။
      </div>
    </footer>
  );
}
