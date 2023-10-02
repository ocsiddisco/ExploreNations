function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <p className="text-footer">© Made by Céline</p>
        <nav className="navFooter">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ocsiddisco/todo2023"
          >
            <img src="github.png" alt="github" width="60px" height="60px" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/celinelecorvaisier/"
          >
            <img src="linkedin.png" alt="linkedin" width="60px" height="60px" />
          </a>
          <a href="mailto:celine.le.corv@gmail.com">
            <img src="email.png" alt="email" width="60px" height="60px" />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
