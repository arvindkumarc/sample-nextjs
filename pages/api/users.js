const users = [
  {
    "id": "64a13f8035be17c9a99b4c3d",
    "age": 24,
    "name": "Johnston Campos",
    "gender": "male",
    "company": "CYTREK",
    "email": "johnstoncampos@cytrek.com",
    "phone": "+1 (942) 550-2403",
    "address": "178 Lombardy Street, Defiance, Pennsylvania, 5725",
    "about": "Pariatur sint officia ullamco cillum qui Lorem eiusmod. Commodo velit magna id cupidatat. Adipisicing nostrud sunt labore do minim do esse non. Proident esse ex mollit ex laborum exercitation anim culpa irure veniam. Commodo dolore non do ea ea. Elit ex ullamco cillum incididunt magna aute.\r\n"
  },
  {
    "id": "64a13f80a405c6e6f6ce2aa5",
    "age": 24,
    "name": "Janelle Evans",
    "gender": "female",
    "company": "PEARLESEX",
    "email": "janelleevans@pearlesex.com",
    "phone": "+1 (828) 514-2250",
    "address": "181 Onderdonk Avenue, Cowiche, Indiana, 395",
    "about": "Laborum cupidatat occaecat ex exercitation id elit voluptate minim dolore. Amet ullamco sit quis minim ea occaecat. Laborum adipisicing voluptate commodo laboris.\r\n"
  },
  {
    "id": "64a13f80a9ad5c4a6b129303",
    "age": 20,
    "name": "Atkins Tyson",
    "gender": "male",
    "company": "KNEEDLES",
    "email": "atkinstyson@kneedles.com",
    "phone": "+1 (971) 596-3717",
    "address": "569 Allen Avenue, Fulford, Illinois, 5435",
    "about": "Velit eu qui commodo aliqua aliquip voluptate sint. Ex irure nostrud magna cillum adipisicing eu amet reprehenderit ea tempor. Deserunt amet et quis ex ea. Laboris incididunt ipsum eiusmod adipisicing eu in voluptate aliqua ullamco laboris et voluptate commodo. Magna pariatur laborum officia do tempor adipisicing ullamco aliquip. Incididunt nostrud esse laborum ex occaecat esse adipisicing pariatur sint.\r\n"
  },
  {
    "id": "64a13f801c6861b2ae949862",
    "age": 35,
    "name": "Lea Osborn",
    "gender": "female",
    "company": "ASSURITY",
    "email": "leaosborn@assurity.com",
    "phone": "+1 (909) 529-2866",
    "address": "657 Highland Place, Klagetoh, Missouri, 7330",
    "about": "Dolore duis laboris qui aliqua ut dolore consequat nulla voluptate exercitation dolore. Proident anim ipsum amet commodo laboris sint reprehenderit ad pariatur non adipisicing. Non minim occaecat id amet est nulla consectetur et eu ex minim amet excepteur. Velit reprehenderit incididunt commodo labore labore sit fugiat dolore.\r\n"
  },
  {
    "id": "64a13f802d60631411301ce7",
    "age": 20,
    "name": "Mcclain Townsend",
    "gender": "male",
    "company": "FLOTONIC",
    "email": "mcclaintownsend@flotonic.com",
    "phone": "+1 (914) 472-2146",
    "address": "177 Montague Terrace, Bartonsville, Wisconsin, 6282",
    "about": "Exercitation voluptate consequat pariatur enim occaecat aliqua Lorem nulla cupidatat reprehenderit deserunt anim. Nulla mollit eu non dolore nisi ea laborum adipisicing ea. Eiusmod dolore Lorem magna adipisicing minim commodo mollit. Ad irure excepteur nisi eu reprehenderit. Cillum laboris fugiat deserunt ut ut aute ut consequat consectetur. Sit nisi commodo eu ea incididunt eiusmod reprehenderit.\r\n"
  },
  {
    "id": "64a13f80b6d8baeb5b1aa826",
    "age": 32,
    "name": "Fry Bonner",
    "gender": "male",
    "company": "ISOSTREAM",
    "email": "frybonner@isostream.com",
    "phone": "+1 (839) 474-3923",
    "address": "424 School Lane, Denio, Colorado, 7905",
    "about": "Consectetur sit sunt elit laborum et. Est fugiat laboris tempor ad aliqua irure laborum in aliquip occaecat. Est commodo consectetur pariatur culpa labore laborum ipsum irure cupidatat fugiat. Deserunt Lorem voluptate reprehenderit ea.\r\n"
  },
  {
    "id": "64a13f804c144e4426fae05d",
    "age": 27,
    "name": "Garrett Reid",
    "gender": "male",
    "company": "ENVIRE",
    "email": "garrettreid@envire.com",
    "phone": "+1 (870) 519-3933",
    "address": "638 Interborough Parkway, Temperanceville, North Carolina, 4584",
    "about": "Aute culpa dolore labore aute proident ipsum laborum tempor. Cupidatat dolor anim aliqua nisi incididunt non amet qui velit dolor irure eu enim Lorem. Veniam ea sint reprehenderit id et adipisicing sint laboris cillum ipsum enim proident. Tempor sint et aliquip reprehenderit.\r\n"
  },
  {
    "id": "64a13f80dc18f5c40ac42c50",
    "age": 34,
    "name": "Wooten Chandler",
    "gender": "male",
    "company": "INSECTUS",
    "email": "wootenchandler@insectus.com",
    "phone": "+1 (823) 516-3087",
    "address": "845 Veterans Avenue, Marienthal, Oregon, 6721",
    "about": "Nostrud cupidatat amet do qui cupidatat pariatur officia sint nisi dolor ipsum. Et dolore aute excepteur laboris. Irure do deserunt dolore mollit eu eiusmod voluptate proident quis ullamco.\r\n"
  },
  {
    "id": "64a13f802fb2f701f0533afd",
    "age": 21,
    "name": "Robles Lamb",
    "gender": "male",
    "company": "EBIDCO",
    "email": "robleslamb@ebidco.com",
    "phone": "+1 (801) 436-3395",
    "address": "405 Coleman Street, Esmont, Arizona, 7326",
    "about": "Ea deserunt velit ullamco fugiat ex sit quis in. Ad ullamco magna nulla ut eu nulla duis sint ut labore et anim. Cillum nulla dolore deserunt enim ipsum adipisicing laborum ad officia non reprehenderit. Culpa ipsum ipsum consequat laboris ipsum aliquip est. Velit nisi fugiat dolore non sit officia mollit. Veniam consequat dolor laborum eiusmod proident ex minim dolore deserunt. Irure excepteur quis veniam cillum dolore deserunt mollit.\r\n"
  },
  {
    "id": "64a13f8067d5dfb8cb37781c",
    "age": 31,
    "name": "Terrie Murphy",
    "gender": "female",
    "company": "CIPROMOX",
    "email": "terriemurphy@cipromox.com",
    "phone": "+1 (831) 563-2944",
    "address": "664 Pioneer Street, Glendale, District Of Columbia, 2348",
    "about": "Voluptate cillum cupidatat Lorem est reprehenderit ullamco quis esse veniam eiusmod qui elit incididunt sunt. Dolore tempor amet aliqua aliquip enim cupidatat ad. Ex commodo consequat aliquip id dolor labore nisi consequat est cupidatat adipisicing amet aliquip. Quis ea est fugiat aliqua ut nulla esse minim voluptate id.\r\n"
  },
  {
    "id": "64a13f80f3aff37e57ea5dda",
    "age": 30,
    "name": "Frank Petty",
    "gender": "male",
    "company": "ZYTRAC",
    "email": "frankpetty@zytrac.com",
    "phone": "+1 (913) 524-2792",
    "address": "103 Vernon Avenue, Fivepointville, California, 8060",
    "about": "Cupidatat irure nisi fugiat reprehenderit ex fugiat sunt esse dolor. Laborum sunt ullamco adipisicing ex cupidatat aute ex. Voluptate incididunt laborum sit incididunt nulla voluptate. Ea culpa irure voluptate tempor labore. Eu dolore quis et Lorem minim duis sit consectetur ipsum id. Occaecat ex exercitation mollit magna commodo adipisicing tempor deserunt laboris fugiat nisi. Laborum commodo nostrud id enim id aliquip aute commodo.\r\n"
  },
  {
    "id": "64a13f80418e24545def3429",
    "age": 33,
    "name": "Head Rogers",
    "gender": "male",
    "company": "DOGNOST",
    "email": "headrogers@dognost.com",
    "phone": "+1 (833) 537-2566",
    "address": "426 Reeve Place, Chautauqua, Maryland, 7416",
    "about": "Commodo nostrud ad sit ex aute irure officia veniam quis. Ad qui minim reprehenderit eu ex. Consequat amet sit velit duis. In eiusmod fugiat aliqua nulla culpa aliqua non magna voluptate non adipisicing excepteur ex. Occaecat pariatur ad sit amet esse velit incididunt officia laborum et. Commodo anim eiusmod commodo fugiat occaecat pariatur veniam ipsum dolore est consectetur culpa. Sint sunt reprehenderit anim pariatur nulla minim veniam.\r\n"
  },
  {
    "id": "64a13f80268cf4dac03763da",
    "age": 23,
    "name": "Holcomb Lewis",
    "gender": "male",
    "company": "ISOTRONIC",
    "email": "holcomblewis@isotronic.com",
    "phone": "+1 (934) 533-3597",
    "address": "520 Dank Court, Newry, New Jersey, 8425",
    "about": "Eu nisi nisi aliquip ex eiusmod ut velit officia sit veniam ut. Amet laboris nulla nisi nisi duis laboris cillum et fugiat pariatur. Sint laboris consequat nisi sunt culpa ex ipsum sit fugiat laboris eiusmod amet. Anim eiusmod incididunt incididunt fugiat laborum voluptate aliqua. Nulla magna ex nisi exercitation et commodo dolore aliqua ad magna nostrud ullamco minim eu.\r\n"
  },
  {
    "id": "64a13f80aa1b8768208bf1a5",
    "age": 40,
    "name": "Bradley Kim",
    "gender": "male",
    "company": "KRAG",
    "email": "bradleykim@krag.com",
    "phone": "+1 (981) 404-2193",
    "address": "516 Fuller Place, Mansfield, Alaska, 3302",
    "about": "Mollit cillum duis velit non laborum excepteur ad ullamco labore commodo occaecat reprehenderit labore. Lorem eiusmod laborum qui cillum deserunt qui ea duis aliquip. Esse dolor pariatur ut consequat mollit dolore cupidatat. In in esse enim ex laborum. Consectetur magna in ipsum irure. Duis esse cillum id consectetur veniam ipsum occaecat. Eu duis excepteur duis do ad occaecat proident cillum laboris ea sunt voluptate enim.\r\n"
  },
  {
    "id": "64a13f802dc4683acbf4f088",
    "age": 29,
    "name": "Marsha Burgess",
    "gender": "female",
    "company": "ZEDALIS",
    "email": "marshaburgess@zedalis.com",
    "phone": "+1 (944) 512-3558",
    "address": "313 Ashland Place, Maybell, Hawaii, 9961",
    "about": "Nulla Lorem sint magna veniam dolore commodo aliqua esse. Ad aute fugiat eiusmod eiusmod quis tempor id ullamco excepteur incididunt. Esse nulla minim culpa officia ullamco velit irure. Voluptate sint incididunt consequat est est.\r\n"
  },
  {
    "id": "64a13f80b2fbd36cdc5f37d3",
    "age": 31,
    "name": "Imelda Guy",
    "gender": "female",
    "company": "EXTRAGEN",
    "email": "imeldaguy@extragen.com",
    "phone": "+1 (973) 448-3880",
    "address": "419 Apollo Street, Dragoon, Virgin Islands, 9319",
    "about": "Do voluptate nostrud nostrud velit velit sunt consequat ex. Do excepteur pariatur dolore pariatur duis proident eu. Irure magna elit minim eu sit velit. Aute duis Lorem ex excepteur ex consequat id aliqua sit pariatur ut fugiat deserunt laborum. Dolore ex consequat deserunt nisi occaecat.\r\n"
  },
  {
    "id": "64a13f80df6c1b73a92979e5",
    "age": 27,
    "name": "Beck Espinoza",
    "gender": "male",
    "company": "KONGLE",
    "email": "beckespinoza@kongle.com",
    "phone": "+1 (897) 483-2451",
    "address": "185 Corbin Place, Celeryville, Northern Mariana Islands, 2916",
    "about": "Et voluptate magna elit esse pariatur ea magna nulla aute est. Adipisicing irure sit culpa cupidatat in. Ad fugiat consectetur non nostrud qui velit consectetur est.\r\n"
  },
  {
    "id": "64a13f80f0c082abad427cac",
    "age": 26,
    "name": "Maude Bailey",
    "gender": "female",
    "company": "NORALI",
    "email": "maudebailey@norali.com",
    "phone": "+1 (815) 593-2362",
    "address": "614 Knickerbocker Avenue, Forbestown, Kentucky, 4813",
    "about": "Ipsum anim reprehenderit id qui proident ullamco est sint reprehenderit. Amet ad incididunt nulla consectetur nulla quis consectetur enim labore commodo esse ad pariatur. In sint magna mollit enim commodo pariatur eu. Labore quis commodo cillum anim aute minim aute sunt elit esse incididunt aliquip ut dolor. Nostrud aliquip deserunt ut laboris id.\r\n"
  },
  {
    "id": "64a13f80fd0576383134ce41",
    "age": 21,
    "name": "Deleon Perez",
    "gender": "male",
    "company": "QUONATA",
    "email": "deleonperez@quonata.com",
    "phone": "+1 (812) 490-2821",
    "address": "624 Louis Place, Winesburg, Michigan, 4131",
    "about": "Dolore qui consequat culpa minim adipisicing culpa. Non aliquip labore veniam excepteur laboris voluptate esse consectetur. Reprehenderit pariatur anim elit dolore reprehenderit laboris esse magna proident voluptate aliqua sit.\r\n"
  },
  {
    "id": "64a13f80e44a86164f4ba384",
    "age": 31,
    "name": "Ericka Booth",
    "gender": "female",
    "company": "NETAGY",
    "email": "erickabooth@netagy.com",
    "phone": "+1 (947) 426-3289",
    "address": "701 Gaylord Drive, Craig, Connecticut, 9220",
    "about": "Ullamco do amet deserunt ut et. Sint sint laboris est elit. Consequat sint magna quis aliqua nulla duis incididunt laborum.\r\n"
  },
  {
    "id": "64a13f800ecb8f502e7b0938",
    "age": 29,
    "name": "Tammie Ruiz",
    "gender": "female",
    "company": "ZOGAK",
    "email": "tammieruiz@zogak.com",
    "phone": "+1 (897) 531-3790",
    "address": "166 Woodpoint Road, Gardners, Texas, 8375",
    "about": "Aute nulla non culpa consectetur elit minim eiusmod veniam esse enim aute laborum et. Quis ex minim aliquip commodo excepteur ut anim eu reprehenderit eiusmod. Minim minim nostrud irure cupidatat reprehenderit ea. Adipisicing non dolore excepteur sunt. Ad ipsum ex labore do ad ex.\r\n"
  },
  {
    "id": "64a13f80e27e9b6b468a5d86",
    "age": 26,
    "name": "Burnett Schneider",
    "gender": "male",
    "company": "ZAGGLES",
    "email": "burnettschneider@zaggles.com",
    "phone": "+1 (936) 533-3820",
    "address": "828 Bassett Avenue, Rossmore, Louisiana, 3384",
    "about": "Voluptate eiusmod laboris irure ullamco occaecat minim duis nulla sit. Aute quis enim fugiat ullamco adipisicing officia ex officia ea eu. Enim ullamco Lorem reprehenderit veniam consequat pariatur ipsum tempor duis reprehenderit enim. Duis ad sit aliqua cupidatat mollit culpa voluptate ipsum do do Lorem adipisicing deserunt voluptate. Mollit id incididunt Lorem ullamco eu et mollit. Cillum ut aliqua esse in dolor amet incididunt officia qui ut non.\r\n"
  },
  {
    "id": "64a13f8025db3b20684f393a",
    "age": 34,
    "name": "Julia Gregory",
    "gender": "female",
    "company": "ZENTRY",
    "email": "juliagregory@zentry.com",
    "phone": "+1 (906) 412-2302",
    "address": "781 Anthony Street, Greensburg, Rhode Island, 9400",
    "about": "Incididunt dolore ad in Lorem id. Tempor anim in anim pariatur eiusmod minim Lorem dolor. Culpa ad eu elit ex laboris nisi id eiusmod. Elit duis deserunt fugiat excepteur non exercitation dolore dolor. Sint velit dolore ipsum reprehenderit do aute labore non in deserunt dolor laboris fugiat irure. Anim minim do sit exercitation mollit aute reprehenderit qui.\r\n"
  },
  {
    "id": "64a13f8030ef644fa40ec07c",
    "age": 40,
    "name": "Wood Marks",
    "gender": "male",
    "company": "XINWARE",
    "email": "woodmarks@xinware.com",
    "phone": "+1 (900) 510-2637",
    "address": "272 Losee Terrace, Southview, Puerto Rico, 1016",
    "about": "Pariatur amet minim dolor excepteur aliqua ullamco elit ipsum consectetur aliquip aliquip. Ad commodo velit est quis non cupidatat sint enim ea excepteur. Excepteur voluptate ipsum sit minim. Tempor ipsum pariatur laboris enim nostrud nulla labore incididunt adipisicing enim. Dolor consectetur culpa tempor elit qui dolore. Amet tempor ex enim ex excepteur eiusmod magna occaecat Lorem consequat. Nisi pariatur sit tempor pariatur amet reprehenderit ipsum do aliquip.\r\n"
  },
  {
    "id": "64a13f80b122d3913df94c0f",
    "age": 25,
    "name": "Robinson Blackburn",
    "gender": "male",
    "company": "IDEGO",
    "email": "robinsonblackburn@idego.com",
    "phone": "+1 (819) 429-3751",
    "address": "332 Judge Street, Cashtown, Florida, 2355",
    "about": "Excepteur magna sint cupidatat non ullamco adipisicing do quis consectetur exercitation est. In reprehenderit consectetur commodo consequat aliqua anim anim quis ullamco. Eu proident ad et consequat. In mollit laboris anim ad nostrud aliquip. Elit do minim aliqua enim et nulla est qui. Do veniam aliqua veniam culpa duis incididunt dolore ex tempor eu.\r\n"
  },
  {
    "id": "64a13f80b7f4fc1aa3eae728",
    "age": 20,
    "name": "Hudson Brock",
    "gender": "male",
    "company": "KEGULAR",
    "email": "hudsonbrock@kegular.com",
    "phone": "+1 (953) 542-2010",
    "address": "266 Carlton Avenue, Lacomb, New Mexico, 6189",
    "about": "Ut culpa nulla labore cupidatat labore adipisicing elit Lorem sit sit. Ut aliquip aliquip reprehenderit amet duis sit anim cillum voluptate. Est minim incididunt aliquip commodo ea nostrud.\r\n"
  },
  {
    "id": "64a13f80330c4ee710346762",
    "age": 35,
    "name": "Maryellen Dyer",
    "gender": "female",
    "company": "NURALI",
    "email": "maryellendyer@nurali.com",
    "phone": "+1 (899) 415-3278",
    "address": "317 Randolph Street, Worcester, Ohio, 5154",
    "about": "Sint aute duis nulla tempor est consectetur duis sunt magna excepteur enim. Voluptate sint veniam consectetur commodo irure dolore sunt culpa excepteur ullamco. Ex pariatur voluptate qui irure nostrud sunt tempor sit cupidatat nostrud Lorem. Cillum nostrud nisi voluptate elit dolore pariatur ea officia anim. Ut esse officia qui adipisicing dolor ea.\r\n"
  },
  {
    "id": "64a13f802a2093ab40e2be30",
    "age": 30,
    "name": "Rosalie Cabrera",
    "gender": "female",
    "company": "ELENTRIX",
    "email": "rosaliecabrera@elentrix.com",
    "phone": "+1 (820) 476-2468",
    "address": "848 Railroad Avenue, Babb, South Carolina, 8183",
    "about": "Cillum dolor excepteur laborum laborum. Sit labore duis quis aute ullamco nisi officia sunt. Amet fugiat officia ipsum culpa sint commodo ex nulla enim anim excepteur id consectetur duis. Nostrud adipisicing laboris voluptate cupidatat consectetur laborum ex occaecat sunt enim qui ut quis. Eiusmod dolor dolore Lorem culpa laborum tempor minim dolor nostrud cupidatat minim eiusmod deserunt exercitation. Lorem mollit eiusmod ullamco excepteur cupidatat ut est esse dolor culpa excepteur id eu.\r\n"
  },
  {
    "id": "64a13f80ee0de59bb4b22035",
    "age": 28,
    "name": "Elaine Leonard",
    "gender": "female",
    "company": "ISOLOGIA",
    "email": "elaineleonard@isologia.com",
    "phone": "+1 (815) 419-2239",
    "address": "393 Ludlam Place, Bath, Iowa, 4980",
    "about": "Ut aliquip et veniam dolor magna reprehenderit. Sit sunt non sit excepteur laboris minim nisi pariatur cupidatat consectetur labore eiusmod fugiat. Do incididunt nulla dolore deserunt velit veniam adipisicing consequat cillum velit laboris veniam excepteur cupidatat.\r\n"
  },
  {
    "id": "64a13f80200a47fa89bff3ea",
    "age": 29,
    "name": "Lavonne Chavez",
    "gender": "female",
    "company": "MAROPTIC",
    "email": "lavonnechavez@maroptic.com",
    "phone": "+1 (998) 446-2855",
    "address": "132 Quincy Street, Walland, South Dakota, 7895",
    "about": "Et proident aliqua irure nulla duis reprehenderit eiusmod. Veniam voluptate laborum irure velit elit quis sunt cillum minim excepteur consectetur incididunt proident. Aliquip labore enim nisi est et laborum occaecat dolore nisi cupidatat sint. Exercitation ullamco veniam nulla quis elit fugiat dolor minim magna adipisicing aute minim. Non occaecat laboris irure eu culpa. Enim fugiat aliqua incididunt proident veniam proident aliqua anim. Aute incididunt ipsum non occaecat cupidatat culpa proident veniam adipisicing duis officia pariatur magna tempor.\r\n"
  },
  {
    "id": "64a13f80f645def4e4f0e571",
    "age": 32,
    "name": "Harris Barber",
    "gender": "male",
    "company": "WATERBABY",
    "email": "harrisbarber@waterbaby.com",
    "phone": "+1 (997) 455-3950",
    "address": "905 Remsen Street, Ogema, Nevada, 2486",
    "about": "Officia duis labore ullamco Lorem consectetur amet labore tempor. Pariatur velit ad consectetur non voluptate laboris. Reprehenderit excepteur elit culpa irure. Id proident fugiat mollit exercitation adipisicing dolore. Velit exercitation duis velit deserunt adipisicing. Esse magna fugiat pariatur sint Lorem consequat. Tempor proident elit magna ea et dolor mollit ullamco aute amet veniam magna incididunt.\r\n"
  },
  {
    "id": "64a13f80ddec51d2221d8ee4",
    "age": 40,
    "name": "Moon Fisher",
    "gender": "male",
    "company": "VOIPA",
    "email": "moonfisher@voipa.com",
    "phone": "+1 (853) 532-3421",
    "address": "757 Union Street, Groton, New Hampshire, 976",
    "about": "Eiusmod non qui non commodo adipisicing dolor consectetur do irure et. Do minim incididunt occaecat sint ipsum velit magna nisi culpa in velit sit officia. Sit ad dolor veniam Lorem sit velit labore do velit voluptate. Cillum aliquip aliqua dolore do elit irure id incididunt aliqua id mollit amet anim tempor. Irure enim do velit irure sunt sint elit veniam.\r\n"
  },
  {
    "id": "64a13f80975f400c466001d3",
    "age": 26,
    "name": "Villarreal Rowe",
    "gender": "male",
    "company": "QUIZKA",
    "email": "villarrealrowe@quizka.com",
    "phone": "+1 (883) 533-2452",
    "address": "199 Bulwer Place, Ola, Minnesota, 1924",
    "about": "Velit sunt ex ea incididunt Lorem. Nulla sit tempor eu esse esse reprehenderit cupidatat est non. Id quis qui culpa eiusmod incididunt aliqua aliqua. Labore elit velit exercitation proident cillum adipisicing voluptate. Aliquip veniam exercitation do officia minim culpa cupidatat excepteur Lorem officia nisi exercitation sint commodo.\r\n"
  },
  {
    "id": "64a13f80169f81f2397dbacf",
    "age": 36,
    "name": "Delgado Vance",
    "gender": "male",
    "company": "ZANYMAX",
    "email": "delgadovance@zanymax.com",
    "phone": "+1 (857) 489-2194",
    "address": "100 Waldorf Court, Juntura, Georgia, 2480",
    "about": "Lorem ullamco exercitation est laborum aute. Lorem amet aliqua ut voluptate minim cillum cillum consequat ipsum. Est ullamco dolore ullamco ea laboris.\r\n"
  }
];

export default function handler(req, res) {
  const {page} = req.query;
  if (page)
   res.status(200).json(users.slice((page - 1) * 10, page * 10))
  else
   res.status(200).json(users.slice(0, 10))
}