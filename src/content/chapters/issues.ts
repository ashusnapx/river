import type { Chapter } from "../types";

// Mains-oriented chapter. Status lines are dated so learners know how current each one is.
// Sources: Constitution of India (Art. 262); ISRWD Act 1956 as amended 2002 (CWC text); CWC tribunal annex
// (cwc.gov.in/sites/default/files/tribunals.pdf); PRS India (ISRWD Amendment Bill 2019, Dam Safety Bill 2019);
// NWDA (nwda.gov.in, link components, Ken–Betwa clearances); NMCG (nmcg.nic.in); MEA; NCERT Class 11 ch. 3;
// dated news for 2025–2026 events.

export const issuesChapters: Chapter[] = [
  {
    id: "rivers-and-the-nation",
    number: 9,
    system: "issues",
    title: "Rivers and the nation",
    hindiTitle: "नदियाँ और राष्ट्र",
    subtitle: "Disputes, linking, dams, floods, pollution and treaties: every river issue is a law of Chapter 1 meeting a map of borders.",
    minutes: 55,
    outcomes: [
      "Explain why inter-state water disputes cluster on Peninsular rivers, and how Article 262 and the tribunals work.",
      "Argue for and against interlinking of rivers with physical reasons, and say where the main links stand in 2026.",
      "Explain dam safety, glacial lake outburst floods and the Bihar–Assam floods as cause → effect chains.",
      "Trace the Ganga clean-up from the Ganga Action Plan to Namami Gange, and explain why Delhi's Yamuna stays dirty.",
      "Summarise India's river treaties with Pakistan, Bangladesh and Nepal and its data arrangements with China, with 2025–2026 developments.",
      "Write a four-part Mains answer (intro, causes, effects, way forward) on any river issue.",
    ],
    steps: [
      {
        id: "why-conflict",
        title: "Why rivers become national questions",
        blocks: [
          {
            type: "say",
            text: "Chapter 1 ended with a law: ==what happens in one part of a basin affects the whole basin==. Now lay the political map over the basins. State lines and international borders cut straight across them. The [[krishna]] basin is shared by Maharashtra, Karnataka, Telangana and Andhra Pradesh; the [[indus]], [[ganga]] and [[brahmaputra]] cross countries.",
          },
          {
            type: "why",
            q: "Why do most inter-state water fights involve Peninsular rivers?",
            a: "++Because Peninsular rivers are rain-fed and seasonal++ (Law 4). Their water comes in a few monsoon months and varies sharply from year to year, so in a weak monsoon there is not enough to go round. Snow-fed Himalayan rivers have a steadier base flow, though the Ravi–Beas case shows that even they are fought over when canals in a dry region depend on them.",
          },
          {
            type: "why",
            q: "Why does the upstream party hold the stronger hand?",
            a: "++Because water flows downhill++ (Law 1). The upstream state can dam, divert or delay the water before the next state gets it; the downstream state lives on what is released. So Karnataka (upstream) and Tamil Nadu (downstream) clash on the [[kaveri]]. India is upstream of Pakistan on the Indus and of Bangladesh on the Ganga, but downstream of China on the Brahmaputra.",
          },
          {
            type: "law",
            title: "The conflict law",
            text: "Scarcity + a shared basin + an upstream–downstream gap = dispute. ++Monsoon variability turns the scarcity on and off++, which is why disputes flare in drought years.",
          },
          {
            type: "remember",
            hook: "Same river, two seats",
            logic: "India sits upstream on the Indus and Ganga but downstream on the Brahmaputra. Any principle India argues against China can be quoted back to it by Pakistan or Bangladesh, so consistency is the diplomatic challenge.",
          },
          {
            type: "compare",
            title: "Answer skeleton for any river-issue question (Mains)",
            columns: ["Part", "What to write"],
            rows: [
              ["Intro", "One data line or definition from an official source (NCERT, CWC, PIB), tied to the question's key word."],
              ["Causes", "Physical first (rain-fed regime, monsoon variability, slope, sediment), then human (demand, pollution, politics, weak institutions)."],
              ["Effects", "People and livelihoods, economy (farms, power, cities), ecology, and federal or foreign relations."],
              ["Way forward", "Institution + technology + law + people. Name one working Indian example and one dated reform."],
              ["Conclusion", "Return to the basin as one unit: cooperative federalism at home, data-sharing and trust abroad."],
            ],
          },
        ],
      },
      {
        id: "law-of-water",
        title: "Inter-state disputes: the legal machinery",
        blocks: [
          {
            type: "say",
            text: "Water is a State subject (Entry 17, State List), but that entry is ==subject to Entry 56 of the Union List==, which lets Parliament regulate inter-state rivers and river valleys in the public interest.",
          },
          {
            type: "say",
            text: "**Article 262** lets Parliament provide by law for adjudicating any dispute over the use, distribution or control of the waters of an inter-state river or river valley. It also lets Parliament bar the Supreme Court and all other courts from such disputes. Parliament did both in the **Inter-State River Water Disputes Act, 1956**: tribunals decide, and Section 11 keeps courts out of any dispute that may be referred to a tribunal.",
          },
          {
            type: "why",
            q: "Why keep courts out of water disputes?",
            a: "++Because sharing a river needs basin-wide technical fact-finding++: decades of rainfall and flow data, crop water needs, existing uses. A tribunal of judges, aided by assessors, can collect that evidence and give one award for the whole basin. Yet in the Kaveri appeals the Supreme Court held that a tribunal's award can still be challenged before it under Article 136, and in February 2018 it modified the Kaveri award.",
          },
          {
            type: "say",
            text: "Tribunals took decades, so the **2002 amendment** (in force 6 August 2002) set clocks. A tribunal must be set up within one year of a State's request and report within three years, extendable by two. Once published in the Gazette, its decision has ==the same force as an order or decree of the Supreme Court==.",
          },
          {
            type: "say",
            text: "The **Inter-State River Water Disputes (Amendment) Bill, 2019** proposed a Disputes Resolution Committee to try negotiation first (one year plus six months), then a single standing tribunal with benches instead of a fresh tribunal for every dispute. It passed the Lok Sabha on 31 July 2019 but was still pending in the Rajya Sabha when the 17th Lok Sabha was dissolved in 2024, so under Article 107(5) it lapsed.",
          },
          {
            type: "check",
            q: {
              id: "is-art-262",
              prompt: "Consider the following statements:\n1. Article 262 empowers Parliament to provide by law that neither the Supreme Court nor any other court shall exercise jurisdiction over inter-state river water disputes.\n2. 'Water' in the State List is subject to the Union List entry on regulation and development of inter-state rivers.\n3. Under the Inter-State River Water Disputes Act, 1956 as amended in 2002, a tribunal's decision published in the Gazette has the same force as an order or decree of the Supreme Court.\nHow many of the statements given above are correct?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 2,
              explain: "All three are correct. 1 is the text of Article 262(2). 2 is the Entry 17 (State List)–Entry 56 (Union List) link. 3 is Section 6(2), added in 2002 ++because States had been slow to accept awards++; giving them the force of a Supreme Court decree makes them binding.",
              trap: "Statement 1 sounds too absolute ('neither the Supreme Court nor any other court'), so many aspirants mark it wrong. It is the near-verbatim text of Article 262(2).",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "tribunals",
        title: "Tribunals, and the Kaveri story",
        blocks: [
          {
            type: "compare",
            title: "Water disputes tribunals (CWC record; status as of October 2026)",
            columns: ["Tribunal", "Set up", "Party States", "Where it stands"],
            rows: [
              ["Krishna I", "1969", "Maharashtra, Karnataka, Andhra Pradesh", "Decision notified 1976; tribunal dissolved"],
              ["Godavari", "1969", "Maharashtra, Karnataka, Andhra Pradesh, Madhya Pradesh, Odisha", "Decision notified 1980; dissolved"],
              ["Narmada", "1969", "Gujarat, Madhya Pradesh, Maharashtra, Rajasthan", "Decision notified 1979 (basis of Sardar Sarovar); dissolved"],
              ["Ravi & Beas", "1986", "Punjab, Haryana, Rajasthan", "Report 1987; further report still awaited"],
              ["Cauvery", "1990", "Karnataka, Tamil Nadu, Kerala, Puducherry", "Award 2007, notified 2013; modified by the Supreme Court on 16 Feb 2018; dissolved 2018"],
              ["Krishna II", "2004", "Maharashtra, Karnataka, Andhra Pradesh, Telangana", "Reports 2010 and 2013, not notified; new terms of reference for Andhra Pradesh–Telangana (Oct 2023); hearings continue"],
              ["Vansadhara", "2010", "Andhra Pradesh, Odisha", "Decision 2021; tribunal dissolved 2022"],
              ["Mahadayi (Mhadei)", "2010", "Goa, Karnataka, Maharashtra", "Report 2018, notified Feb 2020; further report pending"],
              ["Mahanadi", "2018", "Odisha, Chhattisgarh", "Hearings continue; talks between the two States under the CWC Chairman (Sept 2026)"],
            ],
          },
          {
            type: "why",
            q: "Why did the Kaveri quarrel outlast a century?",
            a: "++Because the river's two halves live on two different monsoons.++ The upper catchment in Karnataka fills with the south-west monsoon; the old delta in Tamil Nadu grew its irrigation first, under agreements of 1892 and 1924 between Madras and Mysore. When Karnataka expanded irrigation upstream and a monsoon failed, the downstream delta felt it first, and the award had no agreed formula for sharing distress.",
          },
          {
            type: "say",
            text: "On ==16 February 2018== the Supreme Court cut Tamil Nadu's share and raised Karnataka's, citing groundwater in Tamil Nadu and Bengaluru's drinking-water needs, and called drinking water the highest priority. It ordered a scheme to implement the award, and the **Cauvery Water Management Authority** was created on 1 June 2018.",
          },
          {
            type: "remember",
            hook: "Kaveri = two monsoons, two States, one bad year",
            logic: "The monsoon-kaveri sketch from Chapter 1 is the dispute in a picture: the upstream State gets the summer rain, the downstream State depends on what flows down. A dry year breaks the peace.",
          },
          {
            type: "check",
            q: {
              id: "is-tribunal-pairs",
              prompt: "Consider the following pairs (Water Disputes Tribunal : party States):\n1. Mahadayi : Goa, Karnataka and Maharashtra\n2. Vansadhara : Andhra Pradesh and Odisha\n3. Mahanadi : Odisha and Jharkhand\n4. Ravi & Beas : Punjab, Haryana and Rajasthan\nHow many of the pairs given above are correctly matched?",
              options: ["Only one", "Only two", "Only three", "All four"],
              answer: 2,
              explain: "Use the map: a tribunal's parties are the basin States. The Mahadayi (Mandovi) rises in Karnataka and runs to Goa, with a small Maharashtra share. The Vansadhara rises in Odisha and enters Andhra Pradesh. The Ravi–Beas waters feed canals in Punjab, Haryana and Rajasthan. The [[mahanadi]] rises in Chhattisgarh and flows into Odisha, so pair 3 is wrong.",
              trap: "Jharkhand sounds plausible for an eastern river. The Mahanadi rises near Sihawa in Chhattisgarh (NCERT); Jharkhand is the Subarnarekha–Damodar country.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "ilr",
        title: "Interlinking of rivers: moving water across divides",
        blocks: [
          {
            type: "say",
            text: "NCERT asks: can floods and droughts be eased by ==transferring surplus water to deficit basins==? On paper India's answer is the **National Perspective Plan (1980)**, prepared by the then Ministry of Irrigation and the CWC. The **National Water Development Agency** (set up July 1982) studies its links: 14 in the Himalayan component and 16 in the Peninsular component, 30 in all. (In December 2025 a few links, such as Pamba–Achankovil–Vaippar, were reported dropped after State objections.)",
          },
          {
            type: "why",
            q: "Why move water between basins at all?",
            a: "++Because India's water is in the wrong place at the wrong time.++ The Brahmaputra and Ganga carry huge monsoon surpluses while parts of the west and south stay short. And, as NCERT notes, when one part of the country floods, another often suffers drought.",
          },
          {
            type: "why",
            q: "Why are the Himalayan links much harder than the Peninsular ones?",
            a: "NCERT itself asks whether digging a canal is enough, and points to the unevenness of the terrain: how do you lift water from the plain onto the plateau? ++Because water flows downhill++ (Law 1), a link that climbs from the Ganga plain to the plateau needs pumping energy or long tunnels. Himalayan links also involve rivers shared with Nepal, Bhutan and Bangladesh. So the Peninsular links, within India and often on gentler gradients, move first.",
          },
          {
            type: "map",
            focus: ["ken", "betwa"],
            caption: "Ken–Betwa: water from the Ken basin is carried to the Betwa basin, both Yamuna tributaries in Bundelkhand.",
            trace: true,
          },
          {
            type: "say",
            text: "**Ken–Betwa** is the first link under the NPP to reach construction. The Union Cabinet approved it on 8 December 2021, and the Prime Minister laid the foundation stone at Khajuraho on 25 December 2024. Its Daudhan dam on the [[ken]] (77 m high) submerges about 9,000 ha, including part of the Panna Tiger Reserve. NWDA plans it as an eight-year build; its steering committee held its 8th meeting on 18 December 2025.",
          },
          {
            type: "compare",
            title: "Other links in the news (status, October 2026)",
            columns: ["Link", "Idea", "Where it stands"],
            rows: [
              ["Modified Parbati–Kalisindh–Chambal–ERCP", "Chambal-basin water for eastern Rajasthan and Madhya Pradesh", "MoU 28 Jan 2024; MoA in Dec 2024; foundation stone laid at Jaipur on 17 Dec 2024"],
              ["Godavari (Inchampalli)–Cauvery", "Carry unused Godavari water south through the Krishna and Pennar to the Kaveri", "DPR circulated 2019; States still disagree on surplus and source point (6th consultation, Aug 2025); no agreement"],
              ["Par–Tapi–Narmada", "Divert west-flowing streams of south Gujarat to Saurashtra and Kutch", "DPR prepared; stalled after tribal protests in the catchment (2022)"],
              ["Damanganga–Pinjal", "Water for Mumbai", "DPR completed"],
            ],
          },
          {
            type: "remember",
            hook: "Surplus → deficit, downhill if possible",
            logic: "Judge any link with Law 1: does the water have to climb? Links that go downhill (Ken–Betwa, PKC–ERCP within one tilted basin) move; links that must lift water or cross borders stall.",
          },
        ],
      },
      {
        id: "ilr-debate",
        title: "Interlinking: the Mains debate",
        blocks: [
          {
            type: "compare",
            title: "Interlinking: for and against, each with its reason",
            columns: ["Theme", "For", "Against"],
            rows: [
              ["Drought and irrigation", "Assured water for rain-shadow and drought-prone areas such as Bundelkhand", "Surplus is contested: a 'surplus' basin in one year is short in a weak monsoon, and donor States object"],
              ["Floods", "Diverting peak flows can cut flood peaks", "Floods come in a few days; canals can carry only a small share of a Himalayan flood peak"],
              ["Navigation and power", "Linked canals and dams add inland waterways and hydropower", "Lifting water onto the plateau consumes power; long canals lose water to seepage and evaporation"],
              ["Ecology", "Recharge of groundwater in deficit areas", "Submergence of forests and tiger habitat (Panna), altered flows, less silt and fresh water for deltas"],
              ["People and federalism", "Shared projects can build cooperation", "Displacement of tribal and forest communities; State consent is hard (Godavari–Cauvery)"],
            ],
          },
          {
            type: "compare",
            title: "Skeleton: 'Interlinking of rivers can provide viable solutions to droughts, floods and interrupted navigation. Critically examine.' (Mains GS1, 2020)",
            columns: ["Part", "Points"],
            rows: [
              ["Intro", "NPP 1980; 30 links (14 Himalayan, 16 Peninsular); Ken–Betwa under construction since Dec 2024."],
              ["Can solve", "Spatial and temporal mismatch of water; assured irrigation; some flood moderation; waterways and power."],
              ["Limits", "Terrain lift and energy, cost, ecology (Panna), displacement, inter-state and international consent, climate-changed flows."],
              ["Way forward", "Basin-wise water budgets, intra-basin links first, watershed and groundwater recharge alongside, transparent data, rehabilitation."],
              ["Conclusion", "A tool, not a cure: pair it with demand-side measures such as micro-irrigation and crop choice."],
            ],
          },
          {
            type: "check",
            q: {
              id: "is-link-pyq-2016",
              prompt: "Recently, linking of which of the following rivers was undertaken?",
              options: ["Cauvery and Tungabhadra", "Godavari and Krishna", "Mahanadi and Sone", "Narmada and Tapti"],
              answer: 1,
              explain: "In 2015–16 Andhra Pradesh linked the Godavari to the Krishna through the Pattiseema lift scheme, pumping Godavari water into a canal that empties into the Krishna. The two rivers are neighbours on the same eastward-tilted plateau, ++so a short lift and a canal could join them++.",
              trap: "Narmada–Tapi sounds right because both flow west and sit side by side; but the Par–Tapi–Narmada idea never reached construction.",
              source: "UPSC CSE Prelims 2016",
            },
          },
        ],
      },
      {
        id: "dams",
        title: "Big dams: benefits, displacement and safety",
        blocks: [
          {
            type: "say",
            text: "India has the third-largest number of large dams in the world, after China and the USA, and many of them are decades old. A dam stores monsoon water for the dry months, which is exactly what seasonal Peninsular rivers lack (Law 4).",
          },
          {
            type: "why",
            q: "Why did India need a national dam safety law?",
            a: "++Because a dam's failure hurts people downstream, often across a State border++, while ownership and inspection stayed with each State under uneven standards. Mullaperiyar, located in Kerala but operated by Tamil Nadu, shows the gap. The Machchhu-II dam failure at Morbi, Gujarat (11 August 1979), remains India's worst warning.",
          },
          {
            type: "say",
            text: "The **Dam Safety Act, 2021** (Parliament completed passage in December 2021) covers **specified dams**: higher than 15 m, or 10–15 m with conditions such as a reservoir of at least one million cubic metres. It creates four bodies: the National Committee on Dam Safety (policy), the ==National Dam Safety Authority== (regulator, resolves issues between States), a State Committee on Dam Safety and a State Dam Safety Organisation in each State.",
          },
          {
            type: "why",
            q: "Why do big dams spark movements like the Narmada Bachao Andolan?",
            a: "++Because the benefits and the costs fall on different people.++ Irrigation, drinking water and power flow to the plains and cities, while submergence falls on upstream valley villages, often Adivasi. The NBA, founded in 1985 with Medha Patkar as its best-known face, fought Sardar Sarovar on the [[narmada]]. In October 2000 the Supreme Court allowed construction to continue alongside rehabilitation, and the dam was dedicated on 17 September 2017.",
          },
          {
            type: "check",
            q: {
              id: "is-dam-safety",
              prompt: "With reference to the Dam Safety Act, 2021, consider the following statements:\n1. It applies to every dam in India, whatever its height.\n2. It provides for a National Dam Safety Authority and a State Dam Safety Organisation in each State.\n3. Dams between 10 m and 15 m high can be covered if they meet certain design conditions.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 1,
              explain: "The Act covers only 'specified dams': higher than 15 m, or 10–15 m with conditions such as a reservoir of at least one million cubic metres or a top length of at least 500 m. So 1 is wrong and 3 is right. 2 is right: the national authority regulates, State organisations inspect.",
              trap: "Statement 1 sounds like the safe, comprehensive choice. Laws target risk: small farm ponds are not 'specified dams'.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "glof",
        title: "When the ice lets go: GLOFs and dam failures",
        blocks: [
          {
            type: "say",
            text: "On the night of 3–4 October 2023, **South Lhonak lake** in north Sikkim burst through its moraine wall. The flood raced down the [[teesta]] and destroyed the Chungthang dam of the 1,200 MW Teesta Stage III project, adding the reservoir's water to the wave.",
          },
          {
            type: "why",
            q: "Why are glacial lake outburst floods (GLOFs) becoming more likely?",
            a: "++Because warming glaciers retreat and leave meltwater ponded behind loose moraine.++ A moraine is a heap of unsorted rock debris, not an engineered dam. An ice or rock avalanche, an earthquake, heavy rain or seepage can overtop or breach it, and the lake can empty in hours.",
          },
          {
            type: "law",
            title: "The GLOF chain",
            text: "Warming → glacier retreat → moraine-dammed lake grows → trigger → breach → flood wave down a steep valley → any dam in its path is overtopped → damage multiplies downstream.",
          },
          {
            type: "say",
            text: "Steep Himalayan valleys make it worse: ++a steep slope gives the wave speed and lets it pick up debris++ (Law 7). So the same young mountains that give hydropower its head also make dams in them vulnerable to floods from above.",
          },
          {
            type: "compare",
            title: "Skeleton: 'Analyse the causes of dam failures; give two examples.' (Mains GS3, 2023)",
            columns: ["Part", "Points"],
            rows: [
              ["Intro", "India has the third-largest number of large dams; many are ageing. Failure is a downstream disaster."],
              ["Causes", "Overtopping (spillway too small for an extreme flood), seepage and piping, foundation failure, poor maintenance, earthquakes, and outburst floods from upstream lakes."],
              ["Examples", "Machchhu-II, Morbi, Gujarat (1979); Chungthang dam on the Teesta after the South Lhonak GLOF (2023); Tiware, Maharashtra (2019)."],
              ["Way forward", "Implement the Dam Safety Act 2021; emergency action plans and inundation maps; early warning on glacial lakes; rehabilitation of old dams; revise design floods for a warmer climate."],
            ],
          },
          {
            type: "check",
            q: {
              id: "is-glof",
              prompt: "With reference to the October 2023 flood in Sikkim, consider the following statements:\n1. It was triggered by the outburst of South Lhonak lake, a moraine-dammed glacial lake.\n2. The flood travelled down the Rangit river and spared the Teesta.\n3. The Chungthang dam of the Teesta Stage III hydroelectric project was destroyed.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
              answer: 1,
              explain: "South Lhonak lies in north Sikkim, in the upper Teesta catchment, ++so its water could only run down the Teesta valley++. That flood destroyed the Chungthang dam of Teesta Stage III. Statement 2 is wrong: the Rangit is a separate tributary in west Sikkim.",
              trap: "The Rangit is a famous Sikkim river and a Teesta tributary, so it sounds possible. Locate the lake first; the valley follows.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "floods",
        title: "Floods: why Bihar and Assam drown",
        blocks: [
          {
            type: "say",
            text: "The Rashtriya Barh Ayog (National Flood Commission) estimated in 1980 that about ==40 million hectares== of India was flood-prone. The worst-hit plains lie where Himalayan rivers spill out of the mountains: north Bihar and the Assam valley.",
          },
          {
            type: "why",
            q: "Why does north Bihar flood almost every year?",
            a: "The Kosi, Gandak, Bagmati and their neighbours drop from the steep Nepal Himalaya onto a nearly flat plain. ++Heavy monsoon rain on the Himalayan front sends sudden peaks, and the sudden loss of slope makes them dump sediment++. NCERT's example is the [[kosi]]: its own silt blocks its channel, so it shifts course, earning the name 'sorrow of Bihar'.",
          },
          {
            type: "why",
            q: "Why does the Brahmaputra flood Assam?",
            a: "NCERT: the [[brahmaputra]] is well known for floods, channel shifting and bank erosion ++because its large tributaries bring huge sediment from a very rainy catchment++. A braided river on a narrow valley floor (Law 7) has little room to spread except over farms and villages.",
          },
          {
            type: "why",
            q: "Why can embankments make floods worse?",
            a: "Embankments keep water off the fields, but they ++also keep the silt inside the channel++. The bed rises year after year until the river flows above the land beside it, and drainage behind the embankment gets choked. When a breach comes, the water falls onto lower land with great force. On 18 August 2008 the Kosi broke its eastern embankment at Kusaha in Nepal and took a new course through Bihar. The National Flood Commission had already questioned embankments as a cure.",
          },
          {
            type: "say",
            text: "**Flood plain zoning** regulates what may be built where, by flood frequency: parks and farming in the most frequently flooded zone, buildings only on safer ground. The Centre circulated a model bill to States in 1975, but very few States have enacted such a law.",
          },
          {
            type: "compare",
            title: "Skeleton: floods in the Indo-Gangetic plain (Mains GS1 2017; Geography Optional 2023)",
            columns: ["Part", "Points"],
            rows: [
              ["Intro", "About 40 Mha flood-prone (National Flood Commission, 1980); Bihar and Assam worst hit."],
              ["Causes", "Monsoon cloudbursts on the Himalayan front, sudden loss of slope, huge sediment, channel shifting, encroached flood plains, choked drainage, embankment breaches."],
              ["Effects", "Lives, crops and homes lost each year; but floods also renew soil fertility and recharge groundwater."],
              ["Way forward", "Flood plain zoning, early warning with Nepal and Bhutan data, reservoirs where feasible, room for the river (wetlands, setbacks), raised homes and flood-tolerant crops."],
            ],
          },
          {
            type: "check",
            q: {
              id: "is-floods",
              prompt: "Consider the following statements:\n1. The Kosi changes its course because it deposits huge sediment in the plains, blocking its own channel.\n2. Embankments can raise a river's bed over time by confining its silt to the channel.\n3. Flood plain zoning means building higher embankments in the most flood-prone zone.\nHow many of the statements given above are correct?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain: "1 is NCERT's explanation of the Kosi. 2 follows from the same law: silt that can no longer spread over the flood plain settles in the bed. 3 is wrong: zoning is a non-structural measure that controls land use by flood frequency; it does not build walls.",
              trap: "Statement 3 uses the right term with the wrong meaning. 'Zoning' controls what is built where; embankments are structural measures.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "clean-rivers",
        title: "Pollution and rejuvenation: Ganga and Yamuna",
        blocks: [
          {
            type: "compare",
            title: "Forty years of cleaning the Ganga",
            columns: ["Year", "Step", "Why it mattered"],
            rows: [
              ["1985–86", "Ganga Action Plan (approved 1985, launched 1986)", "First national river clean-up; mostly sewage treatment in big towns"],
              ["1995", "National River Conservation Plan", "The GAP model extended to other rivers"],
              ["2009", "National Ganga River Basin Authority (chaired by the Prime Minister)", "++Took the river basin as the unit of planning++"],
              ["2011", "National Mission for Clean Ganga registered as a society", "A dedicated implementing agency"],
              ["2014–15", "Namami Gange flagship programme; Rs 20,000 crore approved in May 2015", "Sewage, industrial effluent, river front, biodiversity, afforestation, public participation"],
              ["2016", "River Ganga Authorities Order (7 Oct 2016): National Ganga Council under the PM replaces the NGRBA; NMCG becomes an authority", "Legal powers to direct and penalise"],
              ["2021–26", "Namami Gange Mission II, Rs 22,500 crore, sanctioned till March 2026 (no further extension announced as of March 2026)", "Finish sewage projects; maintain flow (e-flows) and ecology"],
            ],
          },
          {
            type: "say",
            text: "By October 2026, NMCG reported 200 sewerage projects sanctioned (about Rs 31,810 crore), of which 116 were complete. ++Building plants is the easy half++; connecting every house to sewers and running the plants every day is the hard half.",
          },
          {
            type: "why",
            q: "Why is Delhi's Yamuna among India's dirtiest river stretches?",
            a: "The 22 km Wazirabad–Okhla stretch is under 2 per cent of the [[yamuna]]'s length but carries nearly 80 per cent of its pollution load. ++At the Wazirabad barrage most of the fresh water is held back for Delhi's supply++, so below it the river is fed mainly by drains such as the Najafgarh drain. With no clean flow left to dilute it, the sewage stays concentrated.",
          },
          {
            type: "law",
            title: "Dilution law",
            text: "Pollution = load ÷ flow. Cut the load (treat sewage, stop effluents) ==and keep enough water in the river== (environmental flows). Doing only one fails.",
          },
          {
            type: "compare",
            title: "Skeleton: 'Discuss Namami Gange and NMCG, and causes of mixed results from previous schemes.' (Mains GS3, 2015)",
            columns: ["Part", "Points"],
            rows: [
              ["Intro", "Ganga basin about 8.6 lakh sq km in India (NCERT); GAP 1985 → Namami Gange 2014–15."],
              ["Why earlier schemes gave mixed results", "Treatment capacity lagged sewage growth; plants not connected or not run; industrial effluent; low dry-season flow from upstream diversion; many agencies, weak enforcement."],
              ["What changed", "Basin approach; NMCG with legal powers (2016); hybrid annuity model for plants; e-flow notification; biodiversity and community (Ganga Praharis)."],
              ["Way forward", "Sewer connections, operation and maintenance funding, reuse of treated water, real-time monitoring, e-flows, organic farming along banks."],
            ],
          },
          {
            type: "check",
            q: {
              id: "is-ngrba-pyq-2016",
              prompt: "Which of the following are the key features of 'National Ganga River Basin Authority (NGRBA)'?\n1. River basin is the unit of planning and management.\n2. It spearheads the river conservation efforts at the national level.\n3. One of the Chief Ministers of the States through which the Ganga flows becomes the Chairman of NGRBA on rotation basis.\nSelect the correct answer using the code given below.",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 0,
              explain: "The NGRBA's whole idea was Law 2: ++a basin is one unit, so it must be planned as one++. It was the national body for Ganga conservation and was chaired by the Prime Minister, not by a Chief Minister on rotation. (In 2016 it was replaced by the National Ganga Council, also chaired by the PM.)",
              trap: "Statement 3 sounds federal and fair. But a basin crossing five States needs one national chair; rotation would split the basin again.",
              source: "UPSC CSE Prelims 2016",
            },
          },
        ],
      },
      {
        id: "indus-treaty",
        title: "The Indus Waters Treaty and its abeyance",
        blocks: [
          {
            type: "sketch",
            id: "indus-treaty",
            caption: "Three eastern rivers (Ravi, Beas, Sutlej) for India; three western rivers (Indus, Jhelum, Chenab) for Pakistan, with limited Indian uses.",
          },
          {
            type: "map",
            focus: ["indus", "jhelum", "chenab", "ravi", "beas", "sutlej"],
            caption: "The six rivers of the treaty. Partition cut through this basin, leaving India upstream of nearly all of it.",
          },
          {
            type: "say",
            text: "The **Indus Waters Treaty** was signed at Karachi on 19 September 1960 by Jawaharlal Nehru and Ayub Khan, with the World Bank as a signatory and broker. India got unrestricted use of the eastern rivers ([[ravi]], [[beas]], [[sutlej]]). Pakistan got the western rivers ([[indus]], [[jhelum]], [[chenab]]), on which India may use water for domestic and non-consumptive needs, limited irrigation and run-of-the-river hydropower within design limits.",
          },
          {
            type: "why",
            q: "Why did Partition make a treaty unavoidable?",
            a: "++Because the boundary cut the Indus basin's canal system in two.++ The headworks of several canals stayed in India while the fields they watered went to Pakistan, so India sat upstream of most of Pakistan's irrigation. Splitting the rivers, not the water of each river, was the World Bank's way to avoid daily quarrels.",
          },
          {
            type: "say",
            text: "Disputes climb a ladder: questions go to the **Permanent Indus Commission**; technical 'differences' to a **Neutral Expert**; 'disputes' to a **Court of Arbitration**. Pakistan's objections to the Kishanganga and Ratle projects went up this ladder.",
          },
          {
            type: "say",
            text: "On ==23 April 2025==, a day after the Pahalgam terror attack, India announced that the treaty would be held in abeyance until Pakistan credibly and irrevocably abjures its support for cross-border terrorism.",
          },
          {
            type: "say",
            text: "Pakistan pressed its case before a **Court of Arbitration**, which India regards as illegally constituted and has boycotted. The court ruled on 27 June 2025 that abeyance does not end its competence; on 8 August 2025 that India must 'let flow' the western rivers, with its exceptions strictly construed; and on ==31 August 2026== that abeyance is impermissible, adding interim limits on the Ratle project on the [[chenab]]. India rejected these rulings and says the treaty stays in abeyance. A Neutral Expert's decision on the Kishanganga and Ratle design questions is expected around July 2027.",
          },
          {
            type: "why",
            q: "Why does 'abeyance' not mean India can stop the water tomorrow?",
            a: "++Because India has little storage on the western rivers.++ Its projects on the Jhelum and Chenab are mostly run-of-the-river; holding back or diverting large volumes would need new dams and canals that take years. What abeyance changed at once is procedure: India no longer treats data-sharing, advance notice and design limits as binding. In May 2025, for example, it flushed the Salal and Baglihar reservoirs on the Chenab without the notice the treaty requires.",
          },
          {
            type: "check",
            q: {
              id: "is-iwt",
              prompt: "With reference to the Indus Waters Treaty, consider the following statements:\n1. It was signed in 1960 with the World Bank as a signatory.\n2. India has unrestricted use of the waters of the Ravi, the Beas and the Sutlej.\n3. Under the treaty, India may build run-of-the-river hydropower projects on the Jhelum and the Chenab.\n4. In April 2025 India terminated the treaty with immediate effect.\nHow many of the statements given above are correct?",
              options: ["Only one", "Only two", "Only three", "All four"],
              answer: 2,
              explain: "1–3 are treaty facts: the eastern rivers are India's, and on the western rivers India may run run-of-the-river plants within design limits. Statement 4 misuses one word: India held the treaty 'in abeyance' on 23 April 2025; it did not terminate it.",
              trap: "'Terminated' and 'held in abeyance' sound alike in a news headline. UPSC builds statements from exactly such one-word swaps.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "east-neighbours",
        title: "Bangladesh and Nepal: Farakka, Teesta, Kosi, Mahakali",
        blocks: [
          {
            type: "say",
            text: "The **Ganga Water Treaty** with Bangladesh, signed on 12 December 1996 for 30 years, shares the lean-season flow (1 January to 31 May) at **Farakka** in ten-day periods. Below 70,000 cusecs the flow is split half and half; above 75,000 cusecs India takes 40,000 and Bangladesh the rest; and each side is guaranteed 35,000 cusecs in alternate ten-day periods from 11 March to 10 May. Its term ends on ==12 December 2026==. Status (mid-October 2026): not yet renewed; India says talks run through the **Joint Rivers Commission**, and Bangladesh seeks a guaranteed minimum share like the 1977 agreement had.",
          },
          {
            type: "say",
            text: "Renewal status: Bangladesh's new government (elected February 2026) formed a technical committee and proposed talks; Joint Rivers Commission meetings produced no breakthrough, and as of September 2026 no new deal or extension had been announced. Dhaka wants a guarantee clause on minimum flows; Bihar has argued for more water for itself.",
          },
          {
            type: "why",
            q: "Why does Farakka worry Bangladesh?",
            a: "The Farakka Barrage (commissioned 1975) diverts Ganga water into the Bhagirathi–Hooghly through a feeder canal ++to flush silt and keep Kolkata port navigable++. In the lean season, every cusec diverted is a cusec less for the [[padma]] downstream. That is why the treaty fixes shares for every ten-day period of the dry months.",
          },
          {
            type: "say",
            text: "The [[teesta]] has no treaty. A sharing deal was ready in 2011 but was not signed after West Bengal objected, ++because north Bengal's own irrigation depends on the same lean-season flow++.",
          },
          {
            type: "map",
            focus: ["ganga", "kosi", "gandak", "sarda", "teesta"],
            caption: "Rivers India shares eastwards: the Kosi, Gandak and Sarda (Mahakali) come from Nepal; the Teesta and Ganga flow on into Bangladesh.",
          },
          {
            type: "say",
            text: "With Nepal, India signed the **Kosi Agreement** (1954, revised 1966) and the **Gandak Agreement** (1959), under which India built barrages on or at the border. The **Mahakali Treaty** (1996) covers the [[sarda|Mahakali (Sarda)]], including the proposed Pancheshwar multipurpose project.",
          },
          {
            type: "why",
            q: "Why do the Nepal projects move so slowly?",
            a: "++Because the water and the dam sites are in Nepal, but most of the irrigation and flood benefit falls in India.++ Nepal has long felt the older agreements gave it too little, so it bargains hard on new ones such as Pancheshwar.",
          },
          {
            type: "check",
            q: {
              id: "is-east-treaties",
              prompt: "Consider the following pairs (agreement : river):\n1. 1996 treaty with Bangladesh : Ganga at Farakka\n2. Mahakali Treaty with Nepal : Sarda (Kali)\n3. 1959 agreement with Nepal : Gandak\n4. 2011 agreement with Bangladesh in force : Teesta\nHow many of the pairs given above are correctly matched?",
              options: ["Only one", "Only two", "Only three", "All four"],
              answer: 2,
              explain: "Pairs 1–3 are correct. The Mahakali is the Kali or Sarda, which forms the India–Nepal border before joining the Ghaghara. Pair 4 is wrong: the Teesta deal of 2011 was never signed, so no Teesta agreement is in force.",
              trap: "The Teesta deal was widely reported in 2011, so it feels real. Reported, drafted and signed are three different things.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "china",
        title: "China upstream: Medog, Upper Siang and the data question",
        blocks: [
          {
            type: "sketch",
            id: "great-bend",
            caption: "The Tsangpo makes a U-turn around Namcha Barwa and plunges through a deep gorge into Arunachal as the Siang.",
          },
          {
            type: "why",
            q: "Why does China want to build at the Great Bend?",
            a: "++Because the Tsangpo drops very steeply through the Great Bend gorge++ around Namcha Barwa. A large fall over a short distance is ideal hydropower head (Law 5's gorge, seen as an energy source).",
          },
          {
            type: "say",
            text: "China approved a giant hydropower project on the lower Yarlung Tsangpo (Medog/Motuo) in December 2024 and began construction on 19 July 2025: five cascade stations, officially about 300 billion kWh a year. India has raised its concerns as a downstream state and told Parliament it is monitoring the project.",
          },
          {
            type: "why",
            q: "Why does India worry, if much of the Brahmaputra's water comes from rain on Indian territory?",
            a: "Because the risk is control and timing, not only volume. ++An upstream dam can alter lean-season flows, release water suddenly, trap silt that the plains and delta need++, and it sits in a highly earthquake-prone zone. Without real-time data, downstream Assam cannot plan for floods.",
          },
          {
            type: "say",
            text: "India's response is the proposed **Upper Siang Multipurpose Project** in Arunachal Pradesh, a storage dam of about 11,000 MW planned by NHPC, meant partly as a buffer against sudden releases. Local Adi villagers have resisted the pre-feasibility drilling, ++because the reservoir would submerge their land++.",
          },
          {
            type: "say",
            text: "On data, China shared flood-season hydrological data under MoUs on the Brahmaputra (from 2002) and the Sutlej (from 2005), discussed in an Expert Level Mechanism (2006). Both MoUs lapsed (Sutlej 2020, Brahmaputra 2023). During Wang Yi's visit in August 2025, China was reported to have agreed to share hydrological data in emergencies on humanitarian grounds, and to discuss renewing the MoUs.",
          },
          {
            type: "check",
            q: {
              id: "is-china-data",
              prompt: "With reference to India–China cooperation on trans-border rivers, consider the following statements:\n1. China has shared flood-season hydrological data on the Brahmaputra with India under memoranda of understanding.\n2. India and China have a water-sharing treaty on the Brahmaputra similar to the Indus Waters Treaty.\n3. An Expert Level Mechanism on trans-border rivers exists between the two countries.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 2,
              explain: "India and China have only data-sharing MoUs and an Expert Level Mechanism (set up in 2006). There is no water-sharing treaty, ++because China, the upstream power, has preferred non-binding data arrangements++.",
              trap: "Statement 2 borrows the familiar Indus model. Only India–Pakistan (Indus), India–Bangladesh (Ganga) and India–Nepal (Mahakali) have treaties on sharing.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "river-ecology",
        title: "River ecology: dolphins, wetlands, flows and sand",
        blocks: [
          {
            type: "say",
            text: "The **Ganges river dolphin** is India's National Aquatic Animal (asked in Prelims 2015). Project Dolphin was announced on 15 August 2020. India's first river dolphin estimate, released in March 2025, counted ==6,327 river dolphins==, almost all Ganges dolphins, with Uttar Pradesh and Bihar holding the most, and only 3 Indus dolphins (in the [[beas]]).",
          },
          {
            type: "why",
            q: "Why is the dolphin the best judge of a river's health?",
            a: "++Because it is nearly blind and hunts by echolocation in deep, flowing, connected water.++ Dams and barrages cut its range into pieces, low flows dry its deep pools, fishing nets drown it, and pollution poisons its prey. If dolphins survive in a stretch, the river there still works.",
          },
          {
            type: "check",
            q: {
              id: "is-dolphin-pyq-2014",
              prompt: "Other than poaching, what are the possible reasons for the decline in the population of Ganges River Dolphins?\n1. Construction of dams and barrages on rivers\n2. Increase in the population of crocodiles in rivers\n3. Getting trapped in fishing nets accidentally\n4. Use of synthetic fertilizers and other agricultural chemicals in crop-fields in the vicinity of rivers\nSelect the correct answer using the code given below.",
              options: ["1 and 2 only", "2 and 3 only", "1, 3 and 4 only", "1, 2, 3 and 4"],
              answer: 2,
              explain: "Ask what breaks the dolphin's needs: connected deep water (dams and barrages break it), safety (nets drown it) and clean prey (farm chemicals run off into rivers). Crocodiles are not a recognised threat; gharials and dolphins have shared these rivers for ages.",
              trap: "Crocodiles sound like predators, so option (d) feels thorough. Ask whether the cause is human-driven change in the river; crocodile numbers are not.",
              source: "UPSC CSE Prelims 2014",
            },
          },
          {
            type: "say",
            text: "**Environmental flows** are the minimum water that must stay in a river for its ecology and people downstream. In October 2018 the Centre notified minimum e-flows for the upper Ganga and below its barrages, ++because diversions for canals and hydropower had left some stretches nearly dry++.",
          },
          {
            type: "say",
            text: "River wetlands also count. The Upper Ganga stretch from Brijghat to Narora (Uttar Pradesh) is a Ramsar site (2005), and Kanwar Lake (Kabartal) in Bihar, an oxbow of the [[burhi-gandak]], became one in 2020.",
          },
          {
            type: "why",
            q: "Why does heavy sand mining lower the water table?",
            a: "++Because riverbed sand is the river's sponge and filter.++ Remove it and the channel deepens, so the river cuts down and drains water out of the banks; less water soaks into the aquifer, and the groundwater level falls. The bare bed also loses its filtering, so polluted water reaches groundwater more easily.",
          },
          {
            type: "check",
            q: {
              id: "is-sand-pyq-2018",
              prompt: "Which of the following is/are the possible consequence/s of heavy sand mining in riverbeds?\n1. Decreased salinity in the river\n2. Pollution of groundwater\n3. Lowering of the water-table\nSelect the correct answer using the code given below:",
              options: ["1 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 1,
              explain: "Sand stores and filters water. Mining it lowers the water table (less recharge, a deeper channel draining the banks) and exposes groundwater to pollution. It does not reduce salinity; near the coast, a deeper channel lets sea water push further upstream, raising salinity.",
              trap: "Statement 1 sounds like a side benefit. Reverse it with the slope law: a deeper bed near the sea lets salt water in.",
              source: "UPSC CSE Prelims 2018",
            },
          },
        ],
      },
      {
        id: "toolkit",
        title: "Your Mains toolkit: one law per issue",
        blocks: [
          {
            type: "compare",
            title: "Each issue, the Chapter 1 law behind it, and one example",
            columns: ["Issue", "Law at work", "Example to quote"],
            rows: [
              ["Inter-state disputes", "Law 4 (rain-fed regime) + Law 1 (upstream advantage)", "[[kaveri]]: SC judgment 16 Feb 2018; CWMA 2018"],
              ["Interlinking", "Law 1 (water will not climb without energy)", "[[ken]]–[[betwa]]: foundation stone 25 Dec 2024"],
              ["Dam safety and GLOFs", "Law 5 and Law 7 (young, steep, rising mountains)", "South Lhonak GLOF on the [[teesta]], Oct 2023"],
              ["Floods", "Law 7 (gentle slope + heavy sediment = shifting rivers)", "[[kosi]] breach at Kusaha, 18 Aug 2008"],
              ["Pollution", "Dilution law (load ÷ flow)", "Delhi's 22 km of the [[yamuna]]"],
              ["International rivers", "Law 1 (who is upstream)", "Indus Waters Treaty in abeyance since 23 Apr 2025"],
            ],
          },
          {
            type: "remember",
            hook: "Cause, consequence, cure",
            logic: "Every river answer is a chain. Start with the physical cause (a law), show the human consequence, end with a cure that fits the cause. A cure that ignores the cause (embankments against sediment, plants without flow) is what failed before.",
          },
          {
            type: "check",
            q: {
              id: "is-mix",
              prompt: "Consider the following statements:\n1. The Inter-State River Water Disputes (Amendment) Bill, 2019 is now law and has created a single permanent tribunal.\n2. The Cauvery Water Management Authority was set up in 2018 to implement the Supreme Court's Cauvery judgment.\n3. The Ganga Water Treaty of 1996 with Bangladesh was signed for 30 years.\n4. Ken–Betwa is a link between two tributaries of the Yamuna.\nHow many of the statements given above are correct?",
              options: ["Only one", "Only two", "Only three", "All four"],
              answer: 2,
              explain: "2, 3 and 4 are correct: CWMA came in June 2018; the Farakka treaty of December 1996 runs 30 years, to December 2026; the Ken and the Betwa both join the Yamuna from the south. Statement 1 is wrong: the 2019 Bill passed only the Lok Sabha and lapsed when that Lok Sabha was dissolved in 2024.",
              trap: "Statement 1 is the most-discussed reform in coaching notes, so it feels done. Always check whether a Bill passed both Houses.",
              source: "Practice",
            },
          },
        ],
      },
    ],
  },
];
