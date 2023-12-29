import { Container } from "@/components/common";
import SideMenu from "@/components/common/layout/side-menu";
import SideMenuMobile from "@/components/common/layout/side-menu-mobile";
import React from "react";

export default function OrderHistory() {
  return (
    <Container>
      <div className="pt-9 flex gap-5">
        <div className="hidden lg:block">
          <SideMenu />
        </div>
        <div>
          <div className="block lg:hidden">
            <SideMenuMobile />
          </div>
          <div>Other content here</div>
        </div>
      </div>
    </Container>
  );
}
