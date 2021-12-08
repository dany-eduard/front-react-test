/* eslint-disable react/destructuring-assignment */
import './CardCar.css'
import Car from 'interfaces/car.interface'

const CardCar = (car: Car) => {
  const {
    carBaggage,
    category,
    companyImageUrl,
    companyName,
    dailyRate,
    dailyRateCurrency,
    doors,
    imageUrl,
    model,
    passengers,
    totalRate,
    totalRateCurrency,
  } = car

  return (
    <div className="card-bg">
      <div className="card">
        <div className="card_header">
          <div className="card_header_img">
            <img src={imageUrl} alt={`imagen-${model}`} />
          </div>
          <div className="rectangle_percent">
            <span className="text_rectangle">-30%</span>
          </div>
        </div>

        <div className="card_body">
          <main>
            <div>
              <img className="company_logo" src={companyImageUrl} alt={companyName} />
            </div>
            <h3 className="category">{category}</h3>
            <h2 className="model">{model}</h2>
            <div className="constainer_icons_idicators">
              <div className="item_icon_indicator">
                <span className="material-icons">people_outline</span>
                <span className="text_icon_indicator">{passengers}</span>
              </div>
              <div className="item_icon_indicator">
                <span className="material-icons">meeting_room</span>{' '}
                <span className="text_icon_indicator">{doors}</span>
              </div>
              <div className="item_icon_indicator">
                <span className="material-icons">luggage</span>{' '}
                <span className="text_icon_indicator">{carBaggage.length}</span>
              </div>
            </div>
            <div className="rectangle_car_icon">
              <span className="material-icons">directions_car</span>
            </div>
          </main>
          <div className="container_costs">
            <span className="cost_service">
              {dailyRateCurrency} {dailyRate}
            </span>
            <span className="day_text">/dia</span>
            <div className="cost_day_service">
              {totalRateCurrency} {totalRate} {`/ ${Math.ceil(totalRate / dailyRate)} días`}
            </div>
          </div>
        </div>
        <div className="card_footer">
          <button className="boton_reserva" type="button">
            Reservar
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardCar
