import { About } from "@pages";
import { AboutPageProps } from "@pages/about";
import { GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  // MDX text - can be from a local file, database, anywhere
  const source = "Some **mdx** text, with a component <Test />";
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
};

export default About;
