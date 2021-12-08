import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks'
import { getAuthToken } from 'services/auth'
import { setAuth } from 'store/slice/auth'
import SearchResults from 'pages/SearchResults'

const App = () => {
  const dispatch = useAppDispatch()
  const { isAuthenticated } = useAppSelector((state) => state.AuthReducer)

  useEffect(() => {
    ;(async () => {
      if (!isAuthenticated) {
        const token = await getAuthToken()
        const auth = { isAuthenticated: true, token }
        dispatch(setAuth(auth))
      }
    })()
    return () => {}
  }, [isAuthenticated])

  if (!isAuthenticated) return null

  return (
    <BrowserRouter>
      <Suspense fallback={<h1>cargando...</h1>}>
        <Routes>
          <Route path="*" element={<p>No Found</p>} />
          <Route path="/" element={<p>Bienvenido</p>} />
          <Route
            path="/challenge/:originCityCode/:destinationCityCode/:pickUpDate/:dropOffDate"
            element={<SearchResults />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
export default App
