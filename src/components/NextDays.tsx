"use client"

import { FourColumns, } from "@/styled-components/wrappers"
import { WeatherType } from "@/utilities/type"
import Day from "./Day"

interface Props {
    weathers: WeatherType[]
}

export default function NextDays({ weathers}:Props){



    return(
        <FourColumns>
            {weathers.map(weather => <Day weather={weather} key={weather?.dt} />)}
        </FourColumns>
    )
}