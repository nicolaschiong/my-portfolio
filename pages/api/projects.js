// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "../../firebase"
import { ref, onValue } from "firebase/database"

export default function handler(req, res) {
  if (db) {
    const projectRef = ref(db, "projects/")

    let projects
    onValue(projectRef, (snapshot) => {
      const data = snapshot.val()
      projects = data
      console.log(projects)
    })

    res.status(200).json(projects)
  }
}
