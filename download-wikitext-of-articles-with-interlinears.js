import articles from "./articles-with-interlinears.json" assert { type: "json" }
import {spiderWikitext} from './spider-wikitext.js'
import {extractInterlinears} from './extract-interlinears-from-wikitext.js'

for await (let {title,url} of articles.slice(134)){
  let wikitext = await spiderWikitext(title)
  let interlinears = extractInterlinears(wikitext)


  Deno.writeTextFileSync(`./samples/${title.replaceAll(' ', '_')}.txt`, interlinears)
}