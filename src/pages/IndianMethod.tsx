import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import man1 from "../assets/man1.png"
import man2 from "../assets/man2.png"
import clock from "../assets/clock.png"
import MemoIndianMethodPath from "../components/svgs/IndianMethodPath"

const IndianMethod = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="appx grid md:grid-cols-2 min-h-[70vh] gap-4">
        <div className="flex flex-col gap-6 my-auto">
          <h3 className="text-5xl font-semibold text-dark">
            The Indian Method
          </h3>
          <p className="text-tsec">
            Avec The Indian Method, accédez à un réseau d'experts indiens pour
            concrétiser vos visions créatives sans vous ruiner.
          </p>
          <div className="flex items-center gap-6 ">
            <button className="px-10 flex items-center gap-3 bg-primary rounded-full text-white py-2.5 font-medium">
              Commencer
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.9043 1.65436L14.2499 8.00001L7.9043 14.3457"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.2499 8L0.75 8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="px-10 border-primary border text-primary rounded-full py-2.5 font-medium">
              Vidéo explicative
            </button>
          </div>
        </div>
        <div className="my-auto relative">
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

      <div className="appx w-full text-center">
        <div className="w-full max-w-lg mx-auto mb-20 h-2 bg-dark"></div>
        <h3 className="text-lg text-center mx-auto max-w-xl font-semibold text-dark">
          Inscrivez-vous à The Indian Method et commencez à bâtir votre succès
          dès aujourd'hui.
        </h3>

        <div className="grid my-10 grid-cols-2 md:grid-cols-4 gap-5">
          <div className="flex flex-col items-center">
            <h3 className="text-dark text-3xl font-semibold">
              4 <span className="text-primary">ans</span>
            </h3>
            <h3 className="text-lg font-semibold text-dark">D’expérience</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-dark text-3xl font-semibold">
              86 <span className="text-primary">+</span>
            </h3>
            <h3 className="text-lg font-semibold text-dark">
              Partenaires Indiens
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-dark text-3xl font-semibold">
              300 <span className="text-primary">+</span>
            </h3>
            <h3 className="text-lg font-semibold text-dark">Elèves</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-dark text-3xl font-semibold">
              10 <span className="text-primary">+</span>
            </h3>
            <h3 className="text-lg font-semibold text-dark">Pays</h3>
          </div>
        </div>
      </div>

      <img
        src={man2}
        className="mt-5 max-h-[70vh] object-cover object-top"
        alt=""
      />

      <div className="relative mb-20">
        <div className="bg-[#F7FFFD]">
          <div className="appx flex flex-col gap-4 items-center relative z-20 pt-20">
            <span className="px-5 flex items-center gap-3 bg-primary rounded-full text-white py-1.5 font-medium">
              Nos Formations
            </span>
            <h3 className="font-semibold my-3 text-5xl text-primary">
              THE INDIAN METHOD
            </h3>
            <h3 className="font-semibold text-dark text-lg">
              Vous ne verrez nul part une formation aussi poussé a ce prix la !{" "}
            </h3>
            <p className="italic text-[#121A1C] my-2">
              Hésitez pas à demander un rendez-vous vocal gratuitement pour en
              savoir plus !
            </p>
          </div>
        </div>
        <MemoIndianMethodPath className="w-full top-[20rem] absolute " />
        <div className="grid appx mt-20 md:grid-cols-3 gap-6 relative z-20">
          <div className="shadow bg-white p-6 rounded-lg h-fit flex items-center flex-col gap-3">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="40" height="40" rx="20" fill="#B6EBDF" />
              <rect
                x="3"
                y="3"
                width="40"
                height="40"
                rx="20"
                stroke="#F7FFFD"
                strokeWidth="6"
              />
              <path
                d="M23.8333 14.6666L15.5 24.6666H23L22.1667 31.3333L30.5 21.3333H23L23.8333 14.6666Z"
                stroke="black"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="font-semibold text-dark">Bientôt Disponible</h3>
            <h3 className="my-2 text-4xl text-dark font-bold">--</h3>
            <img src={clock} className="opacity-20 h-40" alt="" />
            <button className="bg-dark w-full rounded-md text-white py-2">
              En savoir plus !
            </button>
          </div>

          <div className="shadow bg-white p-6 rounded-lg h-fit flex items-center flex-col gap-3">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="40" height="40" rx="20" fill="#B6EBDF" />
              <rect
                x="3"
                y="3"
                width="40"
                height="40"
                rx="20"
                stroke="#F7FFFD"
                strokeWidth="6"
              />
              <path
                d="M14.6665 25.0833L22.9998 29.25L31.3332 25.0833M22.9998 16.75L14.6665 20.9167L22.9998 25.0833L31.3332 20.9167L22.9998 16.75Z"
                stroke="black"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h3 className="font-semibold text-dark">Formation Essentiel </h3>
            <h3 className="my-2 text-4xl text-dark font-bold">190€</h3>
            <div className="flex text-[#475467] flex-col w-full gap-4 mb-2">
              {[
                { label: "Formation Personnalisé" },
                { label: "Accompagnement à chaque vente*" },
                { label: "Formation vocale (8 heures d'appel)" },
                { label: "Support  vidéo ( 10 heures ) " },
                { label: "Coaching vocal personnel" },
                { label: "Accès à notre application" },
                { label: "Formation qui évolue chaque mois" },
                { label: "Discord d’entraide privé" },
                { label: "Contactes indiens compétents " },
                { label: "Accès à notre suite de logiciels " },
              ].map((each) => (
                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#B6EBDF" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                      fill="black"
                    />
                  </svg>
                  <span>{each.label}</span>
                </div>
              ))}
            </div>
            <button className="bg-dark w-full rounded-md text-white py-2">
              En savoir plus !
            </button>
          </div>

          <div className="shadow bg-white p-6 rounded-lg h-fit flex items-center flex-col gap-3">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="40" height="40" rx="20" fill="#B6EBDF" />
              <rect
                x="3"
                y="3"
                width="40"
                height="40"
                rx="20"
                stroke="#F7FFFD"
                strokeWidth="6"
              />
              <path
                d="M14.6665 25.0833L22.9998 29.25L31.3332 25.0833M22.9998 16.75L14.6665 20.9167L22.9998 25.0833L31.3332 20.9167L22.9998 16.75Z"
                stroke="black"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h3 className="font-semibold text-dark">Formation Essentiel </h3>
            <h3 className="my-2 text-4xl text-dark font-bold">450€</h3>
            <p className="text-[#475467] my-3">Inclus Formation Essentiel</p>
            <div className="flex text-[#475467] flex-col w-full gap-4 mb-2">
              {[
                { label: "Support Prioritaire" },
                { label: "Accès au meilleurs indiens" },
                { label: "Suivi de vos performances" },
                { label: "Acces à 100% de l’application " },
                { label: "Logiciels supplémentaires" },
                { label: "Réseau d’affaires exclusif" },
                { label: "Contenu vidéo en + ( automatisation.. ) " },
                { label: "Contact privilégié avec les formateurs" },
                { label: "Formation vocale supplémentaire ( +4h )" },
                {
                  label: "Mentor personnel pour réaliser votre première vente",
                },
              ].map((each) => (
                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#B6EBDF" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                      fill="black"
                    />
                  </svg>
                  <span>{each.label}</span>
                </div>
              ))}
            </div>
            <button className="bg-dark w-full rounded-md text-white py-2">
              En savoir plus !
            </button>
          </div>
        </div>
      </div>

      <div className="appx text-center mb-20">
        <h3 className="text-4xl text-dark font-semibold">
          Qu’est ce que on pense nos élèves{" "}
        </h3>
        <p className="text-sm text-tsec my-2">
          Retrouvez tout nos avis sur Discord{" "}
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              name: "Antoine",
              label: "UX Designer @Brello",
              desc: ` J'ai commencé ma formation et je suis bien avancé. J'ai même
                recruté un ami en tant que closer pour m'aider à trouver des
                clients. En seulement 2 jours, il a déjà réussi à m'en ramener
                un, et il semble que je pourrais probablement vendre un site à
                cette personne. Les débuts sont prometteurs !`,
            },
            {
              name: "Christopher",
              label: "Creative Director @Yo",
              desc: `j ai commencer la formation et est fait le premier vocal  les explication sont franchement tres claires ,je m attendais a 1 accompagnement aussi poussé. a ce prix la ,  il a pris le temps de tout expliquer de nouveau et on sait que leur but et vraiment de nous faire avancer et pas de juste prendre notre argent`,
            },
            {
              name: "Rara",
              label: "UI Designer @Boo",
              desc: `Je viens de finir le vocal trouver un client, tout était clair. Le futur semble être bon concernant la recherche de client`,
            },
          ].map((each) => (
            <div className="[box-shadow:34.85px_29.63px_48.34px_0px#3366FF0D] rounded-lg mt-5 border border-[#E5F4F2] flex flex-col gap-3 items-center px-6 py-8">
              <img
                src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
                alt=""
                className="w-10 h-10 min-w-10 rounded-full object-cover"
              />
              <h3 className="text-lg text-dark font-semibold">{each.name}</h3>
              <p className="text-xs text-tsec">{each.label}</p>
              <p className="text-tsec text-sm">{each.desc}</p>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map(() => (
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5077 20.2404L19.3226 23.9325C20.0725 24.4055 20.9956 23.7017 20.7763 22.8364L19.0919 16.2138C19.0463 16.0302 19.0535 15.8375 19.1127 15.6579C19.1719 15.4783 19.2807 15.319 19.4264 15.1985L24.6414 10.8488C25.3222 10.2835 24.976 9.14125 24.0876 9.08356L17.2804 8.64513C17.0947 8.63432 16.9161 8.56965 16.7666 8.459C16.617 8.34836 16.5029 8.19654 16.4382 8.0221L13.8999 1.63027C13.8327 1.44556 13.7103 1.28599 13.5493 1.17324C13.3883 1.06048 13.1966 1 13 1C12.8034 1 12.6117 1.06048 12.4507 1.17324C12.2897 1.28599 12.1673 1.44556 12.1001 1.63027L9.56179 8.0221C9.4971 8.19654 9.383 8.34836 9.23343 8.459C9.08385 8.56965 8.90529 8.63432 8.71955 8.64513L1.91237 9.08356C1.02397 9.14125 0.677844 10.2835 1.35856 10.8488L6.57356 15.1985C6.71932 15.319 6.82806 15.4783 6.88726 15.6579C6.94645 15.8375 6.9537 16.0302 6.90815 16.2138L5.35057 22.3518C5.08521 23.3902 6.19282 24.2324 7.08121 23.6671L12.4923 20.2404C12.6441 20.1439 12.8202 20.0927 13 20.0927C13.1798 20.0927 13.3559 20.1439 13.5077 20.2404Z"
                      fill="#F8D57E"
                      stroke="#F8D57E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndianMethod
