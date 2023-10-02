const Header = () => {
  return (
    <header>
      <div className="container-title">
        <h1 className="welcome">Welcome to</h1>
        <div className="container-title-inside">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="100"
            viewBox="0 0 200 100"
          >
            <path
              d="M0 90 C40 10, 160 10, 200 90"
              fill="none"
              stroke="#f9dcd2"
              stroke-width="4"
            />
          </svg>

          <h1 className="nameSite">ExploreNations</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="100"
            viewBox="0 0 200 100"
          >
            <path
              d="M0 10 C40 90, 160 90, 200 10"
              fill="none"
              stroke="#f9dcd2"
              stroke-width="4"
            />
          </svg>
        </div>
      </div>
      <div className="container-description">
        <p>
          Explore the world through our country cards. Whether you're a travel
          enthusiast, or simply curious, our website has something for you.
          Discover the world, one card at a time, and expand your global
          knowledge.
        </p>
      </div>
    </header>
  );
};

export default Header;
