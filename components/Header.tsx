import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex gap-8 py-12 text-lg bg-[#F4F4F5]">
      <div className="container">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          <span className="text-5xl font-bold">מתכוני הבית</span>
          <div className="text-[#6e6e77]">לגלות את טעמי הבית מחדש</div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
