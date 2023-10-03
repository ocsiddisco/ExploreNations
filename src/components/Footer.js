import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <p className="text-footer">© Made by Céline -</p>
        <nav className="navFooter">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ocsiddisco/todo2023"
          >
            <Image src="/github.png" alt="github" width={50} height={50} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/celinelecorvaisier/"
          >
            <Image src="/linkedin.png" alt="linkedin" width={50} height={50} />
          </a>
          <a href="mailto:celine.le.corv@gmail.com">
            <Image src="/email.png" alt="email" width={50} height={50} />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
