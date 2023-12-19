import Weathers from '@/components/Weathers';
import { getWeather } from '@/fetches/api';

export default async function Home() {
  const {cityInformations, weatherInformations} = await getWeather("New York")
  
  return (
    <main>
      <Weathers city={cityInformations[0]} weathers={weatherInformations?.list}/>
    </main>
  )
}
