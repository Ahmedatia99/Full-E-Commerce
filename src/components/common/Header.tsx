import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react"; // ⬅️ استدعاء الأيقونة
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      localStorage.setItem("i18nextLng", lang);
    });
  };
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <header className="bg-black text-white py-2  z-[60]">
      <div className="container mx-auto flex flex-col gap-3 items-center justify-between px-4 md:flex-row">
        {/* Left / Centered Text */}
        <h2 className="text-sm sm:text-base text-center flex-1">
          {t("summerSale")}
          <Link
            to={"/AllProducts"}
            className="underline font-bold hover:text-gray-200 transition-colors mx-3"
          >
            {t("shopNow")}
          </Link>
        </h2>

        {/* Right Side: Language Selector */}
        <div className="flex items-center gap-4 ml-4">
          <DropdownMenu
            modal={false}
            onOpenChange={(isOpen) => setOpen(isOpen)}
          >
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-sm font-semibold cursor-pointer hover:text-gray-200 transition-colors">
                {i18n.language === "ar" ? "العربية" : "English"}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-28">
              <DropdownMenuItem onClick={() => changeLanguage("en")}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage("ar")}>
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
