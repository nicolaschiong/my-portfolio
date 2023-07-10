import dynamic from "next/dynamic"

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
})
import Layout from "@/src/layout/Layout"
import { sliderProps } from "@/src/sliderProps"
import Link from "next/link"
import Slider from "react-slick"

const Index = () => {
  return (
    <Layout>
      {/* Hero Section Start */}
      <section className="hero-area pt-185 rpt-150 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content wow fadeInLeft delay-0-2s">
                <h1>
                  Nicolas <span>Chiong</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="hero-bottom-image">
            <img src="assets/images/hero/hero-four-crop.png" alt="Hero" />
            <div className="hero-social">
              <a href="https://www.linkedin.com/in/nicolaschiong/" target="_blank">
                <i className="fab fa-linkedin" /> <span>LinkedIn</span>
              </a>
              <a href="https://github.com/nicolaschiong" target="_blank">
                <i className="fab fa-github" target="_blank" /> <span>Github</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bg">
          <img src="assets/images/hero/hero-bg.png" alt="lines" />
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Us Area start */}
      <section className="about-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-3">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={7} />
                <span className="counter-title">Years of Experience</span>
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">About Me</span>
                  <h2>Focus on Frontend development</h2>
                </div>
                <div className="content">
                  <p>
                    I am eager to bring my expertise in developing high-quality
                    <b> ReactJS/Typescript </b>web applications. With a strong background in
                    utilizing my resourcefulness and problem-solving skills to create impactful
                    solutions, I am confident in my ability to make a valuable contribution to your
                    team and deliver meaningful results for both your company and clients.
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

      {/* Headline Area end */}
      {/* Project Timeline Area start */}
      <section className="project-timeline-area pt-90 rpt-75 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center pb-25">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-30 wow fadeInLeft delay-0-2s">
                <span className="sub-title mb-15">Recent Projects</span>
                <h2>Project Showcase</h2>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link legacyBehavior href="/projects" disabled>
                <a className="theme-btn mb-25 wow fadeInRight delay-0-2s">
                  View More Projects <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">01</span>
              <h4>
                <Link legacyBehavior href="/project-details">
                  <a>LabSavvy - Web and Mobile Health App</a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img src="assets/images/projects/project-labsavvy1.png" alt="Labsavvy" width={400} />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">02</span>
              <h4>
                <Link legacyBehavior href="/project-details">
                  <a>TaskUp - Task Management App</a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                src="assets/images/projects/project-timeline2.jpg"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">03</span>
              <h4>
                <Link legacyBehavior href="/project-details">
                  <a>Mobile Application Design &amp; Development</a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                src="assets/images/projects/project-timeline3.jpg"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
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
            <div className="circle-text text-center mb-75">
              <img src="assets/images/testimonials/circle-text.png" alt="Circle Text" />
            </div>
            <Slider {...sliderProps.testimonialsTwoActive} className="testimonials-two-active">
              <div className="testimonial-item style-two">
                <div className="author-speech">
                  <p>
                    <span className="quote">“</span> On the other hand we denounce with righteous
                    indignation and dislike men beguiled demoralized charms offset pleasure moments
                    line desire that they cannot foresee pain and trouble that boon
                    <span className="quote right-quote">“</span>
                  </p>
                </div>
                <hr />
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src="assets/images/testimonials/author1.png" alt="Author Image" />
                    </div>
                    <div className="author-info">
                      <h4>James N. Johnson</h4>
                      <span className="designation">CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div className="ratting style-two">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
              <div className="testimonial-item style-two">
                <div className="author-speech">
                  <p>
                    <span className="quote">“</span> On the other hand we denounce with righteous
                    indignation and dislike men beguiled demoralized charms offset pleasure moments
                    line desire that they cannot foresee pain and trouble that boon{" "}
                    <span className="quote right-quote">“</span>
                  </p>
                </div>
                <hr />
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src="assets/images/testimonials/author1.png" alt="Author Image" />
                    </div>
                    <div className="author-info">
                      <h4>James N. Johnson</h4>
                      <span className="designation">CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div className="ratting style-two">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
              <div className="testimonial-item style-two">
                <div className="author-speech">
                  <p>
                    <span className="quote">“</span> On the other hand we denounce with righteous
                    indignation and dislike men beguiled demoralized charms offset pleasure moments
                    line desire that they cannot foresee pain and trouble that boon{" "}
                    <span className="quote right-quote">“</span>
                  </p>
                </div>
                <hr />
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src="assets/images/testimonials/author1.png" alt="Author Image" />
                    </div>
                    <div className="author-info">
                      <h4>James N. Johnson</h4>
                      <span className="designation">CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div className="ratting style-two">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
              <div className="testimonial-item style-two">
                <div className="author-speech">
                  <p>
                    <span className="quote">“</span> On the other hand we denounce with righteous
                    indignation and dislike men beguiled demoralized charms offset pleasure moments
                    line desire that they cannot foresee pain and trouble that boon{" "}
                    <span className="quote right-quote">“</span>
                  </p>
                </div>
                <hr />
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src="assets/images/testimonials/author1.png" alt="Author Image" />
                    </div>
                    <div className="author-info">
                      <h4>James N. Johnson</h4>
                      <span className="designation">CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div className="ratting style-two">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
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
