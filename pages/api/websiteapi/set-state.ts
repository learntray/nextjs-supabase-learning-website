import type { NextApiRequest, NextApiResponse } from "next";
import { setLearningState } from "../../../data/state";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  let userLearningKey = req.headers.authorization?.split(" ")[1] || null;

  const body = JSON.parse(req.body);

  try {
    userLearningKey = await setLearningState(
      userLearningKey,
      body.itemId,
      body.itemStepId,
      body.value
    );
  } catch (e) {
    console.log("error", e);
    res.status(500).send({
      message: "Failed to alter learning state due to an internal error",
    });
    return;
  }

  res.status(200).json({
    success: true,
    userLearningKey,
  });
  return;
}
