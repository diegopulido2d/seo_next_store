import Link from "next/link";

const Header = () => {
  return (
    <Link
      className="bg-gray-800 w-full text-center py-6 text-2xl font-bold text-white cursor-pointer"
      href={"/"}
      aria-label={`Icon back to products list`}
    >
      {"SEO Next Store"}
    </Link>
  );
};

export default Header;
