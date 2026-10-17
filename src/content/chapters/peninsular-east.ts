import type { Chapter } from "../types";

export const peninsularEastChapters: Chapter[] = [
  // ═══════════════════════════ CHAPTER 6 ═══════════════════════════
  {
    id: "mahanadi-godavari",
    number: 6,
    system: "peninsular-east",
    title: "Mahanadi & Godavari — following the Deccan's tilt",
    hindiTitle: "महानदी और गोदावरी",
    subtitle:
      "Why the Deccan drains east, then the rivers of Chhattisgarh, Odisha, Vidarbha and the Godavari delta — plus the small rivers of Odisha and Jharkhand.",
    minutes: 45,
    outcomes: [
      "Explain, with NCERT's three geological events, why most peninsular rivers flow east and build deltas.",
      "Trace the Mahanadi from Sihawa to Paradip and place Hirakud, Satkosia and the delta.",
      "Draw the Godavari spine with every tributary on the correct bank, including the Penganga → Wardha → Pranhita chain.",
      "Tell Eastern Ghats rivers (Vamsadhara, Nagavali) from Chota Nagpur rivers (Brahmani, Subarnarekha) — the 2021 Prelims trap.",
      "Link current issues — Mahanadi tribunal, Polavaram, Kaleshwaram — to the geography that causes them.",
    ],
    steps: [
      {
        id: "why-east",
        title: "Why the Deccan's big rivers run to the Bay of Bengal",
        blocks: [
          {
            type: "say",
            text: "Look at the map. The [[godavari]] rises only about 80 km from the Arabian Sea, then walks about 1,465 km to the Bay of Bengal. The [[krishna]] and [[kaveri]] do the same. Of the major rivers, NCERT names only the [[narmada]] and [[tapi]] as west-flowing exceptions.",
          },
          {
            type: "why",
            q: "Why don't the big Deccan rivers take the short route west?",
            a: "Two causes work together. ++The Western Ghats run close to the west coast and act as the water divide++, so only short streams fall west. And ++the Peninsular block tilted slightly from north-west to south-east++, so the whole plateau slopes towards the Bay of Bengal.",
          },
          { type: "sketch", id: "slope-of-india", caption: "The Deccan tilts down to the east and south-east: rain on the plateau runs to the Bay of Bengal." },
          { type: "sketch", id: "water-divide", caption: "The Western Ghats crest splits the rain: a short steep fall west, a long gentle run east." },
          {
            type: "law",
            title: "NCERT's three events that shaped peninsular drainage",
            text: "(i) The **western flank** of the peninsula subsided below the sea in the early Tertiary, upsetting the old symmetrical drainage. (ii) When the Himalayas rose, the northern flank sagged and cracked into **trough faults** — the Narmada and Tapi valleys. (iii) A ==slight tilt of the block from north-west to south-east== turned the whole drainage towards the Bay of Bengal.",
          },
          {
            type: "remember",
            hook: "Wall in the west, slope to the east",
            logic: "The Ghats are the wall (water divide); the tilt is the slope. Wall + slope = east-flowing rivers. The two rift rivers (Narmada, Tapi) are the only big exceptions because a fault trough overrides the tilt.",
          },
          {
            type: "check",
            q: {
              id: "pe6-why-east",
              prompt:
                "Consider the following statements about why most large peninsular rivers flow east:\n1. The Western Ghats, close to the west coast, act as the main water divide.\n2. The Peninsular block was tilted slightly from north-west to south-east.\n3. The east coast receives more rainfall than the Western Ghats.\nHow many of the above statements give a correct reason?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain:
                "Test each as a **cause**. (1) The Ghats crest is the divide — true, NCERT. (2) The NW–SE tilt — true, NCERT's third event. (3) is false and irrelevant: ++direction comes from slope, not from where it rains++, and the Western Ghats are in fact far wetter than most of the east coast. So ==only two==.",
              trap: "Statement 3 sounds geographic. But rivers don't flow towards rain; they flow down slope.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "old-rivers",
        title: "Old, graded and seasonal",
        blocks: [
          {
            type: "say",
            text: "NCERT: the Peninsular drainage is **older** than the Himalayan one — you can see it in the ==broad, largely-graded shallow valleys== and the maturity of the rivers. They have a fixed course, few meanders and non-perennial flow.",
          },
          {
            type: "compare",
            title: "Himalayan vs Peninsular rivers",
            columns: ["Feature", "Himalayan", "Peninsular", "Reason"],
            rows: [
              ["Age", "Young, still cutting", "Old, mature", "++The Deccan is an ancient, stable block; the Himalayas are still rising++"],
              ["Valleys", "Deep gorges (antecedent)", "Broad, shallow, graded", "++Long erosion has smoothed the long profile++"],
              ["Water", "Perennial (snow + rain)", "Seasonal (rain only)", "++No glaciers on the plateau++"],
              ["Course", "Meanders, shifts (Kosi)", "Fixed course, few meanders", "++Hard rock channels and less silt++ keep them in place"],
              ["Mouth (east coast)", "Huge deltas", "Deltas too", "++Gentle east-coast plain++ lets them drop silt"],
            ],
          },
          { type: "sketch", id: "regime", caption: "Glacier + monsoon gives a perennial curve; monsoon alone gives a tall summer peak and a long dry trough." },
          {
            type: "trap",
            wrong: "Peninsular rivers, like the Kosi, often shift their course.",
            right: "Peninsular rivers have a **fixed course** with few meanders.",
            why: "The Kosi shifts because ++it dumps huge Himalayan silt on a flat alluvial plain++. Old plateau rivers run in rock-cut valleys carrying far less load.",
          },
        ],
      },
      {
        id: "delta-or-estuary",
        title: "Deltas on the east, estuaries on the west",
        blocks: [
          { type: "sketch", id: "delta-vs-estuary", caption: "Slow river + heavy silt + gentle shelf = delta. Fast river + little silt + tidal scour = estuary." },
          {
            type: "why",
            q: "Why do the Mahanadi, Godavari, Krishna and Kaveri build deltas, while the Narmada and Tapi do not?",
            a: "++The east-flowing rivers cross a long, gentle plateau and then a broad coastal plain++, so they slow down and drop silt. ++The Narmada and Tapi run fast through narrow rift troughs++ and, says NCERT, fill those cracks with their detritus — hence \"a lack of alluvial and deltaic deposits\".",
          },
          {
            type: "remember",
            hook: "Down the east coast: Mahanadi → Godavari → Krishna → Kaveri — all deltas",
            logic: "Read the coast north to south; every big east-flowing river ends in a delta because the east coast plain is broad and gentle.",
          },
          {
            type: "check",
            q: {
              id: "pe6-deltas",
              prompt: "Which one of the following rivers does NOT form a delta at its mouth?",
              options: ["Mahanadi", "Godavari", "Tapi", "Kaveri"],
              answer: 2,
              explain:
                "Ask \"how does it reach the sea?\". The Mahanadi, Godavari and Kaveri ++cross a broad, gentle east-coast plain++ and drop silt — deltas. The [[tapi]] ++runs fast in a rift trough to the Gulf of Khambhat++ and ends in an estuary. So ==Tapi==.",
              trap: "All four are \"peninsular rivers\"; only direction and the rift tell them apart.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "mahanadi-course",
        title: "The Mahanadi: Sihawa to Paradip",
        blocks: [
          {
            type: "map",
            focus: ["mahanadi", "seonath", "hasdeo", "ib", "tel"],
            caption: "Mahanadi from Sihawa: north into the Chhattisgarh basin, then east through Hirakud and the Satkosia gorge to the delta.",
            trace: true,
          },
          {
            type: "say",
            text: "The [[mahanadi]] rises near **Sihawa** (Chhattisgarh), runs north at first, turns east after the [[seonath]] joins, is held at **Hirakud** in Odisha, cuts the Satkosia gorge and spreads into a delta below Cuttack. NCERT: 851 km; basin about 1.42 lakh km², ==53% MP/Chhattisgarh, 47% Odisha==.",
          },
          {
            type: "why",
            q: "Why does the Mahanadi first flow north before turning east?",
            a: "++Its source lies on the southern rim of the saucer-shaped Chhattisgarh basin++. The young river first runs into the basin, then follows the basin's outlet eastward into Odisha.",
          },
          {
            type: "trap",
            wrong: "NCERT says Raipur, so Dhamtari must be wrong (or vice versa).",
            right: "Both describe **Sihawa**. NCERT's \"Raipur district\" is the old name; Sihawa is now in **Dhamtari** district.",
            why: "++Dhamtari was carved out of Raipur district++; districts change, hills do not. Anchor the fact as \"Sihawa, Chhattisgarh\".",
          },
          {
            type: "law",
            title: "Mahanadi banks",
            text: "Face downstream (east). **Left bank** (from the north, coal country): [[seonath]], [[hasdeo]], Mand, [[ib]]. **Right bank** (from the south, Odisha highlands): Jonk, Ong, [[tel]].",
          },
          {
            type: "check",
            q: {
              id: "pe6-mahanadi-tribs",
              prompt:
                "Consider the following pairs:\nTributary : Bank of the Mahanadi it joins\n1. Seonath : Left\n2. Tel : Right\n3. Ib : Right\nHow many of the above pairs are correctly matched?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain:
                "Face downstream (east) on the Mahanadi. The [[seonath]] comes from the west/north side of the basin — **left**, correct. The [[tel]] comes from southern Odisha — **right**, correct. The [[ib]] comes south from Jashpur into Hirakud — that is the north side, so **left**, not right. ==Only two==.",
              trap: "The Ib joins in Odisha, like the Tel, so students put both on the same bank. Bank depends on direction of arrival, not the state.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "hirakud-dispute",
        title: "Hirakud and the Mahanadi dispute",
        blocks: [
          {
            type: "say",
            text: "**Hirakud**, about 10 km from Sambalpur, is one of independent India's first big multipurpose projects (inaugurated 1957). With its dykes it runs about 25.8 km — among the ==longest earthen dams in the world==. Its reservoir became a **Ramsar site** in 2021.",
          },
          {
            type: "why",
            q: "Why was the dam placed at Hirakud?",
            a: "++The Mahanadi's monsoon floods devastated the Odisha delta++. A reservoir upstream of the gorge and delta can hold the flood peak and release it slowly — and the same water then irrigates and generates power.",
          },
          {
            type: "law",
            title: "The shape of every interstate river dispute",
            text: "Upstream state builds storage → downstream state loses lean-season flow → dispute. Article 262 lets Parliament provide for adjudication; the **Inter-State River Water Disputes Act, 1956** sets up tribunals. The **Mahanadi Water Disputes Tribunal** (Odisha vs Chhattisgarh) was constituted in ==March 2018==. Check its latest status before the exam.",
          },
          {
            type: "check",
            q: {
              id: "pe6-hirakud",
              prompt:
                "Consider the following statements:\n1. Hirakud dam is built across the Mahanadi in Chhattisgarh.\n2. Hirakud Reservoir is a Ramsar site.\n3. The Mahanadi Water Disputes Tribunal deals with a dispute between Odisha and Chhattisgarh.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 1,
              explain:
                "Hirakud exists ++to protect the Odisha delta++, so it sits in Odisha near Sambalpur — statement 1 is wrong. The reservoir was listed as a Ramsar site in 2021 — correct. The tribunal (2018) hears Odisha against upstream Chhattisgarh — correct. ==2 and 3 only==.",
              trap: "The Mahanadi rises in Chhattisgarh, so its big dam \"feels\" Chhattisgarhi. Ask whom the dam protects.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "broken-ghats",
        title: "The Eastern Ghats are a broken wall",
        blocks: [
          {
            type: "say",
            text: "Every big east-flowing river crosses the Eastern Ghats in a **gorge**: the Mahanadi at Satkosia, the Godavari in the Papi hills, the Krishna in the Nallamala at Srisailam, the [[pennar]] at Gandikota.",
          },
          {
            type: "why",
            q: "Why don't the Eastern Ghats stop these rivers, the way the Western Ghats stop rivers from going west?",
            a: "++The Eastern Ghats are old, worn down and broken into separate hill blocks++ — NCERT calls them discontinuous and dissected by rivers draining into the Bay of Bengal. A river that already flows east simply keeps cutting down through each block.",
          },
          {
            type: "compare",
            title: "Gorges through the Eastern Ghats (north to south)",
            columns: ["River", "Gorge", "Hills", "What's there now"],
            rows: [
              ["[[mahanadi]]", "Satkosia", "Eastern Ghats, Odisha", "Satkosia Tiger Reserve"],
              ["[[godavari]]", "Papikonda", "Papi hills, AP", "Papikonda National Park; Polavaram just below"],
              ["[[krishna]]", "Srisailam", "Nallamala hills", "Srisailam dam"],
              ["[[pennar]]", "Gandikota", "Erramala hills", "Gandikota fort and canyon (UPSC 2022)"],
            ],
          },
          {
            type: "remember",
            hook: "Satkosia, Papikonda, Srisailam, Gandikota — north to south",
            logic: "Same order as the rivers down the coast: Mahanadi, Godavari, Krishna, Pennar. Each river owns one gorge.",
          },
          {
            type: "check",
            q: {
              id: "pe6-gorges",
              prompt:
                "Consider the following pairs:\nGorge : River\n1. Satkosia : Mahanadi\n2. Papikonda : Krishna\n3. Gandikota : Pennar\nHow many of the above pairs are correctly matched?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain:
                "Run down the coast. Mahanadi → Satkosia (correct). Godavari → Papi hills/Papikonda, so pair 2 is wrong; the Krishna's gorge is in the Nallamala at Srisailam. Pennar → Gandikota (correct, UPSC 2022). ==Only two==.",
              trap: "Godavari and Krishna sit side by side in Andhra Pradesh; swap their gorges and you lose the mark.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "godavari-dakshin-ganga",
        title: "Godavari: the Dakshin Ganga",
        blocks: [
          {
            type: "map",
            focus: ["godavari", "manjira", "pranhita", "wardha", "wainganga", "penganga", "indravati", "sabari"],
            caption: "Godavari from Trimbakeshwar to the Konaseema delta; watch the big left-bank rivers arrive from the north-east.",
            trace: true,
          },
          {
            type: "say",
            text: "NCERT: the [[godavari]] is the ==largest Peninsular river system==, also called the **Dakshin Ganga**. It rises in Nashik district (at Trimbakeshwar), is 1,465 km long, and drains about 3.13 lakh km² — about half of it in Maharashtra.",
          },
          {
            type: "why",
            q: "Why is the Godavari's basin the largest in the peninsula?",
            a: "++It runs diagonally across the widest part of the Deccan++, from the Western Ghats almost to the Andhra coast, and ++its north-eastern tributaries reach right up to the Satpuras and into Odisha++.",
          },
          {
            type: "trap",
            wrong: "The Godavari and the Kaveri both rise in \"the Brahmagiri hills\", so they share a source region.",
            right: "Two different Brahmagiris: **Trimbakeshwar (Nashik, Maharashtra)** for the Godavari; **Talakaveri (Kodagu, Karnataka)** for the Kaveri.",
            why: "Hill names repeat across India. Always anchor a source to its district.",
          },
          {
            type: "check",
            q: {
              id: "pe6-godavari-facts",
              prompt:
                "With reference to the Godavari, consider the following statements:\n1. It is the largest Peninsular river system.\n2. It rises in the Nashik district of Maharashtra.\n3. Most of its basin lies in Andhra Pradesh.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 0,
              explain:
                "Statements 1 and 2 are NCERT lines. For 3, think about where the river spends its plateau run: ++the Godavari and its biggest tributary system (Pranhita) both drain Maharashtra first++, so about half the basin (NCERT 49%) is in Maharashtra, not Andhra Pradesh. ==1 and 2 only==.",
              trap: "The delta and Polavaram are in Andhra Pradesh, so it \"feels\" like an Andhra river.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "godavari-spine",
        title: "Reading the Godavari spine",
        blocks: [
          { type: "spine", river: "godavari", caption: "Left bank (north-east): Purna, Pranhita, Indravati, Sabari. Right bank (south-west): Pravara, Manjira, Manair." },
          { type: "sketch", id: "bank-rule", caption: "Stand facing downstream: your left hand is the left bank." },
          {
            type: "why",
            q: "Why are the Godavari's left-bank tributaries so much bigger than its right-bank ones?",
            a: "Face downstream (east/south-east). ++Your left hand points to Vidarbha, Bastar and Odisha — wetter regions with big catchments.++ Your right hand points to the Marathwada–Telangana plateau, ++which lies in the rain-shadow of the Western Ghats++. Big rain, big rivers.",
          },
          {
            type: "remember",
            hook: "Left bank in downstream order: Purna, Pranhita, Indravati, Sabari",
            logic: "They arrive one after another from the north-east as you go downstream; Sabari is the last one before the Papi hills gorge.",
          },
          {
            type: "check",
            q: {
              id: "pe6-pyq-2015-godavari",
              prompt: "Consider the following rivers:\n1. Vamsadhara\n2. Indravati\n3. Pranahita\n4. Pennar\nWhich of the above are tributaries of Godavari?",
              options: ["1, 2 and 3", "2, 3 and 4", "1, 2 and 4", "2 and 3 only"],
              answer: 3,
              explain:
                "Ask of each river: does it have its own mouth? The [[vamsadhara]] ++rises on the seaward slope of the Eastern Ghats++ and reaches the sea at Kalingapatnam on its own. The [[pennar]] drains Rayalaseema to its own mouth near Nellore. The [[indravati]] and [[pranhita]] both join the Godavari's left bank. ==2 and 3 only==.",
              trap: "Vamsadhara flows through the same Odisha–Andhra country as the Godavari's tributaries, so it looks like one of them.",
              source: "UPSC CSE Prelims 2015",
            },
          },
        ],
      },
      {
        id: "pranhita-chain",
        title: "Pranhita: three rivers wearing one name",
        blocks: [
          {
            type: "say",
            text: "The [[pranhita]] is only about 113 km long, yet it is the ==largest tributary of the Godavari== (about a third of the basin). It is born where the [[wardha]] and the [[wainganga]] meet; the [[penganga]] has already joined the Wardha.",
          },
          { type: "spine", river: "pranhita", caption: "Wardha (with Penganga) + Wainganga → Pranhita → Godavari at Kaleshwaram." },
          {
            type: "trap",
            wrong: "The Penganga and Wainganga join the Godavari directly.",
            right: "Penganga → **Wardha**; Wardha + Wainganga → **Pranhita** → Godavari.",
            why: "NCERT lists \"the Penganga, the Indravati, the Pranhita, and the Manjra\" as principal tributaries because they belong to the system. A \"joins directly\" question needs the chain.",
          },
          {
            type: "remember",
            hook: "Multai: Tapi goes west, Wardha goes east",
            logic: "Both rise near Multai (Betul). ++A low divide on the Satpura plateau++ sends one to the Arabian Sea and the other, via Pranhita and Godavari, to the Bay of Bengal.",
          },
          {
            type: "say",
            text: "Telangana's **Kaleshwaram lift irrigation project** is built just below the Pranhita confluence, ++because that is where the Godavari suddenly carries far more water++. Its **Medigadda barrage** piers sank in October 2023.",
          },
          {
            type: "check",
            q: {
              id: "pe6-pranhita-pairs",
              prompt:
                "Consider the following pairs:\nRiver : The river it directly joins\n1. Penganga : Wardha\n2. Wainganga : Godavari\n3. Manjira : Godavari\nHow many of the above pairs are correctly matched?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain:
                "Follow the water, not the textbook list. Penganga ends in the Wardha near Wadha — correct. The Wainganga meets the Wardha to form the Pranhita, so it never touches the Godavari — wrong. The Manjira joins the Godavari's right bank at Kandakurthi — correct. ==Only two==.",
              trap: "\"Directly\" is the killer word; NCERT-style lists put the Wainganga under the Godavari.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "indravati-sabari",
        title: "Eastern Ghats rivers that flow inland",
        blocks: [
          {
            type: "say",
            text: "The [[indravati]] rises in the Eastern Ghats of **Kalahandi (Odisha)**, flows ==west== into Bastar, falls at Chitrakote, then turns south to the Godavari. The [[sabari]] (Kolab) rises in the Eastern Ghats of Koraput and also turns inland to the Godavari.",
          },
          {
            type: "why",
            q: "How can a river rise in the Eastern Ghats and flow west, away from the Bay of Bengal?",
            a: "++The Eastern Ghats are not a water divide; the land behind them slopes inland towards the Godavari trough++. A stream starting on the inland slope runs to the Godavari first, and reaches the sea only through it.",
          },
          {
            type: "remember",
            hook: "Kalahandi is a water tower: Indravati west, Vamsadhara and Nagavali south-east",
            logic: "All three rise in the Thuamul Rampur–Lanjigarh highlands. ++The side of the crest a stream starts on decides its sea route.++",
          },
          {
            type: "check",
            q: {
              id: "pe6-waterfalls",
              prompt:
                "Consider the following pairs:\nWaterfall : River\n1. Chitrakote : Indravati\n2. Duduma : Machkund (Sileru)\n3. Hundru : Brahmani\nHow many of the above pairs are correctly matched?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain:
                "Chitrakote is where the [[indravati]] drops off a rock step near Jagdalpur — correct. Duduma is on the Machkund, the upper Sileru, a tributary of the [[sabari]] — correct. Hundru is on the [[subarnarekha]] at the edge of the Ranchi plateau, not the Brahmani — wrong. ==Only two==.",
              trap: "Brahmani and Subarnarekha both start near Ranchi; Hundru belongs to the Subarnarekha (UPSC 2024).",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "godavari-delta",
        title: "Delta, Polavaram and the Godavari–Krishna link",
        blocks: [
          {
            type: "say",
            text: "After the Papi hills, the river widens at Polavaram and splits at **Dowleswaram (Rajahmundry)** into the ==Gautami and Vasishta Godavari==. Between them lies the Konaseema delta; mangroves of **Coringa** line its creeks.",
          },
          {
            type: "law",
            title: "Polavaram in one paragraph",
            text: "A multipurpose dam on the Godavari in Andhra Pradesh, declared a **National Project** under the AP Reorganisation Act, 2014. ++Its backwater spreads up the Godavari and the Sabari into Odisha and Chhattisgarh++, which object to submergence of tribal villages. A related plan, the Polavaram–Banakacherla link to lift Godavari flood water towards Rayalaseema, was returned by the environment ministry's expert committee in June 2025 without terms of reference; Telangana opposed it.",
          },
          {
            type: "why",
            q: "Why was Godavari water pumped into the Krishna through the Pattiseema scheme?",
            a: "++The Godavari is water-surplus and the Krishna water-deficit++. Pattiseema lifts Godavari water into the Polavaram right main canal, which ends in the Krishna above the Prakasam barrage — so the Krishna delta can use Godavari water.",
          },
          {
            type: "check",
            q: {
              id: "pe6-pyq-2016-link",
              prompt: "Recently, linking of which of the following rivers was undertaken?",
              options: ["Cauvery and Tungabhadra", "Godavari and Krishna", "Mahanadi and Sone", "Narmada and Tapti"],
              answer: 1,
              explain:
                "Ask which pair is ++a surplus basin next to a deficit basin with a canal already in place++. The Polavaram right main canal joins the Godavari and Krishna; the Pattiseema lift (2015–16) started pumping Godavari water into it. ==Godavari and Krishna==.",
              trap: "Cauvery–Tungabhadra sounds plausible because both are southern; but the Tungabhadra is in the Krishna basin and no such link was built.",
              source: "UPSC CSE Prelims 2016",
            },
          },
        ],
      },
      {
        id: "odisha-jharkhand-rivers",
        title: "The small rivers of Odisha and Jharkhand",
        blocks: [
          {
            type: "map",
            focus: ["subarnarekha", "brahmani", "baitarani", "mahanadi"],
            caption: "Subarnarekha off the Ranchi plateau; Brahmani from Rourkela; Baitarani from Keonjhar — all reaching the north Odisha coast.",
            trace: true,
          },
          {
            type: "say",
            text: "The [[subarnarekha]] rises near Ranchi, drops at **Hundru**, passes Jamshedpur and reaches the sea in Balasore. The [[brahmani]] is born at Rourkela from the **South Koel and Sankh**. The [[baitarani]] rises at Gonasika in Keonjhar. Brahmani and Baitarani meet at the **Dhamra** mouth, among the **Bhitarkanika** mangroves.",
          },
          {
            type: "why",
            q: "Why are there mangroves at Bhitarkanika?",
            a: "++Two silt-laden rivers (Brahmani and Baitarani) meet tidal creeks on a flat delta++, giving the brackish, muddy, sheltered shore that mangroves need.",
          },
          {
            type: "check",
            q: {
              id: "pe6-pyq-2011-bhitarkanika",
              prompt:
                "Two important rivers – one with its source in Jharkhand (and known by a different name in Odisha), and another, with its source in Odisha – merge at a place only a short distance from the coast of Bay of Bengal before flowing into the sea. This is an important site of wildlife and biodiversity and a protected area. Which one of the following could be this?",
              options: ["Bhitarkanika", "Chandipur-on-sea", "Gopalpur-on-sea", "Simlipal"],
              answer: 0,
              explain:
                "Decode the clues. \"Source in Jharkhand, different name in Odisha\" = South Koel, which becomes the [[brahmani]]. \"Source in Odisha\" = the [[baitarani]] (Keonjhar). ++They meet at the Dhamra mouth++, in the mangrove protected area of ==Bhitarkanika==. Simlipal is inland on a plateau; Chandipur and Gopalpur are beaches, not confluences.",
              trap: "Simlipal is a famous Odisha protected area, but it is a hill forest, not a coastal confluence.",
              source: "UPSC CSE Prelims 2011",
            },
          },
          {
            type: "check",
            q: {
              id: "pe6-pyq-2024-waterfalls",
              prompt:
                "Consider the following information:\nWaterfall | Region | River\n1. Dhuandhar | Malwa | Narmada\n2. Hundru | Chota Nagpur | Subarnarekha\n3. Gersoppa | Western Ghats | Netravati\nIn how many of the above rows is the given information correctly matched?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 0,
              explain:
                "Check every cell. Row 2: Hundru is a scarp fall where the [[subarnarekha]] leaves the Ranchi (Chota Nagpur) plateau — fully correct. Row 3: Gersoppa (Jog) is on the [[sharavati]], not the [[netravati]] — wrong. Row 1: Dhuandhar is on the [[narmada]] near Jabalpur, which is not the Malwa plateau — wrong region. ==Only one==.",
              trap: "Three-column rows hide one wrong cell; Dhuandhar–Narmada is right, so students tick the whole row.",
              source: "UPSC CSE Prelims 2024",
            },
          },
        ],
      },
      {
        id: "eastern-ghats-or-not",
        title: "Rise in the Eastern Ghats? The 2021 question",
        blocks: [
          {
            type: "map",
            focus: ["vamsadhara", "nagavali", "brahmani", "subarnarekha", "indravati"],
            caption: "Vamsadhara and Nagavali start on the Eastern Ghats of Kalahandi; Brahmani and Subarnarekha start on the Chota Nagpur plateau further north.",
            trace: true,
          },
          {
            type: "law",
            title: "Where the Eastern Ghats are",
            text: "NCERT (physiography): the Eastern Ghats stretch from the **Mahanadi valley to the Nilgiris**. So rivers rising **north** of the Mahanadi — [[brahmani]], [[subarnarekha]] — come off the ==Chota Nagpur plateau==, not the Eastern Ghats. Rivers rising in Kalahandi–Koraput — [[vamsadhara]], [[nagavali]], [[indravati]], [[sabari]] — are Eastern Ghats rivers.",
          },
          {
            type: "trap",
            wrong: "The Brahmani rises in the Eastern Ghats because it flows through Odisha.",
            right: "Its head-streams (South Koel, Sankh) rise on the **Chota Nagpur plateau** in Jharkhand.",
            why: "Flowing through Odisha is not the same as rising in the Eastern Ghats. Locate the source, then ask which highland it is on.",
          },
          {
            type: "check",
            q: {
              id: "pe6-pyq-2021-eastern-ghats",
              prompt: "Consider the following rivers:\n1. Brahmani\n2. Nagavali\n3. Subarnarekha\n4. Vamsadhara\nWhich of the above rise from the Eastern Ghats?",
              options: ["1 and 2", "2 and 4", "3 and 4", "1 and 3"],
              answer: 1,
              explain:
                "Place each source on the relief map. Subarnarekha: Ranchi plateau. Brahmani: South Koel and Sankh, both on the Chota Nagpur plateau. ++Both lie north of the Mahanadi, where the Eastern Ghats have not begun++. Nagavali (Lakhbahal) and Vamsadhara (Lanjigarh) rise in Kalahandi's Eastern Ghats. ==2 and 4==.",
              trap: "All four reach the Odisha–Andhra coast, so it feels like they share a source region.",
              source: "UPSC CSE Prelims 2021",
            },
          },
        ],
      },
      {
        id: "revise-mahanadi-godavari",
        title: "One-page revision",
        blocks: [
          {
            type: "compare",
            title: "Chapter 6 at a glance",
            columns: ["River", "Rises", "Ends / joins", "Remember because"],
            rows: [
              ["[[mahanadi]]", "Sihawa, Chhattisgarh", "Delta near Paradip", "++Silt onto a broad plain++; Hirakud holds its floods"],
              ["[[godavari]]", "Trimbakeshwar, Nashik", "Konaseema delta", "++Diagonal run across the widest Deccan++ = largest basin"],
              ["[[pranhita]]", "Wardha + Wainganga", "Godavari (left), Kaleshwaram", "++Carries all of Vidarbha++"],
              ["[[manjira]]", "Balaghat range, Beed", "Godavari (right), Kandakurthi", "++Comes from the dry south-west++"],
              ["[[indravati]]", "Eastern Ghats, Kalahandi", "Godavari (left)", "++Ghats are not a divide++, so it flows inland"],
              ["[[subarnarekha]]", "Ranchi plateau", "Sea near Talsari", "++Scarp fall at Hundru++"],
              ["[[brahmani]]", "South Koel + Sankh at Rourkela", "Dhamra (with Baitarani)", "++Chota Nagpur, not Eastern Ghats++"],
              ["[[vamsadhara]]", "Eastern Ghats, Kalahandi", "Sea at Kalingapatnam", "++Seaward slope++, so straight to the coast"],
            ],
          },
          {
            type: "check",
            q: {
              id: "pe6-order-left-bank",
              prompt:
                "Arrange the following left-bank tributaries of the Godavari in the order in which they join it, from upstream to downstream:\n1. Indravati\n2. Pranhita\n3. Sabari\n4. Purna",
              options: ["4-2-1-3", "2-4-1-3", "4-1-2-3", "2-1-4-3"],
              answer: 0,
              explain:
                "Walk downstream. The Purna joins in Marathwada, before Nanded. The [[pranhita]] joins at Kaleshwaram on the Telangana border. The [[indravati]] joins next at the Maharashtra–Chhattisgarh–Telangana tri-junction. The [[sabari]] joins last at Kunavaram, just above the Papi hills. ==4-2-1-3==.",
              trap: "Indravati and Pranhita join close together; Pranhita comes first because Kaleshwaram is upstream of the tri-junction.",
              source: "Practice",
            },
          },
        ],
      },
    ],
  },

  // ═══════════════════════════ CHAPTER 7 ═══════════════════════════
  {
    id: "krishna-kaveri-south",
    number: 7,
    system: "peninsular-east",
    title: "Krishna, Kaveri & the far south",
    hindiTitle: "कृष्णा, कावेरी और सुदूर दक्षिण",
    subtitle:
      "The rain-shadow Krishna and its quarrels, the Pennar's canyon, the two-monsoon Kaveri and its dispute, and the small rivers of Tamil Nadu.",
    minutes: 45,
    outcomes: [
      "Draw the Krishna spine with every tributary on the correct bank and order.",
      "Explain why the Krishna and Pennar basins are thirsty and the Kaveri is the steadiest peninsular river.",
      "Place the Kaveri's islands, falls and dams in downstream order and in the right state.",
      "Summarise the Krishna (AP–Telangana) and Cauvery (Karnataka–Tamil Nadu) disputes with their key dates.",
      "Answer UPSC's southern-river questions: Gandikota, Hampi/Vijayanagara, Cauvery-basin protected areas, Kolleru.",
    ],
    steps: [
      {
        id: "krishna-course",
        title: "Krishna: from Mahabaleshwar's spring",
        blocks: [
          {
            type: "map",
            focus: ["krishna", "koyna", "ghataprabha", "malaprabha", "bhima", "tungabhadra", "musi", "munneru"],
            caption: "Krishna from Mahabaleshwar to Hamsaladeevi; right-bank rivers come from the Karnataka Ghats, left-bank rivers from the northern plateau.",
            trace: true,
          },
          {
            type: "say",
            text: "NCERT: the [[krishna]] is the ==second largest east-flowing Peninsular river==. It rises near **Mahabaleshwar** in the Sahyadri, is 1,401 km long, and its basin is 27% Maharashtra, 44% Karnataka and 29% Andhra Pradesh and Telangana.",
          },
          {
            type: "why",
            q: "Why is the Krishna the most dammed and most disputed river of the Deccan?",
            a: "++Only the thin western rim of the basin gets heavy rain; most of it lies in the rain-shadow of the Western Ghats++. Scarce water, many users, four states — so every state builds storage, and every dam becomes a dispute.",
          },
          {
            type: "trap",
            wrong: "The Bhima joins the Godavari.",
            right: "The [[bhima]] joins the **Krishna** (left bank) near Raichur.",
            why: "Both rise in Maharashtra's Ghats, but the Balaghat range to the Bhima's north-east keeps it on the Krishna side of the divide. The Bhima is in fact the Krishna's longest tributary.",
          },
          {
            type: "check",
            q: {
              id: "pe7-krishna-facts",
              prompt:
                "With reference to the Krishna, consider the following statements:\n1. It rises near Mahabaleshwar.\n2. The largest share of its basin lies in Karnataka.\n3. The Bhima is its longest tributary.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 3,
              explain:
                "(1) NCERT. (2) NCERT gives Karnataka 44% — ++it holds the big tributary catchments of the Ghataprabha, Malaprabha and Tungabhadra++. (3) The [[bhima]] runs diagonally across the whole Pune–Solapur plateau, about 861 km. ==All three==.",
              trap: "Students guess Andhra Pradesh for statement 2 because the delta and the big dams are there.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "krishna-spine",
        title: "Reading the Krishna spine",
        blocks: [
          { type: "spine", river: "krishna", caption: "Right: Koyna, Ghataprabha, Malaprabha, Tungabhadra. Left: Bhima, Musi, Munneru." },
          {
            type: "law",
            title: "Krishna banks",
            text: "Face downstream (east). **Right hand = south**: rivers from the Karnataka Ghats — [[koyna]], [[ghataprabha]], [[malaprabha]], [[tungabhadra]]. **Left hand = north**: plateau rivers — [[bhima]] (Pune), [[musi]] (Hyderabad), [[munneru]] (Warangal–Khammam).",
          },
          {
            type: "remember",
            hook: "Ghats rivers on the right, city rivers on the left",
            logic: "The right-bank rivers all start in the wet Ghats; the left-bank ones pass Pune/Pandharpur, Hyderabad and Khammam on the northern plateau.",
          },
          {
            type: "check",
            q: {
              id: "pe7-krishna-banks",
              prompt:
                "Consider the following pairs:\nTributary : Bank of the Krishna it joins\n1. Tungabhadra : Left\n2. Musi : Left\n3. Ghataprabha : Right\nHow many of the above pairs are correctly matched?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain:
                "Face downstream (east). The [[tungabhadra]] arrives from the south-west (Karnataka) — **right**, so pair 1 is wrong. The [[musi]] comes from Hyderabad in the north — **left**, correct. The [[ghataprabha]] comes from the south-west Ghats — **right**, correct. ==Only two==.",
              trap: "The Tungabhadra joins near Kurnool, far east; position along the river does not decide the bank, direction of arrival does.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "koyna",
        title: "Koyna: power from the Ghats' steep face",
        blocks: [
          {
            type: "say",
            text: "The [[koyna]] rises near Mahabaleshwar, runs **north to south** parallel to the Ghats, and joins the Krishna at **Karad** (Preeti Sangam). Its dam stores Shivasagar lake.",
          },
          {
            type: "why",
            q: "Why is Koyna water dropped westward for power when the river itself flows east?",
            a: "++The western face of the Ghats is a steep scarp; the eastern side slopes gently++. Tunnelling the stored water down the western scarp gives a very high head — more power from every litre.",
          },
          {
            type: "law",
            title: "Reservoir-induced seismicity",
            text: "The **1967 Koyna earthquake** is India's textbook case. ++A deep reservoir adds load and pushes water into faulted rock++, reducing friction on faults that were already stressed.",
          },
          {
            type: "check",
            q: {
              id: "pe7-koyna",
              prompt: "The Koyna region of Maharashtra is most often cited in disaster studies as an example of",
              options: ["glacial lake outburst floods", "reservoir-induced seismicity", "coastal subsidence", "landslides on Himalayan slopes"],
              answer: 1,
              explain:
                "Link the place to its feature: a **large reservoir** in the Ghats. ++Water load and pore pressure on faults++ triggered the 1967 earthquake. ==Reservoir-induced seismicity==.",
              trap: "\"Landslides\" tempts because the Ghats are steep, but Koyna's fame is the dam-linked earthquake.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "tungabhadra-hampi",
        title: "Tungabhadra, Hampi and the Vijayanagara rivers",
        blocks: [
          {
            type: "say",
            text: "The [[tungabhadra]] is formed at **Koodli near Shivamogga** by the Tunga and Bhadra, both from Gangamoola in the Western Ghats. It flows past **Hampi** — the Vijayanagara capital — on its south bank, and joins the Krishna near Alampur. The [[malaprabha]] has the Chalukyan temples (Aihole, Pattadakal); the [[bhima]] is the **Chandrabhaga** at Pandharpur.",
          },
          {
            type: "why",
            q: "Why did the Vijayanagara kings choose Hampi?",
            a: "++The Tungabhadra runs through a boulder-strewn granite gorge there++: water on one side, rocky hills all round — a natural fort with a perennial supply.",
          },
          {
            type: "trap",
            wrong: "Hampi is on the Malaprabha.",
            right: "Hampi is on the **Tungabhadra**. The Malaprabha has Pattadakal and Aihole.",
            why: "A 2019 UPSC pair (Hampi : Malaprabha) is widely explained as wrong by every textbook; the official key for that item is disputed. Learn the geography, not the key.",
          },
          {
            type: "check",
            q: {
              id: "pe7-pyq-2015-harihara",
              prompt:
                "Who of the following founded a new city on the south bank of a tributary to river Krishna and undertook to rule his new kingdom as the agent of a deity to whom all the land south of the river Krishna was supposed to belong?",
              options: ["Amoghavarsha I", "Ballala II", "Harihara I", "Prataparudra II"],
              answer: 2,
              explain:
                "\"South bank of a Krishna tributary\" + a new city = Vijayanagara on the [[tungabhadra]]. Its founders, the Sangama brothers, ruled in the name of Virupaksha. ==Harihara I==. Amoghavarsha was Rashtrakuta, Ballala II Hoysala, Prataparudra II Kakatiya.",
              trap: "Prataparudra II ruled Warangal, also in the Krishna country, but he founded no new capital on a tributary's south bank.",
              source: "UPSC CSE Prelims 2015",
            },
          },
          {
            type: "check",
            q: {
              id: "pe7-pyq-2023-devaraya",
              prompt:
                "Who among the following rulers of Vijayanagara Empire constructed a large dam across Tungabhadra River and a canal-cum-aqueduct several kilometres long from the river to the capital city?",
              options: ["Devaraya I", "Mallikarjuna", "Vira Vijaya", "Virupaksha"],
              answer: 0,
              explain:
                "++The capital sat on a dry, rocky plateau++, so river water had to be led in by dam and canal. The ruler remembered for this work is ==Devaraya I== (early 15th century).",
              trap: "Virupaksha is also the name of Hampi's deity, so it feels connected to the river.",
              source: "UPSC CSE Prelims 2023",
            },
          },
        ],
      },
      {
        id: "krishna-dams-dispute",
        title: "Dams down the Krishna, and the AP–Telangana quarrel",
        blocks: [
          {
            type: "say",
            text: "Upstream to downstream: **Almatti** (Upper Krishna Project, Karnataka) → Narayanpur → Jurala → Srisailam (Nallamala gorge) → Nagarjuna Sagar → Pulichintala → **Prakasam barrage** (Vijayawada, delta head).",
          },
          {
            type: "law",
            title: "Krishna water: who decides",
            text: "**KWDT-I** (Bachawat): award 1973, notified 1976. **KWDT-II** (Brijesh Kumar): report 2010, further report 2013. After the 2014 bifurcation, the **Krishna River Management Board** was set up under the AP Reorganisation Act; an ad hoc 512:299 split was used. In ==October 2023== the Centre gave KWDT-II further terms of reference to divide water between **Andhra Pradesh and Telangana**.",
          },
          {
            type: "why",
            q: "Why did Srisailam and Nagarjuna Sagar become flashpoints after 2014?",
            a: "++Both dams sit on the new AP–Telangana border++, and each state wants water released at different times — Telangana for power and lift schemes, AP for its delta and Rayalaseema canals. In November 2023 police of the two states faced off at Nagarjuna Sagar until the Centre handed operation to the KRMB.",
          },
          {
            type: "check",
            q: {
              id: "pe7-krishna-dispute",
              prompt:
                "Consider the following statements:\n1. The Krishna River Management Board was set up under the Andhra Pradesh Reorganisation Act, 2014.\n2. In 2023 the Centre issued further terms of reference to the Krishna Water Disputes Tribunal-II for sharing between Andhra Pradesh and Telangana.\n3. Srisailam dam lies in a gorge of the Nallamala hills.\nHow many of the above statements are correct?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 2,
              explain:
                "(1) True: ++bifurcation put shared dams on a new border++, so the Act created the KRMB. (2) True: October 2023. (3) True: the Krishna cuts through the Nallamala range of the Eastern Ghats at Srisailam. ==All three==.",
              trap: "Students often place the KRMB under the 1956 Inter-State River Water Disputes Act; it comes from the 2014 bifurcation law.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "krishna-delta",
        title: "Krishna delta, Kolleru and Amaravati",
        blocks: [
          {
            type: "say",
            text: "Below the Prakasam barrage at Vijayawada the [[krishna]] builds its delta and reaches the sea near Hamsaladeevi. **Kolleru lake** lies in the low ground ==between the Krishna and Godavari deltas==. The **Amaravati stupa** (UPSC 2026) stood in the lower Krishna valley.",
          },
          {
            type: "why",
            q: "Why is Kolleru not \"fed directly\" by the Krishna?",
            a: "++It fills a hollow left between two growing deltas++. Seasonal streams (Budameru, Tammileru) and delta drainage/overflow fill it — neither main channel flows into it.",
          },
          {
            type: "check",
            q: {
              id: "pe7-pyq-2023-lakes",
              prompt:
                "Consider the following statements:\n1. Jhelum River passes through Wular Lake.\n2. Krishna River directly feeds Kolleru Lake.\n3. Meandering of Gandak River formed Kanwar Lake.\nHow many of the statements given above are correct?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 0,
              explain:
                "(1) The [[jhelum]] flows through Wular — correct. (2) Kolleru lies **between** the Krishna and Godavari deltas, fed by seasonal streams and overflow — \"directly\" makes it wrong. (3) Kanwar lies in a depression between the [[burhi-gandak|Burhi Gandak]] and an old Bagmati channel, not a Gandak meander — wrong per the official key. ==Only one==.",
              trap: "\"Directly\" in statement 2 and \"Gandak\" vs \"Burhi Gandak\" in 3 are the two traps; coaching keys split on statement 3.",
              source: "UPSC CSE Prelims 2023",
            },
          },
        ],
      },
      {
        id: "pennar-canyon",
        title: "Pennar: the river of the rain-shadow",
        blocks: [
          {
            type: "map",
            focus: ["pennar", "palar", "arkavathi"],
            caption: "From the Nandi hills, the Pennar runs north then east across Rayalaseema; the Palar runs east to the Tamil Nadu coast; the Arkavathi south to the Kaveri.",
            trace: true,
          },
          {
            type: "say",
            text: "The [[pennar]] rises in the **Nandi hills** (Chikkaballapur, Karnataka), flows north into Andhra Pradesh, turns east across Rayalaseema, cuts the **Gandikota** canyon in the Erramala hills, and reaches the sea near Nellore.",
          },
          {
            type: "why",
            q: "Why does the Pennar cut such a deep, narrow canyon at Gandikota?",
            a: "++The Erramala hills here are made of hard Gandikota quartzite++. Hard rock resists sideways widening, so the river can only cut down — leaving steep walls about 100 m apart.",
          },
          {
            type: "check",
            q: {
              id: "pe7-pyq-2022-gandikota",
              prompt: "Gandikota canyon of South India was created by which one of the following rivers?",
              options: ["Cauvery", "Manjira", "Pennar", "Tungabhadra"],
              answer: 2,
              explain:
                "Locate Gandikota: Kadapa district, Andhra Pradesh, in the Erramala hills of Rayalaseema. ++Only one river crosses that ridge on its way to Nellore++ — the ==Pennar==. The Tungabhadra stops at the Krishna near Kurnool; the Manjira is in Telangana; the Kaveri is far south.",
              trap: "The Tungabhadra has Hampi's famous granite gorge nearby, so \"gorge in Andhra–Karnataka\" pulls students to it.",
              source: "UPSC CSE Prelims 2022",
            },
          },
        ],
      },
      {
        id: "nandi-hills",
        title: "Nandi hills: one dome, many rivers",
        blocks: [
          {
            type: "say",
            text: "The Nandi hills dome near Bengaluru sends rivers in every direction: the [[pennar]] north, the [[palar]] east, the [[arkavathi]] south to the Kaveri, and the South Pennar (Ponnaiyar) south-east. That is **radial drainage**.",
          },
          { type: "sketch", id: "drainage-patterns", caption: "Radial drainage: streams run outward from a central high point, like spokes." },
          {
            type: "remember",
            hook: "Nandi sends Pennar north, Palar east, Arkavathi south",
            logic: "Stand on the dome: the slope on each side decides the river. Same idea as Amarkantak in central India.",
          },
          {
            type: "check",
            q: {
              id: "pe7-nandi",
              prompt: "Which one of the following rivers does NOT rise in the Nandi hills region of Karnataka?",
              options: ["Pennar", "Palar", "Arkavathi", "Tungabhadra"],
              answer: 3,
              explain:
                "The Nandi hills are a dome on the Kolar plateau, ++far east of the Western Ghats++. The Pennar, Palar and Arkavathi start there. The [[tungabhadra]] is formed by two Ghats rivers (Tunga, Bhadra) meeting at Koodli near Shivamogga. ==Tungabhadra==.",
              trap: "Arkavathi is the least famous, so students drop it; it is the one that feeds Bengaluru's old reservoirs.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "kaveri-course",
        title: "Kaveri: Talakaveri to Poompuhar",
        blocks: [
          {
            type: "map",
            focus: ["kaveri", "hemavati", "kabini", "arkavathi", "bhavani", "amaravati"],
            caption: "Kaveri from Talakaveri across the Karnataka plateau, over Shivanasamudra and Hogenakkal, into the Tamil Nadu delta.",
            trace: true,
          },
          {
            type: "say",
            text: "NCERT: the [[kaveri]] rises in the **Brahmagiri hills (1,341 m) of Kodagu** — NCERT's \"Kogadu\". It is 800 km long and drains 81,155 km²: ==56% Tamil Nadu, 41% Karnataka, 3% Kerala==.",
          },
          {
            type: "trap",
            wrong: "The Kaveri originates in Kerala.",
            right: "It rises at **Talakaveri, Kodagu, Karnataka**. Kerala's share comes through the **Kabini** (Wayanad).",
            why: "Talakaveri is close to the Kerala border, and Kerala is a party to the dispute — both push students to the wrong answer.",
          },
          {
            type: "say",
            text: "Islands in ==downstream order==: Srirangapatna (near Mysuru), Shivanasamudra (with its falls), **Srirangam** (Tiruchirappalli, where the river splits into the Kaveri and the Kollidam). ++On hard rock the channel splits around resistant outcrops++; at Srirangam it splits because the delta begins.",
          },
          {
            type: "check",
            q: {
              id: "pe7-kaveri-places",
              prompt:
                "Consider the following pairs:\nPlace on the Kaveri : State\n1. Shivanasamudra falls : Karnataka\n2. Hogenakkal falls : Karnataka\n3. Mettur dam : Tamil Nadu\nHow many of the above pairs are correctly matched?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain:
                "Walk downstream. Shivanasamudra is on the Mysuru plateau edge — Karnataka, correct. Hogenakkal is on the border stretch but in **Dharmapuri, Tamil Nadu** — wrong. ++Tamil Nadu built its main storage just after the river enters the state++ — Mettur, correct. ==Only two==.",
              trap: "Hogenakkal sits right on the border stretch, so it feels shared; the falls are in Tamil Nadu's Dharmapuri district.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "two-monsoons",
        title: "Two monsoons make the steadiest river",
        blocks: [
          { type: "sketch", id: "monsoon-kaveri", caption: "SW monsoon fills the Karnataka head in summer; NE monsoon fills the Tamil Nadu lower basin in winter." },
          {
            type: "why",
            q: "Why does the Kaveri flow with less fluctuation than other peninsular rivers?",
            a: "NCERT: ++the upper catchment receives rainfall during the south-west monsoon (summer) and the lower part during the north-east monsoon (winter)++. Two rain seasons at two ends of the basin refill the river twice a year.",
          },
          {
            type: "law",
            title: "Same logic, smaller river",
            text: "The [[tamirabarani]] at India's southern tip also gets ==both monsoons== on its Western Ghats catchment — which is why it is often called Tamil Nadu's only perennial river.",
          },
          {
            type: "check",
            q: {
              id: "pe7-kaveri-regime",
              prompt: "The Kaveri carries water throughout the year with comparatively less fluctuation than other Peninsular rivers mainly because",
              options: [
                "it is fed by glaciers in the Nilgiris",
                "its upper and lower catchments receive rain in different monsoon seasons",
                "its basin lies entirely in the rain-shadow",
                "dams in Karnataka release a fixed flow every day",
              ],
              answer: 1,
              explain:
                "Eliminate. No glaciers exist in the Nilgiris. A rain-shadow basin would make it less steady, not more. Dam releases vary with the monsoon. NCERT's reason: ==SW monsoon on the upper basin, NE monsoon on the lower basin==.",
              trap: "Option 4 sounds modern and plausible, but the release schedule itself depends on the two monsoons.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "kaveri-spine",
        title: "Reading the Kaveri spine",
        blocks: [
          { type: "spine", river: "kaveri", caption: "Left: Hemavati, (Shimsha), Arkavathi. Right: Kabini, Bhavani, Amaravati." },
          {
            type: "law",
            title: "Kaveri banks",
            text: "Face downstream (east/south-east). **Right hand = south**: rivers from the Wayanad–Nilgiri–Anaimalai hills — [[kabini]], [[bhavani]], [[amaravati]]. **Left hand = north**: plateau rivers — [[hemavati]], Shimsha, [[arkavathi]].",
          },
          {
            type: "say",
            text: "The [[kabini]] brings Kerala's Wayanad rain; the [[bhavani]] loops from the Nilgiris into Kerala's Attappadi and back; the [[amaravati]] comes from the Anaimalai–Palani hills and joins near Karur.",
          },
          {
            type: "check",
            q: {
              id: "pe7-pyq-2020-cauvery-pa",
              prompt:
                "Which of the following Protected Areas are located in Cauvery basin?\n1. Nagarhole National Park\n2. Papikonda National Park\n3. Sathyamangalam Tiger Reserve\n4. Wayanad Wildlife Sanctuary\nSelect the correct answer using the code given below:",
              options: ["1 and 2 only", "3 and 4 only", "1, 3 and 4 only", "1, 2, 3 and 4"],
              answer: 2,
              explain:
                "Ask where each area's water goes. Nagarhole and Wayanad drain to the [[kabini]]; Sathyamangalam drains to the [[bhavani]] (via the Moyar) — all Kaveri tributaries. ++Papikonda guards the Godavari's gorge in the Papi hills++. ==1, 3 and 4 only==.",
              trap: "Papikonda sounds southern and hilly; it belongs to the Godavari (chapter 6).",
              source: "UPSC CSE Prelims 2020",
            },
          },
        ],
      },
      {
        id: "kaveri-works",
        title: "Falls, dams and the Grand Anicut",
        blocks: [
          {
            type: "say",
            text: "**Shivanasamudra** (1902) was one of Asia's earliest hydroelectric stations, built to power the Kolar Gold Fields. **KRS** near Mysuru is Karnataka's main storage; **Mettur** (1934) is Tamil Nadu's. The Chola **Grand Anicut (Kallanai)** below Srirangam still diverts water into delta canals.",
          },
          {
            type: "why",
            q: "Why was Shivanasamudra such an early hydro site?",
            a: "++A big, relatively steady river drops about 91 m off the edge of the Mysuru plateau++ — high head plus reliable flow, close to a large power user (the gold mines).",
          },
          {
            type: "remember",
            hook: "KRS in Karnataka, Mettur in Tamil Nadu: each state stores at the top of its own stretch",
            logic: "Storage sits where the river enters your territory — which is exactly why upstream storage (Mekedatu) worries the downstream state.",
          },
        ],
      },
      {
        id: "cauvery-dispute",
        title: "The Cauvery dispute and Mekedatu",
        blocks: [
          {
            type: "law",
            title: "Cauvery water: the timeline",
            text: "**2007**: Cauvery Water Disputes Tribunal final award. **16 February 2018**: Supreme Court verdict — Tamil Nadu ==404.25 tmcft==, Karnataka 284.75 tmcft (raised), Kerala 30, Puducherry 7. **1 June 2018**: Cauvery Water Management Authority created, with a Regulation Committee. **September 2023**: deficit year; CWMA orders on releases spark protests in both states.",
          },
          {
            type: "why",
            q: "Why does Tamil Nadu oppose the Mekedatu reservoir that Karnataka calls a drinking-water project?",
            a: "++Mekedatu lies just upstream of the Tamil Nadu border++. Any large storage there lets Karnataka control the timing of flows that now reach Mettur unregulated in good monsoon months. In November 2025 the Supreme Court called Tamil Nadu's challenge to examination of the project report premature; central and CWMA clearances are still required.",
          },
          {
            type: "check",
            q: {
              id: "pe7-cauvery-dispute",
              prompt:
                "Consider the following statements:\n1. The Cauvery Water Management Authority was created following the Supreme Court's 2018 verdict.\n2. The 2018 verdict reduced Karnataka's share of Cauvery water.\n3. Mekedatu lies on the Kaveri upstream of the Tamil Nadu border.\nWhich of the statements given above are correct?",
              options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
              answer: 2,
              explain:
                "(1) True: CWMA, 1 June 2018. (2) False: the court ++counted Bengaluru's drinking-water needs and Tamil Nadu's groundwater++, so Karnataka's share went **up** to 284.75 tmcft. (3) True: Mekedatu gorge is below the Arkavathi confluence, before the border. ==1 and 3 only==.",
              trap: "Tamil Nadu \"won\" the case in popular memory, so students assume Karnataka lost water.",
              source: "Practice",
            },
          },
        ],
      },
      {
        id: "far-south",
        title: "The far south: Palar, Vaigai, Tamirabarani",
        blocks: [
          {
            type: "map",
            focus: ["palar", "vaigai", "tamirabarani"],
            caption: "Palar to the coast south of Chennai; Vaigai through Madurai to Palk Bay; Tamirabarani through Tirunelveli to the Gulf of Mannar.",
            trace: true,
          },
          {
            type: "say",
            text: "The [[palar]] is a sand river from the Nandi hills, dry most of the year. The [[vaigai]] is Madurai's river, topped up by [[periyar]] water through the **Mullaperiyar** dam. The [[tamirabarani]] rises in the Agasthyamalai (Pothigai) hills and stays perennial on two monsoons.",
          },
          {
            type: "why",
            q: "Why does Tamil Nadu divert water from Kerala's Periyar into the Vaigai?",
            a: "++The Ghats crest separates a wet west from a dry east++. The Periyar catchment gets heavy SW-monsoon rain; the Vaigai basin lies in the rain-shadow. A dam and tunnel (1895) send west-side water east.",
          },
          {
            type: "trap",
            wrong: "The Vaigai and the Tamirabarani both end in the Gulf of Mannar.",
            right: "Vaigai → **Palk Bay** (north of Rameswaram); Tamirabarani → **Gulf of Mannar** (south of it).",
            why: "Rameswaram island and Adam's Bridge split the two water bodies; a river's mouth is on one side or the other.",
          },
          {
            type: "compare",
            title: "Chapter 7 at a glance",
            columns: ["River", "Rises", "Ends / joins", "Remember because"],
            rows: [
              ["[[krishna]]", "Mahabaleshwar", "Delta near Hamsaladeevi", "++Rain-shadow basin++, so dams and disputes"],
              ["[[bhima]]", "Bhimashankar", "Krishna (left), near Raichur", "++Diagonal run++ = longest tributary"],
              ["[[tungabhadra]]", "Tunga + Bhadra at Koodli", "Krishna (right), near Alampur", "Hampi's granite gorge"],
              ["[[pennar]]", "Nandi hills", "Sea near Nellore", "++Hard quartzite++ = Gandikota canyon"],
              ["[[kaveri]]", "Talakaveri, Kodagu", "Delta near Poompuhar", "++Two monsoons++ = steadiest flow"],
              ["[[kabini]]", "Wayanad, Kerala", "Kaveri (right), T. Narasipura", "Kerala's share"],
              ["[[vaigai]]", "Varusanadu hills", "Palk Bay", "Fed by Mullaperiyar"],
              ["[[tamirabarani]]", "Agasthyamalai", "Gulf of Mannar", "++Both monsoons++ = perennial"],
            ],
          },
          {
            type: "check",
            q: {
              id: "pe7-far-south",
              prompt:
                "Consider the following statements:\n1. The Tamirabarani is perennial because its catchment receives both the south-west and north-east monsoons.\n2. The Vaigai receives water diverted from the Periyar through the Mullaperiyar dam.\n3. The Palar rises in the Western Ghats of Kerala.\nHow many of the above statements are correct?",
              options: ["Only one", "Only two", "All three", "None"],
              answer: 1,
              explain:
                "(1) True: ++the southern Ghats catch SW winds in summer and NE winds in winter++. (2) True: Mullaperiyar (1895) diverts Periyar water east. (3) False: the [[palar]] rises on the Nandi hills–Kolar plateau of Karnataka, far from the Ghats — that is why it is so dry. ==Only two==.",
              trap: "The Mullaperiyar link to Kerala makes students attach Kerala to every Tamil river.",
              source: "Practice",
            },
          },
        ],
      },
    ],
  },
];
