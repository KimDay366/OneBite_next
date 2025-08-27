import type { NextApiRequest, NextApiResponse } from "next";


export default function handler (
  req: NextApiRequest,
  res: NextApiResponse,
){

    const data = new Date();
    res.json({time: data.toLocaleString()});
    // 접속시간에 대한 json data를 만들었음 : {"time":"2025. 8. 27. 오후 5:55:04"}

}