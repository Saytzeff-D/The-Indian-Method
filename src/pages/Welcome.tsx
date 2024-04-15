import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import man1 from "../assets/man1.png"
import MemoTerminal from "../components/svgs/Terminal"
import MemoPhoneGreen from "../components/svgs/PhoneGreen"
import MemoWalletGreen from "../components/svgs/WalletGreen"
import internet from "../assets/internet.png"
import ai from "../assets/ai.png"
import shopify from "../assets/shopify.png"
import conception from "../assets/conception.png"
import ingenieur from "../assets/ingenieur.png"
import devweb from "../assets/dev-web.png"
import modeleweb from "../assets/modele-web.png"
import mobile from "../assets/mobile.png"
import vidimage from "../assets/video.png"
import Review from "../components/Review"
import ScrollLink from "../components/ScrollLink"
import { Link } from "react-router-dom"

const structure = [
  {
    title: "Trouver un développeur indien",
    sub: "Première étape",
    icon: <MemoTerminal />,
    desc: `Trouvez des développeurs compétents proposant des services digitaux, y compris des applications iOS.`,
  },
  {
    title: "Statut Parrain Reconnu",
    sub: "Trouver un client",
    icon: <MemoPhoneGreen />,
    desc: "Identifiez et signer aisément des clients en France grâce à notre méthode de prospection.",
  },
  {
    title: "Vendez le site",
    sub: "Troisième étape",
    icon: <MemoWalletGreen />,
    desc: "Assurez-vous de conserver votre commission pour votre travail de gestion efficace.",
  },
]

const advantages = [
  {
    label: "Créer des sites internet",
    img: <img src={internet} alt="" className="w-14" />,
  },
  {
    label: "Créer des bot IA",
    img: <img src={ai} alt="" className="w-14" />,
  },
  {
    label: "Développer des logiciels",
    img: <img src={ingenieur} alt="" className="w-14" />,
  },
  {
    label: "Référencer des sites ",
    img: <img src={modeleweb} alt="" className="w-14" />,
  },
  {
    label: "Développer des boutiques Shopify / worldpress....",
    img: <img src={shopify} alt="" className="w-14" />,
  },
  {
    label: "Créer des logo, flyer .... ",
    img: <img src={conception} alt="" className="w-14" />,
  },
  {
    label: "Monter des vidéos / short....",
    img: <img src={devweb} alt="" className="w-14" />,
  },
  {
    label: "Développer des applications",
    img: <img src={mobile} alt="" className="w-14" />,
  },
]

