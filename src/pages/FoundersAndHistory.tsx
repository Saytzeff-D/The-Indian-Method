import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import pp from "../assets/pp.png"
import MemoUserAccount from "../components/svgs/UserAccount"
import MemoBag from "../components/svgs/Bag"
import Reussite from "../assets/Reussite.png"
import evolution from "../assets/evolution.png"
import Qualite from "../assets/Qualite.png"
import Communaute from "../assets/Communaute.png"
import ScrollLink from "../components/ScrollLink"
import MemoMapWrap from "../components/svgs/MapWrap"
import romeo from "../assets/romeo.png"
import sacha from "../assets/sacha.png"

const FoundersAndHistory = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div id="founders-top" className="appx py-10 md:py-20">
        <div
          data-aos="fade-up"
          className="flex text-center flex-col gap-6 m-auto max-w-[50rem]"
        >
          <h3 className="md:text-5xl text-3xl font-semibold text-dark">
            Notre communauté
          </h3>
          <h3
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundImage:
                "linear-gradient(90deg, #396F63 0%, #17AD8B 100%)",
            }}
            className="md:text-5xl text-3xl font-semibold"
          >
            unie par la diversité du monde entier
          </h3>

          <div className="bg-[#D0D5DD] h-1.5 max-w-[30rem] mx-auto mb-10 w-full"></div>

          <MemoMapWrap className="" />
          <p className="text-dark my-10">
            Chez The Indian Method, nous réinventons la formation
            professionnelle en ligne. Fondée par Roméo, un passionné
            d'entrepreneuriat et de technologie, notre entreprise s'est donnée
            pour mission de transformer radicalement l'approche traditionnelle
            des formations en ligne. À travers nos cours interactifs, soutenus
            par des appels vocaux et des modules ciblés, nous proposons une
            expérience d'apprentissage complète et engageante. Notre engagement
            envers la qualité, l'évolution constante et la construction d'une
            communauté solide forme le socle de notre philosophie. Chez nous,
            chaque cours est une pierre posée sur le chemin de votre succès.
          </p>
        </div>
      </div>
      {/* <div
        id="founders-top"
        className="appx grid md:grid-cols-2 min-h-[70vh] gap-4 lg:gap-10"
      >
        <div data-aos="fade-right" className="flex flex-col gap-6 my-auto">
          <h3 className="md:text-5xl mt-10 md:mt-0 text-3xl font-semibold text-dark">
            The Indian Method
          </h3>
          <p className="text-tsec">
            Chaque année, Mindeo accompagne des milliers d’entrepreneurs vers la
            réussite grâce à des formations dans les domaines du e-commerce, de
            l’entrepreneuriat, de l’investissement et du développement
            personnel.
            <br /> <br />
            Fort d’une volonté de démocratiser l’enseignement et d’un réseau des
            meilleurs experts francophones, Mindeo permet à quiconque le
            souhaite d’acquérir les compétences nécessaires pour atteindre la
            liberté professionnelle, financière et géographique.
          </p>
        </div>
        <div data-aos="fade-left" className="my-auto relative">
          <img
            src={man1}
            className="w-full object-cover my-auto pointer-events-none"
            alt=""
          />
        </div>
      </div> */}

      <div className="appx flex flex-col items-center">
        <h3
          data-aos="fade-up"
          className="text-2xl md:text-3xl mt-10 md:mt-0 font-semibold text-center"
        >
          Les fondateurs & Co- fondateurs
        </h3>

        <div className="grid py-20 md:grid-cols-3 max-w-[60rem] gap-10">
          <Founder
            name="Roméo"
            position="Fondateur"
            image={romeo}
            note={`Roméo a transformé sa passion pour la création de sites Web et l'entrepreneuriat en une plateforme de formation révolutionnaire. Son but est de faire croître une communauté privée forte et d'organiser des événements qui connectent et enrichissent.`}
          />
          <Founder
            name="Raphaël"
            position="Co-Fondateur "
            note={`Raphaël / Kwi , co-fondateur, gère l'administration et le recrutement. Il est essentiel au fonctionnement efficace de notre entreprise et à l'optimisation de nos processus internes.`}
          />
          <Founder
            name="Sacha"
            image={sacha}
            position="Administrateur"
            note={`Sacha s'occupe de la satisfaction des clients, de l'image de marque, et de la gestion des événements. Son rôle est vital pour maintenir la qualité et l'engagement au sein de notre communauté.`}
          />
        </div>
      </div>

      <div className="appx flex flex-col items-center">
        <h3
          data-aos="fade-up"
          className="text-3xl font-semibold text-center mb-20"
        >
          Notre Histoire
        </h3>

        {[
          {
            year: "Début 2022",
            desc: "Début de la création de sites web, premier site vendu à une laverie.",
          },
          {
            year: "Fin 2022",
            desc: "Décision de déléguer le travail à des Indiens pour réduire les coûts.",
          },
          {
            year: "Début 2023",
            desc: "Réalisation du premier chiffre d'affaires de 10000 € en un mois.",
          },
          {
            year: "Mai 2023",
            desc: `Lancement de "The Indian Method" suite au succès rencontré sur Tiktok. `,
          },
          {
            year: "Été 2023",
            desc: `Préparation des formations et recrutement d'une équipe de 50 Indiens qualifiés.`,
          },
          {
            year: "Août 2023",
            desc: "Début des ventes des formations.",
          },
          {
            year: "Novembre 2023",
            desc: `Doublement des ventes avec 200 formations vendues. Franchissement du cap des 10 000 membres dans la communauté.`,
          },
          {
            year: "Fevrier 2024",
            desc: `Pause dans les ventes pour se concentrer sur un nouveau plan marketing et le développement de l'application.`,
          },
          {
            year: "Mai 2024...",
            desc: `Lancement réussi de la nouvelle application et de la suite de logiciels.`,
          },
        ].map((each) => (
          <div
            data-aos="fade-in"
            // data-aos-delay="-1000"
            className="w-full grid grid-cols-12"
          >
            <h3 className="col-span-5 md:col-span-6 mt-14 text-right px-4 md:px-10 text-xl sm:text-3xl text-primary font-semibold">
              {each.year}
            </h3>
            <p
              className="text-sm sm:text-base pb-5 sm:pb-10 md:pb-20 pt-[3.6rem] relative border-l-4 border-tsec/30 px-4 md:px-10 max-w-md font-semibold text-dark col-span-7 md:col-span-6 before:content-[''] before:absolute before:h-3 before:w-3 before:bg-dark2 before:rounded-full before:top-16 before:-left-2"
              dangerouslySetInnerHTML={{ __html: each.desc }}
            ></p>
          </div>
        ))}
      </div>

      <div className="appx flex flex-col items-center pt-20 pb-5">
        <h3
          // data-aos="fade-in"
          className="text-3xl bg-white h-7 flex items-center font-semibold text-center mb-20  relative"
        >
          Nos valeurs
          <span className="w-24 skew-x-[25deg] -z-10 left-1/2 top-1/2 -rotate-[60deg] -translate-x-1/2 -translate-y-1/2 absolute h-1.5 bg-primary"></span>
        </h3>

        <div className="grid mb-24 gap-4 lg:gap-10 xl:gap-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {[
            {
              img: <img className="h-16 w-fit" src={Reussite} alt="Réussite" />,
              desc: "Nos cours sont des fondations solides pour bâtir votre succès. Ils ouvrent des perspectives et vous équipent pour exceller dans votre carrière.",
              title: "Réussite",
            },
            {
              img: (
                <img className="h-16 w-fit" src={evolution} alt="evolution" />
              ),
              desc: "Nous perfectionnons nos formations en continu pour assurer que votre apprentissage soit toujours à la pointe et adapté à vos besoins.",
              title: "Évolution",
            },
            {
              img: <img className="h-16 w-fit" src={Qualite} alt="Qualité" />,
              desc: "Nous nous engageons à vous offrir des formations de qualité, appuyées par des outils intuitifs qui garantissent une expérience d'apprentissage enrichissante.",
              title: "Qualité",
            },
            {
              img: (
                <img className="h-16 w-fit" src={Communaute} alt="Communauté" />
              ),
              desc: "Chez nous, la communauté est clé. Nos événements sont des moments où tous se réunissent pour échanger, apprendre et progresser côte à côte.",
              title: "Communauté",
            },
          ].map((each) => (
            <div
              data-aos="zoom-in"
              key={each.title}
              className="flex flex-col gap-4"
            >
              {each.img}
              <h3 className="text-xl font-medium">{each.title}</h3>
              <p className="text-[#929292]">{each.desc}</p>
            </div>
          ))}
        </div>

        <ScrollLink to="pricing" scrollOn={"/welcome"}>
          <button className="brand-btn" data-aos="fade-in">
            Nous rejoindre{" "}
          </button>
        </ScrollLink>
      </div>

      <Footer />
    </div>
  )
}

export default FoundersAndHistory

const Founder = ({
  note,
  other,
  name,
  image,
  position,
}: {
  note: string
  name: string
  image?: string
  position: string
  other?: JSX.Element
}) => {
  return (
    <div data-aos="fade-up" className=" flex flex-col gap-3">
      <div className="flex max-w-[18rem] h-[18rem] items-center justify-center overflow-hidden rounded-2xl ">
        <img
          src={image ?? pp}
          className={`w-[120%] h-[120%] object-cover ${
            name == "Roméo" ? "object-[50%_10%]" : ""
          }`}
          alt="Display Picture"
        />
      </div>
      <Tag value={name} icon={<MemoUserAccount />} />
      <Tag value={position} icon={<MemoBag />} />
      {other}
      <p className="text-tsec">{note}</p>
    </div>
  )
}

const Tag = ({ icon, value }: { icon: JSX.Element; value: string }) => {
  return (
    <span className="flex w-fit px-3 py-1 text-[#010128] whitespace-nowrap items-center gap-2 bg-[#F8F8FF] rounded-lg font-light">
      <span className="w-6">{icon}</span>
      <span>{value}</span>
    </span>
  )
}
