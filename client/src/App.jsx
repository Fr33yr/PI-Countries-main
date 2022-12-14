import Layout from './components/layout/Layout'
import { Routes, Route } from 'react-router-dom'
import { Home, Detail, AddActivity, Countries } from './pages/index'

function App() {

  return (
    <Layout>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:id' element={<Detail />} />
          <Route path='/countries' element={<Countries />} />
          <Route path='/activity' element={<AddActivity />} />
        </Routes>
      </main>
    </Layout>
  )
}

export default App
