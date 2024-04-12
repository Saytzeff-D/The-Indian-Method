import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import illustration3 from "../assets/illustration3.png"
import illustration4 from "../assets/illustration4.png"
import illustration5 from "../assets/illustration5.png"
import illustration6 from "../assets/illustration6.png"
import maclayout from "../assets/macbook-layout.png"
import logo1 from "../assets/logos/logo1.png"
import logo2 from "../assets/logos/logo2.png"
import logo3 from "../assets/logos/logo3.png"
import logo4 from "../assets/logos/logo4.png"
import MemoMailRound from "../components/svgs/MailRound"
import MemoSpeed from "../components/svgs/Speed"
import MemoBars from "../components/svgs/Bars"

const OurApplication = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div>
        <div className="appx flex flex-col items-center text-center gap-8 pb-10 pt-16">
          <h3 className="font-semibold text-5xl text-dark">
            Notre application
          </h3>
          <p className="max-w-2xl text-sec text-lg">
            En plus d’avoir acces à des modules extrêmement poussé dans nos
            formations, vous allez pouvoir avoir acces également à notre suite
            d’applications.
          </p>
          <button className="brand-btn">Nous rejoindre</button>

          <div className="mt-6 mb-2 relative max-w-[40rem]">
            <img
              src={maclayout}
              alt="Macbook Layout"
              className="w-full pointer-events-none"
            />
            <img
              src={illustration3}
              alt="App Dashboard"
              className="absolute w-[81%] top-[4%] left-[10%] pointer-events-none"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#F9FAFB] py-10">
        <div className="appx flex flex-col items-center gap-3 md:gap-10">
          <h3 className="font-inter font-medium text-[#475467]">
            Notre suite de logiciel est compris dans notre application !
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 lg:gap-20 xl:gap-28">
            <div>
              <img src={logo1} alt="" className="h-full rm-drag" />
            </div>
            <div>
              <img src={logo2} alt="" className="h-full rm-drag" />
            </div>
            <div>
              <img src={logo3} alt="" className="h-full rm-drag" />
            </div>
            <div>
              <img src={logo4} alt="" className="h-full rm-drag" />
            </div>
          </div>
        </div>
      </div>

      <div className="appx font-inter flex flex-col text-center gap-4 items-center">
        <h3 className=" font-medium text-[#475467] my-20">
          Accedez à tout nos applications supplémentaires depuis nos formations
        </h3>

        <h3 className="text-primary font-semibold text-sm ">Features</h3>
        <h3 className=" font-semibold text-3xl">
          Analytics that feels like it’s from the future
        </h3>
        <p className="text-lg text-[#475467] max-w-2xl">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="py-20">
        <div className="overflow-hidden flex items-center justify-center gap-x-10 md:gap-x-20 lg:gap-x-32 gap-y-6">
          <div className="w-full md:max-w-[50%] flex md:justify-end px-5">
            <div className="flex flex-col gap-2 max-w-md">
              <MemoMailRound />
              <h3 className="mt-2 font-semibold text-2xl text-dark">
                Organisez vous facilement !
              </h3>
              <p className="text-[#969698] text-sm max-w-sm py-4">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>

              <div className="flex flex-col gap-4 text-[#969698] text-sm">
                {[
                  "Emplois du temps interactif",
                  "Suivez votre progression dans les différents modules",
                  "Application pour organiser vos taches",
                ].map((each) => (
                  <div className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="28" height="28" rx="14" fill="#92D9C9" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.9457 8.62169L11.5923 16.6834L9.37568 14.315C8.96734 13.93 8.32568 13.9067 7.85901 14.2334C7.40401 14.5717 7.27568 15.1667 7.55568 15.645L10.1807 19.915C10.4373 20.3117 10.8807 20.5567 11.3823 20.5567C11.8607 20.5567 12.3157 20.3117 12.5723 19.915C12.9923 19.3667 21.0073 9.81169 21.0073 9.81169C22.0573 8.73836 20.7857 7.79336 19.9457 8.61002V8.62169Z"
                        fill="black"
                      />
                    </svg>
                    <span>{each}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block w-full max-w-[50%] border-[3px] border-black rounded-l-lg -mr-2 overflow-hidden">
            <img
              src={illustration4}
              className="h-[30rem] object-cover object-left-top w-full"
            />
          </div>
        </div>

        <div className="overflow-hidden mt-20 flex flex-row-reverse items-center justify-center gap-x-10 md:gap-x-20 lg:gap-x-32 gap-y-6">
          <div className="w-full md:max-w-[50%] flex justify-start px-5">
            <div className="flex flex-col gap-2 max-w-md">
              <MemoSpeed />
              <h3 className="mt-2 font-semibold text-2xl text-dark">
                Deliver instant answers
              </h3>
              <p className="text-[#969698] text-sm max-w-sm py-4">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>

              <div className="flex flex-col gap-4 text-[#969698] text-sm">
                {[
                  "Suivi de votre progression et de vos revenues ! ",
                  "Or",
                  "Customers never have to leave the page to find an answer",
                ].map((each) => (
                  <div className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="28" height="28" rx="14" fill="#92D9C9" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.9457 8.62169L11.5923 16.6834L9.37568 14.315C8.96734 13.93 8.32568 13.9067 7.85901 14.2334C7.40401 14.5717 7.27568 15.1667 7.55568 15.645L10.1807 19.915C10.4373 20.3117 10.8807 20.5567 11.3823 20.5567C11.8607 20.5567 12.3157 20.3117 12.5723 19.915C12.9923 19.3667 21.0073 9.81169 21.0073 9.81169C22.0573 8.73836 20.7857 7.79336 19.9457 8.61002V8.62169Z"
                        fill="black"
                      />
                    </svg>
                    <span>{each}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block w-full max-w-[50%] border-[3px] border-black rounded-r-lg -ml-2 overflow-hidden">
            <img
              src={illustration5}
              className="h-[30rem] object-cover object-right-top w-full"
            />
          </div>
        </div>

        <div className="overflow-hidden mt-20 flex items-center justify-center gap-x-10 md:gap-x-20 lg:gap-x-32 gap-y-6">
          <div className="w-full md:max-w-[50%] flex md:justify-end px-5">
            <div className="flex flex-col gap-2 max-w-md">
              <MemoBars />
              <h3 className="mt-2 font-semibold text-2xl text-dark">
                Manage your team with reports
              </h3>
              <p className="text-[#969698] text-sm max-w-sm py-4">
                Measure what matters with Untitled’s easy-to-use reports. You
                can filter, export, and drilldown on the data in a couple
                clicks.
              </p>

              <div className="flex flex-col gap-4 text-[#969698] text-sm">
                {[
                  "Filter, export, and drilldown on the data quickly",
                  "Save, schedule, and automate reports to your inbox",
                  "Connect the tools you already use with 100+ integrations",
                ].map((each) => (
                  <div className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="28" height="28" rx="14" fill="#92D9C9" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.9457 8.62169L11.5923 16.6834L9.37568 14.315C8.96734 13.93 8.32568 13.9067 7.85901 14.2334C7.40401 14.5717 7.27568 15.1667 7.55568 15.645L10.1807 19.915C10.4373 20.3117 10.8807 20.5567 11.3823 20.5567C11.8607 20.5567 12.3157 20.3117 12.5723 19.915C12.9923 19.3667 21.0073 9.81169 21.0073 9.81169C22.0573 8.73836 20.7857 7.79336 19.9457 8.61002V8.62169Z"
                        fill="black"
                      />
                    </svg>
                    <span>{each}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block w-full max-w-[50%] border-[3px] border-black rounded-l-lg -mr-2 overflow-hidden">
            <img
              src={illustration6}
              className="h-[30rem] object-cover object-left-top w-full"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default OurApplication
