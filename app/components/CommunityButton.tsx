"use client";

import { MessageCircleMore } from "lucide-react";
import { sharedData } from "./site-data";
import { useSiteModal } from "./modals/ModalProvider";
import { Button } from "./ui/Button";

export function CommunityButton({
  variant = "green",
  compact = false,
}: {
  variant?: "green" | "primary" | "outline";
  compact?: boolean;
}) {
  const { openCommunity } = useSiteModal();
  return (
    <Button className={compact ? "button-compact" : ""} onClick={openCommunity} variant={variant}>
      <MessageCircleMore size={18} />
      {sharedData.navigation.communityLabel}
    </Button>
  );
}
