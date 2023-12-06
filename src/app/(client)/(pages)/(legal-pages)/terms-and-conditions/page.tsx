"use client";

import { Container } from "@/components/green-supermarket-common-ui";
import { Tos } from "@/data";
import { DateMonthYear } from "@/helpers";

export default function TermsAndConditions() {
  return (
    <Container>
      <div>
        <div className="items-center">
          <h1 className="text-center font-medium text-md md:text-xl">
            Terms & Conditions
          </h1>
        </div>
        <br />
        <div className="text-sm text-justify">
          <p>
            Welcome to the official website of Green Supermarket. These terms
            and conditions govern your use of our website and our products and
            services. By accessing or using our website or our products and
            services, you agree to be bound by these terms and conditions. If
            you do not agree with these terms and conditions, you must not
            access or use our website or our products and services.
          </p>
          <br />
          <p>Last Updated: {DateMonthYear}</p>
          <br />
          <div>
            {Tos.map((components) => (
              <div key={components.id}>
                <p className="font-semibold">
                  <span>{components.id}. </span>
                  <span>{components.title}</span>
                </p>
                <p>{components.description}</p>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
