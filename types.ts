export interface LearningItemStep {
  id: string;
  name: string;
  url: string;
}

export interface LearningItem {
  id: string;
  name: string;
  description: string;
  url: string;
  completeness?: boolean;
  steps?: LearningItemStep[];
}

export interface LearningItemStepState {
  id: string;
  value: boolean;
}

export interface LearningItemState {
  itemId: string;
  userId: string;
  completeness: boolean;
  steps: LearningItemStepState[];
}

export interface LearnApiItems {
  learnapi: string;
  items: LearningItem[];
}

export interface LearnApiState {
  learnapi: string;
  state: LearningItemState[];
}
