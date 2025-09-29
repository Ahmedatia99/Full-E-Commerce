export default class ProductStats {
  static getDiscountPercentage(price: number, discountPrice: number): number {
    if (price <= 0) return 0;
    return Math.round(((price - discountPrice) / price) * 100);
  }
}

type CloudinaryOptions = {
  w?: number;
  h?: number;
  q?: string;
  f?: string;
  fit?: "clip" | "crop" | "scale" | "fill" | "thumb";
};

export function getCloudinaryUrl(
  src: string,
  { w, h, q = "auto:good", f = "auto", fit = "clip" }: CloudinaryOptions = {}
): string {
  const params = new URLSearchParams();

  if (w) params.append("w", w.toString());
  if (h) params.append("h", h.toString());
  if (q) params.append("q", q);
  if (f) params.append("f", f);
  if (fit) params.append("fit", fit);

  return `${src}?${params.toString()}`;
}
