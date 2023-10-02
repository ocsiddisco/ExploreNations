const Buttons = ({ handleClickDisplay }) => {
  return (
    <>
      <div className="container-buttons">
        <p>Select a view</p>
        <span className="container-buttons-inside">
          <button onClick={() => handleClickDisplay("")}>
            <img src="view.png" alt="view-card" />
          </button>
          <button onClick={() => handleClickDisplay("carousel")}>
            <img src="carousel.png" alt="view-carousel" />
          </button>
          <button onClick={() => handleClickDisplay("table")}>
            <img src="table.png" alt="view-table" />
          </button>
        </span>
      </div>
    </>
  );
};

export default Buttons;
