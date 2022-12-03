import react from "react";
import styled from "styled-components";
import items from "./items";
import { Whole, LnbWrapper } from "./designSource";

// KO, EN
const LAN_TYPE = "KO";

const Header_A = () => {
  return (
    <Whole>
      <div>
        {items.map((item) => {
          return (
            <div>
              {LAN_TYPE === "KO" && item.name_ko}
              {LAN_TYPE === "EN" && item.name_en}
            </div>
          );
        })}
      </div>
      <LnbWrapper>LNB</LnbWrapper>
    </Whole>
  );
};

export default Header_A;
