import { css } from "@emotion/react";
import styled from "@emotion/styled";

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
          <Button
            css={css`
              margin-top: 10px;
              text-align: center;
            `}
          >
            Тык
          </Button>
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

          <Button
            css={css`
              margin-top: 10px;
            `}
          >
            К заметкам
          </Button>
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
`;

const Button = styled.div`
  width: fit-content;
  width: 100%;
  color: black;
  background: #ffffffab;
  font-weight: 500;
  border-radius: 0.6rem;
  padding: 1rem;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export default Topic;
