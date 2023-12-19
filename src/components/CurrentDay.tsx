"use client"

import { H1, H2, P } from "@/styled-components/texts"
import { Column, Grid, ImageContainer, Wrapper } from "@/styled-components/wrappers"
import { parseDate } from "@/utilities/date"
import { CityType, WeatherType } from "@/utilities/type"
import Image from "next/image"

interface Props {
    city: CityType
    weather: WeatherType
}

export default function CurrentDay({city, weather}:Props){
  
    return(
        <Wrapper $dayTime={weather.sys.pod === "d" ? "day" :"night"}>
            <Column>
            <H1>{city?.name}</H1>
            <H2>{city?.state}, {city?.country}</H2>
            <P>{parseDate(weather.dt)}</P>

            <hr/>
            
            <P className="big">{weather.main.temp} °C</P>
            <P>{weather.main.temp_min}/{weather.main.temp_max} °C</P>
            
            <Grid>
              <ImageContainer>
                  <Image src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={`image of the ${weather.weather[0].main}}`}
                  fill
                  style={{"objectFit":"contain"}}
                  /> 
                </ImageContainer>
                <P>
                {weather.weather[0].description}
                </P> 
            </Grid>

            <hr/>
            
            <P>Wind: {weather.wind.speed} km/h</P>
            <P>Humidity: {weather.main.humidity} %</P> 
            </Column>

              <ImageContainer>
                <Image
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={`image of the ${weather.weather[0].main}}`}
                fill
                style={{"objectFit":"contain"}}
                />
              </ImageContainer>
        </Wrapper>
    )
}