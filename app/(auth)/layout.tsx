export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="col-center h-screen gap-6 p-6 md:p-10">
      {children}
    </section>
  );
}
