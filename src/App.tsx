import {Routes, Route} from 'react-router-dom'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home'
import Movie from './pages/Movie'

const queryClient = new QueryClient()

function App() {
 

  return (    
     <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies/:id' element={<Movie/>}/>
      </Routes>
     </QueryClientProvider>
  )
}

export default App
