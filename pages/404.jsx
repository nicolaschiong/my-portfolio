import Layout from "@/src/layout/Layout"
import Link from "next/link"
const E404 = () => {
  return (
    <Layout>
      <section
        className="error-section pt-220 rpt-120 pb-100 rpb-80 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="error-content rmb-55 wow fadeInRight delay-0-2s">
                <h1>Oh no!</h1>
                <div className="section-title mb-50 rmb-35">
                  <h2>You may be lost</h2>
                </div>
                <Link legacyBehavior href="/">
                  <a className="theme-btn style-two">
                    Go to Home <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <div className="social-style-four d-flex mt-60 rmt-35">
                  <a href="https://www.linkedin.com/in/nicolaschiong/">
                    <i className="fab fa-linkedin" /> <span>Linkedin</span>
                  </a>
                  <a href="https://github.com/nicolaschiong">
                    <i className="fab fa-github" /> <span>Github</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="error-image wow zoomIn delay-0-2s">
                <img src="assets/images/background/404-error.png" alt="404 Error" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 404 Error Section End */}
    </Layout>
  )
}
export default E404
