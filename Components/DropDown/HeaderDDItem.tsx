import Link from "next/link";

export default function HeaderDDItem({ PColor }: { PColor: string }) {
  return (
    <div className={`header__DD__item ${PColor}`}>
      <div className="flex items-center gap-2 mb-3">
        <i
          className={`bi bi-person bg-white py-1 px-2 rounded-xl text-xl text-${PColor}-500`}
        ></i>
        <div className="header__DD__item__header">لورم ایپسوم</div>
      </div>

      <div className="flex flex-col items-start">
        <div className="flex items-center">
          <i className="bi bi-dot text-2xl text-gray-100 me-2"></i>
          <Link href="" className="header__DD__item__text">
            لورم ایپسوم
          </Link>
        </div>
        <div className="flex items-center">
          <i className="bi bi-dot text-2xl text-gray-100 me-2"></i>
          <Link href="" className="header__DD__item__text">
            لورم ایپسوم
          </Link>
        </div>
        <div className="flex items-center">
          <i className="bi bi-dot text-2xl text-gray-100 me-2"></i>
          <Link href="" className="header__DD__item__text">
            لورم ایپسوم
          </Link>
        </div>
      </div>
    </div>
  );
}
