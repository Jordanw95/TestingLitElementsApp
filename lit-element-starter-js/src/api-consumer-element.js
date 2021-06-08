 /**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

  import {LitElement, html, css} from 'lit';
  import { generalCSS } from './css-element-stylings'
 

  export class APIConsumerElement extends LitElement {

    static get styles() {
      return [
        generalCSS
      ]
    }
//  I would consider this to be my state in this app?
     static get properties() {
         return {
           jokes_list: {type: ArrayBuffer},
           url: {type :String},
           method: {type: String},
           safe: {type: Boolean},
           initial_page: {type: Boolean}
         };
       }
 
       constructor() {
         super();
         // JOKES API 
         this.safe = true
        //  Should check if safe set or not each time
         this.url = this.setURL()
         this.method = 'GET'
         this.jokes_list = [];
         this.initial_page = true;
         this.addEventListener('ApiData', (e) =>{
           e.detail.data.jokes.forEach(joke => {
             this.jokes_list.push(joke)
             this.requestUpdate()
           });
         })
       }
 
       render() {
         return html`
         <div class = ${this.initial_page ? 'initial-menu' : 'hidden-initial-menu'}>
          <div class = 'menu-box'>
          <h2 class="title">Jokes loader</h2>
          <p>Click below to load some jokes</p>
          <button class="search-button" @click="${this.getData}">Get Jokes</button>
          <label class= "my-label"><input id='safe-box' type="checkbox" checked @change="${this.safeJokes}">PG Jokes?</label>
          </div>
         </div>
        <div class = ${this.initial_page ? 'hidden-jokes-list' : 'jokes-list'}>
           ${this.dataTemplate}
           <div class="button-wrap">
              <button class = "more-button" @click="${this.getData}">Load More</button>
           </div>
        </div>
         `;
       }
       
       get dataTemplate(){
         return html`
         ${this.jokes_list.map(joke => html`
         <div class = "jokes">
           <p class = "setup">${joke.setup}</p>
           <p class = "delivery">${joke.delivery}</p>
         </div>
         `)}
         `;
       }
       
       _sendData(data){
         this.dispatchEvent(new CustomEvent('ApiData',{
             detail: {data}, bubbles: true, composed: true,
         }))
     }
    //  ORIGINAL CHAINED PROMISE API REQUEST
    //   getData(){
    //      console.log(this.url)
    //      fetch(this.setURL(), {method: this.method})
    //          .then((response)=> {
    //              if(response.ok) return response.json();
    //              return Promise.reject(response);
    //          })
    //          .then((data) => {this._sendData(data); })
    //          .catch((error) => {console.warn("Something has gone wrong.", error); })             
    //  }

    // ASYNC API REQUEST
     async getData() {
      try {
        const response = await fetch(this.setURL(), {method: this.method});
        this._sendData(await response.json());
        this.initial_page = false
      }
      catch (err) {
        console.log('fetch failed', err);
      }
    }
      setURL(){
        console.log(this.safe)
        if (this.safe){
          return 'https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart&amount=10'
        } else{
          return 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist&type=twopart&amount=10'
        }
      }

      safeJokes(){
        this.safe = this._safeBox.checked;
        this.url = this.setURL()
        this.requestUpdate();
      }

    // DOCUMENT OBJECTS
      get _safeBox() {
        return this.shadowRoot.querySelector('#safe-box');
      }
  }
 
  window.customElements.define('api-consumer-element', APIConsumerElement);