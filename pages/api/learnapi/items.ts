import type { NextApiRequest, NextApiResponse } from "next";
import { LearnApiItems } from "../../../types";
import { learningItemList } from "../../../data/items";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LearnApiItems>
) {
  res.status(200).json({
    learnapi: "1.0.0-rfc-0",
    items: learningItemList,
  });
}
