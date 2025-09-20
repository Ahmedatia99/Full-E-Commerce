import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFound404Page() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-center  flex-col text-center mt-20">
          <img
            src="public\assets\404.png"
            alt="404 Error"
            className="w-100 h-100 object-contain mb-6 drop-shadow-lg"
          />

          <p>{t("notFoundMsg")}</p>
          <Button className="py-7 mt-18 mb-10">
            <Link className="" to="/">
              {t("backToHome")}
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default NotFound404Page;
