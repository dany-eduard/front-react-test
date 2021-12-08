import './SearchResults.css'
import Car from 'interfaces/car.interface'
import { carSearch } from 'services/carSearch'
import { useAppSelector } from 'hooks'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardCar from 'components/CardCar'

const SearchResults = () => {
  const token = useAppSelector((state) => state.AuthReducer.token)
  const { originCityCode, destinationCityCode, pickUpDate, dropOffDate } = useParams()
  const [carsData, setCarsData] = useState<Car[]>([])

  useEffect(() => {
    ;(async () => {
      const res = await carSearch(token, originCityCode, destinationCityCode, pickUpDate, dropOffDate)
      setCarsData(res)
    })()
    return () => {}
  }, [])

  return (
    <div className="container">
      <h1 className="title">Hola Daniel Eduardo,</h1>
      <p className="sub_title">Ahorra hasta un 30% agregando un auto en tu viaje a Chicago.</p>

      <div className="cards_grid">
        {carsData.map((car) => (
          <div key={`${car.model}-${Math.floor(Math.random() * 99999) + 1}`}>
            <CardCar
              carBaggage={car.carBaggage}
              category={car.category}
              companyImageUrl={car.companyImageUrl}
              companyName={car.companyName}
              dailyRate={car.dailyRate}
              dailyRateCurrency={car.dailyRateCurrency}
              doors={car.doors}
              imageUrl={car.imageUrl}
              model={car.model}
              passengers={car.passengers}
              totalRate={car.totalRate}
              totalRateCurrency={car.totalRateCurrency}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResults
