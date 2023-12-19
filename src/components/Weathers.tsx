"use client"

import { CityType, WeatherType } from "@/utilities/type"
import NextDays from "./NextDays"
import CurrentDay from "./CurrentDay"
import styled from "styled-components"

export const Wrapper = styled.div`
    max-width:80vw;
    margin-inline:auto;
    margin-top:50px;
    
    border-radius: 8px;
    background:inherit;
`

interface Props {
    city: CityType
    weathers: WeatherType[]
}

export default function Weathers({city, weathers}:Props){
  
    return(
        <Wrapper>
            <CurrentDay
             city={city} weather={weathers[0]}/>

            <NextDays 
            weathers={weathers
            // to keep only one weather by day 
            // there is weather informations every 3 hour, so to keep only one we do modulo 8 (8*3=24)
            //
            // discard first index to remove current weather
            .filter((weather:WeatherType, index:number) => index !== 0 && index% 8 ===0)
            }
            />
        </Wrapper>
    )
}