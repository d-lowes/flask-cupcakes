"use strict";

const BASE_API_URL = "http://localhost:5001/api/"

const $cupcake = $("#cupcakeList");

/** Get the cupcakes from the API */

async function getCupcakes() {
  const response = await axios.get(
    `${BASE_API_URL}cupcakes`);

  return response.data.cupcakes;
}

/** Populate the list of cupcakes */

async function cupcakesList() {
  const cupcakes = await getCupcakes();

  for (let cupcake of cupcakes) {
    let $li = $("<li>").text(cupcake.flavor);

    $cupcake.append($li);
  }
}

cupcakesList();