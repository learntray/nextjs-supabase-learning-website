import { LearningItem } from "../types";

export const learningItemList: LearningItem[] = [
  {
    id: "guide-1",
    name: "Example Guide 1",
    url: "/courses/guide-1",
    description: "Example Guide 1",
    completeness: false,
    steps: [
      {
        id: "chapter-1",
        name: "Chapter 1",
        url: "/courses/guide-1/chapter-1",
      },
      {
        id: "chapter-2",
        name: "Chapter 2",
        url: "/courses/guide-1/chapter-2",
      },
      {
        id: "chapter-3",
        name: "Chapter 3",
        url: "/courses/guide-1/chapter-3",
      },
    ],
  },
  {
    id: "guide-2",
    name: "Example Guide 2",
    url: "/courses/guide-2",
    description: "Example Guide 2",
    completeness: false,
    steps: [
      {
        id: "chapter-1",
        name: "Chapter 1",
        url: "/courses/guide-2/chapter-1",
      },
      {
        id: "chapter-2",
        name: "Chapter 2",
        url: "/courses/guide-2/chapter-2",
      },
      {
        id: "chapter-3",
        name: "Chapter 3",
        url: "/courses/guide-2/chapter-3",
      },
    ],
  },
];
