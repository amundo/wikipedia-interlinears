import articles from "./articles-with-interlinears.json" assert { type: "json" }
import {spiderWikitext} from './spider-wikitext.js'
import {extractInterlinears} from './extract-interlinears-from-wikitext.js'

for await (let {title,url} of articles.slice(0,3)){
  let wikitext = await spiderWikitext(title)
  let interlinears = extractInterlinears(wikitext)


}