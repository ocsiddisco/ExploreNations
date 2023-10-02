import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

export default function Table(props) {
  const [rows, setRows] = useState([]);

  const { filteredOptions } = props;

  const checkData = (data) => {
    try {
      const currencie = Object.values(data.currencies)[0].name;
      const language = Object.values(data.languages)[0];
      return { currencie, language };
    } catch (err) {
      console.log(err);
      return {};
    }
  };

  const columns = [
    {
      field: "continent",
      headerName: "Continent",
      width: 110,
      headerClassName: "styleHeaders",
    },
    {
      field: "country",
      headerName: "Country",
      width: 130,
      headerClassName: "styleHeaders",
    },
    {
      field: "capital",
      headerName: "Capital",
      width: 110,
      headerClassName: "styleHeaders",
    },
    {
      field: "population",
      headerName: "Population",
      width: 110,
      headerClassName: "styleHeaders",
    },
    {
      field: "language",
      headerName: "Language",
      width: 110,
      headerClassName: "styleHeaders",
    },
    {
      field: "currencie",
      headerName: "Currencie",
      width: 128,
      headerClassName: "styleHeaders",
    },
  ];

  useEffect(() => {
    const updatedRows = filteredOptions.map((data, index) => {
      const { language, currencie } = checkData(data);
      return {
        id: index + 1,
        continent: data.region,
        country: data.name.common,
        capital: data.capital,
        population: data.population,
        language: language,
        currencie: currencie,
      };
    });

    setRows(updatedRows);
  }, [filteredOptions, checkData]);

  // useEffect(() => {
  //   populateTable();
  // }, [filteredOptions]);

  // const populateTable = () => {
  //   const updatedRows = filteredOptions.map((data, index) => {
  //     const { language, currencie } = checkData(data);
  //     return {
  //       id: index + 1,
  //       continent: data.region,
  //       country: data.name.common,
  //       capital: data.capital,
  //       population: data.population,
  //       language: language,
  //       currencie: currencie,
  //     };
  //   });

  //   setRows(updatedRows);
  // };

  return (
    <>
      <div className="container-table">
        <Box sx={{ height: 400, width: "100%", m: 5, boxShadow: 2 }}>
          <DataGrid rows={rows} columns={columns} />
        </Box>
      </div>
    </>
  );
}
