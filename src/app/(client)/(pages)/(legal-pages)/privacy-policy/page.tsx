"use client";

import { Container } from "@/components/green-supermarket-common-ui";
import { email, phone } from "@/constants";
import Link from "next/link";
import { DateMonthYear } from "@/helpers";

export default function PrivacyPolicy() {
  return (
    <Container>
      <div>
        <div className="items-center">
          <h1 className="text-center font-medium text-md md:text-xl">
            Privacy Policy
          </h1>
        </div>
        <br />
        <div className="text-sm text-justify">
          <p>
            Welcome to Green Supermarket&apos;s Privacy Policy. Your privacy is
            important to us, and we are committed to protecting the personal
            information that you share with us. This Privacy Policy outlines how
            we collect, use, and safeguard your information when you use our
            website or interact with us in-store.{" "}
          </p>
          <br />
          <p>Last Updated: {DateMonthYear}</p>
          <br />
          <p className="font-semibold">Information We Collect</p>
          <p>
            When you visit our website or use our services, we may collect
            personal information, such as your name, contact details, email
            address, and payment information, solely for the purpose of
            providing you with our services and improving your shopping
            experience.{" "}
          </p>
          <br />
          <p className="font-semibold">How We Use Your Information</p>
          <div>
            <ul className="list-disc list-inside">
              <li>
                To process and fulfill orders you place through our website or
                in-store.
              </li>
              <li>
                To communicate with you about your orders, account information,
                and updates on our services.
              </li>
              <li>
                To improve our website functionality, services, and customer
                support.
              </li>
              <li>
                To send promotional offers, newsletters, and marketing
                communications (you can opt-out anytime).
              </li>
            </ul>
          </div>
          <br />
          <p className="font-semibold">Information Sharing</p>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties without your consent, except for
            trusted third parties who assist us in operating our website or
            servicing you, provided they agree to keep this information
            confidential.
          </p>
          <br />
          <p className="font-semibold">Data Security</p>
          <p>
            We implement various security measures to safeguard your personal
            information. However, no method of transmission over the internet or
            electronic storage is 100% secure. We strive to use commercially
            acceptable means to protect your data but cannot guarantee absolute
            security.
          </p>
          <br />
          <p className="font-semibold">Your Choices</p>
          <p>
            You have the right to update, modify, or delete your personal
            information by contacting us using the information provided below.
            You may also choose not to receive marketing communications from us
            by opting out through the provided mechanisms.
          </p>
          <br />
          <p className="font-semibold">Contact Us</p>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            the practices of Green Supermarket, or your dealings with us, please
            contact us at:
          </p>
          <br />

          <p>{phone}</p>

          <Link href={`mailto:${email}`}>
            {email}
          </Link>

          <br />

          <p className="font-semibold mt-4">Changes to This Privacy Policy</p>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </div>
    </Container>
  );
}
