"use client";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div
      className="bg-gray-800 w-full text-center py-6 text-2xl font-bold text-white cursor-pointer"
      onClick={() => router.push("/")}
    >
      {"SEO Next Store"}
    </div>
  );
};

export default Header;
