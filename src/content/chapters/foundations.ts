import type { Chapter } from "../types";

// Sources: NCERT Class 11 "India: Physical Environment" ch. 3 Drainage System (2026-27 reprint, text checked verbatim);
// UPSC Prelims questions as transcribed in research_notes/.../pyq_river_questions.md.

export const foundationsChapters: Chapter[] = [
  {
    id: "think-like-a-river",
    number: 1,
    system: "foundations",
    title: "Think like a river",
    hindiTitle: "नदी की तरह सोचो",
    subtitle: "A handful of laws explain almost every Indian river. Learn the laws once, and the facts stop being a list.",
    minutes: 40,
    outcomes: [
      "Explain why most Indian rivers drain to the Bay of Bengal, using the slope of the land.",
      "Tell a Himalayan river from a Peninsular one by its source, regime, valley, age and mouth, with the reason for each.",
      "Name the left and right bank of any river correctly, and put tributaries in downstream order without a mnemonic.",
      "Explain gorges, meanders, oxbow lakes, braids, deltas, estuaries and rift valleys from slope, rock and sediment.",
      "Read a drainage pattern as a picture of the rock beneath it.",
      "Recognise the six shapes of UPSC river questions and the law that cracks each.",
    ],
    steps: [
      {
        id: "promise",
        title: "A handful of laws, not a thousand facts",
        blocks: [
          {
            type: "say",
            text: "You have probably tried to learn rivers as lists: source, mouth, tributaries, dams. Lists fade in a week ++because nothing holds them together++. This notebook works the other way round. First you learn a few **laws** that make every Indian river behave as it does. Then each fact arrives as the answer to a question you have already asked.",
          },
          {
            type: "say",
            text: "Seven laws carry this whole notebook. Water flows downhill. Every river owns a basin. Himalayan and Peninsular rivers are two different families. The feeder decides the flow. Old rivers saw through young mountains. Banks are named facing downstream. Slope and sediment shape the channel and the mouth.",
          },
          {
            type: "why",
            q: "Why learn reasons at all, if the exam only asks facts?",
            a: "Because UPSC asks facts in disguise. Which river forms an estuary, which bank a tributary joins, which river rises in the Eastern Ghats: each is easy ++once you know why++ and a coin toss if you only memorised. Memory research points the same way: asking yourself 'why is this true?' helps most with exactly such confusing, look-alike facts.",
          },
          {
            type: "law",
            title: "The notebook's one rule",
            text: "Never write a river fact without its ++because++. If no physical reason exists (a name, a date), attach a hook such as an order, a story or a meaning, and call it a hook.",
          },
          {
            type: "remember",
            hook: "Notice → Why → Law → Remember → Check",
            logic: "Every step in this notebook runs in this order. Notice something odd on the map, ask why, learn the law, lock it with a hook, then test yourself. Testing is what moves it into long-term memory; rereading only feels like learning.",
          },
        ],
      },
      {
        id: "downhill",
        title: "Law 1: water flows downhill (the tilted tray)",
        blocks: [
          {
            type: "say",
            text: "Read India's relief in three bands. In the north stands the **Himalaya**. Below it lies the low **Indo-Gangetic trough**, filled with river silt. South of that rises the **Peninsular plateau**, an old block of hard rock.",
          },
          {
            type: "sketch",
            id: "slope-of-india",
            caption: "Himalaya → plains → plateau. The plateau tilts from north-west to south-east, so its big rivers run to the Bay of Bengal.",
          },
          {
            type: "say",
            text: "Now notice something odd. The [[godavari]] rises in Nashik district and the [[krishna]] near Mahabaleshwar, both in the Sahyadri, close to the Arabian Sea. Yet both cross the whole peninsula to reach the Bay of Bengal.",
          },
          {
            type: "why",
            q: "Why do rivers born near the Arabian Sea end in the Bay of Bengal?",
            a: "++Because the Western Ghats are the raised western rim of the plateau++, and the block slopes away from them. NCERT names the cause: a ==slight tilting of the Peninsular block from north-west to south-east== gave the whole drainage its orientation towards the Bay of Bengal. The Western Ghats act as the water divide, and on their steep western face only short streams run to the Arabian Sea.",
          },
          {
            type: "law",
            title: "Law 1 · Water flows downhill",
            text: "Find the high ground and the slope, and you have the direction. Himalayan rivers run south into the trough. In the trough the Ganga turns east and the Indus south-west. Plateau rivers run east ++because the plateau tilts east++.",
          },
          {
            type: "trap",
            wrong: "The Narmada flows west because the land of central India slopes west.",
            right: "The plateau tilts east. The Narmada and Tapi flow west ++because they run in rift troughs (trough faults)++ that open to the west.",
            why: "This was the trap in UPSC Prelims 2013. The regional slope is eastward, so a big west-flowing river needs a special cause: a fault-guided trough.",
          },
          {
            type: "remember",
            hook: "India is a tray tipped towards the Bay of Bengal",
            logic: "Lift the western edge of a tray (the Western Ghats) and water runs east. Only cracks in the tray (the Narmada and Tapi troughs) lead the other way.",
          },
        ],
      },
      {
        id: "two-seas",
        title: "Two seas, one dividing line",
        blocks: [
          {
            type: "say",
            text: "By where the water finally goes, NCERT splits India into the **Arabian Sea drainage** and the **Bay of Bengal drainage**. They are separated by the Delhi ridge, the Aravallis and the Sahyadri (Western Ghats).",
          },
          {
            type: "say",
            text: "Nearly ==77 per cent== of the drainage area (the Ganga, Brahmaputra, Mahanadi, Krishna and others) is oriented towards the Bay of Bengal. About ==23 per cent== (the Indus, Narmada, Tapi, Mahi and Periyar systems) drains into the Arabian Sea.",
          },
          {
            type: "why",
            q: "Why is the split so lopsided?",
            a: "++Because the divide sits far to the west.++ The Sahyadri hug the west coast and the Aravalli–Delhi ridge stands in the north-west, so most of India lies on their eastern side. The Indus goes to the Arabian Sea ++because its basin lies west of that ridge++.",
          },
          {
            type: "map",
            focus: ["indus", "ganga", "brahmaputra"],
            caption: "The three Himalayan giants. The Indus runs south-west to the Arabian Sea; the Ganga and the Brahmaputra run east to the Bay of Bengal.",
            trace: true,
          },
          {
            type: "map",
            focus: ["mahanadi", "godavari", "krishna", "kaveri", "narmada", "tapi"],
            caption: "The big Peninsular rivers. Four run east to the Bay of Bengal; only the Narmada and the Tapi, guided by rift troughs, run west.",
            trace: true,
          },
          {
            type: "check",
            q: {
              id: "fd-two-seas",
              prompt: "Consider the following statements:\n1. Nearly 77 per cent of India's drainage area is oriented towards the Bay of Bengal.\n2. The Indus, the Narmada and the Mahi belong to the Arabian Sea drainage.\n3. The Arabian Sea and the Bay of Bengal drainages are separated by the Delhi ridge, the Aravallis and the Sahyadri.\nHow many of the statements given above are correct?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 2,
              explain: "All three are NCERT lines, and each follows from Law 1. The divide (Delhi ridge, Aravallis, Sahyadri) runs along the west, so most land slopes to the Bay: about 77 per cent. Rivers west of the divide (Indus) or in west-opening troughs and the western plains (Narmada, Mahi) go to the Arabian Sea.",
              trap: "Statement 2 tempts you to doubt the Mahi because it is small and less famous. Ask where it ends: the Gulf of Khambhat, an arm of the Arabian Sea.",
              source: "Practice (NCERT Class 11, ch. 3)",
            },
          },
        ],
      },
      {
        id: "basin",
        title: "Law 2: every river owns a basin",
        blocks: [
          {
            type: "say",
            text: "A river drains the water collected from a specific area, its **catchment area**. The whole area drained by a river and its tributaries is its **drainage basin**. The boundary line separating one basin from the next is the **water divide**.",
          },
          {
            type: "sketch",
            id: "water-divide",
            caption: "Rain falling on one side of the ridge goes to one basin, rain on the other side to the next. The ridge line is the divide.",
          },
          {
            type: "trap",
            wrong: "'Watershed' always means the dividing ridge.",
            right: "NCERT uses 'watershed' in two ways: for the boundary line between basins, and for the small catchments of rills and rivulets. Catchments of large rivers are called river basins; small ones are watersheds.",
            why: "So 'river basin vs watershed' in NCERT is a difference of size: watersheds are small in area, basins cover larger areas. Read which meaning the question uses.",
          },
          {
            type: "why",
            q: "Why do planners treat a basin as one unit?",
            a: "Because ++what happens in one part of a basin directly affects the other parts++ (NCERT). A dam upstream changes the flow downstream; a dirty tributary fouls the main river. That is why basins are used as planning regions, and why a basin shared by states or countries breeds disputes (Chapter 9).",
          },
          {
            type: "say",
            text: "NCERT also sizes basins by catchment. **Major** basins exceed 20,000 sq km; there are 14, such as the Ganga, Brahmaputra, Krishna, Tapi, Narmada, Mahi, Pennar, Sabarmati and Barak. Medium basins cover 2,000–20,000 sq km (44 basins), and minor basins less than 2,000 sq km.",
          },
          {
            type: "law",
            title: "Law 2 · Every river owns a basin",
            text: "Rain belongs to the basin it falls in. ++The divide decides which river gets the water++, and the basin decides who must share it.",
          },
          {
            type: "check",
            q: {
              id: "fd-basin",
              prompt: "With reference to drainage terms used by NCERT, consider the following statements:\n1. The area drained by a river and its tributaries is called a drainage basin.\n2. The boundary line separating one drainage basin from another is known as the watershed.\n3. Watersheds are larger in area than river basins.\nWhich of the statements given above is/are correct?",
              options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
              answer: 1,
              explain: "Statements 1 and 2 are NCERT definitions. Statement 3 reverses the size rule: catchments of large rivers are river basins, while those of small rivulets and rills are watersheds. So watersheds are the smaller units.",
              trap: "Statement 2 looks wrong if you only know 'watershed' as a small catchment. NCERT uses the word for the boundary line too, so it is correct.",
              source: "Practice (NCERT Class 11, ch. 3)",
            },
          },
        ],
      },
      {
        id: "two-families",
        title: "Law 3: two families, Himalayan and Peninsular",
        blocks: [
          {
            type: "say",
            text: "By origin and character, NCERT groups Indian rivers into the **Himalayan** and the **Peninsular** drainage. Know the family and you can predict how a river behaves before you read a word about it.",
          },
          {
            type: "compare",
            title: "Himalayan vs Peninsular rivers, each row with its reason",
            columns: ["Feature", "Himalayan rivers", "Peninsular rivers", "Why"],
            rows: [
              ["Source", "Glaciers and snowfields of the Himalaya; some rise in Tibet", "Plateau highlands: Western Ghats, Amarkantak, Chota Nagpur, Eastern Ghats", "Each family rises on its own high ground and then follows the slope (Law 1)."],
              ["Flow (regime)", "**Perennial**: snowmelt plus rain", "Mostly **seasonal**: monsoon rain only", "++Glaciers release water in the hot, dry months++; the plateau has no ice store."],
              ["Valleys", "Gorges, V-shaped valleys, rapids and waterfalls in the mountains", "Broad, largely graded, shallow valleys", "Rising young mountains keep the rivers cutting down; the old plateau has been worn low for ages."],
              ["Age", "Young; still deepening their valleys", "Older and mature (NCERT)", "The plateau is an ancient landmass; the Himalaya rose far later."],
              ["Course in the plains", "Strong meandering; frequent shifts of course (Kosi)", "Fixed course; meanders largely absent", "Heavy silt on gentle alluvial slopes chokes channels; hard rock holds Peninsular rivers in place."],
              ["Mouth", "Vast delta (Ganga–Brahmaputra)", "East-flowing: deltas. Narmada and Tapi: estuaries", "A delta needs more silt than the sea removes; trough-fault rivers drop their load in the cracks (Law 7)."],
              ["Basin size", "Very large basins", "Relatively smaller basins", "Long courses across a broad trough gather many tributaries."],
              ["Navigability", "Long navigable stretches in the plains", "Navigation mainly in the lower or deltaic stretch (Godavari, Mahanadi)", "Year-round water on a gentle gradient vs seasonal water, rocky beds and waterfalls."],
            ],
          },
          {
            type: "trap",
            wrong: "Every river of the Ganga system is a Himalayan river.",
            right: "The [[chambal]], [[betwa]] and [[son]] belong to the Ganga system but rise on the Peninsular plateau and are much older than the Himalayan rivers.",
            why: "NCERT itself flags this as the weak point of the classification. Use origin when asked about character (seasonal flow, old valleys); use the system when asked where the water ends up.",
          },
          {
            type: "check",
            q: {
              id: "fd-families",
              prompt: "Consider the following statements:\n1. Peninsular rivers flow in broad, largely graded, shallow valleys.\n2. Peninsular rivers are younger than the Himalayan rivers.\n3. In the plains, Himalayan rivers show a strong meandering tendency and shift their courses frequently.\nHow many of the statements given above are correct?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain: "1 and 3 are correct. Broad, graded valleys are the mark of old rivers that have worked on a stable block for ages, which is exactly why statement 2 is wrong: NCERT calls the Peninsular drainage older than the Himalayan. Statement 3 follows from heavy sediment on a gentle alluvial slope.",
              trap: "'Peninsular rivers are smaller, so they must be younger' feels natural. Size has nothing to do with age; the hard, ancient plateau is older than the Himalaya.",
              source: "Practice (NCERT Class 11, ch. 3)",
            },
          },
        ],
      },
      {
        id: "regime",
        title: "Law 4: the feeder decides the flow",
        blocks: [
          {
            type: "say",
            text: "Watch a river's water through the year: its **regime**. A Himalayan river has water in May, when the plains are bone dry. Many Peninsular rivers shrink to pools by then.",
          },
          {
            type: "sketch",
            id: "regime",
            caption: "Perennial (glacier plus monsoon) vs seasonal (monsoon only). The Himalayan curve never drops to zero.",
          },
          {
            type: "why",
            q: "Why does a Himalayan river carry water in summer, before the monsoon arrives?",
            a: "++Because summer heat melts Himalayan snow and ice++, so flow rises even before the rains. The monsoon then adds a second, bigger push. Fed by both, these rivers are perennial (NCERT). Peninsular rivers have one feeder, the monsoon, so they swell in the rainy months and fall sharply after.",
          },
          {
            type: "law",
            title: "Law 4 · The feeder decides the flow",
            text: "Glacier + rain = perennial. Rain only = seasonal. Two monsoons = steadier. Little rain = ephemeral.",
          },
          {
            type: "say",
            text: "Two exceptions prove the law. The [[kaveri]] fluctuates less than other Peninsular rivers ++because its upper catchment gets the south-west monsoon (summer) and its lower part the north-east monsoon (winter)++. The [[luni]] of Rajasthan is ephemeral ++because it drains the dry land west of the Aravallis++.",
          },
          {
            type: "sketch",
            id: "monsoon-kaveri",
            caption: "Two monsoons, one river: Karnataka's summer rain and Tamil Nadu's winter rain keep the Kaveri flowing longer.",
          },
          {
            type: "check",
            q: {
              id: "fd-regime",
              prompt: "Consider the following statements:\n1. Himalayan rivers are perennial because they are fed by both melting snow and rainfall.\n2. The Kaveri carries water with comparatively less fluctuation than other Peninsular rivers because its basin receives both the south-west and the north-east monsoon.\n3. The Luni is perennial because it rises in the Aravallis.\nHow many of the statements given above are correct?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain: "Count the feeders. Snow plus rain makes statement 1 true. Two monsoons in two parts of one basin make statement 2 true (NCERT). The Luni has neither ice nor much rain: NCERT calls the entire Luni system ephemeral, so statement 3 is false.",
              trap: "Statement 3 borrows a true detail (it rises near Pushkar in the Aravallis) to sell a false conclusion. A hill source does not make a river perennial; the feeder does.",
              source: "Practice (NCERT Class 11, ch. 3)",
            },
          },
        ],
      },
      {
        id: "antecedent",
        title: "Law 5: old rivers saw through young mountains",
        blocks: [
          {
            type: "say",
            text: "Notice where some Himalayan rivers start: north of the highest ranges, in Tibet. The [[sutlej]] rises at Rakas Tal near Mansarovar. The [[brahmaputra]] rises in the Chemayungdung glacier of the Kailash range. The Arun, main stream of the [[kosi]], rises north of Mount Everest. Each must cross the Great Himalaya to reach the plains.",
          },
          {
            type: "why",
            q: "How can a river cut straight through the highest mountains on Earth?",
            a: "++Because the river was there first.++ As the Himalaya slowly rose, these rivers kept cutting their beds down about as fast as the land rose, so they held their old courses. NCERT says they pass through giant gorges carved by erosion ++carried on simultaneously with the uplift++. A river older than the relief it crosses is called **antecedent**.",
          },
          {
            type: "sketch",
            id: "antecedent",
            caption: "The river keeps sawing down while the mountain rises across its path. The deep gorge is the scar.",
          },
          {
            type: "say",
            text: "NCERT names the Satluj, the Kosi and the Subansiri as antecedent rivers. The [[indus]] cuts a spectacular gorge near Gilgit, and the Brahmaputra a deep gorge near Namcha Barwa: the same story told by their gorges.",
          },
          {
            type: "law",
            title: "Law 5 · Gorge = old river, rising mountain",
            text: "If a Himalayan river rises behind the main ranges and still reaches the plains through a deep gorge, it is antecedent. Deep gorges and U-turn courses are also evidence that the Himalaya are **young fold mountains** (UPSC Prelims 2012).",
          },
          {
            type: "remember",
            hook: "Born behind the wall, out in front = antecedent",
            logic: "A river can start behind a wall and end in front of it only if it was flowing before the wall rose. Indus, Sutlej, Brahmaputra, Arun–Kosi and Subansiri all start on the Tibetan side.",
          },
          {
            type: "check",
            q: {
              id: "fd-antecedent-pyq-2026",
              prompt: "Identify the river of the Indian sub-continent on the basis of the following information:\n1. It has an antecedent drainage system.\n2. It flows through three countries.\n3. It originates in the Tibetan Plateau and is an important river for irrigation.\n4. It does not form distributaries.",
              options: ["Brahmaputra", "Indus", "Sutlej", "Teesta"],
              answer: 2,
              explain: "Use each clue as a filter. Antecedent and Tibetan origin leave the Brahmaputra, Indus and Sutlej (the Teesta rises in Sikkim). Clue 4 is the killer: the Indus and the Brahmaputra end in the sea through deltas with many distributaries, but the Sutlej ends by joining another river (via the Panjnad), so it never forms distributaries. It flows through China (Tibet), India and Pakistan, and feeds the Bhakra Nangal canals.",
              trap: "The Indus fits clues 1–3 perfectly and is the famous antecedent river. Clue 4 is there to knock it out: any river reaching the sea through a delta has distributaries.",
              source: "UPSC CSE Prelims 2026 (provisional key)",
            },
          },
        ],
      },
      {
        id: "lost-river",
        title: "The lost river: how the drainage was born",
        blocks: [
          {
            type: "say",
            text: "Why are there three separate Himalayan systems (Indus, Ganga, Brahmaputra) and not one? NCERT tells a story. Geologists believe a mighty river called the **Shiwalik** or **Indo-Brahma** once ran along the whole Himalaya, from Assam to Punjab and on to Sind. It emptied into the Gulf of Sind during the Miocene, some 5–24 million years ago.",
          },
          {
            type: "why",
            q: "What is the evidence for such a river?",
            a: "The remarkable continuity of the Shiwalik hills, and their lake-and-river deposits of sand, silt, clay, boulders and conglomerates. ++One long river leaves exactly such a continuous belt of sediment.++",
          },
          {
            type: "why",
            q: "What broke the Indo-Brahma river into three?",
            a: "Probably the Pleistocene upheaval in the western Himalaya, including the uplift of the **Potwar Plateau (Delhi Ridge)**, which ++rose across the old river and became the divide++ between the Indus and the Ganga. Later the down-thrusting of the **Malda gap**, between the Rajmahal hills and the Meghalaya plateau, ++turned the Ganga and the Brahmaputra towards the Bay of Bengal++.",
          },
          {
            type: "map",
            focus: ["indus", "ganga", "brahmaputra"],
            caption: "Picture one river along this whole arc. A rising ridge in the west cut it; a sinking gap in the east turned it. Result: three systems.",
          },
          {
            type: "say",
            text: "UPSC Prelims 2026 tested the idea through history: what supports the claim that a river once switched between the Indus and Ganga systems? The provisional key picked the presence of river dolphins in both systems. ++A river animal cannot walk across a divide++; it must have swum through a once-shared channel.",
          },
          {
            type: "say",
            text: "The Peninsula has its own birth story, three events per NCERT. First, the western flank subsided below the sea in the early Tertiary, upsetting the symmetry of rivers on both sides of the old divide. Second, when the Himalaya rose, the northern flank subsided and cracked into **trough faults**, which the Narmada and Tapi now follow. Third, the block tilted slightly from north-west to south-east, sending the rest to the Bay of Bengal.",
          },
          {
            type: "remember",
            hook: "One river, one ridge, one gap",
            logic: "Indo-Brahma river → Potwar (Delhi) ridge rises and splits Indus from Ganga → Malda gap sinks and turns Ganga and Brahmaputra to the Bay. Three events, three systems.",
          },
          {
            type: "check",
            q: {
              id: "fd-indo-brahma",
              prompt: "With reference to the evolution of Himalayan drainage as described by NCERT, consider the following statements:\n1. The Indo-Brahma river is believed to have flowed during the Miocene period.\n2. The uplift of the Potwar Plateau (Delhi Ridge) acted as the water divide between the Indus and Ganga systems.\n3. The down-thrusting of the Malda gap diverted the Ganga and the Brahmaputra towards the Arabian Sea.\nHow many of the statements given above are correct?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain: "1 and 2 are NCERT lines. Statement 3 is wrong in its last word: the Malda gap lies in the east, between the Rajmahal hills and the Meghalaya plateau, so its sinking pulled the two rivers towards the nearby Bay of Bengal.",
              trap: "Statement 3 keeps every true term (Malda gap, down-thrusting, Ganga, Brahmaputra) and swaps one word. Check the direction against the map: the gap is in the east.",
              source: "Practice (NCERT Class 11, ch. 3)",
            },
          },
        ],
      },
      {
        id: "bank-rule",
        title: "Law 6: banks are named facing downstream",
        blocks: [
          {
            type: "say",
            text: "UPSC likes 'Which of these is a right-bank tributary of…?' Many aspirants learn bank lists by heart and still mix them up. You need one rule, not lists.",
          },
          {
            type: "sketch",
            id: "bank-rule",
            caption: "Stand in the river facing the way the water flows. Your left hand is the left bank, your right hand the right bank.",
          },
          {
            type: "law",
            title: "Law 6 · Face downstream",
            text: "Always face **downstream** on the parent river. Left hand = left bank, right hand = right bank. ++The rule is tied to the flow, not to north or south++, so the same compass side can be left on one river and right on another.",
          },
          {
            type: "why",
            q: "Why does the Ganga receive northern rivers on its left and plateau rivers on its right?",
            a: "The [[ganga]] flows east. Facing east, your left hand points north, to the Himalaya, and your right hand points south, to the plateau. So the Ramganga, Gomti, Ghaghara, Gandak, Kosi and Mahananda join on the **left bank**. The Son, rising on the Amarkantak plateau, is its major **right-bank** tributary (NCERT).",
          },
          {
            type: "why",
            q: "Then why are the Subansiri and the Manas right-bank tributaries of the Brahmaputra?",
            a: "In Assam the [[brahmaputra]] flows west and south-west. Facing west, your right hand points north. So the Himalayan rivers Subansiri, Kameng, Manas and Sankosh join on the **right bank**, while the Burhi Dihing and Dhansiri from the southern hills join on the **left bank** (NCERT).",
          },
          {
            type: "say",
            text: "Try the [[yamuna]], which flows south-east. Facing that way, your right hand points south-west, towards the Malwa and Bundelkhand plateau. So the Chambal, Sind, Betwa and Ken join on its right bank, and the Hindan joins on its left (NCERT).",
          },
          {
            type: "trap",
            wrong: "Himalayan tributaries always join on the left bank.",
            right: "They join on the left of the east-flowing Ganga but on the ==right of the west-flowing Brahmaputra== in Assam.",
            why: "The bank depends on the parent's direction of flow. Work it out each time by facing downstream; never memorise 'Himalayan = left'.",
          },
          {
            type: "check",
            q: {
              id: "fd-banks",
              prompt: "Consider the following pairs (tributary : bank of the parent river it joins):\n1. Subansiri : Right bank of the Brahmaputra\n2. Burhi Dihing : Left bank of the Brahmaputra\n3. Son : Left bank of the Ganga\n4. Chambal : Right bank of the Yamuna\nHow many of the pairs given above are correctly matched?",
              options: ["Only one", "Only two", "Only three", "All four"],
              answer: 2,
              explain: "Face downstream each time. Brahmaputra in Assam flows west: north (Subansiri) is right, south (Burhi Dihing) is left. Pairs 1 and 2 are correct. Ganga flows east: the Son comes from the south, so it is a right-bank tributary; pair 3 is wrong. Yamuna flows south-east: the Chambal comes from the south-west plateau, the right side; pair 4 is correct.",
              trap: "Pair 1 tempts you to mark it wrong if you learnt 'Himalayan rivers join on the left'. That is true only for east-flowing parents like the Ganga.",
              source: "Practice (NCERT Class 11, ch. 3)",
            },
          },
        ],
      },
      {
        id: "order",
        title: "The ordering trick: walk downstream",
        blocks: [
          {
            type: "say",
            text: "Order questions ask which tributary joins first. Do not memorise a sequence; take a walk. Start at the parent's source, walk with the current, and tick off each river as it comes in.",
          },
          {
            type: "why",
            q: "Why do the Himalayan tributaries of the Ganga join in a neat west-to-east order?",
            a: "++Because the Ganga runs east, roughly parallel to the Himalaya.++ A tributary that rises further east in the mountains comes down further east on the plain, so it meets the Ganga further downstream. The Ramganga (Garhwal hills), Ghaghara (through western Nepal), Gandak (central Nepal), Kosi (eastern Nepal) and Mahananda (Darjiling hills) follow the mountains from west to east.",
          },
          {
            type: "say",
            text: "The plains-born **Gomti** breaks the mountain logic but not the walk. It rises in the plains of Uttar Pradesh and joins the Ganga below Varanasi, ==before the Ghaghara== joins near Chhapra. The Gandak then joins at Sonpur near Patna, and the Mahananda is the last left-bank tributary, in West Bengal (NCERT).",
          },
          {
            type: "remember",
            hook: "Map order = mountain order",
            logic: "For a parent that runs along a mountain front, tributaries meet it in the same order as their sources sit along the mountains. Walk the parent downstream and read the mountains from the same end.",
          },
          {
            type: "check",
            q: {
              id: "fd-order-pyq-2024",
              prompt: "With reference to the Himalayan rivers joining the Ganga downstream of Prayagraj from West to East, which one of the following sequences is correct?",
              options: ["Ghaghara – Gomati – Gandak – Kosi", "Gomati – Ghaghara – Gandak – Kosi", "Ghaghara – Gomati – Kosi – Gandak", "Gomati – Ghaghara – Kosi – Gandak"],
              answer: 1,
              explain: "Walk downstream from Prayagraj. The Gomti comes in first, below Varanasi. Next the Ghaghara near Chhapra, then the Gandak at Sonpur opposite Patna, then the Kosi in eastern Bihar. The last three follow their sources from western to eastern Nepal, exactly as the mountain-order rule predicts.",
              trap: "Option (a) puts the Ghaghara first because it is the bigger, better-known river. Size does not decide order; position along the parent does.",
              source: "UPSC CSE Prelims 2024",
            },
          },
        ],
      },
      {
        id: "plains-shapes",
        title: "Meanders, oxbow lakes and braids",
        blocks: [
          {
            type: "say",
            text: "Once a Himalayan river leaves the mountains, its slope suddenly flattens. NCERT lists what follows: flat valleys, ox-bow lakes, flood plains, braided channels and, near the mouth, deltas.",
          },
          {
            type: "sketch",
            id: "meander-oxbow",
            caption: "Erosion on the outer bend, deposition on the inner bend. A flood cuts the neck, and the loop is left behind as an oxbow lake.",
          },
          {
            type: "why",
            q: "Why do plains rivers wind in loops?",
            a: "On a gentle slope the fastest water swings to the outside of each bend and ++erodes the outer bank++. Slow water on the inside ++drops its sediment++. Bends grow into loops called **meanders**. In a flood the river cuts across the narrow neck of a loop, and the abandoned loop is left as an **oxbow lake**.",
          },
          {
            type: "trap",
            wrong: "Kanwar Lake in Bihar was formed by the meandering of the Gandak.",
            right: "UPSC's 2023 key treated this statement as incorrect. Kanwar (Kabartal) is usually described as an oxbow of the Burhi Gandak.",
            why: "The process (meandering → oxbow) is right, but the river name is the trap: the Gandak and the Burhi Gandak are different rivers.",
          },
          {
            type: "sketch",
            id: "braided",
            caption: "Too much sediment on a gentle slope: the river drops sandbars and splits into many shifting channels.",
          },
          {
            type: "why",
            q: "Why does the Brahmaputra in Assam split into many channels?",
            a: "A river braids when it carries ++more sediment than its gentle slope can move++. It drops bars of sand and silt, and the water splits around them into shifting channels. NCERT says the Brahmaputra is known for floods, channel shifting and bank erosion ++because its large tributaries bring heavy sediment from a very rainy catchment++.",
          },
          {
            type: "say",
            text: "The [[kosi]], the 'sorrow of Bihar', is notorious for changing its course. It brings a huge load of sediment from its upper reaches and deposits it in the plains; ++the channel gets blocked, so the river shifts++ (NCERT).",
          },
          {
            type: "law",
            title: "Law 7a · Slope and sediment shape the channel",
            text: "Steep slope → cutting (gorges, V-shaped valleys). Gentle slope → depositing (meanders, oxbow lakes). Gentle slope with too much sediment → braiding and shifting courses (Kosi, Brahmaputra).",
          },
        ],
      },
      {
        id: "mouths",
        title: "Delta or estuary? Rift valleys decide",
        blocks: [
          {
            type: "say",
            text: "Every river must end. It builds a **delta** if it drops more sediment at the mouth than the sea can carry away. It ends in an **estuary** if the mouth stays an open funnel, scoured by the tide.",
          },
          {
            type: "sketch",
            id: "delta-vs-estuary",
            caption: "Slow, silt-heavy river on a gentle coast → delta. Fast river with little silt, in a trough, flushed by tides → estuary.",
          },
          {
            type: "why",
            q: "Why do the Mahanadi, Godavari, Krishna and Kaveri build deltas, but the Narmada and Tapi do not?",
            a: "The east-flowing rivers cross wide plateau and plains, ++collecting silt over long courses++, and slow down on a gentle coastal plain, so the load piles up as deltas. The Narmada and Tapi flow in **trough faults** and, says NCERT, ++fill the original cracks with their detritus++, so little reaches the mouth. The [[narmada]] ends in a broad 27 km long estuary south of Bharuch.",
          },
          {
            type: "sketch",
            id: "rift-valley",
            caption: "A block sinks between parallel faults. The Narmada follows the trough between the Vindhyas (north) and the Satpuras (south).",
          },
          {
            type: "why",
            q: "What exactly is a rift valley?",
            a: "When the crust cracks along parallel faults and the block between them sinks, a long, straight trough forms: a **rift valley**. A river that finds such a trough follows it, ++so the fault sets its line, not the regional tilt++.",
          },
          {
            type: "trap",
            wrong: "A rift valley river always flows west.",
            right: "The [[damodar]] also flows through a rift valley (NCERT), on the eastern edge of the Chota Nagpur plateau, yet it flows east to join the [[hooghly|Hugli]].",
            why: "The trough decides the line; the slope along the trough decides the direction. Do not shrink a cause into a slogan.",
          },
          {
            type: "law",
            title: "Law 7b · Sediment against the sea decides the mouth",
            text: "Plenty of silt + gentle slope → delta. Little silt reaching the mouth (fault trough, or a short, steep hard-rock course) + tidal scour → estuary. So the short west-coast rivers of the Western Ghats form no deltas: a Mains question in 2013.",
          },
          {
            type: "check",
            q: {
              id: "fd-narmada-pyq-2013",
              prompt: "The Narmada river flows to the west, while most other large peninsular rivers flow to the east. Why?\n1. It occupies a linear rift valley.\n2. It flows between the Vindhyas and the Satpuras.\n3. The land slopes to the west from Central India.\nSelect the correct answer using the codes given below:",
              options: ["1 only", "2 and 3 only", "1 and 3 only", "None"],
              answer: 0,
              explain: "Ask of each statement: is it true, and is it the reason? Statement 1 is both: the rift trough sets the river's line. Statement 2 is a true fact but not a cause of direction; plenty of rivers lie between ranges and flow east. Statement 3 is false: the plateau tilts from north-west to south-east.",
              trap: "Statement 2 is a true geographical fact, so it feels safe to tick. In 'why' questions a true fact that is not the cause is still a wrong option.",
              source: "UPSC CSE Prelims 2013",
            },
          },
        ],
      },
      {
        id: "patterns",
        title: "Drainage patterns: the map draws the rock",
        blocks: [
          {
            type: "say",
            text: "Seen from above, a river and its tributaries draw a pattern. ++The pattern is a picture of the rock and slope underneath++, so you can read geology off a map.",
          },
          {
            type: "sketch",
            id: "drainage-patterns",
            caption: "Dendritic, trellis, rectangular, radial and centripetal: five drawings of five kinds of ground.",
          },
          {
            type: "compare",
            title: "Five patterns and the ground that makes them",
            columns: ["Pattern", "Looks like", "Why it forms", "Indian example"],
            rows: [
              ["**Dendritic**", "Branches of a tree", "Uniform rock or soil with no grain to follow, so streams just follow the general slope", "Rivers of the northern plain (NCERT)"],
              ["**Trellis**", "Main streams parallel; short tributaries join at right angles", "Parallel bands of hard and soft rock: rivers carve the soft bands, short streams drain the hard ridges", "NCERT gives no Indian example; learn the rock condition"],
              ["**Rectangular**", "Streams bend sharply at right angles", "Strongly jointed or faulted rock: streams follow the cracks, which meet at right angles", "NCERT gives no Indian example; learn the rock condition"],
              ["**Radial**", "Rivers flow outward in all directions from a high point", "A dome or hill: water runs off every side", "Rivers of the Amarkantak range (NCERT)"],
              ["**Centripetal**", "Rivers flow inward from all directions", "A lake or depression lower than its surroundings", "Loktak lake, Manipur (standard example, not in the current NCERT text)"],
            ],
          },
          {
            type: "why",
            q: "Why is Amarkantak the classic radial centre?",
            a: "++Because it is a high plateau knot from which the land falls away on several sides.++ The [[narmada]] leaves westwards along its rift, and the [[son]] runs north towards the Ganga. Water on each slope takes that slope's way down.",
          },
          {
            type: "check",
            q: {
              id: "fd-patterns",
              prompt: "Consider the following pairs (drainage pattern : description):\n1. Dendritic : resembles the branches of a tree\n2. Radial : rivers originate from a hill and flow in all directions\n3. Centripetal : rivers discharge their waters from all directions into a lake or depression\n4. Trellis : rivers follow a strongly jointed terrain and bend at right angles at every joint\nHow many of the pairs given above are correctly matched?",
              options: ["Only one", "Only two", "Only three", "All four"],
              answer: 2,
              explain: "Pairs 1–3 are NCERT definitions. Pair 4 describes the rectangular pattern, born of joints and faults. Trellis is defined by parallel primary tributaries with secondary tributaries joining them at right angles, a result of alternating hard and soft rock bands.",
              trap: "Both trellis and rectangular patterns show right angles, so pair 4 looks fine. Separate them by cause: trellis = parallel rock bands; rectangular = joints and faults.",
              source: "Practice (NCERT Class 11, ch. 3)",
            },
          },
        ],
      },
      {
        id: "upsc-way",
        title: "How UPSC asks, and how you answer",
        blocks: [
          {
            type: "say",
            text: "From 2011 to 2026, Prelims asked about ==two to four direct river questions a year==, plus lake, wetland and dam questions around them. Nearly all come as pairs or as 'how many of the statements are correct'. ++One wrong word makes a whole statement false++, so precise laws beat vague familiarity.",
          },
          {
            type: "compare",
            title: "Six question shapes and the law that cracks each",
            columns: ["Shape", "PYQ example", "Ask yourself"],
            rows: [
              ["Pairs / matching", "2019: glacier–river pairs (Bandarpunch–Yamuna, Milam–Mandakini…)", "Which basin is this source in? Trace it downhill (Laws 1 and 2)."],
              ["How many correct", "2023: Wular, Kolleru and Kanwar lakes", "Test every word of every statement; one swapped name kills it."],
              ["Direct vs indirect tributary", "2021: which river joins the Indus directly", "Does it join the parent, or a tributary of the parent? Jhelum and Ravi join the Chenab; Beas joins the Sutlej (NCERT)."],
              ["'Rises in' vs 'flows through'", "2021: which rivers rise in the Eastern Ghats", "Where is the source, not where does it pass?"],
              ["Order", "2024: Ganga tributaries west to east", "Walk downstream from the source."],
              ["Why (Mains)", "2013: no deltas by Western Ghats rivers. Why?", "Name the law: slope, sediment, rock, feeder."],
            ],
          },
          {
            type: "law",
            title: "The habit",
            text: "For every option ask, 'Why would this be true?' If you can name the law behind it, you can judge it. ++If no law supports an option++, it is usually the trap.",
          },
          {
            type: "remember",
            hook: "Source, slope, side, sequence, sediment",
            logic: "Five questions for any river. Where does it rise (source)? Which way does the land fall (slope)? Which bank does it join (side)? Where along the parent (sequence)? What does its load build (sediment)? Each one is a law from this chapter.",
          },
          {
            type: "check",
            q: {
              id: "fd-eastern-ghats-pyq-2021",
              prompt: "Consider the following rivers:\n1. Brahmani\n2. Nagavali\n3. Subarnarekha\n4. Vamsadhara\nWhich of the above rise from the Eastern Ghats?",
              options: ["1 and 2", "2 and 4", "3 and 4", "1 and 3"],
              answer: 1,
              explain: "Separate 'rises in' from 'flows through'. The Nagavali and Vamsadhara rise in the Eastern Ghats of southern Odisha and run straight to the Bay. The Brahmani is formed by the Sankh and South Koel, which start on the Chota Nagpur plateau, and the Subarnarekha rises near Ranchi on the same plateau; they only cross the Ghats region later.",
              trap: "The Brahmani flows through Odisha alongside Eastern Ghats rivers, so it feels like one of them. Flowing through a region is not rising in it.",
              source: "UPSC CSE Prelims 2021",
            },
          },
          {
            type: "check",
            q: {
              id: "fd-laws-mix",
              prompt: "Consider the following statements:\n1. Most Peninsular rivers flow east because the Peninsular block tilts from north-west to south-east.\n2. The Kosi changes its course frequently because it flows over hard crystalline rock.\n3. The Subansiri, which rises in Tibet, is an antecedent river.\n4. The Damodar flows through a rift valley.\nHow many of the statements given above are correct?",
              options: ["Only one", "Only two", "Only three", "All four"],
              answer: 2,
              explain: "Apply the laws. 1: tilt (Law 1), correct. 2: wrong reason; the Kosi shifts because it dumps huge sediment on gentle plains and chokes its own channel; hard rock would hold a river in place. 3: NCERT calls the Subansiri antecedent, correct. 4: NCERT says the Damodar flows through a rift valley, correct, even though it flows east.",
              trap: "Statement 4 feels wrong if you learnt 'rift valley = west-flowing'. Statement 2 feels right because the Kosi really does shift; only its reason is false.",
              source: "Practice",
            },
          },
        ],
      },
    ],
  },
];
