import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderTab from "./HeaderTab";
import { updateCurPage } from "../features/CurFilter";
import { useDispatch } from "react-redux";
const HeaderContainer = styled.header`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  position: fixed;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
  background: #fff;
`;

export default function Header() {
  const [isOn, setisOn] = useState(false);
  const dispatch = useDispatch();
  return (
    <div style={{ width: "100%", height: 80 }}>
      <HeaderContainer>
        <Link
          to={"/"}
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => dispatch(updateCurPage("Main"))}
        >
          <div style={{ display: "flex", marginLeft: 76 }}>
            <img
              src="/logo.png"
              alt="로고 이미지"
              style={{ width: 55, height: 30, margin: "auto", marginRight: 12 }}
            />
            <h1>COZ Shopping</h1>
          </div>
        </Link>
        <div
          style={{
            marginRight: 76,
            position: "relative",
          }}
          onClick={() => setisOn(!isOn)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="24"
            viewBox="0 0 34 24"
            fill="none"
          >
            <path
              d="M2 22H32M2 12H32M2 2H32"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {isOn ? <HeaderTab /> : null}
        </div>
      </HeaderContainer>
    </div>
  );
}
