// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { db } from "../../firebase"
// import { ref, onValue } from "firebase/database"
import projectData from "../../src/data/nicolaschiong-portfolio-default-rtdb-export.json"

export default function handler(req, res) {
  res.status(200).json(projectData)
}
