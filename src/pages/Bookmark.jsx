import styled from "styled-components";
import FilterTab from "../components/FilterTab";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Section = styled.section`
  display: "flex";
  margin: auto;
  flex-direction: column;
  justify-content: "center";
  align-items: "center";
  margin-top: 12px;
  margin-left: 76px;
  margin-right: 76px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

const MorePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 20px;
`;

export default function Bookmark() {
  const data = useSelector((state) => state.AllProducts.value);
  const filterTab = useSelector((state) => state.CurFilter.value.Bookmark);
  const filterList =
    filterTab === "All"
      ? data.filter((el) => el.bookmark === true)
      : data.filter((el) => el.type === filterTab && el.bookmark === true);
  const [page, setPage] = useState(12);
  const filterListPage = filterList.slice(0, page);
  const { pathname } = useLocation();
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prevPage) => prevPage + 4);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setPage(12);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Section>
      <FilterTab />
      {filterList.length === 0 ? (
        <MorePage>북마크된 요소가 없습니다.</MorePage>
      ) : (
        <>
          <Container>
            {filterListPage.map((el, i) => (
              <Card key={i} item={el} />
            ))}
          </Container>
          {filterList[page + 1] ? (
            <MorePage>컨텐츠가 더 존재합니다. 스크롤 !</MorePage>
          ) : (
            <MorePage>더 이상 컨텐츠가 없습니다.</MorePage>
          )}
        </>
      )}
    </Section>
  );
}
