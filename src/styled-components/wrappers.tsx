import styled from "styled-components";

export const Wrapper = styled.div<{ $dayTime: 'night'|'day'; }>`
    display: flex;
    align-items:center;
    justify-content:center;

    max-width:80vw;
    margin:auto;

    padding: 20px 40px;
    border-radius: 8px;
    background:${props => `var(--${props.$dayTime}-background)`};

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px 10px;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: min(50px,15vw) auto;
    align-items: center;
`

export const FourColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:10px;
    justify-content: center;
    text-align: center;

    margin-block:30px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
    width:100%;

    border-left: 1px solid rgba(var(--foreground-rgb),0.2);
    &:first-of-type{
        border:none;
    }

    @media (max-width: 768px) {
        border-left: none;
        border-top: 1px solid rgba(var(--foreground-rgb),0.2);
        padding-block:10px;

        &:first-of-type{
            border:none
            padding-top:0px;
        }

        &:last-of-type{
            padding-bottom:0px;
        }
    }
`

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    max-width:250px;
    aspect-ratio:1/1;
    margin:auto;
    filter: drop-shadow(5px 5px 10px rgba(var(--foreground-rgb),0.3));
`