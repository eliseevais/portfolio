import React from "react";
import { Container } from "../../components/Container_Styles";
import { FlexWrapper } from "../../components/FlexWrapper_Styles";
import { Styles } from "./Header_Styles";
import { MenuDesktop } from "./headerMenu/menuDesktop/MenuDesktop";
import { MenuMobile } from "./headerMenu/menuMobile/MenuMobile";

const items = ["Home", "Portfolio", "Contact"];

export const Header: React.FC = () => {
  // const [width, setWidth] = React.useState(window.innerWidth);
  // const breakpoint = 768;

  // React.useEffect(() => {
  //   const handleWindowResize = () => setWidth(window.innerWidth)
  //   window.addEventListener("resize", handleWindowResize);

  //   return () => window.removeEventListener("resize", handleWindowResize);
  // }, []);

  return (
    <>
      <Styles.Header>
        <Container>
          <FlexWrapper justify="space-between" align="flex-end">
            <Styles.LogoStyled>Irina Eliseeva</Styles.LogoStyled>
            <MenuDesktop menuItems={items} />
            {/* {width >= breakpoint} {<MenuDesktop menuItems={items} />} */}
          </FlexWrapper>
        </Container>
      </Styles.Header>
      <MenuMobile menuItems={items} />
      {/* {width < breakpoint} {<MenuMobile menuItems={items} />} */}
    </>
  );
};
