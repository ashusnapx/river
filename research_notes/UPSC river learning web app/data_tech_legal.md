# Data Sources, Web Stack and Legal Constraints for an Indian Rivers Web Map (Exam Aspirants)

Research date: 18 October 2026. "Own query" means a live query I ran on 18 Oct 2026 against the public Wikidata SPARQL endpoint; the numbers are a snapshot.

## 1. Open river datasets: licenses, resolution, topology, names

### Takeaway
No single open dataset gives accurate geometry, named rivers, Hindi names and a parent/child tributary graph for India. HydroRIVERS gives free, commercial-use-OK, fully routed topology (NEXT_DOWN, Strahler order, main stem) but **no names**. OSM (ODbL) gives names, including `name:hi`, with uneven topology. Indian government layers (India-WRIS, data.gov.in, Survey of India) are the most "official" but have unclear or restrictive redistribution terms. MERIT Hydro and GRDC carry share-alike or non-commercial strings. Practical stack: HydroRIVERS for routing and order, plus OSM or Wikidata for names, plus a hand-curated "exam layer" for the ~150–300 rivers that matter.

### Cited Findings
**HydroRIVERS (HydroSHEDS family, WWF/McGill)**
- Built from the HydroSHEDS 15 arc-second flow-direction grid. Streams start where upstream area exceeds 10 km² or long-term mean discharge exceeds 0.1 m³/s. Global total is 8,477,883 reaches, average length 4.23 km, 35.85 million km of rivers — [HydroRIVERS TechDoc v1.0](https://data.hydrosheds.org/file/technical-documentation/HydroRIVERS_TechDoc_v10.pdf)
- Each reach runs between two tributary junctions. Fields: `HYRIV_ID`; `NEXT_DOWN` (ID of the next downstream reach, 0 = ocean or sink, "can be used for navigation (up- and downstream)"); `MAIN_RIV` (ID of the basin's most-downstream reach, used to select a whole basin); `LENGTH_KM`; `DIST_DN_KM`; `DIST_UP_KM`; `CATCH_SKM`; `UPLAND_SKM`; `ENDORHEIC`; `DIS_AV_CMS`; `ORD_STRA` (Strahler order); `ORD_CLAS` (classical order: 1 = main stem from sink to source, 2 = its tributaries, and so on, "to identify 'backbone' rivers"); `ORD_FLOW` (log discharge classes); `HYBAS_L12` (link to the HydroBASINS level-12 sub-basin) — [HydroRIVERS TechDoc v1.0](https://data.hydrosheds.org/file/technical-documentation/HydroRIVERS_TechDoc_v10.pdf)
- No river-name attribute appears in the field list — [HydroRIVERS TechDoc v1.0](https://data.hydrosheds.org/file/technical-documentation/HydroRIVERS_TechDoc_v10.pdf)
- Quality is "significantly inferior" above 60°N, which does not affect India. Data is WGS84, shipped as shapefile or geodatabase, in global and regional tiles ("as" = Central and South-East Asia) — [HydroRIVERS TechDoc v1.0](https://data.hydrosheds.org/file/technical-documentation/HydroRIVERS_TechDoc_v10.pdf)
- License: "free for non-commercial and commercial use", under the HydroSHEDS License Agreement (not a CC license by name). Citation requested: Lehner & Grill 2013, Hydrological Processes 27(15) — [HydroRIVERS TechDoc v1.0](https://data.hydrosheds.org/file/technical-documentation/HydroRIVERS_TechDoc_v10.pdf); [HydroRIVERS page](https://www.hydrosheds.org/products/hydrorivers)
- Asia regional download: geodatabase 103 MB, shapefile 91 MB. Only version 1 of HydroRIVERS is listed — [HydroRIVERS page](https://www.hydrosheds.org/products/hydrorivers)
- HydroSHEDS v2 is currently limited to the Americas. Attribute products (HydroRIVERS, HydroATLAS) will come in "future releases" — [HydroSHEDS v2](https://www.hydrosheds.org/products/hydrosheds-v2)
- In HydroBASINS, `NEXT_DOWN` is the Hybas_id of the next downstream polygon, which gives a nested Pfafstetter basin hierarchy — [Earth Engine HydroBASINS catalog](https://developers.google.com/earth-engine/datasets/catalog/WWF_HydroSHEDS_v1_Basins_hybas_2?authuser=6)

**MERIT Hydro (Univ. of Tokyo)**
- Dual license: CC-BY-NC 4.0 (non-commercial) **or** ODbL 1.0 (commercial use OK, but derived data must be made publicly available under ODbL). Rendered "artwork" and figures are not bound by the share-alike. Download requires registration — [MERIT Hydro site](https://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_Hydro)
- Native grid is 3 arc-seconds (about 90 m); Earth Engine visual layers are upscaled to 18″ — [Earth Engine MERIT Hydro reduced](https://developers.google.com/earth-engine/datasets/catalog/MERIT_Hydro_reduced_v1_0_1)

**GRWL – Global River Widths from Landsat (Allen & Pavelsky 2018, Science 361:585)**
- 30 m resolution river centerlines with wetted width per measurement location, covering rivers ≥30 m wide. Versions on Zenodo are V01.01 (June 2018) and a re-deposit dated 12 Feb 2026 that includes a simplified single-shapefile product with `width_mean` — [Zenodo 2018](https://zenodo.org/records/1297434); [Zenodo 2026](https://zenodo.org/records/18624542)

**GRDC Major River Basins (BfG, Germany)**
- 2nd revised edition 2020, 520 "major" basins, replacing the 2007 edition (405 basins) — [GRDC MRB](https://mrb.grdc.bafg.de/)
- GRDC data provided "only for non-commercial uses" under the GRDC Data Policy. A World Bank mirror lists CC-BY 4.0, which conflicts, so GRDC's own terms should govern — [GDI-DE catalogue](https://gdk.gdi-de.org/geonetwork/srv/api/records/de.bafg.grdc.1b19599d-a17e-49f3-9829-d59d1eab43b7); [World Bank mirror](https://datacatalog.worldbank.org/search/dataset/0041426/major-river-basins-of-the-world)

**Indian government sources**
- data.gov.in "shapefile rivers": all major and minor rivers of the country, a one-time zip with no reference URL. A separate listing covers basin, sub-basin and watershed boundaries — [data.gov.in rivers](https://data.gov.in/resource/shapefile-rivers); [data.gov.in watersheds](https://www.data.gov.in/resource/shape-watershed-boundaries-india)
- The River Basin Atlas of India came from the CWC–ISRO India-WRIS project and launched 1 Nov 2012. NRSC and ISRO list 22–24 basin chapters, from Indus to Minor Rivers, plus India-level maps. A national watershed atlas at 1:50,000 was "being prepared" under India-WRIS — [India Water Portal](https://www.indiawaterportal.org/rivers-and-lakes/rivers/river-basin-atlas-india-report-central-water-commission-and-indian-space-research); [NRSC River Basin Atlas](https://www.nrsc.gov.in/nrscnew/resources_atlas.php); [ISRO](https://www.isro.gov.in/River_Basin_Atlas.html)
- India-WRIS GIS layers include basin, sub-basin, watershed, river, water bodies, dams, barrage/weir/anicut, canals and command boundaries. CWC says unclassified CWC and CGWB data is free to download. Data sharing falls under the 2013 Hydro-Meteorological Data Dissemination Policy, which builds on NDSAP 2012 — [CWC WRIS page](https://cwc.gov.in/en/water-resources-information-system-wris); [CWC HDDP 2013](https://cwc.gov.in/sites/default/files/hddp2013.pdf)
- Bhuvan NOEDA (2012-era terms) granted a "limited, non-exclusive, non-transferable" single-user license. Value-added or derivative works were allowed "with the express exclusion of the Internet based hosting" — [OSM wiki: Open Geospatial Data from GoI](https://wiki.openstreetmap.org/wiki/Open_Geospatial_Data_from_Government_of_India); [talk-in 2015](https://lists.openstreetmap.org/pipermail/talk-in/2015-May/002279.html)
- Survey of India Open Series Maps at 1:250k, 1:50k and 1:25k contain no grid or classified info and are "unrestricted" — [SoI Publications](https://surveyofindia.gov.in/pages/publications)
- The SoI portal lists free (₹0) products: Open Series Map 1:50k PDF (OVSF/50K/51); Administrative Boundary Database shapefile at 1:1M covering the entire country to district level (OVSF/1M/7) or taluk level (OVSF/1M/6); Village Boundary Database. Paid products: Political Map of India 1:4M shapefile ₹4,150; Physical Map of India 1:4.5M ₹4,150; Digital Vector Database for the entire country at 1:1M ₹68,750; Topographical 1:50k sheet ₹6,900. The page states no license or usage terms — [SoI Digital Products](https://onlinemaps.surveyofindia.gov.in/Digital_Product_Show.aspx)
- The SoI Vector Data Catalog 2025 lists 1:50k Open Series vector data as "Public (On Payment)" — [SoI Vector Data Catalog 2025](https://surveyofindia.gov.in/UserFiles/files/Vector%20Data%20Catalog%202025(1).pdf)
- The SoI portal showed a notice that services would be unavailable from 7 Oct 2025 with no end date, and that the work is "still under development" — [SoI Digital Products](https://onlinemaps.surveyofindia.gov.in/Digital_Product_Show.aspx)

**OpenStreetMap**
- A waterway relation (`type=waterway`) describes a whole river as one object, carrying `name` and `wikidata`. Roles are `main_stream` and `side_stream` (anabranches or distributaries that rejoin). The `tributary` role is contested: the main wiki page recommends Overpass queries for tributaries instead of relation membership — [OSM wiki Relation:waterway](https://wiki.openstreetmap.org/Relation:waterway); [OSM wiki Main stream](https://wiki.openstreetmap.org/wiki/Main_stream); [Role:side_stream](https://wiki.openstreetmap.org/wiki/Role:side_stream)
- The Protomaps OSM-derived basemap water layer has `kind_detail` values river, stream, canal, riverbank and others, and passes through `name:*` tags, so `name:hi` is available — [Protomaps basemap layers](https://docs.protomaps.com/basemaps/layers)

### Inferences
- **Recommended geometry and topology backbone: HydroRIVERS (Asia tile).** It is the only dataset here that is free for commercial use, attribution-only, and already a routed graph. `NEXT_DOWN` gives the parent reach, `ORD_CLAS` and `MAIN_RIV` give the main stem and basin, and `ORD_STRA` gives Strahler order. Its 15″ (~500 m) DEM-derived lines will deviate from real channels in the Indo-Gangetic plain, braided Brahmaputra reaches and deltas (Sundarbans, Godavari–Krishna). It also omits canals and interlinks. Good enough for an exam-learning map, not for engineering.
- **Names:** HydroRIVERS has none. Join names spatially from OSM `waterway=river` relations, which carry `name`, `name:hi` and `wikidata`, or attach them by hand to main-stem chains selected via `ORD_CLAS`/`MAIN_RIV`. OSM's ODbL is share-alike for the *database*. Publishing a derived names+geometry database triggers ODbL obligations, but rendered tiles or images only need attribution. (ODbL terms are general knowledge, not re-fetched in this session.)
- **Avoid as redistribution sources unless written permission is obtained:** Bhuvan derivatives (explicit no internet hosting in the 2012 terms), GRDC (non-commercial), MERIT Hydro under CC-BY-NC (or accept ODbL share-alike), and SoI vector data (paid, no stated license).
- data.gov.in content is normally under GODL-India (Government Open Data License – India, Feb 2017), which allows commercial use with attribution. I could not fetch the license page (HTTP 403), so confirm the license field on each resource page.
- Natural Earth `rivers_lake_centerlines` (public domain, 1:10m) suits a world-overview zoom (key world rivers). Not verified in this session.

### Gaps
- No primary source found for India-WRIS layer **download terms or scale** for the river layer, or for whether registration is needed. India-WRIS portal pages were not fetched.
- No license statement found on the SoI free Administrative Boundary Database, so redistribution in a public app is not confirmed.
- GRWL license is not stated in the search results; check the Zenodo "Rights" field.
- Overpass queries to count OSM river relations with `name:hi` and `wikidata` in India failed (public servers at capacity), so OSM name coverage is unquantified.
- Global Dam Watch's companion river layers and HydroRIVERS v2 timelines were not found.

## 2. Deriving a tributary graph (parent/child, bank, confluence) and existing structured data (Wikidata)

### Takeaway
Build the graph from HydroRIVERS topology. Use reach-level `NEXT_DOWN` to aggregate named chains into river-to-river edges; the confluence is the downstream end of the last tributary reach. Compute bank side (left/right) geometrically. Wikidata has the right properties (P403 mouth, P974 tributary, P885 origin, P3871 tributary orientation), but Indian coverage is thin and contains errors. Use it for IDs and labels, not as ground truth.

### Cited Findings
- HydroRIVERS reach topology: every reach links to `NEXT_DOWN`. `MAIN_RIV` groups a basin, `ORD_CLAS` = 1 identifies the main stem from sink to source, and `DIST_UP_KM` gives the longest upstream path — [HydroRIVERS TechDoc v1.0](https://data.hydrosheds.org/file/technical-documentation/HydroRIVERS_TechDoc_v10.pdf)
- OSM `tributary` role in waterway relations is disputed. The wiki recommends Overpass queries to find tributaries rather than storing them — [OSM wiki Relation:waterway](https://wiki.openstreetmap.org/Relation:waterway)
- **Wikidata coverage for India (own query, 18 Oct 2026, items with P31/P279* river (Q4022) and P17 = India):** 5,791 items. 423 have P403 (mouth of the watercourse), 111 have P974 (tributary), 69 have P885 (origin of the watercourse), 504 have a Hindi label, 248 have P2043 (length), 146 have P4614 (drainage basin), 5,328 have P625 coordinates, 935 have an English Wikipedia article, and only 1 has P3896 (geoshape) — [Wikidata Query Service](https://query.wikidata.org/)
- P3871 "tributary orientation" (left/right bank) is used 1,402 times globally but **0 times** on Indian river items (own query) — [Wikidata Query Service](https://query.wikidata.org/)
- Errors found in the Ganga (Q5089) tributary list (own query). "Padma River" is listed as a P974 tributary of the Ganga; the Padma is the Ganga's own downstream course in Bangladesh. "Sarayu" is listed as a direct tributary; NCERT has the Sarda/Sarju system joining the Ghaghara. "Yarlung Tsangpo River" is listed with mouth = Ganges. Ramganga has two items (Q15682249 and Q1850806), and Gandak/Gandaki are separate items (Q18340305 and Q849494). The Ganga has 20 P974 tributaries, the Yamuna only 7. Brahmaputra (Q45403) has P403 = Ganges — [Wikidata Query Service](https://query.wikidata.org/); [NCERT India: Physical Environment, Ch. 3 Drainage System](https://ncert.nic.in/textbook/pdf/kegy103.pdf)
- NCERT states bank membership explicitly for major systems: the Son is the Ganga's "major right bank tributary". For the Yamuna, the Chambal, Sind, Betwa and Ken join on its right bank and others (Hindan, Rind, Sengar, Varuna) on its left bank. The Mahananda joins the Ganga "as its last left bank tributary". The Tista joins the Brahmaputra on its right bank in Bangladesh — [NCERT kegy103](https://ncert.nic.in/textbook/pdf/kegy103.pdf)

### Inferences
- **Pipeline sketch** (no off-the-shelf tool found; this is my design):
  1. Clip the HydroRIVERS Asia tile to the India plus Indus, Ganga–Brahmaputra–Meghna, Irrawaddy and Helmand basins (select by `MAIN_RIV`).
  2. Keep `ORD_STRA` ≥ 4–5, or `UPLAND_SKM` ≥ ~1,000 km², for the base layer.
  3. Assign names. For each named river, take the OSM relation or hand-traced line, snap it to HydroRIVERS reaches (buffer overlap), then walk `NEXT_DOWN` until the reach whose downstream neighbour belongs to a different named river. That neighbour's river is the **parent**, and the junction point is the **confluence**.
  4. **Bank side**: at the confluence, take the parent's flow direction vector (upstream reach to downstream reach) and the tributary's last-segment vector. The sign of the 2D cross product gives the bank: tributary from the left when facing downstream means left bank.
  5. Store edges as `{child, parent, bank, confluence_lonlat, confluence_place_name}` in a small JSON or SQLite file. Hand-verify against NCERT for the exam set.
- Wikidata is useful as a stable ID hub (QIDs, Hindi labels for ~500 items, Wikipedia links). Write back verified P974/P403/P3871 statements, since P3871 is empty for India.
- Expect manual curation for: distributaries and bifurcations (Hooghly/Padma; Brahmaputra/Jamuna; Godavari's Gautami/Vasishta), named confluences (Panchprayag: Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag, Devprayag), and rivers that change name across borders (Tsangpo/Siang/Dihang/Brahmaputra/Jamuna; Satluj/Langqen Zangbo).
- Sample SPARQL to reproduce: `SELECT ?t ?tLabel WHERE { wd:Q5089 wdt:P974 ?t. SERVICE wikibase:label { bd:serviceParam wikibase:language "en,hi". } }`

### Gaps
- No existing open dataset found that ships an India tributary graph with bank sides. I did not check whether the India-WRIS river layer has parent-river attributes.
- The Wikidata count of 5,791 likely includes GeoNames-imported stream stubs. I did not measure coverage for an "exam-relevant" subset (e.g., the 100 most-asked rivers).

## 3. Dams, barrages, interlinking projects, waterfalls, Ramsar sites, river dolphins

### Takeaway
For dams, use the Global Dam Watch (GDW) v1.0 points (CC BY 4.0 per the article; confirm on Figshare) for geometry. Enrich them from CWC's National Register of Large Dams (NRLD-2023, a PDF table) for Indian names, rivers and states. Interlinking (NPP) links and Ramsar sites are small enough to curate by hand from official lists. Waterfalls and dolphin habitats have no ready open layer; build them from OSM and Wikidata plus WII reports.

### Cited Findings
- NRLD-2023 (CWC) lists 6,138 completed large dams and 143 under construction. Maharashtra has 2,333 completed and 41 under construction. It uses the ICOLD "large dam" definition. The 2018 and 2019 editions are also on the CWC publications page — [India Environment Portal](https://www.indiaenvironmentportal.org.in/reports-and-documents/national-register-of-large-specified-dams-2023); [CWC NRLD page](https://cwc.gov.in/publication/nrld)
- Global Dam Watch v1.0 (Lehner et al. 2024, Scientific Data 11, doi:10.1038/s41597-024-03752-9) has 41,145 river barriers and 35,295 reservoir polygons with height, purpose, year, volume and discharge. Barrier points without polygons include barrages, weirs and locks. Data is on [globaldamwatch.org](https://www.globaldamwatch.org) and [Figshare](https://doi.org/10.6084/m9.figshare.25988293). The article is CC BY 4.0 and a table lists the database as "Free (CC BY 4.0)" — [PMC article](https://pmc.ncbi.nlm.nih.gov/articles/PMC11461629); [GEE community catalog](https://gee-community-catalog.org/projects/gdw/)
- India-WRIS GIS layers include dams, barrages/weirs/anicuts and canals — [CWC WRIS page](https://cwc.gov.in/en/water-resources-information-system-wris)
- The National Perspective Plan (1980) identified 30 links: 16 Peninsular and 14 Himalayan. As of a Dec 2023 Lok Sabha reply, PFRs were complete for all 30, FRs for 24 and DPRs for 11 — [NWDA ILR in Parliament 2023](https://nwda.gov.in/upload/uploadfiles/ILR_parliament240823.pdf); [ThePrint](https://theprint.in/india/only-ken-betwa-link-project-under-implementation-among-30-identified-river-linking-projects-govt/3010841/)
- Ken–Betwa is "the only priority link project under the NPP that has entered the implementation stage" (2026 report). Parbati–Kalisindh–Chambal now has an MP–Rajasthan agreement. Damanganga–Pinjal and Par–Tapi–Narmada were dropped from the priority list — [ThePrint](https://theprint.in/india/only-ken-betwa-link-project-under-implementation-among-30-identified-river-linking-projects-govt/3010841/)
- Ken–Betwa cost is ₹44,605 crore. The Daudhan dam (Chhatarpur) is under construction by NCC Ltd (LoA dated 28 Nov 2024), with completion targeted for 2030. Dam height is 96.7 m per the PIB FAQ versus 77 m in another source (unresolved) — [PIB FAQ](https://www.pib.gov.in/FaqDetails.aspx?NoteId=159679&ModuleId=4&reg=3&lang=1); [MarketScreener/NCC](https://www.marketscreener.com/quote/stock/NCC-LIMITED-6498477/news/NCC-Limited-Receives-Letter-of-Acceptance-from-Ken-Betwa-Link-Project-Authority-48502231/); [India Water Portal](https://www.indiawaterportal.org/rivers-and-lakes/displacement/ken-betwa-river-inter-linking-project-between-bundelkhands-thirst-and-a-forests-survival)
- Ramsar: India's total reached **103** on ~15–16 Oct 2026 with Sukhna Wetland (Chandigarh) and Sauj Jheel (Mainpuri, UP). Glaw Lake (Arunachal) was the 101st on 3 Aug 2026, and Surha Tal (UP) the 100th in June 2026. Many exam sites still show 100, 101 or 98 — [Ramsar.org news](https://www.ramsar.org/news/india-adds-two-more-wetlands-international-importance-list); [Xinhua 16 Oct 2026](https://english.news.cn/20261016/b772b5b9744047b6bc2604c209faa81d/c.html); [Vajiram & Ravi](https://vajiramandravi.com/current-affairs/ramsar-sites-in-india/)
- River dolphins: WII's first comprehensive estimate ("Population Status of River Dolphins in India – 2024", released March 2025) found 6,327 dolphins: 6,324 Gangetic (range 5,977–6,688) and 3 Indus. About 3,275 were in the Ganga main stem and 2,414 in its tributaries. UP had 2,397 and Bihar 2,220. The Brahmaputra main stem had 584. There were no sightings in the Barak — [News On AIR](https://www.newsonair.gov.in/indias-first-ever-comprehensive-river-dolphin-survey-estimated-presence-of-6327-river-dolphins-across-the-country/); [Vision IAS](https://visionias.in/current-affairs/upsc-daily-news-summary/article/2025-03-04/the-hindu/environment/first-estimate-of-gangetic-dolphins-finds-6327-across-four-states)

### Inferences
- Join GDW points to HydroRIVERS reaches by nearest reach (GDW is from the same Lehner group, so IDs likely align with HydroSHEDS; unverified). Add Indian names, river and purpose from NRLD-2023 by fuzzy-matching name + state. NRLD is a PDF, so expect a one-time table-extraction effort.
- The exam-relevant dams and projects list (~100–200 items: Tehri, Bhakra, Sardar Sarovar, Hirakud, Nagarjuna Sagar, Farakka barrage, and so on) is small. A hand-curated GeoJSON with sources per row is cheaper and more accurate than generic datasets.
- Waterfalls: OSM `waterway=waterfall` nodes and Wikidata waterfall items (with P625 coordinates and P206 "located in or next to body of water") are the obvious open sources. Not researched in this session.
- Ramsar: the Ramsar Sites Information Service (rsis.ramsar.org) publishes site boundaries. Because the count changed twice in 2026, store a `designated_on` date per site and show an "as of" date in the UI.

### Gaps
- No GRanD-specific license found. GDW is assumed to supersede or include GRanD (unverified).
- No open GIS layer found for river-dolphin habitat stretches or Vikramshila Gangetic Dolphin Sanctuary bounds. WII report figures come via secondary summaries; the primary report was not opened.
- No open dataset of NPP link alignments (canal routes) was found. NWDA DPR maps would need digitising.
- India-WRIS dam layer attributes and terms were not verified.

## 4. Legal: India map and boundary rules, enforcement, compliance, basemap providers

### Takeaway
Publishing a map of India that does not conform to Survey of India maps is a criminal offence (Criminal Law Amendment Act 1961 s.2(2): up to 6 months' imprisonment and/or fine, prosecuted only on a Government complaint). Websites can also be blocked under IT Act s.69A. The 2021 DST Guidelines and the National Geospatial Policy 2022 liberalised data collection, but kept SoI boundaries as the mandatory standard for political maps of India. Compliance for a startup: render India's external boundary (including all of J&K, Ladakh incl. Aksai Chin and PoK/Gilgit-Baltistan, and Arunachal Pradesh) from SoI digital boundary data or an India-POV derivative. Never show the de facto LoC/LAC as the international boundary for Indian users. Add a source and disclaimer note. Basemaps that comply out of the box: Mappls, Ola Maps, Google Maps (India-localised), Natural Earth India-POV, or self-styled OSM/Protomaps tiles with India's claimed borders.

### Cited Findings
- **Criminal Law Amendment Act 1961, s.2(2):** "Whoever publishes a map of India, which is not in conformity with the maps of India as published by the Survey of India, shall be punishable with imprisonment which may extend to six months, or with fine, or with both." Under s.2(3), no court takes cognizance "except on a complaint made by the Government". Under s.2(1), questioning the territorial integrity or frontiers of India prejudicially to safety or security carries up to 3 years — [Act text, UP Police copy](https://www.uppolice.gov.in/Site-Content/uploaded-content/pdf/cl_amendment_act_1961.pdf)
- Sub-sections (2) and (3) were inserted by a 1990 amending Act — [BNB Legal bare act](https://bnblegal.com/bareact/criminal-law-amendment-act-1961/); [CaseMine](https://www.casemine.com/act/in/5a979daf4a93263ca60b7264)
- A 2001 Lok Sabha answer reported 17 cases up to then, including a foreign publisher that apologised and withdrew a map showing parts of J&K as Pakistan's or China's. A government answer also notes action against websites under IT Act 2000 s.69A (blocking) — [Lok Sabha debates, eparlib](https://eparlib.nic.in/bitstream/123456789/410041/1/26483.pdf) (per search summary; page not opened)
- The 2016 draft Geospatial Information Regulation Bill proposed up to 7 years' jail and fines up to ₹100 crore for wrong maps. No evidence was found that it was enacted — [Map Room 2016](https://www.maproomblog.com/2016/05/india-proposes-fines-jail-terms-for-incorrect-maps/)
- **DST Guidelines for acquiring and producing Geospatial Data (15 Feb 2021):** they abolished prior approvals, security clearances and licences in favour of self-certification, kept a DST-notified "negative list" of attributes that cannot be mapped, and lifted restrictions for Indian entities only (not foreign ones) — [Legal500](https://www.legal500.com/intelligence/india/privacy/mapping-the-contours-of-the-new-geospatial-guidelines-on-india); [Nishith Desai](https://nishithdesai.com/research-and-articles/hotline/technology-law-analysis/maps-and-geospatial-data-in-india-regime-liberalized-4678); [SCC Online](https://www.scconline.com/blog/post/2021/03/04/india-geospatial-data-guidelines-2021/)
- Political-maps clause: "SoI published maps or SoI digital boundary data are the standard to be used, which shall be made easily downloadable for free. Others may publish such maps that adhere to these standards." — [Vikaspedia reproduction of the 2021 Guidelines](https://en.vikaspedia.in/viewcontent/e-governance/digital-india/guidelines-for-acquiring-and-producing-geospatial-data-and-geospatial-data-services-including-maps?lgn=en). The DST geospatial portal's foreign-entity terms say "digital boundary data of the Survey of India shall be used as a standard for publishing political Maps of India" — [DST geospatial portal](https://www.geospatial.dst.gov.in/ForeignEntityTermsandCondition.aspx)
- The original DST PDF URL (dst.gov.in/sites/default/files/Final Approved Guidelines on Geospatial Data.pdf) returned HTTP 404 on 18 Oct 2026 — [dead link](https://dst.gov.in/sites/default/files/Final%20Approved%20Guidelines%20on%20Geospatial%20Data.pdf)
- The SoI portal's terms still require agreeing to "the Geospatial Data Guidelines (15 Feb 2021) and the National Geospatial Policy (NGP) 2022" — [SoI portal (search summary)](https://onlinemaps.surveyofindia.gov.in/addtocart.aspx)
- **National Geospatial Policy 2022** was notified 28 Dec 2022, with a vision to 2035. It treats publicly funded geospatial data as openly accessible, targets a high-accuracy DEM (25 cm for plains, 1–3 m for hilly areas), and has SoI launch a pan-India CORS network. Operation Dronagiri, a pilot under NGP, launched 13 Nov 2024. Budget 2025-26 also references geospatial data from PM Gati Shakti — [PIB backgrounder, 27 Feb 2025](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/feb/doc2025227509401.pdf)
- **Enforcement examples:**
  - Oct–Nov 2020: Twitter geotagged Leh as part of China. The government sent a notice, the Parliamentary Joint Committee (chair Meenakshi Lekhi) called the reply inadequate and said it amounted to a criminal offence, and Twitter gave a written apology with a fix by 30 Nov — [ThePrint](https://theprint.in/india/twitter-apologises-for-ladakh-in-china-map-error-promises-to-correct-it-says-panel/547058/); [Gulf News](https://gulfnews.com/world/asia/india/india-government-issues-warning-to-twitter-conveys-strong-disapproval-over-map-misrepresentation-1.1603366323893)
  - June 2021: Twitter's careers page ("Tweep Life") showed J&K and Ladakh as a separate country. UP Police (Khurja, Bulandshahr) filed an FIR against Twitter India MD Manish Maheshwari and Amrita Tripathi under IPC s.505(2) and IT Act s.74, and Twitter removed the map the same evening — [Deccan Herald](https://www.deccanherald.com/national/twitter-india-md-manish-maheshwari-booked-over-wrong-map-of-india-1002702.html); [Tribune](https://www.tribuneindia.com/news/nation/up-police-files-fir-against-twitter-india-md-news-partnerships-head-over-distorted-india-map-275753/amp)
  - Nepal Airlines apologised for a "cartographic inaccuracy" showing J&K and Ladakh in Pakistan (date unconfirmed) — [Daily Pioneer](https://dailypioneer.com/news/nepal-airlines-apologises-over-incorrect-india-map)
- **Basemaps and borders:**
  - Google Maps: users in India see J&K entirely inside India, while outside India it is shown as disputed (dotted). Google states that "in countries where we have local versions of Google Maps, we follow local legislation" — [Tribune](https://www.tribuneindia.com/news/j-k/kashmir-marked-disputed-on-google-maps-for-people-outside-india-42162); [Inc42](https://inc42.com/buzz/google-maps-displays-kashmir-as-disputed-land-outside-india). Reports date from ~2020.
  - Google Maps Platform India pricing gives free calls per SKU per month: 70K (Essentials), 35K (Pro), 7K (Enterprise), for developers with an Indian billing address and mostly-India usage. This replaced the $200 credit from 1 Mar 2025 — [Google India pricing](https://mapsplatform.google.com/intl/en_in/pricing/); [Google March 2025 changes](https://developers.google.com/maps/billing-and-pricing/march-2025)
  - Ola Maps (Krutrim) gives "100K free calls per API" per month. Dynamic Maps cost ₹0.141 per load (100K–5M tier) and ₹0.036 (5M+). It moved to prepaid credits from 1 Sept 2026, with a grace period to 8 Sept 2026 — [Ola Maps pricing](https://maps.olakrutrim.com/pricing)
  - Mappls (MapmyIndia) has no published price. The Maps SDK is "free to qualifying startups" subject to evaluation. The Web Vector Maps JS SDK needs an API key and the logo and copyright must stay visible — [Mappls free APIs](https://about.mappls.com/api/geo-analytics); [mappls-web-maps-js](https://github.com/mappls-api/mappls-web-maps-js); [Mappls iOS SDK wiki](https://github.com/mappls-api/mapmyindia-maps-vectorSDK-iOS/wiki/Home/e4d032875ef218d96ae80cbb9a62a0ce2cbc7601)
  - OSM: the standard map shows de facto control. India's claimed boundaries also exist in the data but are not rendered. Vector-tile styles can hide India-disputed segments and show India-claimed ones. OpenMapTiles (v3.11 disputed borders), MapTiler, Mapbox and Tangram support alternative points of view; ESRI did not as of 2021. A "super relation" for India's official outline exists — [OSM wiki India national borders](https://wiki.openstreetmap.org/wiki/WikiProject_India/Boundaries/National_borders); [OSM help](https://help.openstreetmap.org/questions/70311/why-didnt-one-of-the-india-china-disputed-border-be-shown/)
  - Protomaps basemap `boundaries` layer has a `disputed` boolean and `brk_a3`, but no documented point-of-view (worldview) option — [Protomaps layers](https://docs.protomaps.com/basemaps/layers)
  - Natural Earth publishes pre-built admin-0 "point-of-view" files for 31 countries, including India ("in"), drawn as de jure per the home country's law. The default layer is de facto — [Natural Earth POV](https://www.naturalearthdata.com/?p=5118); [Natural Earth disputed boundaries policy](https://www.naturalearthdata.com/about/disputed-boundaries-policy/)
  - SoI official external boundary is mirrored as shapefile and GeoJSON on DataMeet GitHub, license unclear — [thejeshgn.com](https://thejeshgn.com/2018/11/15/download-official-external-boundaries-of-india-by-survey-of-india/)
  - An npm package `india-basemap` uses a geoBoundaries ADM0 outline, not OSM or SoI — [india-basemap README](https://cdn.jsdelivr.net/npm/india-basemap@1.3.0/README.md)

### Inferences
- **Compliance checklist for the app:**
  1. Draw India's outline and state lines from SoI data: the free Administrative Boundary Database 1:1M (₹0), or the paid Political Map shapefile (₹4,150) for the cleanest external boundary.
  2. Use **no** third-party country polygons for India or its neighbours unless they are India-POV (Natural Earth `_ind` file or OSM claimed-border styling).
  3. Neighbours' borders on the India side must follow India's claim: Aksai Chin and Shaksgam inside India, Gilgit-Baltistan and PoK inside India, Arunachal fully inside India.
  4. Use no "disputed" dashed styling on India's claimed external border.
  5. Footer: "External boundaries of India as per Survey of India. Map not to scale for boundary purposes."
  6. Self-certify per the 2021 Guidelines; the app holds no negative-list attributes such as defence sites.
  7. Avoid geo-IP switching of borders (show the Indian view to all users) unless the audience is global.
  8. Keep river geometry layers free of national borders, so the border comes from one compliant source.
- Since the IPC was replaced by the Bharatiya Nyaya Sanhita 2023 (in force July 2024), a 2021-style FIR today would cite BNS equivalents of IPC 505. The 1961 Act and IT Act s.69A still apply. (BNS details not re-verified in this session.)
- Rivers that cross the claimed and de facto line (Indus, Shyok, Jhelum, Kishanganga/Neelum, Satluj via Shipki La, Siang) must be drawn continuously under the Indian-claim boundary. Don't clip river data at a de facto border from OSM or geoBoundaries.
- Cheapest compliant basemap: a self-hosted Protomaps or OpenMapTiles PMTiles basemap with a custom MapLibre style that hides `disputed` boundary features and overlays the SoI outline. There are no per-load fees, unlike Ola, Mappls or Google.

### Gaps
- No DST or SoI amendment to the 2021 Guidelines in 2023–2026 was found. The original DST PDF is now 404, so clause numbers could not be checked against the primary text.
- No source found confirming that Ola Maps or Mappls tiles certify SoI-conformant boundaries, though both are Indian providers targeting Indian law. Verify visually.
- The outcome of the 2021 Twitter FIR was not found.
- Current (2026) Google Maps India border rendering and the Dynamic Maps SKU India cap are unconfirmed.
- The negative list contents (2021) were not retrieved.

## 5. Web stack for a low-bandwidth, mobile-first Indian audience

### Takeaway
MapLibre GL JS with PMTiles (one static file read by HTTP range requests, no tile server, hostable on S3 or Cloudflare R2) is the best fit. Vector tiles keep a whole India river and basemap set in tens of MB total, fetched lazily at maybe a few hundred KB per session. A regional basemap extract is small enough to cache for offline PWA use.

### Cited Findings
- MapLibre reads byte ranges from a single `.pmtiles` file directly, with no `/{z}/{x}/{y}` tile server, and it can be hosted on any static host that supports range requests (S3, Cloudflare R2) — [MapLibre Flutter PMTiles docs](https://maplibre.org/flutter-maplibre-gl/advanced/pmtiles/); [Protomaps PMTiles docs](https://docs.protomaps.com/pmtiles/)
- Full planet PMTiles size is quoted variously as ~70 GB, ~100 GB and ~120 GB (conflicting). Regional extracts are small: Puglia is ~200 MB. `pmtiles extract` downloads only the needed sections. Daily planet builds rotate after a few days and are not served with CORS, so host your own file — [palewi.re tutorial](https://palewi.re/docs/first-pmtiles-map/what-you-will-make.html); [antoniogioia.com](https://www.antoniogioia.com/protomaps-open-source-single-file-maps); [Protomaps docs](https://docs.protomaps.com/)
- The Protomaps basemap schema provides water `kind_detail` (river, stream, canal, riverbank) and multilingual `name:*` fields — [Protomaps layers](https://docs.protomaps.com/basemaps/layers)
- HydroRIVERS Asia raw shapefile is 91 MB, before clipping and simplification — [HydroRIVERS page](https://www.hydrosheds.org/products/hydrorivers)

### Inferences
- **Choice:** MapLibre GL JS (BSD, WebGL vector, free, Mapbox-style spec, works with PMTiles). Leaflet is lighter (~40 KB) but raster-first. Leaflet plus GeoJSON is fine for a tiny prototype, but it struggles with thousands of river lines and labels on low-end Android. deck.gl is overkill unless doing animations or flows. Library sizes and licenses are from general knowledge, not verified this session.
- **Data prep:** run mapshaper (`-filter`, `-simplify visvalingam 5–10% keep-shapes`, `-clean`) on the India clip of HydroRIVERS, keeping order ≥ 4. Then use tippecanoe (`-zg --drop-densest-as-needed`, or per-zoom filters by `ORD_STRA`) to make `rivers.pmtiles`. Rough guess: a few MB to ~20 MB for the India river network to z12. Basins (HydroBASINS L4–L6 or India-WRIS basins) are <5 MB. Dams, waterfalls and Ramsar points are <1 MB of GeoJSON.
- **Basemap:** an India-only Protomaps extract, perhaps a few hundred MB to z14, or cap at z10 for a few tens of MB, since exam use rarely needs street level. Or skip a full basemap and use a minimal style: land, sea, SoI boundary, state lines, rivers.
- **Offline/PWA:** a service worker (Workbox) caches the app shell, style, fonts and low-zoom tiles. Low-zoom PMTiles ranges can be pre-fetched or the file cached whole. Offline quizzes work entirely from a JSON tributary graph of ~100s of KB.
- Use self-hosted glyph PBFs that include Devanagari for Hindi labels. MapLibre needs complex-script shaping for correct Devanagari rendering (rtl-text plugin or newer local-glyph rendering). Check this.

### Gaps
- No benchmark found for MapLibre versus Leaflet on low-end Android, or measured PMTiles sizes for an India river set. Size estimates above are mine.
- MapLibre Devanagari shaping status in 2026 was not verified.

## 6. Accuracy pitfalls: disputed origins, NCERT versus other sources

### Takeaway
NCERT (the de-facto UPSC and state PSC reference) still gives the Chemayungdung glacier as the Brahmaputra's source. A 2011 Chinese Academy of Sciences study placed it at the Angsi glacier, and some recent exam answer keys follow Angsi. NCERT also uses outdated district names and convention-based definitions, such as "Ganga" beginning at Devprayag. Store both an "exam answer" (with NCERT citation) and a "geographic note" per fact, and show both.

### Cited Findings
- NCERT (Class XI, India: Physical Environment, Ch. 3) on origins:
  - Indus: rises "from a glacier near Bokhar Chu (31°15′N, 81°40′E) … at an altitude of 4,164 m in the Kailash Mountain range".
  - Jhelum: rises from a spring at Verinag.
  - Beas: rises near the Rohtang Pass.
  - Satluj: "originates in the 'Raksas tal' near Mansarovar".
  - Ganga: rises in the "Gangotri glacier near Gaumukh (3,900 m) … known as the Bhagirathi … At Devprayag, the Bhagirathi meets the Alaknanda; hereafter, it is known as the Ganga".
  - Alaknanda: source in the Satopanth glacier above Badrinath.
  - Yamuna: rises in the Yamunotri glacier.
  - Chambal: rises near Mhow.
  - Ghaghara: originates in the glaciers of Mapchachungo.
  - Brahmaputra: rises in the "Chemayungdung glacier of the Kailash range near the Mansarovar lake", enters India west of Sadiya as Siang/Dihang.
  - Mahanadi: "rises near Sihawa in Raipur district of Chhattisgarh", 851 km.
  - Godavari: "rises in the Nasik district of Maharashtra".
  - Krishna: rises near Mahabaleshwar.
  - Kaveri: rises "in Brahmagiri hills (1,341m) of Kogadu district in Karnataka", 800 km, 81,155 km².
  - Tapi: originates from Multai in Betul.
  - Narmada: from the Amarkantak plateau.
  — [NCERT kegy103](https://ncert.nic.in/textbook/pdf/kegy103.pdf)
- A 2011 Chinese Academy of Sciences study pinpointed the sources of the Brahmaputra (Angsi glacier) and the Indus. Chemayungdung, the earlier accepted source from Swami Pranavananda's 1939 claim, is still used by Britannica and many Indian materials — [Wikipedia: Angsi Glacier](https://en.wikipedia.org/wiki/Angsi_Glacier)
- At least one recent exam answer (DSSSB, 12 Aug 2024) explains the Brahmaputra source as the Angsi glacier — [nprep DSSSB 2024](https://nprep.in/question-answer/which-of-the-following-rivers-is-situated-closest-to-india-bUCXq4OepQ_EFWtD4dfg5)
- Wikidata tributary data contains structural errors for the Ganga system (Padma as a tributary, Sarayu attached directly to the Ganga, duplicate items) — own query, [Wikidata Query Service](https://query.wikidata.org/)
- Exam-current facts change during the year (Ramsar count 98 → 103 across 2026 sources). Many prep sites lag official announcements — [Ramsar.org](https://www.ramsar.org/news/india-adds-two-more-wetlands-international-importance-list); [Adda247](https://currentaffairs.adda247.com/ramsar-sites-in-india-2026-state-wise-list-of-all-101-ramsar-sites-latest-updates-largest-smallest-wetlands/)
- The Ken–Betwa Daudhan dam height is quoted as both 96.7 m and 77 m — [PIB FAQ](https://www.pib.gov.in/FaqDetails.aspx?NoteId=159679&ModuleId=4&reg=3&lang=1); [India Water Portal](https://www.indiawaterportal.org/rivers-and-lakes/displacement/ken-betwa-river-inter-linking-project-between-bundelkhands-thirst-and-a-forests-survival)

### Inferences
- **Data model:** per river or fact, store `exam_answer`, `exam_source` (NCERT chapter and page), `geo_note`, `geo_source` and `confidence`. Show "NCERT says X; recent research says Y". Example: Brahmaputra source = Chemayungdung (NCERT) versus Angsi glacier (CAS 2011, used in DSSSB 2024).
- Known convention traps to flag in UI:
  - "Ganga" officially starts at Devprayag; above it the river is the Bhagirathi.
  - NCERT's "Raipur district" for Sihawa is outdated. Sihawa is in present-day Dhamtari district, created 1998 (my knowledge; verify).
  - Godavari "Nasik district" versus the commonly cited Trimbakeshwar/Brahmagiri hills: same place, different granularity.
  - "Kogadu" means Kodagu (Coorg).
  - Name changes along the course: Tsangpo, Siang/Dihang, Brahmaputra, Jamuna; Ganga to Padma; the Hooghly distributary.
  - The Indus source (Bokhar Chu, NCERT) versus other descriptions near Senge Khabab or Mount Kailash.
- Lengths and basin areas differ between NCERT, CWC basin reports and HydroRIVERS (DEM-derived lengths will not match). Show official CWC or NCERT figures as text and never compute "length" from the map geometry for quiz answers.
- Tag every fact with a source and a "last verified" date. Re-check current-affairs-type layers (Ramsar, NPP status, dolphin counts, new dams) each quarter.

### Gaps
- I could not confirm whether the latest (2025–26 rationalised) NCERT edition changed the Brahmaputra source text. The PDF fetched on 18 Oct 2026 still says Chemayungdung, but edition and year were not checked.
- No UPSC official answer key explicitly adopting Angsi was found; only a DSSSB explanation.
- Godavari source details (Brahmagiri near Trimbakeshwar) are not confirmed from a primary source in this session.
