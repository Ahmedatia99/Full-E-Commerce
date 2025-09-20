import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AccountSidebar() {
  return (
    <aside className="md:w-[30%]  w-full flex flex-col justify-start  pr-5">
      <Accordion type="single" collapsible className="w-full">
        {/* Manage My Account */}
        <AccordionItem value="account">
          <AccordionTrigger className="font-semibold text-lg cursor-pointer">
            Manage My Account
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 pl-4 ">
              <li className="text-red-500 font-medium cursor-pointer">
                My Profile
              </li>
              <li className="text-gray-600 hover:text-black cursor-pointer">
                Address Book
              </li>
              <li className="text-gray-600 hover:text-black cursor-pointer">
                My Payment Options
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* My Orders */}
        <AccordionItem value="orders">
          <AccordionTrigger className="font-semibold text-lg cursor-pointer">
            My Orders
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 pl-4">
              <li className="text-gray-600 hover:text-black cursor-pointer">
                My Returns
              </li>
              <li className="text-gray-600 hover:text-black cursor-pointer">
                My Cancellations
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Wishlist */}
        <AccordionItem value="wishlist">
          <AccordionTrigger className="font-semibold text-lg cursor-pointer">
            My Wishlist
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600 pl-4 cursor-pointer">
              View your saved items
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}

export default AccountSidebar;
