import styled from "styled-components";
import FilterTab from "../components/FilterTab";
import { useSelector } from "react-redux";
import Card from "../components/Card";
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
export default function Products() {
  const data = useSelector((state) => state.AllProducts.value);
  const filterTab = useSelector((state) => state.CurFilter.value.Products);
  const filterList =
    filterTab === "All" ? data : data.filter((el) => el.type === filterTab);
  return (
    <Section>
      <FilterTab />
      <Container>
        {filterList.map((el, i) => (
          <Card key={i} item={el} />
        ))}
      </Container>
    </Section>
  );
}
