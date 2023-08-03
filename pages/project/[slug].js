import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Layout from "../../src/layout/Layout"
import Link from "next/link"
import { Tooltip } from "@mantine/core"

export default function Page() {
  const router = useRouter()
  const { slug } = router.query
  const [data, setData] = useState([])
  const [projectData, setProjectData] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch("/api/projects")
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    if (data.length > 0) {
      const project = data.find((project) => project.slug === slug)
      setProjectData(project)
    }
  }, [data])

  return (
    <Layout>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-75 rel z-1"
        style={{ backgroundImage: "url(../assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-12">
              <span>
                <img
                  src={`../assets/images/projects/${projectData?.projectLogo}-logo.png`}
                  alt="Project"
                  height={150}
                />
              </span>
              <div className="banner-text wow fadeInUp delay-0-3s">{projectData?.description}</div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Project Details Image start */}
      <div className="project-details-image rel z-1">
        <div className="container-fluid">
          <div className="image wow fadeInUp delay-0-2s">
            <img src="../assets/images/projects/project-labsavvy-hero.png" alt="Project" />
          </div>
        </div>
      </div>
      {/* Project Details Image end */}
      {/* Project Details Content Area start */}
      <section className="project-details-area pt-80 rel z-1">
        <div className="container container-1290">
          <div className="row pb-35 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">Project Information</h3>
            </div>
            <div className="col-lg-8">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                <div className="col">
                  <h5>Client</h5>
                  <p className="sub-title mb-20">{projectData?.clientName}</p>
                </div>
                <div className="col">
                  <h5>Category</h5>
                  <p className="sub-title mb-20">{projectData?.appType} </p>
                </div>
                <div className="col">
                  <h5>Project Start</h5>
                  <p className="sub-title mb-20">{projectData?.projectStart}</p>
                </div>
                <div className="col">
                  <h5>Location</h5>
                  <p className="sub-title mb-20">{projectData?.location}</p>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="row pt-50 pb-70 wow fadeInUp delay-0-2s">
            <div className="col-lg-4 pb-50">
              <h3 className="title mb-30">Frontend </h3>
              {projectData?.frontendStack?.map((skill) => (
                <Tooltip label={skill} position="bottom">
                  <img
                    src={`../assets/images/skills/skill-${skill}.png`}
                    width={40}
                    alt={skill}
                    style={{ margin: 5 }}
                  />
                </Tooltip>
              ))}
            </div>
            <div className="col-lg-4 pb-50">
              <h3 className="title mb-30">Backend </h3>
              {projectData?.backendStack?.map((skill) => (
                <Tooltip label={skill} position="bottom">
                  <img
                    src={`../assets/images/skills/skill-${skill}.png`}
                    width={40}
                    alt={skill}
                    style={{ margin: 5 }}
                  />
                </Tooltip>
              ))}
            </div>
            <div className="col-lg-4 pb-50">
              <h3 className="title mb-30">Infrastructure </h3>
              {projectData?.infrastructureStack?.map((skill) => (
                <Tooltip label={skill} position="bottom">
                  <img
                    src={`../assets/images/skills/skill-${skill}.png`}
                    width={40}
                    alt={skill}
                    style={{ margin: 5 }}
                  />
                </Tooltip>
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <img src="../assets/images/projects/project-middle1.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image mb-30 wow fadeInUp delay-0-4s">
                <img src="../assets/images/projects/project-middle2.jpg" alt="Project" />
              </div>
            </div>
          </div>

          <div className="row pt-50 pb-70 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">The Challenge</h3>
            </div>
            <div className="col-lg-8">
              <div className="big-letter text">{projectData?.theChallenges}</div>
            </div>
          </div>

          <div className="row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">Solution</h3>
            </div>
            <div className="col-lg-8">
              <div className="big-letter text">{projectData?.theResult}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Prev Post Area end */}
      {/* footer area start */}
    </Layout>
  )
}
