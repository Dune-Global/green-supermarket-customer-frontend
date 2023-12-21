import { Button, Container } from "@/components/common";
import { Input } from "@/components/common/ui/input";

export default function ContactUs() {
  return (
    <>
      <div className="items-center flex flex-col py-5 ">
        <Container>
          <div className="flex flex-col text-center md:text-left gap-2">
            <div className="font-semibold">We are here to help you!</div>
            <div className="md:w-[500px] text-left  text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec leo fringilla, aliquet risus a, porttitor mauris.
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex md:flex-row flex-col items-center gap-2 ">
                <Input
                  type="/"
                  placeholder="First Name"
                  className="rounded-md md:w-[300px] hover:border-green-400  "
                />
                <Input
                  type="/"
                  placeholder="Last Name"
                  className="rounded-md md:w-[300px] hover:border-green-400 "
                />
              </div>

              <div className="flex flex-col gap-2  ">
                <div className=" items-center  text-center">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="rounded-md hover:border-green-400    "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className=" md:w-[610px] h-[100px] rounded-md border  md:h-28  outline-none items-center md:py-1 md:px-3 resize-none leading-6 p-2 hover:border-green-400 "
                  ></textarea>

                  <div className="">
                    <Button>Send Message</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
