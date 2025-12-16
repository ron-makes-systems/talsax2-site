export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-white/5 text-center text-gray-500 font-satoshi text-sm">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Tal Saxophone. All rights reserved.</p>
      </div>
    </footer>
  );
}


