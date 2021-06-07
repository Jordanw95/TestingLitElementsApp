import {LitElement} from 'lit-element' ;

export class GetData extends LitElement {

    static get properties() {
        return {
            url: {type :String},
            method: {type: String},
            testing: {type:String}
        }
    } 
// We cannot use constructor ina child element because the life cycle is such that this nitialises before data is passed through from parent
// Instead we use first updated

    firstUpdated(){
        this.getData()
        this.testing = "Updated value in first updated";
        console.log(this.testing);
    }

    _sendData(data){
        this.dispatchEvent(new CustomEvent('ApiData',{
            detail: {data}, bubbles: true, composed: true,
        }))
    }

    getData(){
        console.log(this.url)
        fetch(this.url, {method: this.method})
            .then((response)=> {
                if(response.ok) return response.json();
                return Promise.reject(response);
            })
            .then((data) => {this._sendData(data); })
            .catch((error) => {console.warn("Something has gone wrong.", error); })
    }
}

customElements.define('get-data', GetData)