import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex gap-4 py-3 text-lg">
      <div className="flex flex-grow justify-end">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          דף הבית
        </Link>
      </div>
      <div className="flex">my logo</div>
      <div className="flex flex-grow justify-start">3</div>
    </nav>
  );
};

export default Header;
