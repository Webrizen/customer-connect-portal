import Sidebar from "@/components/system/Sidebar";
import RouteGuard from "@/providers/RouteGuard";

export default function DashboardLayout({ children }) {
  return (
    <RouteGuard>
      <section className="w-full md:mt-0 mt-4">
        <div className="container grid md:grid-cols-[.3fr_1fr] gap-2">
          <div className="w-full">
            <Sidebar />
          </div>
          <div className="w-full p-5">{children}</div>
        </div>
      </section>
    </RouteGuard>
  );
}
