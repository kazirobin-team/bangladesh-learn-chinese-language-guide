"use client";

import { MessageCircleMore } from "lucide-react";
import { sharedData } from "./site-data";

const variantClass = {
  green: "button-green",
  primary: "button-primary",
  outline: "button-outline",
};

export function CommunityButton({
  variant = "green",
  compact = false,
}: {
  variant?: "green" | "primary" | "outline";
  compact?: boolean;
}) {
  return (
    <a
      className={`button ${variantClass[variant]} ${compact ? "button-compact" : ""}`}
      href={sharedData.navigation.communityHref}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircleMore size={18} />
      {sharedData.navigation.communityLabel}
    </a>
  );
}
