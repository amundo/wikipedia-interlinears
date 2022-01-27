import { DOMParser, Element } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

let url = `https://en.wikipedia.org/wiki/Shilha_language#Sample_text`
url = 'https://en.wikipedia.org/wiki/Shilha_language?action=edit#Sample_text'

fetch(url)
  .then(r => r.text())
  .then(html => new DOMParser().parseFromString(html, 'text/html'))
  .then(doc => parse(doc))
  .then(wtf => console.log(wtf))


let parse = doc => {
  let source = {
    freeTranslations: doc.querySelector('.mw-parser-output > p:nth-child(391)'),
    transcriptions: doc.querySelector('.mw-parser-output > p:nth-child(393)'),
    glosses: doc.querySelector('.mw-parser-output > p:nth-child(395)'),
    apparatus: doc.querySelector('.mw-parser-output > p:nth-child(397)')
  }

  return source
}

let metadata = {
  // title: sentences[0].translation,
  citation: "Podeur, J. (1995). Textes berbères des Aït Souab, Anti-Atlas, Maroc. Edités et annotés par N. van den Boogert, M. Scheltus, H. Stroomer. Aix-en-Provence: Edisud. ISBN 2-85744-826-0.",
  language: "Shilha",
  notes: ["Language also known as Tashelhiyt, Tashelhit"],
  source: "Wikipedia",
  //url: document.location.href
}


// let transpose = matrix => matrix[0]
//   .map((column, i) =>
//     matrix.map(row => row[i])
//   )
