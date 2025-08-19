export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center max-w-5xl xl:max-w-6xl w-full py-16 gap-10">
        <div className="flex flex-col w-full px-4 py-2">
          <span className="flex w-full border-b-1">
            <span className="text-3xl font-bold uppercase py-3 border-b-2 border-white">
              Work
            </span>
          </span>
        </div>
        {children}
      </div>
    </main>
  );
}
