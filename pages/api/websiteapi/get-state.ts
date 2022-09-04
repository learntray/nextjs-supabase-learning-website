import type { NextApiRequest, NextApiResponse } from "next";
import { getLearningState } from "../../../data/state";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("1");

  if (req.method !== "GET") {
    res.status(405).send({ message: "Only GET requests allowed" });
    return;
  }

  console.log("2");

  let userLearningKey = req.headers.authorization?.split(" ")[1] || null;

  console.log("2", userLearningKey);

  console.log("3");

  if (!userLearningKey) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  console.log("4");

  const learningState = await getLearningState(userLearningKey);

  console.log("5");

  console.log("5", learningState);

  res.status(200).json({
    success: true,
    learningState,
  });
  return;
}
