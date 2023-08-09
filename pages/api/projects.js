// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { db } from "../../firebase"
// import { ref, onValue } from "firebase/database"
import projectData from "../../src/data/nicolaschiong-portfolio-default-rtdb-export.json"

export default function handler(req, res) {
  res.status(200).json(projectData)
  // try {
  //   if (db) {
  //     const projectRef = ref(db, "projects/")

  //     onValue(projectRef, (snapshot) => {
  //       const data = snapshot.val()
  //       res.status(200).json(projectData)
  //       console.log(projectData)
  //     })
  //   }
  // } catch (error) {
  //   res.status(500).json(error)

  //   console.log("Error occured", error)
  // }
}
