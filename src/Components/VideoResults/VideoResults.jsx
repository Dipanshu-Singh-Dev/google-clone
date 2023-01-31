import React from "react";
import { useSelector } from "react-redux";
import VideoContainer from "../VideoContainer/VideoContainer";
import { motion } from "framer-motion";
import variants from "../GlobalVariables/FramerVariants";
import styles from "./VideoResults.module.css";
const key = "AIzaSyDkNAovVDt9mhVvpkPLuVOZBkoyySYKP2c";
const VideoResults = () => {
  const search = useSelector((data) => data.search);
  let [loading, setLoading] = React.useState(false);
  let [Error, setError] = React.useState(false);
  const [results, setResults] = React.useState();
  React.useEffect(() => {
    fetch(
      `https://pixabay.com/api/videos/?key=33257373-bf64c232f02301ff9dc0aa075&q=${search}
  `
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setError(false);
        setResults(data);
        console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [search]);
  // const results = {
  //   total: 80,
  //   totalHits: 80,
  //   hits: [
  //     {
  //       id: 15211,
  //       pageURL: "https://pixabay.com/videos/id-15211/",
  //       type: "film",
  //       tags: "crocus, blossom, bloom",
  //       duration: 22,
  //       picture_id:
  //         "691345725-3a150c53be4f403ac9b3e4360ef168d31f539483d41ef6f267a82c14347a8365-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/262150448/Crocus%20-%2015211.mp4?width=3840&hash=0cbbeee34f69b47b68f38c01659b9dfe64e67701",
  //           height: 2160,
  //           width: 3840,
  //           size: 25393791,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/262150448/Crocus%20-%2015211.mp4?width=2560&hash=4bf5f0e1deb61ef7170921a0fe4183036f124a87",
  //           width: 2560,
  //           height: 1440,
  //           size: 8985816,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/262150448/Crocus%20-%2015211.mp4?width=1920&hash=3a4cf0b7422cccc2485f8ee03e586bc4fdd44b0f",
  //           width: 1920,
  //           height: 1080,
  //           size: 5438738,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/262150448/Crocus%20-%2015211.mp4?width=1280&hash=6c68ad2196e081aab89fa59c91c76a0f23dd6401",
  //           width: 1280,
  //           height: 720,
  //           size: 2381708,
  //         },
  //       },
  //       views: 48454,
  //       downloads: 29272,
  //       likes: 342,
  //       comments: 79,
  //       user_id: 4994132,
  //       user: "adege",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2022/04/26/15-17-47-992_250x250.jpg",
  //     },
  //     {
  //       id: 145498,
  //       pageURL: "https://pixabay.com/videos/id-145498/",
  //       type: "film",
  //       tags: "flower, flora, blossom",
  //       duration: 50,
  //       picture_id:
  //         "1582259855-87ac9c4a1031a8c841d9faadca575251604ccc8814cf5df2d2bb4f93f56bab5c-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/787039571/Flower%20-%20145498.mp4?width=1920&hash=ae10cc9f0fb948474fea27cda8962205e0d47ac2",
  //           width: 1920,
  //           height: 1080,
  //           size: 30571068,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/787039571/Flower%20-%20145498.mp4?width=1280&hash=ead05bccf122d7510e90fe770b0f0fd8e4e85a91",
  //           width: 1280,
  //           height: 720,
  //           size: 17415085,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/787039571/Flower%20-%20145498.mp4?width=960&hash=eef99e8afa5f875e0603cf41091a3506dcead658",
  //           width: 960,
  //           height: 540,
  //           size: 11718787,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/787039571/Flower%20-%20145498.mp4?width=640&hash=52457e34ede9f48ec282b0d9e7769eb7f76ae6e7",
  //           width: 640,
  //           height: 360,
  //           size: 6151989,
  //         },
  //       },
  //       views: 4568,
  //       downloads: 2637,
  //       likes: 56,
  //       comments: 21,
  //       user_id: 10327513,
  //       user: "NickyPe",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2023/01/24/08-17-08-108_250x250.jpg",
  //     },
  //     {
  //       id: 64035,
  //       pageURL: "https://pixabay.com/videos/id-64035/",
  //       type: "film",
  //       tags: "flowers, garden, field",
  //       duration: 14,
  //       picture_id:
  //         "1053595864-aa5c34559a8368f6cc94dbc50be155da61211b99fb8678e0f7d45f1288ac14f0-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/509068427/Flowers%20-%2064035.mp4?width=1920&hash=6378c73026f06ada40902a8222e5c3cd5621e432",
  //           width: 1920,
  //           height: 1080,
  //           size: 10667315,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/509068427/Flowers%20-%2064035.mp4?width=1280&hash=39c1587a9f8e68eb074cb0445375f7709c6f938b",
  //           width: 1280,
  //           height: 720,
  //           size: 4846521,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/509068427/Flowers%20-%2064035.mp4?width=960&hash=d49e4afe7097bcedf5ccfefa3e4765ca286a739b",
  //           width: 960,
  //           height: 540,
  //           size: 3279092,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/509068427/Flowers%20-%2064035.mp4?width=640&hash=73450e0fe1a963192afe67f5273a8ea7cb4c1ebf",
  //           width: 640,
  //           height: 360,
  //           size: 1181644,
  //         },
  //       },
  //       views: 20054,
  //       downloads: 13403,
  //       likes: 148,
  //       comments: 40,
  //       user_id: 7703165,
  //       user: "KIMDAEJEUNG",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2022/12/08/04-50-50-632_250x250.jpg",
  //     },
  //     {
  //       id: 37611,
  //       pageURL: "https://pixabay.com/videos/id-37611/",
  //       type: "film",
  //       tags: "butterfly, dandelion, wind",
  //       duration: 27,
  //       picture_id:
  //         "886985285-b2249abe7c6abce491b5c14a270d74b183a3bf6bfe63186fab6bb8087bd81376-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/414086240/Butterfly%20-%2037611.mp4?width=1920&hash=255ab0f6b24618650daa6a45e1b3021be457d351",
  //           width: 1920,
  //           height: 1080,
  //           size: 11766979,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/414086240/Butterfly%20-%2037611.mp4?width=1280&hash=f9d56301fa4d679f8aeb1b83845fbcb1c2410d41",
  //           width: 1280,
  //           height: 720,
  //           size: 4773119,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/414086240/Butterfly%20-%2037611.mp4?width=960&hash=e33f896fe283cfa767c0b2b297f7a23d776382f3",
  //           width: 960,
  //           height: 540,
  //           size: 2971069,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/414086240/Butterfly%20-%2037611.mp4?width=640&hash=08db6b52f6603d4341f9833e84aecb7b16becb00",
  //           width: 640,
  //           height: 360,
  //           size: 1456486,
  //         },
  //       },
  //       views: 10663,
  //       downloads: 7206,
  //       likes: 105,
  //       comments: 31,
  //       user_id: 7703165,
  //       user: "KIMDAEJEUNG",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2022/12/08/04-50-50-632_250x250.jpg",
  //     },
  //     {
  //       id: 90084,
  //       pageURL: "https://pixabay.com/videos/id-90084/",
  //       type: "film",
  //       tags: "yellow flower, cosmos, wind",
  //       duration: 44,
  //       picture_id:
  //         "1260562029-1b1f9f325c9c81199a7d31712b26d8d1b2b7944d26a28fd29",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/618449906/Yellow%20Flower%20-%2090084.mp4?width=3840&hash=2ca95f1ccc752f6ccc243b689d510915e9bf3414",
  //           width: 3840,
  //           height: 2160,
  //           size: 60959376,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/618449906/Yellow%20Flower%20-%2090084.mp4?width=2560&hash=b72280e92bfee4c4c2edf2ad9cea6636af1bf9f8",
  //           width: 2560,
  //           height: 1440,
  //           size: 27699022,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/618449906/Yellow%20Flower%20-%2090084.mp4?width=1920&hash=54403dcade6e75908dc860e06fc96eba02086b2c",
  //           width: 1920,
  //           height: 1080,
  //           size: 17205709,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/618449906/Yellow%20Flower%20-%2090084.mp4?width=1280&hash=936e2fd9d804ea6617b0f4bc07300ffef9df559d",
  //           width: 1280,
  //           height: 720,
  //           size: 8127823,
  //         },
  //       },
  //       views: 5669,
  //       downloads: 3822,
  //       likes: 69,
  //       comments: 11,
  //       user_id: 7703165,
  //       user: "KIMDAEJEUNG",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2022/12/08/04-50-50-632_250x250.jpg",
  //     },
  //     {
  //       id: 90090,
  //       pageURL: "https://pixabay.com/videos/id-90090/",
  //       type: "film",
  //       tags: "flowers, yellow cosmos, wind",
  //       duration: 42,
  //       picture_id:
  //         "1262556686-7bd43bc4cd216dcccb4060cdddbb3f4e43493421b8004ce8d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/620258401/Flowers%20-%2090090.mp4?width=3840&hash=38609affdbfb5f33b7993b68d78f7b574321e3b9",
  //           width: 3840,
  //           height: 2160,
  //           size: 78532870,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/620258401/Flowers%20-%2090090.mp4?width=2560&hash=85a35eb1644fc538a4fa6035b66998cc52b8bb87",
  //           width: 2560,
  //           height: 1440,
  //           size: 47118969,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/620258401/Flowers%20-%2090090.mp4?width=1920&hash=b2867b4818c728e3411efc681c5e9d7f84f4aaa1",
  //           width: 1920,
  //           height: 1080,
  //           size: 27769696,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/620258401/Flowers%20-%2090090.mp4?width=1280&hash=09d864edf80cb111b797426ea7c05197e16f6a4c",
  //           width: 1280,
  //           height: 720,
  //           size: 13554166,
  //         },
  //       },
  //       views: 4296,
  //       downloads: 2833,
  //       likes: 49,
  //       comments: 15,
  //       user_id: 7703165,
  //       user: "KIMDAEJEUNG",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2022/12/08/04-50-50-632_250x250.jpg",
  //     },
  //     {
  //       id: 128144,
  //       pageURL: "https://pixabay.com/videos/id-128144/",
  //       type: "film",
  //       tags: "flower, flora, blossom",
  //       duration: 20,
  //       picture_id:
  //         "1490703934-a17a2d9b5bc7fb1fb7cfd79f93df5a273b26ae76f320dd986e9a616201522705-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/740854627/Flower%20-%20128144.mp4?width=3840&hash=67dede3cb93c90603a4c7b9b098aee53f63aeb20",
  //           width: 3840,
  //           height: 2160,
  //           size: 35612176,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/740854627/Flower%20-%20128144.mp4?width=2560&hash=011c2ce4cbc5770e2897aee43089f50eaf8308f1",
  //           width: 2560,
  //           height: 1440,
  //           size: 16786564,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/740854627/Flower%20-%20128144.mp4?width=1920&hash=2aa38ea950fbf606270bb0c71d6a1b1c8e57c80f",
  //           width: 1920,
  //           height: 1080,
  //           size: 10929864,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/740854627/Flower%20-%20128144.mp4?width=1280&hash=29a63733243919efab463a787b41e7474e30f441",
  //           width: 1280,
  //           height: 720,
  //           size: 5952344,
  //         },
  //       },
  //       views: 8527,
  //       downloads: 5154,
  //       likes: 90,
  //       comments: 5,
  //       user_id: 10327513,
  //       user: "NickyPe",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2023/01/24/08-17-08-108_250x250.jpg",
  //     },
  //     {
  //       id: 46313,
  //       pageURL: "https://pixabay.com/videos/id-46313/",
  //       type: "film",
  //       tags: "spring, field, yellow",
  //       duration: 32,
  //       picture_id:
  //         "939648518-988be4ac5106e26e1f846dc26e2e432d5d3b5f84f5aa8a50c223dcaba73fa896-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/447431424/Spring%20-%2046313.mp4?width=3840&hash=7a0b6f8a98b90f36646d28dc827967b8d8900d34",
  //           width: 3840,
  //           height: 2160,
  //           size: 100559113,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/447431424/Spring%20-%2046313.mp4?width=2560&hash=634838cd283b2937d14959f63e2bb6f43cabfe8f",
  //           width: 2560,
  //           height: 1440,
  //           size: 54799393,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/447431424/Spring%20-%2046313.mp4?width=1920&hash=1b37296d26b630241a5ee7c01b3a1ed743c72cfa",
  //           width: 1920,
  //           height: 1080,
  //           size: 23613469,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/447431424/Spring%20-%2046313.mp4?width=1280&hash=abe88173f05f0eecea917a9f65750a7bdf618cca",
  //           width: 1280,
  //           height: 720,
  //           size: 12383516,
  //         },
  //       },
  //       views: 7126,
  //       downloads: 3428,
  //       likes: 56,
  //       comments: 10,
  //       user_id: 17758035,
  //       user: "jlankiewicz",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2020/08/03/18-34-55-29_250x250.jpg",
  //     },
  //     {
  //       id: 16142,
  //       pageURL: "https://pixabay.com/videos/id-16142/",
  //       type: "film",
  //       tags: "flowering, flowers, yellow",
  //       duration: 5,
  //       picture_id:
  //         "700476346-417099394747d4967005de22c7e4021f2faf2eb90cc8b1713de8250031592fa9-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/269534726/Flowering%20-%2016142.mp4?width=1920&hash=9c315b87c4948aa9c5144945543e50ec743d4685",
  //           width: 1920,
  //           height: 1080,
  //           size: 3328993,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/269534726/Flowering%20-%2016142.mp4?width=1280&hash=8a7234b181754eabd9edf2fc327ed51d9575a0bd",
  //           width: 1280,
  //           height: 720,
  //           size: 1768836,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/269534726/Flowering%20-%2016142.mp4?width=960&hash=5fbde1873babd9c3847f6c21f9f7b7482b4f5aca",
  //           width: 960,
  //           height: 540,
  //           size: 1110146,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/269534726/Flowering%20-%2016142.mp4?width=640&hash=b754ad0fb87c591ab7b44f12a8d8ec581a76eed8",
  //           width: 640,
  //           height: 360,
  //           size: 398635,
  //         },
  //       },
  //       views: 5263,
  //       downloads: 1719,
  //       likes: 21,
  //       comments: 2,
  //       user_id: 8632846,
  //       user: "AcornStudioSpain",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2018/04/09/07-34-47-890_250x250.jpg",
  //     },
  //     {
  //       id: 128141,
  //       pageURL: "https://pixabay.com/videos/id-128141/",
  //       type: "film",
  //       tags: "flower, blossom, yellow",
  //       duration: 25,
  //       picture_id:
  //         "1490702627-bbb0d4a8c4cfb1ea175f5aef5f6079a3adf98a861dd6859e8b1a0ef5ffe88207-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/740854614/Flower%20-%20128141.mp4?width=3840&hash=16ee0b84eafa5abeed608858960fd0e69061ff84",
  //           width: 3840,
  //           height: 2160,
  //           size: 56778080,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/740854614/Flower%20-%20128141.mp4?width=2560&hash=878944be99591313f2e2071a6507d73527e77cbe",
  //           width: 2560,
  //           height: 1440,
  //           size: 34201666,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/740854614/Flower%20-%20128141.mp4?width=1920&hash=ec115476b1524fd96e3169584c96cdfc509f7a82",
  //           width: 1920,
  //           height: 1080,
  //           size: 18670746,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/740854614/Flower%20-%20128141.mp4?width=1280&hash=f878a8e9b61c51eb113b61578bf74792e03b412b",
  //           width: 1280,
  //           height: 720,
  //           size: 9638408,
  //         },
  //       },
  //       views: 3557,
  //       downloads: 2381,
  //       likes: 58,
  //       comments: 5,
  //       user_id: 10327513,
  //       user: "NickyPe",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2023/01/24/08-17-08-108_250x250.jpg",
  //     },
  //     {
  //       id: 27323,
  //       pageURL: "https://pixabay.com/videos/id-27323/",
  //       type: "film",
  //       tags: "bee, sunflower, yellow",
  //       duration: 47,
  //       picture_id:
  //         "820342131-cb1d5500c224841a5cdd015b30800ad392d5a334b9642dd4db92a65642e026b4-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/364810678/Bee%20-%2027323.mp4?width=1920&hash=99c0fb2b051c40e7a91d7186a03b4f93a58b7689",
  //           width: 1920,
  //           height: 1080,
  //           size: 33976510,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/364810678/Bee%20-%2027323.mp4?width=1280&hash=8ab39f0b1efd2f78a50d16c48fe865057cff2e9c",
  //           width: 1280,
  //           height: 720,
  //           size: 17712838,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/364810678/Bee%20-%2027323.mp4?width=960&hash=d279f8ac0777c3845ab56019965dd2d1ad4e256c",
  //           width: 960,
  //           height: 540,
  //           size: 10292623,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/364810678/Bee%20-%2027323.mp4?width=640&hash=9b88bba286d7f825a77189f210df4cf5806c92b2",
  //           width: 640,
  //           height: 360,
  //           size: 3720940,
  //         },
  //       },
  //       views: 6697,
  //       downloads: 3768,
  //       likes: 43,
  //       comments: 33,
  //       user_id: 8757289,
  //       user: "satynek",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2019/05/08/20-16-30-117_250x250.jpg",
  //     },
  //     {
  //       id: 15340,
  //       pageURL: "https://pixabay.com/videos/id-15340/",
  //       type: "film",
  //       tags: "yellow, flower, spring",
  //       duration: 23,
  //       picture_id:
  //         "692317739-e0240c733ba48223f2b197e926f2d25b51d7a9d87fa81c5666e258d32f6b5b47-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/262921911/Yellow%20-%2015340.mp4?width=1920&hash=5991297ece8f0bb41b8bc2e3ba4038ef0a449450",
  //           width: 1920,
  //           height: 1080,
  //           size: 7396843,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/262921911/Yellow%20-%2015340.mp4?width=1280&hash=a0a227eae56b13ef6d61d7866da0a67acd963af5",
  //           width: 1280,
  //           height: 720,
  //           size: 2130089,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/262921911/Yellow%20-%2015340.mp4?width=960&hash=c15f8899c9078a382f69f61adf1c68159303c609",
  //           width: 960,
  //           height: 540,
  //           size: 1273711,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/262921911/Yellow%20-%2015340.mp4?width=640&hash=ee67a0193531e47066b2bb0629c0fee1779d74be",
  //           width: 640,
  //           height: 360,
  //           size: 620833,
  //         },
  //       },
  //       views: 3760,
  //       downloads: 1929,
  //       likes: 32,
  //       comments: 4,
  //       user_id: 5099306,
  //       user: "kieutruongphoto",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2021/09/03/12-10-14-149_250x250.jpg",
  //     },
  //     {
  //       id: 90089,
  //       pageURL: "https://pixabay.com/videos/id-90089/",
  //       type: "film",
  //       tags: "flowers, yellow cosmos, wind",
  //       duration: 39,
  //       picture_id:
  //         "1262556668-e50915145ff8dea82537019ba4a32f6859742d153839306f0",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/620258393/Flowers%20-%2090089.mp4?width=3840&hash=06eb6ce31958a28aa6d55ddafc103f1888171f82",
  //           width: 3840,
  //           height: 2160,
  //           size: 51480717,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/620258393/Flowers%20-%2090089.mp4?width=2560&hash=fd7778f2e4ff281de899d4fb1a9a47e2123f49ab",
  //           width: 2560,
  //           height: 1440,
  //           size: 21869522,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/620258393/Flowers%20-%2090089.mp4?width=1920&hash=dbf3a81c86ab7dbda67b17f8c0dda92b07990c12",
  //           width: 1920,
  //           height: 1080,
  //           size: 13397989,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/620258393/Flowers%20-%2090089.mp4?width=1280&hash=638114cde86b6f217e9cc1d56784ea2f99dc0a87",
  //           width: 1280,
  //           height: 720,
  //           size: 6258231,
  //         },
  //       },
  //       views: 1219,
  //       downloads: 885,
  //       likes: 31,
  //       comments: 2,
  //       user_id: 7703165,
  //       user: "KIMDAEJEUNG",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2022/12/08/04-50-50-632_250x250.jpg",
  //     },
  //     {
  //       id: 43324,
  //       pageURL: "https://pixabay.com/videos/id-43324/",
  //       type: "film",
  //       tags: "yellow flower, yellow, sunflower",
  //       duration: 12,
  //       picture_id:
  //         "920524815-fb140986790480ad558de9b2631098fbe9c0bd33bbf03c42f51eee3db7cffe78-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/436041449/Yellow%20Flower%20-%2043324.mp4?width=1920&hash=e487e74a387438b462d3d6478e2d84afc7b22fc1",
  //           width: 1920,
  //           height: 1080,
  //           size: 6376242,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/436041449/Yellow%20Flower%20-%2043324.mp4?width=1280&hash=e506c0bcc950e36d964b3b4de3033449b71d0936",
  //           width: 1280,
  //           height: 720,
  //           size: 2889677,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/436041449/Yellow%20Flower%20-%2043324.mp4?width=960&hash=e03b208482bf30455f87bf53f05dc88102efe13b",
  //           width: 960,
  //           height: 540,
  //           size: 1897932,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/436041449/Yellow%20Flower%20-%2043324.mp4?width=640&hash=fa293c3f1657c484db7c72ca2d6ffb0c74d5c2f4",
  //           width: 640,
  //           height: 360,
  //           size: 724449,
  //         },
  //       },
  //       views: 6125,
  //       downloads: 3426,
  //       likes: 55,
  //       comments: 16,
  //       user_id: 16383021,
  //       user: "104paul",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2020/05/05/12-44-42-244_250x250.jpeg",
  //     },
  //     {
  //       id: 122438,
  //       pageURL: "https://pixabay.com/videos/id-122438/",
  //       type: "film",
  //       tags: "aster, flower, yellow",
  //       duration: 16,
  //       picture_id:
  //         "1460545332-6b6c9f10c213d00f22b96781ec1717b9cc578c446b190291e342645f47f32f6f-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/725502732/Aster%20-%20122438.mp4?width=3840&hash=937e2c64580f22c1f03f4e3135d49152ccf33e40",
  //           width: 3840,
  //           height: 2160,
  //           size: 19595800,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/725502732/Aster%20-%20122438.mp4?width=2560&hash=d22f33f1a47203a1e534e38cefe971dcef670918",
  //           width: 2560,
  //           height: 1440,
  //           size: 8221750,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/725502732/Aster%20-%20122438.mp4?width=1920&hash=e9d485c1a1d5d39c17ae459b27b74bac272f5d34",
  //           width: 1920,
  //           height: 1080,
  //           size: 5267595,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/725502732/Aster%20-%20122438.mp4?width=1280&hash=3636966fbca1663cd68180949db77a78a87fe944",
  //           width: 1280,
  //           height: 720,
  //           size: 2725133,
  //         },
  //       },
  //       views: 2177,
  //       downloads: 1371,
  //       likes: 41,
  //       comments: 0,
  //       user_id: 10327513,
  //       user: "NickyPe",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2023/01/24/08-17-08-108_250x250.jpg",
  //     },
  //     {
  //       id: 128138,
  //       pageURL: "https://pixabay.com/videos/id-128138/",
  //       type: "film",
  //       tags: "flower, blossom, yellow",
  //       duration: 23,
  //       picture_id:
  //         "1490702925-74e13e389ac995fecda2df281c0b7696e0c99d16dd395b808ab92f1d141bda9d-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/740854604/Flower%20-%20128138.mp4?width=3840&hash=e174762fecc6f18916a608a91f94ae16c1ba9bf8",
  //           width: 3840,
  //           height: 2160,
  //           size: 41845871,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/740854604/Flower%20-%20128138.mp4?width=2560&hash=82d62c083434623a6bcc4451e535a7525080fae4",
  //           width: 2560,
  //           height: 1440,
  //           size: 21357396,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/740854604/Flower%20-%20128138.mp4?width=1920&hash=787856a3dd8b6d9b4924a5352eda82eec1bc2750",
  //           width: 1920,
  //           height: 1080,
  //           size: 14283407,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/740854604/Flower%20-%20128138.mp4?width=1280&hash=6fa1912c02e98dabcfa174d12cf465c8614d6566",
  //           width: 1280,
  //           height: 720,
  //           size: 8115902,
  //         },
  //       },
  //       views: 1639,
  //       downloads: 1040,
  //       likes: 39,
  //       comments: 5,
  //       user_id: 10327513,
  //       user: "NickyPe",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2023/01/24/08-17-08-108_250x250.jpg",
  //     },
  //     {
  //       id: 109162,
  //       pageURL: "https://pixabay.com/videos/id-109162/",
  //       type: "film",
  //       tags: "flower, butterfly, wildflower",
  //       duration: 26,
  //       picture_id:
  //         "1385794653-2782aebb2cffd26f1dfd236c57c190f2e6b7c98b2dd78bda4b73dba78e360af7-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/683572810/Flower%20-%20109162.mp4?width=1920&hash=f7ee5abbd792ff86cd51e6d1e94fffc14c8bd6ff",
  //           width: 1920,
  //           height: 1080,
  //           size: 18822251,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/683572810/Flower%20-%20109162.mp4?width=1280&hash=39bc3c57a9a7e5b8fdf56c62633c25c8d4000fd0",
  //           width: 1280,
  //           height: 720,
  //           size: 10109882,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/683572810/Flower%20-%20109162.mp4?width=960&hash=d54624f224d29eadc89af6150d6e028ddedff6c6",
  //           width: 960,
  //           height: 540,
  //           size: 6182732,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/683572810/Flower%20-%20109162.mp4?width=640&hash=e3967fb411d5d8d128dd094e53144a19d6f7660c",
  //           width: 640,
  //           height: 360,
  //           size: 2231001,
  //         },
  //       },
  //       views: 1468,
  //       downloads: 963,
  //       likes: 26,
  //       comments: 7,
  //       user_id: 7703165,
  //       user: "KIMDAEJEUNG",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2022/12/08/04-50-50-632_250x250.jpg",
  //     },
  //     {
  //       id: 107623,
  //       pageURL: "https://pixabay.com/videos/id-107623/",
  //       type: "film",
  //       tags: "daffodils, windmill, wind",
  //       duration: 26,
  //       picture_id:
  //         "1375101431-ad46d551b31739f0239e6d35e8e0852bb8e724cbdd371870a28f3ae2080545c2-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/678540807/Daffodils%20-%20107623.mp4?width=3840&hash=a1273f182428f2e06677339a68245029554b4455",
  //           width: 3840,
  //           height: 2160,
  //           size: 48414006,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/678540807/Daffodils%20-%20107623.mp4?width=2560&hash=716e8db1055e730c88aa36f937ae382427116fa8",
  //           width: 2560,
  //           height: 1440,
  //           size: 22235303,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/678540807/Daffodils%20-%20107623.mp4?width=1920&hash=1a5fc5c4ffb45bce7541324d76dc2f1d93803cfc",
  //           width: 1920,
  //           height: 1080,
  //           size: 13786870,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/678540807/Daffodils%20-%20107623.mp4?width=1280&hash=a5b7583214fdebe8e7806171db708d66158e8818",
  //           width: 1280,
  //           height: 720,
  //           size: 6894905,
  //         },
  //       },
  //       views: 1562,
  //       downloads: 872,
  //       likes: 26,
  //       comments: 18,
  //       user_id: 12752456,
  //       user: "mariya_m",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2022/12/12/21-18-46-221_250x250.jpeg",
  //     },
  //     {
  //       id: 127946,
  //       pageURL: "https://pixabay.com/videos/id-127946/",
  //       type: "film",
  //       tags: "mixed silphie, flower, yellow",
  //       duration: 16,
  //       picture_id:
  //         "1488606875-61127a8dfa4ac91b5f505d007a90e16294ea339c94f2fe58677844fcff734d38-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/739712364/Mixed%20Silphie%20-%20127946.mp4?width=3840&hash=50b4d720671cd80374b497cd81a9877d3218ea81",
  //           width: 3840,
  //           height: 2160,
  //           size: 52830201,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/739712364/Mixed%20Silphie%20-%20127946.mp4?width=2560&hash=417548986fd238526e4e57050b64bc53bca916a7",
  //           width: 2560,
  //           height: 1440,
  //           size: 29035360,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/739712364/Mixed%20Silphie%20-%20127946.mp4?width=1920&hash=debeb764bee095a6f0e849eba1b6e87214034e33",
  //           width: 1920,
  //           height: 1080,
  //           size: 12332273,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/739712364/Mixed%20Silphie%20-%20127946.mp4?width=1280&hash=e08229265a6ef2a7ee9cc60684fcd236f4a114bd",
  //           width: 1280,
  //           height: 720,
  //           size: 6329236,
  //         },
  //       },
  //       views: 1610,
  //       downloads: 1057,
  //       likes: 41,
  //       comments: 1,
  //       user_id: 10327513,
  //       user: "NickyPe",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2023/01/24/08-17-08-108_250x250.jpg",
  //     },
  //     {
  //       id: 128142,
  //       pageURL: "https://pixabay.com/videos/id-128142/",
  //       type: "film",
  //       tags: "mixed silphie, flower, yellow",
  //       duration: 22,
  //       picture_id:
  //         "1490704532-d839a9c7a24bc1774172f262c12af93ba3b64104ca4dfdce6931abcfcc3581e6-d",
  //       videos: {
  //         large: {
  //           url: "https://cdn.pixabay.com/vimeo/740854621/Mixed%20Silphie%20-%20128142.mp4?width=3840&hash=eb6cc35150b883be169c423c0ad5b71c71886335",
  //           width: 3840,
  //           height: 2160,
  //           size: 72454738,
  //         },
  //         medium: {
  //           url: "https://cdn.pixabay.com/vimeo/740854621/Mixed%20Silphie%20-%20128142.mp4?width=2560&hash=35565f5f6a45c1caf940f4c38a55b0055ae9799f",
  //           width: 2560,
  //           height: 1440,
  //           size: 39853103,
  //         },
  //         small: {
  //           url: "https://cdn.pixabay.com/vimeo/740854621/Mixed%20Silphie%20-%20128142.mp4?width=1920&hash=7326cbf5894791900e5c13c7ad4d44c745240995",
  //           width: 1920,
  //           height: 1080,
  //           size: 16926469,
  //         },
  //         tiny: {
  //           url: "https://cdn.pixabay.com/vimeo/740854621/Mixed%20Silphie%20-%20128142.mp4?width=1280&hash=3dbb1468524e3e6188938d46dbcb4166db01ba79",
  //           width: 1280,
  //           height: 720,
  //           size: 8794380,
  //         },
  //       },
  //       views: 1546,
  //       downloads: 825,
  //       likes: 38,
  //       comments: 0,
  //       user_id: 10327513,
  //       user: "NickyPe",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2023/01/24/08-17-08-108_250x250.jpg",
  //     },
  //   ],
  // };
  return loading ? (
    <p>Loading</p>
  ) : Error ? (
    <p>Something went wrong</p>
  ) : (
    <div className={styles.container}>
      {results?.hits.map((elem) => {
        return (
          <motion.div
            variants={variants}
            initial="normal"
            whileHover="hover"
            whileTap="click"
            whileInView="inView"
          >
            <VideoContainer elem={elem} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default VideoResults;
