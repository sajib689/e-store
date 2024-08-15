import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800 bg-base-200">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Welcome to <br />
              <span className="dark:text-violet-600 text-[#0F42AB]"> E-store</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Your one-stop shop for all your needs. Explore our wide range of
              products and enjoy a seamless shopping experience.
              <br className="hidden md:inline lg:hidden" />
              Quality, convenience, and affordability at your fingertips.
            </p>
            <div className="">
              <Link
              
                className="px-8 py-3 text-lg font-semibold bg-[#0F42AB] text-white rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="./banner.jpg"
              alt="e-store"
              className="object-contain rounded-lg h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
