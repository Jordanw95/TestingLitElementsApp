import { css } from 'lit-element';

export const generalCSS = css`
    .initial-menu {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        text-align:center;
    }
    .hidden-initial-menu{
        display: none;
    }
    .menu-box{
        border: solid black 2px;
        padding: 15px;
        border-radius: 10px;
    }
    .title{
        display:flex;
        justify-content:center;
        width:16em;
        font-size:2.0em;
    }
    .hidden-jokes-list{
        display: none;
    }
    .jokes-list{
    }
    .jokes{
        width: 32em;
        justify-items:center;
        text-align:center;
        margin-left: auto;
        margin-right: auto;
        padding: 15px;
        border-top: gray solid 4px;
        font-size:1.3em;
    }
    .delivery{
        display: flex;
        justify-content: center;
        text-align:center;
        font-style: italic;
    }
    .setup{
        display: flex;
        justify-content: center;
        text-align:center;
    }
    .search-button{
        background-color: gray;
        color:white;
        border: solid black 3px;
        font-size:1.5em;
        border-radius:1.0em;
        padding:10px;
    } 
    .button-wrap{
        text-align:center;
    }
    .more-button{
        background-color: gray;
        color:white;
        border: solid black 3px;
        border-radius:1.0em;
        padding:10px;
    }
    .my-label{
        font-size:1.2em;
    }
  }`;