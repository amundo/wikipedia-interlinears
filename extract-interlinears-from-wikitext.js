export let extractInterlinears = mediawiki => mediawiki
      .replaceAll(`{{interlinear`, `\n{{interlinear`, )
      .replaceAll(/\{\{gcl\|([^\|]+)\|(.*)\}\}/g, `$1`) // custom gloss label
      // see https://en.wikipedia.org/wiki/Template:Interlinear#Glossing_abbreviations
      .split`\n\n`
      .filter(x => x.includes('{{interlinear'))
      .filter(x => !x.includes('→')) // these are often morphological examples  
      .join('\n\n')
      // .map(chunk => chunk.trim())
      .replaceAll('<u>', '')
      .replaceAll('</u>', '')
      .replaceAll('<sub>', '')
      .replaceAll('</sub>', '')
      .replaceAll(/\|top=/g, '\n')
      .replaceAll(`<nowiki>`,'')
      .replaceAll(`</nowiki>`,'')
      .split`\n`
      .map(line => line.trim())
      .filter(l => !l.includes('interlinear'))
      .join('\n')
      .replaceAll('|','')
      .replaceAll(`'''`,'')
      .replaceAll('{','')
      .replaceAll('}','')
      .replaceAll(/<ref.*/g, '')          
