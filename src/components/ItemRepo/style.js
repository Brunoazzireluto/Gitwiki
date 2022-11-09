import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3{
        font-size: 32px;
        color: #fafafa;
    }

    p {
        font-size:16px;
        color: #333;
        margin-bottom: 20px;
    }

    a.remove {
        color: #FA0000;
        margin-top: 20px;
        text-decoration: none;
    }

    hr {
        color: #333;
        margin: 20px 0;
    }
`
export const ItemHr = styled.div`
    width: 100%;
    height: 1px;
    background-color:#333 ;
    margin: 10px 0 ;
`

export const ItemText = styled.p`
    font-size:14px;
    color: #FAFAFA;
    margin-bottom: 5px;
`