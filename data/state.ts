import { LearningItemState } from "../types";
import { prismaClient } from "./database";
import { mapDatabaseStateToApiState } from "./mapping";

// This is the state which you can fetch from the database for currently authorised user.

export const learningItemStateList: LearningItemState[] = [];

export const getEveryLearningState = async () => {
  const stepsState = await prismaClient.learningItemStepState.findMany();

  const mappedState = mapDatabaseStateToApiState(stepsState);

  return mappedState;
};

export const getLearningState = async (userLearningKey?: string) => {
  if (!userLearningKey) {
    return [];
  }

  const user = await prismaClient.user.findFirstOrThrow({
    where: {
      learningKey: {
        equals: userLearningKey,
      },
    },
  });

  const stepsState = await prismaClient.learningItemStepState.findMany({
    where: {
      userId: {
        equals: user.id,
      },
    },
  });

  const mappedState = mapDatabaseStateToApiState(stepsState);

  return mappedState;
};

export const setLearningState = async (
  userLearningKey: string | null,
  itemId: string,
  itemStepId: string,
  value: boolean
) => {
  let user;
  if (!userLearningKey) {
    user = await prismaClient.user.create({
      data: {},
    });
  } else {
    user = await prismaClient.user.findFirst({
      where: {
        learningKey: {
          equals: userLearningKey,
        },
      },
    });
    if (!user) {
      user = await prismaClient.user.create({
        data: {},
      });

      // setUserLearningKey(user.learningKey);
    }
    await prismaClient.learningItemStepState.upsert({
      where: {
        userId_resourceId_resourceStepId: {
          resourceId: itemId,
          resourceStepId: itemStepId,
          userId: user.id,
        },
      },
      create: {
        done: value,
        resourceId: itemId,
        resourceStepId: itemStepId,
        userId: user.id,
      },
      update: {
        done: value,
      },
    });
  }

  return user.learningKey;
};
