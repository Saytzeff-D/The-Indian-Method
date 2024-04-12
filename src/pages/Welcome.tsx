import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import man1 from "../assets/man1.png"

const Welcome = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="appx">
        <h3 className="text-5xl text-center my-20 font-semibold text-dark">
          Qu'est ce que The Indian Method ?
        </h3>

        <div className="grid md:grid-cols-2 pt-10 gap-4 lg:gap-10">
          <div className="flex flex-col gap-6 my-auto">
            <p className="text-tsec">
              La "Young Indian Method" est une méthode d'entrepreneuriat qui
              implique l'embauche de jeunes travailleurs indiens pour travailler
              à distance, profitant des taux de change avantageux pour minimiser
              les coûts et maximiser les profits. Cette approche est souvent
              discutée dans le cadre de la culture entrepreneuriale moderne et
              de l'optimisation des processus d'affaires.
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
      </div>

      <Footer />
    </div>
  )
}

export default Welcome
