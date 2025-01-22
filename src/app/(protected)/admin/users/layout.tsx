import HeaderAdminUser from "@/components/element/header-admin-user";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderAdminUser/>
      {children}
    </div>
  ); 
}