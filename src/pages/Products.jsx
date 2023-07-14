import styled from "styled-components";
import FilterTab from "../components/FilterTab";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { useState, useEffect } from "react";
const Section = styled.section`
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  margin-left: 76px;
  margin-right: 76px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
export default function Products() {
  const data = useSelector((state) => state.AllProducts.value);
  const filterTab = useSelector((state) => state.CurFilter.value.Products);
  const filterList =
    filterTab === "All" ? data : data.filter((el) => el.type === filterTab);
  const [page, setPage] = useState(12);
  const filterListPage = filterList.slice(0, page);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prevPage) => prevPage + 4);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Section>
      <FilterTab />
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
    </Section>
  );
}
