import Car from 'interfaces/car.interface'
import { formatDate } from 'utils/utils'

const ApiAuthUrl = process.env.REACT_APP_API_URL

export const carSearch = async (
  token: string,
  originCityCode = '',
  destinationCityCode = '',
  pickUpDate = '',
  dropOffDate = ''
): Promise<Car[]> => {
  const data = {
    PickUpLocation: {
      cityCode: originCityCode.toUpperCase(),
      continentCode: 0,
      countryCode: 'US',
      region: 'unitedStates',
      id: 'cd10124d-9c05-499d-ba4f-973937542744',
      name: 'Miami Intl',
      provider: '',
      latitude: 25.793,
      longitude: -80.291,
    },
    DropOffLocation: {
      cityCode: destinationCityCode.toUpperCase(),
      continentCode: 0,
      countryCode: 'US',
      region: 'unitedStates',
      id: 'cd10124d-9c05-499d-ba4f-973937542744',
      name: 'Miami Intl',
      provider: '',
      latitude: 25.793,
      longitude: -80.291,
    },
    PickUpDate: formatDate(pickUpDate),
    PickUpTime: '0930',
    DropOffDate: formatDate(dropOffDate),
    DropOffTime: '0930',
    RateTypeCode: 0,
    CarCategoryType: 0,
    PaymentType: 0,
    corporateDiscount: '0',
    AgencyUrl: 'test.destinojet.co',
  }

  const response = await fetch(`${ApiAuthUrl}/cars/search`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return response.json()
}
