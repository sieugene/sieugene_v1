import Identicon from "identicon.js";

// Generate hash for Identicon
const cyrb53 = function (str: string, seed = 0) {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
// Genereate image
export const generateIdenticon = (value: string, size = 100) => {
  try {
    const hash = cyrb53(value)?.toString();
    const options = {
      // background: [255, 255, 255, 255],
      margin: 0.2,
      size,
      format: "svg",
    };
    // @ts-ignore
    const data = new Identicon(hash, options).toString();
    return `data:image/svg+xml;base64,${data}`;
  } catch (error) {
    return "";
  }
};
