import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BaseButton } from "..";

const Topic = () => {
  return (
    <Layout>
      <div
        css={css`
          margin-right: 10px;
          max-width: 300px;
        `}
      >
        <Card
          css={css`
            background: #121111;
            color: white;
            margin-bottom: 10px;
          `}
        >
          <p
            css={css`
              margin-bottom: 10px;
              font-weight: 100;
              color: #a4a4a4;
            `}
          >
            Этот блок приветсвует тебя. <br />
            Вебсайт представляет собой некий блог обо мне и веб технологиях.
          </p>
        </Card>
        <Card
          css={css`
            background: #2a2a2a;
            color: white;
          `}
        >
          <p>Проекты по категориям/стэку</p>
          <BaseButton
            css={css`
              margin-top: 10px;
              justify-content: center;
            `}
          >
            Тык
          </BaseButton>
        </Card>
      </div>
      <div>
        <Card
          css={css`
            max-width: 410px;
            width: 100%;
            background-color: #f5e765;
            color: black;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `}
        >
          <p>
            На веб сайте вы можете найти мои заметки, об процессе, мыслях и
            многом другом.
          </p>

          <BaseButton
            css={css`
              margin-top: 10px;
            `}
          >
            К заметкам
          </BaseButton>
        </Card>
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  flex-wrap: wrap;
  display: flex;
`;

const Card = styled.div`
  background: #433f3f;
  color: white;
  padding: 1rem;
  border-radius: 0.6rem;
  transition: box-shadow 0.3s;
  &:hover {
    -webkit-box-shadow: 4px 4px 8px 0px rgba(134, 151, 38, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
`;

export default Topic;
