import React from "react";

interface ProductColorsProps {
  colors?: { value: string }[];
  selectedColor?: string; // 👈 optional
  setSelectedColor: (color: string | undefined) => void; // 👈 يقبل string أو undefined
}

const ProductColors: React.FC<ProductColorsProps> = ({
  colors,
  selectedColor,
  setSelectedColor,
}) => {
  if (!colors?.length) return null;

  return (
    <div className="flex items-center gap-4 py-5">
      <span className="text-2xl">Colours:</span>
      <div className="flex gap-4">
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => setSelectedColor(color.value)}
            className={`w-7 h-7 rounded-full border-3 transition cursor-pointer ${
              selectedColor === color.value
                ? "border-black"
                : "border-transparent"
            }`}
            style={{ backgroundColor: color.value }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
