import Image from "next/image";
import bookImg from "@/public/book.webp";

export default function DropDownItem() {
  return (
    <div className="item">
      <Image
        src={bookImg}
        alt="Book_img"
        width={100}
        loading="eager"
        className="img"
      />

      <div className="info">
        <p className="text-black text-start">كتاب لورم ايپسوم</p>
        <div className="flex justify-between items-center pe-1">
          <p>4,500,000 تومان</p>
          <div className="text-xl bg-white rounded-2xl">
            <a className="py-1 px-3 cursor-pointer">+</a>1
            <a className="py-1 px-3 cursor-pointer">-</a>
          </div>
        </div>
      </div>

      <a className="cursor-pointer text-lg text-gray-500 pt-4 hover:text-green-500">
        <i className="bi bi-trash"></i>
      </a>
    </div>
  );
}
