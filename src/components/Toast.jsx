import styled from "styled-components";
import { useState, useEffect } from "react";
import { DequeueNotifications } from "../features/Notifications";
const Notification = styled.div`
  transition: transform 0.6s ease-in-out;
  animation: toast-in-right 0.6s;
  background: #fff;
  transition: 0.3s ease;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  opacity: ${(props) => (props.fade === "true" ? 0 : 0.9)};
  color: black;
  width: 305px;
  height: 52px;
  padding: 18px 24px;
  margin: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export default function Toast({ text, dismissTime, img }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      if (mounted) {
        setIsFading(true);
      }
    }, dismissTime - 500);

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Notification fade={isFading ? "true" : "false"}>
      {img === false ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{ marginRight: 18, position: "absolute", left: "24px" }}
        >
          <path
            d="M7.9996 13.4042L4.12169 15.8502C3.95037 15.9643 3.77127 16.0132 3.58439 15.9969C3.3975 15.9806 3.23397 15.9154 3.09381 15.8013C2.95364 15.6871 2.84462 15.5443 2.76675 15.3727C2.68888 15.2012 2.67331 15.0097 2.72003 14.7984L3.74791 10.1754L0.313855 7.06899C0.158115 6.92222 0.0609338 6.75492 0.0223104 6.56706C-0.016313 6.37921 -0.0047883 6.19592 0.0568846 6.0172C0.11918 5.83782 0.212624 5.69106 0.337216 5.57692C0.461807 5.46277 0.633121 5.38939 0.851156 5.35677L5.38318 4.94095L7.13525 0.587044C7.21312 0.391363 7.33397 0.244602 7.49781 0.146761C7.66165 0.0489204 7.82891 0 7.9996 0C8.17091 0 8.33818 0.0489204 8.50139 0.146761C8.66461 0.244602 8.78546 0.391363 8.86396 0.587044L10.616 4.94095L15.148 5.35677C15.3661 5.38939 15.5374 5.46277 15.662 5.57692C15.7866 5.69106 15.88 5.83782 15.9423 6.0172C16.0046 6.19657 16.0164 6.38019 15.9778 6.56804C15.9392 6.7559 15.8417 6.92288 15.6853 7.06899L12.2513 10.1754L13.2792 14.7984C13.3259 15.0104 13.3103 15.2022 13.2325 15.3737C13.1546 15.5452 13.0456 15.6878 12.9054 15.8013C12.7652 15.9154 12.6017 15.9806 12.4148 15.9969C12.2279 16.0132 12.0488 15.9643 11.8775 15.8502L7.9996 13.4042Z"
            fill="#DFDFDF"
            fillOpacity="0.81"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{ marginRight: 18, position: "absolute", left: "24px" }}
        >
          <path
            d="M7.9996 13.4042L4.12169 15.8502C3.95037 15.9643 3.77127 16.0132 3.58439 15.9969C3.3975 15.9806 3.23397 15.9154 3.09381 15.8013C2.95364 15.6871 2.84462 15.5443 2.76675 15.3727C2.68888 15.2012 2.67331 15.0097 2.72003 14.7984L3.74791 10.1754L0.313855 7.06899C0.158115 6.92223 0.0609338 6.75492 0.0223104 6.56706C-0.016313 6.37921 -0.0047883 6.19592 0.0568846 6.0172C0.11918 5.83782 0.212624 5.69106 0.337216 5.57692C0.461807 5.46277 0.633121 5.38939 0.851156 5.35677L5.38318 4.94095L7.13525 0.587044C7.21312 0.391363 7.33397 0.244602 7.49781 0.146761C7.66165 0.0489204 7.82891 0 7.9996 0C8.17092 0 8.33818 0.0489204 8.50139 0.146761C8.66461 0.244602 8.78546 0.391363 8.86396 0.587044L10.616 4.94095L15.148 5.35677C15.3661 5.38939 15.5374 5.46277 15.662 5.57692C15.7866 5.69106 15.88 5.83782 15.9423 6.0172C16.0046 6.19657 16.0164 6.38019 15.9778 6.56804C15.9392 6.7559 15.8417 6.92288 15.6853 7.06899L12.2513 10.1754L13.2792 14.7984C13.3259 15.0104 13.3103 15.2022 13.2325 15.3737C13.1546 15.5452 13.0456 15.6878 12.9054 15.8013C12.7652 15.9154 12.6017 15.9806 12.4148 15.9969C12.2279 16.0132 12.0488 15.9643 11.8775 15.8502L7.9996 13.4042Z"
            fill="#FFD361"
          />
        </svg>
      )}
      <p>{text}</p>
    </Notification>
  );
}
