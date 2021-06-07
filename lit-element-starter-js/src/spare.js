/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import './components/get-data';

 /**
  * An example element.
  *
  * @slot - This element has a slot
  * @csspart button - The button
  */
 export class APIConsumerElement extends LitElement {

    static get properties() {
        return {
// Sometimes api returns single line joke sometimes it returns setup and delivery 
// To begin with will only show set up and delivery jokes
          jokes_list: {type:ArrayBuffer}
        };
      }

      constructor() {
        super();
        this.jokes_list = [];
        this.test_list= ['this', 'that']
        this.addEventListener('ApiData', (e) =>{
          e.detail.data.jokes.forEach(joke => {
            this.jokes_list.push(joke)
            this.requestUpdate()
          });
        })
      }

      render() {
        return html`
          <h1>Hello, ${this.name}!</h1>
          <get-data url='https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist&type=twopart&amount=10' method = 'GET'></get-data>
          <button @click="${this._printState}">PRINT STATE</button>
          ${this.dataTemplate}
        `;
      }
      
      get dataTemplate(){
        return html`
        <p>THIS  IS FROM THE OTHER FUNCTION</p>
        ${this.jokes_list.map(joke => html`
        <div>
          <p>${joke.setup}</p>
          <p>${joke.delivery}</p>
        </div>
        `)}
        `;
      }

      _printState(){
        console.log(this.jokes_list)
        this.jokes_list.forEach(joke => {
          console.log(joke['setup'])
          console.log(joke['delivery'])
        });
      }

 }

 window.customElements.define('api-consumer-element', APIConsumerElement);


