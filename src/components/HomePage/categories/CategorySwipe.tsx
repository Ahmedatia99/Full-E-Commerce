export const CategorySwipe = () => {
  import { useNavigate } from "react-router-dom";
  const categoryNavigate = [
    {
      name: "Phones",
      id: 1,
      icon: "",
      path: "/phone",
    },
    {
      name: "Computers",
      id: 2,
      icon: "",
      path: "/computers",
    },
    {
      name: "Smart Watches",
      id: 3,
      icon: "",
      path: "/smartwatches",
    },
    {
      name: "Headphones",
      id: 4,
      icon: "",
      path: "/headphones",
    },
    {
      name: "Cameras",
      id: 5,
      icon: "",
      path: "/camera",
    },
    {
      name: "Gaming",
      id: 6,
      icon: "",
      path: "/gaming",
    },
  ];

const navigate = useNavigate();

  function handelNavigate() {
    // navigate to category page
    navigate("/category");
}
  return (
    <div>
      {categoryNavigate.map((category) => (
        <div key={category.id}>
          <Button>{category.name}</Button>
        </div>
      ))}
    </div>
  );
};
