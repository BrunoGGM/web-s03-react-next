import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/navbar"; // ajusta la ruta si tu scaffold es distinto

export default function AppLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}
