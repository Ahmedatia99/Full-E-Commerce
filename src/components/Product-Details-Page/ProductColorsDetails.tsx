import React from "react";
import { useTranslation } from "react-i18next";

interface ProductColorsProps {
  colors?: { value: string; name?: string }[]; // 👈 خليت فيه name اختياري
  selectedColor?: string;
  setSelectedColor: (color: string | undefined) => void;
}

const ProductColors: React.FC<ProductColorsProps> = ({
  colors,
  selectedColor,
  setSelectedColor,
}) => {
  const { t } = useTranslation();

  if (!colors?.length) return null;

  return (
    <div className="flex items-center gap-4 py-5">
      <span className="text-2xl">{t("colours")}</span>
      <div
        className="flex gap-4"
        role="radiogroup"
        aria-label="Select product color"
      >
        {colors.map((color) => (
          <button
            key={color.value}
            type="button"
            role="radio"
            aria-checked={selectedColor === color.value}
            aria-label={color.name || color.value}
            onClick={() => setSelectedColor(color.value)}
            className={`w-7 h-7 rounded-full border-3 transition cursor-pointer ${
              selectedColor === color.value
                ? "border-black ring-2 ring-black"
                : "border-gray-300"
            }`}
            style={{ backgroundColor: color.value }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
