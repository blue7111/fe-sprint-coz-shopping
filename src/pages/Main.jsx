import Card from "../components/Card";
import Loding from "../components/Loding";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const H2 = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 12px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin-left: 76px;
  margin-right: 76px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

export default function Main() {
  const isLoding = useSelector((state) => state.Loding.value);
  const AllProducts = useSelector((state) => state.AllProducts.value);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {isLoding ? (
        <Loding />
      ) : (
        <>
          <Section>
            <H2>상품 리스트</H2>
            <Div>
              <Card item={AllProducts.find((el) => el.type === "Product")} />
              <Card item={AllProducts.find((el) => el.type === "Category")} />
              <Card item={AllProducts.find((el) => el.type === "Exhibition")} />
              <Card item={AllProducts.find((el) => el.type === "Brand")} />
            </Div>
          </Section>
          <Section>
            <H2>북마크 리스트</H2>
            <Div>
              {AllProducts.filter((el) => el.bookmark === true).length > 0 ? (
                AllProducts.filter((el) => el.bookmark === true)
                  .slice(0, 4)
                  .map((el) => <Card key={el.id} item={el} />)
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <h3
                    style={{
                      borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
                    }}
                  >
                    현재 북마크 리스트가 없습니다.
                  </h3>
                </div>
              )}
            </Div>
          </Section>
        </>
      )}
    </>
  );
}
