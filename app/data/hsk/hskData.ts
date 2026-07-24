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
      books: "https://drive.google.com/drive/folders/YOUR_HSK1_BOOKS_LINK",
      audio: "https://drive.google.com/drive/folders/YOUR_HSK1_AUDIO_LINK",
      mockTest: "https://drive.google.com/drive/folders/YOUR_HSK1_MOCKTEST_LINK",
      vocabulary: "https://drive.google.com/drive/folders/YOUR_HSK1_VOCAB_LINK",
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
      books: "https://drive.google.com/drive/folders/YOUR_HSK2_BOOKS_LINK",
      audio: "https://drive.google.com/drive/folders/YOUR_HSK2_AUDIO_LINK",
      mockTest: "https://drive.google.com/drive/folders/YOUR_HSK2_MOCKTEST_LINK",
      vocabulary: "https://drive.google.com/drive/folders/YOUR_HSK2_VOCAB_LINK",
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
      books: "https://drive.google.com/drive/folders/YOUR_HSK3_BOOKS_LINK",
      audio: "https://drive.google.com/drive/folders/YOUR_HSK3_AUDIO_LINK",
      mockTest: "https://drive.google.com/drive/folders/YOUR_HSK3_MOCKTEST_LINK",
      vocabulary: "https://drive.google.com/drive/folders/YOUR_HSK3_VOCAB_LINK",
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
      books: "https://drive.google.com/drive/folders/YOUR_HSK4_BOOKS_LINK",
      audio: "https://drive.google.com/drive/folders/YOUR_HSK4_AUDIO_LINK",
      mockTest: "https://drive.google.com/drive/folders/YOUR_HSK4_MOCKTEST_LINK",
      vocabulary: "https://drive.google.com/drive/folders/YOUR_HSK4_VOCAB_LINK",
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
      books: "https://drive.google.com/drive/folders/YOUR_HSK5_BOOKS_LINK",
      audio: "https://drive.google.com/drive/folders/YOUR_HSK5_AUDIO_LINK",
      mockTest: "https://drive.google.com/drive/folders/YOUR_HSK5_MOCKTEST_LINK",
      vocabulary: "https://drive.google.com/drive/folders/YOUR_HSK5_VOCAB_LINK",
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
      books: "https://drive.google.com/drive/folders/YOUR_HSK6_BOOKS_LINK",
      audio: "https://drive.google.com/drive/folders/YOUR_HSK6_AUDIO_LINK",
      mockTest: "https://drive.google.com/drive/folders/YOUR_HSK6_MOCKTEST_LINK",
      vocabulary: "https://drive.google.com/drive/folders/YOUR_HSK6_VOCAB_LINK",
    },
  },
];

export const allResources: ResourceItem[] = [
  {
    id: "all-books",
    title: "All Books",
    description: "Old & New PDF",
    icon: "📖",
    link: "https://drive.google.com/drive/folders/YOUR_ALL_BOOKS_LINK",
  },
  {
    id: "audio-library",
    title: "Audio Library",
    description: "All Listening Files",
    icon: "🎧",
    link: "https://drive.google.com/drive/folders/YOUR_ALL_AUDIO_LINK",
  },
  {
    id: "mock-tests",
    title: "Mock Tests",
    description: "All Levels",
    icon: "📝",
    link: "https://drive.google.com/drive/folders/YOUR_ALL_MOCKTEST_LINK",
  },
  {
    id: "vocabulary",
    title: "Vocabulary",
    description: "Word Lists PDF",
    icon: "📋",
    link: "https://drive.google.com/drive/folders/YOUR_ALL_VOCAB_LINK",
  },
  {
    id: "grammar-notes",
    title: "Grammar Notes",
    description: "PDF & Guide",
    icon: "✏️",
    link: "https://drive.google.com/drive/folders/YOUR_GRAMMAR_LINK",
  },
];