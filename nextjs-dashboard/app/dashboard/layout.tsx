import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64">
        <SideNav />
      </div>

      {/* Contenido */}
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}