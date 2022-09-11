import { LearningItemState } from "@/types";

export const useLearningItemStepCompleteness = (
  learningItemState?: LearningItemState,
  stepId?: string
) => {
  const isCompleted = !!learningItemState?.steps.find(
    (step) => step.id === stepId
  )?.value;

  return isCompleted;
};
