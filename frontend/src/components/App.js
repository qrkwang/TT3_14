import Signup from './Signup'
import Login from './Login'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'

function App() {
  return (
    <Container className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}>
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/homepage' element={<Homepage />} />
          </Routes>
        </Router>
      </div>
    </Container >

  )
}

export default App;
