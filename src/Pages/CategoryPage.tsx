import CategroyDataRendering from "@/components/CategroyComponents/CategroyDataRendering";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function CategoryPage() {
  return (
    <div className="container mx-auto ">
      <Breadcrumbs />
      <CategroyDataRendering />
    </div>
  );
}
