let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today = new Date();
let formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(today);
let time = new Date().toTimeString();

const mangas = [
  {
    id: 1,
    titre: "Naruto",
    createur: "Masashi Kishimoto",
    dateDeSortie: "1999",
    nombreDeSaisons: 5,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/naruto/naruto1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/naruto/naruto2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/naruto/naruto3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/naruto/naruto4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/naruto/naruto5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/naruto/naruto6.jpg"
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/narutoCreator.jpg",
    link: "https://fr.wikipedia.org/wiki/Masashi_Kishimoto",
    resume: `
      Naruto Uzumaki est un jeune ninja du village de Konoha. Depuis sa naissance, il porte en lui le démon-renard à neuf queues, ce qui lui vaut d'être rejeté par les habitants. 
      Malgré tout, Naruto rêve de devenir Hokage, le chef du village, pour obtenir la reconnaissance de tous. 
      Au fil de son parcours, il se lie d'amitié avec Sasuke et Sakura, formant la Team 7. 
      Ensemble, ils vivent de nombreuses aventures, affrontent des ennemis puissants, et participent à des guerres. 
      Naruto doit aussi apprendre à contrôler la puissance du démon scellé en lui. 
      À travers ses combats et ses rencontres, Naruto grandit et devient plus fort. 
      Sa quête est aussi celle de la paix, cherchant à mettre fin aux guerres entre ninjas. 
      L’histoire aborde des thèmes comme l’amitié, la persévérance, et le sacrifice. 
      Naruto reste un manga emblématique de la culture japonaise. 
      Le parcours héroïque de Naruto a touché des millions de fans à travers le monde.`,
    dateDecreation: formattedDate,
    time: time
  },
  {
    id: 2,
    titre: "One Peace",
    createur: "Eiichiro Oda",
    dateDeSortie: "1997",
    nombreDeSaisons: 20,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/one_peace/onepeace1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/one_peace/onepeace2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/one_peace/onepeace3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/one_peace/onepeace4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/one_peace/onepeace5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/one_peace/onepeace6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/onepeaceCreator.jpg",
    resume: `
      One Piece suit les aventures de Monkey D. Luffy, un jeune pirate dont le rêve est de trouver le légendaire trésor "One Piece" pour devenir le Roi des Pirates. 
      Luffy a mangé un fruit du démon, ce qui lui confère des pouvoirs élastiques, mais l’empêche de nager. 
      Il se lance à la conquête des mers avec son équipage, composé de personnages hauts en couleur comme Zoro, Nami, et Sanji. 
      Ensemble, ils voyagent d'île en île, affrontent des marines corrompus, des pirates cruels, et des créatures fantastiques. 
      Chaque membre de l’équipage a ses propres rêves et motivations, mais tous partagent une loyauté indéfectible envers Luffy. 
      Le monde de One Piece est vaste et riche en mystères, notamment concernant le gouvernement mondial et les anciens trésors. 
      À travers ses aventures, Luffy apprend des leçons sur l’amitié, la liberté, et le sacrifice. 
      Avec plus de 1000 épisodes et chapitres, One Piece est devenu un monument du manga. 
      Le récit d’Oda est connu pour son humour, ses batailles épiques, et ses arcs narratifs complexes. 
      Luffy ne cesse de se rapprocher de son rêve, mais de nombreux obstacles se dressent encore sur son chemin.`,
    dateDecreation: options,
    time: time
  },
  {
    id: 3,
    titre: "Demon Slayer",
    createur: "Koyoharu Gotouge",
    dateDeSortie: "2016",
    nombreDeSaisons: 2,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/demon-slayer/demonSlayer1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/demon-slayer/demonSlayer2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/demon-slayer/demonSlayer3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/demon-slayer/demonSlayer4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/demon-slayer/demonSlayer5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/demon-slayer/demonSlayer6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/demonCreator.png",
    link: "https://fr.wikipedia.org/wiki/Koyoharu_Got%C5%8Dge",
    resume: `
      Tanjiro Kamado, un jeune garçon, voit sa famille massacrée par des démons. 
      Seule sa sœur, Nezuko, survit, mais elle est transformée en démon. 
      Décidé à la sauver et à venger sa famille, Tanjiro rejoint le corps des pourfendeurs de démons. 
      Avec son épée et des techniques de respiration spéciales, il se lance dans une quête pour éradiquer les démons. 
      Au fil de son périple, il rencontre des alliés comme Zenitsu et Inosuke, qui l’accompagnent dans ses combats. 
      Tanjiro se confronte à de puissants démons, chacun ayant des pouvoirs uniques et terrifiants. 
      Le manga explore les thèmes de la famille, du sacrifice, et de la persévérance. 
      Tanjiro doit aussi faire face à la menace de Muzan, le roi des démons, et aux secrets de sa propre lignée. 
      Le style artistique unique et les scènes d’action intenses ont conquis les fans du monde entier. 
      Demon Slayer est rapidement devenu l’un des mangas les plus populaires de ces dernières années.`,
    dateDecreation: options,
    time: time
  },
  {
    id: 4,
    titre: "Attack on Titan",
    createur: "Hajime Isayama",
    dateDeSortie: "2009",
    nombreDeSaisons: 4,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/attack-on-titan/attack1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/attack-on-titan/attack2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/attack-on-titan/attack3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/attack-on-titan/attack4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/attack-on-titan/attack5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/attack-on-titan/attack6.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/attack-on-titan/attack7.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/titanCreator.jpg",
    link: "https://fr.wikipedia.org/wiki/Hajime_Isayama",
    resume: `
      L’histoire se déroule dans un monde où l’humanité vit retranchée derrière de gigantesques murs pour se protéger des Titans, des créatures humanoïdes mangeuses d’hommes. 
      Eren Jaeger, Mikasa Ackerman, et Armin Arlert vivent dans un de ces districts, mais leur vie bascule lorsque des Titans réussissent à percer les défenses. 
      Eren jure de venger sa mère, dévorée par un Titan, en rejoignant l’armée et en exterminant tous les Titans. 
      Mais rapidement, des mystères entourant les Titans, les murs, et même Eren lui-même viennent bouleverser leurs convictions. 
      Au fil des batailles, Eren découvre qu’il a la capacité de se transformer en Titan, ce qui le place au centre des enjeux de pouvoir. 
      Les complots politiques, les révélations choquantes, et les trahisons changent complètement leur vision du monde. 
      Attack on Titan explore des thèmes comme la survie, la liberté, et la véritable nature de l'humanité. 
      Chaque personnage doit faire face à ses propres démons et choisir son camp dans une guerre sans fin. 
      Le manga est connu pour ses retournements de situation et ses combats intenses. 
      Jusqu'à la fin, l'histoire garde les lecteurs en haleine avec ses révélations bouleversantes.`,
    dateDecreation: options,
    time: time
  },
  {
    id: 5,
    titre: "My Hero Academia",
    createur: "Kohei Horikoshi",
    dateDeSortie: "2014",
    nombreDeSaisons: 6,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/hero-academia/hero1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/hero-academia/hero2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/hero-academia/hero3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/hero-academia/hero4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/hero-academia/hero5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/hero-academia/hero6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/heroCreator.webp",
    link: "https://fr.wikipedia.org/wiki/K%C5%8Dhei_Horikoshi",
    resume: `
      Dans un monde où presque tout le monde possède un "Quirk" (pouvoir), Izuku Midoriya naît sans aucune capacité spéciale. 
      Cependant, son rêve est de devenir un héros comme son idole, All Might. 
      Un jour, après avoir montré un immense courage, All Might décide de lui transmettre son propre Quirk, "One For All". 
      Izuku est alors accepté à l’académie de héros, U.A., où il commence son entraînement pour devenir un héros professionnel. 
      Il se lie d’amitié avec d’autres élèves, comme Ochaco, Iida, et Todoroki, tout en affrontant des vilains de plus en plus dangereux. 
      L’histoire suit sa progression, de jeune garçon timide à héros en devenir, tout en explorant la société des super-héros. 
      Le manga aborde des thèmes comme le courage, le sacrifice, et la justice. 
      La relation entre Izuku et ses mentors, notamment All Might, joue un rôle central dans son développement. 
      De nombreux affrontements spectaculaires marquent l’évolution d'Izuku, qui apprend à maîtriser ses pouvoirs. 
      La série a rencontré un succès international, devenant un symbole du genre super-héroïque dans le manga.`,
    dateDecreation: options,
    time: time
  },
  {
    id: 6,
    titre: "Dragon Ball Z",                                                 //
    createur: "Akira Toriyama",
    dateDeSortie: "1989",
    nombreDeSaisons: 9,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/dbz/dbz1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/dbz/dbz2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/dbz/dbz3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/dbz/dbz4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/dbz/dbz5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/dbz/dbz6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/dbzCreator.jpg",
    link: "https://fr.wikipedia.org/wiki/Akira_Toriyama",
    resume: `
      Dragon Ball Z continue les aventures de Goku, un guerrier Saiyan, et de ses amis alors qu’ils défendent la Terre contre des ennemis puissants. 
      Goku découvre ses origines extraterrestres et devient le protecteur de la planète, combattant des adversaires tels que Vegeta, Freezer, et Cell. 
      Chaque arc introduit des méchants de plus en plus puissants, repoussant Goku et ses alliés à leurs limites. 
      Grâce à des techniques comme le Kamehameha et des transformations en Super Saiyan, Goku surpasse ses ennemis. 
      Son fils, Gohan, joue également un rôle clé dans plusieurs arcs, notamment contre Cell. 
      Le manga explore la force, la persévérance, et les relations familiales, en particulier entre Goku, Gohan, et Vegeta. 
      Les combats sont épiques, avec des explosions de ki et des duels intenses entre guerriers surpuissants. 
      La série est également connue pour ses moments humoristiques et ses pauses légères entre les arcs de combat. 
      Dragon Ball Z est devenu un phénomène mondial, influençant de nombreux autres mangas et anime. 
      L’évolution des personnages, notamment de Vegeta, qui passe de méchant à allié, est l'un des aspects les plus mémorables de la série.`,
    dateDecreation: options,
    time: time
  },
  {
    id: 7,
    titre: "Bleach",
    createur: "Tite Kubo",
    dateDeSortie: "2001",
    nombreDeSaisons: 16,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/bleach/bleach1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/bleach/bleach2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/bleach/bleach3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/bleach/bleach4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/bleach/bleach5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/bleach/bleach6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/bleachCreator.webp",
    link: "https://fr.wikipedia.org/wiki/Tite_Kubo",
    resume: `
    Bleach raconte l'histoire d'Ichigo Kurosaki, un lycéen capable de voir les esprits. 
    Un jour, il rencontre Rukia Kuchiki, une shinigami (faucheuse d'âmes), qui lui transmet ses pouvoirs pour protéger sa famille des créatures appelées Hollow. 
    Ichigo devient alors un remplaçant shinigami, chargé de combattre les Hollows et de guider les âmes des défunts vers l'au-delà. 
    Au fil de l'histoire, Ichigo découvre des vérités cachées sur ses propres pouvoirs et son passé. 
    Il affronte des ennemis redoutables, tels que les Arrancars et les Quincy, tout en développant de nouvelles techniques de combat. 
    L'arc de la Soul Society, où Ichigo et ses amis tentent de sauver Rukia d'une exécution, est un moment clé du manga. 
    Avec ses combats épiques et son univers riche, Bleach explore les thèmes de la vie après la mort, de la justice, et de l'amitié. 
    Les intrigues et les personnages, dont beaucoup de shinigamis puissants, ont captivé les lecteurs et spectateurs. 
    Bleach est rapidement devenu un manga incontournable, grâce à ses scènes d’action stylisées et son univers complexe. 
    Le retour de Tite Kubo avec le dernier arc, "La Guerre Sanglante des Mille Ans", a réanimé l'intérêt des fans pour la série.`,
    dateDecreation: options,
    time: time
  },
  {
    id: 8,
    titre: "Shaman King",
    createur: "Hiroyuki Takei",
    dateDeSortie: "1998",
    nombreDeSaisons: 2,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/shaman-king/king1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/shaman-king/king2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/shaman-king/king3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/shaman-king/king4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/shaman-king/king5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/shaman-king/king6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/kingCreator.webp",
    link: "https://fr.wikipedia.org/wiki/Hiroyuki_Takei",
    resume: `
    Shaman King raconte l'histoire de Yoh Asakura, un jeune garçon qui possède la capacité de voir et de communiquer avec les esprits. 
    Yoh aspire à devenir le "Shaman King", un titre qui lui permettrait de contrôler le Grand Esprit et ainsi changer le monde à sa guise. 
    Pour y parvenir, il doit remporter un tournoi où des shamans du monde entier s'affrontent en utilisant les esprits comme alliés de combat. 
    Accompagné par l'esprit du samouraï Amidamaru, Yoh se fait de nouveaux amis et adversaires, notamment son rival Hao Asakura, qui partage un lien mystérieux avec lui. 
    Le manga explore des thèmes comme la spiritualité, la réincarnation, et l'acceptation de soi. 
    Yoh, qui est d’un naturel décontracté, doit surmonter de nombreux défis pour grandir et devenir un véritable shaman. 
    L’histoire est également marquée par des combats intenses et des révélations sur le passé de chaque personnage. 
    Le style unique de Shaman King et ses combats spirituels innovants ont attiré une grande base de fans à travers le monde. 
    Le tournoi des shamans est l’un des arcs centraux du manga, où chaque affrontement révèle de nouvelles alliances et des pouvoirs inattendus. 
    La série a eu droit à une nouvelle adaptation animée en 2021, ravivant l'intérêt des anciens et nouveaux fans.`,
    dateDecreation: options,
    time: time
  },
  {
    id: 9,
    titre: "Jujutsu Kaisen",
    createur: "Gege Akutami",
    dateDeSortie: "2018",
    nombreDeSaisons: 2,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/kaisen/kaisen1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/kaisen/kaisen2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/kaisen/kaisen3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/kaisen/kaisen4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/kaisen/kaisen5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/kaisen/kaisen6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/kaisenCreator.jpg",
    link: "https://fr.wikipedia.org/wiki/Gege_Akutami",
    resume: `
    Jujutsu Kaisen suit l’histoire de Yuji Itadori, un lycéen qui, par un concours de circonstances, avale un doigt d’un puissant esprit maudit nommé Ryomen Sukuna. 
    Yuji devient alors l’hôte de Sukuna, mais parvient à garder le contrôle de son corps. 
    Recruté par l'école de sorcellerie de Tokyo, Yuji apprend à combattre les esprits maudits aux côtés de sorciers comme Megumi Fushiguro et Nobara Kugisaki. 
    Le manga se déroule dans un monde où les malédictions, créées à partir d'émotions négatives humaines, représentent une menace. 
    Les sorciers utilisent l’énergie maudite pour combattre ces esprits, et Yuji devient vite un élément clé dans la lutte contre les puissantes malédictions. 
    Son mentor, Satoru Gojo, est un sorcier légendaire dont les techniques de combat sont redoutables. 
    Le récit est marqué par des combats intenses, des confrontations stratégiques et des dilemmes moraux. 
    Yuji doit apprendre à maîtriser ses pouvoirs tout en luttant contre la présence menaçante de Sukuna en lui. 
    L’histoire explore des thèmes de la vie, de la mort, et des conséquences des actions humaines. 
    Jujutsu Kaisen s’est rapidement imposé comme un manga incontournable grâce à ses combats énergiques, son intrigue captivante et ses personnages charismatiques.`,
    dateDecreation: options,
    time: time
  },
  {
    id: 10,
    titre: "Vinland Saga",
    createur: "Makoto Yukimura",
    dateDeSortie: "2005",
    nombreDeSaisons: 2,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/vinland/saga1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/vinland/saga2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/vinland/saga3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/vinland/saga4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/vinland/saga5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/vinland/saga6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/sagaCreator.webp",
    link: "https://fr.wikipedia.org/wiki/Makoto_Yukimura",
    resume: `
    Vinland Saga se déroule à l'époque des Vikings et suit l'histoire de Thorfinn, un jeune guerrier en quête de vengeance après le meurtre de son père, un héros respecté. 
    Le récit commence avec Thorfinn qui, à la suite de la mort de son père, se joint aux hommes de guerre de Askeladd, le meurtrier de son père, dans l'espoir de le défier en duel un jour. 
    Le manga explore des thèmes de vengeance, d'honneur et de guerre, tout en s'appuyant sur des éléments historiques et des légendes nordiques. 
    Au fil de l'histoire, Thorfinn évolue, confronté à des dilemmes moraux et aux conséquences de la violence. 
    Le récit s'éloigne progressivement de la simple vengeance pour explorer des concepts plus profonds, comme le sens de la vie et la recherche d'un monde meilleur. 
    Les personnages sont bien développés, chacun ayant ses propres motivations et luttes internes. 
    Askeladd, en particulier, est un personnage complexe qui joue un rôle central dans l'évolution de Thorfinn. 
    Les arcs narratifs sont riches en action, en stratégie militaire, et en drames humains. 
    Vinland Saga est également connu pour son art détaillé et ses scènes de combat épiques. 
    Le manga a été salué pour sa narration profonde et ses réflexions sur la nature humaine, faisant de lui une œuvre incontournable dans le genre.`,
    dateDecreation: options,
    time: time
  },
  {
    id: 11,
    titre: "Death Note",
    createur: "Tsugumi Ohba et Takeshi Obata",
    dateDeSortie: "2003",
    nombreDeSaisons: 1,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/death/note1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/death/note2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/death/note3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/death/note4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/death/note5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/death/note6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/deathCreator.jpeg",
    link: "https://fr.wikipedia.org/wiki/Tsugumi_%C5%8Cba",
    resume: `
    Death Note suit l'histoire de Light Yagami, un lycéen brillant qui découvre un carnet mystérieux appelé "Death Note". 
    Ce carnet a le pouvoir de tuer quiconque dont le nom y est inscrit, à condition que l'écrivain connaisse le visage de la victime. 
    En utilisant le Death Note, Light décide de débarrasser le monde des criminels, se considérant comme un "dieu" de la nouvelle ère. 
    Cependant, ses actions attirent l'attention des forces de police et du célèbre détective L, qui se lance dans une chasse à l'homme pour arrêter Light. 
    Le récit devient un jeu du chat et de la souris, où Light et L tentent de surpasser l'autre, chacun utilisant son intelligence et ses stratégies. 
    Le manga explore des thèmes complexes tels que la justice, le pouvoir, la moralité et les conséquences des actions. 
    Les dilemmes moraux auxquels sont confrontés Light et L soulèvent des questions sur ce qui est juste et éthique. 
    Avec son atmosphère sombre et ses retournements de situation inattendus, Death Note est devenu un classique moderne du genre. 
    La tension monte à chaque chapitre, rendant difficile de prédire l'issue des confrontations. 
    Death Note a eu un impact considérable, inspirant des adaptations animées, des films, et des séries live, captivant un large public à travers le monde.`
  },
  {
    id: 12,
    titre: "Hell's Paradise",
    createur: "Yuji Kaku",                    //
    dateDeSortie: "2018",
    nombreDeSaisons: 1,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/paradise/hell1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/paradise/hell2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/paradise/hell3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/paradise/hell4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/paradise/hell5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/paradise/hell6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/hellCreator.jpg",
    link: "https://fr.wikipedia.org/wiki/Y%C5%ABji_Kaku",
    resume: `
    Hell's Paradise suit l'histoire de Gabimaru, un ninja redouté qui est condamné à mort. 
    En quête de rédemption, il est envoyé sur une île mystérieuse où se dit que l'immortalité peut être atteinte. 
    Cette île, cependant, est habitée par des créatures féroces et des ninjas aux pouvoirs extraordinaires. 
    Gabimaru, accompagné d'une kunoichi nommée Sagiri, doit affronter divers ennemis et surmonter des défis mortels pour trouver le fameux élixir d'immortalité. 
    Au fil de son voyage, il se confronte à ses propres démons intérieurs et à ses choix de vie. 
    Le manga explore des thèmes de survie, de quête de soi et des conséquences de la violence. 
    Les combats sont intenses, mettant en avant des techniques de ninjutsu et des affrontements spectaculaires. 
    L'histoire se penche également sur la notion de justice et de moralité dans un monde brutal. 
    Les personnages sont bien développés, chacun ayant des motivations et des histoires personnelles complexes. 
    Hell's Paradise a été salué pour son art dynamique et sa narration captivante, attirant un large public de fans de manga.`,
    dateDecreation: options,
    time: time
  },
  {
    id: 13,
    titre: "Fullmetal Alchemist",
    createur: "Hiromu Arakawa",
    dateDeSortie: "2001",
    nombreDeSaisons: 2,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/metal/full1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/metal/full2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/metal/full3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/metal/full4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/metal/full5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/metal/full6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/metalCreator.jpg",
    link: "https://fr.wikipedia.org/wiki/Hiromu_Arakawa",
    resume: `
    Fullmetal Alchemist suit l'histoire des frères Edward et Alphonse Elric, deux alchimistes talentueux qui cherchent à réparer les erreurs tragiques de leur passé. 
    Après une expérience alchimique désastreuse visant à ramener leur mère décédée, Edward perd son bras et Alphonse perd tout son corps, son âme étant liée à une armure. 
    Pour récupérer leurs corps, ils se lancent dans une quête pour trouver la Pierre Philosophale, un artefact légendaire capable de multiplier les pouvoirs alchimiques. 
    Au cours de leur voyage, les frères découvrent des complots gouvernementaux, des expériences humaines, et le véritable sens de l'alchimie. 
    Le manga aborde des thèmes profonds comme le sacrifice, la moralité et le prix du pouvoir. 
    Les personnages sont riches en profondeur, chacun ayant ses propres luttes et motivations. 
    Edward, surnommé "le Fullmetal Alchemist", est déterminé et courageux, tandis qu'Alphonse est plus réfléchi et empathique. 
    Les combats sont intenses et stratégiques, mettant en avant des concepts d'alchimie innovants. 
    Fullmetal Alchemist est acclamé pour sa narration complexe, son développement de personnages, et ses leçons de vie poignantes. 
    La série a eu un impact durable sur la culture manga, inspirant de nombreuses adaptations, y compris des films et des jeux vidéo.`,
    dateDecreation: options,
    time: time
  },
  {
    id: 14,
    titre: "Arte",
    createur: "Kei Okubo",
    dateDeSortie: "2013",
    nombreDeSaisons: 1,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/arte/arte1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/arte/arte2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/arte/arte3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/arte/arte5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/arte/arte6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/arteCreator.png",
    link: "https://fr.wikipedia.org/wiki/Arte_(manga)",
    resume: `
    Arte se déroule à Florence, en Italie, au 16ème siècle, et suit l'histoire d'une jeune noble nommée Arte qui rêve de devenir artiste. 
    Contrairement aux attentes de son époque, où les femmes sont souvent cantonnées à des rôles traditionnels, Arte décide de suivre sa passion pour l'art. 
    Elle se rend chez un célèbre peintre, Leo, pour devenir son apprentie, espérant prouver sa valeur en tant qu'artiste. 
    Tout au long de son parcours, Arte doit surmonter les préjugés liés à son genre et se battre pour réaliser ses rêves. 
    Le manga aborde des thèmes de détermination, de créativité et de la lutte pour l'égalité des sexes. 
    Les relations entre les personnages, notamment celle entre Arte et Leo, sont bien développées, montrant une dynamique mentor-apprenti fascinante. 
    Les détails artistiques et historiques du manga sont soigneusement élaborés, rendant hommage à l'époque de la Renaissance. 
    Arte fait face à de nombreux défis, mais sa passion pour l'art et son désir d'apprendre la poussent à persévérer. 
    La série explore également l'évolution personnelle d'Arte, à mesure qu'elle gagne en confiance et en compétences. 
    Arte a été bien accueilli pour sa représentation réaliste de la lutte des artistes, en mettant en lumière les défis auxquels ils étaient confrontés dans un monde dominé par les hommes.`,
    dateDecreation: options,
    time: time
  },
  {
    id: 15,
    titre: "Aria",
    createur: "Kozueko Morimoto",
    dateDeSortie: "2002",
    nombreDeSaisons: 3,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/aria/aria1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/aria/aria2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/aria/aria3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/aria/aria4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/aria/aria5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/aria/aria6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/ariaCreator.jpg",
    link: "https://www.nautiljon.com/people/morimoto+kozueko.html",
    resume: `
    Aria se déroule dans un monde futuriste où la planète Mars, colonisée par les humains, a été transformée en une version d'Italie, avec des canaux et des gondoles. 
    L'histoire suit Akari Mizunashi, une jeune fille qui rêve de devenir une "undine", une guide touristique sur les canaux de la ville d'Aqua. 
    Akari rejoint l'entreprise Aria et commence son apprentissage sous la tutelle de la talentueuse et mystérieuse undine, Alicia. 
    Au fil de ses aventures, Akari rencontre divers personnages, chacun avec ses propres histoires et aspirations, tout en découvrant la beauté de la vie quotidienne à Aqua. 
    Le manga est connu pour sa narration calme et apaisante, mettant en avant les thèmes de l'amitié, de la découverte de soi et de la magie des petits moments. 
    Aria explore également des concepts philosophiques, tels que la perception de la réalité et la recherche du bonheur. 
    Elle a également été adaptée en série animée, renforçant son statut de favoris parmi les amateurs de récits chaleureux et poétiques.`,
    dateDecreation: options,
    time: time
  },
  {
     id: 16,
    titre: "Kaiju No. 8",
    createur: "Naoya Matsumoto",
    dateDeSortie: "2020",
    nombreDeSaisons: 1,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/kaiju/kaiju1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/kaiju/kaiju2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/kaiju/kaiju3.webp",
      "https://vuemangasapi-production.up.railway.app/images/mangas/kaiju/kaiju4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/kaiju/kaiju5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/kaiju/kaiju6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/kaijuCreator.jpg",
    link: "https://en.wikipedia.org/wiki/Naoya_Matsumoto",
    resume: `
    Kaiju No. 8 se déroule dans un monde où des créatures gigantesques, appelées Kaiju, menacent l'humanité. Kafka Hibino, le protagoniste, travaille dans une équipe de nettoyage spécialisée dans l'élimination des restes de Kaiju après leurs attaques. Cependant, après un incident mystérieux, Kafka se transforme lui-même en Kaiju tout en conservant sa conscience humaine. Il décide alors de rejoindre les Forces de Défense pour combattre ces monstres, tout en essayant de garder son secret. 
    Le manga explore l'évolution de Kafka, son rôle dans ce monde, et ses interactions avec ses collègues et amis, tout en offrant des scènes de bataille intenses et une exploration des thèmes de courage et de persévérance.`,
    dateDecreation: options,
    time: time

  },
  {
  id: 17,
  titre: "Baki",
  createur: "Keisuke Itagaki",         //
  dateDeSortie: "1991",
  nombreDeSaisons: 3,
  imagesManga: [
  "https://vuemangasapi-production.up.railway.app/images/mangas/baki/baki1.jpg",
  "https://vuemangasapi-production.up.railway.app/images/mangas/baki/baki2.jpg",
  "https://vuemangasapi-production.up.railway.app/images/mangas/baki/baki3.jpg",
  "https://vuemangasapi-production.up.railway.app/images/mangas/baki/baki4.jpg",
  "https://vuemangasapi-production.up.railway.app/images/mangas/baki/baki5.jpg",
  "https://vuemangasapi-production.up.railway.app/images/mangas/baki/baki6.jpg",
    ],
  imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/bakiCreator.jpg",
  link: "https://fr.wikipedia.org/wiki/Keisuke_Itagaki",
  resume: `
    Baki suit les aventures de Baki Hanma, un jeune combattant dont le seul objectif est de devenir plus fort que son père, Yujiro Hanma, l'homme le plus puissant du monde. 
    Baki s'entraîne sans relâche, affrontant des adversaires redoutables dans des tournois clandestins et des combats brutaux. 
    Le manga explore les arts martiaux dans toute leur brutalité, mettant en avant des techniques et des styles de combat variés. 
    Baki doit surmonter des défis physiques et mentaux pour atteindre la force ultime. 
    Les combats sont intenses et souvent démesurés, avec des personnages aux capacités incroyables. 
    Le monde de Baki est rempli de combattants légendaires, chacun ayant son propre style et ses propres motivations. 
    La relation complexe entre Baki et son père Yujiro est un thème central, entre respect et rivalité. 
    Les personnages secondaires sont également bien développés, apportant de la profondeur à l'histoire. 
    Le manga est connu pour son réalisme dans la représentation des combats, tout en incluant des éléments exagérés. 
    Baki est un incontournable pour les amateurs de mangas d'action et d'arts martiaux.`,
  dateDecreation: options,
  time: time
 },

  {
    id: 18,
    titre: "Black Butler",
    createur: "Yana Toboso",
    dateDeSortie: "2006",
    nombreDeSaisons: 3,
    imagesManga: [
    "https://vuemangasapi-production.up.railway.app/images/mangas/buttler/black1.jpg",
    "https://vuemangasapi-production.up.railway.app/images/mangas/buttler/black2.jpg",
    "https://vuemangasapi-production.up.railway.app/images/mangas/buttler/black3.jpg",
    "https://vuemangasapi-production.up.railway.app/images/mangas/buttler/black4.jpg",
    "https://vuemangasapi-production.up.railway.app/images/mangas/buttler/black5.jpg",
    "https://vuemangasapi-production.up.railway.app/images/mangas/buttler/black6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/buttlerCreator.webp",
    link: "https://fr.wikipedia.org/wiki/Yana_Toboso",
    resume: `
      Black Butler raconte l'histoire de Ciel Phantomhive, un jeune comte à la tête d'une riche famille anglaise, qui cherche à venger la mort de ses parents. 
      Pour atteindre ses objectifs, Ciel conclut un pacte avec un démon nommé Sebastian Michaelis, qui devient son majordome. 
      Sebastian est lié à Ciel jusqu'à ce que ce dernier accomplisse sa vengeance, après quoi le démon prendra son âme. 
      Ensemble, ils résolvent des mystères et affrontent des ennemis liés aux événements tragiques qui ont détruit la famille Phantomhive. 
      Le manga explore des thèmes sombres comme la vengeance, le destin et la moralité, tout en mêlant des moments d'humour et de légèreté. 
      Les personnages sont très bien développés, avec Ciel qui incarne la froide détermination, et Sebastian, le majordome démoniaque, qui se révèle puissant et charismatique. 
      Les scènes d'action sont stylisées et marquantes, mettant en avant les capacités surnaturelles de Sebastian. 
      Black Butler se distingue par son atmosphère gothique, ses intrigues intrigantes et ses dialogues souvent subtils et poignants. 
      La série a acquis une large base de fans, avec des adaptations en anime, des pièces de théâtre et des films.`,
    dateDecreation: options,
    time: time
  },
  {
    id: 19,
    titre: "Les Mémoires de Vanitas",
    createur: "Jun Mochizuki",
    dateDeSortie: "2015",
    nombreDeSaisons: 1,
    imagesManga: [
    "https://vuemangasapi-production.up.railway.app/images/mangas/vanitas/vanitas1.jpg",
    "https://vuemangasapi-production.up.railway.app/images/mangas/vanitas/vanitas2.jpg",
    "https://vuemangasapi-production.up.railway.app/images/mangas/vanitas/vanitas3.jpg",
    "https://vuemangasapi-production.up.railway.app/images/mangas/vanitas/vanitas4.jpg",
    "https://vuemangasapi-production.up.railway.app/images/mangas/vanitas/vanitas5.jpg",
    "https://vuemangasapi-production.up.railway.app/images/mangas/vanitas/vanitas6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/vanitasCreator.jpg",
    link: "https://fr.wikipedia.org/wiki/Jun_Mochizuki",
    resume: `
      Les Mémoires de Vanitas se déroule dans un Paris steampunk où humains et vampires coexistent. 
      L'histoire suit Noé, un jeune vampire, et Vanitas, un humain possédant un mystérieux grimoire capable de guérir les vampires maudits. 
      Vanitas affirme être un descendant de Vanitas de la Lune Bleue, un vampire autrefois haï par ses congénères. 
      Ensemble, ils voyagent pour sauver les vampires affligés par une malédiction, mais les motivations de Vanitas restent ambiguës. 
      Le manga mélange action, mystère et éléments surnaturels, tout en explorant des thèmes complexes comme la confiance, la rédemption et l'identité. 
      Les personnages principaux, Vanitas et Noé, ont une dynamique intrigante, oscillant entre coopération et méfiance. 
      Les combats sont spectaculaires, et le monde steampunk victorien est magnifiquement illustré avec des détails somptueux. 
      L'intrigue se densifie avec des complots politiques, des révélations surprenantes et des conflits internes. 
      Les Mémoires de Vanitas se démarque par son atmosphère mystérieuse et ses dialogues profonds. 
      La série a gagné en popularité grâce à son style visuel unique et son récit captivant, et a récemment été adaptée en anime.`,
    dateDecreation: options,
    time: time
  },
  {
    id: 20,
    titre: "Minuscule",
    createur: "Takuto Kashiki",
    dateDeSortie: "2012",
    nombreDeSaisons: 1,
    imagesManga: [
      "https://vuemangasapi-production.up.railway.app/images/mangas/mini/mini1.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/mini/mini2.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/mini/mini3.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/mini/mini4.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/mini/mini5.jpg",
      "https://vuemangasapi-production.up.railway.app/images/mangas/mini/mini6.jpg",
    ],
    imagesCreateur: "https://vuemangasapi-production.up.railway.app/images/createurs/miniCreator.jpg",
    link: "https://booknode.com/auteur/takuto-kashiki",
    resume: `
      Minuscule est une série douce et contemplative qui suit le quotidien de deux minuscules exploratrices, Hakumei et Mikochi, vivant dans une forêt luxuriante. 
      Ces deux jeunes filles mesurent seulement quelques centimètres de haut et vivent dans des maisons construites à partir d'arbres et de champignons. 
      Le manga se concentre sur leurs aventures paisibles, leurs travaux manuels et leurs interactions avec les créatures de la forêt. 
      Chaque chapitre est une ode à la simplicité de la vie, mettant en avant les petites merveilles de la nature. 
      L'univers de Minuscule est magnifiquement illustré, avec des détails minutieux qui font ressortir la beauté des paysages et des objets du quotidien. 
      Les personnages secondaires, animaux et autres habitants minuscules, ajoutent de la profondeur et de la diversité à l'histoire. 
      Le manga traite de thèmes comme l'amitié, l'artisanat et la coexistence harmonieuse avec la nature. 
      Minuscule est connu pour son atmosphère apaisante et son rythme lent, offrant une lecture relaxante. 
      La série a été saluée pour son approche unique et son attention aux détails, avec une esthétique qui rappelle les livres pour enfants illustrés. 
      Avec une ambiance nostalgique et réconfortante, Minuscule offre une expérience immersive dans un monde miniature plein de charme.`,
    dateDecreation: options,
    time: time
  }

]


module.exports = mangas