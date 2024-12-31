export default function Footer() {
  return (
    <footer className="bg-primary p-4 text-center text-accent">
      &copy; {new Date().getFullYear()} CSV Viewer | Powered by <a href="https://webvives.com" target="_blank" className="font-bold">WebVives</a>
    </footer>
  );
}