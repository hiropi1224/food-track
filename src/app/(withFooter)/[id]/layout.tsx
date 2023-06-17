export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <footer>footer</footer>
    </main>
  );
}
