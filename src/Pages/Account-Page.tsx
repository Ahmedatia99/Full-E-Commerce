import AccountDetails from "@/components/Account-Page/Account-Details";
import Breadcrumbs from "@/components/common/Breadcrumbs";

function AccountPage() {
  return (
    <div className="container mx-auto px-10 ">
      <Breadcrumbs />
      <AccountDetails />
    </div>
  );
}

export default AccountPage;
