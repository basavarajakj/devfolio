import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="section hero">
      <div className="container">

        <figure className="hero-banner img-holder" style={{ "--width": 240, "--height": 240} as React.CSSProperties}>
          <Image 
            src="/profile.png"
            width="240"
            height="240"
            alt="Bassu"
            className="img-cover"
          />
        </figure>

        <div className="hero-cont">

          <span className="label-large section-subtitle">Software Engineer</span>
          <h1 className="display-small">Basavaraja K J</h1>

          <p className="body-large section-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus pariatur nam quae.
          </p>

          <div className="btn-wrapper">

            <Link href="mailto:basavarajakj06@gmail.com" className="chip">
              <span className="material-symbols-outlined" aria-hidden="true"> mail </span>

              <span className="label-large">basavarajakj06@gmail.com</span>

              <div className="state-layer"></div>
            </Link>

            <Link href="tel:+91808080808" className="chip">
              <span className="material-symbols-outlined" aria-hidden="true"> call </span>

              <span className="label-large">+91808080808</span>

              <div className="state-layer"></div>
            </Link>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero