"use client";

import { MessageCircleMore } from "lucide-react";
import { sharedData } from "./site-data";
import { useSiteModal } from "./modals/ModalProvider";
import { Button } from "./ui/Button";
import Link from "next/link";

export function CommunityButton({
  variant = "green",
  compact = false,
  link = "https://chat.whatsapp.com/DEiwsREV2oeCszL5gG44z0",
}: {
  variant?: "green" | "primary" | "outline";
  compact?: boolean;
  link?:string;
}) {
  const { openCommunity } = useSiteModal();
  return (
       <Link href={link} target="_blank" rel="noopener noreferrer">

    <Button className={compact ? "button-compact" : ""} onClick={openCommunity} variant={variant}>
      <MessageCircleMore size={18} />
      {sharedData.navigation.communityLabel}
    </Button>
       </Link>
  );
}
