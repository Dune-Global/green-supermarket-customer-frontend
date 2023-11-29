"use client";

import {
  Container,
  Button,
  Navigation,
} from "@/components/green-supermarket-common-ui";
import NavigationMenuTextDropdown from "@/components/green-supermarket-common-ui/navigation-menu/nav-text-dropdown";



export default function Home() {
  return (
    <Container>
      <div className="bg-green-0 flex">
        <NavigationMenuTextDropdown />
      </div>
    </Container>
  );
}
