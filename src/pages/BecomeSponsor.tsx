import { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import MemoUser from "../components/svgs/User"
import MemoMail from "../components/svgs/Mail"
import MemoPhone from "../components/svgs/Phone"
import MemoProfession from "../components/svgs/Profession"
import MemoSuccessCheck from "../components/svgs/SuccessCheck"

const BecomeSponsor = () => {
  const [step, setstep] = useState(1)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="w-full max-w-[40rem] appx flex flex-col items-center text-center gap-4 gap-y-6 py-10">
        <h3 className="font-semibold text-3xl text-dark">
          {step == 1 ? "Formulaire de Parrainage" : "Votre stratégie"}
        </h3>
        <p className="max-w-lg text-tsec">
          {step == 1
            ? `Veuillez compléter sérieusement le formulaire et penser a bien lire
          les conditions et les informations donné sur notre site à propos du
          parrainge`
            : "Par quelle plateforme souhaitez vous passer pour vendre nos formations ? "}
        </p>

        <div className="w-full pb-10 min-h-[30rem] fadeup [box-shadow:0px_5px_16px_0px#080F340F] px-8 border border-[#EFF0F6] rounded-[1.8rem]">
          <header className="py-7 flex items-center justify-between gap-4 border-b">
            <TabCircle value={1} step={step} />
            <TabLine value={1} step={step} />
            <TabCircle value={2} step={step} />
            <TabLine value={2} step={step} />
            <TabCircle value={3} step={step} />
            <TabLine value={3} step={step} />
            <TabCircle value={4} step={step} />
          </header>

          <div className="w-full text-left">
            {step == 1 && (
              <div className="fadeup pt-16 pb-10">
                <StepHead
                  title="Qui êtes vous ?"
                  desc="Vos informations ne seront jamais partagé"
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {[
                    {
                      label: "Nom",
                      placeholder: "John Carter",
                      icon: <MemoUser />,
                    },
                    {
                      label: "Email",
                      placeholder: "Email address",
                      icon: <MemoMail />,
                    },
                    {
                      label: "Numéro de telephone",
                      placeholder: "+33 7 39 40 30 ..",
                      icon: <MemoPhone />,
                    },
                    {
                      label: "Profession",
                      placeholder: "Nom de votre métier",
                      icon: <MemoProfession />,
                    },
                  ].map((each, i) => (
                    <CustomInput {...each} key={i + "fields"}></CustomInput>
                  ))}
                </div>
              </div>
            )}

            {step == 2 && (
              <div className="fadeup pt-16 pb-10">
                <StepHead
                  title="Expliquez nous !"
                  desc="Comment pensez vous ramener des membres"
                />
              </div>
            )}

            {step == 3 && (
              <div className="fadeup pt-16 pb-10">
                <StepHead
                  title="Quel est votre objectif"
                  desc="Combien pensez vous pouvoir affilier de membres par mois "
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                  <RadioLabel
                    className="sm:col-span-2"
                    label="0 - 10 ( Parrain )"
                    value="obj1"
                  />
                  <RadioLabel
                    className="sm:col-span-2"
                    label="10 - 20 ( Parrain reconnu )"
                    value="obj2"
                  />
                  <RadioLabel
                    className="sm:col-span-2 sm:col-start-2"
                    label="0 - 10 ( Parrain )"
                    value="obj3"
                  />
                </div>
              </div>
            )}

            {step == 4 && (
              <div className="fadeup py-10">
                <div className="flex flex-col text-center items-center gap-4">
                  <MemoSuccessCheck className="w-36" />
                  <h3 className="font-semibold text-dark2 font-dm text-xl">
                    Merci de d’avoir participé !
                  </h3>
                  <p className="text-[#6F6C90] max-w-md italic mb-5">
                    Veuillez revoir toutes les informations que vous avez
                    saisies précédemment au cours des étapes précédentes, et si
                    tout va bien, soumettez votre message pour recevoir une
                    réponse dans les 24 à 48 heures.
                  </p>
                  <button className="px-10 bg-primary rounded-full text-white py-2.5 font-medium">
                    Envoyer
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className={`flex w-full gap-3 ${
            step == 1
              ? "justify-end"
              : step > 1 && step < 4
              ? "justify-between"
              : ""
          }`}
        >
          {step > 1 && (
            <button
              onClick={() => {
                setstep((e) => e - 1)
              }}
              className="px-10 border-primary border text-primary rounded-full py-2.5 font-medium"
            >
              Précédent
            </button>
          )}
          {step < 4 && (
            <button
              onClick={() => {
                setstep((e) => e + 1)
              }}
              className="px-10 bg-primary rounded-full text-white py-2.5 font-medium"
            >
              Suivant
            </button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BecomeSponsor

const RadioLabel = ({
  value,
  label,
  className = "",
}: {
  value: string
  label: string
  className: string
}) => {
  return (
    <label
      htmlFor={value}
      className={`w-full cursor-pointer [box-shadow:0px_2px_6px_0px#13124212] flex items-center gap-3 font-medium rounded-lg border border-[#EFF0F6] px-5 py-8 text-dark2 ${className}`}
    >
      <input
        type="radio"
        name="objective"
        id={value}
        className="appearance-none w-5 h-5 border rounded-full checked:border-[6px] transition duration-300 checked:border-primary"
      />
      {label}
    </label>
  )
}

const StepHead = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <>
      <h3 className="font-semibold text-dark2 font-dm text-xl">{title}</h3>
      <p className="text-[#6F6C90] italic mb-10">{desc}</p>
    </>
  )
}

const CustomInput = ({
  label,
  placeholder,
  icon,
}: {
  label: string
  placeholder: string
  icon: JSX.Element
}) => {
  return (
    <div>
      <label htmlFor="" className="text-dark2 font-medium font-dm">
        {label}
      </label>
      <div className="flex border border-[#EFF0F6] rounded-full items-center gap-2 px-6 h-12 [box-shadow:_0px_2px_6px_0px#13124212] focus-within: outline-primary mt-2">
        <input
          type="text"
          className="outline-none h-full w-full"
          placeholder={placeholder}
        />
        {icon}
      </div>
    </div>
  )
}

const TabCircle = ({ step, value }: { step: number; value: number }) => {
  return (
    <div
      className={`${
        step >= value ? "bg-primary text-white" : "bg-[#EFF0F6] text-[#6F6C90]"
      } h-7 w-7 min-w-7 font-medium transition-all duration-300 rounded-full flex items-center justify-center text-sm `}
    >
      {value}
    </div>
  )
}

const TabLine = ({ step, value }: { step: number; value: number }) => {
  return (
    <div className="w-full h-2 rounded-full overflow-hidden bg-[#EFF0F6]">
      <div
        className={`${
          step > value
            ? "w-full bg-primary"
            : step == value
            ? "w-1/2 bg-primary"
            : ""
        } h-full transition-all duration-300 rounded-full`}
      ></div>
    </div>
  )
}
