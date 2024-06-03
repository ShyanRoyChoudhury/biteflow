
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EditorPage from './views/EditorPage'
function App() {

  return (
    <div className='w-full h-full'>
      <Router>
        <Routes>
          <Route path='/' element={<EditorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
