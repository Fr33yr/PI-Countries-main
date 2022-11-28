import Layout from './components/layout/Layout'
import { Routes, Route } from 'react-router-dom'
import { Home, Detail, Activity } from './pages/index'

function App() {

  return (
    <Layout>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:id' element={<Detail />} />
          <Route path='/activity' element={<Activity />} />
        </Routes>
      </main>
    </Layout>
  )
}

export default App
