import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateProductsCurFilter,
  updateBookmarkCurFilter,
} from "../features/CurFilter";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  margin-bottom: 12px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin: 0;
`;

const Img = styled.img`
  width: 82px;
  height: 82px;
  border-radius: 82px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: url(<path-to-image>), lightgray 50% / cover no-repeat, #d9d9d9;
`;

export default function FilterTab() {
  const curPage = useSelector((state) => state.CurFilter.value.CurPage);
  const curTab = useSelector((state) =>
    curPage === "Products"
      ? state.CurFilter.value.Products
      : state.CurFilter.value.Bookmark
  );
  const dispatch = useDispatch();

  const updateCurTab = (input) => {
    if (curPage === "Products") {
      dispatch(updateProductsCurFilter(input));
    }
    if (curPage === "Bookmark") {
      dispatch(updateBookmarkCurFilter(input));
    }
  };

  return (
    <Container>
      <Div onClick={() => updateCurTab("All")}>
        <Img src="/images/all.png" alt="전체 탭 버튼" />
        <P
          style={
            curTab === "All"
              ? {
                  color: "#412DD4",
                  borderBottom: "3px solid #412DD4",
                  fontWeight: 700,
                }
              : {}
          }
        >
          전체
        </P>
      </Div>
      <Div onClick={() => updateCurTab("Product")}>
        <Img src="/images/product.png" alt="상품 탭 버튼" />
        <P
          style={
            curTab === "Product"
              ? {
                  color: "#412DD4",
                  borderBottom: "3px solid #412DD4",
                  fontWeight: 700,
                }
              : {}
          }
        >
          상품
        </P>
      </Div>
      <Div onClick={() => updateCurTab("Category")}>
        <Img src="/images/category.png" alt="카테고리 탭 버튼" />
        <P
          style={
            curTab === "Category"
              ? {
                  color: "#412DD4",
                  borderBottom: "3px solid #412DD4",
                  fontWeight: 700,
                }
              : {}
          }
        >
          카테고리
        </P>
      </Div>
      <Div onClick={() => updateCurTab("Exhibition")}>
        <Img src="/images/Exhibition.png" alt="기획전 탭 버튼" />
        <P
          style={
            curTab === "Exhibition"
              ? {
                  color: "#412DD4",
                  borderBottom: "3px solid #412DD4",
                  fontWeight: 700,
                }
              : {}
          }
        >
          기획전
        </P>
      </Div>
      <Div onClick={() => updateCurTab("Brand")}>
        <Img src="/images/brand.png" alt="브랜드 탭 버튼" />
        <P
          style={
            curTab === "Brand"
              ? {
                  color: "#412DD4",
                  borderBottom: "3px solid #412DD4",
                  fontWeight: 700,
                }
              : {}
          }
        >
          브랜드
        </P>
      </Div>
    </Container>
  );
}
