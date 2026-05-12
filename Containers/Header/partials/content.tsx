import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/main_logo-1.png";
import HeaderButtons from "./buttons";
import HeaderSearch from "./search";
import SubHeader from "./subHeader";

export default function HeaderPartials() {
  return (
    <div className="con border-b border-gray-200">
      <header className="header ">
        <div className="flex w-full justify-between items-center ">
          <Link href="/">
            <Image
              src={Logo}
              alt="Book_Uni"
              loading="eager"
              width={500}
              className="header__logo"
            />
          </Link>

          <HeaderSearch />

          <HeaderButtons />
        </div>

        <SubHeader />
      </header>
    </div>
  );
}
