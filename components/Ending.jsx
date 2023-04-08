import { BsFillTelephoneFill, BsChatSquareTextFill } from 'react-icons/bs'



const Ending = () => {
  return (
    <>
      <section className="py-4 mb-5">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-12">
              <p className="h3 text-center">
                و اما <span className="text-primary">مزایای همکاری</span> با من
              </p>
              <hr className='pb-4' />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ps-md-4 py-md-0 py-4 text-center">
              <ul className='lh-lg pe-4 list-resume pb-3 small text-center'>
                <li >
                  کد نویسی به روز و مطابق با استاندارد های همگانی مانند Es7
                </li>
                <li >
                  کد نویسی تمیز ، مختصر و قابل فهم برای دیگر همکاران
                </li>
                <li >
                  در نظر گرفتن امکان اعمال تغییرات راحت تر در آینده
                </li>
                <li >
                  به حداقل رساندن زمان تکمیل پروژه با استفاده از ساختارهای از قبل آماده شده
                </li>
                <li >
                  به روزرسانی و پشتیبانی همیشگی کد ها همگام با تکنولوژی های جدید
                </li>
                <li >
                  توجه به پارامتر های سئو و بهینه سازی برای افزایش سرعت
                </li>
                <li >
                  مستند سازی و تست نویسی های دوره ای منظم
                </li>
                <li >
                  ارائه ی مشاوره و ایده پردازی در همه ی ابعاد پروژه
                </li>
                <li>
                  جستجو و تحقیق انگلیسی در موضوعات مرتبط
                </li>
                <li>
                  جستجو و یادگیری مداوم کتابخانه ها و فریموورک های جدیدتر
                </li>
                <li>
                  و در نهایت در نظر گرفتن منافع دو طرف و تامین آنها تا حد امکان
                </li>
              </ul>
              <div className='ps-md-5'>
                <ul className=' text-primary p-4 rounded-4 h5 bg-transparent-1'>
                  <li className='h4 text-center'>
                    ارتباط با من:
                  </li>
                  <li className='px-5'>
                    <hr />
                  </li>
                  <li className='row small'>
                    <div className='d-flex col-md-6 justify-content-center p-md-0 py-2'>
                      <p className='ltr'>0922 538 8329</p>
                      <div className='pe-3'>
                        <BsFillTelephoneFill />
                      </div>
                    </div>
                    <div className='d-flex col-md-6 justify-content-center p-md-0 py-2'>
                      <p className='ltr'>Pouriamori11@Gmail.com</p>
                      <div className='pe-3'>
                        <BsChatSquareTextFill />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>



          </div>
        </div>
      </section>
    </>
  )
}

export default Ending;