const Welcome = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="appx flex flex-col items-center">
        <h3
          data-aos="fade-in"
          data-aos-duration="1000"
          className="text-3xl md:text-5xl text-center my-10 md:my-20 font-semibold text-dark"
        >
          Qu'est ce que The{" "}
          <span className="relative inline-block">
            Indian Method
            <span className="bg-primary w-full absolute bottom-0 left-0 h-4 -z-10 inline-block mt-auto"></span>
          </span>{" "}
          ?
        </h3>

        <div className="grid md:grid-cols-2 pt-10 gap-4 lg:gap-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex text-center md:text-left flex-col gap-6 my-auto"
          >
            <p className="text-dark md:text-lg">
              La "Young Indian Method" est une méthode d'entrepreneuriat qui
              implique l'embauche de jeunes travailleurs indiens pour travailler
              à distance, profitant des taux de change avantageux pour minimiser
              les coûts et maximiser les profits. Cette approche est souvent
              discutée dans le cadre de la culture entrepreneuriale moderne et
              de l'optimisation des processus d'affaires.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 ">
              <button className="px-10 flex items-center gap-3 bg-primary rounded-full text-white py-2.5 font-medium">
                Qui sommes-nous ?
              </button>
              <Link
                to={"https://www.youtube.com/@manusinauro"}
                target="_blank"
                className="px-10 border-primary border rounded-full py-2.5 font-medium"
              >
                Vidéo explicative
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="my-auto relative"
          >
            <img
              src={man1}
              className="w-full object-cover my-auto pointer-events-none"
              alt=""
            />
            <button className="bg-white rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-20 w-20 min-w-20">
              <svg
                width="25"
                height="30"
                viewBox="0 0 25 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5053 13.5233C24.7754 14.3041 24.7754 16.1501 23.5053 16.9309L3.57747 29.1814C2.2449 30.0005 0.530066 29.0418 0.530066 27.4775L0.530067 2.9767C0.530067 1.41248 2.2449 0.453712 3.57746 1.27289L23.5053 13.5233Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>

        <h3
          data-aos="fade-up"
          className="text-3xl md:text-5xl text-center mb-10 md:mb-24 mt-20 md:mt-40 font-semibold text-dark"
        >
          Comment ça marche ?
        </h3>

        <div data-aos="fade-in">
          <div className="flex flex-col md:flex-row">
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
                        ? "right-0"
                        : i == 0
                        ? "-left-1"
                        : "md:left-11 left-2 -translate-x-1/2"
                    }`}
                  >
                    <svg
                      width="8"
                      height="7"
                      viewBox="0 0 8 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.99998 4.793L1.35348 3.1465L0.646484 3.8535L2.99998 6.207L7.85348 1.3535L7.14648 0.6465L2.99998 4.793Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className={`flex flex-col mt-5 px-10 ${i == 3 ? "pr-0" : ""}`}
                >
                  <h3 className="text-tsec/70 text-xs font-semibold">
                    {each.sub}
                  </h3>
                  <h3
                    className={`text-sm my-1 flex items-center gap-2 text-[#0D0B26] font-medium ${
                      i == 3 ? "text-right" : ""
                    }`}
                  >
                    {each.title}
                    {each.icon}
                  </h3>
                  <p className="text-primary text-sm">{each.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h3
          data-aos="fade-up"
          className="text-3xl md:text-5xl text-center my-10 md:my-20 font-semibold text-dark"
        >
          Que peuvent faire nos{" "}
          <span className="relative inline-block">
            développeurs
            <span className="bg-primary w-full absolute bottom-0 left-0 h-4 -z-10 inline-block mt-auto"></span>
          </span>{" "}
          indiens ?
        </h3>

        <div className="lg:appx w-full mb-20 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 xl:gap-14">
          {advantages.map((each, i) => (
            <div
              data-aos="zoom-in"
              key={each.label + i}
              className="flex h-full justify-center text-center flex-col rounded-lg items-center py-10 gap-2 bg-[#D9D9D954]"
            >
              {each.img}
              <p>{each.label}</p>
            </div>
          ))}
        </div>

        <ScrollLink to="pricing" scrollOn={"/welcome"}>
          <button className="brand-btn" data-aos="fade-in">
            En savoir plus !
          </button>
        </ScrollLink>

        <h3
          data-aos="fade-up"
          className="text-3xl md:text-5xl text-center my-10 md:my-20 font-semibold text-dark"
        >
          Quelques{" "}
          <span className="relative inline-block">
            réalisations
            <span className="bg-primary w-full absolute bottom-0 left-0 h-4 -z-10 inline-block mt-auto"></span>
          </span>{" "}
          de nos Indiens
        </h3>

        <img
          data-aos="zoom-out-up"
          src={vidimage}
          className="rounded-xl w-full object-cover pointer-events-none"
          alt=""
        />

        <h3
          data-aos="fade-in"
          className="font-bold text-xl md:text-3xl mt-20 max-w-lg text-center"
        >
          Un site réalisé par un développeur Indien pour 150$
        </h3>

        <h3
          data-aos="fade-up"
          className="text-3xl md:text-5xl text-center my-10 md:my-20 font-semibold text-dark"
        >
          Quelques retours de nos élèves
        </h3>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              name: "Blend",
              label: "UX Designer @Brello",
              desc: `Formation essentiel, premier vocal d'introduction fini, c'était clair, dés la fin de l'appel on a une ligne directrice et des bases qui sont posées pour nous aider au mieux de A à Z à générer nos premiers revenus, je donnerai des nouvelles sur les prochaines étapes, l'accompagnement est sérieux!`,
            },
            {
              name: "Khabib",
              label: "Creative Director @Yo",
              desc: `Formation essentiel incroyable on a pu trouver le développeur indien très rapidement on a fait la formation en vocale ensemble tous c bien passer je suis sensé faire 550€ de benef d’ici deux trois jour grâce à mon premier client quand on veut on peux!!`,
            },
            {
              name: "Mehdi",
              label: "UI Designer @Boo",
              desc: `Actuellement en formation essentiel, j’étais sceptique au départ mais une fois le vocal d’introduction fini j’ai finalement les idées plus claires dû à la clarté de l’explication. L’accompagnement a l’air sérieux et rigoureux. De plus la formation m’a paru très intéressante je vais donc faire le maximum pour pouvoir développer mon business je vous tiens au courant des prochaines étapes !`,
            },
          ].map((each) => (
            <Review {...each} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 w-full mb-20">
          {[
            {
              name: "Titouan D.",
              label: "UX Designer @Brello",
              desc: (
                <div className="w-full max-w-80 mx-auto rounded-full bg-gray-100 my-4 h-10"></div>
              ),
            },
            {
              name: "Sacha B.",
              label: "Creative Director @Yo",
              desc: (
                <div className="w-full max-w-80 mx-auto rounded-full bg-gray-100 my-4 h-10"></div>
              ),
            },
          ].map((each) => (
            <Review {...each} />
          ))}
        </div>

        <button data-aos="fade-in" className="brand-btn">
          Nous rejoindre{" "}
        </button>
      </div>

      <Footer />
    </div>
  )
}

export default Welcome
