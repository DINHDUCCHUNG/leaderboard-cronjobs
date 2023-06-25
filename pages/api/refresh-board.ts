import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_request: NextApiRequest, response: NextApiResponse) {
  const refreshBoardEndPoint = process.env.API_URL + "/public/refresh-board";
  const res = await fetch(refreshBoardEndPoint, {
    method: "POST",
  });
  response.status(200).json({ success: true, result: await res.json() });
}
