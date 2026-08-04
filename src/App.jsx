import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Hobbies from './pages/Hobbies';
import HobbyDetail from './pages/HobbyDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="hobbies/:slug" element={<HobbyDetail />} />
          <Route path="about" element={<Navigate to="/#about" replace />} />
          <Route path="photography" element={<Navigate to="/hobbies/photography" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
