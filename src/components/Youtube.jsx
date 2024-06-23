import React from "react";

const ytChannels = [
  {
    channelUrl:
      "https://yt3.googleusercontent.com/towOWTBoExeb63XYp_Ol5v7qXZ5lEYhUyqhu-dFX2k-bznCGQ2uB37XxLqZgs0stCicWFMNjzw=s176-c-k-c0x00ffffff-no-rj",
    channelName: "bigboxSWE",
  },
  {
    channelUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_mKzklyPPhghBJQH5H3HpZ108YcE618DBRLAvRUD1AjKNw=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Fireship",
  },
  {
    channelUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s176-c-k-c0x00ffffff-no-rj",
    channelName: "WebDevSimplified",
  },
  {
    channelUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_mUPDVdzH_xKT-q_hC1h2-7hJKd6GnKIY3Zydjv-SEmpc0=s176-c-k-c0x00ffffff-no-rj",
    channelName: "jherr",
  },
  {
    channelUrl:
      "https://yt3.googleusercontent.com/tLOaVyDRQq46qga99PFlP9b3PRcni8gBJepNOecsgIdADpxU10p6w0VD-fZ8VvtqeldN6IHYOj0=s176-c-k-c0x00ffffff-no-rj",
    channelName: "PedroTechnologies",
  },
  {
    channelUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s176-c-k-c0x00ffffff-no-rj",
    channelName: "freecodecamp",
  },
  {
    channelUrl:
      "https://yt3.googleusercontent.com/I3x84cuDVUoh8mj5TAE08R6ieGwTvfCxX5_iT4nQYtQfdCgULbaqIifIDfb8tj9n_ho9w6b00g=s176-c-k-c0x00ffffff-no-rj",
    channelName: "fknight",
  },
  {
    channelUrl:
      "https://yt3.googleusercontent.com/yzdPdE5LbrGCd5j5xwBOregV3uQzLtB4L1BGHLk9bSu3ss_cd0nI0kKWM8cwQr1ZtC4UiD0jYwo=s176-c-k-c0x00ffffff-no-rj",
    channelName: "cosdensolutions",
  },
  {
    channelUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_mPFVsxROj1dOtTWc9iNBwDYV4z42Q8LPokBSewiW9pCSg=s176-c-k-c0x00ffffff-no-rj",
    channelName: "BroCodez",
  },
  {
    channelUrl:
      "https://yt3.googleusercontent.com/6eMjx15aQXJ_tF59ICQwE9Ygj9rvtbyLeHPk1NQaHG6s9WiOyymCfbl72U0g9aHobhqL4MwnV94=s176-c-k-c0x00ffffff-no-rj",
    channelName: "TheCodeBootcamp",
  },
  {
    channelUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_k8WWdesIQosU5WUlHsVDJ4a6lo8tRCGvyOfWKkC0qbG8o=s176-c-k-c0x00ffffff-no-rj",
    channelName: "HiteshChoudharydotcom",
  },
  {
    channelUrl:
      "https://yt3.googleusercontent.com/4NapxEtLcHQ6wN2zA_DMmkOk47RFb_gy6sjSmUZGg_ARHjlIUjFsrNFddrcKMkTYpBNxCp3J=s176-c-k-c0x00ffffff-no-rj",
    channelName: "t3dotgg",
  },
];
const Tooltip = ({ content, children }) => {
  return (
    <div className="relative inline-block">
      <div className="group">
        {children}
        <div className="absolute z-50 hidden px-3 py-1 text-sm text-white transform -translate-x-1/2 bg-gray-800 rounded-md shadow-lg group-hover:block bottom-full left-1/2">
          {content}
          <svg
            className="absolute left-0 w-full h-2 text-gray-800 top-full"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
            xmlSpace="preserve"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const ToolIcon = ({ imageUrl, name, url }) => {
  return (
    <Tooltip content={name}>
      <a
        href={`https://youtube.com/@${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={imageUrl}
          className="w-12 h-12 transition duration-300 ease-in-out transform rounded-md hover:scale-105 hover:-translate-y-1"
          alt={name}
        />
      </a>
    </Tooltip>
  );
};

const YouTube = () => {
  return (
    <div className="max-w-5xl px-4 mx-auto mb-20">
      <div className="flex justify-center text-2xl font-bold tracking-tight">
        <p className="font-mukta md:text-2xl md:mt-16">Yt Channels I follow</p>
      </div>
      <div className="grid grid-cols-4 gap-4 py-5 md:grid-cols-2 lg:grid-cols-4">
        {ytChannels.map((youtubeLink) => (
          <div key={youtubeLink.channelName}>
            <ToolIcon
              imageUrl={youtubeLink.channelUrl}
              name={youtubeLink.channelName}
              url={youtubeLink.channelName}
            />
          </div>
        ))}
      </div>

      <blockquote class="text-xl italic font-semibold text-center text-gray-900 dark:text-white">
        <p>"Best way to learn code {""} is to code."</p>
        <p class="text-gray-500 dark:text-gray-400 text-lg">- Anonymous🧠</p>
      </blockquote>
    </div>
  );
};
export default YouTube;
