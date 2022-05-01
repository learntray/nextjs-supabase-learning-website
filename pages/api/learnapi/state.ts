import type { NextApiRequest, NextApiResponse } from "next";
import { LearnApiState } from "../../../types";
import { learningItemStateList } from "../../../data/state";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LearnApiState>
) {
  res.status(200).json({
    learnapi: "1.0.0-rfc-0",
    state: learningItemStateList,
  });
}
