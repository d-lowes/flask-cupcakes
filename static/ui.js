"use strict";

const BASE_API_URL = "http://localhost:5001/api/"

const $cupcake = $("#cupcakeList");
const $newCupcakeForm = $("#addCupcake");

/** Get the cupcakes from the API */

async function getCupcakes() {
  const response = await axios.get(
    `${BASE_API_URL}cupcakes`);

  return response.data.cupcakes;
}

/** Populate the list of cupcakes */

async function cupcakesList() {
  $cupcake.empty()

  const cupcakes = await getCupcakes();

  for (let cupcake of cupcakes) {
    let $li = $("<li>").text(cupcake.flavor);

    $cupcake.append($li);
  }
}

/** Add cupcake to API and update cupcake list */

async function addNewCupcake(evt) {
  evt.preventDefault()

  const flavor = $("#flavor").val();
  const size = $("#size").val();
  const rating = $("#rating").val();
  const image_url = $("#image_url").val();

  const newCupcake = { flavor, size, rating, image_url }

  await axios.post(
    `${BASE_API_URL}cupcakes`, newCupcake);

  cupcakesList()

}

$newCupcakeForm.on("submit", addNewCupcake);

cupcakesList();