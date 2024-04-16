export const navLinks = [
	{ whole: true, label: "Accueil", scrollOn: "/welcome", to: "welcome-top" },
	{ whole: true, label: "Indian Method", scrollOn: "/indian-method", to: "indian-method" },
	{ whole: true, label: "Notre Application ", scrollOn: "/our-application", to: "our-application" },
	{ whole: false, label: "Avis", to: "reviews", scrollOn: "/welcome", },
	{ whole: true, label: "Parrainage", scrollOn: "/sponsorship", to: "sponsorship" },
	{ whole: true, label: "FAQ", scrollOn: "/faqs", to: "faqs-top" },
	{ whole: true, label: "Contact", to: "/contact", },
	{ whole: true, label: "Qui sommes nou?", to: "founders-top", scrollOn: "/who-we-are", },
	{ whole: false, label: "Nos formations", to: "pricing", scrollOn: "/welcome", },
]

export const plans: { [key: number]: { amount: string } } = {
	0: { amount: "--" },
	1: { amount: "190€" },
	2: { amount: "450€" },
}


export const structure = [
	{ title: "Statut Parrain débutant", desc: "Recevez 15% de la valeur de chaque vente réalisée grâce à votre recommandation." },
	{ title: "Statut Parrain Reconnu", desc: "Augmentez votre récompense à 20% pour chaque mois avec plus de 10 inscriptions réalisées grâce à vous." },
	{ title: "Statut Super Parrain", desc: "Atteignez le statut de Super Parrain avec plus de 20 inscriptions dans un mois et bénéficiez d'une récompense exceptionnelle de 25%." },
	{ title: "Soon", desc: "" },
]

export const trainingFaqs = [
	{ question: `Comment réserver un call pour d'autres questions ?`, answer: `Évidemment, vous pouvez réserver un appel directement via notre site en utilisant le lien suivant : Réservez votre appel (avec le lien sur le texte ) . Alternativement, vous pouvez ouvrir un ticket sur notre serveur Discord(avec le lien sur le discord), et notre équipe vous répondra dès que possible.`, },
	{ question: "J'aimerais payer, comment faire ?", answer: "" },
	{
		question: "Comment faire pour trouver des indiens ?", answer: ""
	},
	{
		question: "Combien de temps dure la formation ?", answer: ""
	}
]

export const indianMethodFaqs = [
	{
		question: "L'indien est-il fourni dans la formation la moins chère aussi ?", answer: "Oui, les contacts indiens sont inclus dans toutes nos formations, de la moins chère à la plus chère."
	},
	{ question: "What is your favorite template from BRIX Templates?", answer: "" },
	{
		question: `Le prix des formations est-il négociable ?`, answer: ""
	},
	{ question: `Vendez-vous les contacts des Indiens à l'unité ou est-ce uniquement fourni avec la formation ?`, answer: "" },
]

export const links = {
	youtube: "https://www.youtube.com/@manusinauro",
	discord: "https://discord.gg/rRUmkpdkC3",
	instagram: "https://www.instagram.com/manusinauro",
	tiktok: "https://www.tiktok.com/@manusinauro"
}


export const reviews1 = [
	{
		name: "Antoine",
		label: "UX Designer @Brello",
		desc: `J'ai commencé ma formation et je suis bien avancé. J'ai même recruté un ami en tant que closer pour m'aider à trouver des clients. En seulement 2 jours, il a déjà réussi à m'en ramener un, et il semble que je pourrais probablement vendre un site à cette personne. Les débuts sont prometteurs !`,
	},
	{
		name: "Christopher",
		label: "Creative Director @Yo",
		desc: `j ai commencer la formation et est fait le premier vocal  les explication sont franchement tres claires ,je m attendais a 1 accompagnement aussi poussé. a ce prix la ,  il a pris le temps de tout expliquer de nouveau et on sait que leur but et vraiment de nous faire avancer et pas de juste prendre notre argent`,
	},
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
		name: "Rara",
		label: "UI Designer @Boo",
		desc: `Je viens de finir le vocal trouver un client, tout était clair. Le futur semble être bon concernant la recherche de client`,
	},
	{
		name: "Mehdi",
		label: "UI Designer @Boo",
		desc: `Actuellement en formation essentiel, j’étais sceptique au départ mais une fois le vocal d’introduction fini j’ai finalement les idées plus claires dû à la clarté de l’explication. L’accompagnement a l’air sérieux et rigoureux. De plus la formation m’a paru très intéressante je vais donc faire le maximum pour pouvoir développer mon business je vous tiens au courant des prochaines étapes !`,
	},
]