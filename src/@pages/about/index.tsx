import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { FC } from "react";


const Test = () => {
  return (
    <div
      css={css`
        color: red;
      `}
    >
      i will render
    </div>
  );
};

const components = { Test };

export type AboutPageProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const About: FC<AboutPageProps> = ({ source }) => {
  return (
    <Wrapper>
      <h2>test</h2>
      <MDXRemote {...source} components={components} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  -webkit-box-shadow: 4px 4px 14px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 14px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 14px 0px rgba(34, 60, 80, 0.2);
  border-radius: 0.6rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  height: 100vh;
  padding: 1rem;
`;

export default About;
