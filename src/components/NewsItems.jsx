import React from "react";
import PropTypes from "prop-types";

const NewsItems = ({ title, description, newsURL, imgURL, date, author }) => {
  return (
    <section className="text-gray-400 bg-slate-700 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div
            className="p-4 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3"
            style={{ width: "100%" }}
          >
            <div className="news-item h-full border-2 hover:scale-110 border-gray-800 rounded-lg overflow-hidden hover:shadow-xl">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={
                  !imgURL
                    ? "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"
                    : imgURL
                }
                alt={title || "News"}
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-800 mb-1">
                  {new Date(date).toDateString()}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {title}...
                </h1>
                <h2 className="  uppercase tracking-widest text-xs title-font font-medium text-gray-800 mb-1">
                  {author}
                </h2>
                <p className="leading-relaxed mb-3 text-blue-900">{description}...</p>
                <div className="flex items-center flex-wrap">
                  <button className="  border-solid rounded-lg p-1
                  hover:bg-gray-400
                  ">

                 
                  <a
                    className="text-indigo-800 inline-flex items-center md:mb-2 lg:mb-0   "
                    href={newsURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

NewsItems.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  newsURL: PropTypes.string,
  imgURL: PropTypes.string,
  date: PropTypes.string,
};

export default NewsItems;
