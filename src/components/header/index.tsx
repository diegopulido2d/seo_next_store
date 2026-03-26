import Link from "next/link";

const Header = () => {
  return (
    <nav className="w-full bg-gray-800">
      <Link
        className="block w-full text-center py-6 text-2xl font-bold text-white hover:bg-gray-700 transition"
        href={"/"}
        aria-label="Go back to products list"
      >
        SEO Next Store
      </Link>
    </nav>
  );
};

export default Header;
