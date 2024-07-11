import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";

function AdminLayout() {
  return (
    <>
      <HeaderAdmin/>
      <main className='container mt-4 bg-dark'>
        <Outlet/>
      </main>
    </>
  );
}

export default AdminLayout;
