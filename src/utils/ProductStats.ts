export default class ProductStats {
  static getDiscountPercentage(price: number, discountPrice: number): number {
    if (price <= 0) return 0;
    return Math.round(((price - discountPrice) / price) * 100);
  }
}
