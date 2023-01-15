import SearchFooter from "../../Components/SearchFooter/SearchFooter"; /* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import useGoogleSearch from "../../Hook/useGoogleSearch";
import NavbarSearch from "../../Components/NavbarSearch/NavbarSearch";
import ResultsNumber from "../../Components/ResultsNumber/ResultsNumber";
import ResultContainer from "../../Components/ResultContainer/ResultContainer";
import { useSelector } from "react-redux";
const Searchpage = () => {
  console.log("searchpage called");

  let data = useSelector((data) => data[0]);
  data && localStorage.setItem("search", data);
  if (!data) data = localStorage.getItem("search");
  console.log(data);
  let results = useGoogleSearch(data);
  return results ? (
    <div>
      {data && <NavbarSearch val={data} />}
      <div
        style={{
          width: "50%",
          marginLeft: "12.5%",
          textAlign: "left",
          padding: "2px 5px",
          fontSize: "14px",
          color: "gray",
        }}
      >
        <ResultsNumber
          totalResults={results.searchInformation.formattedTotalResults}
          searchTime={results.searchInformation.formattedSearchTime}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "50%",
          marginLeft: "12.5%",
          paddingBottom: "25px",
          textAlign: "left",
        }}
      >
        {results?.items.map((elem) => (
          <ResultContainer
            link={elem.link}
            displayLink={elem.displayLink}
            title={elem.title}
            snippet={elem.snippet}
          />
        ))}
      </div>
      <SearchFooter />
    </div>
  ) : (
    <p>Something went wrong</p>
  );
};

export default Searchpage;
const res = {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - shalom",
        totalResults: "43900000",
        searchTerms: "shalom",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "7731e76d02986670d",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - shalom",
        totalResults: "43900000",
        searchTerms: "shalom",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "7731e76d02986670d",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.145607,
    formattedSearchTime: "0.15",
    totalResults: "43900000",
    formattedTotalResults: "43,900,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Shalom - Wikipedia",
      htmlTitle: "<b>Shalom</b> - Wikipedia",
      link: "https://en.wikipedia.org/wiki/Shalom",
      displayLink: "en.wikipedia.org",
      snippet:
        "Shalom is a Hebrew word meaning peace, harmony, wholeness, completeness, prosperity, welfare and tranquility and can be used idiomatically to mean both ...",
      htmlSnippet:
        "<b>Shalom</b> is a Hebrew word meaning peace, harmony, wholeness, completeness, prosperity, welfare and tranquility and can be used idiomatically to mean both&nbsp;...",
      cacheId: "7Q3BDsGcaMYJ",
      formattedUrl: "https://en.wikipedia.org/wiki/Shalom",
      htmlFormattedUrl: "https://en.wikipedia.org/wiki/<b>Shalom</b>",
      pagemap: {
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Shalom.svg/1200px-Shalom.svg.png",
            "theme-color": "#eaecf0",
            "og:image:width": "1200",
            "og:type": "website",
            viewport:
              "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
            "og:title": "Shalom - Wikipedia",
            "og:image:height": "577",
            "format-detection": "telephone=no",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Shalom Health Care Center | Patient-Centered Medical Home",
      htmlTitle:
        "<b>Shalom</b> Health Care Center | Patient-Centered Medical Home",
      link: "https://www.shalomhealthcenter.org/",
      displayLink: "www.shalomhealthcenter.org",
      snippet:
        "At Shalom, our mission is to provide quality health care services that are patient centered, affordable and accessible for all in our community.",
      htmlSnippet:
        "At <b>Shalom</b>, our mission is to provide quality health care services that are patient centered, affordable and accessible for all in our community.",
      cacheId: "cHPCiLFpTWsJ",
      formattedUrl: "https://www.shalomhealthcenter.org/",
      htmlFormattedUrl: "https://www.<b>shalom</b>healthcenter.org/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJjewIX9nMCbbqfqYrz6u-UCmUjoAjtHdurM95GEU8DaNvtVQMriNP_PwO",
            width: "275",
            height: "183",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.shalomhealthcenter.org/wp-content/uploads/2021/04/AdobeStock_55712895-scaled.jpeg",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title":
              "Shalom Health Care Center | Patient-Centered Medical Home",
            "twitter:site": "ShalomHCCindy",
            viewport: "width=device-width, initial-scale=1",
            "twitter:description":
              "At Shalom, our mission is to provide quality health care services that are patient centered, affordable and accessible for all in our community.",
            "og:title":
              "Shalom Health Care Center | Patient-Centered Medical Home",
            "og:url": "https://www.shalomhealthcenter.org/",
            "og:description":
              "At Shalom, our mission is to provide quality health care services that are patient centered, affordable and accessible for all in our community.",
            "twitter:image":
              "https://www.shalomhealthcenter.org/wp-content/uploads/2021/04/AdobeStock_55712895-scaled.jpeg",
          },
        ],
        creativework: [
          {
            text: "COVID-19: Resources for COVID-19 from Indiana Family and Social Services Administration. Learn More Health Equity for all in our communityYou are always welcome at Shalom, your medical home....",
            headline: "Home",
          },
        ],
        cse_image: [
          {
            src: "https://www.shalomhealthcenter.org/wp-content/uploads/2021/04/AdobeStock_55712895-scaled.jpeg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Shalom Center: Home",
      htmlTitle: "<b>Shalom</b> Center: Home",
      link: "https://www.shalomcenter.org/",
      displayLink: "www.shalomcenter.org",
      snippet:
        "Shalom Center is a 501(C)3 in Kenosha County serving as the only homeless shelter, largest food pantry, and longest running nightly meal program.",
      htmlSnippet:
        "<b>Shalom</b> Center is a 501(C)3 in Kenosha County serving as the only homeless shelter, largest food pantry, and longest running nightly meal program.",
      cacheId: "aMh0hN714roJ",
      formattedUrl: "https://www.shalomcenter.org/",
      htmlFormattedUrl: "https://www.<b>shalom</b>center.org/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRKlJCPIWtlz6RrLMTIZPetUAcHFXTwfjtyfKn9zV93aZD-QYsJ_wEL938",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.shalomcenter.org/wp-content/uploads/2022/04/ShalomCenterLogo-Color-NoTag-1.jpg",
            "og:type": "website",
            "og:image:width": "1200",
            "twitter:card": "summary_large_image",
            "og:site_name": "Shalom Center",
            "og:title": "Home - Shalom Center",
            "og:image:height": "630",
            "twitter:label1": "Est. reading time",
            "og:image:type": "image/jpeg",
            "msapplication-tileimage":
              "https://www.shalomcenter.org/wp-content/uploads/2022/02/Shalom-Center.svg",
            "og:description":
              "Sign up for Secret Santa today!     \n\nFood Pantry \n\nServing Wednesdays & Fridays 8:30 – 11:30AM\nBring ID & Recent Mail \n\nLEARN MORE   \n\nSoup Kitchen \n\nServing a Meal Every Day\n5 – 6PM \n\nLEARN MORE   \n\nSHELTER \n\nServing Families and Individuals in Need of Shelter \nCall for info: (262)",
            "twitter:data1": "13 minutes",
            "article:modified_time": "2022-11-21T18:59:22+00:00",
            viewport: "width=device-width, initial-scale=1",
            "og:locale": "en_US",
            "og:url": "https://www.shalomcenter.org/",
          },
        ],
        cse_image: [
          {
            src: "https://www.shalomcenter.org/wp-content/uploads/2022/04/ShalomCenterLogo-Color-NoTag-1.jpg",
          },
        ],
        hatomfeed: [{}],
      },
    },
    {
      kind: "customsearch#result",
      title: "The True Meaning of Shalom // Defining Shalom — FIRM Israel",
      htmlTitle:
        "The True Meaning of <b>Shalom</b> // Defining <b>Shalom</b> — FIRM Israel",
      link: "https://firmisrael.org/learn/the-meaning-of-shalom/",
      displayLink: "firmisrael.org",
      snippet:
        "Jan 3, 2020 ... In Hebrew, the word translated as “well-being”, “well”, and “in good health” is all one word – Shalom. Is “Shalom” also Arabic? In Arabic the ...",
      htmlSnippet:
        "Jan 3, 2020 <b>...</b> In Hebrew, the word translated as “well-being”, “well”, and “in good health” is all one word – <b>Shalom</b>. Is “<b>Shalom</b>” also Arabic? In Arabic the&nbsp;...",
      cacheId: "z-z7Antn8ysJ",
      formattedUrl: "https://firmisrael.org/learn/the-meaning-of-shalom/",
      htmlFormattedUrl:
        "https://firmisrael.org/learn/the-meaning-of-<b>shalom</b>/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSviUzzip44Ca1Wbl_9uxA7qkHB4ju8jE279il1dMbPgGLOLU1CstPlu8w",
            width: "300",
            height: "168",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://firmisrael.org/wp-content/uploads/2020/02/the-true-meaning-of-shalom3-1.jpg",
            "og:type": "article",
            "article:published_time": "2020-01-03T03:26:00+00:00",
            "og:image:width": "1024",
            "twitter:card": "summary_large_image",
            "theme-color": "#0d4253",
            "og:site_name": "FIRM Israel",
            "og:title": "The True Meaning of Shalom",
            "og:image:height": "576",
            "twitter:label1": "Written by",
            "twitter:label2": "Est. reading time",
            "og:image:type": "image/jpeg",
            "og:description":
              "What is shalom? Many are familiar with the Hebrew word for “peace.” But the true meaning of shalom means more than the absence of conflict.",
            "twitter:creator": "@FIRMIsrael",
            "article:publisher": "https://www.facebook.com/FIRMisrael",
            "article:author": "Facebook.com/EzraAdventures",
            "twitter:data1": "Doug Hershey",
            "twitter:data2": "11 minutes",
            "twitter:site": "@FIRMIsrael",
            "article:modified_time": "2022-11-20T12:39:45+00:00",
            viewport: "width=device-width, initial-scale=1",
            "og:locale": "en_US",
            "og:url": "https://firmisrael.org/learn/the-meaning-of-shalom/",
          },
        ],
        cse_image: [
          {
            src: "https://firmisrael.org/wp-content/uploads/2020/02/the-true-meaning-of-shalom3-1.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Shalom, Inc.",
      htmlTitle: "<b>Shalom</b>, Inc.",
      link: "http://www.shalominc.org/",
      displayLink: "www.shalominc.org",
      snippet:
        "Shalom, Inc. is a nonprofit that provides free programming to ​Philadelphia schools. Through evidence based Prevention Education, we give students the ...",
      htmlSnippet:
        "<b>Shalom</b>, Inc. is a nonprofit that provides free programming to ​Philadelphia schools. Through evidence based Prevention Education, we give students the&nbsp;...",
      cacheId: "UjJEIs5Q1MoJ",
      formattedUrl: "www.shalominc.org/",
      htmlFormattedUrl: "www.<b>shalom</b>inc.org/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQrK5CxgE_xNtl_wt0h_DO0hGrgQSDKQhp8b0akD_bsS6Omf9VsaueuMo",
            width: "406",
            height: "124",
          },
        ],
        metatags: [
          {
            "og:image":
              "http://www.shalominc.org/uploads/1/2/6/1/126195841/editor/shalom-logo-png-white.png?1648775508",
            "og:site_name": "SHALOM, INC.",
            viewport: "width=device-width, initial-scale=1.0",
            "og:title": "SHALOM, INC.",
            "og:url": "http://www.shalominc.org/",
            "og:description":
              "Shalom, Inc. is a nonprofit that provides free programming to ​Philadelphia schools. Through evidence based Prevention Education, we give students the knowledge and skills to make healthy choices. We serve the K-12 population throughout Philadelphia",
          },
        ],
        cse_image: [
          {
            src: "http://www.shalominc.org/uploads/1/2/6/1/126195841/editor/shalom-logo-png-white.png?1648775508",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Shalom Farms: Fresh Produce for All",
      htmlTitle: "<b>Shalom</b> Farms: Fresh Produce for All",
      link: "https://shalomfarms.org/",
      displayLink: "shalomfarms.org",
      snippet:
        "We envision a healthier community where everyone has access to healthy food and opportunities to grow, choose, cook and enjoy fresh produce.",
      htmlSnippet:
        "We envision a healthier community where everyone has access to healthy food and opportunities to grow, choose, cook and enjoy fresh produce.",
      cacheId: "wrqESnwDNi4J",
      formattedUrl: "https://shalomfarms.org/",
      htmlFormattedUrl: "https://<b>shalom</b>farms.org/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTd_EAnw3Qupe9gxiyOn9g32tEUBZufhnTZTD07e-8ii-EAuGEfkUuk-w5C",
            width: "344",
            height: "147",
          },
        ],
        metatags: [
          {
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "og:site_name": "Shalom Farms",
            "tec-api-origin": "https://shalomfarms.org",
            "og:title": "Fresh Produce for All | Shalom Farms",
            "twitter:label1": "Est. reading time",
            "msapplication-tileimage":
              "https://shalomfarms.org/wp-content/uploads/2021/12/cropped-Shalom-Favicon-270x270.png",
            "og:description":
              "We envision a healthier community where everyone has access to healthy food and opportunities to grow, choose, cook and enjoy fresh produce.",
            "twitter:data1": "9 minutes",
            "article:modified_time": "2021-12-08T18:07:31+00:00",
            viewport: "width=device-width, initial-scale=1",
            "og:locale": "en_US",
            "og:url": "https://shalomfarms.org/",
            "tec-api-version": "v1",
          },
        ],
        cse_image: [
          {
            src: "https://shalomfarms.org/wp-content/uploads/2021/09/Shalom-Sunrise-Home5-scaled-e1634064704575.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Am Shalom",
      htmlTitle: "Am <b>Shalom</b>",
      link: "https://www.amshalom.com/",
      displayLink: "www.amshalom.com",
      snippet:
        "Worship with us via live stream. We are pleased to live stream Shabbat services every Friday at 6:30pm, as well as holidays and other special programs. Live ...",
      htmlSnippet:
        "Worship with us via live stream. We are pleased to live stream Shabbat services every Friday at 6:30pm, as well as holidays and other special programs. Live&nbsp;...",
      cacheId: "1vL1B5QgUHoJ",
      formattedUrl: "https://www.amshalom.com/",
      htmlFormattedUrl: "https://www.am<b>shalom</b>.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4RspDkU6UJ8ath5eyh7Tmzbwcts9o--cWPc3tfzb9FIXzRgwR-V9wuCY",
            width: "259",
            height: "194",
          },
        ],
        metatags: [
          {
            viewport: "width=device-width, initial-scale=1, maximum-scale=1",
            "zoom-domain-verification": "ZOOM_verify_7s_2D_VPRTanrJ0uXXOaBA",
          },
        ],
        cse_image: [
          {
            src: "https://www.amshalom.com/_preview/large/uploads/Images/Music/waltsoulchildren.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Shalom House: Home",
      htmlTitle: "<b>Shalom</b> House: Home",
      link: "https://www.shalomhouseinc.org/",
      displayLink: "www.shalomhouseinc.org",
      snippet:
        "Shalom House helps hundreds of people with serious mental illness each year by providing an array of community-based mental health services and a choice of ...",
      htmlSnippet:
        "<b>Shalom</b> House helps hundreds of people with serious mental illness each year by providing an array of community-based mental health services and a choice of&nbsp;...",
      cacheId: "iyoSFi1_KPMJ",
      formattedUrl: "https://www.shalomhouseinc.org/",
      htmlFormattedUrl: "https://www.<b>shalom</b>houseinc.org/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQMpTemQHKJYF6KZ6dYR6jwrA5cWbinkRbQh2K7YLqGsFQFyFgnmjHMwe",
            width: "250",
            height: "141",
          },
        ],
        metatags: [
          {
            "og:type": "website",
            "twitter:card": "summary",
            "og:site_name": "Shalom House",
            "article:modified_time": "2022-12-09T17:51:24+00:00",
            viewport: "width=device-width, initial-scale=1",
            "og:title": "Home - Shalom House",
            "og:locale": "en_US",
            "og:url": "https://www.shalomhouseinc.org/",
          },
        ],
        cse_image: [
          {
            src: "https://www.shalomhouseinc.org/wp-content/themes/shalom/img/logo.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Shalom Christian Academy",
      htmlTitle: "<b>Shalom</b> Christian Academy",
      link: "https://www.shalomca.com/",
      displayLink: "www.shalomca.com",
      snippet:
        "Shalom Christian Academy is a Pre-K through 12th grade school focused on developing lives of consequence in the world for the kingdom of God.",
      htmlSnippet:
        "<b>Shalom</b> Christian Academy is a Pre-K through 12th grade school focused on developing lives of consequence in the world for the kingdom of God.",
      cacheId: "dS_WnV_O3TUJ",
      formattedUrl: "https://www.shalomca.com/",
      htmlFormattedUrl: "https://www.<b>shalom</b>ca.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSWQ3L0SIjpGGZTpah_g7MCF2RU9oP1NPC9K8UZcATmPgn3pGL5ODhzfqU",
            width: "275",
            height: "183",
          },
        ],
        postaladdress: [
          {
            addresslocality: "Chambersburg",
            postalcode: "17202",
            addressregion: "PA",
            streetaddress: "126 Social Island Rd",
          },
        ],
        metatags: [
          {
            "og:type": "website",
            viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
            "og:title":
              "PreK through 12th Grade School | Servanthood | Community | Academics",
            "og:url": "https://www.shalomca.com/",
            "og:description":
              "Shalom Christian Academy is a Pre-K through 12th grade school focused on developing lives of consequence in the world for the kingdom of God.",
          },
        ],
        cse_image: [
          {
            src: "https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1671554817/shalomcacom/hmfgspgnug8ghba4mvwo/homepageimage-6.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Shalom: Peace in Hebrew | My Jewish Learning",
      htmlTitle: "<b>Shalom</b>: Peace in Hebrew | My Jewish Learning",
      link: "https://www.myjewishlearning.com/article/shalom/",
      displayLink: "www.myjewishlearning.com",
      snippet:
        "In the Bible, the word shalom is most commonly used to refer to a state of affairs, one of well‑being, tranquility, prosperity, and security, circumstances ...",
      htmlSnippet:
        "In the Bible, the word <b>shalom</b> is most commonly used to refer to a state of affairs, one of well‑being, tranquility, prosperity, and security, circumstances&nbsp;...",
      cacheId: "4eVpJtUYi1oJ",
      formattedUrl: "https://www.myjewishlearning.com/article/shalom/",
      htmlFormattedUrl:
        "https://www.myjewishlearning.com/article/<b>shalom</b>/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEYpXx-sAl_JbB5mjfpdClWzq1_11YppRjEsz7ScpOWo5D4sQCBz5ab-eF",
            width: "299",
            height: "168",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#fff",
            "og:image":
              "https://www.myjewishlearning.com/wp-content/uploads/2003/04/shalom2.jpg",
            "og:type": "article",
            "og:image:width": "1600",
            "twitter:card": "summary_large_image",
            "og:site_name": "My Jewish Learning",
            "tec-api-origin": "https://www.myjewishlearning.com",
            "og:title": "Shalom: Peace in Hebrew | My Jewish Learning",
            "og:image:height": "901",
            "twitter:label1": "Est. reading time",
            "twitter:label2": "Written by",
            "og:image:type": "image/jpeg",
            "msapplication-tileimage":
              "https://www.myjewishlearning.com/wp-content/themes/myjewishlearning/images/mstile-144x144.png",
            "og:description":
              "Shalom, or peace, along with truth and justice, is among the most hallowed Jewish values.",
            "twitter:data1": "7 minutes",
            "twitter:data2": "Dr. Aviezer Ravitzky",
            "fb:app_id": "206513416031334",
            "article:modified_time": "2022-09-15T10:25:21+00:00",
            viewport: "width=device-width, initial-scale=1.0",
            "og:locale": "en_US",
            "og:url": "https://www.myjewishlearning.com/article/shalom/",
            "tec-api-version": "v1",
          },
        ],
        cse_image: [
          {
            src: "https://www.myjewishlearning.com/wp-content/uploads/2003/04/shalom2.jpg",
          },
        ],
      },
    },
  ],
};
