/* eslint-env browser */
/* eslint-disable semi */

import { API } from "../../node_modules/oba-wrapper/js/index.js";

async function init() {
  const oba = new API({
    key: "1e19898c87464e239192c8bfe422f280"
  });
  const stream = await oba.createStream("search/banaan");
  stream.pipe(toJSON);
}

function toJSON(stream) {
  console.log(stream);
}
init();



// wat er moet gebeuren:
// routing
// - zodra er '/[genre]' wordt aangeroepen, laad dan template van genreDetailpagina (bestaande uit omslagfoto-titel-auteur-beschrijving waarbij er door de data heen wordt gelooped en er max 25 boeken worden weergegeven?)
// --> array met de soorten genres? if in array, dan laden genreDetailpagina?
// --> else, render error (beetje lelijk aangezien je meestal meer soorten pagina's hebt dan alleen de lijst met boeken binnen een genre)
//
//  api/localstorage
// if data in localstorage, laad dan die data in het template
// else roep api aan en vraag data op waarbij je filtert op book - dutch - ageYouth (0-12 jaar)- [genre of topic dat aangeklikt is]
// link door op render
//
// rendering
// render overview van genreDetailpagina --> vult template in
