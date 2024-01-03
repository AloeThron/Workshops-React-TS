import { InstagramIcon } from "../components/instagram";
import { YoutubeIcon } from "../components/youtube";
import {
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

export type UserData = {
  socialMediaName: string;
  icon: React.ReactNode;
  color: string;
  username: string;
  followers?: number | string;
  subscribers?: number | string;
  todayFollowers?: number;
  todaySubscribers?: number;
};

export interface OverviewDataType {
  type: string;
  count: number | string;
  percentage: number;
  icon: React.ReactNode;
  color: string;
}

const colors = {
  "facebook-blue": "hsl(208, 92%, 53%)",
  "twitter-blue": "hsl(203, 89%, 53%)",
  "youtube-red": "hsl(348, 97%, 39%)",
  "instagram-gradient":
    "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
};

export const data: UserData[] = [
  {
    socialMediaName: "facebook",
    icon: <AiFillFacebook />,
    username: "@someone",
    followers: 1987,
    todayFollowers: 12,
    color: colors["facebook-blue"],
  },
  {
    socialMediaName: "twitter",
    icon: <AiOutlineTwitter />,
    username: "@someone",
    followers: 1044,
    todayFollowers: 99,
    color: colors["twitter-blue"],
  },
  {
    socialMediaName: "instagram",
    icon: <InstagramIcon />,
    username: "@someone",
    followers: "11200",
    todayFollowers: 1099,
    color: colors["instagram-gradient"],
  },
  {
    socialMediaName: "youtube",
    icon: <YoutubeIcon />,
    username: "someone",
    subscribers: 8239,
    todaySubscribers: -144,
    color: colors["youtube-red"],
  },
];

export const OverviewData: OverviewDataType[] = [
  {
    type: "Page Views",
    count: 87,
    percentage: 3,
    icon: <AiFillFacebook className=" text-facebook-blue " />,
    color: colors["facebook-blue"],
  },
  {
    type: "Likes",
    count: 52,
    percentage: 2,
    icon: <AiFillFacebook className=" text-facebook-blue " />,
    color: colors["facebook-blue"],
  },
  {
    type: "Likes",
    count: 5462,
    percentage: 2257,
    icon: <InstagramIcon />,
    color: colors["instagram-gradient"],
  },
  {
    type: "Profile Views",
    count: "52K",
    percentage: 1375,
    icon: <InstagramIcon />,
    color: colors["instagram-gradient"],
  },
  {
    type: "Retweets",
    count: 117,
    percentage: 303,
    icon: <AiOutlineTwitter className=" text-twitter-blue " />,
    color: colors["twitter-blue"],
  },
  {
    type: "Likes",
    count: 507,
    percentage: 553,
    icon: <AiOutlineTwitter className=" text-twitter-blue " />,
    color: colors["twitter-blue"],
  },
  {
    type: "Likes",
    count: 107,
    percentage: -19,
    icon: <YoutubeIcon />,
    color: colors["youtube-red"],
  },
  {
    type: "Total Views",
    count: 1407,
    percentage: -12,
    icon: <YoutubeIcon />,
    color: colors["youtube-red"],
  },
];
