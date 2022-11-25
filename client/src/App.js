// dependencies
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
// components
import Layout from './components/layout/Layout'
import { Home, Detail, Activity } from './pages/index'
import './globals.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <main>
            <Route>
              <Home exact path={'/'} />
            </Route>
            <Route>
              <Detail path={'/country/:id'} />
            </Route>
            <Route>
              <Activity path='/activity' />
            </Route>
          </main>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
