import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before{
    box-sizing: border-box;
}
body{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100%
    width:100%;
    color:#fff;
    padding:0;
    margin:0;
    transition:all 0.25s linear;
    background:black;
}

.canvas{
    align-items:center;
    display:grid;
    gap:0.5rem;
    grid-auto-flow-row;
    grid-template-row: auto 1rem auto;
    min-hwight:100vh;
    padding:1rem;
    width:100vw
}

.type-box{
    display:block;
    max-width: 1000px;
    height: 160px;
    overflow:hidden;
    margin-left:auto;
    margin-right:auto;
    position:relative;

    @media{

    }

}

.words{
    font-size:20px;
    display:flex;
    flex-wrap:wrap;
    align-content:center;
    width:100%;
}

.word{
    margin:5px 5px;
    padding-right:2px;
    scroll-margin:4px;
}

.hidden-input{
   opacity:0;
}

`

