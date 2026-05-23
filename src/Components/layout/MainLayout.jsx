function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-xl md:text-3xl font-bold">
            Loan Application System
          </h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;