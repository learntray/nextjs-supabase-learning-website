import useLearningContext from "@/components/LearningContext";

export const useLearningState = () => {
  const { learningState } = useLearningContext();

  return learningState;
};
