import { CardProps } from "shared/ui/Card";
import { CategoriesConstants } from "widgets/projects-categories/model/types";

export const projectsArray: CardProps[] = [
  {
    category: CategoriesConstants.Frontend,
    link: "https://github.com/sieugene/dashboard",
    text: "Fullstack dashboard app with dragndrop. [Next,React]",
    title: "Dashboard",
    id: "Dashboard",
  },
  {
    category: CategoriesConstants.Frontend,
    link: "https://github.com/sieugene/Schat",
    text: "Realtime Chat[React,typescript,firebase]",
    title: "Schat",
    id: "Schat",
  },
  {
    category: CategoriesConstants.Backend,
    link: "https://github.com/sieugene/delivery-api",
    text: "Nest js api for delivery app",
    title: "Delivery-api",
    id: "delivery-api",
  },
  {
    category: CategoriesConstants.Frontend,
    link: "https://github.com/sieugene/mf-nextjs",
    text: "Microfrontends using Next.js and Module Federation",
    title: "Mf-nextjs",
    id: "mf-nextjs",
  },
  {
    category: CategoriesConstants.Backend,
    link: "https://github.com/sieugene/buylist",
    text: "Nest.js, graphql/rest api for buylist app",
    title: "Buylist",
    id: "buylist",
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
];

