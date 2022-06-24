module.exports = {
  env: {
    
    TOUR_URL: "https://asiamice.pythonanywhere.com/api/v1/tours/",
    ROOM_TYPES_URL: "https://asiamice.pythonanywhere.com/api/v1/room-types/",
    SUSTENCE_URL: "https://asiamice.pythonanywhere.com/api/v1/sustence-names/",
    CITIES_URL: "https://asiamice.pythonanywhere.com/api/v1/cities_filter/",
    COUNTRIES_URL: "https://asiamice.pythonanywhere.com/api/v1/countries/",
    BLOG_URL: "https://asiamice.pythonanywhere.com/api/v1/blog/",
    HOTELS_URL: "https://asiamice.pythonanywhere.com/api/v1/hotels/",
    PAYMENT: "https://asiamice.pythonanywhere.com/api/v1/payment/",
    FORM_COUNTRIES: "https://countriesnow.space/api/v0.1/countries/"
  },

  

  i18n: {
    locales: ["ru", "en", "uz"],
    defaultLocale: "ru",
    localeDetection: true,
  },

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/about": { page: "/about", query: { title: "About" } },
      "/contact": { page: "/contact", query: { title: "Contact us" } },
      "/memo": { page: "/memo", query: { title: "Memo for turists" } },
      "/mice": { page: "/mice", query: { title: "MICE" } },
      "/tours": { page: "/tours", query: { title: "Tours" } },
      "/faq": { page: "/faq", query: { title: "FAQ" } },
      "/404": { page: "/404", query: { title: "404" } },
      "/payment": { page: "/payment", query: { title: "Payment" } },
      "/blog": { page: "/blog", query: { title: "Blog" } },
      "/hotels": { page: "/hotels", query: { title: "Hotels" } },
    };
  },

  plugins: [require("autoprefixer"), require("next/babel")],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "postcss-loader"],
      },
      {
        test: /\.jsx?$/,
        use: ["babel-loader", "astroturf/loader"],
      },
    ],
  },
};
