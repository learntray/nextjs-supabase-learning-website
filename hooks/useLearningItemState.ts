import { useMemo } from "react";
import useLearningContext from "../components/LearningContext";

export const useLearningItemState = (itemId: string) => {
  const { learningState, getLearningItemState } = useLearningContext();

  const learningItemState = useMemo(
    () => getLearningItemState(itemId),
    [itemId, learningState]
  );

  return learningItemState;
};
