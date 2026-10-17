import type { Chapter } from "../types";

export const worldChapters: Chapter[] = [
  {
    id: "world-rivers",
    number: 10,
    system: "world",
    title: "World rivers — the same laws, bigger stage",
    hindiTitle: "विश्व की नदियाँ",
    subtitle:
      "Slope, rain, silt and borders explain every big river on Earth. Learn the law once and the outlet seas, falls, deltas and dam disputes follow.",
    minutes: 50,
    outcomes: [
      "Explain why the Amazon flows east, the Nile north and the Siberian rivers north, from where the high ground lies.",
      "Name the sea each major world river ends in, by placing it on the right coast.",
      "Explain why the Congo is so steady, why Arctic rivers flood in spring and why the Aral Sea shrank.",
      "Tell a delta from an estuary and say why the Nile, Mississippi and Mekong build deltas while the Congo does not.",
      "Match famous falls, gorges and dams to the right river and border.",
      "Discuss the 2024–26 shared-river disputes: GERD, Medog, Mekong dams, Turkey's GAP, Qosh Tepa, Colorado and Murray–Darling.",
    ],
    steps: [
      // 1
      {
        id: "same-laws",
        title: "Same laws, bigger stage",
        blocks: [
          {
            type: "say",
            text: "You already know why Indian rivers behave as they do: slope, rain, silt and rock. World rivers obey the **same laws**. UPSC asks them every two or three years, almost always as a ==basin, outlet or lake== fact.",
          },
          {
            type: "compare",
            title: "One law, two continents",
            columns: ["Law", "In India", "Abroad"],
            rows: [
              ["Rivers run down the regional slope", "[[godavari]] and [[krishna]] flow east ++because the Deccan tilts east++", "[[amazon]] flows east ++because the Andes wall off the west++"],
              ["Heavy silt + flat plain = 'sorrow'", "[[kosi]], Sorrow of Bihar", "[[huang-he]], China's Sorrow"],
              ["Rift valley = straight trough", "[[narmada]] between Vindhya and Satpura", "[[rhine]] between Vosges and Black Forest; [[jordan]] in the Jordan Rift"],
              ["A river can loop across a line of latitude", "[[mahi]] crosses the Tropic of Cancer twice", "[[limpopo]] crosses the Tropic of Capricorn twice; [[congo]] the equator twice"],
              ["Closed basin = inland drainage", "Streams of Rajasthan ending in salt lakes", "[[volga]] → Caspian; [[jordan]] → Dead Sea; [[amu-darya]] and [[syr-darya]] → Aral"],
              ["Upstream dam, downstream worry", "China's dam on the [[brahmaputra]]", "GERD on the Blue [[nile]]; Turkey's dams on the [[tigris]] and [[euphrates]]"],
            ],
          },
          {
            type: "law",
            title: "Four shapes of a world-river question",
            text: "UPSC asks: river ↔ **sea it flows into** (2020), basin ↔ country (2023, Congo Basin), feature ↔ river (falls, dams, deltas), and ==changes in water bodies== (2018, Aral Sea). Every one is answered by two questions: ++which way does the land slope, and what does the river carry?++",
          },
        ],
      },

      // 2
      {
        id: "away-from-mountains",
        title: "Rivers run away from the high ground",
        blocks: [
          {
            type: "why",
            q: "The Amazon rises in the Andes of Peru, close to the Pacific. Why does it empty into the Atlantic, thousands of kilometres away?",
            a: "Because the **Andes** rise along the Pacific edge of the continent. ++Young fold mountains on one edge push the water divide to that edge++, so almost all the land drains the other way.",
          },
          {
            type: "sketch",
            id: "water-divide",
            caption: "A ridge splits rain into two basins. In South America the ridge is the Andes, so the Pacific side gets only short streams and the Atlantic side gets the Amazon.",
          },
          {
            type: "compare",
            title: "Find the high ground, then the direction",
            columns: ["River", "High ground lies…", "So it flows…"],
            rows: [
              ["[[amazon]], [[orinoco]], [[parana]]", "Andes, on the west", "East / south-east to the Atlantic"],
              ["[[nile]]", "East African and Ethiopian highlands, in the south", "**North** to the Mediterranean"],
              ["[[mississippi]]", "Rockies (west) and Appalachians (east)", "South, down the trough between them"],
              ["[[ob]], [[yenisei]], [[lena]]", "Altai, Sayan and Baikal mountains, in the south", "**North** to the Arctic"],
              ["[[yangtze]], [[huang-he]]", "Tibetan Plateau, in the west", "East to the Pacific seas"],
              ["[[orange]]", "Drakensberg, on the east rim", "West to the Atlantic"],
            ],
          },
          {
            type: "law",
            title: "The slope law",
            text: "Locate the youngest, highest mountains or plateau; ++rivers flow away from it, down the regional slope++. A river on the 'wrong' side of a continent (Amazon) only means the mountains are on the 'other' side.",
          },
          {
            type: "check",
            q: {
              id: "w-arctic-count",
              prompt: "Consider the following rivers:\n1. Ob\n2. Lena\n3. Volga\n4. Yenisei\nHow many of them flow into the Arctic Ocean?",
              options: ["Only one", "Only two", "Only three", "All four"],
              answer: 2,
              explain: "Siberia rises to the Altai–Sayan–Baikal mountains in the south, so its big rivers run **north**: the Ob and Yenisei to the Kara Sea, the Lena to the Laptev Sea. The Volga drains the Russian plain **south-east** into the closed Caspian. So three.",
              trap: "The Volga is a huge Russian river, so it feels 'Arctic'. ++It lies west of the Urals on a plain that slopes to the Caspian++, not to the Arctic.",
              source: "Practice",
            },
          },
        ],
      },

      // 3
      {
        id: "outlet-seas",
        title: "Where does it end? Place it on the right coast",
        blocks: [
          {
            type: "say",
            text: "The most-asked world-river fact is **where the river ends**. Do not memorise a list. Put the river on the right coast and the sea names itself.",
          },
          {
            type: "compare",
            title: "Coast → sea",
            columns: ["Coast", "River(s)", "Ends in"],
            rows: [
              ["Indochina, east-facing coast", "[[mekong]]", "**South China Sea**"],
              ["Myanmar, west-facing coast", "[[irrawaddy]], [[salween]]", "**Andaman Sea**"],
              ["China, north of Shandong", "[[huang-he]]", "Bohai Sea"],
              ["China, south of Shandong", "[[yangtze]]", "East China Sea"],
              ["Siberian Arctic", "[[ob]], [[yenisei]] / [[lena]]", "Kara Sea / Laptev Sea"],
              ["Russia–China, Pacific side", "[[amur]]", "Strait of Tartary"],
              ["Africa, east coast", "[[zambezi]], [[limpopo]]", "Indian Ocean"],
              ["Africa, north coast", "[[nile]]", "Mediterranean Sea"],
              ["Africa, west coast", "[[congo]], [[orange]] / [[niger]]", "Atlantic / Gulf of Guinea"],
              ["Europe", "[[danube]] / [[rhine]]", "Black Sea / North Sea"],
              ["West Asia", "[[tigris]] + [[euphrates]], as the Shatt al-Arab", "Persian Gulf"],
              ["Closed basins", "[[volga]] / [[jordan]] / [[amu-darya]], [[syr-darya]]", "Caspian / Dead Sea / Aral"],
              ["North America", "[[mississippi]] / [[colorado]] / [[st-lawrence]]", "Gulf of Mexico / Gulf of California / Gulf of St Lawrence"],
              ["South America", "[[amazon]], [[orinoco]], [[parana]] (via Río de la Plata)", "Atlantic"],
              ["Australia", "[[murray]]", "Southern Ocean (Encounter Bay)"],
            ],
          },
          {
            type: "remember",
            hook: "Myanmar looks west, Mekong looks east.",
            logic: "Myanmar's coast faces the Andaman Sea, so the Irrawaddy and Salween end there. The Mekong reaches the sea in southern Vietnam, whose coast faces the South China Sea.",
          },
          {
            type: "check",
            q: {
              id: "w-pyq-2020-outlets",
              prompt: "Consider the following pairs:\nRiver — Flows into\n1. Mekong — Andaman Sea\n2. Thames — Irish Sea\n3. Volga — Caspian Sea\n4. Zambezi — Indian Ocean\nWhich of the pairs given above is/are correctly matched?",
              options: ["1 and 2 only", "3 only", "3 and 4 only", "1, 2 and 4 only"],
              answer: 2,
              explain: "Place each river on its coast. Mekong ends in southern **Vietnam** → South China Sea (1 wrong). Thames flows **east** past London → North Sea (2 wrong). Volga → closed **Caspian** (3 right). Zambezi crosses Mozambique to the **east coast** → Indian Ocean (4 right).",
              trap: "Pair 1 tempts because Myanmar's rivers do end in the Andaman Sea. ++The Mekong only borders Myanmar far upstream++; its mouth is in Vietnam.",
              source: "UPSC CSE Prelims 2020",
            },
          },
        ],
      },

      // 4
      {
        id: "equator-and-tropics",
        title: "Crossing the equator and the tropics",
        blocks: [
          {
            type: "say",
            text: "Three rivers loop across a line of latitude and come back: the [[congo]] crosses the **equator** twice, the [[limpopo]] the **Tropic of Capricorn** twice, and India's [[mahi]] the Tropic of Cancer twice.",
          },
          {
            type: "why",
            q: "Why is the Congo the steadiest of the world's great rivers?",
            a: "Its basin lies on **both sides of the equator**. ++Rainy seasons follow the overhead sun, so when the northern tributaries are dry the southern ones are in flood, and vice versa++. The river is always being fed from somewhere.",
          },
          {
            type: "sketch",
            id: "regime",
            caption: "A one-season river rises and falls sharply. The Congo behaves like two rivers added together: northern tributaries peak in one half of the year, southern ones in the other, so the total stays high and flat.",
          },
          {
            type: "compare",
            title: "Rivers that cross a line twice",
            columns: ["River", "Line", "How"],
            rows: [
              ["[[congo]]", "Equator", "Rises south of it in Zambia, arcs north across it near Kisangani, swings back south-west across it near Mbandaka"],
              ["[[limpopo]]", "Tropic of Capricorn (23.4°S)", "Source about 24°S, arcs north to about 22°S, mouth about 25°S"],
              ["[[mahi]]", "Tropic of Cancer (23.4°N)", "Rises south of it in Madhya Pradesh, loops north through Rajasthan, returns south to the Gulf of Khambhat"],
            ],
          },
          {
            type: "trap",
            wrong: "The equator passes through Lake Tanganyika.",
            right: "The equator passes through **Lake Victoria** (source of the White Nile). Tanganyika lies wholly south of it.",
            why: "Both are big East African lakes. UPSC 2025 asked Tanganyika, Tonlé Sap and Patos Lagoon; the equator crosses none.",
          },
          {
            type: "check",
            q: {
              id: "w-lines-twice",
              prompt: "Consider the following pairs:\nRiver — Line it crosses twice\n1. Congo — Equator\n2. Limpopo — Tropic of Cancer\n3. Mahi — Tropic of Cancer\nHow many of the above pairs are correctly matched?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain: "Congo loops across the **equator** (1 right). Mahi loops across the **Tropic of Cancer** (3 right). The Limpopo is in southern Africa, so its line must be in the southern hemisphere: the **Tropic of Capricorn** (2 wrong).",
              trap: "Pair 2 tempts because the Limpopo and Mahi are taught together. ++A southern-hemisphere river cannot cross the Tropic of Cancer++.",
              source: "Practice",
            },
          },
        ],
      },

      // 5
      {
        id: "congo-basin",
        title: "The Congo Basin: a basin is bigger than its river",
        blocks: [
          {
            type: "law",
            title: "Basin ≠ course",
            text: "A basin includes every country whose rain reaches the river. ++The Congo itself touches only Zambia, DR Congo, the Republic of the Congo and Angola++, but its basin also covers Cameroon, the Central African Republic, Gabon, Rwanda, Burundi and Tanzania.",
          },
          {
            type: "why",
            q: "Why does the Congo Basin hold the world's largest tropical peatland?",
            a: "The central basin (Cuvette Centrale) is a flat, waterlogged swamp forest. ++Standing water keeps oxygen out, so dead plants do not rot; they pile up as peat++. Draining or burning it would release huge amounts of carbon.",
          },
          {
            type: "check",
            q: {
              id: "w-pyq-2023-congo",
              prompt: "Which one of the following is a part of the Congo Basin?",
              options: ["Cameroon", "Nigeria", "South Sudan", "Uganda"],
              answer: 0,
              explain: "South-east **Cameroon** drains through the Sangha into the Congo. Nigeria drains to the **Niger**, while South Sudan and Uganda lie in the **Nile** basin.",
              trap: "Uganda is next to DR Congo, so it feels like the Congo Basin. ++Its rain flows to Lake Victoria and the Nile++.",
              source: "UPSC CSE Prelims 2023",
            },
          },
          {
            type: "check",
            q: {
              id: "w-pyq-2024-peat",
              prompt: "One of the following regions has the world's largest tropical peatland, which holds about three years worth of global carbon emissions from fossil fuels; and the possible destruction of which can exert detrimental effect on the global climate. Which one of the following denotes that region?",
              options: ["Amazon Basin", "Congo Basin", "Kikori Basin", "Rio de la Plata Basin"],
              answer: 1,
              explain: "The **Cuvette Centrale** of the Congo Basin is the largest tropical peatland. ++Permanent waterlogging on a flat basin floor++ is what makes peat.",
              trap: "The Amazon is the bigger forest, so it tempts. Size of forest is not the test; ++waterlogging is++.",
              source: "UPSC CSE Prelims 2024",
            },
          },
        ],
      },

      // 6
      {
        id: "arctic-rivers",
        title: "Arctic rivers flood in spring",
        blocks: [
          {
            type: "say",
            text: "The [[ob]], [[yenisei]] and [[lena]] flow north across Siberia to the Arctic Ocean. Every spring they flood huge areas, ==even without heavy rain==.",
          },
          {
            type: "why",
            q: "Why do Siberian rivers flood in spring?",
            a: "They flow **from south to north**. ++Spring warmth reaches the southern headwaters first, so they thaw while the northern lower course is still frozen++. Meltwater runs into ice, ice jams form, and water spreads over the flat plain.",
          },
          {
            type: "compare",
            title: "The three Siberian giants",
            columns: ["River", "Rises in", "Ends in", "Remember it by"],
            rows: [
              ["[[ob]]", "Altai mountains", "Kara Sea, via the long Gulf of Ob (estuary)", "Main tributary **Irtysh** rises in China, crosses Kazakhstan"],
              ["[[yenisei]]", "Sayan mountains", "Kara Sea", "Divides West Siberian Plain from Central Siberian Plateau; the **Angara** brings Lake Baikal's water"],
              ["[[lena]]", "Baikal mountains", "Laptev Sea, through a large delta", "Rises near Baikal but **does not drain it**"],
            ],
          },
          {
            type: "trap",
            wrong: "The Lena drains Lake Baikal.",
            right: "Baikal's only outlet is the **Angara**, a tributary of the **Yenisei**.",
            why: "The Lena rises just west of Baikal, so maps make it look linked. ++The Baikal mountains put it in a different basin++.",
          },
          {
            type: "check",
            q: {
              id: "w-siberia-statements",
              prompt: "Consider the following statements:\n1. The Angara, which drains Lake Baikal, is a tributary of the Lena.\n2. The Ob flows into the Kara Sea.\n3. Siberian rivers flood in spring because their mouths thaw before their headwaters.\nWhich of the statements given above is/are correct?",
              options: ["2 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
              answer: 0,
              explain: "1 is wrong: the Angara joins the **Yenisei**. 2 is right: the Ob reaches the **Kara Sea** through the Gulf of Ob. 3 reverses the cause: the **headwaters** (south, warmer) thaw first while the mouths (north) stay frozen.",
              trap: "Statement 3 sounds right because it mentions thawing. ++Check the direction: warmth comes from the south, and these rivers flow north++.",
              source: "Practice",
            },
          },
        ],
      },

      // 7
      {
        id: "inland-drainage",
        title: "Rivers that never reach the ocean",
        blocks: [
          {
            type: "law",
            title: "Closed basin, salty end",
            text: "If the lowest point of a basin has no outlet, the river ends in a lake or the sand. ++Evaporation removes the water but leaves the salts++, so the end-lake turns salty and shrinks whenever inflow falls.",
          },
          {
            type: "compare",
            title: "Inland-drainage rivers UPSC asks",
            columns: ["River", "Ends in", "Why it cannot reach the ocean"],
            rows: [
              ["[[volga]]", "Caspian Sea", "The Caspian lies in a sunken, closed basin below sea level"],
              ["[[jordan]]", "Dead Sea", "The rift-valley floor is more than 400 m below sea level"],
              ["[[amu-darya]], [[syr-darya]]", "Aral Sea", "A desert basin in Central Asia with no outlet"],
              ["Okavango (Angola → Botswana)", "Okavango Delta, Kalahari", "The river spreads into an inland swamp in the desert and evaporates"],
              ["Omo (Ethiopia)", "Lake Turkana, Kenya", "A rift-valley lake with no outlet; the world's largest desert lake"],
            ],
          },
          {
            type: "trap",
            wrong: "A river with a delta must reach the ocean.",
            right: "The Volga builds a large delta in the **Caspian**, a closed sea.",
            why: "A delta forms wherever a river meets still water. ++Inland drainage is about where that water goes next++, and the Caspian has no exit.",
          },
          {
            type: "check",
            q: {
              id: "w-inland-pairs",
              prompt: "Consider the following pairs:\nRiver — Ends in\n1. Volga — Black Sea\n2. Jordan — Dead Sea\n3. Syr Darya — Aral Sea\n4. Okavango — Atlantic Ocean\nWhich of the pairs given above are correctly matched?",
              options: ["1 and 2 only", "2 and 3 only", "2, 3 and 4 only", "1 and 4 only"],
              answer: 1,
              explain: "The Volga ends in the closed **Caspian**, not the Black Sea (1 wrong). The Jordan ends in the **Dead Sea** (2 right). The Syr Darya feeds the **North Aral** (3 right). The Okavango rises in Angola but dies in the **Kalahari** of Botswana (4 wrong).",
              trap: "Pair 1 tempts because the Volga–Don canal links the Volga to the Black Sea side. ++A canal is not the river's natural outlet++.",
              source: "Practice",
            },
          },
        ],
      },

      // 8
      {
        id: "aral-sea",
        title: "The Aral Sea: a lake killed by irrigation",
        blocks: [
          {
            type: "say",
            text: "The Aral Sea was once one of the four largest lakes in the world, fed by the [[amu-darya]] from the south and the [[syr-darya]] from the east. Today most of it is desert, the **Aralkum**.",
          },
          {
            type: "why",
            q: "Why did the Aral Sea shrink?",
            a: "From the early 1960s the Soviet Union diverted both rivers to grow **cotton** in the desert. ++In a closed basin the level stays steady only while inflow equals evaporation++; cut the inflow and the sea must shrink.",
          },
          {
            type: "compare",
            title: "The Aral story in cause → effect",
            columns: ["When", "What happened", "Why it matters"],
            rows: [
              ["Early 1960s", "Soviet canals take Amu and Syr Darya water for cotton", "Inflow falls below evaporation; the level starts dropping"],
              ["1987", "The sea splits into a North and a South Aral", "Water no longer connects across the dried bed"],
              ["2005", "Kazakhstan completes the **Kok-Aral dike**", "Syr Darya water is held in the small North Aral, which rises and freshens; fish return"],
              ["2014", "The eastern basin of the South Aral dries completely", "No dike protects the south; the Amu Darya rarely reaches it"],
              ["2022 →", "Afghanistan builds the 285 km **Qosh Tepa Canal** from the Amu Darya", "A new upstream user; Uzbekistan and Turkmenistan fear less water"],
            ],
          },
          {
            type: "check",
            q: {
              id: "w-pyq-2018-aral",
              prompt: "Which of the following has/have shrunk immensely/dried up in the recent past due to human activities?\n1. Aral Sea\n2. Black Sea\n3. Lake Baikal\nSelect the correct answer using the code given below:",
              options: ["1 only", "2 and 3", "2 only", "1 and 3"],
              answer: 0,
              explain: "Only the **Aral** is a closed basin whose feeder rivers were diverted. The Black Sea is connected to the ocean through the Bosporus, so diversions cannot empty it. Baikal is a deep rift lake fed by many rivers and is not shrinking.",
              trap: "Lake Baikal appears in pollution news, which makes it feel endangered. ++Polluted is not the same as shrinking++.",
              source: "UPSC CSE Prelims 2018",
            },
          },
        ],
      },

      // 9
      {
        id: "loess-and-sorrow",
        title: "China's two rivers: yellow silt and the great gorges",
        blocks: [
          {
            type: "compare",
            title: "Huang He vs Yangtze",
            columns: ["", "[[huang-he]]", "[[yangtze]]"],
            rows: [
              ["Rises", "Bayan Har mountains, Qinghai", "Tanggula mountains, Qinghai"],
              ["Crosses", "Loess Plateau, North China Plain", "Sichuan basin, Three Gorges, Wuhan"],
              ["Ends in", "**Bohai Sea**", "**East China Sea** at Shanghai"],
              ["Known for", "Yellow silt, floods, 'China's Sorrow'", "Asia's longest river"],
              ["Big dam", "—", "Three Gorges Dam, world's largest power station"],
            ],
          },
          {
            type: "why",
            q: "Why is a silt-heavy river a 'sorrow'?",
            a: "The Huang He picks up loose **loess** on the Loess Plateau. ++On the flat North China Plain it drops the silt and raises its own bed++, so people build higher dikes until the river runs above the land. When a dike breaks, the flood is catastrophic and the river may take a new course.",
          },
          {
            type: "sketch",
            id: "braided",
            caption: "Too much silt on a gentle slope: the river drops its load, splits into channels and keeps shifting. That is the [[kosi]] in Bihar and, on a giant scale, the lower [[huang-he]].",
          },
          {
            type: "remember",
            hook: "Three sorrows, one cause: Huang He (China), Kosi (Bihar), Damodar (Bengal).",
            logic: "Heavy silt + flat plain → raised bed → floods and shifting course. If you can explain one, you can explain all three.",
          },
          {
            type: "say",
            text: "China's next mega-dam is not on the Yangtze. On 19 July 2025 China began building the **Medog (Motuo)** project on the lower Yarlung Tsangpo, the upper [[brahmaputra]], planned at about 60 GW, ++roughly three times the Three Gorges because the river drops steeply around the Great Bend++.",
          },
          {
            type: "check",
            q: {
              id: "w-china-rivers",
              prompt: "Consider the following statements:\n1. The Huang He gets its colour and name from loess silt.\n2. The Three Gorges Dam is on the Huang He.\n3. The Yangtze flows into the East China Sea.\nWhich of the statements given above is/are correct?",
              options: ["1 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
              answer: 1,
              explain: "1 is right: loess from the **Loess Plateau** turns it yellow. 2 is wrong: the Three Gorges are where the **Yangtze** cuts through mountains in Hubei. 3 is right: the Yangtze reaches the **East China Sea** at Shanghai.",
              trap: "Statement 2 tempts because the Huang He is the 'famous' Chinese river. ++Gorges and huge flow make a dam site, and that is the Yangtze++.",
              source: "Practice",
            },
          },
        ],
      },

      // 10
      {
        id: "deltas-and-estuaries",
        title: "Deltas and estuaries: same law as the Ganga and Narmada",
        blocks: [
          {
            type: "sketch",
            id: "delta-vs-estuary",
            caption: "Slow, silt-heavy river + calm, low-tide sea → delta (Nile, Mississippi, Mekong). Deep, fast flow, little silt or strong tides → estuary (Congo, St Lawrence).",
          },
          {
            type: "compare",
            title: "What the mouth looks like, and why",
            columns: ["River", "Mouth", "Why"],
            rows: [
              ["[[nile]]", "**Arcuate** (fan) delta", "Silt-rich river, weak Mediterranean tides"],
              ["[[mississippi]]", "**Bird's-foot** delta", "Heavy silt into a calm Gulf; each distributary builds its own levees seaward"],
              ["[[mekong]]", "'Nine Dragons' delta, Vietnam", "Silt + shallow shelf; many branches"],
              ["[[niger]]", "Inland delta in Mali **and** coastal delta in Nigeria", "A sudden drop in gradient inland; silt at the coast"],
              ["[[danube]], [[lena]], [[volga]]", "Deltas", "Low-tide or tideless seas (Black, Laptev, Caspian)"],
              ["[[congo]]", "Estuary, **no delta**", "Deep, powerful flow and a submarine canyon carry silt offshore"],
              ["[[amazon]]", "Huge estuary, no classic fan delta", "Strong tides and a coastal current sweep silt along the coast"],
              ["[[st-lawrence]]", "Estuary", "The Great Lakes trap its silt; tides reach far upstream"],
            ],
          },
          {
            type: "sketch",
            id: "meander-oxbow",
            caption: "On a near-flat floodplain the lower Mississippi swings in loops; floods cut across the neck and leave oxbow lakes, just as on the lower Ganga.",
          },
          {
            type: "check",
            q: {
              id: "w-mouth-pairs",
              prompt: "Consider the following pairs:\nRiver — Mouth\n1. Mississippi — Bird's-foot delta\n2. Congo — Large delta\n3. Nile — Arcuate delta\n4. St Lawrence — Estuary\nHow many of the above pairs are correctly matched?",
              options: ["Only one", "Only two", "Only three", "All four"],
              answer: 2,
              explain: "Mississippi (heavy silt, calm Gulf) → **bird's-foot** (1 right). Congo has **no delta**: deep flow and a submarine canyon take silt offshore (2 wrong). Nile → **arcuate** delta (3 right). St Lawrence → **estuary**, since the lakes trap silt (4 right).",
              trap: "Pair 2 tempts because a huge river 'should' build a huge delta. ++Size is not the test; what happens to the silt at the mouth is++.",
              source: "Practice",
            },
          },
        ],
      },

      // 11
      {
        id: "falls-and-gorges",
        title: "Falls, gorges and canyons: rock decides",
        blocks: [
          {
            type: "law",
            title: "Falls mark hard rock",
            text: "A waterfall forms where a river crosses from **hard to soft rock** or falls off a plateau edge. ++The hard layer resists, the soft one below is scoured, so the step stays sharp and retreats upstream++.",
          },
          {
            type: "compare",
            title: "Falls and gorges UPSC asks",
            columns: ["Feature", "River", "Where", "Why there"],
            rows: [
              ["Victoria Falls (Mosi-oa-Tunya)", "[[zambezi]]", "Zambia–Zimbabwe border", "River drops into a crack in a basalt plateau"],
              ["Niagara Falls", "Niagara River, Lake **Erie** → Lake **Ontario** ([[st-lawrence]] system)", "Canada–USA border", "Hard dolomite cap over soft shale"],
              ["Angel Falls", "Headstream of the Churún → Carrao → Caroní → [[orinoco]]", "Auyán-tepui, Venezuela", "Falls off a sheer sandstone table mountain; highest uninterrupted fall"],
              ["Iguazu Falls", "Iguazu River, tributary of the [[parana]]", "Argentina–Brazil border", "Edge of a basalt lava plateau"],
              ["Boyoma and Livingstone Falls", "[[congo]]", "DR Congo", "Hard rims of the Congo 'saucer'"],
              ["Khone Falls", "[[mekong]]", "Southern Laos", "Rock ledge; splits navigation"],
              ["Grand Canyon", "[[colorado]]", "Arizona, USA", "River cut down as the plateau rose"],
              ["Iron Gates", "[[danube]]", "Serbia–Romania border", "Gorge between Carpathians and Balkan mountains"],
            ],
          },
          {
            type: "trap",
            wrong: "Victoria Falls is on the Nile, near Lake Victoria.",
            right: "Victoria Falls is on the **Zambezi**. Lake Victoria feeds the Nile.",
            why: "British explorers named both after Queen Victoria, so the names collide. Fix it by place: the falls are in southern Africa, the lake on the equator.",
          },
          {
            type: "check",
            q: {
              id: "w-falls-pairs",
              prompt: "Consider the following pairs:\nWaterfall — River / location\n1. Victoria Falls — Zambezi\n2. Iguazu Falls — main stream of the Paraná\n3. Angel Falls — Orinoco basin\n4. Niagara Falls — between Lake Ontario and Lake Huron\nHow many of the above pairs are correctly matched?",
              options: ["Only one", "Only two", "Only three", "All four"],
              answer: 1,
              explain: "1 is right. 2 is wrong: Iguazu Falls is on the **Iguazu** river, a tributary that joins the Paraná just downstream. 3 is right: Angel Falls drains via the Caroní into the **Orinoco**. 4 is wrong: Niagara lies between **Lake Erie** and **Lake Ontario**.",
              trap: "Pair 2 is half-true, which is UPSC's favourite trap. ++'In the Paraná basin' is right; 'on the Paraná' is wrong++.",
              source: "Practice",
            },
          },
        ],
      },

      // 12
      {
        id: "shared-rivers-dams",
        title: "Shared rivers, dams and disputes (as of October 2026)",
        blocks: [
          {
            type: "law",
            title: "Upstream holds the tap",
            text: "Whoever controls the headwaters controls the timing of the flow. ++Downstream states answer with treaties, river commissions or protest++, never with geography on their side.",
          },
          {
            type: "compare",
            title: "The live disputes",
            columns: ["Basin", "Upstream project", "Who worries", "Status"],
            rows: [
              ["[[nile]]", "**GERD** on the Blue Nile, Ethiopia (5,150 MW)", "Egypt, Sudan", "Inaugurated 9 September 2025. The Nile Cooperative Framework Agreement entered into force 13 October 2024; Egypt and Sudan reject it"],
              ["[[brahmaputra]]", "**Medog (Motuo)** on the Yarlung Tsangpo, China; planned about 60 GW", "India, Bangladesh", "Construction began 19 July 2025"],
              ["[[mekong]]", "Chinese dams on the Lancang; dams in Laos; Cambodia's **Funan Techo Canal**", "Cambodia's fishery, Vietnam's delta", "Canal groundbreaking 5 August 2024. Mekong River Commission = Cambodia, Laos, Thailand, Vietnam only"],
              ["[[tigris]], [[euphrates]]", "Turkey's **GAP**: 22 dams, incl. Atatürk (Euphrates) and Ilısu (Tigris)", "Syria, Iraq", "Both ask Turkey to release more water in dry years"],
              ["[[amu-darya]]", "Afghanistan's **Qosh Tepa Canal** (285 km)", "Uzbekistan, Turkmenistan, the Aral", "Begun 2022; first phase finished October 2023"],
              ["[[syr-darya]]", "Toktogul reservoir, Kyrgyzstan (winter power)", "Uzbekistan, Kazakhstan (summer irrigation)", "Long-running seasonal conflict"],
            ],
          },
          {
            type: "trap",
            wrong: "China is a member of the Mekong River Commission.",
            right: "The MRC (1995) has four members: **Cambodia, Laos, Thailand, Vietnam**. China and Myanmar are dialogue partners.",
            why: "Upstream states avoid binding rules. China instead leads its own Lancang–Mekong framework.",
          },
          {
            type: "check",
            q: {
              id: "w-pyq-2015-mgc",
              prompt: "In the Mekong-Ganga Cooperation, an initiative of six countries, which of the following is/are not a participant/participants?\n1. Bangladesh\n2. Cambodia\n3. China\n4. Myanmar\n5. Thailand\nSelect the correct answer using the code given below.",
              options: ["1 only", "2, 3 and 4", "1 and 3", "1, 2 and 5"],
              answer: 2,
              explain: "Mekong–Ganga Cooperation (2000) = **India + the five mainland South-East Asian Mekong countries**: Cambodia, Laos, Myanmar, Thailand, Vietnam. Bangladesh is not a Mekong country; China is a Mekong country but runs its own Lancang–Mekong forum.",
              trap: "China tempts because the Mekong rises in China. ++The grouping is India reaching out to South-East Asia, not a whole-basin body++.",
              source: "UPSC CSE Prelims 2015",
            },
          },
          {
            type: "check",
            q: {
              id: "w-gerd",
              prompt: "With reference to the Grand Ethiopian Renaissance Dam (GERD), consider the following statements:\n1. It is built on the White Nile.\n2. It was inaugurated in September 2025.\n3. Egypt and Sudan have not signed the Nile Cooperative Framework Agreement.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "3 only", "1, 2 and 3"],
              answer: 1,
              explain: "GERD is on the **Blue Nile**, in Ethiopia (1 wrong). It was inaugurated on **9 September 2025** (2 right). Egypt and Sudan refused to sign the CFA, which entered into force in October 2024 without them (3 right).",
              trap: "Statement 1 tempts because 'Nile' is enough for many. ++Ethiopia is the Blue Nile's home; the White Nile comes from Lake Victoria++.",
              source: "Practice",
            },
          },
        ],
      },

      // 13
      {
        id: "corridors-and-droughts",
        title: "Waterways of Europe, droughts of the dry basins",
        blocks: [
          {
            type: "compare",
            title: "Europe's two great waterways",
            columns: ["", "[[danube]]", "[[rhine]]"],
            rows: [
              ["Rises", "Black Forest, Germany", "Swiss Alps"],
              ["Flows", "West → east", "South → north"],
              ["Ends in", "**Black Sea** (delta in Romania and Ukraine)", "**North Sea** (delta near Rotterdam)"],
              ["Countries", "10: Germany, Austria, Slovakia, Hungary, Croatia, Serbia, Romania, Bulgaria, Moldova, Ukraine", "Switzerland, Liechtenstein, Austria, Germany, France, Netherlands"],
              ["Capitals", "Vienna, Bratislava, Budapest, Belgrade", "Vaduz (Liechtenstein)"],
              ["Special", "Iron Gates gorge; ICPDR coordinates the basin", "Rift valley between Vosges and Black Forest; Europe's busiest waterway"],
            ],
          },
          {
            type: "why",
            q: "Why can barges use the Rhine all year?",
            a: "Its Alpine glaciers and snow peak in **summer**, while its rain-fed lowland tributaries peak in **winter**. ++Two sources peaking in opposite seasons keep the depth steady++. The Rhine–Main–Danube Canal (1992) then links it to the Danube, joining the North Sea to the Black Sea.",
          },
          {
            type: "say",
            text: "Dry basins show the opposite problem: ==more water promised than the river carries==. On the [[colorado]], drought drained Lake Mead, the US declared the river's first-ever shortage in **August 2021**, and the 2007 shortage-sharing rules run only through 2026. On the [[murray]], the Millennium Drought led to the Water Act 2007 and the **Basin Plan (2012)**, which caps how much water can be taken.",
          },
          {
            type: "check",
            q: {
              id: "w-danube-capitals",
              prompt: "Which one of the following capital cities is NOT situated on the Danube?",
              options: ["Vienna", "Budapest", "Prague", "Belgrade"],
              answer: 2,
              explain: "Walk downstream: **Vienna → Bratislava → Budapest → Belgrade**. Prague stands on the **Vltava**, which flows north to the Elbe and the North Sea, a different basin.",
              trap: "Prague is a Central European capital like the others. ++The Czech highlands drain north to the Elbe++, away from the Danube.",
              source: "Practice",
            },
          },
        ],
      },

      // 14
      {
        id: "country-sequences",
        title: "Country sequences: walk downstream",
        blocks: [
          {
            type: "law",
            title: "Read a sequence like a walk",
            text: "For any 'arrange from source to mouth' question, ++start where the high ground is and walk down the slope++. Border rivers touch two countries at once; list both.",
          },
          {
            type: "remember",
            hook: "Mekong: China → Myanmar/Laos border → Laos/Thailand border → Cambodia → Vietnam.",
            logic: "Tibet is the high ground in the north; walk south down Indochina and the mouth must be in Vietnam on the South China Sea.",
          },
          {
            type: "check",
            q: {
              id: "w-mekong-order",
              prompt: "Arrange the following countries in the order in which the Mekong flows through them, from source to mouth:\n1. Cambodia\n2. Laos\n3. China\n4. Vietnam",
              options: ["3-2-1-4", "3-1-2-4", "2-3-1-4", "3-2-4-1"],
              answer: 0,
              explain: "Start on the Tibetan Plateau in China, flow south through and along Laos, then Cambodia (Phnom Penh, Tonlé Sap), and end in the **Vietnam** delta.",
              trap: "3-2-4-1 tempts if you think the river ends in Cambodia. ++The delta and the sea lie in southern Vietnam++.",
              source: "Practice",
            },
          },
          {
            type: "check",
            q: {
              id: "w-niger-countries",
              prompt: "Through which of the following countries does the Niger river flow?\n1. Guinea\n2. Mali\n3. Ghana\n4. Nigeria\n5. Senegal\nSelect the correct answer using the code given below.",
              options: ["1, 2 and 4 only", "1, 2, 3 and 4 only", "2, 4 and 5 only", "1, 2, 4 and 5 only"],
              answer: 0,
              explain: "Follow the boomerang: rises in the Guinea Highlands, runs inland to **Mali** (Inner Niger Delta, Timbuktu), bends through Niger and along Benin, and ends in **Nigeria**. Ghana is drained by the Volta and Senegal by the Senegal river.",
              trap: "Senegal tempts because it borders Mali. ++The Niger turns north-east away from Senegal right from its source++.",
              source: "Practice",
            },
          },
          {
            type: "check",
            q: {
              id: "w-danube-countries",
              prompt: "Consider the following countries:\n1. Austria\n2. Czechia\n3. Serbia\n4. Moldova\n5. Ukraine\nThrough or along how many of them does the Danube flow?",
              options: ["Only two", "Only three", "Only four", "All five"],
              answer: 2,
              explain: "Austria (Vienna), Serbia (Belgrade, Iron Gates), Moldova (a very short stretch of bank) and Ukraine (the delta border with Romania) all touch the river. Czechia lies in the Danube **basin** through the Morava, but the river itself never enters it.",
              trap: "Czechia tempts because part of it drains to the Danube. ++Basin is not course++; the same trap UPSC used for the Congo Basin.",
              source: "Practice",
            },
          },
        ],
      },
    ],
  },
];
