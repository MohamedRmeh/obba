"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Menu from "./Menu";

const Navbar = () => {
  const router = usePathname();

  const isActive = (path) => router === path;

  const navItems = [
    { path: "/", label: "اضافة قصة" },
    { path: "/api/advertisements", label: "اعلانات هامة" },
    { path: "/api/comments", label: "الملاحظات" },
    { path: "/api/duties", label: "الوظائف" },
    { path: "/api/notifications", label: "الاشعارات" },
    { path: "/api/chat", label: "المراسلات" },
  ];

  return (
    <nav className="p-5">
      <div className="flex justify-between select-none items-center font-semibold text-[#c20000]">
        <Link className="" href="/">
          <Image
            src="/icons/wi6wvdqk.png"
            width={240}
            height={240}
            className="w-[130px] sm:w-[240px]"
          />
        </Link>
        <Menu/>
        <ul className="md:flex gap-1 items-center hidden">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`${
                isActive(item.path) ? "bg-slate-100" : ""
              } hover:bg-slate-100 px-3 py-2 rounded-md transition-all`}
            >
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
