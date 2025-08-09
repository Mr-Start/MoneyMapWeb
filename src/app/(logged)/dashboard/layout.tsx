import MainHeader from "@/components/dashboard/mainHeader/mainHeader";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col w-full h-full px-36 py-10">
      <MainHeader />
      {children}
    </main>
  );
}
