import { Inter } from "next/font/google";
import { useEffect, useMemo, useState } from "react";
import AsyncSelect from "react-select/async";
import Header from "./components/Header";
import NewCard from "./components/NewCard";
import Carrousel from "./components/Carrousel";
import Table from "./components/Table";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [allData, setAllData] = useState([]);
  const [countriesList, setCountriesList] = useState([]);
  const [countries, setCountries] = useState([]);
  const [continentsList, setContinentsList] = useState([]);
  const [continents, setContinents] = useState([]);
  const [state, setState] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log("data", data);
      setAllData(data);
      getCountries(data);
      getContinents(data);
    } catch (error) {
      console.log("Error fetching countries", error);
    }
  };

  // handle search per country
  const getCountries = () => {
    const list = [];
    console.log("continents get countries", continents);
    if (continents.length === 0) {
      console.log("start here");

      allData.forEach((country) =>
        list.push({
          value: country.name.common,
          label: country.name.common,
        })
      );
    } else {
      console.log("then goes here");
      const filteredCountries = allData.filter((country) =>
        continents.some(
          (continent) => continent.value === country.continents[0]
        )
      );
      filteredCountries.forEach((country) =>
        list.push({
          value: country.name.common,
          label: country.name.common,
        })
      );
    }
    list.sort((a, b) => (a.value > b.value ? 1 : b.value > a.value ? -1 : 0));
    setCountriesList(list);
  };

  function handleSelectedCountries(selected) {
    console.log("selected", selected);
    setCountries(selected);
  }

  // handle search per continents
  const getContinents = (allData) => {
    const list = [];

    allData.forEach((country) => {
      //.some: checks if at least one element in an array satisfied a given condition. return true or false
      if (!list.some((i) => i.value === country.continents[0])) {
        list.push({
          value: country.continents[0],
          label: country.continents[0],
        });
      }
    });
    list.sort((a, b) => (a.value > b.value ? 1 : b.value > a.value ? -1 : 0));
    setContinentsList(list);
  };

  // select a continent will reduce the list of countries in the search bar country
  function handleSelectedContinents(selected) {
    console.log("selected", selected);
    setContinents(selected);
  }

  // usememo permet de continuer d ecouter les datas et les selecteccoutries
  //filteredcoutries is a supbest of alldata

  const filteredOptions = useMemo(() => {
    // [{ label: 'foo', value: 'foo' }] => ['foo', 'bar']
    // Call getCountries when continents state changes

    getCountries();
    const filteredCountries = countries.map((option) => option.value);
    const filteredContinents = continents.map((option) => option.value);
    console.log({
      filteredCountries: filteredCountries,
      filteredContinents: filteredContinents,
    });

    if (filteredContinents.length === 0) {
      // If no continents are selected, return all countries
      return allData.filter((country) =>
        filteredCountries.includes(country.name.common)
      );
    } else {
      return allData.filter(
        (country) =>
          filteredCountries.includes(country.name.common) &&
          filteredContinents.includes(country.continents[0])
      );
    }
  }, [allData, countries, continents]);

  const handleClickDisplay = (clickedIcon) => {
    setState(clickedIcon);
  };
  console.log("filteredOptions", filteredOptions);
  return (
    <>
      <Header />
      <div className="container-inputs">
        <div className="container-inputs-inside">
          <AsyncSelect
            className="input"
            isMulti
            loadOptions={getContinents}
            defaultOptions={continentsList}
            placeholder="Select one or more continent(s)"
            onChange={handleSelectedContinents}
          />
          <AsyncSelect
            className="input"
            isMulti
            loadOptions={getCountries}
            defaultOptions={countriesList}
            placeholder="Select at least one country"
            onChange={handleSelectedCountries}
          />
        </div>
      </div>
      <Buttons handleClickDisplay={handleClickDisplay} />
      <div className="container-countries">
        {state === "" && (
          <div className="container-countries-inside">
            {filteredOptions.map((option, i) => {
              return <NewCard option={option} i={i} />;
            })}
          </div>
        )}

        {state === "carousel" && (
          <Carrousel filteredOptions={filteredOptions} />
        )}
        {state === "table" && <Table filteredOptions={filteredOptions} />}
      </div>

      <Footer />
    </>
  );
}
