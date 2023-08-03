import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import "@fontsource-variable/montserrat"

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
})
import Layout from "../src/layout/Layout"
import { sliderProps } from "../src/sliderProps"
import Link from "next/link"
import Slider from "react-slick"
import styled from "@emotion/styled"

const HeroSectionStyled = styled.div`
  h1 {
    font-family: "Montserrat Variable", sans-serif;
  }

  p {
    font-size: 22px;
    font-weight: 200;
    margin-top: 25px;
    margin-left: 20px;
  }
`

const Index = () => {
  const [projectData, setProjectData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch("/api/projects")
      const data = await response.json()
      setProjectData(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  return (
    <Layout>
      <HeroSectionStyled>
        <section
          className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
          style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-11">
                <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                  Hello, I'm Nicolas Chiong
                  <span className="arrow">
                    <img
                      className="wow fadeInLeft delay-0-6s"
                      src="assets/images/hero/title-arrow.png"
                      alt="Arrow"
                    />
                  </span>
                  <p>Passionate frontend developer crafting seamless experiences.</p>
                </h1>

                <div className="col-lg-8 ">
                  <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s animated">
                    <a href="https://www.linkedin.com/in/nicolaschiong/" target="_blank">
                      <i className="fab fa-linkedin" /> <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/nicolaschiong" target="_blank">
                      <i className="fab fa-github" target="_blank" /> <span>Github</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HeroSectionStyled>

      {/* Hero Section End */}
      {/* About Us Area start */}
      <section className="hero-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-3 mb-40">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={7} />
                <span className="counter-title">Years of Web Development Experience</span>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-10 mt-10">
                  <a
                    href="https://drive.google.com/file/d/1hWgKw0nm4YBNaHJS7-C1d4fPaQC_qPB4/view?usp=sharing"
                    className="theme-btn style-two w-100"
                    target="_blank"
                  >
                    Download my CV <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">About Me</span>
                  <h2></h2>
                </div>
                <div className="content">
                  <p>
                    Hello everyone, I'm Nick, a passionate web developer with an eye for frontend
                    development. Throughout my journey, I've immersed myself in various web
                    development projects, honing my skills and embracing the latest technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-90 rpt-85 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              Skills <span>Technical</span> Skills
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* What We Do start */}
      <section className="skills-area pt-100 rpt-70 rel z-1">
        <div className="container container-1590">
          <div className="skills-wrap">
            <div className="skill-item">
              <img src="assets/images/skills/skill2.png" alt="Skill Icon" />
              <span className="text">HTML</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill3.png" alt="Skill Icon" />
              <span className="text">CSS</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill4.png" alt="Skill Icon" />
              <span className="text">Javascript</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill-typescript.png" alt="Skill Icon" width={44} />
              <span className="text">Typescript</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill5.png" alt="Skill Icon" />
              <span className="text">React JS</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill8.png" alt="Skill Icon" />
              <span className="text">Node.js</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill9.png" alt="Skill Icon" />
              <span className="text">Sass</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill-storybook.png" alt="Skill Icon" width={44} />
              <span className="text">Storybook</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill-jest.png" alt="Skill Icon" width={44} />
              <span className="text">Jest</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill-next.png" alt="Skill Icon" width={44} />
              <span className="text">Next JS</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill-apollo.svg" alt="Skill Icon" width={44} />
              <span className="text">Apollo</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill-redux.png" alt="Skill Icon" width={44} />
              <span className="text">Redux</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill-emotion.png" alt="Skill Icon" width={44} />
              <span className="text">Emotion</span>
            </div>
            <div className="skill-item">
              <img
                src="assets/images/skills/skill-styledcomponents.svg"
                alt="Skill Icon"
                width={44}
              />
              <span className="text">Styled Components</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill-tailwind.png" alt="Skill Icon" width={44} />
              <span className="text">Tailwind</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill-express.svg" alt="Skill Icon" width={44} />
              <span className="text">Express</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill-graphql.png" alt="Skill Icon" width={44} />
              <span className="text">GraphQL</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill-mongodb.png" alt="Skill Icon" width={44} />
              <span className="text">MongoDB</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill-firebase.png" alt="Skill Icon" width={44} />
              <span className="text">Firebase</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill-rollup.png" alt="Skill Icon" width={35} />
              <span className="text">Rollup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Style Three end */}
      {/* Headline area start */}
      <div className="headline-area pt-65 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              Project <span>Projects</span> Projects
            </span>
          </div>
        </div>
      </div>

      <section className="project-list-area pt-130 rpt-100 pb-10 rpb-25">
        <div className="container">
          {projectData?.map((project, index) => {
            if (index % 2 === 0) {
              return (
                <div className="project-item style-two">
                  <div className="image wow fadeInLeft delay-0-2s">
                    <img src="assets/images/projects/labsavvy-mobile.png" alt="Project List" />
                    <Link legacyBehavior href={`/project/${project?.slug}`}>
                      <a className="project-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="content wow fadeInRight delay-0-2s">
                    <p className="category">{project?.projectType}</p>
                    <h2>
                      <Link legacyBehavior href={`/project/${project?.slug}`}>
                        <a>
                          {project?.name} <i>{project?.appType}</i>
                        </a>
                      </Link>
                    </h2>
                    <hr />
                    <p>{project?.description}</p>
                    <Link legacyBehavior href={`/project/${project?.slug}`}>
                      <a className="read-more">
                        Project Details <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              )
            } else if (index % 2 !== 0) {
              return (
                <div className="project-item style-two">
                  <div className="content wow fadeInLeft delay-0-2s">
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
                    <hr />
                    <p>{project?.description}</p>

                    <Link legacyBehavior href={`/project/${project?.slug}`}>
                      <a className="read-more">
                        Project Details <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="image wow fadeInRight delay-0-2s">
                    <img src="assets/images/projects/project-list2.jpg" alt="Project List" />
                    <Link legacyBehavior href={`/project/${project?.slug}`}>
                      <a className="project-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </section>

      {/* Why Choose Us Area end */}
      {/* Headline area start */}
      {/* <div className="headline-area pt-60 rpt-50 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              <span>Feedback</span> Feedback
            </span>
          </div>
        </div>
      </div> */}

      {/* Headline Area end */}
      {/* Testimonial Area start */}
      <section className="testimonials-two-area pt-70 rpt-50">
        <div className="container">
          <div className="testimonial-two-part">
            <Slider {...sliderProps.testimonialsTwoActive} className="testimonials-two-active">
              <div className="testimonial-item style-two">
                <div className="author-speech">
                  <p>
                    <span className="quote">“</span> I have worked with Nicolas on a previous
                    project. He is a highly motivated and eager to learn more. Dedicated,
                    hardworking and broad-minded. Nicolas is a great project resource with a great
                    skill to analyze and summarize ideas.
                    <span className="quote right-quote">“</span>
                  </p>
                </div>
                <hr />
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src="assets/images/testimonials/1677496069095.jpeg" alt="Author Image" />
                    </div>
                    <div className="author-info">
                      <h4>Jesserine Lopez</h4>
                      <span className="designation">Software Developer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-item style-two">
                <div className="author-speech-2">
                  <p>
                    <span className="quote">“</span> Nicolas is a kind, tolerant, considerate,
                    understanding, honest, resilient and reliable person, that can bring great value
                    to any team in all of technical skills, soft skills, positive culture and human
                    traits. He is a great software engineer with a broad and strong skillset capable
                    of addressing any front-end challenges, from structural application and
                    architectural matters, to frameworks and libraries, custom components and
                    testability, themes, custom graphical resources and branding, and UI/UX,
                    providing a smooth experience both for the users and other fellow developers.
                    His skillset and interests continue on and go beyond and into other fields such
                    as data science and artificial intelligence. He reports with detail, with images
                    and animations that easily allow any manager to understand status, progress and
                    highlights. His vast knowledge, clarity of thought, accessibility and
                    helpfulness make it easy and a pleasure to work with him. Nicolas is an
                    excellent software engineer. Working with him is easy and a pleasure, and he is
                    a great teammate for any software development team, project and/or company.
                    <span className="quote right-quote">“</span>
                  </p>
                </div>
                <hr />
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src="assets/images/testimonials/1517462786937.jpeg" alt="Author Image" />
                    </div>
                    <div className="author-info">
                      <h4>Luis Miguel Serrano</h4>
                      <span className="designation">Software Engineer</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="testimonial-controls justify-content-center mt-100 rmt-50">
              <div className="testimonial-two-dots" />
            </div>
          </div>
        </div>
      </section>

      {/* footer area start */}
    </Layout>
  )
}
export default Index
