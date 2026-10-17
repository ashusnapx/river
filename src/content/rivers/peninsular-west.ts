import type { River } from "../types";

/**
 * West-flowing Peninsular rivers (plus the inland Luni).
 * Main sources: NCERT Class 11 India: Physical Environment ch. 2–3 (2026-27 reprint),
 * India-WRIS basin wiki (Narmada, Tapi, Mahi, Sabarmati, Luni, Periyar), PIB/Rajya Sabha replies.
 * Verified up to October 2026.
 */
export const peninsularWestRivers: River[] = [
  // ───────────────────────── NARMADA ─────────────────────────
  {
    id: "narmada",
    name: "Narmada",
    hindi: "नर्मदा",
    aka: ["Reva (classical name)"],
    system: "peninsular-west",
    rank: 1,
    source: {
      place: "Narmada Kund, Amarkantak plateau (Maikal range)",
      state: "Madhya Pradesh (Anuppur district)",
      elevationM: 1057,
      examNote:
        "NCERT: rises on the ==western flank== of the Amarkantak plateau at about 1,057 m. India-WRIS calls the same hills the Maikala range near Amarkantak. Both answers point to one place.",
    },
    mouth: {
      place: "Gulf of Khambhat (Arabian Sea), south of Bharuch, Gujarat",
      kind: "estuary",
      note: "NCERT: a broad 27 km long estuary.",
    },
    lengthKm: { value: 1312, note: "NCERT Class 11 and India-WRIS. Basin about 98,796 sq km." },
    flowsThrough: [
      "Madhya Pradesh",
      "Madhya Pradesh–Maharashtra boundary",
      "Maharashtra–Gujarat boundary",
      "Gujarat",
    ],
    direction: "East → West, in a rift valley between the Vindhyas (north) and the Satpuras (south)",
    oneLiner:
      "The largest west-flowing river of the Peninsula, ++because it follows a faulted trough that slopes west, not the eastward tilt of the plateau++.",
    personality: [
      "It flows west against the plateau's eastward tilt ++because it occupies a rift valley (trough fault) between the Vindhya and Satpura blocks, and the floor of that trough slopes west++.",
      "It ends in an **estuary**, not a delta, ++because it runs fast through a hard-rock trough, drops much of its load inside the trough, and the strong tides of the Gulf of Khambhat flush the mouth++.",
      "Its tributaries are short and meet it almost at right angles (NCERT Class 9) ++because they tumble straight down the steep walls of a narrow trough++.",
      "It has waterfalls near the source and a marble gorge at Jabalpur ++because the young river drops off the high Amarkantak plateau and then cuts down into hard rock++.",
    ],
    journey: [
      {
        at: "Amarkantak (source)",
        text: "Rises at Narmada Kund on the western flank of the Amarkantak plateau, Anuppur district, MP. The [[son]] rises on the same plateau but runs north-east to the Ganga.",
        why: "++Amarkantak is a raised plateau, so water runs off it in different directions++. NCERT uses the rivers of the Amarkantak range as its example of a **radial** pattern.",
      },
      {
        at: "Kapildhara and Dudhdhara",
        text: "Within its first stretch it falls at **Kapildhara** and then at **Dudhdhara**.",
        why: "++The infant river drops off the edge of its plateau++, so the falls come right after the source.",
      },
      {
        at: "Mandla to Jabalpur",
        text: "Flows west past Mandla. The **Bargi dam** stores it above Jabalpur.",
      },
      {
        at: "Bhedaghat, near Jabalpur",
        text: "Cuts a gorge through the white **Marble Rocks** and plunges at **Dhuandhar** falls (NCERT).",
        why: "Dhuandhar means ‘smoke-stream’: ++the spray rises like smoke++ (a name hook). This is the upper Narmada valley, ==not Malwa==.",
      },
      {
        at: "The rift valley (Narmadapuram to Khandwa)",
        text: "Runs in its trough with the Vindhyas on the right (north) and the Satpuras on the left (south). The [[tawa]], its largest tributary, joins from the Satpura side near Narmadapuram (Hoshangabad).",
        why: "++Facing downstream (west), the Satpuras are on your left hand++, so Satpura-born tributaries are left-bank.",
      },
      {
        at: "Indira Sagar and Omkareshwar (Khandwa district)",
        text: "Two big dams: **Indira Sagar** at Punasa and **Omkareshwar** near the Mandhata island temple. A 600 MW floating solar park is being built on the Omkareshwar reservoir.",
        why: "++A reservoir is a large flat surface that needs no farmland++, and water under the panels cuts evaporation.",
      },
      {
        at: "Maharashtra border stretch",
        text: "Touches Maharashtra only as a boundary: first MP–Maharashtra, then Maharashtra–Gujarat (India-WRIS: about 35 km and 39 km).",
        why: "++It forms the border here rather than crossing the state++, so ‘flows through Maharashtra’ means ‘along its edge’.",
      },
      {
        at: "Sardar Sarovar (Kevadia, Gujarat)",
        text: "Enters Gujarat and is held by the **Sardar Sarovar dam** at Kevadia, Narmada district. The Statue of Unity stands on Sadhu Bet island just downstream.",
        why: "Its canals carry water to drought-prone Saurashtra, Kachchh and north Gujarat and on to Rajasthan, ++which is why four states share its benefits++.",
      },
      {
        at: "Bharuch to the sea",
        text: "Below Bharuch it widens into a ==27 km long estuary== and enters the Gulf of Khambhat.",
        why: "++Little silt reaches the mouth and the Gulf's tides are among the strongest on India's coast++, so no delta can build.",
      },
    ],
    places: [
      { name: "Amarkantak", kind: "pilgrimage", note: "Source (Narmada Kund), Anuppur district, MP; the Son also rises on this plateau." },
      { name: "Kapildhara", kind: "waterfall", note: "First major fall, close to the source." },
      { name: "Dudhdhara", kind: "waterfall", note: "Fall just downstream of Kapildhara." },
      { name: "Bargi dam", kind: "dam", note: "Near Jabalpur; the first big dam on the main river, counting from the source." },
      {
        name: "Marble Rocks, Bhedaghat",
        kind: "gorge",
        note: "Gorge in marble near Jabalpur (NCERT).",
        why: "++The river has cut down through bands of marble++, leaving white vertical walls.",
      },
      { name: "Dhuandhar falls", kind: "waterfall", note: "Near Jabalpur, upper Narmada valley (NCERT). Not in Malwa." },
      { name: "Indira Sagar dam", kind: "dam", note: "Punasa, Khandwa district, MP." },
      { name: "Omkareshwar dam", kind: "dam", note: "Khandwa district, MP; jyotirlinga temple on Mandhata island; floating solar park on the reservoir." },
      {
        name: "Sardar Sarovar dam",
        kind: "dam",
        note: "Kevadia, Narmada district, Gujarat; concrete gravity dam; inaugurated 17 September 2017; benefits Gujarat, MP, Maharashtra and Rajasthan.",
      },
      { name: "Sadhu Bet (Statue of Unity)", kind: "island", note: "River island about 3 km below Sardar Sarovar; the 182 m statue was unveiled on 31 October 2018." },
      { name: "Bharuch", kind: "city", note: "Old port town on the estuary." },
    ],
    facts: [
      {
        id: "narmada-source",
        q: "Where does the Narmada rise?",
        a: "Amarkantak plateau (Maikal range), Anuppur district, MP, at about 1,057 m.",
        because: "++It rises on the western flank of the plateau++ (NCERT), so it heads west from its first step.",
        tag: "core",
      },
      {
        id: "narmada-why-west",
        q: "Why does the Narmada flow west when most Peninsular rivers flow east?",
        a: "It occupies a **rift valley** (trough fault) between the Vindhyas and the Satpuras.",
        because:
          "NCERT: as the Himalayas rose, ++the northern flank of the Peninsular block subsided and broke into trough faults++. The river follows its trough, and the trough floor slopes west.",
        tag: "pyq",
      },
      {
        id: "narmada-estuary",
        q: "Delta or estuary at the Narmada mouth?",
        a: "Estuary, about 27 km long, south of Bharuch.",
        because:
          "NCERT: the Narmada and Tapi ++fill the original fault cracks with their own detritus++, so little silt reaches the mouth. ++Strong Gulf of Khambhat tides++ sweep away the rest.",
        tag: "core",
      },
      {
        id: "narmada-dhuandhar",
        q: "Where are Dhuandhar falls and the Marble Rocks?",
        a: "Bhedaghat near Jabalpur, on the Narmada, in the upper Narmada valley (==not Malwa==).",
        because:
          "++Malwa is the plateau around Indore and Ujjain, north of the Vindhyas++; Jabalpur lies far east of it in the Narmada trough. UPSC 2024 broke a ‘Dhuandhar–Malwa–Narmada’ row on this one word.",
        tag: "pyq",
      },
      {
        id: "narmada-tawa-largest",
        q: "Which is the largest tributary of the Narmada, and on which bank?",
        a: "The [[tawa]], left bank, joining near Narmadapuram (Hoshangabad).",
        because: "++It drains the Satpura side, and facing the westward Narmada the Satpuras are on your left++.",
        tag: "core",
      },
      {
        id: "narmada-short-tributaries",
        q: "Why are the Narmada's tributaries short and joined at right angles?",
        a: "They run straight down the steep walls of the rift trough (NCERT Class 9).",
        because: "++A rift valley is narrow with steep sides++, so side streams have little room to grow long and drop straight into the main river.",
        tag: "core",
      },
      {
        id: "narmada-radial",
        q: "Which drainage pattern do the rivers of the Amarkantak range show?",
        a: "**Radial** (NCERT's example).",
        because: "++Amarkantak stands high above its surroundings++, so streams run off it on all sides: the Narmada west, the [[son]] north-east.",
        tag: "core",
      },
      {
        id: "narmada-tribunal",
        q: "Who shares the Narmada's water, and under which award?",
        a: "Madhya Pradesh, Gujarat, Maharashtra and Rajasthan, under the **Narmada Water Disputes Tribunal** (set up 1969, award 1979).",
        because:
          "++MP holds most of the catchment, while Gujarat holds the lower valley and the driest land++. Neither could agree alone, so a tribunal under the Inter-State River Water Disputes Act, 1956 divided water and power.",
        tag: "core",
      },
      {
        id: "narmada-nba",
        q: "What was the Narmada Bachao Andolan about?",
        a: "Displacement and rehabilitation of Adivasis and farmers hit by Sardar Sarovar and other Narmada dams; led by Medha Patkar from 1985.",
        because:
          "++A high dam in a narrow, peopled valley drowns villages and forest upstream++. In 2000 the Supreme Court let the dam go ahead subject to resettlement conditions.",
        tag: "core",
      },
      {
        id: "narmada-omkareshwar-solar",
        q: "Which Narmada reservoir carries a 600 MW floating solar park?",
        a: "Omkareshwar reservoir, Khandwa district, MP.",
        because: "++Panels on water need no farmland, shade the water against evaporation and run cooler++, so reservoirs are prime solar sites.",
        tag: "news",
      },
      {
        id: "narmada-avanti",
        q: "Ancient Avanti (a mahajanapada) is linked with which river?",
        a: "The Narmada; southern Avanti's capital Mahishmati stood on it.",
        because:
          "Logic hook: Avanti was the Malwa–Narmada country (Ujjayini in the north, Mahishmati on the Narmada). ++UPSC 2025 marked ‘Avanti : Mahanadi’ wrong for exactly this reason++.",
        tag: "pyq",
      },
    ],
    traps: [
      {
        wrong: "The Narmada flows between the Satpura and the Sahyadri.",
        right: "It flows between the **Vindhyas** (north) and the **Satpuras** (south).",
        why: "++The Sahyadri (Western Ghats) run north–south near the coast; the Narmada trough runs east–west across central India++. The Tapi is the river south of the Satpura.",
      },
      {
        wrong: "The Narmada flows west because the land of central India slopes west.",
        right: "The plateau tilts east overall; the Narmada flows west only because its rift trough slopes west.",
        why: "++If the land itself sloped west, the Godavari and Krishna would also flow west++. NCERT: the Peninsular block tilted from north-west to south-east.",
      },
      {
        wrong: "Every river in a rift valley flows west.",
        right: "The [[damodar]] also flows in a rift valley, but east to the Hugli.",
        why: "++Direction follows the slope of the trough floor, not the fact of being a rift++.",
      },
      {
        wrong: "The Pandu-lena cave shrines lie in the gorge of the Narmada.",
        right: "Pandu-lena is near Nashik. The Narmada's famous gorge is the Marble Rocks at Bhedaghat.",
        why: "UPSC 2021 used this swap. ++Nashik lies in the upper Godavari country, far south of the Narmada trough++.",
      },
    ],
    remember: [
      {
        hook: "Satpura is the common wall: Narmada to its north, Tapi to its south.",
        logic: "++The two troughs lie on either side of one block mountain++. Fix the Satpura and the outer walls follow: Vindhya above, Ajanta–Satmala below.",
      },
      {
        hook: "Downstream story: born at Amarkantak, falls twice (Kapildhara, Dudhdhara), turns to ‘smoke’ at Dhuandhar between marble walls.",
        logic: "++It follows the river's own order++: the falls come first because the young river leaves its plateau; the gorge comes where it cuts into the trough.",
      },
    ],
    news: [
      {
        year: 2024,
        text: "First units of the 600 MW Omkareshwar floating solar park (Narmada, Khandwa district) were commissioned.",
        why: "Floating solar on reservoirs is a repeat current-affairs theme; ++it adds power without taking farmland++.",
      },
      {
        year: 2018,
        text: "The 182 m Statue of Unity was unveiled on 31 October 2018 on Sadhu Bet island, downstream of Sardar Sarovar.",
        why: "++It sits on a Narmada island++, so ‘Statue of Unity : Narmada’ is a valid place–river pair.",
      },
      {
        year: 2017,
        text: "Sardar Sarovar dam was inaugurated on 17 September 2017 at its full raised height.",
        why: "It ties three exam threads together: ++an inter-state tribunal, displacement (NBA) and canal water for drought-prone Gujarat and Rajasthan++.",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── TAWA ─────────────────────────
  {
    id: "tawa",
    name: "Tawa",
    hindi: "तवा",
    system: "peninsular-west",
    rank: 2,
    parent: "narmada",
    bank: "left",
    order: 1,
    confluence: "Bandra Bhan, near Narmadapuram (Hoshangabad), MP",
    source: { place: "Satpura range, Chhindwara district", state: "Madhya Pradesh" },
    mouth: { place: "Joins the Narmada at Bandra Bhan", kind: "joins-river" },
    flowsThrough: ["Madhya Pradesh"],
    direction: "Off the Satpuras, north-west into the Narmada",
    oneLiner: "The Narmada's ==largest tributary==, ++fed by the Satpura hills on the left bank++.",
    personality: [
      "It joins from the **left bank** ++because it drains the Satpuras, which lie on your left when you face down the westward Narmada++.",
      "It is the biggest Narmada feeder ++because it gathers the hill streams of the Satpura country, such as the Denwa, before reaching the trough++.",
    ],
    journey: [
      { at: "Satpura hills", text: "Rises in the Satpura range in Chhindwara district, MP." },
      {
        at: "Tawa dam (Tawa Nagar)",
        text: "The **Tawa dam** (completed 1978) stores it for irrigation of the Narmadapuram plains.",
      },
      { at: "Bandra Bhan", text: "Joins the Narmada near Narmadapuram (Hoshangabad)." },
    ],
    places: [
      { name: "Tawa dam", kind: "dam", note: "Tawa Nagar, Narmadapuram district; completed 1978." },
      { name: "Bandra Bhan", kind: "confluence", note: "Tawa–Narmada confluence near Narmadapuram." },
    ],
    facts: [
      {
        id: "tawa-largest",
        q: "Which is the Narmada's largest tributary?",
        a: "The Tawa.",
        because: "++It drains a large part of the Satpura hills++, gathering feeders such as the Denwa before it reaches the trough.",
        tag: "core",
      },
      {
        id: "tawa-bank",
        q: "Tawa joins the Narmada on which bank?",
        a: "Left bank.",
        because: "++Banks are named facing downstream on the parent++: face west down the Narmada and the Satpura side, where the Tawa comes from, is on your left.",
        tag: "core",
      },
      {
        id: "tawa-confluence",
        q: "Near which town does the Tawa meet the Narmada?",
        a: "Narmadapuram (old name Hoshangabad), at Bandra Bhan.",
        because: "Name hook: ++the town is named after the river it stands on++, so ‘Narmadapuram’ itself tells you the Tawa ends in the Narmada.",
        tag: "core",
      },
    ],
    traps: [
      {
        wrong: "The Tawa is a right-bank tributary because it flows north.",
        right: "It is a **left-bank** tributary of the Narmada.",
        why: "++Bank is fixed by the parent's direction (west), not the tributary's++.",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── TAPI ─────────────────────────
  {
    id: "tapi",
    name: "Tapi",
    hindi: "ताप्ती",
    aka: ["Tapti"],
    system: "peninsular-west",
    rank: 1,
    source: {
      place: "Multai, Betul district (Satpura range)",
      state: "Madhya Pradesh",
      elevationM: 752,
      examNote: "NCERT: originates from Multai in Betul district. Elevation 752 m is India-WRIS. Never write Amarkantak (that is the Narmada).",
    },
    mouth: {
      place: "Gulf of Khambhat (Arabian Sea), below Surat, Gujarat",
      kind: "estuary",
      note: "India-WRIS: tidal influence reaches about 20 km upstream.",
    },
    lengthKm: { value: 724, note: "NCERT Class 11 and India-WRIS. Basin 65,145 sq km: about 79% Maharashtra, 15% MP, 6% Gujarat." },
    flowsThrough: ["Madhya Pradesh", "Maharashtra", "Gujarat"],
    direction: "East → West, in a rift valley between the Satpuras (north) and the Ajanta–Satmala hills (south)",
    oneLiner:
      "The Narmada's smaller twin: ++a second west-sloping trough just south of the Satpura, so it too flows west and ends in an estuary++.",
    personality: [
      "It flows west ++because, like the Narmada, it follows a rift trough: the Satpura on its north, the Ajanta range and Satmala hills on its south++ (India-WRIS).",
      "About 79% of its basin is in Maharashtra (NCERT) ++because its big left-bank feeders, the [[purna]] and the [[girna]], drain the wide plateau south of the river++.",
      "Surat flooded badly in 1968 ++because a monsoon-fed river rises fast and Surat sits on its low tidal stretch++; the Ukai reservoir now holds back flood peaks.",
    ],
    journey: [
      {
        at: "Multai (source)",
        text: "Rises at Multai on the Betul plateau of the Satpura range, MP.",
        why: "Name hook: Multai is traditionally read as ‘Mul-Tapi’, the origin of the Tapi. ++A hook, not geology++.",
      },
      { at: "Burhanpur", text: "Flows west past Burhanpur and leaves MP for Khandesh (Maharashtra)." },
      {
        at: "Purna confluence (Changdev, Jalgaon)",
        text: "The [[purna]] joins from the left at Changdev. The **Hatnur dam** near Bhusawal stores Tapi and Purna water.",
      },
      {
        at: "Girna confluence (Jalgaon district)",
        text: "The [[girna]], coming from the Sahyadri in Nashik district, joins from the left.",
        why: "++Both big feeders come from the broad plateau to the south++; the northern side gives only shorter streams such as the Aner and Gomai.",
      },
      {
        at: "Ukai and Kakrapar (Gujarat)",
        text: "**Ukai dam** (completed 1972) and, downstream, the **Kakrapar weir** (1954). The Kakrapar atomic power station draws cooling water from this system.",
        why: "++A nuclear plant needs a large, assured supply of cooling water++, which the Ukai–Kakrapar storage provides.",
      },
      {
        at: "Surat to the sea",
        text: "Flows through Surat and enters the Gulf of Khambhat through an estuary.",
        why: "++Same recipe as the Narmada: trough, low silt, strong tides++.",
      },
    ],
    places: [
      { name: "Multai", kind: "pilgrimage", note: "Source, Betul district, MP." },
      { name: "Burhanpur", kind: "city", note: "MP town on the Tapi." },
      { name: "Hatnur dam", kind: "dam", note: "Near Bhusawal, Jalgaon district; first stage of the Upper Tapi project." },
      { name: "Ukai dam", kind: "dam", note: "Gujarat, completed 1972; the state's second-largest reservoir after Sardar Sarovar." },
      { name: "Kakrapar weir", kind: "barrage", note: "Stage I of the Ukai project, commissioned 1954." },
      {
        name: "Kakrapar Atomic Power Station",
        kind: "project",
        note: "Near the Tapi in Gujarat; units 3 and 4 are India's indigenous 700 MW pressurised heavy-water reactors.",
      },
      { name: "Surat", kind: "city", note: "Diamond and textile city on the lower Tapi." },
    ],
    facts: [
      {
        id: "tapi-source",
        q: "Where does the Tapi rise?",
        a: "Multai, Betul district, MP (Satpura range).",
        because: "++It starts on a separate part of the Satpura, the Betul plateau++, south of the Narmada trough; Amarkantak belongs to the Narmada.",
        tag: "core",
      },
      {
        id: "tapi-ranges",
        q: "Between which ranges does the Tapi flow?",
        a: "Satpura (north) and the Ajanta range and Satmala hills (south).",
        because: "++It lies in a trough south of the Satpura block++, the mirror image of the Narmada trough north of it.",
        tag: "core",
      },
      {
        id: "tapi-why-west",
        q: "Why does the Tapi flow west?",
        a: "It follows a rift valley (trough fault) whose floor slopes west.",
        because: "NCERT: ++the Narmada and Tapi flow in trough faults formed when the northern flank of the Peninsula subsided++.",
        tag: "pyq",
      },
      {
        id: "tapi-left-bank",
        q: "On which bank do the Purna and the Girna join the Tapi?",
        a: "Both on the **left** bank.",
        because: "++Face west down the Tapi and your left hand points south++, where both rivers come from.",
        tag: "core",
      },
      {
        id: "tapi-basin-share",
        q: "Which state holds most of the Tapi basin?",
        a: "Maharashtra, about 79% (NCERT).",
        because: "++The long Purna and Girna drain Vidarbha and Khandesh++, so the river's main catchment is in Maharashtra though it rises in MP and ends in Gujarat.",
        tag: "core",
      },
      {
        id: "tapi-kakrapar",
        q: "Kakrapar atomic power station is linked with which river?",
        a: "The Tapi (cooling water from the Ukai–Kakrapar system).",
        because: "++Nuclear plants are sited beside big, assured water sources for cooling++.",
        tag: "core",
      },
      {
        id: "tapi-estuary",
        q: "Delta or estuary at the Tapi mouth?",
        a: "Estuary, below Surat.",
        because: "++Its trough traps silt, the river is short and fast, and Gulf of Khambhat tides scour the mouth++.",
        tag: "core",
      },
    ],
    traps: [
      {
        wrong: "The Tapi rises at Amarkantak.",
        right: "It rises at **Multai**, Betul district, MP.",
        why: "++Amarkantak is the source of the Narmada and the Son++. The Tapi has its own source further south-west on the Satpura.",
      },
      {
        wrong: "The Purna and the Girna are right-bank tributaries of the Tapi.",
        right: "Both are **left-bank** tributaries.",
        why: "++They come from the south; for a west-flowing river, south is the left bank++.",
      },
      {
        wrong: "The Tapi flows between the Vindhyas and the Satpuras.",
        right: "That is the Narmada. The Tapi flows between the Satpura and the Ajanta–Satmala hills.",
        why: "++Satpura is the wall between the two rivers++; only the Narmada touches the Vindhyas.",
      },
    ],
    remember: [
      {
        hook: "Multai = Mul-Tapi, the root of the Tapi.",
        logic: "A name hook from the traditional reading of the town's name. ++It ties the source to the right river++ and keeps Amarkantak for the Narmada.",
      },
    ],
    news: [
      {
        year: 2026,
        text: "A Rajya Sabha reply (August 2026) said the Par–Tapi–Narmada link has been removed from the list of priority interlinking projects, though its DPR is complete.",
        why: "River interlinking is the most repeated Mains water theme; ++know which west-coast links moved and which stalled++.",
      },
      {
        year: 2024,
        text: "Kakrapar unit 4, an indigenous 700 MW PHWR, began commercial operation on 31 March 2024 (unit 3 did so on 30 June 2023).",
        why: "++Kakrapar is the first site of India's home-grown 700 MW reactor design++, so the plant–river pair is likely in prelims.",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── PURNA (TAPI) ─────────────────────────
  {
    id: "purna",
    name: "Purna (Tapi)",
    system: "peninsular-west",
    rank: 3,
    parent: "tapi",
    bank: "left",
    order: 1,
    confluence: "Changdev, Muktainagar taluka, Jalgaon district, Maharashtra",
    source: { place: "Gawilgarh hills (eastern Satpura), near Bhainsdehi, Betul district", state: "Madhya Pradesh" },
    mouth: { place: "Joins the Tapi at Changdev", kind: "joins-river" },
    flowsThrough: ["Madhya Pradesh", "Maharashtra"],
    direction: "South out of the Satpura, then west through Vidarbha into the Tapi",
    oneLiner: "The Tapi's big left-bank feeder from Vidarbha, ++and a name trap because the Godavari has a Purna too++.",
    personality: [
      "It joins from the **left bank** ++because it enters the westward Tapi from the south-east++.",
      "It drains Amravati, Akola and Buldhana ++because it swings south off the Satpura and then runs west across the plateau before meeting the Tapi++.",
      "Its name repeats across India ++because ‘Purna’ (full) is a common river name++; always attach the parent.",
    ],
    journey: [
      { at: "Gawilgarh hills (Betul)", text: "Rises near Bhainsdehi in Betul district, MP." },
      { at: "Vidarbha", text: "Flows through Amravati, Akola and Buldhana districts of Maharashtra." },
      { at: "Changdev", text: "Joins the Tapi at Changdev in Jalgaon district; the Hatnur dam lies nearby." },
    ],
    places: [{ name: "Changdev", kind: "confluence", note: "Purna–Tapi confluence, Jalgaon district." }],
    facts: [
      {
        id: "purna-bank",
        q: "The Purna joins the Tapi on which bank?",
        a: "Left bank, at Changdev (Jalgaon district).",
        because: "++It comes in from the south-east, which is the left side of the west-flowing Tapi++.",
        tag: "core",
      },
      {
        id: "purna-two-rivers",
        q: "Is the Tapi's Purna the same as the Godavari's Purna?",
        a: "No. One Purna joins the Tapi (Vidarbha); another joins the [[godavari]] (Marathwada).",
        because: "++Two rivers carry the same Sanskrit name++, so a question naming ‘Purna’ must be read with its parent.",
        tag: "trap",
      },
    ],
    traps: [
      {
        wrong: "The Purna is a tributary of the Godavari, so it cannot feed the Tapi.",
        right: "Both are true of different rivers: the Purna (Tapi) and the Purna (Godavari).",
        why: "++Same name, two basins++. Check the parent before marking.",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── GIRNA ─────────────────────────
  {
    id: "girna",
    name: "Girna",
    system: "peninsular-west",
    rank: 3,
    parent: "tapi",
    bank: "left",
    order: 2,
    confluence: "Jalgaon district, Maharashtra",
    source: { place: "Western Ghats (Sahyadri), Nashik district", state: "Maharashtra" },
    mouth: { place: "Joins the Tapi in Jalgaon district", kind: "joins-river" },
    flowsThrough: ["Maharashtra"],
    direction: "East, then north-east from the Sahyadri into the Tapi",
    oneLiner: "A Sahyadri river that ends in the Arabian Sea, ++because it feeds the west-flowing Tapi rather than an east-flowing river++.",
    personality: [
      "It first runs east like most Sahyadri streams ++because the plateau behind the Ghats slopes away from the coast++, then turns towards the low Tapi trough.",
      "It joins from the **left bank** ++because it comes from the south++.",
    ],
    journey: [
      { at: "Nashik Sahyadri", text: "Rises in the Western Ghats of Nashik district; Chankapur dam stands on its upper course." },
      { at: "Girna dam", text: "The Girna dam (1969) stores it for Khandesh." },
      { at: "Jalgaon district", text: "Bends north near Jalgaon and joins the Tapi." },
    ],
    places: [
      { name: "Chankapur dam", kind: "dam", note: "Upper Girna, Kalwan taluka, Nashik district." },
      { name: "Girna dam", kind: "dam", note: "Built 1969." },
    ],
    facts: [
      {
        id: "girna-bank",
        q: "The Girna joins the Tapi on which bank?",
        a: "Left bank.",
        because: "++It flows up from the Nashik Sahyadri to the south; for a west-flowing parent, south is left++.",
        tag: "core",
      },
      {
        id: "girna-sea",
        q: "The Girna rises in the Sahyadri. Which sea does its water reach?",
        a: "The Arabian Sea, via the Tapi.",
        because: "++A tributary goes wherever its parent goes++; the Tapi's west-sloping trough carries the Girna's water west.",
        tag: "trap",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── SABARMATI ─────────────────────────
  {
    id: "sabarmati",
    name: "Sabarmati",
    hindi: "साबरमती",
    system: "peninsular-west",
    rank: 2,
    source: { place: "Aravalli hills near Tepur village, Udaipur district", state: "Rajasthan", elevationM: 762 },
    mouth: { place: "Gulf of Khambhat (Arabian Sea)", kind: "estuary" },
    lengthKm: { value: 371, note: "India-WRIS. Basin 21,674 sq km, enough for NCERT to list it among major basins (over 20,000 sq km)." },
    flowsThrough: ["Rajasthan", "Gujarat"],
    direction: "North-east → South-west",
    oneLiner: "A semi-arid Aravalli river that ++needs Narmada water to keep Ahmedabad's riverfront full++.",
    personality: [
      "It is small and seasonal ++because it rises in the low Aravallis and drains a semi-arid basin++, with no snow and no high Ghats to feed it.",
      "Most tributaries (Wakal, Harnav, Hathmati, Watrak) join from the left ++because they come down from the hilly eastern side, which is on your left as you face the south-west-flowing river++.",
      "Ahmedabad's riverfront stays full ++because Narmada water from the Sardar Sarovar canal system is released into it++.",
    ],
    journey: [
      { at: "Aravalli (Udaipur district)", text: "Rises in the Aravalli hills of Udaipur district, Rajasthan, and soon enters Gujarat." },
      { at: "Dharoi dam", text: "The **Dharoi dam** stores it in north Gujarat." },
      {
        at: "Gandhinagar and Ahmedabad",
        text: "Flows past Gandhinagar and through Ahmedabad: Sabarmati Riverfront and Gandhi's **Sabarmati Ashram**.",
        why: "++Gandhi set up the ashram here in 1917 and began the Dandi March from it on 12 March 1930++, so the river is a history hook too.",
      },
      { at: "Gulf of Khambhat", text: "Enters the head of the Gulf of Khambhat." },
    ],
    places: [
      { name: "Dharoi dam", kind: "dam", note: "Main reservoir on the Sabarmati, north Gujarat." },
      { name: "Gandhinagar", kind: "city", note: "Gujarat's capital, on the Sabarmati." },
      { name: "Sabarmati Ashram", kind: "heritage", note: "Ahmedabad; Gandhi's base 1917–1930; Dandi March began here on 12 March 1930." },
      { name: "Sabarmati Riverfront", kind: "project", note: "Ahmedabad; kept wet with Narmada canal water." },
    ],
    facts: [
      {
        id: "sabarmati-source",
        q: "In which state does the Sabarmati rise?",
        a: "Rajasthan (Aravalli hills, Udaipur district).",
        because: "++The Aravallis run into south Rajasthan++; the river crosses into Gujarat only after leaving them.",
        tag: "core",
      },
      {
        id: "sabarmati-narmada-water",
        q: "Why does Ahmedabad's Sabarmati hold water all year?",
        a: "Narmada water from the Sardar Sarovar canal system is released into it.",
        because: "++Its own flow is seasonal because the basin is semi-arid++; imported water fills the gap.",
        tag: "core",
      },
      {
        id: "sabarmati-gulf",
        q: "Where does the Sabarmati meet the sea?",
        a: "Gulf of Khambhat, like the Mahi, Narmada and Tapi.",
        because: "++The Gulf occupies the low, sunken Cambay basin between Saurashtra and mainland Gujarat++, so the big Gujarat rivers all drain into it.",
        tag: "core",
      },
    ],
    traps: [
      {
        wrong: "The Sabarmati rises in Gujarat.",
        right: "It rises in the Aravallis of **Rajasthan** (Udaipur district).",
        why: "++Most of its length is in Gujarat++, which tempts the wrong answer.",
      },
      {
        wrong: "The Sabarmati is a headstream of the Luni.",
        right: "Gujarat's Sabarmati flows to the Gulf of Khambhat. NCERT names a different Luni headstream ‘Sabarmati’ near Pushkar.",
        why: "++Two different streams share one name++; the Luni's branch never reaches Gujarat's Sabarmati.",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── MAHI ─────────────────────────
  {
    id: "mahi",
    name: "Mahi",
    hindi: "माही",
    system: "peninsular-west",
    rank: 2,
    source: {
      place: "Near Bhopawar village, Sardarpur tehsil, Dhar district (northern slopes of the Vindhyas)",
      state: "Madhya Pradesh",
      elevationM: 500,
    },
    mouth: { place: "Gulf of Khambhat (Arabian Sea), near Khambhat", kind: "estuary" },
    lengthKm: { value: 583, note: "India-WRIS. Basin 34,842 sq km; Rajasthan holds the largest share." },
    flowsThrough: ["Madhya Pradesh", "Rajasthan", "Gujarat"],
    direction: "North, then a U-turn west and south-west to the Gulf of Khambhat",
    oneLiner:
      "The river that ==crosses the Tropic of Cancer twice==, ++because both its ends lie south of the line while its loop runs north of it++.",
    personality: [
      "It first flows north ++because it rises on the northern slope of the Vindhyas, and the Central Highlands slope north and north-east (NCERT)++.",
      "It then swings west and south-west in a U ++because its outlet, the Gulf of Khambhat, lies to the south-west++.",
      "Rajasthan holds the largest share of its basin ++because the loop spends its middle course in the Banswara country of south Rajasthan++.",
    ],
    journey: [
      { at: "Dhar district, MP", text: "Rises near Bhopawar (Sardarpur tehsil) on the northern slope of the Vindhyas, south of the Tropic." },
      {
        at: "Banswara, Rajasthan",
        text: "Flows north into Rajasthan, crossing the Tropic of Cancer. The **Mahi Bajaj Sagar dam** stands near Banswara.",
        why: "++It rises on the north-facing slope++, so its first run is northward, across the Tropic.",
      },
      {
        at: "The U-turn",
        text: "Turns west and then south-west towards Gujarat, crossing the Tropic again.",
        why: "++Its outlet lies south of the Tropic++, so the loop must recross the line.",
      },
      { at: "Gujarat", text: "**Kadana dam** and the **Wanakbori weir** hold it in Gujarat." },
      { at: "Gulf of Khambhat", text: "Ends in a wide estuary near Khambhat." },
    ],
    places: [
      { name: "Mahi Bajaj Sagar dam", kind: "dam", note: "Near Banswara, Rajasthan; hydro-power and water supply." },
      { name: "Kadana dam", kind: "dam", note: "Mahisagar district, Gujarat; irrigation and power." },
      { name: "Wanakbori weir", kind: "barrage", note: "Gujarat; part of the Mahi irrigation scheme." },
    ],
    facts: [
      {
        id: "mahi-tropic",
        q: "How many times does the Mahi cross the Tropic of Cancer?",
        a: "**Twice**.",
        because: "++Source and mouth both lie south of the Tropic, but the middle loop runs north of it++; a path that starts and ends on the same side must cross the line an even number of times.",
        tag: "trap",
      },
      {
        id: "mahi-source",
        q: "Where does the Mahi rise?",
        a: "Northern slopes of the Vindhyas, Dhar district, MP.",
        because: "++It rises on the north-facing side of the Vindhyas++, so it starts by flowing north, away from the Narmada trough just to the south.",
        tag: "core",
      },
      {
        id: "mahi-mbs",
        q: "Where is the Mahi Bajaj Sagar dam?",
        a: "Near Banswara, Rajasthan.",
        because: "++The northward loop carries the Mahi through south Rajasthan++, so its big Rajasthan dam sits there.",
        tag: "core",
      },
      {
        id: "mahi-mouth",
        q: "Delta or estuary at the Mahi mouth?",
        a: "Estuary, in the Gulf of Khambhat.",
        because: "++The Gulf's very high tides flush the mouth++, as for the Narmada and Tapi.",
        tag: "core",
      },
    ],
    traps: [
      {
        wrong: "The Mahi crosses the Tropic of Cancer once.",
        right: "It crosses it **twice**.",
        why: "++Both ends lie south of the line++; one crossing would leave it ending north of the Tropic.",
      },
      {
        wrong: "The Mahi rises in the Aravallis of Rajasthan.",
        right: "It rises in the **Vindhyas** of Dhar district, MP.",
        why: "++Its big Rajasthan stretch tempts the wrong state++; the source is south of the loop, in MP.",
      },
    ],
    remember: [
      {
        hook: "Mahi draws a ‘U’ over the Tropic: up, over, down.",
        logic: "++Start south, go north, come back south++: two crossings, every time.",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── LUNI ─────────────────────────
  {
    id: "luni",
    name: "Luni",
    hindi: "लूनी",
    aka: ["Lavanavari / Lavanavati (Sanskrit, ‘salt river’)"],
    system: "peninsular-west",
    rank: 2,
    source: {
      place: "Near Pushkar (Ajmer), Aravalli hills, as two headstreams, the Saraswati and the Sabarmati, that unite at Govindgarh",
      state: "Rajasthan",
      examNote:
        "NCERT: originates near Pushkar in two branches (Saraswati and Sabarmati) which join at Govindgarh; from there it is called the Luni. This ‘Sabarmati’ is a headstream, ==not== Gujarat's Sabarmati.",
    },
    mouth: {
      place: "Rann of Kachchh, Gujarat",
      kind: "inland-drainage",
      note: "It never reaches the Arabian Sea; its water spreads and evaporates in the Rann.",
    },
    lengthKm: { value: 511, note: "India-WRIS (basin 32,879 sq km, all in Rajasthan). Some books quote a shorter length." },
    flowsThrough: ["Rajasthan", "Gujarat (Rann of Kachchh)"],
    direction: "West to Telwara, then south-west to the Rann of Kachchh (NCERT)",
    oneLiner:
      "Rajasthan's largest river system west of the Aravallis, ++sweet near the hills and salty in the desert because evaporation concentrates the salt it picks up++.",
    personality: [
      "Fresh upstream, ==saline below Balotra==, ++because it crosses salt-rich arid soils and fierce evaporation concentrates the salt as the water thins++. Textile effluents around Balotra add to it.",
      "It is **ephemeral** (NCERT) ++because the desert gets very little rain and the Aravallis are low++, so it flows only after monsoon storms.",
      "Almost all big tributaries join from the left ++because they come down from the Aravallis to the south-east++; the right bank faces the Thar, which sends only the Jojari.",
      "It dies in the Rann ++because the Rann is a flat, low salt marsh where water spreads and evaporates instead of flowing on to the sea++.",
    ],
    journey: [
      { at: "Pushkar (Ajmer)", text: "Two headstreams, the Saraswati and the Sabarmati, rise near Pushkar in the Aravallis." },
      { at: "Govindgarh", text: "They join; from here the river leaves the Aravallis and is called the Luni (NCERT)." },
      { at: "Telwara", text: "Flows west to Telwara, then turns south-west." },
      {
        at: "Balotra",
        text: "Below Balotra the water turns saline.",
        why: "++Salt-rich soils and high evaporation++, plus textile effluents.",
      },
      {
        at: "Rann of Kachchh",
        text: "Spreads into the marshes of the Rann and ends there.",
        why: "++Inland drainage: no slope and no water left to reach the sea++.",
      },
    ],
    places: [
      { name: "Pushkar", kind: "pilgrimage", note: "Headstreams rise nearby (Ajmer district)." },
      { name: "Balotra", kind: "city", note: "Below this town the Luni turns saline." },
      { name: "Rann of Kachchh", kind: "wetland", note: "Salt marsh where the Luni ends." },
    ],
    facts: [
      {
        id: "luni-inland",
        q: "Where does the Luni end?",
        a: "In the **Rann of Kachchh**: inland drainage, not the Arabian Sea.",
        because: "++Low rain and high evaporation leave too little water, and the flat Rann gives no slope onward++.",
        tag: "core",
      },
      {
        id: "luni-saline",
        q: "Where and why does the Luni turn saline?",
        a: "Below Balotra.",
        because: "++Salt-rich arid soils plus strong evaporation concentrate salt++; industrial effluents add to it.",
        tag: "core",
      },
      {
        id: "luni-name",
        q: "What does the Sanskrit name Lavanavari mean?",
        a: "Salt river.",
        because: "++Lavana means salt++, a name earned by its saline lower course.",
        tag: "core",
      },
      {
        id: "luni-left-bank",
        q: "Why do most Luni tributaries (Jawai, Sukri, Bandi, Guhiya) join from the left?",
        a: "They come from the Aravallis on the south-east side.",
        because: "++Facing downstream (south-west), your left hand points to the rain-catching Aravallis; the right hand points to the dry Thar++.",
        tag: "core",
      },
      {
        id: "luni-rajasthan",
        q: "Which is the largest river system of Rajasthan west of the Aravallis?",
        a: "The Luni (NCERT).",
        because: "++It gathers most of the streams that run off the western (desert) face of the Aravallis++.",
        tag: "core",
      },
    ],
    traps: [
      {
        wrong: "The Luni drains into the Arabian Sea.",
        right: "It ends in the **Rann of Kachchh** (inland drainage).",
        why: "++Its water evaporates in the salt marsh++ before any channel can reach the sea.",
      },
      {
        wrong: "The Luni is a perennial river.",
        right: "It is ephemeral (NCERT).",
        why: "++Desert rainfall comes in short monsoon bursts++, so the bed is dry most of the year.",
      },
    ],
    remember: [
      {
        hook: "Lavana = salt, as in lavan (salt) in Hindi.",
        logic: "++The name describes its lower course++: sweet at Pushkar, salty after Balotra.",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── SHARAVATI ─────────────────────────
  {
    id: "sharavati",
    name: "Sharavati",
    aka: ["Sharavathi"],
    system: "peninsular-west",
    rank: 2,
    source: { place: "Ambutirtha, Thirthahalli taluk, Shivamogga district (Western Ghats)", state: "Karnataka" },
    mouth: { place: "Arabian Sea at Honnavar, Uttara Kannada", kind: "estuary" },
    flowsThrough: ["Karnataka"],
    direction: "East → West, off the Western Ghats",
    oneLiner: "The river of ==Jog Falls==, ++which drops about 253 m because the Western Ghats fall sharply to the coast++.",
    personality: [
      "It makes **Jog (Gersoppa) Falls** ++because it leaves the Malnad upland over the steep western scarp of the Ghats++.",
      "It is a power river ++because a big drop (head) plus heavy south-west monsoon rain is ideal for hydel++; Linganamakki dam stores it above Jog.",
      "Jog roars in the monsoon and thins in summer ++because the river is rain-fed and Linganamakki holds back the dry-season flow++.",
    ],
    journey: [
      { at: "Ambutirtha", text: "Rises in Thirthahalli taluk, Shivamogga district." },
      { at: "Linganamakki dam", text: "Stored by **Linganamakki dam** (1964) for hydro-power." },
      {
        at: "Jog Falls",
        text: "Plunges about 253 m in four cascades: Raja, Rani, Roarer and Rocket.",
        why: "++This is where it crosses the Ghats scarp++.",
      },
      { at: "Honnavar", text: "Short run across the coastal plain to the sea at Honnavar." },
    ],
    places: [
      { name: "Linganamakki dam", kind: "dam", note: "Built 1964; main reservoir of the Sharavati hydel scheme." },
      { name: "Jog Falls (Gersoppa)", kind: "waterfall", note: "About 253 m, four cascades: Raja, Rani, Roarer, Rocket." },
      { name: "Honnavar", kind: "city", note: "Mouth, Uttara Kannada." },
    ],
    facts: [
      {
        id: "sharavati-jog",
        q: "Jog (Gersoppa) Falls is on which river?",
        a: "The **Sharavati**.",
        because: "++It forms where the Sharavati crosses the steep western edge of the Ghats++. Gersoppa is simply another name for Jog.",
        tag: "pyq",
      },
      {
        id: "sharavati-hydel",
        q: "Why is the Sharavati a major hydro-power river?",
        a: "High head at the Ghats scarp plus monsoon water stored at Linganamakki.",
        because: "++Power depends on drop and water volume; the Ghats give the drop and the SW monsoon gives the water++.",
        tag: "core",
      },
      {
        id: "sharavati-cascades",
        q: "Name the four cascades of Jog Falls.",
        a: "Raja, Rani, Roarer and Rocket.",
        because: "++The flow splits over the uneven lip of the scarp into four separate streams++, each named for its look.",
        tag: "core",
      },
    ],
    traps: [
      {
        wrong: "Jog Falls is on the Kali.",
        right: "Jog Falls is on the **Sharavati**.",
        why: "++Both are short Karnataka rivers with hydel dams++; tie Jog to Shivamogga's Sharavati, Kaiga to the Kali.",
      },
      {
        wrong: "Gersoppa Falls is on the Netravati.",
        right: "Gersoppa (Jog) is on the **Sharavati**.",
        why: "UPSC 2024 used this exact row. ++The Netravati flows to Mangaluru, much further south++.",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── KALI (KARNATAKA) ─────────────────────────
  {
    id: "kali",
    name: "Kali (Karnataka)",
    aka: ["Kalinadi"],
    system: "peninsular-west",
    rank: 3,
    source: { place: "Near Diggi, Joida taluk, Uttara Kannada (Western Ghats)", state: "Karnataka" },
    mouth: { place: "Arabian Sea near Karwar", kind: "estuary" },
    flowsThrough: ["Karnataka"],
    direction: "East → West",
    oneLiner: "A short, dam-lined Ghats river ++that cools the Kaiga atomic plant and reaches the sea at Karwar++.",
    personality: [
      "It carries a chain of dams (Supa, Kodasalli, Kadra) ++because a short, steep river with heavy monsoon rain offers head at several points++.",
      "It hosts the **Kaiga** atomic power station ++because a nuclear plant needs assured cooling water, drawn from the Kali and the Kadra reservoir++.",
    ],
    journey: [
      { at: "Joida (source)", text: "Rises in the Western Ghats of Joida taluk, Uttara Kannada." },
      { at: "Supa dam and Dandeli", text: "**Supa dam** at Ganeshgudi; flows past Dandeli." },
      { at: "Kaiga and Kadra", text: "Kaiga atomic power station uses its water; Kadra dam below." },
      { at: "Karwar", text: "Meets the Arabian Sea at Karwar." },
    ],
    places: [
      { name: "Supa dam", kind: "dam", note: "Ganeshgudi, Uttara Kannada." },
      { name: "Kaiga Atomic Power Station", kind: "project", note: "Uttara Kannada; cooling water from the Kali and Kadra reservoir." },
      { name: "Karwar", kind: "city", note: "Mouth of the Kali." },
    ],
    facts: [
      {
        id: "kali-kaiga",
        q: "Kaiga atomic power station stands on which river?",
        a: "The Kali (Kalinadi), Karnataka.",
        because: "++Nuclear plants are sited beside big, assured water bodies for cooling++.",
        tag: "core",
      },
      {
        id: "kali-name",
        q: "Kali (Karnataka) vs Kali (Sarda): how to tell them apart?",
        a: "Kali of Karnataka flows west to Karwar; the Kali/Sarda ([[sarda]]) forms the India–Nepal border.",
        because: "Name hook: ++‘Kali’ (black) is a common river name across India++, so read the state or the sea in the question.",
        tag: "trap",
      },
    ],
    traps: [
      {
        wrong: "The Kali that reaches the sea at Karwar is the Kali of the India–Nepal border.",
        right: "They are different rivers: the Karnataka Kali (Arabian Sea) and the [[sarda|Sarda/Kali]] (Ganga system).",
        why: "++Same name, opposite ends of India++.",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── NETRAVATI ─────────────────────────
  {
    id: "netravati",
    name: "Netravati",
    aka: ["Nethravathi"],
    system: "peninsular-west",
    rank: 3,
    source: {
      place: "Bangrabalige valley, Yelaneeru Ghat, Kudremukh range, Chikkamagaluru district",
      state: "Karnataka",
    },
    mouth: { place: "Arabian Sea at Mangaluru", kind: "estuary" },
    flowsThrough: ["Karnataka"],
    direction: "East → West",
    oneLiner: "Mangaluru's river, ++short and flood-prone because it falls straight off the Kudremukh Ghats into a narrow coastal plain++.",
    personality: [
      "It floods Bantwal in heavy monsoons ++because SW monsoon rain on the Ghats rushes down a short, steep course++.",
      "Mangaluru grew at its mouth ++because a drowned river mouth on a submerged coast gives a sheltered harbour++ (NCERT lists Mangalore among the west coast's natural ports).",
    ],
    journey: [
      { at: "Kudremukh", text: "Rises in the Kudremukh range, Chikkamagaluru district." },
      { at: "Dharmasthala", text: "Flows past the pilgrimage town of Dharmasthala." },
      { at: "Uppinangady", text: "The Kumaradhara joins it at Uppinangady." },
      { at: "Bantwal to Mangaluru", text: "Passes Bantwal and meets the sea at Mangaluru." },
    ],
    places: [
      { name: "Dharmasthala", kind: "pilgrimage", note: "Temple town on the Netravati." },
      { name: "Uppinangady", kind: "confluence", note: "Kumaradhara–Netravati confluence." },
      { name: "Mangaluru", kind: "city", note: "Port city at the mouth." },
    ],
    facts: [
      {
        id: "netravati-mouth",
        q: "Which city stands at the Netravati's mouth?",
        a: "Mangaluru.",
        because: "++Port cities on the west coast sit at river mouths++, where an estuary gives shelter.",
        tag: "core",
      },
      {
        id: "netravati-not-gersoppa",
        q: "Is Gersoppa Falls on the Netravati?",
        a: "No. Gersoppa (Jog) is on the [[sharavati]].",
        because: "UPSC 2024 tested this row. ++Jog lies in Shivamogga district, far north of the Netravati's Kudremukh catchment++.",
        tag: "pyq",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── MANDOVI / MAHADAYI ─────────────────────────
  {
    id: "mandovi",
    name: "Mandovi (Mahadayi)",
    aka: ["Mahadayi / Mhadei (Karnataka name, used in the water dispute)"],
    system: "peninsular-west",
    rank: 2,
    source: { place: "Springs at Bhimgad, Belagavi district (Western Ghats)", state: "Karnataka" },
    mouth: { place: "Arabian Sea at Panaji, Goa", kind: "estuary" },
    flowsThrough: ["Karnataka", "Goa"],
    direction: "East → West",
    oneLiner:
      "Goa's lifeline and a three-state dispute: ++it rises in Karnataka but most of its basin is in Goa, and Karnataka wants to send some of its water east++.",
    personality: [
      "The dispute exists ++because the dry [[malaprabha]] basin (Krishna system) lies just east of the divide while the rain-rich Mahadayi spills west to Goa++. Karnataka's Kalasa–Banduri plan would carry water across the watershed.",
      "Goa resists ++because less fresh water means salt water pushing further up its estuary and harm to forests and wildlife upstream++.",
      "**Dudhsagar falls** lies on it ++because it plunges down the Western Ghats scarp on the Goa–Karnataka border++.",
    ],
    journey: [
      { at: "Bhimgad (Karnataka)", text: "Rises from springs at Bhimgad, Belagavi district." },
      {
        at: "Kalasa and Banduri streams",
        text: "Karnataka plans small dams on the Kalasa and Banduri streams of its upper basin to divert water to the Malaprabha.",
        why: "++These streams lie right at the water divide, so a short canal can tip them into the east-flowing basin++.",
      },
      { at: "Dudhsagar", text: "Falls down the Ghats at **Dudhsagar** on the Goa–Karnataka border." },
      {
        at: "Goa estuary",
        text: "Widens past Old Goa and the islands of Divar and Chorao, linked to the Zuari by the Cumbarjua canal, and meets the sea at Panaji.",
      },
    ],
    places: [
      { name: "Dudhsagar falls", kind: "waterfall", note: "Goa–Karnataka border, on the Mandovi." },
      { name: "Chorao island", kind: "island", note: "Salim Ali Bird Sanctuary in the Mandovi estuary." },
      { name: "Cumbarjua canal", kind: "canal", note: "Links the Mandovi and the Zuari." },
      { name: "Panaji", kind: "city", note: "Goa's capital, at the mouth." },
    ],
    facts: [
      {
        id: "mandovi-award",
        q: "What did the Mahadayi Water Disputes Tribunal award in August 2018?",
        a: "Goa 24 TMC, Karnataka 13.42 TMC (5.4 for consumptive use, the rest for power) and Maharashtra 1.33 TMC.",
        because: "++Goa holds most of the basin, so it got the biggest share++; Karnataka's small consumptive share reflects the cross-basin diversion it sought.",
        tag: "news",
      },
      {
        id: "mandovi-states",
        q: "Which states are parties to the Mhadei dispute?",
        a: "Goa, Karnataka and Maharashtra.",
        because: "++All three hold part of the basin++: the river rises in Karnataka, touches Maharashtra, and runs mostly in Goa.",
        tag: "core",
      },
      {
        id: "mandovi-malaprabha",
        q: "Kalasa–Banduri: from which basin to which?",
        a: "From the Mahadayi (west-flowing) to the [[malaprabha]] (Krishna basin).",
        because: "++Drinking-water need in drought-prone north Karnataka lies east of the divide, while the surplus rain falls west of it++.",
        tag: "core",
      },
      {
        id: "mandovi-dudhsagar",
        q: "Dudhsagar falls is on which river?",
        a: "The Mandovi (Mahadayi).",
        because: "++It forms where the Mandovi drops down the Ghats scarp++ on the Goa–Karnataka border.",
        tag: "core",
      },
    ],
    traps: [
      {
        wrong: "The Mhadei dispute is only between Goa and Karnataka.",
        right: "Maharashtra is also a party (award share 1.33 TMC).",
        why: "++A small part of the basin lies in Maharashtra++, which gives it a legal stake.",
      },
    ],
    news: [
      {
        year: 2023,
        text: "The Centre set up the Mahadayi Progressive River Authority for Welfare and Harmony (PRAWAH), headquartered in Panaji, to implement the tribunal award; it was reconstituted in March 2024.",
        why: "++Tribunal awards need a body on the ground to enforce shares++, like the Narmada Control Authority.",
      },
      {
        year: 2022,
        text: "On 29 December 2022 the CWC approved Karnataka's detailed project report for the Kalasa–Banduri drinking-water project.",
        why: "++Technical approval is only one step++; the project also needs forest and wildlife clearance, which Goa contests.",
      },
      {
        year: 2020,
        text: "The award was notified in the Gazette in February 2020 after the Supreme Court allowed it; appeals against the award were filed in the Supreme Court.",
        why: "++Notification makes the shares enforceable++ even while appeals continue.",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── ZUARI ─────────────────────────
  {
    id: "zuari",
    name: "Zuari",
    system: "peninsular-west",
    rank: 3,
    source: { place: "Hemad-Barshem, Western Ghats", state: "Goa" },
    mouth: { place: "Arabian Sea at Mormugao bay (Mormugao harbour)", kind: "estuary" },
    flowsThrough: ["Goa"],
    direction: "East → West",
    oneLiner: "Goa's harbour river: ++its drowned mouth gives the deep, sheltered water of Mormugao port++.",
    personality: [
      "Its estuary hosts Mormugao port ++because a river mouth drowned on a submerged coast gives deep, sheltered water++ (NCERT lists Marmagao among the west coast's natural ports).",
      "It is linked to the Mandovi by the Cumbarjua canal ++so that iron-ore barges from interior mines can reach either estuary++.",
    ],
    journey: [
      { at: "Hemad-Barshem", text: "Rises in the Western Ghats of Goa." },
      { at: "Cumbarjua canal", text: "Connected to the Mandovi by the Cumbarjua canal." },
      { at: "Mormugao", text: "Opens into Mormugao bay, Goa's port." },
    ],
    places: [{ name: "Mormugao port", kind: "city", note: "Major port at the Zuari mouth; iron-ore exports." }],
    facts: [
      {
        id: "zuari-mormugao",
        q: "Mormugao harbour lies at the mouth of which river?",
        a: "The Zuari.",
        because: "++Submerged west coast river mouths make natural harbours++ (NCERT).",
        tag: "core",
      },
      {
        id: "zuari-cumbarjua",
        q: "Which canal links the Zuari and the Mandovi?",
        a: "The Cumbarjua canal.",
        because: "++Joining the two estuaries lets ore barges reach either port route++.",
        tag: "core",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── PERIYAR ─────────────────────────
  {
    id: "periyar",
    name: "Periyar",
    hindi: "पेरियार",
    system: "peninsular-west",
    rank: 2,
    source: {
      place: "Sivagiri hills (Chokkampatti Mala), southern edge of the Periyar Tiger Reserve, Idukki",
      state: "Kerala",
      examNote: "India-WRIS calls it ‘the longest river of Kerala’ (244 km). The Bharathapuzha has the larger basin but is shorter (about 209 km).",
    },
    mouth: {
      place: "Vembanad–Kochi backwaters and the Arabian Sea (branches at Varapuzha and Munambam)",
      kind: "estuary",
    },
    lengthKm: { value: 244, note: "India-WRIS; basin 5,398 sq km. Longest river of Kerala." },
    flowsThrough: ["Kerala"],
    direction: "North and north-west through Idukki, then west to the backwaters",
    oneLiner:
      "Kerala's ==longest river== and its perennial ‘lifeline’, ++because it drains the high, very wet Idukki Ghats++.",
    personality: [
      "It is **perennial** ++because its high Idukki catchment gets the south-west monsoon and north-east monsoon showers too++.",
      "It is Kerala's biggest hydel river ++because the Idukki arch dam stores it in a deep gorge high above the power house, giving a large head++.",
      "It feeds Tamil Nadu ++because the Mullaperiyar dam (1895) sends its water east through a tunnel across the Ghats into the [[vaigai]] basin++: NCERT's ‘Periyar Diversion Scheme’.",
    ],
    journey: [
      { at: "Sivagiri hills", text: "Rises on the southern edge of the Periyar Tiger Reserve, Idukki district." },
      {
        at: "Mullaperiyar dam (Thekkady)",
        text: "The **Mullaperiyar dam** at the Mullayar–Periyar confluence forms the Periyar (Thekkady) lake. It is in Kerala but operated by Tamil Nadu.",
        why: "++An 1886 lease between Travancore and the British let the Madras side divert this water east to its dry Vaigai lands++.",
      },
      {
        at: "Idukki",
        text: "The **Idukki arch dam**, with Cheruthoni and Kulamavu, forms Kerala's largest hydel reservoir.",
        why: "++A narrow gorge between hills is the ideal site for an arch dam++.",
      },
      { at: "Aluva", text: "Splits at Aluva; Kochi draws its drinking water here, above the reach of sea water." },
      { at: "Backwaters and sea", text: "One branch drains into the Vembanad–Kochi backwaters at Varapuzha; another reaches the sea at Munambam." },
    ],
    places: [
      { name: "Periyar Tiger Reserve (Thekkady)", kind: "national-park", note: "Around the Mullaperiyar reservoir lake." },
      { name: "Mullaperiyar dam", kind: "dam", note: "Idukki district, Kerala; completed 1895; operated by Tamil Nadu." },
      { name: "Idukki dam", kind: "dam", note: "Double-curvature arch dam across the Periyar; Kerala's largest hydel project." },
      { name: "Aluva", kind: "city", note: "Kochi's water intake; the river splits here." },
    ],
    facts: [
      {
        id: "periyar-longest",
        q: "Which is the longest river of Kerala?",
        a: "The **Periyar** (244 km, India-WRIS).",
        because: "++It runs the long way round from the high southern Ghats north through Idukki before turning west++, while most Kerala rivers drop straight to the sea.",
        tag: "trap",
      },
      {
        id: "periyar-mullaperiyar",
        q: "Mullaperiyar dam: where is it, and who runs it?",
        a: "In Idukki district, Kerala; operated by Tamil Nadu.",
        because: "++The 1886 lease gave the Madras side the water++; it is diverted east to the Vaigai basin. Location and control sit in different states, hence the dispute.",
        tag: "core",
      },
      {
        id: "periyar-142",
        q: "What water level did the Supreme Court allow at Mullaperiyar in 2014?",
        a: "142 ft, with a permanent supervisory committee.",
        because: "++The Court found the strengthened dam safe at that level++ and struck down Kerala's law capping it at 136 ft; Kerala still presses for a new dam on safety grounds.",
        tag: "core",
      },
      {
        id: "periyar-diversion",
        q: "What is the ‘Periyar Diversion Scheme’ named in NCERT?",
        a: "Periyar water stored at Mullaperiyar is sent east through a tunnel to the Vaigai basin in Tamil Nadu.",
        because: "++The rain falls on Kerala's side of the Ghats; the thirsty farmland is on Tamil Nadu's side++, so a tunnel moves water across the divide.",
        tag: "core",
      },
      {
        id: "periyar-idukki",
        q: "On which river is the Idukki arch dam?",
        a: "The Periyar.",
        because: "++The Periyar's deep Idukki gorge offers an arch-dam site with a big head for power++.",
        tag: "core",
      },
    ],
    traps: [
      {
        wrong: "The Bharathapuzha is the longest river of Kerala.",
        right: "By length the **Periyar** (244 km) is longest; the [[bharathapuzha]] (about 209 km) has the larger basin.",
        why: "++‘Largest’ (basin) and ‘longest’ (length) are different tests++. Some older books call the Bharathapuzha the longest; follow the length figures.",
      },
      {
        wrong: "The Mullaperiyar dam is in Tamil Nadu.",
        right: "It is in **Idukki, Kerala**, but owned and operated by Tamil Nadu.",
        why: "++Who runs the dam and where it stands are two different facts++.",
      },
    ],
    news: [
      {
        year: 2021,
        text: "The Dam Safety Act, 2021 set up a national dam-safety framework that now covers old dams like Mullaperiyar.",
        why: "++A 130-year-old lime-surkhi masonry dam upstream of populated valleys++ is exactly what the law targets; Kerala uses it to press for safety reviews.",
      },
      {
        year: 2014,
        text: "The Supreme Court allowed Tamil Nadu to keep Mullaperiyar at 142 ft and set up a permanent supervisory committee.",
        why: "++It settled the level, not the dispute++: Kerala still wants a new dam.",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── BHARATHAPUZHA ─────────────────────────
  {
    id: "bharathapuzha",
    name: "Bharathapuzha",
    aka: ["Nila", "Ponnani river"],
    system: "peninsular-west",
    rank: 3,
    source: { place: "Eastern side of the Anamalai hills, Pollachi taluk, Coimbatore district", state: "Tamil Nadu" },
    mouth: { place: "Arabian Sea at Ponnani, Kerala", kind: "estuary" },
    lengthKm: { value: 209, note: "India-WRIS: second-longest west-flowing river of Kerala. Basin 6,186 sq km (71% Kerala, 29% Tamil Nadu), the largest in Kerala." },
    flowsThrough: ["Tamil Nadu", "Kerala"],
    direction: "West through the Palakkad Gap to the sea",
    oneLiner: "Kerala's biggest basin, ++because it flows through the Palakkad Gap and so collects water from both sides of the Ghats++.",
    personality: [
      "It crosses from Tamil Nadu into Kerala ++because it uses the **Palakkad Gap**, the widest break in Kerala's Western Ghats++.",
      "Its basin is Kerala's largest ++because the gap lets it gather streams from the Tamil Nadu side as well++.",
      "Its sandy bed has been stripped by sand mining ++because a seasonal river with a wide sandy bed is easy to dig++; less sand means a lower water table and a drier river.",
    ],
    journey: [
      { at: "Anamalai hills (Tamil Nadu)", text: "Rises in the Anamalai hills; the Aliyar reservoir lies in its upper basin." },
      { at: "Palakkad Gap", text: "Enters Kerala through the Palakkad Gap; Malampuzha dam stores a tributary." },
      { at: "Ponnani", text: "Meets the Arabian Sea at Ponnani." },
    ],
    places: [
      { name: "Malampuzha dam", kind: "dam", note: "Largest reservoir in the basin, Palakkad." },
      { name: "Aliyar reservoir", kind: "dam", note: "Tamil Nadu, upper basin; asked by UPSC in 2019 as a ‘water reservoir’." },
      { name: "Kerala Kalamandalam", kind: "heritage", note: "Cheruthuruthy, on its banks." },
    ],
    facts: [
      {
        id: "bharathapuzha-gap",
        q: "Why does the Bharathapuzha rise in Tamil Nadu yet flow to the Arabian Sea?",
        a: "It passes through the Palakkad Gap in the Western Ghats.",
        because: "++The gap is a low break in the Ghats wall++, so water from the Tamil Nadu side can drain west.",
        tag: "core",
      },
      {
        id: "bharathapuzha-basin",
        q: "Which Kerala river has the largest basin?",
        a: "The Bharathapuzha (about 6,186 sq km).",
        because: "++The Palakkad Gap widens its catchment into Tamil Nadu++; the Periyar is longer but its basin is smaller.",
        tag: "trap",
      },
    ],
    pyqIds: [],
  },

  // ───────────────────────── PAMBA ─────────────────────────
  {
    id: "pamba",
    name: "Pamba",
    aka: ["Pampa"],
    system: "peninsular-west",
    rank: 3,
    source: { place: "Pulachimalai, Peerumedu plateau (Western Ghats), Idukki", state: "Kerala" },
    mouth: { place: "Vembanad lake (and the sea via the Thottappally spillway)", kind: "lake" },
    lengthKm: { value: 176, note: "India-WRIS: third-longest river in Kerala; basin 2,235 sq km." },
    flowsThrough: ["Kerala"],
    direction: "East → West into Vembanad lake",
    oneLiner: "Sabarimala's river, ++which ends in Vembanad lake because sand bars have ponded Kerala's river mouths into backwaters++.",
    personality: [
      "It ends in **Vembanad**, not the open sea, ++because waves and longshore currents have built sand bars along the coast, trapping the river water behind them as kayals (backwaters)++.",
      "It feeds **Kuttanad**, where rice grows below sea level, ++because the Thanneermukkom barrier keeps tidal salt water out in the dry season++.",
    ],
    journey: [
      { at: "Peerumedu plateau", text: "Rises at Pulachimalai in Idukki." },
      { at: "Sabarimala", text: "Pilgrims bathe in it before climbing to Sabarimala." },
      { at: "Aranmula and Kuttanad", text: "Passes Aranmula (snake-boat race) and spreads into the Kuttanad wetlands." },
      { at: "Vembanad", text: "Drains into Vembanad lake." },
    ],
    places: [
      { name: "Sabarimala", kind: "pilgrimage", note: "Ayyappa temple; pilgrims bathe in the Pamba." },
      { name: "Aranmula", kind: "heritage", note: "Snake-boat race during Onam." },
      { name: "Kuttanad", kind: "wetland", note: "Below-sea-level rice farming; FAO GIAHS (2013)." },
      { name: "Vembanad lake", kind: "lake", note: "Longest lake in India; Vembanad-Kol Ramsar site (2002)." },
    ],
    facts: [
      {
        id: "pamba-sabarimala",
        q: "Sabarimala lies on the banks of which river?",
        a: "The Pamba.",
        because: "++Pilgrims bathe in the Pamba before the climb++, so the river and the shrine are paired in every list.",
        tag: "core",
      },
      {
        id: "pamba-vembanad",
        q: "Where does the Pamba end?",
        a: "In Vembanad lake (Vembanad-Kol Ramsar site, 2002).",
        because: "++A sand barrier separates Vembanad from the sea++, so rivers like the Pamba, Periyar, Meenachil and Achankovil pond up in it.",
        tag: "core",
      },
      {
        id: "pamba-kuttanad",
        q: "How is rice grown below sea level in Kuttanad?",
        a: "Fields are bunded and the Thanneermukkom barrier blocks salt water.",
        because: "++Without the barrier, dry-season tides would push salt into the fields++; it divides Vembanad into a brackish and a fresh part.",
        tag: "core",
      },
    ],
    pyqIds: [],
  },
];
