import { LearningItemState } from "@/types";

export const useLearningItemCompleteness = (
  learningItemState?: LearningItemState
) => {
  const allStepsCount = learningItemState?.steps.length || 0;
  const completedStepsCount =
    learningItemState?.steps.filter((step) => step.value).length || 0;

  return [completedStepsCount, allStepsCount] as const;
};
