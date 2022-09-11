import { LearningItemStepState } from "@prisma/client";
import { LearningItemState } from "@/types";
import { learningItemList } from "./items";

export const mapDatabaseStateToApiState = (
  learningItemStepState: LearningItemStepState[]
): LearningItemState[] => {
  const state = learningItemList.reduce((acc, availableItem) => {
    const resourceStepsState: LearningItemStepState[] =
      learningItemStepState.filter(
        ({ resourceId }) => resourceId === availableItem.id
      );

    if (resourceStepsState.length > 0) {
      const userIds = resourceStepsState.reduce((ids, { userId }) => {
        if (!ids.includes(userId)) {
          return [...ids, userId];
        }
        return ids;
      }, [] as string[]);

      const usersStates: LearningItemState[] = userIds.map((userId) => {
        const userStepsState = resourceStepsState.filter(
          ({ userId: stepUserId }) => stepUserId === userId
        );

        const userResourceAllSteps: LearningItemStepState[] =
          availableItem.steps?.map(({ id }) => {
            const stepState = userStepsState.find(
              ({ resourceStepId }) => resourceStepId === id
            );

            return {
              id,
              done: stepState?.done || false,
              resourceId: stepState?.resourceId || availableItem.id,
              resourceStepId: stepState?.resourceStepId || id,
              userId: userId,
            };
          }) || [];

        return {
          itemId: availableItem.id,
          userId,
          completeness: userResourceAllSteps.every(({ done }) => done),
          steps: userResourceAllSteps.map(({ id, done }) => ({
            id,
            value: done || false,
          })),
        };
      });

      return [...acc, ...usersStates];
    }

    return acc;
  }, [] as LearningItemState[]);

  return state;
};
