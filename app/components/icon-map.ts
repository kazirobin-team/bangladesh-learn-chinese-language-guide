import {
  Award, BookMarked, BookOpenText, CalendarCheck, Captions, ChartNoAxesCombined,
  CircleHelp, CirclePlay, ClipboardCheck, Facebook, FileCheck2, FileText,
  GraduationCap, Headphones, Images, Instagram, Languages, Library, ListChecks,
  Mail, Medal, MessageCircleMore, Mic2, NotebookTabs, PencilLine, School,
  ScrollText, Shapes, ShieldCheck, Sparkles, Speech, Users, Volume2, Youtube,
} from "lucide-react";

export const iconMap = {
  Award, BookMarked, BookOpenText, CalendarCheck, Captions, ChartNoAxesCombined,
  CircleHelp, CirclePlay, ClipboardCheck, Facebook, FileCheck2, FileText,
  GraduationCap, Headphones, Images, Instagram, Languages, Library, ListChecks,
  Mail, Medal, MessageCircleMore, Mic2, NotebookTabs, PencilLine, School,
  ScrollText, Shapes, ShieldCheck, Sparkles, Speech, Users, Volume2, Youtube,
} as const;

export type IconName = keyof typeof iconMap;
