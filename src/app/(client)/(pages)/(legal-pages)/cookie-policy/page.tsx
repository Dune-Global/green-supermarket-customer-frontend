"use client";

import { Container } from "@/components/green-supermarket-common-ui";
import { email, phone } from "@/constants";
import { DateMonthYear } from "@/helpers";

export default function CookiePolicy() {
  return (
    <Container>
      <div className="items-center">
        <h1 className="text-center font-medium text-md md:text-xl">
          Cookie Policy
        </h1>
      </div>
      <br />
      <div className="text-sm text-justify">
        <p>
          This website is operated by Green Supermarket. This policy explains
          how we use cookies and similar technologies to provide you with a
          better and more personalized service when you visit our website.
        </p>
        <br />
        <p>Last Updated: {DateMonthYear}</p>
        <br />
        <p className="font-semibold">What are cookies?</p>
        <p>
          Cookies are small text files that are stored on your computer or
          mobile device when you visit a website. They allow the website to
          recognize your device and remember your preferences, such as your
          language, font size, or login details. Cookies also help the website
          to measure how you use the website and improve its performance.
        </p>
        <br />
        <p className="font-semibold">How do we use cookies?</p>
        <p>We use cookies for various purposes, such as:</p>
        <div>
          <ul className="list-disc list-inside">
            <li>
              To enable certain features and functions of our website, such as
              shopping cart, checkout, and account management.
            </li>
            <li>
              To analyze how you use our website and improve its performance,
              such as by tracking page views, bounce rates, and conversion
              rates.
            </li>
            <li>
              To personalize your experience on our website, such as by
              displaying relevant products, offers, and advertisements based on
              your browsing history and preferences.
            </li>
            <li>
              To deliver targeted advertising to you on our website and on other
              websites that you visit, based on your browsing behavior and
              interests.
            </li>
          </ul>
        </div>
        <br />
        <p className="font-semibold">What types of cookies do we use?</p>
        <p>We use different types of cookies on our website, such as:</p>
        <div>
          <ul className="list-disc list-inside">
            <li>
              Strictly necessary cookies: These cookies are essential for the
              operation of our website and cannot be disabled. They enable you
              to navigate our website and use its features, such as accessing
              secure areas, adding items to your shopping cart, and completing
              your purchase.
            </li>
            <li>
              Performance cookies: These cookies collect information about how
              you use our website, such as which pages you visit, how long you
              stay on them, and how often you return. They help us to measure
              and improve the performance of our website, such as by loading
              pages faster, optimizing images, and reducing errors.
            </li>
            <li>
              Functionality cookies: These cookies allow us to remember your
              choices and preferences, such as your language, currency, or login
              details. They enhance your experience on our website and make it
              more user-friendly, such as by greeting you by name, displaying
              your recently viewed products, or saving your shopping cart.
            </li>
            <li>
              Advertising cookies: These cookies are used to deliver relevant
              and personalized advertisements to you on our website and on other
              websites that you visit. They also help us to measure the
              effectiveness of our advertising campaigns, such as by tracking
              how many times you see or click on an ad, or how much you spend on
              our website after seeing an ad.
            </li>
          </ul>
        </div>
        <br />
        <p className="font-semibold">
          How can you manage your cookie preferences?
        </p>
        <p>
          You can manage your cookie preferences by changing the settings of
          your browser. You can choose to accept or reject all cookies, or to
          receive a notification when a cookie is set. You can also delete the
          cookies that are already stored on your device. However, please note
          that if you disable or delete cookies, some features and functions of
          our website may not work properly, and your experience may be less
          personalized and enjoyable.
        </p>
        <p>
          For more information on how to manage your cookie preferences, please
          visit the help pages of your browser or visit
          https://www.aboutcookies.org, which provides detailed guidance for all
          modern browsers.
        </p>
        <br />
        <p className="font-semibold">How can you contact us?</p>
        <p>
          If you have any questions or concerns about our use of cookies and
          similar technologies, please contact us at:
        </p>
        <div>
          <ul className="list-disc list-inside text-left">
            <li>Phone: {phone}</li>
            <li>Email: {email}</li>
            <li>
              Address: Green Supermarket, No. 123, Main Street, Pitipana,
              Western Province, Sri Lanka.
            </li>
          </ul>
        </div>
        <br />
        <p className="font-semibold">How often do we update this policy?</p>
        <p>
          We may update this policy from time to time to reflect changes in our
          use of cookies and similar technologies, or to comply with legal or
          regulatory requirements. We will notify you of any significant changes
          by posting a notice on our website or by sending you an email. We
          encourage you to review this policy periodically to stay informed
          about how we use cookies and similar technologies.
        </p>
      </div>
    </Container>
  );
}
