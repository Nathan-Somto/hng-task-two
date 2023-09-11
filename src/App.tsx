import {Routes, Route} from 'react-router-dom'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'
const queryClient = new QueryClient()

function App() {
 

  return (    
     <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<Movie/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
     </QueryClientProvider>
  )
}

export default App
