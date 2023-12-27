// useConfirmationModal.ts

import { useState } from "react";

interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const useConfirmationModal = (): [boolean, (props: ConfirmationModalProps) => void] => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleConfirmationModal = ({ onConfirm, onCancel }: ConfirmationModalProps) => {
    setShowConfirmation(!showConfirmation);

    if (showConfirmation) {
      onCancel();
    } else {
      onConfirm && onCancel && setShowConfirmation(true);
    }
  };

  return [showConfirmation, toggleConfirmationModal];
};
