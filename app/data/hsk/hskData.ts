// src/data/hskData.ts

export interface HSKLevel {
  id: string;
  level: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
  resources: {
    books: boolean;
    audio: boolean;
    mockTest: boolean;
    vocabulary: boolean;
  };
  driveLinks?: {
    books?: string;
    audio?: string;
    mockTest?: string;
    vocabulary?: string;
  };
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const hskLevels: HSKLevel[] = [
  {
    id: "hsk-1",
    level: "HSK Level 1",
    title: "Beginner",
    description: "Start your Chinese journey with basic vocabulary and simple sentences.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    icon: "🌱",
    resources: {
      books: true,
      audio: true,
      mockTest: true,
      vocabulary: true,
    },
    driveLinks: {
      books: "https://drive.google.com/drive/folders/1GFvFiWDtFa5blOe26a-kKOwCACGY_eCK?usp=drive_link",
      audio: "https://drive.google.com/drive/folders/1X8bv142wtkENNHZWd30c5t1Dvrl6NeQU?usp=drive_link",
      mockTest: "https://drive.google.com/drive/folders/1s7SXAqakvPpEKHnZP3-TC9F4NTjR10vu?usp=drive_link",
      vocabulary: "https://drive.google.com/file/d/1k6gwM5t4PwwW7Cc-mlHfC6oCt0oXqlQt/view?usp=drive_link",
    },
  },
  {
    id: "hsk-2",
    level: "HSK Level 2",
    title: "Elementary",
    description: "Build your foundation with everyday conversations and basic grammar.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: "📘",
    resources: {
      books: true,
      audio: true,
      mockTest: true,
      vocabulary: true,
    },
    driveLinks: {
      books: "https://drive.google.com/drive/folders/1uyTpWA-cpmc0oMv7mmdDd-Xy1yjoHBOa?usp=drive_link",
      audio: "https://drive.google.com/drive/folders/1F-hJc2XVYcp6diXP7tuQnf4uFfPBNMH9?usp=drive_link",
      mockTest: "https://drive.google.com/drive/folders/1W78AO00XWiwslWvOZHHK-fu_dtqMGA26?usp=drive_link",
      vocabulary: "https://drive.google.com/file/d/1GVndWJG1bY9M_mqh1XhkQqGXijnxO2YO/view?usp=drive_link",
    },
  },
  {
    id: "hsk-3",
    level: "HSK Level 3",
    title: "Pre-Intermediate",
    description: "Communicate confidently in daily life and work situations.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    icon: "📗",
    resources: {
      books: true,
      audio: true,
      mockTest: true,
      vocabulary: true,
    },
    driveLinks: {
      books: "https://drive.google.com/drive/folders/1_OXK_Iuee5iuryPMDR76Ea8hiOHVux25?usp=drive_link",
      audio: "https://drive.google.com/drive/folders/1Sp9QQtlfdEc37uSgVTQYyhS8cQ7dBoGu?usp=drive_link",
      mockTest: "https://drive.google.com/drive/folders/1sUz0twM8nkmP3z6ENb0K8Pt_l2-85KlJ?usp=drive_link",
      vocabulary: "https://drive.google.com/file/d/1TCFTv128jQMbGI9NZUNUD1sJXWUX9ibv/view?usp=drive_link",
    },
  },
  {
    id: "hsk-4",
    level: "HSK Level 4",
    title: "Intermediate",
    description: "Express complex ideas and understand native-level content.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    icon: "📕",
    resources: {
      books: true,
      audio: true,
      mockTest: true,
      vocabulary: true,
    },
    driveLinks: {
      books: "https://drive.google.com/drive/folders/1J3Dr7JFql5IKQxcBMeSu2YmizQ8HVihg?usp=drive_link",
      audio: "https://drive.google.com/drive/folders/17thaoXjYhT-SCuuaLN-WUqLWVgrO2jjV?usp=drive_link",
      mockTest: "https://drive.google.com/drive/folders/1uqPrzOaGjo0jeJghSD1BOH0ZGNENB9mv?usp=drive_link",
      vocabulary: "https://drive.google.com/file/d/1Q8uDOg2i88CQoQWq-wcvPB-Eyor2gjb9/view?usp=drive_link",
    },
  },
  {
    id: "hsk-5",
    level: "HSK Level 5",
    title: "Advanced",
    description: "Master advanced vocabulary and tackle complex reading materials.",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    icon: "📙",
    resources: {
      books: true,
      audio: true,
      mockTest: true,
      vocabulary: true,
    },
    driveLinks: {
      books: "https://drive.google.com/drive/folders/16FImlIM8fd_Cx76xxQGVqyCMhEGpUAEk?usp=drive_link",
      audio: "https://drive.google.com/drive/folders/1qKG7mGdM-CKdSMxKGwWpS3GEiAFvhb_p?usp=drive_link",
      mockTest: "https://drive.google.com/drive/folders/1uoLtBYNROdAcmJzSIfho-0B2a7EV7Nm1?usp=drive_link",
      vocabulary: "https://drive.google.com/file/d/1M3VYLjf7sEolzoIaNjbhXOotl3Dmb2bC/view?usp=drive_link",
    },
  },
  {
    id: "hsk-6",
    level: "HSK Level 6",
    title: "Proficient",
    description: "Achieve professional-level Chinese proficiency and fluency.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    icon: "📚",
    resources: {
      books: true,
      audio: true,
      mockTest: true,
      vocabulary: true,
    },
    driveLinks: {
      books: "https://drive.google.com/drive/folders/18sx8UmwzK93fZea7l28wI_PJFRFaNaEr?usp=drive_link",
      audio: "https://drive.google.com/drive/folders/1zUQ45S_XeUHWUVglTrzR5B9rxksAeiaQ?usp=drive_link",
      mockTest: "https://drive.google.com/drive/folders/1hWlp_SAcMyNPr2zDT5KVbg9YFxay_fHE?usp=drive_link",
      vocabulary: "https://drive.google.com/file/d/1LziYNVQzFa7YQMUqEP_7-XW2j9gZ8HZl/view?usp=drive_link",
    },
  },
];

export const allResources: ResourceItem[] = [
  {
    id: "all-books",
    title: "All Resources",
    description: "Get full resources",
    icon: "📖",
    link: "https://drive.google.com/drive/folders/13EV97xZHlKU-uUeHElDnHuBu5sCIJj0m?usp=drive_link",
  },
  // {
  //   id: "audio-library",
  //   title: "Audio Library",
  //   description: "All Listening Files",
  //   icon: "🎧",
  //   link: "https://drive.google.com/drive/folders/YOUR_ALL_AUDIO_LINK",
  // },
  // {
  //   id: "mock-tests",
  //   title: "Mock Tests",
  //   description: "All Levels",
  //   icon: "📝",
  //   link: "https://drive.google.com/drive/folders/YOUR_ALL_MOCKTEST_LINK",
  // },
  // {
  //   id: "vocabulary",
  //   title: "Vocabulary",
  //   description: "Word Lists PDF",
  //   icon: "📋",
  //   link: "https://drive.google.com/drive/folders/YOUR_ALL_VOCAB_LINK",
  // },
  // {
  //   id: "grammar-notes",
  //   title: "Grammar Notes",
  //   description: "PDF & Guide",
  //   icon: "✏️",
  //   link: "https://drive.google.com/drive/folders/YOUR_GRAMMAR_LINK",
  // },
];