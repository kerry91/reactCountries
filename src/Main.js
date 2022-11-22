import React, { useState, useEffect } from "react";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import Filterbar from "./components/filterbar/Filterbar";

const Main = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [allCountriesData, setallCountriesData] = useState([]);
  const [filterparams, setFilterparams] = useState("");
  const [filterRegion, setFilteredRegion] = useState([]);

  const initialURL = "https://restcountries.com/v2/all";

  const getCountry = async () => {
    try {
      const response = await fetch(initialURL);
      const data = await response.json();
      setCountriesData(data);
      setallCountriesData(data);
    } catch (error) {}
  };
  useEffect(() => {
    getCountry();
  }, []);

  const getRegion = (value) => {
    let newRegion = allCountriesData.filter(
      (item) => item.region.toLowerCase() === value.toLowerCase()
    );
    setCountriesData(newRegion);
    setFilteredRegion(newRegion);
  };
  useEffect(() => {
    if (filterparams) {
      getRegion(filterparams);
    } else {
      setCountriesData(allCountriesData);
      setFilteredRegion([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterparams, filterRegion]);

  return (
    <>
      <div className="Navbar">
        <Navbar />
      </div>

      <div className="card container mx-auto">
        <Filterbar
          filtervalue={filterparams}
          filterchange={(e) => setFilterparams(e.target.value)}
        />
        <div class="grid w-full xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {countriesData.map((countries, i) => {
            return <Card key={i} countries={countries} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Main;
