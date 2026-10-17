import type { Chapter } from "../types";

export const brahmaputraChapters: Chapter[] = [
  {
    id: "brahmaputra-north-east",
    number: 5,
    system: "brahmaputra",
    title: "The Brahmaputra and the North-East",
    hindiTitle: "ब्रह्मपुत्र नदी तंत्र",
    subtitle: "East across Tibet, a U-turn at Namcha Barwa, a braided giant in Assam: and the bank rule in its clearest form",
    minutes: 30,
    outcomes: [
      "Explain why the Tsangpo flows east and why it U-turns into India.",
      "Name the river correctly in Tibet, Arunachal, Assam and Bangladesh.",
      "Put every tributary on the right bank by facing downstream, and explain why Himalayan tributaries are right-bank here but left-bank on the Ganga.",
      "Explain the Brahmaputra's floods, braiding, Majuli and Kaziranga as one cause–effect chain.",
      "Trace the Teesta, Barak and Meghna, and dodge the Loktak trap.",
      "Discuss China's Great Bend project and India's dams with dates (status Oct 2026).",
    ],
    steps: [
      {
        id: "tsangpo",
        title: "A Tibetan river that runs east",
        blocks: [
          { type: "say", text: "NCERT: the [[brahmaputra]] rises in the **Chemayungdung glacier** of the Kailash range near Lake Mansarovar, then flows **east for nearly 1,200 km** through dry, flat southern Tibet as the **Tsangpo**, 'the purifier'." },
          { type: "trap", wrong: "The Brahmaputra rises at the Angsi glacier; Chemayungdung is wrong.", right: "Exam answer: **Chemayungdung** (NCERT 2026-27). Angsi comes from a 2011 Chinese Academy of Sciences study.", why: "UPSC follows NCERT. If only Angsi appears among the options, pick it; if both appear, pick Chemayungdung." },
          { type: "why", q: "Why does the Tsangpo flow east, parallel to the Himalaya?", a: "++It follows the Indus–Tsangpo suture++, the trough left north of the Great Himalaya where India hit Eurasia. The Indus takes the same trough west; the Tsangpo takes it east." },
          { type: "why", q: "Why is the river calm and low in silt in Tibet but huge and muddy in India?", a: "++Tibet is cold and dry, so little rain and little erosion++. In Arunachal and Assam the river meets very heavy monsoon rain and many big tributaries." },
          { type: "map", focus: ["brahmaputra"], caption: "Trace the Brahmaputra: east across Tibet, U-turn at Namcha Barwa, south-west through Arunachal, west through Assam, south into Bangladesh.", trace: true },
        ],
      },
      {
        id: "great-bend",
        title: "The Great Bend at Namcha Barwa",
        blocks: [
          { type: "say", text: "Near **Namcha Barwa (7,755 m)** the river carves a deep gorge and turns sharply, almost a U, to flow south into Arunachal Pradesh (NCERT)." },
          { type: "sketch", id: "great-bend", caption: "The Tsangpo wraps round Namcha Barwa and drops into Arunachal as the Siang." },
          { type: "why", q: "Why the sudden U-turn?", a: "++At its eastern end the Himalayan arc bends sharply round a mountain knot, the eastern syntaxis++. The river is forced round the knot and cuts one of the deepest gorges on Earth while doing it." },
          { type: "remember", hook: "Two syntaxes, two bends: Nanga Parbat turns the Indus, Namcha Barwa turns the Tsangpo.", logic: "The Himalaya is an arc that bends at both ends. ++Each big trans-Himalayan river turns where the arc turns++, west for the Indus and east for the Brahmaputra." },
          {
            type: "check",
            q: {
              id: "bp-q-uturn",
              prompt: "The Brahmaputra, Irrawady and Mekong rivers originate in Tibet and flow through narrow and parallel mountain ranges in their upper reaches. Of these rivers, Brahmaputra makes a \"U\" turn in its course to flow into India. This \"U\" turn is due to",
              options: [
                "uplift of folded Himalayan series",
                "syntaxis bending of geologically young Himalayas",
                "geo-tectonic disturbance in the tertiary folded mountain chains",
                "Both (a) and (b) above",
              ],
              answer: 1,
              explain: "The U-turn happens at one point, so look for a local cause. ++Syntaxis bending is the sharp bend of the Himalayan arc at its eastern end round Namcha Barwa++. General uplift would raise the range, not twist the river round one corner.",
              trap: "!!Both (a) and (b)!! tempts because uplift is real; but uplift alone does not explain a turn at one spot.",
              source: "UPSC CSE Prelims 2011",
            },
          },
        ],
      },
      {
        id: "sadiya",
        title: "Siang, Dibang, Lohit: a river gets its name",
        blocks: [
          { type: "say", text: "The river enters Arunachal as the **Siang** or **Dihang**, reaches the plains near Pasighat, and flows south-west. Near **Sadiya** it receives its main left-bank tributaries, the [[dibang]] (Sikang) and the [[lohit]]; from here it is the **Brahmaputra** (NCERT)." },
          { type: "why", q: "Why do the Dibang and Lohit join on the left bank?", a: "++The Siang is flowing south-west, and both rivers come in from the east++. Face downstream: east is under your left hand." },
          { type: "say", text: "The 9.15 km **Dhola–Sadiya bridge (Bhupen Hazarika Setu)** crosses the Lohit here; it opened on 26 May 2017. ++The three rivers braid across a wide plain at Sadiya++, which is why the bridge had to be so long." },
          { type: "remember", hook: "Tsangpo → Siang → Brahmaputra → Jamuna.", logic: "Tibet → Arunachal → Assam → Bangladesh. Each new name starts at a junction: Brahmaputra after the Dibang–Lohit join, Jamuna after the Teesta joins." },
          { type: "trap", wrong: "The Brahmaputra is called the Jamuna in Tibet.", right: "**Tsangpo** in Tibet; **Jamuna** in Bangladesh.", why: "Names follow the culture of each stretch, in downstream order." },
        ],
      },
      {
        id: "bank-rule",
        title: "The bank rule, in its clearest form",
        blocks: [
          { type: "sketch", id: "bank-rule", caption: "Stand in the river facing downstream. Left hand = left bank, right hand = right bank." },
          { type: "law", title: "Banks belong to the direction of flow", text: "In Assam the Brahmaputra flows **west-south-west**. Face that way: ++your right hand points north to the Himalaya, your left hand south to the Patkai, Naga and Meghalaya hills++. So Himalayan tributaries are **right-bank**, hill-and-plateau tributaries are **left-bank**." },
          {
            type: "compare",
            title: "Same Himalaya, opposite banks",
            columns: ["", "Ganga (flows east)", "Brahmaputra in Assam (flows west)"],
            rows: [
              ["Himalayan tributaries arrive on the", "Left bank (Ghaghara, Gandak, Kosi)", "Right bank (Subansiri, Kameng, Manas, Sankosh)"],
              ["Southern tributaries arrive on the", "Right bank (Son, from the Peninsula)", "Left bank (Burhi Dihing, Dhansiri, Kopili)"],
              ["Why", "North is on your left facing east", "North is on your right facing west"],
            ],
          },
          { type: "remember", hook: "Don't learn bank lists. Learn the flow direction.", logic: "Once you know which way a river flows at the junction, the bank of every tributary follows. The Brahmaputra and Ganga flow in opposite directions, so the Himalayan side flips from left to right." },
          {
            type: "check",
            q: {
              id: "bp-q-bank",
              prompt: "In Assam the Brahmaputra flows towards the west-south-west. Which of the following join it on its right bank?\n1. Subansiri\n2. Dhansiri\n3. Manas\n4. Kopili",
              options: ["1 and 3 only", "2 and 4 only", "1, 2 and 3 only", "1, 3 and 4 only"],
              answer: 0,
              explain: "Face west-south-west: ++right hand = north bank = rivers from the Himalaya++. Subansiri and Manas come from the north. Dhansiri (from Nagaland) and Kopili (from the Meghalaya plateau) come from the south, so they are left-bank.",
              trap: "!!North = left!! is the habit you bring from the Ganga; it flips here because the Brahmaputra flows the other way.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "north-bank",
        title: "North bank (right bank): Subansiri to Sankosh",
        blocks: [
          { type: "say", text: "NCERT's major right-bank tributaries: the [[subansiri]], [[kameng]], [[manas]] and [[sankosh]]. In Bangladesh the [[teesta]] also joins on the right bank." },
          { type: "say", text: "**Subansiri**: rises in Tibet and is **antecedent** (NCERT); commonly called the largest tributary. **Kameng**: from below Gori Chen in Tawang; it becomes the **Jia Bharali** in Assam and joins near Tezpur. **Manas**: from Bhutan, through Manas National Park, to Jogighopa. **Sankosh**: from Bhutan (Puna Tsang Chhu), along the Assam–West Bengal border." },
          { type: "why", q: "Why are the north-bank tributaries big, steep and sediment-heavy?", a: "++They fall from the high, rain-soaked Himalaya to the plain in a short distance++, eroding soft young rock on the way. That is also why the north bank has the big hydro projects (Subansiri Lower, Dibang)." },
          { type: "spine", river: "brahmaputra", caption: "Brahmaputra spine: Himalayan rivers on the right, Patkai–Naga–Meghalaya rivers on the left." },
          {
            type: "check",
            q: {
              id: "bp-q-tributaries",
              prompt: "Which of the following is/are tributary/tributaries of Brahmaputra?\n1. Dibang\n2. Kameng\n3. Lohit\nSelect the correct answer using the code given below.",
              options: ["1 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 3,
              explain: "Dibang and Lohit join the Siang near Sadiya, which is where it becomes the Brahmaputra. ++The Kameng drains the Himalaya north of Tezpur and joins as the Jia Bharali++. All three are tributaries.",
              trap: "!!1 and 3 only!! tempts if you know the Sadiya pair but forget the Kameng because of its Assamese name.",
              source: "UPSC CSE Prelims 2016",
            },
          },
        ],
      },
      {
        id: "south-bank",
        title: "South bank (left bank): Burhi Dihing, Dhansiri, Kopili",
        blocks: [
          { type: "say", text: "NCERT's major left-bank tributaries are the [[burhi-dihing]] (from the Patkai hills, meeting at Dihingmukh) and the **Dhansari (South)** ([[dhansiri]], from Nagaland). The [[kopili]] comes from the Meghalaya plateau." },
          { type: "why", q: "Why are the south-bank tributaries smaller than the north-bank ones?", a: "++They drain lower hills and an old plateau, not the high Himalaya++, so they have smaller catchments, no glaciers and less fall." },
          { type: "trap", wrong: "The Dhansiri is a north-bank river.", right: "NCERT's 'Dhansari (South)' is a **left-bank** river from Nagaland.", why: "A different, smaller Dhansiri flows on the north bank; NCERT adds '(South)' to separate them." },
          { type: "say", text: "The upper **Kopili** is acidic ++because rain leaches acid from opencast coal pits in Meghalaya++, which hurts fish and the Kopili hydro plant: a GS3 example of mining pollution." },
        ],
      },
      {
        id: "floods-braids",
        title: "Why Assam floods and the river braids",
        blocks: [
          { type: "say", text: "NCERT: the Brahmaputra is 'well-known for floods, channel shifting and bank erosion' because its tributaries are large and bring large quantities of sediment owing to heavy rainfall in its catchment." },
          { type: "sketch", id: "braided", caption: "Too much sediment on a gentle slope: the river drops its load as bars and splits into braids." },
          { type: "law", title: "Load beats slope", text: "When a river carries more sediment than its slope can move, it drops the excess. ++The bed rises, the channel splits round sand bars, and floods spill over the banks++. The Assam valley is long, narrow and gentle, so the Brahmaputra braids along almost its whole length there." },
          { type: "why", q: "How do earthquakes make the floods worse?", a: "++Big earthquakes shake loose landslides that choke rivers with debris++. After the 15 August 1950 Assam–Tibet earthquake (epicentre in the Mishmi Hills), landslide dams formed; one on the Subansiri burst eight days later, and debris-laden rivers flooded Assam." },
          {
            type: "check",
            q: {
              id: "bp-q-floods",
              prompt: "Which of the following help explain why the Brahmaputra is braided in Assam?\n1. Heavy sediment brought by large tributaries\n2. The gentle slope of the Assam valley\n3. Hard crystalline rock along its bed in the valley\nSelect the correct answer using the code given below.",
              options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
              answer: 1,
              explain: "Braiding needs ++more sediment than the slope can carry++: 1 supplies the load, 2 removes the energy to move it. Statement 3 is wrong: the valley floor is thick alluvium; hard rock would give a single, confined channel, as near Guwahati.",
              trap: "!!Hard rock!! sounds like it would make rapids and channels; it actually prevents braiding.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "majuli-kaziranga",
        title: "Majuli and Kaziranga: made by the river",
        blocks: [
          { type: "say", text: "**Majuli** is a river island in the Brahmaputra between the main channel on the south and old channels (Kherkutia Xuti) and the Subansiri on the north. It became India's **first island district** in 2016 and is the seat of Sankardeva's Vaishnavite satras." },
          { type: "why", q: "Why is Majuli shrinking?", a: "++The same channel shifting that created the island now eats its banks++. Every flood season the braided river cuts into its soft alluvium." },
          { type: "say", text: "**Kaziranga National Park** lies on the **south bank** of the Brahmaputra (UNESCO World Heritage Site, one-horned rhino). Floods drown much of it most years, and animals move to the Karbi Anglong hills to the south; ++the same floods renew its grasslands and wetlands++." },
          {
            type: "check",
            q: {
              id: "bp-q-majuli",
              prompt: "Consider the following pairs:\n1. Majuli : river island in the Brahmaputra\n2. Kaziranga National Park : on the Manas river\n3. Manas National Park : adjoins Bhutan\nHow many of the pairs given above are correctly matched?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain: "1 and 3 are right. ++Kaziranga lies on the Brahmaputra's south bank in central Assam++, far east of where the Manas enters from Bhutan. UPSC 2013 used exactly this wrong pair.",
              trap: "!!Kaziranga : Manas!! tempts because both are famous Assam parks; place them on the map, east and west.",
              source: "Practice (pattern of UPSC 2013)",
            },
          },
        ],
      },
      {
        id: "teesta",
        title: "Teesta: a Sikkim river that ends in Bangladesh",
        blocks: [
          { type: "say", text: "The [[teesta]] rises from glaciers and lakes of North Sikkim (the Zemu glacier feeds it), flows south through Sikkim, picks up the Rangeet, crosses north Bengal and joins the Brahmaputra on its **right bank in Bangladesh** (NCERT). Below that junction the Brahmaputra is the **Jamuna**." },
          { type: "why", q: "Why does the Teesta join the Brahmaputra and not the Ganga?", a: "++A great flood in 1787 shifted it east++. Before that it drained south through channels such as the Atrai and Karatoya, towards the Ganga side." },
          { type: "say", text: "In the news: the **South Lhonak glacial lake** burst on 4 October 2023 and the flood destroyed the Teesta III dam at Chungthang. The India–Bangladesh water-sharing deal drafted in 2011 is still stuck after West Bengal objected." },
          {
            type: "check",
            q: {
              id: "bp-q-teesta",
              prompt: "With reference to river Teesta, consider the following statements :\n1. The source of river Teesta is the same as that of Brahmaputra but it flows through Sikkim.\n2. River Rangeet originates in Sikkim and it is a tributary of river Teesta.\n3. River Teesta flows into Bay of Bengal on the border of India and Bangladesh.\nWhich of the statements given above is/are correct ?",
              options: ["1 and 3 only", "2 only", "2 and 3 only", "1, 2 and 3"],
              answer: 1,
              explain: "Statement 1: ++the Teesta rises in North Sikkim; the Brahmaputra rises near Mansarovar in Tibet++. Statement 3: it ends in the Brahmaputra inside Bangladesh, not in the sea. Only statement 2 survives.",
              trap: "!!Statement 3!! tempts because the Teesta does cross into Bangladesh; crossing a border is not reaching the sea.",
              source: "UPSC CSE Prelims 2017",
            },
          },
        ],
      },
      {
        id: "to-the-bay",
        title: "Dhubri to the Bay: Jamuna, Padma, Meghna",
        blocks: [
          { type: "say", text: "At **Dhubri** the Brahmaputra turns almost 90° south and enters Bangladesh (NCERT). As the **Jamuna** it merges with the [[padma]] (the Ganga) near Goalundo; the Padma then joins the [[meghna]] near Chandpur, which carries everything to the Bay of Bengal." },
          { type: "why", q: "Why does the river turn south at Dhubri?", a: "++It has rounded the western end of the Meghalaya (Garo) plateau++, so the way to the sea now lies south. NCERT adds the deeper cause: mid-Pleistocene downthrusting of the Malda gap between the Rajmahal hills and the Meghalaya plateau diverted the Ganga and Brahmaputra towards the Bay of Bengal." },
          { type: "map", focus: ["brahmaputra", "teesta", "barak", "meghna", "padma"], caption: "Trace the lower course: Dhubri → Jamuna → Padma → Meghna → Bay of Bengal.", trace: true },
          { type: "trap", wrong: "The Brahmaputra flows straight into the Bay of Bengal.", right: "It merges with the **Padma**, and the combined water reaches the sea through the **Meghna**.", why: "Two giant rivers share one delta: the Ganga–Brahmaputra–Meghna (Sundarbans) delta." },
        ],
      },
      {
        id: "barak",
        title: "Barak: the other river of the North-East",
        blocks: [
          { type: "say", text: "The [[barak]] rises in the **Manipur hills** south of Mao (Senapati district), flows through Manipur, enters Assam's Cachar plain past Silchar, and at the Bangladesh border splits into the **Surma** and **Kushiyara**, which reunite as the **Meghna** (India-WRIS)." },
          { type: "why", q: "Why is the Barak a separate system and not a Brahmaputra tributary?", a: "++The Barail range and the Meghalaya plateau stand between the two valleys++, so the Barak drains south-west into the Sylhet basin of Bangladesh instead." },
          { type: "trap", wrong: "Loktak Lake lies in the Barak basin.", right: "Loktak drains to the **Manipur river**, which flows south into Myanmar and joins the Chindwin (Irrawaddy system).", why: "The Manipur valley slopes south, away from the Barak. Loktak is famous for its floating phumdis and Keibul Lamjao, the floating national park (UPSC 2015)." },
          {
            type: "check",
            q: {
              id: "bp-q-arunachal",
              prompt: "Consider the following rivers :\n1. Barak\n2. Lohit\n3. Subansiri\nWhich of the above flows/flow through Arunachal Pradesh?",
              options: ["1 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 1,
              explain: "Lohit enters India at Kibithu in Arunachal; the Subansiri crosses Arunachal's Miri Hills from Tibet. ++The Barak rises in the Manipur hills, south of the Brahmaputra valley++, and never touches Arunachal.",
              trap: "!!1, 2 and 3!! tempts because all three are 'North-East rivers'; split the region into its two basins.",
              source: "UPSC CSE Prelims 2014",
            },
          },
        ],
      },
      {
        id: "dams-great-bend",
        title: "Dams at the Great Bend: China's project and India's answer",
        blocks: [
          { type: "say", text: "**19 July 2025**: Chinese Premier Li Qiang announced the start of a hydropower project on the **lower reaches of the Yarlung Tsangpo** in Nyingchi, near the Great Bend: five cascade stations, about 1.2 trillion yuan, run by a new China Yajiang Group." },
          { type: "why", q: "Why does this worry India?", a: "++It sits just upstream of Arunachal, so its operation can change the timing of flows and trap silt++; it lies in the eastern syntaxis, one of the most earthquake-prone zones (the 1950 earthquake struck nearby); and India and China have no water treaty, only expert-level talks and data arrangements." },
          { type: "why", q: "Why is the impact on Assam's total water limited?", a: "++Much of the water in Assam comes from monsoon rain on the Indian side and from big Indian tributaries++, not from dry Tibet. The bigger risks are sudden releases, dam failure and lost silt." },
          { type: "say", text: "India's answer: the proposed **Siang Upper Multipurpose Project** (NHPC, about 11,000 MW, a large storage to absorb sudden releases) is at pre-feasibility stage amid local protests; the **Dibang** project (2,880 MW, 278 m, India's highest dam, flood moderation built in) is due in Feb 2032; the **Subansiri Lower** project (2,000 MW) had 2 of 8 units running in March 2026, the rest planned by December 2026 (PIB)." },
          {
            type: "check",
            q: {
              id: "bp-q-dams",
              prompt: "Consider the following statements:\n1. China began building a hydropower project on the lower reaches of the Yarlung Tsangpo in July 2025.\n2. The Dibang Multipurpose Project has flood moderation as one of its key objectives.\n3. All eight units of the Subansiri Lower project were running by March 2026.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 0,
              explain: "1 is right (19 July 2025, Nyingchi). 2 is right: ++the reservoir is kept partly empty in the monsoon to hold floodwater++ (PIB). 3 is wrong: PIB said in March 2026 that only 2 of 8 units were commissioned.",
              trap: "!!Statement 3!! tempts because Subansiri Lower has been 'nearly complete' for years; always check the latest official status.",
              source: "Practice",
            },
          },
        ],
      },
    ],
  },
];
