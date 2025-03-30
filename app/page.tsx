import Link from "next/link";
import Image from "next/image";
import "./page.module.css"
const HomePage = () => {
  return (
    <div className="HomePage-Cnt">
      <div className="logo-Cnt">
        <Image src="/mascot.webp" alt="logo" className="logo-image" width={190} height={301} />
      </div>
      <div>
        <h2 className="random-Greeting">random greeting</h2>
      </div>
      <div>
        <h1 className="title">Unira</h1>
      </div>
      <div>
        <h3 className="about">¡
          Step into the world where <br />
          conversations spark
          <br />
          connections!
        </h3>
      </div>
      <div>
        <Link href="get-started">Get Started</Link>
      </div>
      <div>
        <a>
          <h3 className="explore">or explore first!</h3>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
