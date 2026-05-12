import Button from "@/Components/Button/Button";
import HeaderDDItem from "@/Components/DropDown/HeaderDDItem";
import Link from "next/link";

export default function SubHeader() {
  return (
    <div className="hidden md:flex w-full justify-start items-center py-3 mt-4 gap-8 ">
      <Button styles="btn btn__header ">
        <i className="bi bi-list text-2xl"></i>
        دسته بندی کالاها
        <i className="bi bi-chevron-down font-extrabold"></i>

        <div className="dropDown md:min-w-2xl right-0">
          <div className="dropDown__header">
            <div className="flex items-center gap-2">
              <i className="bi bi-grid text-xl"></i>
              <p>دسته بندی محصولات</p>
            </div>

            <Link href="#" className="dropDown__badge flex gap-2">
              همه محصولات
              <i className="bi bi-arrow-left ms-2"></i>
            </Link>
          </div>

          <div className="dropDown__list flex gap-2 min-w-full flex-wrap">
            <HeaderDDItem PColor={"green"}/>
            <HeaderDDItem PColor={"orange"}/>
            <HeaderDDItem PColor={"red"}/>
          </div>
        </div>
      </Button>

      <div className="border-s border-gray-200 py-3"></div>

      <a className="btn btn__header flex flex-col">
        صفحه اصلی
        <div className="border-b-2 border-green-300 w-0"></div>
      </a>
      <a className="btn btn__header flex flex-col active">
        فروشگاه
        <div className="border-b-2 border-green-300 w-0"></div>
      </a>
      <a className="btn btn__header flex flex-col">
        وبلاگ
        <div className="border-b-2 border-green-300 w-0"></div>
      </a>
      <a className="btn btn__header flex flex-col">
        درباره ما
        <div className="border-b-2 border-green-300 w-0"></div>
      </a>
      <a className="btn btn__header flex flex-col">
        تماس با ما
        <div className="border-b-2 border-green-300 w-0"></div>
      </a>

      <a
        className="btn btn__header flex ms-auto text-sm"
        href="tel:02112345678"
      >
        <i className="bi bi-telephone bg-gray-100 px-3 py-2 rounded-full"></i>
        <div className="mt-2">
          <p className="text-gray-300">پشتیبانی</p>
          <p>021-12345678</p>
        </div>
      </a>
    </div>
  );
}
