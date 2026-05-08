import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/main_logo-1.png";
import Input from "@/Components/Form/Input";

export default function HeaderPartials() {
  return (
    <header className="header">
      <Link href="/" className="w-max">
        <Image
          src={Logo}
          alt="Book_Uni"
          loading="eager"
          width={500}
          className="header__logo"
        />
      </Link>

      <div className="header__search__container">
        <i className="bi bi-search"></i>
        <Input
          name="headerSearch"
          styles="header__search"
          placeholder="جستجو کتاب، نویسنده، موضوع..."
        />
      </div>

      <div></div>
    </header>
  );
}
