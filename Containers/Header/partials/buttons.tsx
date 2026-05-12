import Button from "@/Components/Button/Button";
import DropDownItem from "@/Components/DropDown/DropDownItem";
import Link from "next/link";

export default function HeaderButtons() {
  return (
    <div className="header__btn__container">
      <Button styles="btn btn__red hidden md:flex">
        <i className="bi bi-heart text-xl font-bold mt-2"></i>
        <div className="badge badge__red">1</div>
      </Button>

      <Button styles="btn btn__orange hidden md:flex">
        <i className="bi bi-bell text-xl font-bold mt-2"></i>
        <div className="badge badge__orange">2</div>
      </Button>

      <Button styles="btn btn__gray flex">
        <i className="bi bi-search text-xl font-bold mt-2"></i>
      </Button>

      <Button styles="btn btn__green flex">
        <i className="bi bi-bag text-xl font-bold mt-2"></i>

        <div className="badge badge__green">3</div>

        <div className="dropDown min-w-2xs md:min-w-md -left-10">
          <div className="dropDown__header">
            <div className="flex items-center gap-2">
              <i className="bi bi-bag"></i>
              <p>سبد خرید</p>
            </div>

            <div className="dropDown__badge">3 محصول</div>
          </div>

          <div className="dropDown__list">
            <DropDownItem />
          </div>
        </div>
      </Button>

      <Button styles="btn btn__dark__green flex">
        <i className="bi bi-list text-xl font-bold mt-2"></i>
      </Button>
      
      <Link href="/login" className="header__btn__login">
        <i className="bi bi-box-arrow-in-right text-2xl mt-2"></i>
        ورود / ثبت نام
      </Link>
    </div>
  );
}
