import navigationContent from "../data/shared/navigation.json";
import footerContent from "../data/shared/footer.json";
import ctaContent from "../data/shared/cta.json";
import modalContent from "../data/shared/modals.json";
import heroContent from "../data/home/hero.json";
import statsContent from "../data/home/stats.json";
import featuresContent from "../data/home/features.json";
import roadmapContent from "../data/home/roadmap.json";
import coursesContent from "../data/home/courses.json";
import noticesContent from "../data/home/notices.json";
import videosContent from "../data/home/videos.json";
import homeAudioContent from "../data/home/audio.json";
import whyRobinContent from "../data/home/why-robin.json";
import resourcesPageContent from "../data/resources/page.json";
import studyContent from "../data/resources/study.json";
import audioContent from "../data/resources/audio.json";
import pinyinContent from "../data/resources/pinyin.json";
import hanziContent from "../data/resources/hanzi.json";
import examsContent from "../data/resources/exams.json";
import galleryContent from "../data/resources/gallery.json";
import libraryContent from "../data/resources/library.json";
import resourceNoticesContent from "../data/resources/notices.json";
import studentsContent from "../data/resources/students.json";
import videosPageContent from "../data/videos/page.json";
import videosLibraryContent from "../data/videos/library.json";
import audioPageContent from "../data/audio/page.json";
import audioLibraryContent from "../data/audio/library.json";
import communityPageContent from "../data/community/page.json";
import communityBenefitsContent from "../data/community/benefits.json";
import communityGroupsContent from "../data/community/groups.json";
import communityEventsContent from "../data/community/events.json";
import { iconMap, type IconName } from "./icon-map";

const withIcons = <T extends { icon: string }>(items: T[]) =>
  items.map((item) => ({ ...item, icon: iconMap[item.icon as IconName] }));

export const sharedData = {
  navigation: navigationContent,
  footer: {
    ...footerContent,
    contacts: withIcons(footerContent.contacts),
    socials: withIcons(footerContent.socials),
  },
  cta: ctaContent,
  modals: modalContent,
};

export const homeData = {
  hero: { ...heroContent, benefits: withIcons(heroContent.benefits) },
  stats: { ...statsContent, items: withIcons(statsContent.items) },
  features: { ...featuresContent, items: withIcons(featuresContent.items) },
  roadmap: roadmapContent,
  courses: coursesContent,
  notices: { ...noticesContent, items: withIcons(noticesContent.items) },
  videos: videosContent,
  audio: homeAudioContent,
  whyRobin: { ...whyRobinContent, items: withIcons(whyRobinContent.items) },
};

export const resourcesData = {
  page: resourcesPageContent,
  study: { ...studyContent, types: withIcons(studyContent.types) },
  audio: { ...audioContent, items: withIcons(audioContent.items) },
  pinyin: { ...pinyinContent, items: withIcons(pinyinContent.items) },
  hanzi: { ...hanziContent, items: withIcons(hanziContent.items) },
  exams: { ...examsContent, items: withIcons(examsContent.items) },
  gallery: { ...galleryContent, items: withIcons(galleryContent.items) },
  library: libraryContent,
  notices: resourceNoticesContent,
  students: studentsContent,
};

export const videoPageData = { page: videosPageContent, library: videosLibraryContent };
export const audioPageData = { page: audioPageContent, library: audioLibraryContent };
export const communityPageData = {
  page: communityPageContent,
  benefits: communityBenefitsContent,
  groups: communityGroupsContent,
  events: communityEventsContent,
};
