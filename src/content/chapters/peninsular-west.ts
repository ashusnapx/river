import type { Chapter } from "../types";

export const peninsularWestChapters: Chapter[] = [
  {
    id: "peninsular-west",
    number: 8,
    system: "peninsular-west",
    title: "West-flowing rivers — rifts, estuaries and the Western Ghats",
    hindiTitle: "पश्चिम-वाहिनी नदियाँ",
    subtitle: "Why a few Peninsular rivers break the eastward rule, why none of them builds a delta, and how the Ghats shape the short coastal rivers.",
    minutes: 40,
    outcomes: [
      "Explain why the Narmada and Tapi flow west (rift troughs), not because the land slopes west.",
      "Explain why west-flowing rivers end in estuaries, not deltas.",
      "Trace the Narmada, Tapi, Sabarmati, Mahi and Luni from source to mouth with their key dams and places.",
      "Prove why the Mahi crosses the Tropic of Cancer twice and why the Luni never reaches the sea.",
      "Pair Western Ghats rivers with their falls, ports, power plants and disputes (Jog, Kaiga, Mormugao, Mhadei, Mullaperiyar).",
    ],
    steps: [
      // 1
      {
        id: "odd-ones-out",
        title: "Why only a few rivers run west",
        blocks: [
          {
            type: "say",
            text: "Look at the Peninsula. The Mahanadi, Godavari, Krishna and Kaveri all run east to the Bay of Bengal. Only the [[narmada]], the [[tapi]] and a fringe of short coastal rivers run west to the Arabian Sea.",
          },
          { type: "sketch", id: "slope-of-india", caption: "The Peninsular block tilts from north-west to south-east, so most rivers run east." },
          {
            type: "why",
            q: "Why do the big Peninsular rivers flow east?",
            a: "NCERT gives two causes. ++The Peninsular block tilted slightly from north-west to south-east++. And ++the Western Ghats rise close to the west coast++, so they act as the water divide: rain east of the Ghats gets a long, gentle road to the Bay, rain west of them only a short, steep drop to the sea.",
          },
          { type: "sketch", id: "water-divide", caption: "The Western Ghats split the rain: a long road east, a short drop west." },
          {
            type: "law",
            title: "77 : 23",
            text: "About ==77 per cent== of India's drainage area drains to the Bay of Bengal and ==23 per cent== to the Arabian Sea (NCERT). The Arabian Sea share: the Indus, Narmada, Tapi, Mahi and Periyar systems.",
          },
          {
            type: "check",
            q: {
              id: "pw-q-arabian-share",
              prompt: "Which of the following river systems drain into the **Arabian Sea**?\n1. Mahi\n2. Periyar\n3. Mahanadi\n4. Tapi\nSelect the correct answer using the code given below.",
              options: ["1 and 4 only", "1, 2 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4"],
              answer: 1,
              explain:
                "NCERT lists the Indus, Narmada, Tapi, Mahi and Periyar systems as Arabian Sea drainage. ++The Mahanadi rises east of the Ghats divide and follows the eastward tilt++ to the Bay of Bengal. So 1, 2 and 4.",
              trap: "Periyar is easy to drop because it is small. ++It rises on the western face of the Ghats in Kerala++, so it can only go west.",
              source: "Practice",
            },
          },
        ],
      },
      // 2
      {
        id: "rift-valleys",
        title: "Narmada and Tapi: rivers in cracks",
        blocks: [
          {
            type: "say",
            text: "The Narmada and Tapi are big rivers, yet they break the eastward rule. The cause is a crack in the plateau, not the slope of the plateau.",
          },
          {
            type: "sketch",
            id: "rift-valley",
            caption: "Narmada between Vindhya and Satpura; Tapi between Satpura and the Ajanta–Satmala hills. Each runs on the floor of a sunken block.",
          },
          {
            type: "why",
            q: "How did the troughs form?",
            a: "NCERT: when the Himalayas rose, ++the northern flank of the Peninsular block subsided and broke along trough faults++. The Narmada and Tapi occupy these troughs. ++A river must follow the floor of its trough, and these floors slope west++, so both rivers flow west whatever the rest of the plateau does.",
          },
          {
            type: "law",
            title: "Rift rule",
            text: "A rift river follows **its trough**, not the regional tilt. Narmada: Vindhya (north) and Satpura (south). Tapi: Satpura (north) and Ajanta–Satmala (south).",
          },
          {
            type: "trap",
            wrong: "The land of central India slopes west, so the Narmada flows west.",
            right: "The plateau tilts east overall; the Narmada flows west only because its rift trough slopes west.",
            why: "++If the land itself sloped west, the Godavari and Krishna would flow west too++.",
          },
          {
            type: "trap",
            wrong: "Every rift-valley river flows west.",
            right: "The [[damodar]] also flows in a rift valley, but east to the Hugli.",
            why: "++Direction is set by the slope of the trough floor, not by the fact of being a rift++.",
          },
          {
            type: "remember",
            hook: "Satpura is the common wall: Narmada to its north, Tapi to its south.",
            logic: "++Both troughs lie on either side of one block mountain++. Fix the Satpura and the outer walls follow: Vindhya above, Ajanta–Satmala below.",
          },
          {
            type: "check",
            q: {
              id: "pw-q-narmada-west",
              prompt:
                "The Narmada flows to the west, while most other large Peninsular rivers flow to the east. Why?\n1. It occupies a linear rift valley.\n2. It rises on the eastern flank of the Amarkantak plateau.\n3. The land of central India slopes to the west.\nSelect the correct answer using the code given below.",
              options: ["1 only", "1 and 2 only", "1 and 3 only", "1, 2 and 3"],
              answer: 0,
              explain:
                "Statement 1 is the cause: ++the river follows a west-sloping trough fault++. Statement 2 is false: NCERT says it rises on the ==western== flank. Statement 3 is false: ++the Peninsula tilts from north-west to south-east++, which is why the Godavari and Krishna run east.",
              trap: "Statement 3 sounds like a neat reason. ++A westward slope would turn every Deccan river west++, which the map refutes.",
              source: "Practice (pattern of UPSC CSE Prelims 2013)",
            },
          },
        ],
      },
      // 3
      {
        id: "estuary-not-delta",
        title: "Why they end in estuaries, not deltas",
        blocks: [
          {
            type: "say",
            text: "The Godavari and Krishna build fat deltas. The Narmada and Tapi end in open funnels of tidal water: **estuaries**. The Narmada's is about 27 km long (NCERT).",
          },
          {
            type: "sketch",
            id: "delta-vs-estuary",
            caption: "Slow, silt-heavy river on a broad plain → delta. Fast, low-silt river in hard rock with strong tides → estuary.",
          },
          {
            type: "why",
            q: "Why no delta at the Narmada or Tapi mouth?",
            a: "Four causes stack up. (1) NCERT: ++they flow in trough faults and fill the original cracks with their own detritus++, so little silt is left for the mouth. (2) ++They run fast over hard rock++, which yields little load. (3) ++The Gulf of Khambhat has among the highest tides on India's coast++, which sweep the mouth clean. (4) ++The west coast is a narrow, submerged coastal plain++ (NCERT), with no broad low platform to build on.",
          },
          {
            type: "compare",
            title: "East-flowing vs west-flowing mouths",
            columns: ["Feature", "East-flowing (Godavari, Krishna)", "West-flowing (Narmada, Tapi)"],
            rows: [
              ["Course", "Long, over a gentle tilted plateau", "Confined to a narrow fault trough"],
              ["Silt reaching the mouth", "Heavy", "Little: much is dropped inside the trough"],
              ["Coast (NCERT)", "Emergent, broad plain", "Submerged, narrow plain"],
              ["Tides at the mouth", "Cannot clear the silt", "Very strong in the Gulf of Khambhat"],
              ["Result", "==Delta==", "==Estuary=="],
            ],
          },
          {
            type: "law",
            title: "Estuary recipe",
            text: "Fast flow, hard rock, low silt, strong tides, narrow coast: the mouth stays an ==estuary==. NCERT adds that the rivers of the western coastal plain ==do not form any delta==.",
          },
          {
            type: "check",
            q: {
              id: "pw-q-estuary",
              prompt:
                "Consider the following statements about the Narmada and the Tapi:\n1. Both flow in trough faults and deposit much of their load within the troughs.\n2. Both form large deltas in the Gulf of Khambhat.\n3. Strong tides at their mouths prevent sediment from building up.\nWhich of the statements given above is/are correct?",
              options: ["1 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
              answer: 1,
              explain:
                "1 is NCERT's own reason: ++they fill the original cracks with their detritus++. 3 is the tidal half of the story. 2 is false: ++with little silt reaching the mouth and strong tidal scour++, both end in estuaries.",
              trap: "‘Large river means delta’ is the reflex. ++Deltas need silt to arrive and stay++; here neither happens.",
              source: "Practice",
            },
          },
        ],
      },
      // 4
      {
        id: "narmada-journey",
        title: "The Narmada, source to sea",
        blocks: [
          {
            type: "map",
            focus: ["narmada", "tawa"],
            caption: "Trace the Narmada from Amarkantak to the Gulf of Khambhat; watch the Tawa come in from the Satpura side.",
            trace: true,
          },
          {
            type: "say",
            text: "Downstream order: **Amarkantak** (source, Anuppur district, MP) → **Kapildhara** and **Dudhdhara** falls → Mandla → **Bargi dam** → **Marble Rocks** at Bhedaghat and **Dhuandhar** falls near Jabalpur → [[tawa]] joins near Narmadapuram → **Indira Sagar** and **Omkareshwar** dams (Khandwa) → MP–Maharashtra and Maharashtra–Gujarat border stretches → **Sardar Sarovar** (Kevadia, Gujarat) → Bharuch → Gulf of Khambhat.",
          },
          {
            type: "why",
            q: "Why do rivers part ways at Amarkantak?",
            a: "++Amarkantak is a high plateau standing above its surroundings++, so water runs off every side: the Narmada west, the [[son]] north-east to the Ganga. NCERT cites the rivers of the Amarkantak range as its example of a **radial** pattern.",
          },
          {
            type: "why",
            q: "Why are there falls so close to the source?",
            a: "++The infant river drops off the edge of the Amarkantak plateau++ (Kapildhara, Dudhdhara). Near Jabalpur ++it cuts down through bands of marble++, giving the Bhedaghat gorge and the Dhuandhar falls (NCERT).",
          },
          {
            type: "trap",
            wrong: "Dhuandhar falls lies in the Malwa region.",
            right: "It lies near Jabalpur, in the upper Narmada valley.",
            why: "++Malwa is the plateau around Indore and Ujjain, north of the Vindhyas++. UPSC 2024 broke a ‘Dhuandhar–Malwa–Narmada’ row on this one word.",
          },
          {
            type: "remember",
            hook: "Born at Amarkantak, falls twice (Kapildhara, Dudhdhara), turns to ‘smoke’ at Dhuandhar between marble walls.",
            logic: "++It follows the river's own downstream order++. Dhuandhar means ‘smoke-stream’ because the spray rises like smoke (a name hook).",
          },
          {
            type: "check",
            q: {
              id: "pw-q-narmada-order",
              prompt: "Arrange the following places on the Narmada from source to mouth:\n1. Omkareshwar\n2. Bhedaghat\n3. Kevadia (Sardar Sarovar)\n4. Amarkantak\nSelect the correct answer using the code given below.",
              options: ["4-2-1-3", "4-1-2-3", "2-4-1-3", "4-2-3-1"],
              answer: 0,
              explain:
                "Walk downstream. ++The source is on the eastern Amarkantak plateau++; Jabalpur's Bhedaghat comes next in the upper valley; Omkareshwar is in Khandwa district further west; Sardar Sarovar is in Gujarat, the last big dam before the estuary.",
              trap: "4-1-2-3 tempts those who know Omkareshwar is famous. ++Jabalpur lies east of Khandwa++, so Bhedaghat must come first.",
              source: "Practice",
            },
          },
        ],
      },
      // 5
      {
        id: "narmada-dams",
        title: "Narmada: dams, tribunal and protest",
        blocks: [
          { type: "spine", river: "narmada", caption: "The Narmada spine: the Tawa, its largest tributary, joins from the left (Satpura) bank." },
          {
            type: "say",
            text: "NCERT Class 9: all the Narmada's tributaries are ==very short== and most join at right angles. ++A rift is narrow with steep walls++, so side streams run straight down into the main river.",
          },
          {
            type: "why",
            q: "Why did one river need a tribunal?",
            a: "++Madhya Pradesh holds most of the catchment, while Gujarat holds the lower valley and the driest land++, and Maharashtra and Rajasthan also claimed a share. The **Narmada Water Disputes Tribunal** (set up 1969, award 1979) divided the water and power among the four states.",
          },
          {
            type: "say",
            text: "The **Sardar Sarovar dam** at Kevadia (Narmada district, Gujarat) carries canal water to Saurashtra, Kachchh, north Gujarat and Rajasthan. The **Narmada Bachao Andolan** (from 1985, led by Medha Patkar) fought for the people it displaced. ++A high dam in a narrow, peopled valley drowns villages and forests upstream++. In 2000 the Supreme Court let construction continue subject to resettlement; the dam was inaugurated on 17 September 2017.",
          },
          {
            type: "say",
            text: "Current-affairs hooks: the 182 m **Statue of Unity** (31 October 2018) stands on Sadhu Bet, a Narmada island just below Sardar Sarovar. A **600 MW floating solar park** is being built on the Omkareshwar reservoir; its first units were commissioned in 2024.",
          },
          {
            type: "check",
            q: {
              id: "pw-q-narmada-dams",
              prompt:
                "Consider the following statements:\n1. The Sardar Sarovar dam is located in Gujarat but its benefits are shared with Madhya Pradesh, Maharashtra and Rajasthan.\n2. The Statue of Unity stands on an island in the Narmada.\n3. The Omkareshwar floating solar park is on the Tapi.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 0,
              explain:
                "1: ++the 1979 tribunal award shared Narmada water and power among four states++. 2: Sadhu Bet is a Narmada island below the dam. 3 is false: ++Omkareshwar is a Narmada dam in Khandwa district++, MP.",
              trap: "Statement 3 swaps a river name. ++Both rivers have big MP dams, but Omkareshwar is on the Narmada++.",
              source: "Practice",
            },
          },
        ],
      },
      // 6
      {
        id: "tapi",
        title: "The Tapi and its two southern feeders",
        blocks: [
          {
            type: "map",
            focus: ["tapi", "purna", "girna"],
            caption: "Trace the Tapi from Multai to Surat; the Purna and Girna both come in from the south.",
            trace: true,
          },
          { type: "spine", river: "tapi", caption: "The Tapi spine: Purna first, then Girna, both on the left bank." },
          {
            type: "say",
            text: "The Tapi rises at **Multai**, Betul district, MP (NCERT). It runs west past Burhanpur into Khandesh; the [[purna]] joins at Changdev and the [[girna]] in Jalgaon district. In Gujarat come the **Ukai dam** and the **Kakrapar weir**, then Surat and the Gulf of Khambhat. Length 724 km; ==79 per cent== of the basin is in Maharashtra (NCERT).",
          },
          {
            type: "why",
            q: "Why do the Tapi's two big tributaries both join from the left?",
            a: "Bank rule: face downstream. ++The Tapi flows west, so your left hand points south++. The Purna and Girna drain the broad Maharashtra plateau south of the river, so both are left-bank. ++That same southern catchment is why most of the basin lies in Maharashtra++.",
          },
          {
            type: "trap",
            wrong: "The Tapi rises at Amarkantak.",
            right: "It rises at **Multai**, Betul district, MP.",
            why: "++Amarkantak belongs to the Narmada (and the Son)++. Hook: Multai is traditionally read as ‘Mul-Tapi’, the origin of the Tapi.",
          },
          {
            type: "trap",
            wrong: "The Purna that joins the Tapi is the Purna of the Godavari.",
            right: "They are two different rivers with the same name.",
            why: "++‘Purna’ (full) is a common river name++; always read the parent in the question.",
          },
          {
            type: "check",
            q: {
              id: "pw-q-tapi",
              prompt:
                "Consider the following statements about the Tapi:\n1. It rises at Multai in the Betul district of Madhya Pradesh.\n2. It flows between the Satpura range and the Ajanta–Satmala hills.\n3. The Purna and the Girna join it on its right bank.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 0,
              explain:
                "1 is NCERT. 2 is the trough: Satpura north, Ajanta and Satmala south (India-WRIS). 3 is false: ++both come from the south, and for a west-flowing river south is the left bank++.",
              trap: "Statement 3 tempts anyone who names banks from the map's left. ++Banks are named facing downstream++, not facing north.",
              source: "Practice",
            },
          },
        ],
      },
      // 7
      {
        id: "gujarat-pair",
        title: "Sabarmati and Mahi: the Gujarat pair",
        blocks: [
          {
            type: "map",
            focus: ["sabarmati", "mahi"],
            caption: "Trace the Sabarmati south-west from the Aravallis, then follow the Mahi's U-shaped loop.",
            trace: true,
          },
          {
            type: "say",
            text: "The [[sabarmati]] rises in the Aravalli hills of Udaipur district, **Rajasthan**, passes Dharoi dam, Gandhinagar and Ahmedabad (Sabarmati Ashram, from where the Dandi March began on 12 March 1930) and enters the Gulf of Khambhat. ++Its semi-arid basin gives only seasonal flow++, so Ahmedabad's riverfront is topped up with Narmada canal water.",
          },
          {
            type: "say",
            text: "All four big Gujarat rivers end in the ==Gulf of Khambhat==: the Sabarmati, Mahi, Narmada and Tapi. ++The Gulf occupies the low, sunken Cambay basin between Saurashtra and mainland Gujarat++.",
          },
          {
            type: "why",
            q: "Why does the [[mahi]] cross the Tropic of Cancer twice?",
            a: "It rises in Dhar district, MP, ++on the north-facing slope of the Vindhyas, south of the Tropic++. It flows north into Rajasthan (Mahi Bajaj Sagar dam near Banswara), crossing the line. Then it loops west and south-west to the Gulf of Khambhat, ++which also lies south of the Tropic++, so it must cross back. Start south, end south, loop north: ==two crossings==.",
          },
          {
            type: "law",
            title: "Line-crossing rule",
            text: "If a river's source and mouth lie on the **same side** of a line, it crosses the line an even number of times (0, 2…). If they lie on **opposite sides**, an odd number (1, 3…). Mahi: both ends south, loop north, so twice. Sabarmati: source north of the Tropic, mouth south of it, so an odd number (once).",
          },
          {
            type: "trap",
            wrong: "The Mahi crosses the Tropic of Cancer once.",
            right: "It crosses it **twice**.",
            why: "++One crossing would leave its mouth north of the Tropic++, but the Gulf of Khambhat lies south of it.",
          },
          {
            type: "check",
            q: {
              id: "pw-q-mahi",
              prompt:
                "With reference to the Mahi river, consider the following statements:\n1. It rises in the Vindhyas of Madhya Pradesh.\n2. It crosses the Tropic of Cancer twice.\n3. It drains into the Gulf of Kachchh.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 0,
              explain:
                "1: it rises near Bhopawar in Dhar district on the Vindhyas' northern slope. 2: ++both ends lie south of the Tropic and the loop runs north of it++. 3 is false: like the Sabarmati, Narmada and Tapi, it ends in the Gulf of ==Khambhat==.",
              trap: "Kachchh and Khambhat are both Gujarat gulfs. ++The Gulf of Kachchh lies north of Saurashtra, beside the Rann++; the big mainland rivers go to Khambhat.",
              source: "Practice",
            },
          },
        ],
      },
      // 8
      {
        id: "luni",
        title: "Luni: the river that never reaches the sea",
        blocks: [
          {
            type: "map",
            focus: ["luni"],
            caption: "Trace the Luni from Pushkar in the Aravallis to the Rann of Kachchh, where it simply ends.",
            trace: true,
          },
          {
            type: "say",
            text: "NCERT: the Luni is the largest river system of Rajasthan west of the Aravallis. It rises near **Pushkar** in two branches, the Saraswati and the Sabarmati, which join at Govindgarh. It flows west to Telwara, then south-west to the **Rann of Kachchh**. The whole system is ==ephemeral==.",
          },
          {
            type: "why",
            q: "Why is it sweet upstream but salty after Balotra?",
            a: "++It crosses salt-rich arid soils, and fierce evaporation concentrates the salt as the water thins out++. Textile effluents around Balotra add to it. Hence its Sanskrit name **Lavanavari**, ‘salt river’ (lavana = salt).",
          },
          {
            type: "why",
            q: "Why does it never reach the sea, and why do most tributaries join from the left?",
            a: "++Low rain and high evaporation leave too little water, and the flat Rann gives no slope onward++, so it ends in the marsh: **inland drainage**. Face downstream (south-west): ++your left hand points to the Aravallis, which catch the rain; your right points to the dry Thar++. So the Jawai, Sukri and Bandi join from the left.",
          },
          {
            type: "trap",
            wrong: "The Luni drains into the Arabian Sea.",
            right: "It ends in the **Rann of Kachchh**.",
            why: "++Its water evaporates in the salt marsh before any channel can reach the sea++.",
          },
          {
            type: "check",
            q: {
              id: "pw-q-luni",
              prompt:
                "Consider the following statements about the Luni river:\n1. It originates near Pushkar in the Aravalli range.\n2. Its water turns saline downstream of Balotra.\n3. It drains into the Arabian Sea through the Gulf of Kachchh.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 0,
              explain:
                "1 is NCERT. 2: ++salt-rich soils and evaporation++ turn it saline below Balotra. 3 is false: ++it is a case of inland drainage++, ending in the Rann of Kachchh.",
              trap: "The Rann lies beside the Gulf of Kachchh, so ‘reaches the sea’ sounds plausible. ++The Rann is a salt marsh, not an open channel++.",
              source: "Practice",
            },
          },
        ],
      },
      // 9
      {
        id: "ghats-rivers",
        title: "Western Ghats rivers: short, swift, falling",
        blocks: [
          {
            type: "say",
            text: "South of the Tapi, dozens of short rivers drop off the Western Ghats to the Arabian Sea: the Sharavati, Kali, Netravati, Mandovi, Zuari, Periyar, Bharathapuzha, Pamba and many more.",
          },
          {
            type: "why",
            q: "Why are they short, swift and full of waterfalls?",
            a: "++The Ghats stand close to the sea and fall steeply to it++ (NCERT), so the rivers have a short, steep path. ++The south-west monsoon dumps very heavy rain on the windward slope++, so they swell fast in June–September and shrink in summer. ++Where a river crosses the scarp, it falls++: Jog on the Sharavati, Dudhsagar on the Mandovi.",
          },
          {
            type: "why",
            q: "Why are they so good for hydro-power?",
            a: "Power needs head and water. ++The scarp gives a big drop, and the monsoon fills the reservoirs++: Linganamakki (Sharavati), Supa and Kadra (Kali), Idukki (Periyar). Even the east-flowing [[koyna]] is sent west through tunnels so its water can drop down the scarp to a power house in the Konkan.",
          },
          {
            type: "compare",
            title: "Western Ghats rivers vs big east-flowing rivers",
            columns: ["Feature", "West-flowing (Ghats)", "East-flowing (Godavari, Krishna, Kaveri)"],
            rows: [
              ["Length", "Short", "Long"],
              ["Gradient", "Steep", "Gentle"],
              ["Waterfalls", "Many, at the scarp", "Few"],
              ["Mouth", "Estuary, no delta (NCERT)", "Large delta"],
              ["Coast (NCERT)", "Submerged, narrow; natural ports", "Emergent, broad; few natural ports"],
              ["Best use", "Hydro-power", "Irrigation of delta plains"],
            ],
          },
          {
            type: "law",
            title: "Submerged coast, drowned mouths",
            text: "NCERT: the western coastal plain is a **submerged** coast. ++Drowned river mouths give deep, sheltered water++, which is why NCERT's natural ports (Kandla, Mazagaon, JNPT Nhava Sheva, Marmagao, Mangalore, Cochin) line the west coast.",
          },
          {
            type: "check",
            q: {
              id: "pw-q-ghats",
              prompt:
                "Consider the following statements about the west-flowing rivers of the Western Ghats:\n1. They are short and swift because the Ghats lie close to the coast.\n2. They form large deltas because of heavy monsoon rainfall.\n3. Their steep fall makes them suitable for hydro-electric power.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
              answer: 1,
              explain:
                "1 and 3 follow from one cause: ++a steep scarp close to the sea++. 2 is false: NCERT says the rivers of the western coastal plain do not form any delta; ++heavy rain cannot build a delta on a short, steep, submerged coast++.",
              trap: "‘Heavy rain means heavy silt means delta’ sounds logical. ++A delta also needs a gentle slope and a broad platform++, which the west coast lacks.",
              source: "Practice",
            },
          },
        ],
      },
      // 10
      {
        id: "karnataka",
        title: "Karnataka's coast: Sharavati, Kali, Netravati",
        blocks: [
          {
            type: "map",
            focus: ["kali", "sharavati", "netravati"],
            caption: "North to south: Kali (Karwar), Sharavati (Honnavar), Netravati (Mangaluru).",
            trace: true,
          },
          {
            type: "say",
            text: "[[sharavati]]: rises at Ambutirtha (Shivamogga), stored at **Linganamakki**, falls about 253 m at ==Jog (Gersoppa) Falls== in four cascades (Raja, Rani, Roarer, Rocket), reaches the sea at Honnavar. ++Jog roars only in the monsoon++ because the river is rain-fed and Linganamakki holds back the dry-season flow.",
          },
          {
            type: "say",
            text: "[[kali]] (Kalinadi): rises in Joida taluk, Uttara Kannada; Supa and Kadra dams; the **Kaiga** atomic power station uses its water; meets the sea at Karwar. [[netravati]]: rises in the Kudremukh range; flows past Dharmasthala; the Kumaradhara joins at Uppinangady; meets the sea at **Mangaluru**.",
          },
          {
            type: "trap",
            wrong: "Jog (Gersoppa) Falls is on the Kali, or on the Netravati.",
            right: "Jog (Gersoppa) Falls is on the **Sharavati**.",
            why: "UPSC 2024 used ‘Gersoppa–Western Ghats–Netravati’ as the wrong row. ++Jog is in Shivamogga, where the Sharavati crosses the scarp++.",
          },
          {
            type: "trap",
            wrong: "The Kali at Karwar is the Kali of the India–Nepal border.",
            right: "Different rivers: the Karnataka Kali (Arabian Sea) and the [[sarda|Sarda/Kali]] (Ganga system).",
            why: "++‘Kali’ (black) is a common river name++; read the state or sea in the question.",
          },
          {
            type: "check",
            q: {
              id: "pw-q-falls",
              prompt:
                "Consider the following pairs:\nWaterfall — River\n1. Jog — Sharavati\n2. Dhuandhar — Narmada\n3. Dudhsagar — Mandovi\n4. Gersoppa — Netravati\nHow many of the above pairs are correctly matched?",
              options: ["Only one", "Only two", "Only three", "All four"],
              answer: 2,
              explain:
                "Jog is the Sharavati crossing the scarp; Dhuandhar is the Narmada near Jabalpur; Dudhsagar is the Mandovi dropping off the Ghats on the Goa–Karnataka border. ++Gersoppa is just another name for Jog++, so pair 4 contradicts pair 1. Three are correct.",
              trap: "Pair 4 fooled many in UPSC 2024. ++If you know Gersoppa = Jog, pair 4 dies at once++.",
              source: "Practice (pattern of UPSC CSE Prelims 2024)",
            },
          },
        ],
      },
      // 11
      {
        id: "goa",
        title: "Goa: Mandovi, Zuari and the Mhadei dispute",
        blocks: [
          {
            type: "map",
            focus: ["mandovi", "zuari"],
            caption: "The Mandovi rises at Bhimgad in Karnataka and widens into Goa's estuary at Panaji; the Zuari opens into Mormugao bay.",
            trace: true,
          },
          {
            type: "say",
            text: "[[mandovi]] (Mahadayi/Mhadei): rises from springs at Bhimgad, Belagavi district, Karnataka; drops at **Dudhsagar** falls; most of its basin is in Goa; meets the sea at Panaji. [[zuari]]: Goa's harbour river, opening into **Mormugao** bay. The **Cumbarjua canal** joins the two estuaries so that iron-ore barges can use either.",
          },
          {
            type: "why",
            q: "Why is there a Mhadei water dispute?",
            a: "++The drought-prone [[malaprabha]] basin (Krishna system) lies just east of the divide, while the rain-rich Mahadayi spills west to Goa++. Karnataka's **Kalasa–Banduri** project would dam small upper streams and send water across the watershed for drinking water in north Karnataka. Goa objects ++because less fresh water means salt water creeping further up its estuary and harm to upstream forests and wildlife++.",
          },
          {
            type: "say",
            text: "Timeline: the Mahadayi Water Disputes Tribunal awarded shares in **August 2018** (Goa 24 TMC, Karnataka 13.42 TMC of which 5.4 for consumptive use, Maharashtra 1.33 TMC). The award was notified in the Gazette in **February 2020**; appeals were filed in the Supreme Court. The CWC approved Karnataka's Kalasa–Banduri DPR on **29 December 2022**, and in **2023** the Centre set up **PRAWAH** to implement the award.",
          },
          {
            type: "check",
            q: {
              id: "pw-q-mhadei",
              prompt: "The Kalasa–Banduri project seeks to divert water from the Mahadayi (Mhadei) river into the basin of which river?",
              options: ["Tungabhadra", "Malaprabha", "Bhima", "Kali"],
              answer: 1,
              explain:
                "++The Kalasa and Banduri streams sit right at the divide above the Malaprabha valley++, a Krishna tributary in drought-prone north Karnataka. A short link tips them east into the Malaprabha.",
              trap: "Tungabhadra is the famous Karnataka river, but ++it lies far south of Belagavi++; Kali is itself west-flowing, so diverting into it would not move water east.",
              source: "Practice",
            },
          },
        ],
      },
      // 12
      {
        id: "kerala",
        title: "Kerala: Periyar, Bharathapuzha, Pamba and the kayals",
        blocks: [
          {
            type: "map",
            focus: ["bharathapuzha", "periyar", "pamba"],
            caption: "Bharathapuzha through the Palakkad Gap; Periyar from the Idukki hills to Kochi; Pamba from Sabarimala to Vembanad.",
            trace: true,
          },
          {
            type: "say",
            text: "[[periyar]]: Kerala's ==longest river== (244 km, India-WRIS) and its perennial ‘lifeline’. Mullaperiyar dam (1895) forms the Thekkady lake; the **Idukki arch dam** makes it Kerala's biggest hydel river; it reaches the Vembanad–Kochi backwaters and the sea. [[bharathapuzha]] (Nila): shorter (about 209 km) but Kerala's largest basin, ++because it flows through the Palakkad Gap and collects water from the Tamil Nadu side too++. [[pamba]]: Sabarimala's river, ending in Vembanad lake.",
          },
          {
            type: "why",
            q: "Why is Mullaperiyar a Kerala–Tamil Nadu dispute?",
            a: "The dam stands in **Idukki, Kerala**, but ++an 1886 lease let the Madras side divert its water east through a tunnel into the [[vaigai]] basin++ (NCERT's ‘Periyar Diversion Scheme’), so **Tamil Nadu** operates it. Kerala fears for the safety of a 19th-century masonry dam above populated valleys; Tamil Nadu depends on the water. In 2014 the Supreme Court allowed a level of 142 ft and set up a supervisory committee; Kerala still presses for a new dam.",
          },
          {
            type: "why",
            q: "Why does the Kerala coast have kayals (backwaters)?",
            a: "NCERT notes the Malabar coast's distinctive **kayals**, used for fishing, inland navigation and tourism (the Nehru Trophy boat race is held in Punnamada Kayal). ++Waves and longshore currents pile sand into bars parallel to the shore, and the many short monsoon-fed rivers pond up behind them++. Vembanad, India's longest lake, is the biggest of these (Vembanad-Kol Ramsar site, 2002).",
          },
          {
            type: "trap",
            wrong: "The Bharathapuzha is the longest river of Kerala.",
            right: "By length the **Periyar** (244 km) is longest; the Bharathapuzha (about 209 km) has the larger basin.",
            why: "++‘Longest’ tests length, ‘largest’ tests basin area++. Some older books blur the two.",
          },
          {
            type: "check",
            q: {
              id: "pw-q-mullaperiyar",
              prompt:
                "Consider the following statements about the Mullaperiyar dam:\n1. It is located in Kerala but operated by Tamil Nadu.\n2. Its water is diverted to the Vaigai basin.\n3. It is built on the Pamba river.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 0,
              explain:
                "1 and 2 are two halves of one story: ++the dam is in Idukki, but its water goes east through a tunnel to the Vaigai, so Tamil Nadu runs it++. 3 is false: it stands at the Mullayar–Periyar confluence, on the **Periyar**.",
              trap: "Pamba is tempting because both rivers rise in Idukki's hills. ++The Pamba flows west to Vembanad; the diverted river is the Periyar++.",
              source: "Practice",
            },
          },
        ],
      },
      // 13
      {
        id: "revise",
        title: "One-page revision and mixed test",
        blocks: [
          {
            type: "compare",
            title: "West-flowing rivers at a glance",
            columns: ["River", "Source", "Mouth", "Lock it with"],
            rows: [
              ["Narmada", "Amarkantak (MP)", "Estuary, Gulf of Khambhat (Bharuch)", "Rift between Vindhya and Satpura; Dhuandhar; Sardar Sarovar"],
              ["Tapi", "Multai, Betul (MP)", "Estuary, Gulf of Khambhat (Surat)", "Rift between Satpura and Ajanta–Satmala; Ukai, Kakrapar"],
              ["Sabarmati", "Aravallis, Udaipur (Rajasthan)", "Gulf of Khambhat", "Ahmedabad, Sabarmati Ashram"],
              ["Mahi", "Vindhyas, Dhar (MP)", "Gulf of Khambhat", "Crosses the Tropic twice; Mahi Bajaj Sagar"],
              ["Luni", "Near Pushkar (Rajasthan)", "Rann of Kachchh (inland)", "Saline after Balotra; ephemeral"],
              ["Mandovi", "Bhimgad (Karnataka)", "Panaji (Goa)", "Dudhsagar; Mhadei dispute"],
              ["Zuari", "Western Ghats (Goa)", "Mormugao bay", "Port; Cumbarjua canal"],
              ["Kali", "Joida (Karnataka)", "Karwar", "Kaiga atomic plant"],
              ["Sharavati", "Ambutirtha, Shivamogga", "Honnavar", "Jog (Gersoppa) Falls"],
              ["Netravati", "Kudremukh range", "Mangaluru", "Not Gersoppa"],
              ["Bharathapuzha", "Anamalai hills (TN)", "Ponnani", "Palakkad Gap; largest Kerala basin"],
              ["Periyar", "Sivagiri hills, Idukki", "Kochi backwaters", "Longest in Kerala; Mullaperiyar, Idukki"],
              ["Pamba", "Peerumedu plateau, Idukki", "Vembanad lake", "Sabarimala; Kuttanad"],
            ],
          },
          {
            type: "remember",
            hook: "Down the coast: Gujarat's four end in Khambhat, then Goa's two, Karnataka's three (Kali, Sharavati, Netravati), Kerala's three (Bharathapuzha, Periyar, Pamba).",
            logic: "++It follows the coastline north to south++, so a map in your head answers any ‘arrange from north to south’ question.",
          },
          {
            type: "check",
            q: {
              id: "pw-q-coast-order",
              prompt: "Arrange the following rivers by the points where they reach the sea (or its backwaters), from north to south:\n1. Kali\n2. Periyar\n3. Tapi\n4. Netravati\nSelect the correct answer using the code given below.",
              options: ["3-1-4-2", "3-4-1-2", "1-3-4-2", "3-1-2-4"],
              answer: 0,
              explain:
                "Walk down the coast. ++Surat (Tapi) is in Gujarat, Karwar (Kali) at the Goa border, Mangaluru (Netravati) in south Karnataka, Kochi (Periyar) in central Kerala++. So 3-1-4-2.",
              trap: "3-4-1-2 swaps the Karnataka pair. ++Karwar sits just south of Goa; Mangaluru is near the Kerala border++.",
              source: "Practice",
            },
          },
          {
            type: "check",
            q: {
              id: "pw-q-nuclear",
              prompt:
                "Consider the following pairs:\nNuclear power station — River whose water it uses\n1. Kaiga — Kali\n2. Kakrapar — Tapi\n3. Tarapur — Narmada\nHow many of the above pairs are correctly matched?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain:
                "++Nuclear plants are sited beside large, assured water sources for cooling++. Kaiga uses the Kali and its Kadra reservoir; Kakrapar uses the Tapi's Ukai–Kakrapar system. Tarapur is on the Maharashtra coast, far south of the Narmada, so pair 3 is wrong.",
              trap: "Tarapur and the Narmada both sound ‘west Indian’. ++Tarapur lies on the Konkan coast north of Mumbai++, nowhere near the Narmada mouth.",
              source: "Practice",
            },
          },
          {
            type: "check",
            q: {
              id: "pw-q-kerala-pairs",
              prompt:
                "Consider the following pairs:\n1. Sabarimala — Pamba\n2. Idukki arch dam — Periyar\n3. Palakkad Gap — Bharathapuzha\nHow many of the above pairs are correctly matched?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 2,
              explain:
                "Pilgrims bathe in the Pamba before Sabarimala; ++the Periyar's deep Idukki gorge holds the arch dam++; ++the Bharathapuzha uses the Palakkad Gap to cross from Tamil Nadu into Kerala++. All three are correct.",
              trap: "Pair 2 makes people think of the Pamba because both rise in Idukki district. ++The dam is on the river that runs through the Idukki gorge: the Periyar++.",
              source: "Practice",
            },
          },
        ],
      },
    ],
  },
];
