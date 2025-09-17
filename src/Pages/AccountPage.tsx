import AccountCom from "@/components/AccountComponents/AccountCom";
import Breadcrumbs from "@/components/common/Breadcrumbs";

function AccountPage() {
  return (
    <div className="container mx-auto py-10 px-3">
        <Breadcrumbs/>
      <AccountCom />
    </div>
  );
}

export default AccountPage;
