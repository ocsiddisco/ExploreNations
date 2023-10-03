const NewCard = (props) => {
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
      currencieSymbol = Object.values(country.currencies)[0].symbol;
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
    <div className="container-newcard" key={props.i}>
      <div className="container-newcountry">
        <div className="newfirst-lign">
          <h4>{` ${country.continents[0]}`}</h4>
          <div className="newcountryname">
            <h3>{`${country.name.common}`}</h3>
          </div>
        </div>
        <div className="container-newinfo">
          <div className="container-newinfo-inside">
            <span>
              <p className="newleft">Capital </p>
              <p className="newright">{country.capital}</p>
            </span>
            <span>
              <p className="newleft">Population </p>
              <p className="newright">{inhabitants} inhab</p>
            </span>
            <span>
              <p className="newleft">Language </p>
              <p className="newright">{languageMain}</p>
            </span>
            <span>
              <p className="newleft">Currency </p>
              <p className="newright">
                {currencieName} {currencieSymbol}
              </p>
            </span>
          </div>
        </div>
        <div className="container-newmap">
          <button className="newmap">
            <a
              href={`${country.maps.googleMaps}`}
              target="_blank"
              alt="link to google maps"
            >
              Google map{" "}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
