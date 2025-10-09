import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

type Props = {
  show: boolean;
  count: number;
  onCancel: () => void;
  onConfirm: () => void;
};

function ConfirmModal({ show, count, onCancel, onConfirm }: Props) {
  const { t } = useTranslation();

  return (
    <Dialog open={show} onOpenChange={(open) => !open && onCancel()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("Confirm Action")}</DialogTitle>
          <DialogDescription>
            {t("Are you sure you want to move")}{" "}
            <span className="font-bold text-main">{count}</span>{" "}
            {t("items to the cart?")}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>
            {t("Cancel")}
          </Button>
          <Button onClick={onConfirm} className="bg-black hover:bg-main">
            {t("Confirm")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmModal;
