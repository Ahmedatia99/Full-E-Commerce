import CategroyDataRendering from "@/components/CategroyComponents/CategroyDataRendering";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function CategoryPage() {
  return (
    <div className="container  mx-auto ">
      <div className=" px-3">
        <Breadcrumbs />
      </div>
      <CategroyDataRendering />
    </div>
  );
}
