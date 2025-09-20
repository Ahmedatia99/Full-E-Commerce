import Breadcrumbs from "@/components/common/Breadcrumbs";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFound404Page() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto px-5">
        <Breadcrumbs />

        <div className="flex items-center justify-center  flex-col text-center mt-20">
          <h1 className="font-bold text-[30px] md:text-[70px]">
            404 {t("notFound")}
          </h1>
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
