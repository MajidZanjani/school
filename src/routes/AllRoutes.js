import { Routes, Route } from "react-router-dom"
import { Home, Blog, Contact, About, PageNotFound, DashboardPage } from '../pages';
import { ProtectedRoutes } from './ProtectedRoutes';

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />

        <Route path="dashboard" element={< ProtectedRoutes ><DashboardPage /></ProtectedRoutes>} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
