import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        
      </Route>
    </Routes>
  )
}

export default App