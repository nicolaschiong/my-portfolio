import React, { useState, useEffect } from "react"
import PageBanner from "../../src/components/PageBanner"
import Layout from "../../src/layout/Layout"
import Link from "next/link"

const BlogPage = () => {
  const [projectData, setProjectData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch("/api/hello")
      const data = await response.json()
      setProjectData(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"My Projects"} />
      {/* Page Banner End */}
      {/* Project Grid Area start */}
      <section className="project-grid-area pt-130 rpt-100 pb-10 rpb-25">
        <div className="container container-1210">
          <div className="row gap-110">
            {projectData?.map((project) => (
              <div className="col-lg-6">
                <div className="project-item">
                  <div className="image wow fadeInUp delay-0-2s">
                    <img
                      src={`assets/images/projects/${project?.slug}-thumbnail.png`}
                      alt={project?.name}
                    />{" "}
                    <Link legacyBehavior href={`/project/${project?.slug}`}>
                      <a className="project-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="content wow fadeInUp delay-0-2s">
                    <Link legacyBehavior href="/project">
                      <a className="category">{project?.projectType}</a>
                    </Link>
                    <h2>
                      <Link legacyBehavior href={`/project/${project?.slug}`}>
                        <a>
                          {project?.name} <i>{project?.appType}</i>
                        </a>
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Project Grid Area end */}
      {/* Work With Area start */}

      {/* Work With Area end */}
      {/* footer area start */}
    </Layout>
  )
}

export default BlogPage
