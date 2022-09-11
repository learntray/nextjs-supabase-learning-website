import React, { useContext, createContext, useEffect, useState } from "react";
import { getLearningState } from "@/methods";
import { LearningItemState } from "@/types";
import { isSsr } from "@/utils";

export interface LearningContextType {
  learningState: LearningItemState[];
  refetchLearningState: () => Promise<void>;
  getLearningItemState: (itemId: string) => LearningItemState | undefined;
}

export const LearningContext = createContext<LearningContextType>({
  learningState: [],
  refetchLearningState: async () => {},
  getLearningItemState: () => undefined,
});

export const LearningContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [learningState, setLearningState] = useState<LearningItemState[]>();

  const fetchState = async () => {
    const state = await getLearningState();

    setLearningState(state);
  };

  useEffect(() => {
    if (!isSsr) {
      fetchState();
    }
  }, []);

  const getLearningItemState = (itemId: string) => {
    return learningState?.find((item) => item.itemId === itemId);
  };

  const learningContext: LearningContextType = {
    learningState: learningState || [],
    refetchLearningState: fetchState,
    getLearningItemState,
  };

  return (
    <LearningContext.Provider value={learningContext}>
      {children}
    </LearningContext.Provider>
  );
};

export function useLearningContext() {
  const learningContext = useContext(LearningContext);

  if (!learningContext) {
    console.error("useLearningContext must be used within LearningContext");
  }

  return learningContext;
}

export default useLearningContext;
