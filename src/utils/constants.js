export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg"

// export const USER_AVATAR = "https://occ-0-6336-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4"
export const USER_AVATAR = "https://avatars.githubusercontent.com/u/137111713?v=4"

export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY, 
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

export const SUPPORTED_LANGUAGES = [{identifier: "en", name: "English"},
{identifier: "hindi", name: "Hindi"}, {identifier: "spanish", name: "Spanish"} ,{identifier: "chinease", name: "Chinease"}]


export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
