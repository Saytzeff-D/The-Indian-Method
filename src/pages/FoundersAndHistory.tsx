import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import man1 from "../assets/man1.png"
import pp from "../assets/pp.png"
import MemoUserAccount from "../components/svgs/UserAccount"
import MemoBag from "../components/svgs/Bag"
import MemoPhoneGreen from "../components/svgs/PhoneGreen"
import Reussite from "../assets/Reussite.png"
import evolution from "../assets/evolution.png"
import Qualite from "../assets/Qualite.png"
import Communaute from "../assets/Communaute.png"

const FoundersAndHistory = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="appx grid md:grid-cols-2 min-h-[70vh] gap-4 lg:gap-10">
        <div className="flex flex-col gap-6 my-auto">
          <h3 className="text-5xl font-semibold text-dark">
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
        <div className="my-auto relative">
          <img
            src={man1}
            className="w-full object-cover my-auto pointer-events-none"
            alt=""
          />
        </div>
      </div>

      <div className="appx flex flex-col items-center">
        <h3 className="text-3xl font-semibold text-center">
          Les fondateurs & CEO
        </h3>

        <div className="grid py-20 md:grid-cols-3 max-w-[60rem] gap-10">
          <Founder
            name="Roméo"
            position="Fondateur"
            other={<Tag value="Formateur" icon={<MemoPhoneGreen />} />}
            note={`Roméo, un entrepreneur animé par sa passion pour la technologie, a passé sept ans à naviguer dans le secteur de la vente de sites internet en France. Son parcours l'a mené à fonder récemment "L'Indian Method".`}
          />
          <Founder
            name="Raphaël"
            position="Co-Fondateur "
            other={<Tag value="Développeur" icon={<MemoPhoneGreen />} />}
            note={`Suite à une série de ventes réussies de plateformes en ligne, Raphaël s'est associé avec Roméo pour lancer une nouvelle initiative nommée "L'Indian Method".`}
          />
          <Founder
            name="Sacha"
            position="Administrateur"
            note={`Un jeune résident belge, ayant quitté le système éducatif à l'âge de 9 ans, s'est lancé dans le commerce d'articles de seconde main, parvenant à générer un revenu annuel de 715 euros. Il vit en Belgique avec une partenaire plus âgée.`}
          />
        </div>
      </div>

      <div className="appx flex flex-col items-center">
        <h3 className="text-3xl font-semibold text-center mb-20">
          Notre Histoire
        </h3>

        {[
          { year: "2019", desc: "Découverte de la vente de Site Web" },
          {
            year: "2020",
            desc: "Déléguée le travail à des développeurs Francais par manque de temps ",
          },
          {
            year: "2021",
            desc: "Les développeurs Français coutent trop cher nous arrêtons de les employer.",
          },
          {
            year: "2023",
            desc: "Invention de L’Indian method",
          },
          {
            year: "2023",
            desc: "Conception de la formation “Indian Method. <br/> Génère plus de 50k à l’année grâce à L’indian Method à 16 ans",
          },
          {
            year: "P1-2023",
            desc: "Finissions de la formation <br/> <br/> Recrute une équipe",
          },
          {
            year: "P2-2023",
            desc: "Publication de la formation “Indian Method”",
          },
          {
            year: "P1-2024",
            desc: "L’influence de la formation “Indian method” explose <br/> <br/> Génère plus de 20k par mois à 1è ans grâce a l’Indian method <br/> <br/> Plus de 10k de membres",
          },
          {
            year: "P2-2024",
            desc: "Lancement de l’application “Indian Method”",
          },
        ].map((each) => (
          <div className="w-full grid grid-cols-12">
            <h3 className="col-span-4 md:col-span-6 mt-14 text-right px-4 md:px-10 text-3xl text-primary font-semibold">
              {each.year}
            </h3>
            <p
              className="pb-10 md:pb-20 pt-[3.6rem] relative border-l-4 border-tsec/30 px-4 md:px-10 max-w-md font-semibold text-dark col-span-8 md:col-span-6 before:content-[''] before:absolute before:h-3 before:w-3 before:bg-dark2 before:rounded-full before:top-16 before:-left-2"
              dangerouslySetInnerHTML={{ __html: each.desc }}
            ></p>
          </div>
        ))}
      </div>

      <div className="appx flex flex-col items-center pt-20 pb-5">
        <h3 className="text-3xl bg-white h-7 flex items-center font-semibold text-center mb-20  relative">
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
            <div className="flex flex-col gap-4">
              {each.img}
              <h3 className="text-xl font-medium">{each.title}</h3>
              <p className="text-[#929292]">{each.desc}</p>
            </div>
          ))}
        </div>

        <button className="brand-btn">Nous rejoindre </button>
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
  position,
}: {
  note: string
  name: string
  position: string
  other?: JSX.Element
}) => {
  return (
    <div className=" flex flex-col gap-3">
      <img
        src={pp}
        className="rounded-2xl max-w-[18rem]"
        alt="Display Picture"
      />
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
