import { CardProps } from "shared/ui/Card";
import { CategoriesConstants } from "widgets/projects-categories/model/types";

export const projectsArray: CardProps[] = [
  {
    category: CategoriesConstants.Other,
    link: "https://github.com/Alium-Finance",
    text: "Contibute DEFI project.",
    title: "DEFI project",
    id: "DEFI",
  },
  {
    category: CategoriesConstants.Frontend,
    link: "https://github.com/sieugene/dashboard",
    text: "Fullstack dashboard app with dragndrop. [Next,React]",
    title: "Dashboard",
    id: "Dashboard",
  },
  {
    category: CategoriesConstants.Frontend,
    link: "https://github.com/clowns-party/animeover-frontend",
    text: "Encyclopedia of anime, ongoings, genre division and more. Making your own list and rating. [Next, React]",
    title: "animeover-frontend",
    id: "animeover-frontend",
  },
  {
    category: CategoriesConstants.Frontend,
    link: "https://github.com/clowns-party/buylist-frontend",
    text: "Think through your shopping list, mark it on a map, add friends. [Next, apollo, tailwind]",
    title: "buylist-frontend",
    id: "buylist-frontend",
  },
  {
    category: CategoriesConstants.Frontend,
    link: "https://github.com/sieugene/Schat",
    text: "Simple web messenger. [React,typescript,firebase]",
    title: "Schat",
    id: "Schat",
  },
  {
    category: CategoriesConstants.Backend,
    link: "https://github.com/sieugene/delivery-api",
    text: "Nest js api for delivery app. (Nest, 2FA, graphql, realtime, redis, postgres, elastic search, Aws s3)",
    title: "Delivery-api",
    id: "delivery-api",
  },
  {
    category: CategoriesConstants.Backend,
    link: "https://github.com/clowns-party/animeover",
    text: "API for animeover. [firebase,typescript,tsoa]",
    title: "animeover-api",
    id: "animeover-api",
  },
  {
    category: CategoriesConstants.Backend,
    link: "https://github.com/clowns-party/buylist",
    text: "Graphql endpoint and REST api for buylist app. [Nest, redis,postgres, typeorm]",
    title: "buylist",
    id: "buylist-api",
  },

  {
    category: CategoriesConstants.Backend,
    link: "https://github.com/sieugene/nft-marketplace-backend",
    text: "Prepare metadata for ERC1155 and deploy (with preview on opensea)",
    title: "Nft-marketplace-backend",
    id: "nft-marketplace-backend",
  },
  {
    category: CategoriesConstants.Blockchain,
    link: "https://github.com/sieugene/nft-marketplace-solidity",
    text: "ERC1155 smart contract",
    title: "Nft-marketplace-solidity",
    id: "nft-marketplace-solidity",
  },
  {
    category: CategoriesConstants.Blockchain,
    link: "https://github.com/sieugene/dvideo",
    text: "Upload video on ipfs and smart contract for dvideo",
    title: "Dvideo",
    id: "dvideo",
  },
  {
    category: CategoriesConstants.Mobile,
    link: "https://github.com/sieugene/rate-interview",
    text: "Mobile application for evaluating companies and vacancies. [react-native]",
    title: "Rate-interview",
    id: "rate-interview",
  },
];
