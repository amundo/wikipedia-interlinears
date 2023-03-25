import {extractInterlinears} from './extract-interlinears-from-wikitext.js'

export class ExtractInterlinear extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
      <textarea class=mediawiki placeholder="Paste wikitext from article containing interlinear templates here"></textarea>
      <textarea class=plaintext placeholder="Extracted interlinear plaintext will appear here (YMMV)"></textarea>
    `
    this.listen()
  }

  connectedCallback(){

  }

  set data(plaintext){
    this.plaintext = plaintext
  }

  get data(){
    return this.plaintext
  }

  static get observedAttributes(){
    return []
  }

  attributeChangedCallback(attribute, oldValue, newValue){

  }

  
  parse(input){
    return extractInterlinears(input)
  }

  convert(){
    let [input,output] = Array.from(this.querySelectorAll('textarea'))
    let simple = this.parse(input.value)
    output.value = simple
  }

  render(){

  }

  listen(){
    this.addEventListener('input', inputEvent => {
      if(inputEvent.target.matches(".mediawiki")){
        this.convert()
      }
    })
  }
}

customElements.define('extract-interlinear', ExtractInterlinear)