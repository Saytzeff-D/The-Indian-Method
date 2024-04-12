import { Disclosure, Transition } from "@headlessui/react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { indianMethodFaqs, trainingFaqs } from "../utils/constants"

const FAQs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-4 items-center font-dm appx text-center justify-center w-full min-h-[70vh]">
        <h3 className="uppercase text-primary text-sm tracking-[0.15em]">
          The Indian method
        </h3>
        <h3 className="text-primary font-semibold max-w-lg text-3xl md:text-5xl ">
          Les questions les plus fréquentes
        </h3>
        <p className="max-w-[34rem] mt-12 text-[#030303]">
          Si votre question apparait pas dans les FAQ et que le Chabot n’est pas
          dans la capacité de vus répondre, posez votre question si-dessous un
          mail vous sera envoyé pour la réponse !
        </p>
        <div className="max-w-[50rem] gap-4 flex items-center pl-6 pr-2 py-2 border border-[#EFF0F6] rounded-full w-full [box-shadow:0px_8px_25px_0px#0D0A2C0F]">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Entrez votre question"
          />
          <button className="rounded-full px-6 md:px-10 py-2 bg-dark text-white">
            envoyer
          </button>
        </div>
        <div className="text-primary text-sm flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1689 22.351C17.2442 22.351 22.1689 17.4263 22.1689 11.351C22.1689 5.27565 17.2442 0.350952 11.1689 0.350952C5.09365 0.350952 0.168945 5.27565 0.168945 11.351C0.168945 17.4263 5.09365 22.351 11.1689 22.351Z"
              fill="#17AD8B"
            />
            <path
              d="M5.66895 11.9009L8.96895 15.2009L16.6689 7.50093"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>C’est 100% gratuit , nous sommes la pour vous éclairer </span>
        </div>
      </div>

      <div className="appx font-dm w-full">
        <div className="faqs-head  flex items-center justify-between rounded-xl px-4 py-2">
          <h3 className="font-semibold text-2xl">FAQ Formation </h3>

          <div className="max-w-[20rem] gap-4 flex items-center pl-6 pr-2 py-2 border border-[#EFF0F6] rounded-full w-full [box-shadow:0px_8px_25px_0px#0D0A2C0F]">
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Entrez votre question"
            />
            <button className="rounded-full px-6 md:px-10 py-2 bg-primary text-white">
              envoyer
            </button>
          </div>
        </div>

        <div className="rounded-lg bg-[#F7F7FB] py-20 mt-6 flex gap-5 flex-col px-3 items-center">
          {trainingFaqs.map((each, i) => (
            <Disclosure key={i + "tfaq"}>
              {({ open }) => (
                <div
                  className={`bg-white transition duration-300 p-6 rounded-lg max-w-2xl w-full ${
                    open
                      ? "border-2 border-primary [box-shadow:0px_6px_16px_0px#4A3AFF30]"
                      : "[box-shadow:0px_5px_16px_0px#080F340F]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-lg">{each.question}</h3>
                    <Disclosure.Button
                      className={`${
                        open ? "bg-primary text-white" : "text-primary"
                      } w-9 h-9 min-w-9 flex items-center justify-center transition duration-300 rounded-full shadow`}
                    >
                      <svg
                        className={`${
                          open ? "" : "-rotate-90"
                        } transition duration-300`}
                        width="11"
                        height="11"
                        viewBox="0 0 19 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.42676 1.901L9.68335 9.21847L17.9399 1.901"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Disclosure.Button>
                  </div>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="opacity-100"
                    leaveTo=" opacity-0"
                  >
                    <Disclosure.Panel className="pt-2 text-primary">
                      {each.answer}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>

      <div className="appx font-dm w-full mt-16 mb-20">
        <div className="faqs-head  flex items-center justify-between rounded-xl px-4 py-2">
          <h3 className="font-semibold text-2xl">FAQ Indian Method </h3>

          <div className="max-w-[20rem] gap-4 flex items-center pl-6 pr-2 py-2 border border-[#EFF0F6] rounded-full w-full [box-shadow:0px_8px_25px_0px#0D0A2C0F]">
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Entrez votre question"
            />
            <button className="rounded-full px-6 md:px-10 py-2 bg-primary text-white">
              envoyer
            </button>
          </div>
        </div>

        <div className="rounded-lg bg-[#F7F7FB] py-20 mt-6 flex gap-5 flex-col px-3 items-center">
          {indianMethodFaqs.map((each, i) => (
            <Disclosure key={i + "tfaq"}>
              {({ open }) => (
                <div
                  className={`bg-white transition duration-300 p-6 rounded-lg max-w-2xl w-full ${
                    open
                      ? "border-2 border-primary [box-shadow:0px_6px_16px_0px#4A3AFF30]"
                      : "[box-shadow:0px_5px_16px_0px#080F340F]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-lg">{each.question}</h3>
                    <Disclosure.Button
                      className={`${
                        open ? "bg-primary text-white" : "text-primary"
                      } w-9 h-9 min-w-9 flex items-center justify-center transition duration-300 rounded-full shadow`}
                    >
                      <svg
                        className={`${
                          open ? "" : "-rotate-90"
                        } transition duration-300`}
                        width="11"
                        height="11"
                        viewBox="0 0 19 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.42676 1.901L9.68335 9.21847L17.9399 1.901"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Disclosure.Button>
                  </div>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="opacity-100"
                    leaveTo=" opacity-0"
                  >
                    <Disclosure.Panel className="pt-2 text-primary">
                      {each.answer}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FAQs
