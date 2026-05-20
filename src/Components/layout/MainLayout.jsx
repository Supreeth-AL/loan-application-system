function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">
          Loan Application System
        </h1>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;