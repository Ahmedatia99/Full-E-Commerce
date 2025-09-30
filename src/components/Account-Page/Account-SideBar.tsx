import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

function AccountSidebar() {
  const { t } = useTranslation();
  return (
    <aside className="md:w-[30%]  w-full flex flex-col justify-start  pr-5 ml-3">
      <Accordion type="single" collapsible className="w-full">
        {/* Manage My Account */}
        <AccordionItem value="account">
          <AccordionTrigger className="font-semibold text-lg cursor-pointer">
            {t("manageMyAccountLabel")}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 pl-4 ">
              <li className="text-red-500 font-medium cursor-pointer">
                {t("myProfileLabel")}
              </li>
              <li className="text-gray-600 hover:text-black cursor-pointer"></li>
              <li className="text-gray-600 hover:text-black cursor-pointer">
                {t("paymentOptionLabel")}
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* My Orders */}
        <AccordionItem value="orders">
          <AccordionTrigger className="font-semibold text-lg cursor-pointer">
            {t("myOrdersLabel")}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 pl-4">
              <li className="text-gray-600 hover:text-black cursor-pointer">
                {t("myReturnsLabel")}
              </li>
              <li className="text-gray-600 hover:text-black cursor-pointer">
                {t("myCancelationsLable")}
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Wishlist */}
        <AccordionItem value="wishlist">
          <AccordionTrigger className="font-semibold text-lg cursor-pointer">
            {t("myWishListLabel")}
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600 pl-4 cursor-pointer">
              {t("viewSavedItemsLabel")}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}

export default AccountSidebar;
