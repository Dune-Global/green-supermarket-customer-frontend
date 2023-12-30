import { Button, Container } from "@/components/common";
import { Input } from "@/components/common/ui/input";

export default function ContactUs() {
  return (
    <>
      <div className="items-center flex flex-col py-5 ">
        <Container>
          <form
            action="https://getform.io/f/3c176d14-2903-4ec9-b1f4-6ded5808a222"
            method="POST"
            className="space-y-3"
          >
            <div className="flex flex-col text-center md:text-left gap-2 p-12 shadow-[0_0px_15px_-3px_rgba(0,0,0,0.25)] rounded-xl my-12">
              <div className="font-medium text-xl">We are here to help you!</div>
              <div className="md:w-[500px] text-left  text-xs py-4">
              We are here and ready to assist you every step of the way, drop us a message for personalized support and solutions crafted just for you!
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex md:flex-row flex-col items-center gap-2 ">
                  <Input
                    placeholder="First Name"
                    className="rounded-md md:w-[300px] focus-visible:outline-green-400/40  "
                  />
                  <Input
                    placeholder="Last Name"
                    className="rounded-md md:w-[300px] focus-visible:outline-green-400/40 "
                  />
                </div>

                <div className="flex flex-col gap-2  ">
                  <div className=" items-center  text-center">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="rounded-md focus-visible:outline-green-400/40   "
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      className="placeholder:text-sm placeholder:pt-2 border border-gray-50 md:w-[610px] h-[100px] rounded-md md:h-28  items-center md:py-1 md:px-3 resize-none leading-6 p-2 focus-visible:outline-green-400/40 "
                    ></textarea>

                    <div className="pt-4 w-full">
                      <Button className="w-full">Send Message</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Container>
      </div>
      <div>
        <div className=" ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15846.303361252902!2d80.0415729!3d6.8213291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1702998395806!5m2!1sen!2slk"
            height="300"
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </>
  );
}
