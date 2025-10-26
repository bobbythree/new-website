import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <nav className="flex justify-between px-25 items-center h-15 absolute w-full">
        <h3>LOGO</h3>
        <div className="flex gap-10">
          <Link to="/portfolio">portfolio</Link>
          <Link to="/contact">contact</Link>
        </div>
      </nav>

      <main className="w-full">
        <Outlet />
      </main>
    </>
  )
}
