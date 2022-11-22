import React from "react";

function Card({ countries }) {
  return (
    <>
      <div class="w-64 max-h-full rounded-md overflow-hidden shadow-lg mx-auto my-8">
        <img class="w-96 h-40" src={countries.flags.svg} alt="flag" />
        <br />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{countries.name}</div>
          <p class="text-gray-600 text-base">
            Population: {countries.population}
          </p>
          <p class="text-gray-600 text-base">Region: {countries.region}</p>
          <p class="text-gray-600 text-base">Capital: {countries.capital}</p>
          <br />
        </div>
      </div>
    </>
  );
}

export default Card;
