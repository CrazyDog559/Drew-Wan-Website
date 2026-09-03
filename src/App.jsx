import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Hobbies from './pages/Hobbies';
import HobbyDetail from './pages/HobbyDetail';
import Fiji from './pages/Fiji';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          {/* Static segment wins over the dynamic one, so Fiji keeps its own
              bespoke in-progress page while still living under /projects. */}
          <Route path="projects/fiji" element={<Fiji />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="hobbies/:slug" element={<HobbyDetail />} />
          <Route path="about" element={<Navigate to="/#about" replace />} />
          <Route path="fiji" element={<Navigate to="/projects/fiji" replace />} />
          <Route path="photography" element={<Navigate to="/hobbies/photography" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
