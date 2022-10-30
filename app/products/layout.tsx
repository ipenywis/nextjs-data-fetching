export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-8 w-full flex flex-col items-center">
      <h1 className="text-5xl font-bold">Store Products</h1>
      {children}
    </div>
  );
}
