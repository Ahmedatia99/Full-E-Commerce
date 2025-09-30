import Breadcrumbs from "@/components/common/Breadcrumbs";
import FavouriteActions from "@/components/FavouriteComponent/FavouriteActions";
import RenderingDataFavourite from "@/components/FavouriteComponent/RenderingDataFavourite";

function FavouritePage() {
  return (
    <div className="container mx-auto px-5 py-10">
      <Breadcrumbs />
      <FavouriteActions />
      <RenderingDataFavourite />
    </div>
  );
}

export default FavouritePage;
