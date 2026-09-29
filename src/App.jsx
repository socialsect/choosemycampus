import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Colleges from './pages/Colleges';
import CollegeDetail from './pages/CollegeDetail';
import CollegeCategory from './pages/CollegeCategory';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import GetPG from './pages/GetPG';
import PGDetail from './pages/PGDetail';
import Mentorship from './pages/Mentorship';
import Contact from './pages/Contact';
import EditorialPolicy from './pages/EditorialPolicy';
import DataMethodology from './pages/DataMethodology';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/colleges/:id" element={<CollegeDetail />} />
        <Route path="/colleges-in/:slug" element={<CollegeCategory />} />
        <Route path="/courses/:courseSlug/colleges" element={<CollegeCategory />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/get-pg" element={<GetPG />} />
        <Route path="/get-pg/:id" element={<PGDetail />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/editorial-policy" element={<EditorialPolicy />} />
        <Route path="/college-data-methodology" element={<DataMethodology />} />
      </Routes>
    </Layout>
  );
}
