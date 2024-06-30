import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const createProject: NextApiHandler = (req, res) => {
  return res.json({
    message: 'Project created'
  })
}

export default createProject
