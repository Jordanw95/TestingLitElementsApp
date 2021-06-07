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
    }
    .hidden-jokes-list{
        display: none;
    }
    .jokes-list{
        justify-content: center;
        text-align:center;
        padding:15px;
    }
    .jokes{
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
    .my-button{
        background-color: gray;
        color:white;
        border: solid black 3px;
        font-size:0.9em;
        border-radius:1.0em;
    }
    .my-label{
        font-size:0.8em;
    }
  }`;