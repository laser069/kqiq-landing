export default function Footer() {
  return (
    <footer className="mt-auto border-t px-6 py-4 text-sm text-muted-foreground">
      © {new Date().getFullYear()} Kwiq Billing
    </footer>
  );
}
