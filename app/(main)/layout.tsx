export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {children}
      {/* Footer Global */}
      <footer className="p-6 text-center text-gray-600 text-sm border-t border-gray-800 mt-10">
        &copy; 2025 DramaChina Project.
      </footer>
    </div>
  );
}
