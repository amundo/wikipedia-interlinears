
export let spiderWikitext = async articleTitle => {
  let url = `https://en.wikipedia.org/w/index.php?title=${articleTitle}&action=raw`
  let response = await fetch(url)
  let wikitext = await response.text()

  return wikitext
}



// console.log(await spiderWikitext('Abkhaz language'))