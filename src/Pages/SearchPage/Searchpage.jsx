/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import useGoogleSearch from "../../Hook/useGoogleSearch";
import NavbarSearch from "../../Components/NavbarSearch/NavbarSearch";
import ResultsNumber from "../../Components/ResultsNumber/ResultsNumber";
import ResultContainer from "../../Components/ResultContainer/ResultContainer";
const Searchpage = () => {
  const { search } = useParams();

  const data = {
    kind: "customsearch#search",
    url: {
      type: "application/json",
      template:
        "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
    },
    queries: {
      request: [
        {
          title: "Google Custom Search - 300mb movies",
          totalResults: "15400000",
          searchTerms: "300mb movies",
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
          title: "Google Custom Search - 300mb movies",
          totalResults: "15400000",
          searchTerms: "300mb movies",
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
      searchTime: 0.45473,
      formattedSearchTime: "0.45",
      totalResults: "15400000",
      formattedTotalResults: "15,400,000",
    },
    items: [
      {
        kind: "customsearch#result",
        title:
          "TheMoviesFlix.com |Moviesflix | Movies flix | moviesflix-300mb ...",
        htmlTitle:
          "TheMoviesFlix.com |Moviesflix | <b>Movies</b> flix | moviesflix-<b>300mb</b> ...",
        link: "https://purebarberism.co.uk/",
        displayLink: "purebarberism.co.uk",
        snippet:
          "Moviesflix,moviesflix,movies flix,MoviesFlix,moviesflix.com, moviesflix, moviesflixpro, moviesflix pro,moviesflix uri,themoviesflix.cc,themoviesflix.co ...",
        htmlSnippet:
          "Moviesflix,moviesflix,<b>movies</b> flix,MoviesFlix,moviesflix.com, moviesflix, moviesflixpro, moviesflix pro,moviesflix uri,themoviesflix.cc,themoviesflix.co&nbsp;...",
        cacheId: "ovpoWfL93EwJ",
        formattedUrl: "https://purebarberism.co.uk/",
        htmlFormattedUrl: "https://purebarberism.co.uk/",
        pagemap: {
          metatags: [
            {
              "og:type": "website",
              "twitter:card": "summary_large_image",
              "apple-mobile-web-app-status-bar-style": "black",
              "og:site_name":
                "TheMoviesFlix.com |Moviesflix | Movies flix | moviesflix-300mb Movies, 480p Movies",
              viewport: "width=device-width, initial-scale=1",
              "apple-mobile-web-app-capable": "yes",
              "og:title":
                "TheMoviesFlix.com |Moviesflix | Movies flix | moviesflix-300mb Movies, 480p Movies",
              "og:locale": "en_US",
              "msapplication-tileimage":
                "https://purebarberism.co.uk/wp-content/uploads/2022/08/cropped-cropped-favicon-32x32-1-270x270.png",
              "og:url": "https://purebarberism.co.uk/",
              "og:description":
                "Moviesflix,moviesflix,movies flix,MoviesFlix,moviesflix.com, moviesflix, moviesflixpro, moviesflix pro,moviesflix uri,themoviesflix.cc,themoviesflix.co,themoviesflix.in,themoviesflix.net ,MovieskiDuniya, Entertainment 720p Movies, 1080p movies, Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "300mb Patch info? : r/Overwatch",
        htmlTitle: "<b>300mb</b> Patch info? : r/Overwatch",
        link: "https://www.reddit.com/r/Overwatch/comments/5jezto/300mb_patch_info/",
        displayLink: "www.reddit.com",
        snippet:
          "Dec 20, 2016 ... So previously there was a bug where if you re-hacked a healthpack you already hacked, it just stayed hacked forever?",
        htmlSnippet:
          "Dec 20, 2016 <b>...</b> So previously there was a bug where if you re-hacked a healthpack you already hacked, it just stayed hacked forever?",
        cacheId: "SglzXPTN2iMJ",
        formattedUrl:
          "https://www.reddit.com/r/Overwatch/comments/5jezto/300mb_patch_info/",
        htmlFormattedUrl:
          "https://www.reddit.com/r/Overwatch/comments/5jezto/<b>300mb</b>_patch_info/",
        pagemap: {
          metatags: [
            {
              "theme-color": "#000000",
              "og:type": "website",
              "twitter:card": "summary",
              "apple-mobile-web-app-status-bar-style": "black",
              "og:site_name": "reddit",
              "twitter:site": "@reddit",
              viewport:
                "width=device-width, initial-scale=1, viewport-fit=cover",
              "apple-mobile-web-app-capable": "yes",
              "og:title": "r/Overwatch - 300mb Patch info?",
              "og:url":
                "https://www.reddit.com/r/Overwatch/comments/5jezto/300mb_patch_info/",
              "msapplication-navbutton-color": "#000000",
              "og:description": "51 votes and 36 comments so far on Reddit",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "Cutting the Cord | Oklahoma State University",
        htmlTitle: "Cutting the Cord | Oklahoma State University",
        link: "https://emeriti.okstate.edu/reports/tech-committee-reports/cutting-the-cord.html",
        displayLink: "emeriti.okstate.edu",
        snippet:
          "300MB per hour on the lowest video quality ... “Siri, show me action films” then “Only the James Bond movies” then “Just the ones starring Sean Connery” ...",
        htmlSnippet:
          "<b>300MB</b> per hour on the lowest video quality ... “Siri, show me action <b>films</b>” then “Only the James Bond <b>movies</b>” then “Just the ones starring Sean Connery”&nbsp;...",
        cacheId: "Us9Z2Xl7SUgJ",
        formattedUrl:
          "https://emeriti.okstate.edu/reports/tech-committee.../cutting-the-cord.html",
        htmlFormattedUrl:
          "https://emeriti.okstate.edu/reports/tech-committee.../cutting-the-cord.html",
        pagemap: {
          hcard: [
            {
              url_text: "Oklahoma State University",
              fn: "Oklahoma State University",
              url: "https://go.okstate.edu/",
            },
          ],
          metatags: [
            {
              "og:type": "website",
              "article:published_time": "2019-09-24T16:56:28.699Z",
              "fb:app_id": "1390635147893160",
              "twitter:card": "summary_large_image",
              "twitter:title": "Cutting the Cord",
              viewport: "width=device-width",
              "twitter:url":
                "https://emeriti.okstate.edu/reports/tech-committee-reports/cutting-the-cord.html",
              "twitter:description":
                "In broadcast television, cord cutting refers to the pattern of viewers, referred to as cord cutters, canceling their subscriptions to multichannel subscription television services available over cable or satellite, dropping pay television channels or reducing the number of hours of subscription TV viewed in response to competition from rival media available over the Internet.",
              "og:title": "Cutting the Cord - Oklahoma State University",
              "og:locale": "en_us",
              "og:url":
                "https://emeriti.okstate.edu/reports/tech-committee-reports/cutting-the-cord.html",
              "og:description":
                "In broadcast television, cord cutting refers to the pattern of viewers, referred to as cord cutters, canceling their subscriptions to multichannel subscription television services available over cable or satellite, dropping pay television channels or reducing the number of hours of subscription TV viewed in response to competition from rival media available over the Internet.",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "300MB Movies – 7StarHD.Com",
        htmlTitle: "<b>300MB Movies</b> – 7StarHD.Com",
        link: "https://7starhd.green/category/300mb-movies/",
        displayLink: "7starhd.green",
        snippet:
          "7starhd 300mb movies,hindi,300mb movies free download hollywood,hindi dubbed hollywood, movies 300mb,single 7starhd 300mb movies free download,18+ dual ...",
        htmlSnippet:
          "7starhd <b>300mb movies</b>,hindi,<b>300mb movies</b> free download hollywood,hindi dubbed hollywood, movies 300mb,single 7starhd <b>300mb movies</b> free download,18+ dual&nbsp;...",
        cacheId: "CI4SgO4ezz8J",
        formattedUrl: "https://7starhd.green/category/300mb-movies/",
        htmlFormattedUrl:
          "https://7starhd.green/category/<b>300mb</b>-<b>movies</b>/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKvSgl7NeekLhJ68aEZh7HBN9jUU0vAvjvWYyaEUaPSfTrksLy5vDKzjs",
              width: "194",
              height: "259",
            },
          ],
          metatags: [
            {
              "p:domain_verify": "a48bc1edc9e265e9d8f89f6345c81611",
              "theme-color": "#f57f26",
              "og:type": "article",
              "twitter:card": "summary",
              "twitter:title": "300MB Movies – 7StarHD.Com",
              "og:site_name": "7StarHD.Com",
              "msvalidate.01": "BF968A04D89E1FC3E00BD504D5DD933D",
              "og:title": "300MB Movies – 7StarHD.Com",
              "yandex-verification": "1359a18fd758dc00",
              "msapplication-tileimage":
                "https://7starhd.green/wp-content/uploads/2022/10/cropped-cropped-unnamed-copy-192x192-1-270x270.png",
              "og:description":
                "7starhd 300mb movies,hindi,300mb movies free download hollywood,hindi dubbed hollywood, movies 300mb,single 7starhd 300mb movies free download,18+ dual audio eng hindi,movies,300mb movies,dual audio,300mb mkv movies,300mb movies dual audio hindi free download,movies free donwload ,300MB Dual Audio ,Hollywood movie, 300MB Movies, 300MB Movies dual audio, 300MB pc movies, 300MB hindi dubbed Movies.300MBFilms.club,300mb Movies Watch Online Download 300MB Dual Audio Latest Full Movies, HD Mkv, Mp4, world4free, 300MB | 200MB HEVC Movies",
              "article:publisher": "https://facebook.com/7starhd",
              "twitter:site": "@7starhd",
              viewport: "width=device-width, initial-scale=1, maximum-scale=1",
              "twitter:description":
                "7starhd 300mb movies,hindi,300mb movies free download hollywood,hindi dubbed hollywood, movies 300mb,single 7starhd 300mb movies free download,18+ dual audio eng hindi,movies,300mb movies,dual audio,300mb mkv movies,300mb movies dual audio hindi free download,movies free donwload ,300MB Dual Audio ,Hollywood movie, 300MB Movies, 300MB Movies dual audio, 300MB pc movies, 300MB hindi dubbed Movies.300MBFilms.club,300mb Movies Watch Online Download 300MB Dual Audio Latest Full Movies, HD Mkv, Mp4, world4free, 300MB | 200MB HEVC Movies",
              "og:locale": "en_US",
              hdvb: "3dcefd53908283cf7d323feb39bedc64:5601a42f4d881fac565914747cb563ba",
              "fb:admins": "7starhd",
              "og:url": "https://7starhd.green/category/300mb-movies/",
            },
          ],
          cse_image: [
            {
              src: "https://fs1.extraimage.org/picupto/2023/01/14/Trust-Issues-2023-Hindi-S01-Complete-Web-Series-1080p-HDRip-2GB-Download.jpg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title:
          "BollyFlix | Official Site, Bolly Flix, 300MB Movies, 9xMovies, BollyFlix ...",
        htmlTitle:
          "BollyFlix | Official Site, Bolly Flix, <b>300MB Movies</b>, 9xMovies, BollyFlix ...",
        link: "https://bollyflix.hair/",
        displayLink: "bollyflix.hair",
        snippet:
          "Download Latest Bollywood, Hollywood, Dual Audio Hindi Dubbed, 300MB Movies Movies || Google Drive Direct Download Links || BollyFlix, bollyflix, ...",
        htmlSnippet:
          "Download Latest Bollywood, Hollywood, Dual Audio Hindi Dubbed, <b>300MB Movies</b> Movies || Google Drive Direct Download Links || BollyFlix, bollyflix,&nbsp;...",
        cacheId: "z42JduMt1bgJ",
        formattedUrl: "https://bollyflix.hair/",
        htmlFormattedUrl: "https://bollyflix.hair/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BryD2gR2_4nC9ZCSPXZ8-6hhWDkebOIK_KbA6RH3lf-1sHkxzyOOc7dD",
              width: "291",
              height: "173",
            },
          ],
          metatags: [
            {
              "og:image":
                "https://bollyflix.hair/wp-content/uploads/2021/08/Home-Banner.jpg",
              "og:type": "website",
              "og:image:width": "1246",
              "twitter:card": "summary_large_image",
              "twitter:title":
                "BollyFlix | Official Site, Bolly Flix, 300MB Movies, 9xMovies, BollyFlix.Net, BollyFlix.com",
              "og:site_name": "BollyFlix",
              "og:title": "BollyFlix",
              "og:image:height": "743",
              "og:description":
                "Download Latest Bollywood | Hollywood and South Movies Free, BollyFlix.in, BollyFlix.Net, BollyFlixHD, 300MB Movies | 9xmovies | Tamilrockers | 1TamilMv | DesireMovies",
              "og:image:secure_url":
                "https://bollyflix.hair/wp-content/uploads/2021/08/Home-Banner.jpg",
              "twitter:image":
                "https://bollyflix.hair/wp-content/uploads/2021/08/Home-Banner.jpg",
              "apple-mobile-web-app-status-bar-style": "black",
              viewport: "width=device-width, initial-scale=1",
              "apple-mobile-web-app-capable": "yes",
              "twitter:description":
                "Download Latest Bollywood, Hollywood, Dual Audio Hindi Dubbed, 300MB Movies Movies || Google Drive Direct Download Links || BollyFlix, bollyflix, 720p BluRay Movies.",
              "og:locale": "en_US",
              "og:url": "https://bollyflix.hair/",
            },
          ],
          cse_image: [
            {
              src: "https://bollyflix.hair/wp-content/uploads/2021/08/Home-Banner.jpg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title:
          "TheMoviesFlix.com |Moviesflix | Movies flix | moviesflix-300mb ...",
        htmlTitle:
          "TheMoviesFlix.com |Moviesflix | <b>Movies</b> flix | moviesflix-<b>300mb</b> ...",
        link: "https://themoviezflix.co.com/",
        displayLink: "themoviezflix.co.com",
        snippet:
          "Moviesflix,moviesflix,movies flix,MoviesFlix,moviesflix.com, moviesflix, moviesflixpro, moviesflix pro,moviesflix uri,themoviesflix.cc,themoviesflix.co ...",
        htmlSnippet:
          "Moviesflix,moviesflix,<b>movies</b> flix,MoviesFlix,moviesflix.com, moviesflix, moviesflixpro, moviesflix pro,moviesflix uri,themoviesflix.cc,themoviesflix.co&nbsp;...",
        cacheId: "Tk9EdoJ2eZkJ",
        formattedUrl: "https://themoviezflix.co.com/",
        htmlFormattedUrl: "https://the<b>movie</b>zflix.co.com/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CVEGDgfmvX7JjFDzz_SGyK56-T-qLz4MXgn8JnTBQS00OHpZ5B_gGs1C",
              width: "183",
              height: "275",
            },
          ],
          metatags: [
            {
              "og:type": "website",
              "twitter:card": "summary_large_image",
              "apple-mobile-web-app-status-bar-style": "black",
              "og:site_name":
                "TheMoviesFlix.com |Moviesflix | Movies flix | moviesflix-300mb Movies, 480p Movies",
              viewport: "width=device-width, initial-scale=1",
              "apple-mobile-web-app-capable": "yes",
              "og:title":
                "TheMoviesFlix.com |Moviesflix | Movies flix | moviesflix-300mb Movies, 480p Movies",
              "og:locale": "en_US",
              "msapplication-tileimage":
                "https://themoviezflix.co.com/wp-content/uploads/2022/08/cropped-cropped-favicon-32x32-1-270x270.png",
              "og:url": "https://themoviezflix.co.com/",
              "og:description":
                "Moviesflix,moviesflix,movies flix,MoviesFlix,moviesflix.com, moviesflix, moviesflixpro, moviesflix pro,moviesflix uri,themoviesflix.cc,themoviesflix.co,themoviesflix.in,themoviesflix.net ,MovieskiDuniya, Entertainment 720p Movies, 1080p movies, Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies",
            },
          ],
          cse_image: [
            {
              src: "https://themoviezflix.co.com/wp-content/uploads/2023/01/MV5BZDg2YThlMTItYzhhMy00OWE3LTljYTAtYTExMDM5NzRjOGFhXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_-200x300.jpg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title:
          "HDMovies4u - Download All BollyWood & HollyWood Movies, WEB ...",
        htmlTitle:
          "HDMovies4u - Download All BollyWood &amp; HollyWood <b>Movies</b>, WEB ...",
        link: "https://hdmovies4u.ink/",
        displayLink: "hdmovies4u.ink",
        snippet:
          "HDMovies4u | HDMovie | HDMovies | HDMovies4u.com | HDMovies4u.org | HDHubFlix | HDHub4u.com | HDHub Movies | HDHub4u-300MB | Bolly4u | Worldfree4u | Movies, ...",
        htmlSnippet:
          "HDMovies4u | HDMovie | HDMovies | HDMovies4u.com | HDMovies4u.org | HDHubFlix | HDHub4u.com | HDHub <b>Movies</b> | HDHub4u-<b>300MB</b> | Bolly4u | Worldfree4u | <b>Movies</b>,&nbsp;...",
        cacheId: "TXr1W7CxVC8J",
        formattedUrl: "https://hdmovies4u.ink/",
        htmlFormattedUrl: "https://hd<b>movies</b>4u.ink/",
        pagemap: {
          metatags: [
            {
              "theme-color": "#279CF5",
              "og:type": "website",
              "twitter:card": "summary",
              "twitter:title":
                "HDMovies4u - Download All BollyWood & HollyWood Movies, WEB-Series, In Hindi + English (Dual Audio) 480p 720p 1080p | Watch Online | HEVC | x264 | 300MB",
              "og:site_name": "HDMovies4u",
              "og:title":
                "HDMovies4u - Download All BollyWood & HollyWood Movies, WEB-Series, In Hindi + English (Dual Audio) 480p 720p 1080p | Watch Online | HEVC | x264 | 300MB",
              "yandex-verification": "f0b4fd8f324bc24d",
              "msapplication-tileimage":
                "https://hdmovies4u.ink/wp-content/uploads/2022/05/cropped-android-chrome-512x512-1-270x270.png",
              "og:description":
                "HDMovies4u | HDMovie | HDMovies | HDMovies4u.com | HDMovies4u.org | HDHubFlix | HDHub4u.com | HDHub Movies | HDHub4u-300MB | Bolly4u | Worldfree4u | Movies, 480p Movies ~ HDMovies4u.org, HDHub4u.shop, HDHub.com, HDMovies4u.CC, HDHub4u, MoviesKiDuniya, 720p Movies, 1080p movies, Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies",
              viewport: "width=device-width, initial-scale=1, maximum-scale=1",
              "twitter:description":
                "HDMovies4u | HDMovie | HDMovies | HDMovies4u.com | HDMovies4u.org | HDHubFlix | HDHub4u.com | HDHub Movies | HDHub4u-300MB | Bolly4u | Worldfree4u | Movies, 480p Movies ~ HDMovies4u.org, HDHub4u.shop, HDHub.com, HDMovies4u.CC, HDHub4u, MoviesKiDuniya, 720p Movies, 1080p movies, Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies",
              "og:locale": "en_US",
              "og:url": "https://hdmovies4u.ink/",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "7HitMovies | 7hitmovies 7hitmovie 7 hitmovies 2022 300MB ...",
        htmlTitle:
          "7HitMovies | 7hitmovies 7hitmovie 7 hitmovies 2022 <b>300MB</b> ...",
        link: "https://7hitmovies.fyi/",
        displayLink: "7hitmovies.fyi",
        snippet:
          "18+ Movies 300MB Movies Animated Movies Bollywood Movies Dual Audio Hindi Dubbed Hollywood English Movies Hollywood Hindi Dual Hollywood WebSeries Hindi ...",
        htmlSnippet:
          "18+ Movies <b>300MB Movies</b> Animated Movies Bollywood Movies Dual Audio Hindi Dubbed Hollywood English Movies Hollywood Hindi Dual Hollywood WebSeries Hindi&nbsp;...",
        cacheId: "INbeOPRgFaYJ",
        formattedUrl: "https://7hitmovies.fyi/",
        htmlFormattedUrl: "https://7hit<b>movies</b>.fyi/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVU7FEpZnr-Doo6SyS76xbzb-1SsyBEOo6zxTlOpk6__eWQibwbjIjVOE",
              width: "184",
              height: "274",
            },
          ],
          metatags: [
            {
              "theme-color": "#f57f26",
              "og:type": "website",
              "twitter:card": "summary",
              "twitter:title":
                "7HitMovies | 7hitmovies 7hitmovie 7 hitmovies 2022 300MB - 7HitMovies | 7hitmovies 7hitmovie 7 hitmovies 2022 300MB",
              "og:site_name":
                "7HitMovies | 7hitmovies 7hitmovie 7 hitmovies 2022 300MB - 7HitMovies | 7hitmovies 7hitmovie 7 hitmovies 2022 300MB",
              "msvalidate.01": "BB5B4F2EDDFBC7CCE4DBFDAEBB20847D",
              "og:title":
                "7HitMovies | 7hitmovies 7hitmovie 7 hitmovies 2022 300MB - 7HitMovies | 7hitmovies 7hitmovie 7 hitmovies 2022 300MB",
              "yandex-verification": "9cf4d2dcb8a33e25",
              "msapplication-tileimage":
                "https://7hitmovies.fyi/wp-content/uploads/2022/03/cropped-favicon-7hitmovies-270x270.png",
              "og:description":
                "7HitMovies | 7hitmovies 7hitmovie 7 hitmovies 2022 300MB",
              viewport: "width=device-width, initial-scale=1, maximum-scale=1",
              "twitter:description":
                "7HitMovies | 7hitmovies 7hitmovie 7 hitmovies 2022 300MB",
              "og:locale": "en_US",
              "og:url": "https://7hitmovies.fyi/",
            },
          ],
          cse_image: [
            {
              src: "https://i3.extraimage.xyz/pix/2023/01/13/RsF6bb.jpg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title: "Vegamovies.NL - 300mb 480p 720p and 1080p Movies Download",
        htmlTitle:
          "Vegamovies.NL - <b>300mb</b> 480p 720p and 1080p <b>Movies</b> Download",
        link: "https://vegamovies.page/",
        displayLink: "vegamovies.page",
        snippet:
          "Download 300mb Movies, 480p Movies, 720p Movies & 1080p movies, Dual Audio Movies & Web series, Netflix WEB Series, Amazon Prime, ALTBalaji, Zee5 and lots ...",
        htmlSnippet:
          "Download <b>300mb Movies</b>, 480p Movies, 720p Movies &amp; 1080p movies, Dual Audio Movies &amp; Web series, Netflix WEB Series, Amazon Prime, ALTBalaji, Zee5 and lots&nbsp;...",
        cacheId: "fTHsKE_lc0QJ",
        formattedUrl: "https://vegamovies.page/",
        htmlFormattedUrl: "https://vega<b>movies</b>.page/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYOwMimA7yHuE5mDFiZzuIWy8LuXK0R6nYQ-kDER3ik0YziI-ZcQscuEQ",
              width: "165",
              height: "248",
            },
          ],
          metatags: [
            {
              "og:type": "website",
              "twitter:card": "summary_large_image",
              "twitter:title":
                "Vegamovies.NL - 300mb 480p 720p and 1080p Movies Download",
              "og:site_name": "Vegamovies.NL",
              viewport: "width=device-width, initial-scale=1, maximum-scale=1",
              "twitter:description":
                "Download 300mb Movies, 480p Movies, 720p Movies & 1080p movies, Dual Audio Movies & Web series, Netflix WEB Series, Amazon Prime, ALTBalaji, Zee5 and lots more Series in Dual Audio Hindi and English.",
              "og:title":
                "Vegamovies.NL - 300mb 480p 720p and 1080p Movies Download",
              "og:locale": "en_US",
              "og:url": "https://vegamovies.page/",
              "msapplication-tileimage":
                "https://vegamovies.page/wp-content/uploads/2022/09/v-l.png",
              "og:description":
                "Download 300mb Movies, 480p Movies, 720p Movies & 1080p movies, Dual Audio Movies & Web series, Netflix WEB Series, Amazon Prime, ALTBalaji, Zee5 and lots more Series in Dual Audio Hindi and English.",
            },
          ],
          cse_image: [
            {
              src: "https://vegamovies.page/wp-content/uploads/2022/12/Black-Adam-2022-BluRay-4k-UHD-Vegamovies-165x248.jpg",
            },
          ],
        },
      },
      {
        kind: "customsearch#result",
        title:
          "Mkvmoviespoint - All Quality And All Size Free Dual Audio 300Mb ...",
        htmlTitle:
          "Mkvmoviespoint - All Quality And All Size Free Dual Audio <b>300Mb</b> ...",
        link: "https://mkvmoviespoint.cyou/",
        displayLink: "mkvmoviespoint.cyou",
        snippet:
          "mkvmoviespoint Download moviespoint.in Latest Hindi Full Movies filmywap Bollywood Movies filmyzilla Dual Audio 300mb Movies khatrimaza South Dubbed Movies.",
        htmlSnippet:
          "mkvmoviespoint Download moviespoint.in Latest Hindi Full Movies filmywap Bollywood Movies filmyzilla Dual Audio <b>300mb Movies</b> khatrimaza South Dubbed Movies.",
        cacheId: "L7BdXkbOUGsJ",
        formattedUrl: "https://mkvmoviespoint.cyou/",
        htmlFormattedUrl: "https://mkv<b>movies</b>point.cyou/",
        pagemap: {
          cse_thumbnail: [
            {
              src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkvtQJzsTPrmyEXZPPYFSMGYICAXby8VA5wV32DnlAtgydhof6GOUEhA",
              width: "88",
              height: "132",
            },
          ],
          metatags: [
            {
              "theme-color": "#f57f26",
              "og:type": "website",
              "twitter:card": "summary_large_image",
              "og:site_name": "Mkvmoviespoint",
              viewport: "width=device-width, initial-scale=1.0",
              "og:title": "Mkvmoviespoint",
              "og:locale": "en_US",
              "yandex-verification": "5ba4c805ffac68d4",
              "og:url": "https://mkvmoviespoint.cyou/",
              "msapplication-tileimage":
                "https://mkvmoviespoint.cyou/wp-content/uploads/2020/06/favicon.ico",
              "og:description":
                "mkvmoviespoint Download moviespoint.in Latest Hindi Full Movies filmywap Bollywood Movies filmyzilla Dual Audio 300mb Movies khatrimaza South Dubbed Movies",
            },
          ],
          cse_image: [
            {
              src: "https://i.imgur.com/9o89ywV.jpg",
            },
          ],
        },
      },
    ],
  };
  return search ? (
    <div>
      <NavbarSearch val={search ? search : null} />
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
          totalResults={data.searchInformation.formattedTotalResults}
          searchTime={data.searchInformation.formattedSearchTime}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "50%",
          marginLeft: "12.5%",
          textAlign: "left",
        }}
      >
        {data?.items.map((elem) => (
          <ResultContainer
            link={elem.link}
            displayLink={elem.displayLink}
            title={elem.title}
            snippet={elem.snippet}
          />
        ))}
      </div>
    </div>
  ) : null;
};

export default Searchpage;
