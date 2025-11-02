import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <nav className="z-10 flex justify-between px-25 items-center h-15 absolute w-full text-amber-200/75">
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
