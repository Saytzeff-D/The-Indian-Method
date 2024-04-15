import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import MemoBars from "../components/svgs/Bars"
import MemoCommandCircle from "../components/svgs/CommandCircle"
import MemoMailRound from "../components/svgs/MailRound"
import MemoSmileCircle from "../components/svgs/SmileCircle"
import MemoSpeed from "../components/svgs/Speed"
import maclayout from "../assets/macbook-layout.png"
import illustration3 from "../assets/illustration3.png"
import MemoCamera from "../components/svgs/Camera"
import MemoBookCheck from "../components/svgs/BookCheck"
import MemoSettings from "../components/svgs/Settings"
import MemoPhoneCall from "../components/svgs/PhoneCall"
import { useParams } from "react-router"
import { plans } from "../utils/constants"
import ScrollLink from "../components/ScrollLink"
import { useState } from "react"

const Training = () => {
  const features = [
    {
      icon: <MemoMailRound />,
      title: "Share team inboxes",
      desc: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: <MemoSpeed />,
      title: "Deliver instant answers",
      desc: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: <MemoBars />,
      title: "Manage your team with reports",
      desc: "AMeasure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
    {
      icon: <MemoSmileCircle />,
      title: "Connect with customers",
      desc: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion..",
    },
    {
      icon: <MemoCommandCircle />,
      title: "Connect the tools you already use",
      desc: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: <MemoBars />,
      title: "Our people make the difference",
      desc: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ]

  const lists = [
    { icon: <MemoCamera />, label: "Formation Vidéo " },
    { icon: <MemoBookCheck />, label: "Formation Ecrite  " },
    { icon: <MemoSettings />, label: "Logiciels" },
    { icon: <MemoPhoneCall />, label: "Appel  " },
  ]

  const { plan } = useParams()
  const [step, setstep] = useState(1)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="training" className="my-10">
        <h3
          data-aos="fade-in"
          className="text-4xl border-b-2 border-[#EFF0F6] pb-6 text-center font-medium font-dm"
        >
          Formation Essentiel
        </h3>

        <div className="relative py-4 md:py-28 my-10">
          <div className="bg-[#EFF0F6] w-[40%] -z-10 right-0 top-0 h-full absolute hidden md:block"></div>
          <div className="flex appx">
            <div className="md:pr-10 lg:pr-20 w-full flex md:w-[50%]">
              <div className="flex flex-col gap-5 my-auto max-w-lg">
                <h3
                  data-aos="fade-up"
                  className="uppercase text-primary flex items-center gap-1 font-semibold"
                >
                  <svg
                    width="23"
                    height="3"
                    viewBox="0 0 23 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.0351562"
                      y="0.0656738"
                      width="22"
                      height="2"
                      rx="1"
                      fill="#17AD8B"
                    />
                  </svg>
                  Rejoindre nos formation
                </h3>
                <h3
                  data-aos="fade-up"
                  className="font-semibold text-3xl md:text-5xl text-dark2"
                >
                  Lancez vous facilement dans The Indian Method
                </h3>
                <p data-aos="fade-up" className="text-[#6F6C90]">
                  Nos formations sont un Pas en Avant Vers le Succès : Coaching
                  Individuel et Ressources Exclusives.
                </p>
                <div className="flex flex-col gap-4">
                  <div data-aos="fade-up" className="flex gap-4">
                    <Check />
                    <div>
                      <h3 className="text-dark2 font-semibold">
                        Application de Formation
                      </h3>
                      <p className="text-tsec text-sm md:text-base mt-2">
                        Débloquez le plein potentiel de votre formation avec
                        notre application : une passerelle vers des modules
                        complets, des applications performantes pour affiner vos
                        compétences, et des solutions d'organisation qui
                        simplifient votre parcours d'apprentissage.
                      </p>
                    </div>
                  </div>
                  <div data-aos="fade-up" className="flex gap-4">
                    <Check />
                    <div>
                      <h3 className="text-dark2 font-semibold">
                        Accompagnement complet
                      </h3>
                      <p className="text-tsec text-sm md:text-base mt-2">
                        À vos côtés à chaque étape avec un accompagnement qui
                        fait toute la différence, nous vous offrons un
                        itinéraire sur-mesure vers le succès : personnalisé,
                        précis, et performant.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-[50%]" data-aos="fade-left">
              <div className="shadow max-w-[22rem] lg:ml-10 rounded-2xl overflow-hidden bg-white">
                <div className="relative overflow-hidden bg-primary h-[20rem]">
                  <div className="bg-white/10 h-full w-[70%] top-32 left-20 shadow-xl absolute rounded-3xl rotate-[38.5deg]"></div>
                  <div className="bg-white/20 h-full w-[70%] top-28 -left-0 shadow-xl absolute rounded-3xl rotate-[38.5deg]"></div>
                  <div className="bg-white/40 h-full w-[70%] top-24 -left-20 shadow-xl absolute rounded-3xl rotate-[38.5deg]"></div>
                </div>
                <div className="p-5 h-[15rem]">
                  <h3 className="flex justify-between items-center gap-3 font-semibold text-lg text-dark2">
                    <span>Formation Essentiel</span>
                    <span>{plans[plan as unknown as number]?.amount}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="appx flex text-center flex-col gap-3 w-full">
        <h3 data-aos="zoom-in" className="font-semibold text-primary">
          Features
        </h3>
        <h3 data-aos="fade-up" className="text-3xl font-semibold text-dark2">
          Analytics that feels like it’s from the future
        </h3>
        <p data-aos="fade-up" className="max-w-xl text-tsec mx-auto">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        <div className="grid w-full gap-5 lg:gap-10 xl:gap-x-20 grid-cols-1 sm:[grid-template-columns:repeat(auto-fill,minmax(18rem,1fr))] my-10">
          {features.map((each) => (
            <div
              data-aos="zoom-in"
              key={each.title}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span>{each.icon}</span>
              <h3 className="font-semibold text-lg text-dark2">{each.title}</h3>
              <p className="text-tsec text-sm">{each.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="appx flex flex-col items-center text-center gap-8 py-20">
          <h3
            data-aos="fade-down"
            className="font-semibold text-3xl md:text-5xl text-dark"
          >
            Notre application
          </h3>
          <p data-aos="fade-down" className="max-w-2xl text-sec md:text-lg">
            En plus d’avoir acces à des modules extrêmement poussé dans nos
            formations, vous allez pouvoir avoir acces également à notre suite
            d’applications.
          </p>
          <ScrollLink
            scrollOn={"/our-application"}
            to="our-application"
            data-aos="fade-in"
            className="brand-btn"
          >
            <button> En savoir plus</button>
          </ScrollLink>

          <div data-aos="fade-up" className="mt-6 mb-2 relative max-w-[40rem]">
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

      <div className="appx flex flex-col items-center gap-4 w-full">
        <h3 data-aos="fade-up" className="uppercase font-semibold text-primary">
          QU’apprenons nous ?{" "}
        </h3>
        <h3 data-aos="fade-up" className="text-3xl font-semibold text-center">
          Le programme{" "}
        </h3>
        <div
          data-aos="fade-in"
          className="flex items-center flex-wrap my-3 gap-2 md:gap-5 lg:gap-10 justify-center"
        >
          {lists.map((each) => (
            <span className="flex items-center gap-3">
              {each.icon} <span className="text-tsec">{each.label}</span>
            </span>
          ))}
        </div>

        <header
          // data-aos="fade-up"
          className="py-7 w-full flex items-center justify-between"
        >
          <TabLine value={0} step={step} />
          {new Array(8).fill(null).map((_each, i) => (
            <>
              <TabCircle
                onClick={() => setstep(i + 1)}
                value={i + 1}
                step={step}
              />
              <TabLine value={i + 1} step={step} />
            </>
          ))}
        </header>

        <div
          data-aos="fade-up"
          className="bg-[#F7F7F7] rounded-xl w-full p-4 mb-10"
        >
          <div className="md:p-16 flex gap-5">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.67962 4.21512L6.18763 0.707107C6.57815 0.316583 7.21132 0.316582 7.60184 0.707106L12.5034 5.60868C12.8939 5.99921 12.8939 6.63237 12.5034 7.0229L9.26392 10.2624C8.792 10.7343 8.675 11.4553 8.97347 12.0522C10.6989 15.503 13.497 18.3011 16.9478 20.0265C17.5447 20.325 18.2657 20.208 18.7376 19.7361L21.9771 16.4966C22.3676 16.1061 23.0008 16.1061 23.3913 16.4966L28.2929 21.3982C28.6834 21.7887 28.6834 22.4218 28.2929 22.8124L24.7849 26.3204C22.6735 28.4317 19.331 28.6693 16.9422 26.8777L11.1023 22.4977C9.35873 21.1901 7.8099 19.6413 6.50225 17.8977L2.12226 12.0578C0.330722 9.66903 0.568269 6.32647 2.67962 4.21512Z"
                fill="#222222"
              />
            </svg>

            <div>
              <h3 className="text-lg font-semibold ">
                Vocal Trouver un client (1h)
              </h3>
              <p className="max-w-lg text-tsec my-4">
                À vos côtés à chaque étape avec un accompagnement qui fait toute
                la différence, nous vous offrons un itinéraire sur-mesure vers
                le succès : personnalisé, précis, et performant.
              </p>

              <div className="flex flex-col gap-8 mt-6">
                <div className="flex items-center gap-3">
                  <MemoCamera />
                  <span> Approfondir la démarche téléphonique ( 30min ) </span>
                </div>
                <div className="flex items-center gap-3">
                  <MemoCamera />
                  <span> S’organiser Facilement sur Excel ( 12min ) </span>
                </div>
                <div className="flex items-center gap-3">
                  <MemoBookCheck />
                  <span>Utiliser un Scrapper Google Maps ( 30p ) </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm italic text-tsec pt-4 md:p-16">
            Compétences : Repérer le client idéal ; Enquêter sur son client ;
            Reconnaitre les besoins exactes de son client...
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Training

const TabCircle = ({
  step,
  value,
  onClick,
}: {
  step: number
  value: number
  onClick: () => void
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        step >= value
          ? "bg-primary text-white after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:h-7 after:w-7 after:min-w-7 after:bg-primary/40 after:rounded-full"
          : "bg-[#DCE3E9] text-[#6F6C90]"
      } h-5 relative w-5 min-w-5 font-medium transition-all duration-300 rounded-full flex items-center justify-center text-xs `}
    >
      {value}
    </button>
  )
}

const TabLine = ({ step, value }: { step: number; value: number }) => {
  return (
    <div className="w-full h-1 overflow-hidden bg-[#DCE3E9]">
      <div
        // style={{ transitionDelay: `${value * 0.2}s` }}
        className={`${
          step > value
            ? "w-full bg-primary"
            : step == value
            ? "w-1/2 bg-primary"
            : ""
        } h-full transition-all ease-in-out duration-300`}
      ></div>
    </div>
  )
}

const Check = () => {
  return (
    <svg
      className="w-8 h-8 min-w-8"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.543 32.5106C25.3798 32.5106 32.543 25.2961 32.543 16.3961C32.543 7.49604 25.3798 0.281586 16.543 0.281586C7.70617 0.281586 0.542969 7.49604 0.542969 16.3961C0.542969 25.2961 7.70617 32.5106 16.543 32.5106Z"
        fill="#17AD8B"
      />
      <path
        d="M8.54297 17.2035L13.343 22.0379L24.543 10.7577"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
