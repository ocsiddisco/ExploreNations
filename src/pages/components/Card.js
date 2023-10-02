import Tilt from "react-parallax-tilt";

const Card = (props) => {
  console.log("option", props.option);

  const country = props.option;

  let capital = "";
  let currencieName = "";
  let currencieSymbol = "";
  let languageMain = "";
  let inhabitants = "";

  const checkData = () => {
    try {
      capital = country.capital;
      currencieName = Object.values(country.currencies)[0].name;
      console.log(" currencieName", currencieName);
      currencieSymbol = Object.values(country.currencies)[0].symbol;
      console.log(" currencieSymbol", currencieSymbol);
      languageMain = Object.values(country.languages)[0];
      return { capital, currencieName, currencieSymbol, languageMain };
    } catch (err) {
      console.log(err);
    }
  };

  checkData();

  const transformNumber = () => {
    const number = country.population;
    inhabitants = number.toLocaleString("fr-FR");
    return inhabitants;
  };

  transformNumber();

  return (
    <div className="container-card">
      <div className="container-country" key={props.i}>
        <div className="first-lign">
          <Tilt
            className="parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <div className="inner-tilt">
              <img
                src={`${country.flags.png}`}
                style={{ width: "70px" }}
                alt="flag country"
              />
            </div>
          </Tilt>
          <h3>{`${country.name.common}`}</h3>
        </div>
        <div className="container-info">
          <span>
            <p className="left">Continent </p>
            <p className="right">{` ${country.continents[0]}`}</p>
          </span>
          <span>
            <p className="left">Capital </p>
            <p className="right">{country.capital}</p>
          </span>
          <span>
            <p className="left">Population </p>
            <p className="right">{inhabitants} inhab</p>
          </span>
          <span>
            <p className="left">Language </p>
            <p className="right">{languageMain}</p>
          </span>
          <span>
            <p className="left">Currency </p>
            <p className="right">
              {currencieName} {currencieSymbol}
            </p>
          </span>
        </div>
        <div className="container-map">
          <button className="map">
            <a
              href={`${country.maps.googleMaps}`}
              target="_blank"
              alt="link to google maps"
            >
              See it on a map
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
