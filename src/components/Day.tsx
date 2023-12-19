import {  P } from "@/styled-components/texts"
import { Column, Grid, ImageContainer, Wrapper } from "@/styled-components/wrappers"
import { parseDate } from "@/utilities/date"
import {  WeatherType } from "@/utilities/type"
import Image from "next/image"

interface Props {
    weather: WeatherType
}

export default function Day({ weather}:Props){

    console.log(weather.dt_txt);
    
  
    return(
        <Column>
            <P>{parseDate(weather.dt)}</P>

            <ImageContainer>
                <Image src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={`image of the ${weather.weather[0].main}}`}
                fill
                style={{"objectFit":"contain"}}
                /> 
            </ImageContainer>
            
            <P>{weather.weather[0].description}</P> 
            <P>{weather.main.temp_min}/{weather.main.temp_max} °C</P>
        </Column>
    )
}