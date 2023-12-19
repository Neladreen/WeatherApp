import styled from "styled-components"

export const H1 = styled.h1`
    font-size:clamp(2.5vw,2.5rem,12vw);
`

export const H2 = styled.h2`
    font-size:clamp(1.5vw,1.5rem,7vw);;
`

export const P = styled.p`
        font-size: clamp(1vw,1rem,5vw);

        &.big{
            font-size: clamp(2vw,2rem,10vw);
    }
`
