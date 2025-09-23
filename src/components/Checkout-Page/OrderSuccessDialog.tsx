import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useCart } from "@/hooks/useCart";

interface OrderSuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const OrderSuccessDialog: React.FC<OrderSuccessDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  // ✅ handle button click (clear cart + close dialog + navigate home)
  const handleGoHome = () => {
    onOpenChange(false);
    navigate("/");
    clearCart();
  };

  // ✅ handle dialog closing (if user presses ESC or clicks outside)
  const handleDialogClose = (isOpen: boolean) => {
    console.log("🔵 Dialog state changed:", isOpen);
    onOpenChange(isOpen);
    if (!isOpen) {
      console.log("🟡 Dialog closed manually → navigating home");
      navigate("/");
      clearCart();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className="max-w-sm bg-white text-center">
        <DialogHeader>
          <DialogTitle className="text-green-600 text-2xl font-bold mb-2">
            Order Placed Successfully!
          </DialogTitle>
          <DialogDescription className="text-gray-700 text-base mb-4">
            Your order has been received and is being processed.
            <br />
            Thank you for shopping with us!
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <span role="img" aria-label="success" className="text-4xl">
            🎉
          </span>
        </div>

        <Button
          className="mt-6 w-full bg-[#DB4444] text-white py-2 rounded font-semibold hover:bg-red-700 transition"
          onClick={handleGoHome}
        >
          العودة للصفحة الرئيسية
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default OrderSuccessDialog;
