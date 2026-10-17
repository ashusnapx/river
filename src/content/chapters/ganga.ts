import type { Chapter } from "../types";

export const gangaChapters: Chapter[] = [
  // ════════════════════════════ CHAPTER 3 ════════════════════════════
  {
    id: "ganga-gaumukh-to-sundarbans",
    number: 3,
    system: "ganga",
    title: "The Ganga: from Gaumukh to the Sundarbans",
    hindiTitle: "गंगा: गौमुख से सुंदरबन तक",
    subtitle: "Two headstreams, five Prayags, one bank rule, a barrage, two names and the world's largest delta.",
    minutes: 30,
    outcomes: [
      "Trace the Ganga from Gaumukh to the Bay of Bengal and name every change of name on the way.",
      "Put the Panch Prayag and the left-bank tributaries in order without memorising a list.",
      "Explain why Himalayan tributaries are left-bank, why the Yamuna is the exception, and why the Kosi shifts.",
      "Explain why Farakka exists, what the 1996 treaty does, and why the delta is so large.",
    ],
    steps: [
      {
        id: "two-headstreams",
        title: "Two headstreams, one name",
        blocks: [
          {
            type: "say",
            text: "The Ganga does not start life as 'the Ganga'. The [[bhagirathi]] leaves the Gangotri glacier at **Gaumukh** (3,900 m), and the [[alaknanda]] leaves the Satopanth glacier above Badrinath.",
          },
          {
            type: "map",
            focus: ["bhagirathi", "alaknanda", "ganga"],
            caption: "Watch both headstreams run down through Garhwal and meet at Devprayag; only below that point does the line become the Ganga.",
            trace: true,
          },
          {
            type: "why",
            q: "So where does the Ganga 'begin'?",
            a: "Its water begins at Gaumukh; its **name** begins at ==Devprayag==, where the Bhagirathi meets the Alaknanda (NCERT). ++A river is named at the union of its headstreams++, so above Devprayag you must say Bhagirathi or Alaknanda.",
          },
          {
            type: "trap",
            wrong: "The Ganga rises at Gangotri town and is called the Ganga from there.",
            right: "It rises at **Gaumukh** (snout of the Gangotri glacier) as the Bhagirathi, and is called the Ganga from Devprayag.",
            why: "Gangotri is the temple town named after the glacier ++because the glacier is the source++; the river there is still the Bhagirathi.",
          },
          {
            type: "check",
            q: {
              id: "c3-devprayag",
              prompt: "Which one of the following is the place of confluence of the Alaknanda and the Bhagirathi?",
              options: ["Vishnu Prayag", "Rudra Prayag", "Karan Prayag", "Deva Prayag"],
              answer: 3,
              explain: "The Bhagirathi is the last stream the Alaknanda meets, ++because the union makes the Ganga and the Alaknanda ends there++. So it must be the lowest Prayag: **Devprayag**.",
              trap: "Rudraprayag is tempting because it is also a famous confluence, but there the Alaknanda meets the **Mandakini**.",
              source: "NCERT Class 11, ch. 3 exercise",
            },
          },
        ],
      },
      {
        id: "panch-prayag",
        title: "Panch Prayag: walk down the Alaknanda",
        blocks: [
          {
            type: "say",
            text: "A **prayag** is a confluence. The Alaknanda collects four Himalayan streams before it meets the Bhagirathi, so it has five prayags in all.",
          },
          {
            type: "sketch",
            id: "panch-prayag",
            caption: "Badrinath at the top; Vishnuprayag (Dhauliganga), Nandprayag (Nandakini), Karnaprayag (Pindar), Rudraprayag (Mandakini), Devprayag (Bhagirathi) going down.",
          },
          {
            type: "remember",
            hook: "Vishnu → Nand → Karn → Rudra → Dev.",
            logic: "It is simply the order you meet them walking downstream from Badrinath. Devprayag is last because the Alaknanda stops being the Alaknanda there.",
          },
          {
            type: "law",
            title: "Order rule",
            text: "For any confluence list, ==walk downstream== from the source. The order of joining is the order of meeting; no mnemonic needed.",
          },
          {
            type: "check",
            q: {
              id: "c3-prayag-order",
              prompt: "Arrange the following confluences on the Alaknanda from upstream to downstream:\n1. Karnaprayag\n2. Vishnuprayag\n3. Rudraprayag\n4. Nandprayag\nSelect the correct order:",
              options: ["2 – 4 – 1 – 3", "4 – 2 – 1 – 3", "2 – 1 – 4 – 3", "2 – 4 – 3 – 1"],
              answer: 0,
              explain: "Start at Badrinath. Vishnuprayag is near Joshimath, just below it. Then Nandprayag (Nandakini), Karnaprayag (Pindar), Rudraprayag (Mandakini). ++Each one is simply the next stream you meet going down++.",
              trap: "Option (b) puts Nandprayag first; people mix up 'Nand' and 'Vishnu' because both are pilgrim towns. Vishnuprayag is the highest.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "glacier-pairs",
        title: "Glacier → river pairs (UPSC 2019)",
        blocks: [
          {
            type: "say",
            text: "UPSC likes glacier–river pairs. Pair each glacier with the valley it actually drains into, not with a famous river nearby.",
          },
          {
            type: "compare",
            title: "Ganga-system glaciers",
            columns: ["Glacier", "River it feeds", "Reason"],
            rows: [
              ["Gangotri (Gaumukh)", "Bhagirathi", "Head of the Bhagirathi valley, Uttarkashi"],
              ["Satopanth", "Alaknanda", "Above Badrinath, head of the Alaknanda valley"],
              ["Chorabari", "Mandakini", "Above Kedarnath"],
              ["Yamunotri (Bandarpunch)", "Yamuna", "Western slopes of Bandarpunch, the westernmost high massif of Garhwal"],
              ["Pindari", "Pindar", "Joins the Alaknanda at Karnaprayag"],
              ["Milam", "Gori Ganga", "Pithoragarh, far to the east; drains to the Kali (Sarda)"],
            ],
          },
          {
            type: "trap",
            wrong: "Milam glacier feeds the Mandakini.",
            right: "Milam feeds the **Gori Ganga** (Kali/Sarda system); the Mandakini comes from the **Chorabari** glacier near Kedarnath.",
            why: "++Milam lies in Pithoragarh, east of the Alaknanda basin++, so its water reaches the Kali on the Nepal border.",
          },
          {
            type: "check",
            q: {
              id: "c3-glacier-pairs",
              prompt: "Consider the following pairs:\nGlacier : River\n1. Bandarpunch : Yamuna\n2. Bara Shigri : Chenab\n3. Milam : Mandakini\n4. Siachen : Nubra\n5. Zemu : Manas\nWhich of the pairs given above are correctly matched?",
              options: ["1, 2 and 4", "1, 3 and 4", "2 and 5", "3 and 5"],
              answer: 0,
              explain: "Bandarpunch's western slopes hold the Yamunotri glacier, so 1 is right. ++Milam drains to the Gori Ganga, not the Mandakini++, so 3 is wrong; that removes (b) and (d). Zemu feeds the Teesta, not the Manas, so 5 is wrong. Left with (a).",
              trap: "Pair 3 tempts because both Milam and the Mandakini are Uttarakhand names; check which valley the glacier sits in.",
              source: "UPSC CSE Prelims 2019",
            },
          },
        ],
      },
      {
        id: "into-the-plains",
        title: "Haridwar: the slope breaks",
        blocks: [
          {
            type: "say",
            text: "The Ganga leaves the Shiwaliks and enters the plains at **Haridwar** (NCERT). It then flows first south, then south-east and east.",
          },
          {
            type: "why",
            q: "Why does the Ganga meander and drop silt across UP and Bihar?",
            a: "From Ambala to the Sundarbans the plain is nearly 1,800 km long but falls only about 300 m: ==1 m in about 6 km== (NCERT Class 9). ++A slope that gentle slows the water, so it drops silt and swings sideways++ into large meanders.",
          },
          {
            type: "sketch",
            id: "meander-oxbow",
            caption: "Gentle slope → slow water → a loop grows → the neck is cut → an oxbow lake is left behind. North Bihar's wetlands sit in such old channels.",
          },
          {
            type: "law",
            title: "Slope decides behaviour",
            text: "**Steep** (Himalaya): the river cuts down, makes gorges and carries silt. **Gentle** (plain): it deposits, meanders and shifts. ++Same river, different slope, different behaviour++.",
          },
        ],
      },
      {
        id: "bank-rule",
        title: "The bank rule: face east",
        blocks: [
          {
            type: "sketch",
            id: "bank-rule",
            caption: "Stand in the river facing downstream. Your left hand is the left bank, your right hand the right bank.",
          },
          {
            type: "law",
            title: "Left = Himalaya, Right = plateau",
            text: "The Ganga flows broadly **west → east**. Face downstream and the Himalaya is on your ==left==, the Peninsular plateau on your right. So Himalayan tributaries are left-bank and plateau tributaries (Son, Punpun) are right-bank.",
          },
          {
            type: "why",
            q: "The Yamuna comes from the Himalaya. Why is it a right-bank tributary?",
            a: "++It runs parallel to the Ganga on its south-west side++ (the Doab lies between them) and meets it at Prayagraj from the south. Bank depends on the side a river arrives from, not where it rises.",
          },
          {
            type: "check",
            q: {
              id: "c3-banks",
              prompt: "Consider the following statements:\n1. The Yamuna joins the Ganga on its left bank.\n2. The Son is a right-bank tributary of the Ganga.\n3. The Gomti is a left-bank tributary of the Ganga.\nHow many of the statements given above are correct?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain: "Face east. ++The Son comes from the plateau to the south++, so it is right-bank: 2 is correct. The Gomti comes from the northern plain: left-bank, 3 is correct. The Yamuna arrives from the south-west, so it is **right**-bank: 1 is wrong. Only two.",
              trap: "Statement 1 tempts because the Yamuna is Himalayan and 'Himalayan = left' is the usual shortcut. The Yamuna is the one exception.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "left-bank-parade",
        title: "The left-bank parade, west → east",
        blocks: [
          {
            type: "spine",
            river: "ganga",
            caption: "The Ganga's tributaries in the order they join: left-bank above the line, right-bank below.",
          },
          {
            type: "remember",
            hook: "Ramganga, Gomti, Ghaghara, Gandak, (Burhi Gandak), Kosi, Mahananda.",
            logic: "Read their sources along the north from west to east: Garhwal, Pilibhit terai, Tibet/western Nepal, central Nepal, Champaran, eastern Nepal/Tibet, Darjeeling. They run roughly south, so they reach the Ganga in the same order.",
          },
          {
            type: "compare",
            title: "Where each left-bank river joins",
            columns: ["River", "Rises in", "Joins the Ganga"],
            rows: [
              ["[[ramganga]]", "Garhwal hills near Gairsain", "Near Kannauj"],
              ["[[gomti]]", "Gomat Taal, Pilibhit (terai)", "Below Varanasi"],
              ["[[ghaghara]]", "Mapchachungo glaciers, Tibet", "Near Chhapra"],
              ["[[gandak]]", "Nepal, between Dhaulagiri and Everest", "Sonpur, opposite Patna"],
              ["[[burhi-gandak]]", "West Champaran (plain)", "Near Khagaria"],
              ["[[kosi]]", "North of Everest (Arun), Tibet", "Near Kursela"],
              ["[[mahananda]]", "Darjeeling hills", "Godagari, Bangladesh (last)"],
            ],
          },
          {
            type: "check",
            q: {
              id: "c3-pyq-2024-order",
              prompt: "With reference to the Himalayan rivers joining the Ganga downstream of Prayagraj from West to East, which one of the following sequences is correct?",
              options: [
                "Ghaghara – Gomati – Gandak – Kosi",
                "Gomati – Ghaghara – Gandak – Kosi",
                "Ghaghara – Gomati – Kosi – Gandak",
                "Gomati – Ghaghara – Kosi – Gandak",
              ],
              answer: 1,
              explain: "Walk downstream from Prayagraj. The Gomti joins just below Varanasi; the Ghaghara near Chhapra; the Gandak opposite Patna; the Kosi near Kursela. ++Their sources lie west → east in the same order++, so (b).",
              trap: "Option (a) tempts because the Ghaghara is the bigger river and 'feels' first. Size does not decide order; position does.",
              source: "UPSC CSE Prelims 2024",
            },
          },
        ],
      },
      {
        id: "two-regimes",
        title: "Two kinds of tributary",
        blocks: [
          {
            type: "sketch",
            id: "regime",
            caption: "Himalayan rivers: two peaks (snow-melt + monsoon), never dry. Plateau rivers: one monsoon peak, thin in summer.",
          },
          {
            type: "compare",
            title: "Left bank vs right bank",
            columns: ["Feature", "Left bank (Himalayan)", "Right bank (plateau)"],
            rows: [
              ["Water from", "Glaciers + monsoon", "Monsoon only"],
              ["Flow", "Perennial", "Seasonal; low in summer"],
              ["Sediment", "Very high (young mountains)", "Lower (old, hard rock)"],
              ["Course", "Shifts, braids, floods", "Fixed in rocky valleys"],
              ["Examples", "Ghaghara, Gandak, Kosi", "Son, Punpun (and Chambal, Betwa via the Yamuna)"],
            ],
          },
          {
            type: "why",
            q: "Why do the Ghaghara, Gandak and Kosi flood north Bihar almost every year?",
            a: "They rise in the Nepal Himalaya, ++carry monsoon floods and huge silt++, and drop onto a flat plain. NCERT Class 9 adds the other side: the floods also ==enrich the soil== for farming. Plateau tributaries rise in semi-arid areas, have shorter courses and carry less water.",
          },
        ],
      },
      {
        id: "kosi-sorrow",
        title: "The Kosi: why it wanders",
        blocks: [
          {
            type: "say",
            text: "The [[kosi]] is an **antecedent** river: its main stream, the Arun, rises north of Mount Everest in Tibet and cuts across the Himalaya. In Nepal the Sun Kosi (west) and Tamur (east) join it to form the Sapt Kosi (NCERT).",
          },
          {
            type: "why",
            q: "Why is the Kosi called the 'Sorrow of Bihar'?",
            a: "NCERT: ++it brings huge sediment from its upper reaches and deposits it in the plains; the course gets blocked, and the river changes course++. Leaving the Chatara gorge, its slope collapses, so silt drops, the bed rises and the river spills sideways.",
          },
          {
            type: "sketch",
            id: "braided",
            caption: "Heavy silt + gentle slope = many braided channels on a wide fan. The Kosi's megafan in north Bihar is the classic case.",
          },
          {
            type: "say",
            text: "On **18 August 2008** the Kosi breached its eastern embankment at Kusaha in Nepal and flowed into an old channel, flooding north Bihar. ++Embankments trap silt and raise the bed++, so a single breach is catastrophic.",
          },
          {
            type: "trap",
            wrong: "Damodar is the Sorrow of Bihar; Kosi is the Sorrow of Bengal.",
            right: "**Kosi = Bihar** (course shifting by sediment). **Damodar = Bengal** (flash floods off the plateau; now tamed by the DVC).",
            why: "++Different causes++: Himalayan silt for the Kosi, plateau runoff for the Damodar. Match the cause to the state.",
          },
          {
            type: "check",
            q: {
              id: "c3-kosi",
              prompt: "Consider the following statements about the Kosi:\n1. It is an antecedent river.\n2. In Nepal, the Sun Kosi joins it from the west and the Tamur Kosi from the east.\n3. It joins the Ghaghara before reaching the Ganga.\nWhich of the statements given above is/are correct?",
              options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
              answer: 1,
              explain: "NCERT calls the Kosi antecedent ++because the Arun kept cutting down as the Himalaya rose++: 1 correct. Sun Kosi from the west, Tamur from the east: 2 correct. The Kosi joins the **Ganga** directly near Kursela, far east of the Ghaghara: 3 wrong.",
              trap: "Statement 3 tempts people who think every Nepal river feeds the Ghaghara. Only the Sarda and Rapti do.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "around-patna",
        title: "Four rivers around Patna",
        blocks: [
          {
            type: "say",
            text: "Patna is where north and south tributaries crowd together. Learn the four confluences as one picture.",
          },
          {
            type: "compare",
            title: "Confluences near Patna, upstream → downstream",
            columns: ["Place", "River", "Bank"],
            rows: [
              ["Near Chhapra", "[[ghaghara]]", "Left"],
              ["Just west of Patna (Maner)", "[[son]]", "Right"],
              ["Sonpur–Hajipur, opposite Patna", "[[gandak]]", "Left"],
              ["Fatuha, just east of Patna", "[[punpun]]", "Right"],
            ],
          },
          {
            type: "trap",
            wrong: "The Ghaghara joins the Ganga at Patna.",
            right: "The Ghaghara joins near **Chhapra**; the river that meets the Ganga opposite Patna is the **Gandak**.",
            why: "++The Ghaghara's source lies west of the Gandak's++, so it reaches the Ganga further west (upstream).",
          },
          {
            type: "check",
            q: {
              id: "c3-city-river",
              prompt: "Consider the following pairs:\nCity : River\n1. Lucknow : Gomti\n2. Gorakhpur : Rapti\n3. Jabalpur : Son\n4. Muzaffarpur : Burhi Gandak\nHow many of the pairs given above are correctly matched?",
              options: ["Only one", "Only two", "Only three", "All four"],
              answer: 2,
              explain: "Lucknow is on the Gomti, Gorakhpur on the Rapti, Muzaffarpur on the Burhi Gandak: three correct. ++Jabalpur lies in the Narmada rift valley++, on the **Narmada**, not the Son.",
              trap: "Jabalpur tempts because it is near the Son's home plateau (Amarkantak region). Near is not on.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "farakka",
        title: "Farakka: why a barrage near the border",
        blocks: [
          {
            type: "say",
            text: "At Farakka (West Bengal) the Ganga splits. The **Bhagirathi–Hooghly** distributary goes south past Kolkata; the main flow goes into Bangladesh as the **Padma**.",
          },
          {
            type: "why",
            q: "Why was the Farakka barrage built (commissioned 1975)?",
            a: "To divert water through a feeder canal into the Hooghly. ++The Ganga's main flow had moved into the Padma, so the Hooghly was silting up++; extra water flushes the silt and keeps Kolkata port navigable.",
          },
          {
            type: "say",
            text: "Diverting water upstream of the border cuts Bangladesh's dry-season flow. So India and Bangladesh signed the ==Ganga Water Treaty== on **12 December 1996**: a 30-year deal sharing the flow at Farakka from 1 January to 31 May. It runs out in **December 2026**, which makes its renewal a live issue.",
          },
          {
            type: "check",
            q: {
              id: "c3-farakka",
              prompt: "Consider the following statements:\n1. The Farakka barrage diverts Ganga water into the Bhagirathi–Hooghly.\n2. The India–Bangladesh Ganga Water Treaty of 1996 was signed for 30 years.\n3. The Hooghly is a tributary of the Ganga.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 0,
              explain: "Farakka's purpose is diversion into the Hooghly ++to flush silt from Kolkata port++: 1 correct. The 1996 treaty is a 30-year treaty: 2 correct. The Hooghly takes water **out** of the Ganga, so it is a **distributary**: 3 wrong.",
              trap: "Statement 3 tempts because the Hooghly 'is the Ganga' in Bengal. A channel that leaves a river is a distributary, not a tributary.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "padma-to-meghna",
        title: "Padma, Jamuna, Meghna: the names in Bangladesh",
        blocks: [
          {
            type: "map",
            focus: ["ganga", "hooghly", "padma", "mahananda", "brahmaputra", "meghna"],
            caption: "Follow the Ganga past Farakka: the Hooghly peels off south; the Padma takes the Mahananda, then the Jamuna (Brahmaputra) at Goalundo, then the Meghna at Chandpur.",
            trace: true,
          },
          {
            type: "remember",
            hook: "Ganga → Padma → (+ Jamuna, still Padma) → (+ Meghna) → Meghna to the sea.",
            logic: "A name changes at a border or when the river enters a bigger outlet channel. The Meghna is the final outlet, so its name reaches the sea.",
          },
          {
            type: "trap",
            wrong: "The Ganga becomes the Meghna as soon as it enters Bangladesh.",
            right: "It enters as the **Padma**; it is the Meghna only after joining the Meghna near Chandpur.",
            why: "++The border renames it Padma; the outlet renames it Meghna++. Two separate events.",
          },
          {
            type: "check",
            q: {
              id: "c3-bangladesh-order",
              prompt: "Arrange the following in the order in which the Ganga water reaches them, from upstream to downstream:\n1. Goalundo\n2. Farakka\n3. Chandpur\n4. Godagari\nSelect the correct answer:",
              options: ["2 – 4 – 1 – 3", "2 – 1 – 4 – 3", "4 – 2 – 1 – 3", "2 – 4 – 3 – 1"],
              answer: 0,
              explain: "Farakka is in India, just before the border. The Mahananda joins at Godagari, just inside Bangladesh. ++The Jamuna joins lower down at Goalundo++, and the Meghna last at Chandpur.",
              trap: "Option (c) puts Godagari before Farakka because the Mahananda rises in India; but it joins the Ganga only after Farakka.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "sundarbans",
        title: "The Sundarbans: why the biggest delta",
        blocks: [
          {
            type: "sketch",
            id: "delta-vs-estuary",
            caption: "Slow, silt-heavy river on a gentle slope → delta (Ganga). Fast river in hard rock with little silt → estuary (Narmada, Tapi).",
          },
          {
            type: "why",
            q: "Why is the Ganga–Brahmaputra delta the largest in the world?",
            a: "++Two of the most sediment-laden rivers on Earth, both draining the young Himalaya, reach the sea across very flat land++. Tides then spread the silt into islands and creeks. NCERT Class 9 calls it the world's ==largest and fastest-growing delta==.",
          },
          {
            type: "say",
            text: "The delta takes its name from the **Sundari** tree of its mangrove marshes. Its Indian part is a UNESCO World Heritage Site (1987) and home of the Royal Bengal tiger.",
          },
          {
            type: "check",
            q: {
              id: "c3-delta",
              prompt: "The Ganga forms a delta, while the Narmada forms an estuary. Which one of the following best explains this?",
              options: [
                "The Ganga flows into the Bay of Bengal, which has no tides.",
                "The Ganga carries heavy sediment across a very gentle slope, while the Narmada flows fast through a hard-rock rift and carries little silt.",
                "The Narmada is a younger river than the Ganga.",
                "The Ganga is fed only by the monsoon.",
              ],
              answer: 1,
              explain: "Deltas need ++more silt than the sea can carry away, and a slow river to drop it++. The Ganga has both; the Narmada's hard-rock trough gives little silt and fast flow, so tides keep its mouth open.",
              trap: "Option (a) is false: the Bay of Bengal has strong tides. Tides actually shape the Sundarbans' creeks.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "national-river",
        title: "National river, national animal, national mission",
        blocks: [
          {
            type: "compare",
            title: "Ganga governance timeline",
            columns: ["Year", "Step", "Why it matters"],
            rows: [
              ["2008", "Ganga declared National River", "Largest basin; led to a basin authority"],
              ["2009", "NGRBA set up under the Environment (Protection) Act, 1986; chaired by the PM", "++Pollution crosses state lines++, so the basin is the planning unit"],
              ["2009", "Gangetic dolphin declared national aquatic animal", "Indicator of river health"],
              ["2014", "Namami Gange approved as a flagship programme (June)", "Sewage, effluents, river-front, biodiversity"],
              ["2016", "National Ganga Council replaces NGRBA; chaired by the PM", "Same basin logic, new authority"],
              ["2025", "First dolphin estimate (WII): 6,324 Ganges river dolphins", "Baseline for conservation"],
            ],
          },
          {
            type: "say",
            text: "**National Waterway 1** runs on the Ganga–Bhagirathi–Hooghly from Haldia to Prayagraj, about 1,620 km. ++A perennial river on a gentle slope++ keeps enough depth for barges.",
          },
          {
            type: "check",
            q: {
              id: "c3-ngrba",
              prompt: "Which of the following are the key features of 'National Ganga River Basin Authority (NGRBA)'?\n1. River basin is the unit of planning and management.\n2. It spearheads the river conservation efforts at the national level.\n3. One of the Chief Ministers of the States through which the Ganga flows becomes the Chairman of NGRBA on rotation basis.\nSelect the correct answer using the code given below.",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 0,
              explain: "++Pollution flows downstream across states++, so the NGRBA planned basin-wide (1) and led national conservation (2). It was chaired by the **Prime Minister**, not a rotating Chief Minister, so 3 is wrong.",
              trap: "Statement 3 sounds federal and fair, which is why it tempts. A basin authority needs one central chair.",
              source: "UPSC CSE Prelims 2016",
            },
          },
          {
            type: "check",
            q: {
              id: "c3-dolphin-decline",
              prompt: "Other than poaching, what are the possible reasons for the decline in the population of Ganges River Dolphins?\n1. Construction of dams and barrages on rivers\n2. Increase in the population of crocodiles in rivers\n3. Getting trapped in fishing nets accidentally\n4. Use of synthetic fertilizers and other agricultural chemicals in crop-fields in the vicinity of rivers\nSelect the correct answer using the code given below.",
              options: ["1 and 2 only", "2 and 3 only", "1, 3 and 4 only", "1, 2, 3 and 4"],
              answer: 2,
              explain: "Dolphins need ++deep, connected, clean water++. Barrages cut populations apart and reduce depth (1), nets drown them (3), farm chemicals poison the water and prey (4). Crocodile numbers are not a recognised cause (2).",
              trap: "Statement 2 tempts because predators sound plausible. Dolphins and crocodilians have always shared these rivers; the threats in the key are human-made.",
              source: "UPSC CSE Prelims 2014",
            },
          },
        ],
      },
    ],
  },

  // ════════════════════════════ CHAPTER 4 ════════════════════════════
  {
    id: "yamuna-and-plateau-tributaries",
    number: 4,
    system: "ganga",
    title: "The Yamuna and the plateau tributaries",
    hindiTitle: "यमुना और पठारी सहायक नदियाँ",
    subtitle: "Why rivers flow north off the plateau: the Yamuna, the Chambal family, Bundelkhand's Betwa and Ken, the Son and the Damodar.",
    minutes: 30,
    outcomes: [
      "Explain why the Chambal, Sind, Betwa, Ken, Son and Damodar flow north or east, not south.",
      "Read the banks of the Yamuna and the Chambal from the direction of flow.",
      "Link the Chambal to its dams, ravines and gharials, and the Ken–Betwa link to Bundelkhand's drought.",
      "Explain why the Damodar flows east through a rift valley and why it was the Sorrow of Bengal.",
    ],
    steps: [
      {
        id: "yamuna-exception",
        title: "The Yamuna: Himalayan, yet right bank",
        blocks: [
          {
            type: "say",
            text: "The [[yamuna]] rises in the **Yamunotri glacier** on the western slopes of the Banderpunch range (NCERT). It is the ==westernmost and longest== tributary of the Ganga.",
          },
          {
            type: "map",
            focus: ["yamuna", "tons", "hindon", "ganga"],
            caption: "The Yamuna leaves the hills, passes Delhi and Agra, and runs parallel to the Ganga on its south-west side until Prayagraj.",
            trace: true,
          },
          {
            type: "why",
            q: "Why does a Himalayan river join the Ganga on the right bank?",
            a: "++It runs down the south-west side of the Ganga++, with the Ganga–Yamuna Doab between them, and meets the Ganga at Prayagraj from the south. Facing downstream, that is the right hand.",
          },
          {
            type: "say",
            text: "Its water is pulled into the **Western Yamuna, Eastern Yamuna and Agra canals** (NCERT). ++Heavy withdrawal upstream plus city sewage++ is why the Delhi stretch is so polluted.",
          },
          {
            type: "check",
            q: {
              id: "c4-yamuna",
              prompt: "Consider the following statements about the Yamuna:\n1. It rises in the Yamunotri glacier on the Banderpunch range.\n2. It is the longest tributary of the Ganga.\n3. It joins the Ganga on its left bank at Prayagraj.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 0,
              explain: "NCERT gives Yamunotri on Banderpunch (1) and calls the Yamuna the westernmost and longest tributary (2). ++It arrives from the south-west++, so it is a **right**-bank tributary: 3 is wrong.",
              trap: "Statement 3 tempts through the shortcut 'Himalayan = left bank'. The Yamuna is the textbook exception.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "yamuna-banks",
        title: "Reading the Yamuna's banks",
        blocks: [
          {
            type: "spine",
            river: "yamuna",
            caption: "Tons and the plateau four on the right; the Hindon on the left from the Doab.",
          },
          {
            type: "law",
            title: "Same rule, new river",
            text: "The Yamuna flows south and south-east. Face downstream: the **Doab** (east) is on your left, the **plateau** (south-west) on your right. So Hindon = left; Chambal, Sind, Betwa, Ken = ==right== (NCERT).",
          },
          {
            type: "remember",
            hook: "Plateau four, upstream → downstream: Chambal, Sind, Betwa, Ken.",
            logic: "They lie side by side across Malwa and Bundelkhand from west to east, and all flow north-east, so the westernmost (Chambal) joins first and the easternmost (Ken) last.",
          },
          {
            type: "check",
            q: {
              id: "c4-yamuna-order",
              prompt: "Arrange the following right-bank tributaries of the Yamuna in the order in which they join it, from upstream to downstream:\n1. Betwa\n2. Chambal\n3. Ken\n4. Sind\nSelect the correct answer:",
              options: ["2 – 4 – 1 – 3", "2 – 1 – 4 – 3", "4 – 2 – 1 – 3", "2 – 4 – 3 – 1"],
              answer: 0,
              explain: "++Their basins sit west → east across the plateau++: Chambal (Malwa), Sind, Betwa, Ken (Bundelkhand). Joining order downstream follows the same line: Chambal near Etawah, Sind just below, Betwa at Hamirpur, Ken at Chilla.",
              trap: "Option (c) puts the Sind first because its name sounds 'western'. The Sind joins just below the Chambal.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "plateau-slopes-north",
        title: "Why plateau rivers flow north",
        blocks: [
          {
            type: "sketch",
            id: "slope-of-india",
            caption: "The northern edge of the Peninsula (Malwa, Bundelkhand, Baghelkhand, Chota Nagpur) dips towards the Ganga trough; the Himalaya slope down to it from the other side.",
          },
          {
            type: "law",
            title: "Rivers reveal the slope",
            text: "NCERT Class 9: the Chambal, Sind, Betwa and Ken flow from **south-west to north-east**, ==thus indicating the slope== of the Central Highlands. ++Water simply runs downhill towards the Ganga trough++.",
          },
          {
            type: "why",
            q: "Why do these plateau rivers carry little water in summer?",
            a: "They rise in ++semi-arid areas, have shorter courses and no snow-melt++ (NCERT Class 9), so their flow rises and falls with the monsoon.",
          },
          {
            type: "check",
            q: {
              id: "c4-slope",
              prompt: "The Chambal, the Sind, the Betwa and the Ken flow from south-west to north-east. This indicates that:",
              options: [
                "the Central Highlands slope towards the north-east",
                "these rivers are antecedent to the Vindhyas",
                "these rivers flow through rift valleys",
                "the Western Ghats are the water divide for them",
              ],
              answer: 0,
              explain: "++Rivers follow the slope of the land++. A shared south-west → north-east flow shows that the Central Highlands tilt that way, towards the Ganga trough (NCERT Class 9).",
              trap: "Option (c) tempts if you remember 'rift' from the Narmada. These rivers are not in rift valleys.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "chambal-gorge-dams",
        title: "The Chambal: a gorge full of dams",
        blocks: [
          {
            type: "say",
            text: "The [[chambal]] rises near **Mhow** in the Malwa plateau and flows north through a **gorge** above Kota (NCERT). In that gorge stand four structures, one after another.",
          },
          {
            type: "remember",
            hook: "Gandhi Sagar → Rana Pratap Sagar → Jawahar Sagar → Kota barrage.",
            logic: "Upstream to downstream on a north-flowing river: Gandhi Sagar is in MP (Mandsaur), the rest are in Rajasthan down to Kota. Each reuses water released from the one above.",
          },
          {
            type: "why",
            q: "Why pack four dams into one stretch?",
            a: "++A narrow gorge in hard rock, falling steadily++, gives short, strong dam walls and repeated drops for power. Below Kota the valley opens into soft alluvium, where dam sites are poor.",
          },
          {
            type: "check",
            q: {
              id: "c4-reservoirs",
              prompt: "Consider the following pairs:\nReservoirs : States\n1. Ghataprabha : Telangana\n2. Gandhi Sagar : Madhya Pradesh\n3. Indira Sagar : Andhra Pradesh\n4. Maithon : Chhattisgarh\nHow many pairs given above are not correctly matched?",
              options: ["Only one pair", "Only two pairs", "Only three pairs", "All four pairs"],
              answer: 2,
              explain: "++Gandhi Sagar is the first Chambal dam, in MP++: pair 2 is right. Ghataprabha is in Karnataka, Indira Sagar is on the Narmada in MP, and Maithon is a DVC dam on the Barakar in Jharkhand. Three pairs are wrong.",
              trap: "Gandhi Sagar is often placed in Rajasthan because Kota and Rawatbhata are. Remember the Chambal flows north from MP.",
              source: "UPSC CSE Prelims 2022",
            },
          },
        ],
      },
      {
        id: "chambal-ravines",
        title: "The Chambal ravines",
        blocks: [
          {
            type: "say",
            text: "NCERT: the Chambal is famous for its **badland topography**, the Chambal ravines, in Morena, Bhind, Dholpur and Etawah.",
          },
          {
            type: "why",
            q: "How do the ravines form?",
            a: "++Thick, soft alluvium + sparse vegetation + intense monsoon downpours++ let runoff cut gullies. The Chambal keeps deepening its bed towards the Yamuna, so the gullies keep cutting back and down until they become deep ravines.",
          },
          {
            type: "law",
            title: "Badland formula",
            text: "**Soft material + heavy, bursty rain + little plant cover + a river cutting down** = gullies that grow into ravines. Remove any one and badlands do not form.",
          },
          {
            type: "check",
            q: {
              id: "c4-ravines",
              prompt: "Which one of the following combinations best explains the formation of the Chambal ravines?",
              options: [
                "Glacial erosion of hard granite",
                "Gully erosion of thick soft alluvium by intense monsoon runoff",
                "Wind erosion of sand dunes",
                "Collapse of limestone caves",
              ],
              answer: 1,
              explain: "++The lower Chambal crosses soft alluvium, and monsoon rain comes in bursts++. Running water cuts gullies that deepen into ravines; there are no glaciers, dunes or limestone caves here.",
              trap: "Option (c) tempts because the Chambal is near the Thar. The ravines are cut by water, not wind.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "chambal-sanctuary",
        title: "Gharials and dolphins of the Chambal",
        blocks: [
          {
            type: "say",
            text: "The **National Chambal Sanctuary** (1979) is shared by MP, Rajasthan and UP. It protects the gharial, the Gangetic dolphin and the red-crowned roof turtle.",
          },
          {
            type: "why",
            q: "Why did the Chambal stay a refuge?",
            a: "++The ravines kept big towns and industry off much of the lower river++, and the river still has clean flowing water and sandbanks, which gharials need for basking and nesting.",
          },
          {
            type: "check",
            q: {
              id: "c4-gharial",
              prompt: "If you want to see gharials in their natural habitat, which one of the following is the best place to visit?",
              options: ["Bhitarkanika Mangroves", "Chambal River", "Pulicat Lake", "Deepor Beel"],
              answer: 1,
              explain: "Gharials are ++freshwater, fish-eating river crocodilians that need flowing water and sandbanks++. The Chambal sanctuary holds the largest wild population. Bhitarkanika has saltwater crocodiles; Pulicat and Deepor Beel are lagoon and wetland.",
              trap: "Bhitarkanika tempts because it is India's famous crocodile site, but its crocodiles are estuarine (saltwater), not gharials.",
              source: "UPSC CSE Prelims 2017",
            },
          },
          {
            type: "trap",
            wrong: "The Irrawaddy dolphin is naturally found in the Chambal.",
            right: "The Chambal has the **Gangetic dolphin**. The Irrawaddy dolphin lives in brackish coastal waters such as **Chilika**.",
            why: "++The Chambal is a freshwater river of the Ganga system++, so its dolphin is the Ganges river dolphin. UPSC 2019 used this as a wrong pair.",
          },
        ],
      },
      {
        id: "chambal-family",
        title: "The Chambal's own tributaries",
        blocks: [
          {
            type: "spine",
            river: "chambal",
            caption: "Shipra, Kali Sindh and Parbati arrive from the MP side (right bank); the Banas comes from the Aravalli (left bank).",
          },
          {
            type: "compare",
            title: "Chambal tributaries",
            columns: ["River", "Rises", "Bank", "Hook"],
            rows: [
              ["[[shipra]]", "Near Indore", "Right", "Ujjain; Kumbh river; capital of Avanti"],
              ["[[kali-sindh]]", "Vindhyas near Bagli (Dewas)", "Right", "Joins at Nonera below Kota"],
              ["[[parbati]]", "Vindhyas, Sehore", "Right", "Joins near Pali, Sawai Madhopur"],
              ["[[banas]]", "Aravalli near Kumbhalgarh", "Left", "Whole course inside Rajasthan"],
            ],
          },
          {
            type: "law",
            title: "Bank rule on the Chambal",
            text: "The Chambal flows north-east. ++Rivers from MP to its east and south-east are right-bank; the Banas from the Aravalli to its west is left-bank++.",
          },
          {
            type: "check",
            q: {
              id: "c4-wetlands",
              prompt: "Consider the following pairs:\nWetlands : Confluence of rivers\n1. Harike Wetlands : Confluence of Beas and Satluj/Sutlej\n2. Keoladeo Ghana National Park : Confluence of Banas and Chambal\n3. Kolleru Lake : Confluence of Musi and Krishna\nWhich of the above pairs is/are correctly matched?",
              options: ["1 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 0,
              explain: "Harike lies at the Beas–Sutlej meeting: correct. ++Keoladeo (Bharatpur) is fed by the Gambhir and Banganga++; the Banas meets the Chambal far south at Rameshwar. Kolleru lies between the Godavari and Krishna deltas, not at the Musi confluence. So 1 only.",
              trap: "Pair 2 tempts because Keoladeo and the Banas are both in eastern Rajasthan. Different river, different place.",
              source: "UPSC CSE Prelims 2014",
            },
          },
          {
            type: "say",
            text: "In **2024** MP and Rajasthan agreed on the modified **Parbati–Kalisindh–Chambal–ERCP** link. ++Monsoon surplus of the Chambal's right-bank feeders is moved to water-short east Rajasthan++, all within one basin.",
          },
        ],
      },
      {
        id: "bundelkhand-betwa-ken",
        title: "Sind, Betwa, Ken: Bundelkhand's rivers",
        blocks: [
          {
            type: "say",
            text: "East of the Chambal, the [[sind]], [[betwa]] and [[ken]] cross Bundelkhand to the Yamuna. The Betwa (ancient **Vetravati**) passes Vidisha and Orchha; the Ken cuts a gorge through the Panna plateau.",
          },
          {
            type: "why",
            q: "Why was Bundelkhand chosen for India's first river-link project?",
            a: "++Hard rock, thin soils and monsoon-only rivers++ leave Bundelkhand drought-prone. The Ken basin has surplus monsoon flow; the upper Betwa basin is short. So the **Ken–Betwa link** moves Ken water to the Betwa.",
          },
          {
            type: "say",
            text: "The Ken–Betwa link is the first National Perspective Plan link to reach implementation. Its foundation stone was laid at Khajuraho on **25 December 2024**; its main dam, **Daudhan**, stands on the Ken inside the Panna Tiger Reserve.",
          },
          {
            type: "check",
            q: {
              id: "c4-ken-betwa",
              prompt: "Consider the following statements about the Ken–Betwa link project:\n1. It transfers surplus water of the Betwa to the Ken.\n2. Its main dam lies inside the Panna Tiger Reserve.\n3. Both the Ken and the Betwa are right-bank tributaries of the Yamuna.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 1,
              explain: "Water moves **from the Ken to the Betwa**, ++because the Ken basin has the surplus++: 1 is reversed. The Daudhan dam on the Ken is inside Panna Tiger Reserve: 2 correct. Both come off the plateau to the Yamuna's south-west: right bank, 3 correct.",
              trap: "Statement 1 is the classic reversal. The project's name lists the donor first: Ken → Betwa.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "son-amarkantak",
        title: "The Son: one plateau, two directions",
        blocks: [
          {
            type: "map",
            focus: ["son", "rihand", "north-koel", "ganga"],
            caption: "From Amarkantak the Son runs north, turns east along the Kaimur range, picks up the Rihand and North Koel, and meets the Ganga just west of Patna.",
            trace: true,
          },
          {
            type: "why",
            q: "The Narmada and the Son both rise on the Amarkantak plateau. Why do they flow in opposite directions?",
            a: "Amarkantak is a ==water divide==. ++West of it lies the Narmada rift, sloping to the Arabian Sea; north of it the plateau slopes to the Ganga trough++. Each river follows its own side's slope.",
          },
          {
            type: "say",
            text: "NCERT: the Son is the Ganga's **major right-bank tributary**. It forms a series of waterfalls at the edge of the plateau, then reaches the Ganga west of Patna.",
          },
          {
            type: "spine",
            river: "son",
            caption: "Rihand and North Koel join from the south, on the Son's right bank.",
          },
          {
            type: "check",
            q: {
              id: "c4-son",
              prompt: "Consider the following statements about the Son:\n1. It rises on the Amarkantak plateau.\n2. It is a left-bank tributary of the Ganga.\n3. The Rihand and the North Koel are its tributaries.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
              answer: 1,
              explain: "The Son rises at Amarkantak (1) and receives the Rihand and North Koel (3). ++It comes from the plateau south of the Ganga++, so it is a **right**-bank tributary: 2 is wrong.",
              trap: "Statement 2 tempts because the Son joins near Patna, where the Gandak (a left-bank river) also arrives.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "son-power-and-patna",
        title: "Coal, dams and an ancient capital",
        blocks: [
          {
            type: "say",
            text: "The [[rihand]] is dammed at Pipri (Sonbhadra) to form **Govind Ballabh Pant Sagar**. ++Coal next door and a big reservoir for cooling water++ made Singrauli a thermal-power hub. The [[north-koel]] flows through Betla National Park in Palamu.",
          },
          {
            type: "why",
            q: "Why did Pataliputra (Patna) become Magadha's capital?",
            a: "It grew near the **Ganga–Son confluence**. ++Rivers on several sides made it a natural water fort and a hub of river trade++ along the Ganga plain. The Son has shifted course several times, so today it meets the Ganga a little west of Patna.",
          },
          {
            type: "say",
            text: "Just east of Patna, the small [[punpun]] also joins on the right bank at Fatuha: Patna is bracketed by two plateau rivers.",
          },
          {
            type: "check",
            q: {
              id: "c4-dam-river",
              prompt: "Consider the following pairs:\nDam / Reservoir : River\n1. Govind Ballabh Pant Sagar : Rihand\n2. Bansagar : Son\n3. Maithon : Damodar main stem\nHow many of the pairs given above are correctly matched?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain: "Rihand dam forms G. B. Pant Sagar (1) and Bansagar is on the Son in MP (2). ++Maithon is on the Barakar, the Damodar's main tributary++, not on the Damodar itself (Panchet is): 3 is wrong.",
              trap: "Pair 3 tempts because Maithon is a DVC dam. DVC dams sit on the Damodar and its tributaries; check which one.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "damodar-rift",
        title: "The Damodar: a rift valley that flows east",
        blocks: [
          {
            type: "say",
            text: "NCERT: the [[damodar]] occupies the eastern margins of the Chota Nagpur plateau, ==flows through a rift valley== and joins the Hooghly. The Barakar is its main tributary.",
          },
          {
            type: "sketch",
            id: "rift-valley",
            caption: "A down-faulted trough between blocks. The Narmada and Tapi troughs tilt west; the Damodar's trough tilts east. Direction follows the trough's slope.",
          },
          {
            type: "why",
            q: "Why does the Damodar valley hold India's best coking coal?",
            a: "++Down-faulted troughs sank and were buried++, so the Gondwana coal seams inside them survived erosion. Jharia, Bokaro and Raniganj lie along the Damodar.",
          },
          {
            type: "trap",
            wrong: "Every river in a rift valley flows west.",
            right: "The Narmada and Tapi do; the **Damodar** flows **east** through a rift valley.",
            why: "++A fault makes a trough; the trough's tilt decides the direction++.",
          },
          {
            type: "check",
            q: {
              id: "c4-rift",
              prompt: "Which one of the following rivers flows in a rift valley?",
              options: ["The Son", "The Narmada", "The Yamuna", "The Luni"],
              answer: 1,
              explain: "Of these four, ++only the Narmada runs in a fault trough++, between the Vindhyas and Satpuras. (The Damodar, not listed here, is NCERT's other rift-valley river.)",
              trap: "The Son tempts because it rises next to the Narmada at Amarkantak; but it flows down the plateau's north slope, not in the rift.",
              source: "NCERT Class 11, ch. 3 exercise",
            },
          },
        ],
      },
      {
        id: "damodar-dvc",
        title: "Sorrow of Bengal, tamed",
        blocks: [
          {
            type: "why",
            q: "Why was the Damodar the 'Sorrow of Bengal'?",
            a: "++Monsoon bursts on a steep, bare plateau catchment ran off fast++ and spilled over the flat Bardhaman–Hooghly–Howrah plains.",
          },
          {
            type: "say",
            text: "The **Damodar Valley Corporation** (July 1948), modelled on the Tennessee Valley Authority of the USA, built a chain of dams: Tilaiya and Maithon on the Barakar, Konar on the Konar, Panchet on the Damodar, and the Durgapur barrage below.",
          },
          {
            type: "check",
            q: {
              id: "c4-sorrow-bengal",
              prompt: "Which one of the following rivers was known as the 'Sorrow of Bengal'?",
              options: ["The Gandak", "The Son", "The Kosi", "The Damodar"],
              answer: 3,
              explain: "++Flash floods off the Chota Nagpur plateau++ hit the Bengal plains, which gave the Damodar the name; the DVC has since tamed it.",
              trap: "The Kosi tempts because it is the 'Sorrow of **Bihar**'. Match the sorrow to the state.",
              source: "NCERT Class 11, ch. 3 exercise",
            },
          },
        ],
      },
      {
        id: "plateau-review",
        title: "Review: Himalayan vs plateau tributaries",
        blocks: [
          {
            type: "compare",
            title: "The two families of the Ganga system",
            columns: ["Question", "Himalayan family", "Plateau family"],
            rows: [
              ["Which bank of the Ganga?", "Left (Yamuna excepted)", "Right"],
              ["Why that direction?", "Himalaya slope south to the trough", "Plateau slopes north to the trough"],
              ["Water", "Snow + monsoon, perennial", "Monsoon only, seasonal"],
              ["Typical problem", "Floods and course shifts (Kosi)", "Ravines (Chambal), drought (Bundelkhand)"],
              ["Typical solution", "Embankments, barrages, treaties with Nepal", "Dams in gorges, river links, the DVC"],
            ],
          },
          {
            type: "check",
            q: {
              id: "c4-review",
              prompt: "Which of the following join the Ganga directly on its right bank?\n1. Son\n2. Punpun\n3. Chambal\n4. Yamuna\nSelect the correct answer using the code given below.",
              options: ["1 and 2 only", "1, 2 and 4 only", "1, 3 and 4 only", "1, 2, 3 and 4"],
              answer: 1,
              explain: "The Son, Punpun and Yamuna all ++arrive from the south or south-west++ and meet the Ganga itself. The Chambal is right-bank too, but of the **Yamuna**, not the Ganga.",
              trap: "Option (d) tempts because the Chambal is a plateau river. 'Directly' is the key word: it reaches the Ganga only through the Yamuna.",
              source: "Practice",
            },
          },
        ],
      },
    ],
  },
];
