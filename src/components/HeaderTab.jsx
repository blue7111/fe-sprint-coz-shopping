import styled from "styled-components";
import { Link } from "react-router-dom";
const Div = styled.div`
  width: 200px;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  line-height: 88.023%;
  font-style: normal;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding-left: 30px;
  gap: 8px;
  background-color: #fff;
`;

export default function HeaderTab() {
  return (
    <div
      style={{
        position: "absolute",
        top: 25,
        right: -40,
      }}
    >
      <div style={{ position: "relative", top: 3, left: 43 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          style={{
            filter: "drop-shadow(0px -1px 1px rgba(0, 0, 0, 0.25))",
          }}
        >
          <path d="M8 0L16 18H0L8 0Z" fill="white" />
        </svg>
      </div>
      <div
        style={{
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.10)",
          borderRadius: "12px",
          overflow: "hidden",
          width: "200px",
        }}
      >
        <Div onClick={(e) => e.stopPropagation()}>
          <p>&nbsp;&nbsp;OOO님, 안녕하세요!</p>
        </Div>
        <Link
          to={"/products/list"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Div
            style={{
              borderBottom: "0.5px solid rgba(0, 0, 0, 0.10)",
              borderTop: "0.5px solid rgba(0, 0, 0, 0.10)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.6275 5.71521H14.5824C14.7899 5.57958 14.9867 5.42671 15.1706 5.2581C15.448 5.0009 15.6714 4.68693 15.8269 4.33581C15.9824 3.98469 16.0667 3.60397 16.0745 3.21742C16.0865 2.79219 16.015 2.36889 15.8644 1.97343C15.7137 1.57798 15.487 1.2187 15.1983 0.917602C14.9095 0.616506 14.5648 0.379933 14.1851 0.222374C13.8054 0.0648148 13.3988 -0.0104129 12.9902 0.00129904C12.6188 0.00939594 12.253 0.0971175 11.9156 0.258983C11.5782 0.420849 11.2765 0.653382 11.0294 0.942054C10.5753 1.49982 10.2261 2.14156 10 2.83377C9.77443 2.14208 9.42589 1.5007 8.97255 0.943075C8.72528 0.653967 8.42333 0.421098 8.0856 0.259045C7.74786 0.0969924 7.38162 0.00924597 7.0098 0.00129904C6.60097 -0.0109724 6.19403 0.0638068 5.81395 0.22105C5.43387 0.378294 5.08866 0.614687 4.7995 0.915732C4.51033 1.21678 4.2833 1.57613 4.13234 1.97174C3.98137 2.36736 3.90965 2.7909 3.92157 3.2164C3.92935 3.60294 4.01364 3.98367 4.16916 4.33479C4.32469 4.68591 4.54812 4.99988 4.82549 5.25708C5.00924 5.42593 5.20597 5.57881 5.41373 5.71419H1.37255C1.19222 5.71419 1.01366 5.75118 0.847071 5.82303C0.680482 5.89488 0.52913 6.00019 0.401664 6.13295C0.274198 6.2657 0.173117 6.4233 0.104198 6.59672C0.0352785 6.77015 -0.000128456 6.95602 3.50172e-07 7.14369V10.4088C3.50172e-07 10.7876 0.144608 11.151 0.402011 11.4189C0.659414 11.6868 1.00853 11.8373 1.37255 11.8373H1.56863V18.5715C1.56863 18.9504 1.71324 19.3137 1.97064 19.5816C2.22804 19.8495 2.57715 20 2.94118 20H17.0588C17.4228 20 17.772 19.8495 18.0294 19.5816C18.2868 19.3137 18.4314 18.9504 18.4314 18.5715V11.8373H18.6275C18.9915 11.8373 19.3406 11.6868 19.598 11.4189C19.8554 11.151 20 10.7876 20 10.4088V7.14369C20 6.76484 19.8554 6.4015 19.598 6.13361C19.3406 5.86571 18.9915 5.71521 18.6275 5.71521ZM10.7618 4.59284C10.9824 3.35618 11.3784 2.37359 11.9078 1.75119C12.0495 1.58846 12.2219 1.45783 12.4141 1.36743C12.6064 1.27702 12.8145 1.22878 13.0255 1.22571H13.0794C13.3233 1.22574 13.5647 1.27669 13.7894 1.37556C14.014 1.47442 14.2174 1.61918 14.3873 1.80128C14.5572 1.98337 14.6903 2.19909 14.7787 2.43568C14.8671 2.67227 14.909 2.9249 14.902 3.17864C14.8986 3.39844 14.8518 3.61516 14.7644 3.81529C14.6771 4.01542 14.551 4.19466 14.3941 4.34183C13.3431 5.30708 11.5608 5.59583 10.6216 5.6795C10.6461 5.38462 10.6863 5.00914 10.7618 4.59284ZM5.63235 1.7818C5.97455 1.42695 6.43753 1.2271 6.92059 1.22571H6.97451C7.1857 1.22917 7.39393 1.27789 7.58623 1.36883C7.77852 1.45976 7.95075 1.59097 8.09216 1.75425C9.01961 2.84805 9.29706 4.70303 9.37745 5.68052C9.09412 5.65501 8.73333 5.61114 8.33725 5.53461C7.14902 5.30708 6.2049 4.89282 5.60686 4.34081C5.44973 4.194 5.32343 4.015 5.23587 3.81501C5.14832 3.61503 5.10139 3.39838 5.09804 3.17864C5.09127 2.92025 5.13516 2.66313 5.22703 2.42297C5.31889 2.18281 5.4568 1.96465 5.63235 1.7818ZM1.17647 10.4088V7.14369C1.17647 7.08957 1.19713 7.03766 1.2339 6.99939C1.27067 6.96112 1.32055 6.93962 1.37255 6.93962H9.41176V10.6129H1.37255C1.32055 10.6129 1.27067 10.5914 1.2339 10.5531C1.19713 10.5148 1.17647 10.4629 1.17647 10.4088ZM2.7451 18.5715V11.8373H9.41176V18.7756H2.94118C2.88917 18.7756 2.8393 18.7541 2.80253 18.7158C2.76576 18.6775 2.7451 18.6256 2.7451 18.5715ZM17.2549 18.5715C17.2549 18.6256 17.2342 18.6775 17.1975 18.7158C17.1607 18.7541 17.1108 18.7756 17.0588 18.7756H10.5882V11.8373H17.2549V18.5715ZM18.8235 10.4088C18.8235 10.4629 18.8029 10.5148 18.7661 10.5531C18.7293 10.5914 18.6795 10.6129 18.6275 10.6129H10.5882V6.93962H18.6275C18.6795 6.93962 18.7293 6.96112 18.7661 6.99939C18.8029 7.03766 18.8235 7.08957 18.8235 7.14369V10.4088Z"
                fill="black"
              />
            </svg>
            <p>상품리스트 페이지</p>
          </Div>
        </Link>
        <Link
          to={"/bookmark"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M19.9345 7.53367C19.8594 7.28616 19.7147 7.06763 19.519 6.90619C19.3234 6.74475 19.0857 6.64777 18.8365 6.62774L13.432 6.14269C13.3993 6.13936 13.3681 6.12689 13.3417 6.10662C13.3153 6.08635 13.2946 6.05903 13.282 6.02756L11.1705 0.803366C11.0727 0.565045 10.9096 0.361828 10.7015 0.218991C10.4933 0.0761544 10.2493 0 9.99983 0C9.75032 0 9.50632 0.0761544 9.29817 0.218991C9.09002 0.361828 8.92691 0.565045 8.82912 0.803366L6.71767 6.02756C6.70502 6.05903 6.6844 6.08635 6.65799 6.10662C6.63158 6.12689 6.60038 6.13936 6.5677 6.14269L1.16318 6.62774C0.913994 6.64777 0.676276 6.74475 0.480606 6.90619C0.284935 7.06763 0.140261 7.28616 0.065192 7.53367C-0.0143127 7.78153 -0.0212575 8.04829 0.0452356 8.30024C0.111729 8.55219 0.248675 8.77802 0.438763 8.94919L4.53896 12.6626C4.56406 12.6857 4.58271 12.7154 4.59295 12.7486C4.60318 12.7819 4.60463 12.8173 4.59713 12.8513L3.36462 18.3727C3.30716 18.627 3.32356 18.8931 3.41172 19.1377C3.49989 19.3822 3.65588 19.5942 3.85999 19.7467C4.06093 19.9007 4.3017 19.9885 4.55122 19.9989C4.80073 20.0094 5.04753 19.9419 5.25974 19.8052L9.9053 16.8798C9.9326 16.8623 9.96408 16.853 9.99619 16.853C10.0283 16.853 10.0598 16.8623 10.0871 16.8798L14.7326 19.8052C14.9471 19.9415 15.1956 20.0088 15.4468 19.9986C15.698 19.9885 15.9407 19.9012 16.1442 19.748C16.3477 19.5947 16.5029 19.3823 16.5903 19.1376C16.6776 18.8928 16.6932 18.6267 16.635 18.3727L15.4062 12.8494C15.3987 12.8154 15.4001 12.78 15.4103 12.7468C15.4206 12.7136 15.4392 12.6838 15.4643 12.6607L19.5645 8.9473C19.7536 8.77584 19.8897 8.55013 19.9555 8.29859C20.0213 8.04705 20.014 7.78091 19.9345 7.53367ZM18.8437 8.09233L14.7435 11.8057C14.5688 11.9635 14.4389 12.1679 14.3678 12.3967C14.2967 12.6255 14.2871 12.8701 14.34 13.1042L15.5689 18.6275C15.5779 18.6647 15.5759 18.7038 15.5631 18.7397C15.5503 18.7756 15.5272 18.8066 15.4971 18.8285C15.4697 18.8513 15.4361 18.8643 15.4011 18.8659C15.3662 18.8674 15.3316 18.8573 15.3025 18.837L10.657 15.9116C10.4589 15.7867 10.2316 15.7206 9.99983 15.7206C9.76805 15.7206 9.54073 15.7867 9.34267 15.9116L4.69711 18.837C4.66804 18.8573 4.6335 18.8674 4.59852 18.8659C4.56353 18.8643 4.52993 18.8513 4.5026 18.8285C4.47241 18.8066 4.44937 18.7756 4.43654 18.7397C4.42372 18.7038 4.42171 18.6647 4.4308 18.6275L5.65967 13.1042C5.71258 12.8701 5.70296 12.6255 5.63184 12.3967C5.56073 12.1679 5.43081 11.9635 5.25611 11.8057L1.15591 8.09233C1.12787 8.06757 1.10773 8.03455 1.09815 7.99765C1.08858 7.96075 1.09002 7.9217 1.10228 7.88566C1.11146 7.84978 1.13137 7.81784 1.15913 7.79444C1.18689 7.77104 1.22109 7.75739 1.2568 7.75544L6.66223 7.27039C6.89364 7.24992 7.11524 7.16408 7.30302 7.02219C7.49079 6.8803 7.63759 6.68776 7.72749 6.46543L9.83895 1.24123C9.85363 1.20881 9.87689 1.18139 9.90602 1.16219C9.93516 1.14298 9.96895 1.13279 10.0035 1.13279C10.038 1.13279 10.0718 1.14298 10.1009 1.16219C10.13 1.18139 10.1533 1.20881 10.168 1.24123L12.2722 6.46543C12.3618 6.68722 12.508 6.87941 12.6951 7.02126C12.8822 7.16312 13.103 7.24925 13.3338 7.27039L18.7392 7.75544C18.7749 7.75739 18.8091 7.77104 18.8369 7.79444C18.8647 7.81784 18.8846 7.84978 18.8937 7.88566C18.9064 7.92133 18.9084 7.96014 18.8995 7.99702C18.8906 8.0339 18.8712 8.06712 18.8437 8.09233Z"
                fill="black"
              />
            </svg>
            <p>북마크 페이지</p>
          </Div>
        </Link>
      </div>
    </div>
  );
}