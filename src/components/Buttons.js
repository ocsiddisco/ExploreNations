import Image from "next/image";

const Buttons = ({ handleClickDisplay }) => {
  return (
    <>
      <div className="container-buttons">
        <p>Select a view</p>
        <span className="container-buttons-inside">
          <button onClick={() => handleClickDisplay("list")}>
            <Image src="/view.png" alt="view-card" width={50} height={50} />
          </button>
          <button onClick={() => handleClickDisplay("carousel")}>
            <Image
              src="/carousel.png"
              alt="view-carousel"
              width={50}
              height={50}
            />
          </button>
          <button onClick={() => handleClickDisplay("table")}>
            <Image src="/table.png" alt="view-table" width={50} height={50} />
          </button>
        </span>
      </div>
    </>
  );
};

export default Buttons;
