import Navbar from "../components/Navbar"
import MemoArrRight from "../components/svgs/ArrRight"
import MemoBars from "../components/svgs/Bars"
import { structure } from "../utils/constants"
import illustration1 from "../assets/illustration1.png"
import illustration2 from "../assets/illustration2.png"
import MemoSpeed from "../components/svgs/Speed"
import Footer from "../components/Footer"
import maclayout from "../assets/macbook-layout.png"
import { Link } from "react-router-dom"
import rep1 from "../assets/material.png"
import rep2 from "../assets/material2.png"
import rep3 from "../assets/material3.png"
import rep4 from "../assets/material4.png"

const Programme = () => {
  const advantages = [
    {
      label: "Matériel de Promotion Exclusif",
      img: <img src={rep1} alt="" className="w-14" />,
    },
    {
      label: "Suivi en Temps Réel",
      img: <img src={rep2} alt="" className="w-14" />,
    },
    {
      label: "Paiements Sécurisés et Réguliers",
      img: <img src={rep3} alt="" className="w-14" />,
    },
    { label: "Support Dédié", img: <img src={rep4} alt="" className="w-14" /> },
  ]
  return (
    <div className="">
      <Navbar />
      <div>
        <div className="appx flex flex-col items-center text-center gap-8 py-10">
          <h3
            data-aos="fade-down"
            className="font-semibold text-3xl md:text-5xl text-dark"
          >
            Programme de Parrainage
          </h3>
          <p className="max-w-2xl text-sec md:text-lg" data-aos="fade-down">
            Découvrez notre Programme de Parrainage exclusif chez Indian Method
            ! En tant qu'adepte de notre plateforme, vous pouvez désormais
            profiter de multiples avantages en recommandant nos formations à
            d'autres passionnés. Non seulement vous contribuez à enrichir leur
            parcours professionnel, mais vous serez également récompensé pour
            votre engagement. Rejoignez-nous dans cette aventure de partage de
            connaissances et de succès !
          </p>
          <Link data-aos="fade-in" to={"/become-sponsor"} className="brand-btn">
            Devenir parrain
          </Link>

          <div data-aos="fade-up" className="mt-6 mb-2 relative max-w-[40rem]">
            <img
              src={maclayout}
              alt="Macbook Layout"
              className="w-full pointer-events-none"
            />
            <img
              src={illustration1}
              alt="App Dashboard"
              className="absolute w-[81%] top-[4%] left-[10%] pointer-events-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center">
          <h3 data-aos="fade-in" className="font-medium text-3xl text-center">
            Quels sont les avantages ?
          </h3>
          <div className="bg-[#EEECEC5C] w-full py-20">
            <div className="appx grid place-items-center grid-cols-2 md:grid-cols-4 gap-4">
              {advantages.map((each, i) => (
                <div
                  data-aos="fade-up"
                  key={each.label + i}
                  className="flex max-w-[14rem] w-full h-full justify-center text-center flex-col rounded-lg items-center px-5 py-10 gap-4 bg-[#D9D9D954]"
                >
                  {each.img}
                  <p>{each.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex appx py-20 flex-col gap-6 gap-y-20 items-center">
          <h3 data-aos="fade-up" className="font-medium text-3xl text-center">
            Structure de Récompense
          </h3>

          <div data-aos="fade-in" className="flex flex-col md:flex-row">
            {structure.map((each, i) => (
              <div key={i + each.title} className="py-5">
                <div
                  className={`bg-primary h-1 relative ${
                    i == 0 ? "md:ml-10" : ""
                  }`}
                >
                  <span
                    className={`absolute w-6 h-6 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full text-white text-[.55rem] bg-primary ${
                      i == 3
                        ? "md:right-0"
                        : i == 0
                        ? "-left-1"
                        : "left-2 md:left-11 -translate-x-1/2"
                    }`}
                  >
                    15%
                  </span>
                </div>
                <div
                  className={`flex flex-col gap-2 mt-5 px-10 ${
                    i == 3 ? "pr-0" : ""
                  }`}
                >
                  <h3
                    className={`ext-sm text-[#0D0B26] font-medium ${
                      i == 3 ? "md:text-right" : ""
                    }`}
                  >
                    {each.title}
                  </h3>
                  <p className="text-primary text-sm">{each.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link data-aos="fade-in" to={"/become-sponsor"} className="brand-btn">
            Devenir parrain
          </Link>
        </div>

        <div className="py-20">
          <div className="overflow-hidden flex items-center justify-center gap-x-10 md:gap-x-20 lg:gap-x-32 gap-y-6">
            <div
              data-aos="zoom-out-right"
              className="w-full md:max-w-[50%] flex md:justify-end px-5"
            >
              <div className="flex flex-col gap-2 max-w-sm">
                <MemoBars />
                <h3 className="mt-2 font-semibold text-2xl text-dark">
                  Suivez vos revenus en direct.
                </h3>
                <p className="text-[#969698] text-sm max-w-xs py-4">
                  Découvrez notre outil et suivez l'évolution de vos revenus au
                  quotidien. Fixez-vous des objectifs ambitieux et mesurez votre
                  progression pour continuellement vous surpasser.
                </p>

                <button className="text-primary font-semibold font-inter flex items-center gap-2">
                  Découvrir notre application
                  <MemoArrRight />
                </button>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="hidden md:block w-full max-w-[50%] border-[3px] border-black rounded-l-lg -mr-2 overflow-hidden"
            >
              <img
                src={illustration1}
                className="h-[30rem] object-cover object-left-top w-full"
              />
            </div>
          </div>

          <div className="overflow-hidden mt-10 flex flex-row-reverse items-center justify-center gap-x-10 md:gap-x-20 lg:gap-x-32 gap-y-6">
            <div
              data-aos="zoom-out-left"
              className="w-full md:max-w-[50%] flex justify-start px-5"
            >
              <div className="flex flex-col gap-2 max-w-sm">
                <MemoSpeed />
                <h3 className="mt-2 font-semibold text-2xl text-dark">
                  Progressez et Surpassez-vous !
                </h3>
                <p className="text-[#969698] text-sm max-w-sm py-4">
                  Sur cette plateforme, lancez-vous dans une compétition amicale
                  entre parrains et visualisez votre classement. Chaque
                  contribution se voit récompensée par un score, vous permettant
                  de mesurer votre succès et celui de vos pairs.
                </p>

                <button className="text-primary font-semibold font-inter flex items-center gap-2">
                  Nos Formations
                  <MemoArrRight />
                </button>
              </div>
            </div>

            <div
              data-aos="fade-right"
              className="hidden md:block w-full max-w-[50%] border-[3px] border-black rounded-r-lg -ml-2 overflow-hidden"
            >
              <img
                src={illustration2}
                className="h-[30rem] object-cover object-right-top w-full"
              />
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="appx flex flex-col items-center text-center gap-8 py-10"
        >
          <h3 className="font-semibold text-2xl md:text-3xl text-dark">
            Pourquoi Rejoindre Notre Programme ?
          </h3>
          <p className="max-w-4xl mt-4 pb-10 md:text-lg">
            Rejoindre notre Programme de Parrainage offre des avantages
            attrayants pour les passionnés qui souhaitent non seulement
            promouvoir des formations de qualité, mais aussi bénéficier d'une
            structure de récompenses stimulante. Avec du matériel de promotion
            exclusif, un suivi en temps réel de vos gains, des paiements
            sécurisés et réguliers, et un support dédié, vous avez tous les
            outils pour réussir. En devenant parrain, vous maximisez non
            seulement vos revenus grâce à des récompenses de base et des bonus
            de performance, mais vous faites également partie d'une communauté
            dynamique, partageant connaissances et succès
          </p>
          <Link to={"/become-sponsor"} className="brand-btn">
            Devenir parrain
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Programme
