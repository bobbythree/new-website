import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen">

      <div
        className="absolute inset-0 z-0 
                   bg-radial at-center 
                   from-sky-200 via-cyan-500 to-sky-700"
      >
      </div>

      <nav className="flex justify-between px-25 items-center h-15 absolute w-full z-11">
        <h3>LOGO</h3>
        <div className="flex gap-10">
          <Link to="/portfolio">portfolio</Link>
          <Link to="/contact">contact</Link>
        </div>
      </nav>

      <main className="relative z-10 flex grow h-screen items-center justify-center pt-15">
        <Outlet />
      </main>

    </div>
  )
}
