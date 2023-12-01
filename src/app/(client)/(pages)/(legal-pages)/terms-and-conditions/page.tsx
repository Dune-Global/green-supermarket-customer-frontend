"use client";

import {
  Container,
  Button,
  Navigation,
  BrandIcon,
} from "@/components/green-supermarket-common-ui";
import NavigationMenuTextDropdown from "@/components/green-supermarket-common-ui/navigation-menu/nav-text-dropdown";
import { Tos } from "@/data/legal-pages";

export default function TermsAndConditions() {
  return (
    <div>
      <div>
        <Container>
            <div>
                <div className="items-center">
                    <h1 className="text-center font-medium text-md md:text-xl">Terms & Conditions</h1>
                </div>
                <br />
                <div className="text-sm text-justify">
                    <p>
                        Welcome to the official website of Green Supermarket. These terms and conditions govern your use of our website and our products and services. By accessing or using our website or our products and services, you agree to be bound by these terms and conditions. If you do not agree with these terms and conditions, you must not access or use our website or our products and services.
                    </p>
                    <br />
                    <p>
                        Last Updated: 18th November 2023
                    </p>
                    <br />
                    <div>
                        {Tos.map((components) => (
                            <div>
                                <p className="font-semibold">
                                    <span>{components.id}. </span>
                                    <span>{components.title}</span>
                                </p>
                                <p>
                                    {components.description}
                                </p>
                                <br />
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </Container>
      </div>
    </div>
  );
}
