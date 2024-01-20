import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="topbar">

      <Link href="/" className="logo">
        <Image
          src="/Logo_dark.png"
          alt="Devfolio"
          width={145}
          height={32}
          className="dark"
        />
        <Image
          src="/Logo_light.png"
          alt="Devfolio"
          width={145}
          height={32}
          className="light"
        />
      </Link>

      <button className="icon-btn theme-btn">
        <span className="material-symbols-outlined dark" aria-hidden="true"> dark_mode </span>
        <span className="material-symbols-outlined light" aria-hidden="true"> light_mode </span>

        <div className="state-layer"></div>
      </button>

    </header>
  )
}

export default Header;