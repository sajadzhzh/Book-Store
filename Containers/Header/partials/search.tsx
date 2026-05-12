import Input from "@/Components/Form/Input";

export default function HeaderSearch(){
    return(
        <div className="header__search__container">
        <i className="bi bi-search ms-5"></i>
        <Input
          name="headerSearch"
          styles="header__search"
          placeholder="جستجو کتاب، نویسنده، موضوع..."
        />
        <div className="header__search__options">
          <p className="text">جستجو سریع</p>
          <div className="fastSearch">
            <div className="item">کتاب درسی</div>
            <div className="item">کنکور</div>
            <div className="item">رمان</div>
            <div className="item">کودک</div>
          </div>

          <p className="text">جستجو های اخیر</p>
          <a className="item">لورم ایپسوم</a>
          <a className="item">لورم ایپسوم</a>
        </div>
      </div>
    )
}