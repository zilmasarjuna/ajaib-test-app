import { BrowserRouter as Router } from 'react-router-dom'

import PageRoute from './pages'

const App = () => {
  return (
    <Router>
      <PageRoute />
    </Router>
  )
}

export default App