import { useState, useEffect } from 'react'
import { HomePage, LoginPage } from './pages'

//React Router
import { useNavigate } from 'react-router-dom';
import RootRouter from './routers/RootRouter'


function App() {  
  return <RootRouter />
}

export default App
