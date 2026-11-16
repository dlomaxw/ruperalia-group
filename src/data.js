/* Seed data for the CMS. Every public claim traces to a source in SOURCES.
   status: active | pre-opening | verify | historical
   rel: group-company | group-brand | managed-property | joint-venture | affiliate | uncertain | not-group
   conf: high | medium | low
   published: shown on the public site */
const CATEGORIES=[
 {id:"hospitality",name:"Hospitality",intro:"Hotels, resorts, a convention centre, serviced apartments and a country club, operated under the Speke Group of Hotels.",count:"13 hotels, resorts & venues",visible:true},
 {id:"real-estate",name:"Real Estate",intro:"Development, ownership and management of commercial, residential and industrial property across Kampala and other Ugandan towns.",count:"Developer & property manager",visible:true},
 {id:"education",name:"Education",intro:"A chartered university and three schools spanning international, Indian-curriculum and Ugandan primary education.",count:"4 institutions",visible:true},
 {id:"floriculture",name:"Floriculture",intro:"Cut-rose growing and export from farms near Entebbe, supplying markets in Europe and beyond.",count:"2 rose exporters",visible:true},
 {id:"insurance",name:"Insurance",intro:"General insurance for businesses, institutions and individuals across Uganda.",count:"General insurance",visible:true},
 {id:"media",name:"Media & Communications",intro:"Radio broadcasting and advertising services.",count:"Radio & advertising",visible:true},
 {id:"workforce",name:"Workforce Solutions",intro:"Licensed recruitment and workforce training for employers in Uganda and abroad.",count:"Recruitment & training",visible:true}
];
const REL_LABEL={"group-company":"Group company","group-brand":"Group brand","managed-property":"Managed property","joint-venture":"Joint venture","affiliate":"Affiliate","uncertain":"Relationship to verify","not-group":"Not a group company"};
const STATUS_LABEL={"active":"Active","pre-opening":"Pre-opening","verify":"Verify","historical":"Historical"};
const TYPE_LABEL={company:"Legal company",brand:"Operating brand",hotel:"Hotel",resort:"Resort",venue:"Venue",apartments:"Serviced apartments",club:"Country club",property:"Property",institution:"Institution",foundation:"Foundation",team:"Sports team"};

const ENTITIES=[
/* HOSPITALITY */
{id:"speke-group",name:"Speke Group of Hotels",cats:["hospitality"],type:"brand",rel:"group-brand",status:"active",country:["Uganda"],url:"https://spekegroup.com",logo:null,conf:"high",featured:1,published:true,
 short:"The group's hospitality brand: 13 published hotels, resorts, venues and apartment properties.",
 long:"Speke Group of Hotels operates the group's hospitality portfolio, from the historic Speke Hotel in central Kampala to the lakeside resorts at Munyonyo. Its published portfolio lists 13 properties and venues.",
 facts:{"Properties":"13 hotels, resorts and venues","Headquarters":"Kampala"},src:[2]},
{id:"speke-hotel",name:"Speke Hotel",legal:"Speke Hotel (1996) Ltd",cats:["hospitality"],type:"hotel",rel:"group-company",status:"active",country:["Uganda"],url:"https://spekegroup.com",logo:"speke-hotel",conf:"high",parent:"speke-group",published:true,
 short:"Kampala's long-established city-centre hotel on Nile Avenue.",
 long:"Speke Hotel sits on Nile Avenue in central Kampala and is part of the Speke Group of Hotels.",facts:{"Address":"7–9 Nile Avenue, Kampala","Operator":"Speke Group of Hotels"},src:[1,2]},
{id:"speke-resort-munyonyo",name:"Speke Resort Munyonyo",cats:["hospitality"],type:"resort",rel:"group-company",status:"active",country:["Uganda"],url:"https://spekegroup.com/speke-resort-munyonyo/",logo:"speke-resort-munyonyo",conf:"high",parent:"speke-group",featured:2,published:true,
 short:"Lakeside resort on the shores of Lake Victoria at Munyonyo.",
 long:"Speke Resort Munyonyo is the group's lakeside resort on Lake Victoria, and the departure point for boats to Paradise Island Resort.",facts:{"Location":"Munyonyo, Kampala","Operator":"Speke Group of Hotels"},src:[2]},
{id:"munyonyo-commonwealth-resort",name:"Munyonyo Commonwealth Resort",cats:["hospitality"],type:"resort",rel:"joint-venture",status:"active",country:["Uganda"],url:"https://spekegroup.com",logo:"munyonyo-commonwealth-resort",conf:"high",parent:"speke-group",published:true,
 short:"Resort at Munyonyo with a public-sector shareholding.",
 long:"Munyonyo Commonwealth Resort is part of the Speke Group portfolio at Munyonyo.",ownership:"The Ministry of Finance reported a 25% Uganda Development Corporation stake for FY 2024/25.",facts:{"Location":"Munyonyo, Kampala"},src:[2,6]},
{id:"speke-resort-convention-centre",name:"Speke Resort Convention Centre",legal:"Speke Resort Convention Centre Ltd",cats:["hospitality"],type:"venue",rel:"joint-venture",status:"active",country:["Uganda"],url:"https://spekegroup.com",logo:null,conf:"high",parent:"speke-group",published:true,
 short:"Convention and events venue at Munyonyo.",
 long:"Speke Resort Convention Centre hosts conferences, summits and large events at Munyonyo.",ownership:"The Ministry of Finance reported a 50% Uganda Development Corporation stake for FY 2024/25.",facts:{"Location":"Munyonyo, Kampala"},src:[2,6]},
{id:"kabira-country-club",name:"Kabira Country Club",cats:["hospitality"],type:"club",rel:"group-company",status:"active",country:["Uganda"],url:"https://spekegroup.com/kabira-country-club/",logo:"kabira-country-club",conf:"high",parent:"speke-group",published:true,
 short:"Hotel and country club in Bukoto, Kampala.",
 long:"Kabira Country Club combines a hotel with sports and leisure facilities in Bukoto. Redevelopment designs with high-rise towers and a five-star hotel were released in March 2026.",facts:{"Location":"Bukoto, Kampala"},src:[2,30]},
{id:"forest-cottages",name:"Forest Cottages Hotel",cats:["hospitality"],type:"hotel",rel:"group-company",status:"active",country:["Uganda"],url:"https://spekegroup.com",logo:"forest-cottages",conf:"high",parent:"speke-group",published:true,
 short:"Boutique hotel in Bukoto.",long:"Forest Cottages is a smaller hotel within the Speke Group of Hotels.",facts:{"Location":"Bukoto, Kampala"},src:[2]},
{id:"dolphin-suites",name:"Dolphin Suites Hotel",cats:["hospitality"],type:"hotel",rel:"group-company",status:"active",country:["Uganda"],url:"https://spekegroup.com",logo:"dolphin-suites",conf:"high",parent:"speke-group",published:true,
 short:"Suites hotel in Kampala.",long:"Dolphin Suites is part of the Speke Group of Hotels.",facts:{"Location":"Kampala"},src:[2]},
{id:"speke-apartments",name:"Speke Apartments",legal:"Speke Apartments Limited (older listings)",cats:["hospitality","real-estate"],type:"apartments",rel:"group-company",status:"active",country:["Uganda"],url:"https://spekegroup.com",logo:null,conf:"high",parent:"speke-group",published:true,
 short:"Serviced apartments across six Kampala addresses.",
 long:"The group's serviced-apartment collection: Speke Apartments Wampewo, Speke Apartments Kitante, Boulevard Suites, Bukoto Heights, Tagore Apartments and Naguru Apartments.",
 list:["Speke Apartments Wampewo","Speke Apartments Kitante","Boulevard Suites","Bukoto Heights","Tagore Apartments","Naguru Apartments"],facts:{"Locations":"Kololo, Kitante, Bukoto, Naguru"},src:[1,2,19]},
{id:"paradise-island-resort",name:"Paradise Island Resort",cats:["hospitality"],type:"resort",rel:"group-company",status:"pre-opening",country:["Uganda"],url:"https://paradiseisland-resort.com/",logo:null,conf:"medium",featured:3,published:true,
 short:"Private-island resort on Lake Victoria, 20 minutes by boat from Speke Resort Munyonyo.",
 long:"Paradise Island Resort is a 38-unit retreat on a 19-acre private island in Lake Victoria, about 20 minutes by speedboat from Speke Resort Munyonyo. First guest arrivals are announced for 1 December 2026.",
 facts:{"Island":"19 acres, Lake Victoria","Units":"38","Opening":"First guests 1 December 2026"},src:[20,27]},
{id:"kampala-tourist-hotel",name:"Kampala Tourist Hotel",cats:["hospitality"],type:"hotel",rel:"uncertain",status:"verify",country:["Uganda"],url:"",logo:"tourist-hotel",conf:"low",published:false,
 short:"Appears in older group listings; absent from Speke Group's current list.",long:"",internal:"Not in Speke Group's 13-property list. Has its own hotel profile. Confirm with management before publishing.",src:[2,19,26]},
/* REAL ESTATE */
{id:"meera-investments",name:"Meera Investments",legal:"Meera Investments Limited",cats:["real-estate"],type:"company",rel:"group-company",status:"active",country:["Uganda"],url:"",logo:"meera-investments",conf:"high",featured:4,published:true,
 short:"The group's property developer, behind Pearl Business Park and Kingdom Kampala.",
 long:"Meera Investments develops and owns the group's commercial and residential property, including Pearl Business Park on Yusuf Lule Road and Kingdom Kampala. Government records name it as the Ruparelia partner in major hospitality joint ventures.",facts:{"Activity":"Property development","Flagship":"Pearl Business Park"},src:[1,6,28]},
{id:"crane-management-services",name:"Crane Management Services",legal:"Crane Management Services Limited",cats:["real-estate"],type:"company",rel:"group-company",status:"active",country:["Uganda"],url:"https://cms.co.ug",logo:"crane-management-services",conf:"high",featured:5,published:true,
 short:"Property management, leasing and marketing for the group's commercial buildings.",
 long:"Crane Management Services (CMS) manages and leases the group's commercial, industrial and residential property in Kampala and other Ugandan towns. It describes itself as a Ruparelia Group subsidiary.",
 facts:{"Activity":"Property management & leasing","Offices":"Crane Chambers, Kampala Road"},src:[1,3,29]},
{id:"pearl-business-park",name:"Pearl Business Park",cats:["real-estate"],type:"property",rel:"managed-property",status:"active",country:["Uganda"],url:"",logo:null,conf:"high",parent:"meera-investments",published:true,
 short:"Mixed-use business park on Yusuf Lule Road; Pearl Tower One is complete.",
 long:"Pearl Business Park is an 18–20 acre mixed-use development on Yusuf Lule Road, Kampala. Its first phase, the 19-storey Grade-A RR Pearl Tower One, was completed in 2025. Plans for later phases include further office towers, a hotel, retail and a hospital.",
 facts:{"Developer":"Meera Investments","Completed":"RR Pearl Tower One (19 storeys, 2025)","Use":"Offices; later phases mixed-use"},src:[1,28]},
{id:"kingdom-kampala",name:"Kingdom Kampala",cats:["real-estate"],type:"property",rel:"managed-property",status:"active",country:["Uganda"],url:"https://cms.co.ug/all-properties/",logo:null,conf:"high",parent:"crane-management-services",published:true,
 short:"Mixed-use mall and office complex in central Kampala; phase two announced in 2026.",
 long:"Kingdom Kampala is a mall and office complex in central Kampala managed by Crane Management Services. A second phase with a 21-storey tower was announced in January 2026.",facts:{"Manager":"Crane Management Services"},src:[3,31]},
{id:"cms-commercial-portfolio",name:"Commercial buildings managed by CMS",cats:["real-estate"],type:"property",rel:"managed-property",status:"active",country:["Uganda"],url:"https://cms.co.ug/all-properties/",logo:null,conf:"high",parent:"crane-management-services",published:true,
 short:"Office, retail and warehouse buildings across Kampala.",
 long:"Crane Management Services markets and manages a commercial portfolio across Kampala, including warehouse properties in Industrial Area, Banda and Ntinda.",
 list:["Kampala Boulevard","Electrical Plaza","Hardware City","Hardware Plaza","Market Plaza","City Plaza","Crane Plaza","Eagle Plaza","Royal Plaza","The Plaza","The Cube","City House","Warehouses: Industrial Area, Banda, Ntinda"],facts:{"Manager":"Crane Management Services"},src:[1,3]},
{id:"residential-developments",name:"Residential developments",cats:["real-estate"],type:"property",rel:"managed-property",status:"active",country:["Uganda"],url:"https://cms.co.ug/all-properties/",logo:null,conf:"high",parent:"meera-investments",published:true,
 short:"Apartment projects including One-10 Apartments in Kololo.",
 long:"The group's residential projects include One-10 Apartments, a 15-storey tower in Kololo, together with Tagore Living and The Vista in Naguru.",
 list:["One-10 Apartments, Kololo","Tagore Living","The Vista – Naguru"],facts:{"Developer":"Meera Investments"},src:[3,32]},
{id:"arie-towers",name:"Arie Towers",cats:["real-estate"],type:"property",rel:"uncertain",status:"verify",country:["Uganda"],url:"",logo:null,conf:"medium",published:false,
 short:"14-storey building in Nakasero, formerly Lotis Towers.",long:"",internal:"Reported as bought in 2024 by Sudhir and Jyotsna Ruparelia personally, then renamed. Confirm which entity holds it before listing.",src:[21,33]},
{id:"vcon",name:"VCon Construction Uganda",legal:"VCon Construction Uganda Limited",cats:["real-estate"],type:"company",rel:"uncertain",status:"verify",country:["Uganda"],url:"https://vcon.co.ug",logo:null,conf:"low",published:false,
 short:"Construction company.",long:"",internal:"CONFLICT: group sector page lists VCon; VCon's own site says it is owned by Ntin Mavji Vekariya. Do not publish until ownership is documented.",src:[1,4]},
{id:"premier-sand",name:"Premier Sand Limited",cats:["real-estate"],type:"company",rel:"uncertain",status:"verify",country:["Uganda"],url:"",logo:null,conf:"low",published:false,short:"Reported as a group investment.",long:"",internal:"Only a press report. Confirm status.",src:[19]},
{id:"premier-central-properties",name:"Premier Central Properties Limited",cats:["real-estate"],type:"company",rel:"uncertain",status:"verify",country:["Uganda"],url:"",logo:null,conf:"low",published:false,short:"Named in an older group profile.",long:"",internal:"Older profile only.",src:[5]},
/* EDUCATION */
{id:"victoria-university",name:"Victoria University",cats:["education"],type:"institution",rel:"group-company",status:"active",country:["Uganda"],url:"https://vu.ac.ug",logo:"victoria-university",conf:"high",featured:6,published:true,
 short:"Chartered private university at Victoria Towers, Jinja Road, Kampala.",
 long:"Victoria University is a chartered private university in central Kampala offering diploma, undergraduate and postgraduate programmes with a focus on experiential, work-integrated learning.",
 facts:{"Campus":"Victoria Towers, 1–13 Jinja Road, Kampala","Status":"Chartered university"},edu:{level:"Higher education",admissions:"https://vu.ac.ug"},src:[1,5,34]},
{id:"kisu",name:"Kampala International School Uganda (KISU)",cats:["education"],type:"institution",rel:"group-company",status:"active",country:["Uganda"],url:"https://www.kisu.com",logo:"kisu",conf:"high",published:true,
 short:"International school in Bukoto for students aged 2 to 18.",
 long:"Founded in 1993, KISU offers an English National Curriculum-based primary programme, IGCSE and the IB Diploma on its Bukoto campus.",
 facts:{"Founded":"1993","Campus":"Bukoto, Kampala","Curricula":"British curriculum, IGCSE, IB Diploma"},edu:{level:"Early years to Year 13",admissions:"https://www.kisu.com"},src:[1,5,35]},
{id:"kampala-parents-school",name:"Kampala Parents' School",cats:["education"],type:"institution",rel:"group-company",status:"active",country:["Uganda"],url:"https://kampalaparents.com",logo:"kampala-parents-school",conf:"high",published:true,
 short:"Primary school in Kampala.",long:"Kampala Parents' School is a primary school in Kampala.",facts:{"Level":"Primary"},edu:{level:"Primary",admissions:"https://kampalaparents.com"},src:[1]},
{id:"dps-international",name:"Delhi Public School International",cats:["education"],type:"institution",rel:"group-company",status:"active",country:["Uganda"],url:"https://dpsuganda.com",logo:null,conf:"high",published:true,
 short:"CBSE-affiliated international school in Naguru, Kampala.",
 long:"Delhi Public School International follows the Indian (CBSE) curriculum from nursery to Class XII at its Saddler Way campus in Naguru.",
 facts:{"Campus":"Plot 17–25 Saddler Way, Naguru","Curriculum":"CBSE (Indian)"},edu:{level:"Nursery to Class XII",admissions:"https://dpsuganda.com"},src:[1,35]},
/* FLORICULTURE */
{id:"rosebud",name:"Rosebud Limited",cats:["floriculture"],type:"company",rel:"group-company",status:"active",country:["Uganda"],url:"https://rosebudlimited.com",logo:"rosebud",conf:"high",published:true,
 short:"Rose grower and exporter based near Entebbe.",
 long:"Rosebud grows and exports cut roses from its farm near Entebbe in Wakiso District, which holds Uganda Free Zones status.",facts:{"Location":"Entebbe Road, Wakiso","Registered":"1999"},src:[1,4,36]},
{id:"premier-roses",name:"Premier Roses Limited",cats:["floriculture"],type:"company",rel:"group-company",status:"active",country:["Uganda"],url:"https://rosebudlimited.com",logo:"premier-roses",conf:"high",published:true,
 short:"Sweetheart-rose grower and exporter near Entebbe.",
 long:"Premier Roses produces cut roses for export from Entebbe, alongside Rosebud.",facts:{"Location":"Entebbe, Wakiso","Registered":"2004"},src:[1,4,36]},
/* INSURANCE */
{id:"goldstar-insurance",name:"Goldstar Insurance",legal:"Goldstar Insurance Company Limited",cats:["insurance"],type:"company",rel:"group-company",status:"active",country:["Uganda"],url:"https://goldstarinsurance.com",logo:"goldstar-insurance",conf:"high",featured:7,published:true,
 short:"General insurer marking 30 years in Uganda in 2026.",
 long:"Goldstar Insurance provides general insurance to businesses, institutions and individuals across Uganda. It is licensed by the Insurance Regulatory Authority of Uganda, holds a GCR national-scale financial strength rating of AA(UG), and marked 30 years of operation in 2026.",
 facts:{"Rating":"AA(UG), GCR Ratings (affirmed May 2026)","Offices":"Crane Chambers, Kampala Road","Regulator":"Insurance Regulatory Authority of Uganda"},
 ownership:"A 2024 tribunal decision records Goldstar International Limited, a Bahamas company, as its 90% direct shareholder at the time.",src:[1,8,37]},
/* MEDIA */
{id:"sanyu-fm",name:"88.2 Sanyu FM",legal:"Sanyu FM 2000 Limited",cats:["media"],type:"company",rel:"group-company",status:"active",country:["Uganda"],url:"https://sanyufm.com",logo:"sanyu-fm",conf:"high",featured:8,published:true,
 short:"English-language urban radio station on air since 1993.",
 long:"88.2 Sanyu FM was one of Uganda's first private FM stations, launched in 1993. It broadcasts music, news and current affairs to Kampala and beyond.",facts:{"Frequency":"88.2 FM","On air since":"1993","Studios":"6th Floor, Crane Chambers, Kampala Road"},src:[1,7,38]},
{id:"premier-advertising",name:"Premier Advertising & Media",legal:"Premier Advertising & Media Limited",cats:["media"],type:"company",rel:"group-company",status:"active",country:["Uganda"],url:"https://premieradvertising.com",logo:null,conf:"medium",published:true,
 short:"Advertising and media services.",long:"Premier Advertising & Media provides advertising and media services within the group.",facts:{},src:[4,5,25]},
/* WORKFORCE */
{id:"premier-recruitment",name:"Premier Recruitment",legal:"Premier Recruitment Limited",cats:["workforce"],type:"company",rel:"group-company",status:"active",country:["Uganda"],url:"https://premierrecruitment.com",logo:null,conf:"high",published:true,
 short:"Licensed recruitment agency placing Ugandans in jobs at home and abroad.",
 long:"Premier Recruitment is licensed by the Ministry of Gender, Labour and Social Development for internal and external recruitment, and places candidates with employers in Uganda and abroad.",facts:{"Licence":"Ministry of Gender, Labour and Social Development"},src:[1,9,39]},
{id:"sphere-recruitment",name:"Sphere Recruitment",legal:"Sphere Recruitment Limited",cats:["workforce"],type:"company",rel:"affiliate",status:"active",country:["Uganda"],url:"",logo:null,conf:"medium",published:true,
 short:"Recruitment company listed in the labour ministry directory.",long:"Sphere Recruitment appears in the group profile and in the labour ministry's directory of recruitment companies.",facts:{},src:[5,10]},
{id:"inaries",name:"Inaries Training Centre",cats:["workforce"],type:"institution",rel:"group-brand",status:"active",country:["Uganda"],url:"https://inaries.com",logo:null,conf:"medium",published:true,
 short:"Workforce training ahead of placement.",long:"Inaries Training Centre provides workforce training. Group website materials call it Inaries Recruitment Services.",facts:{},src:[4,11]},
{id:"serene-recruitment-ug",name:"Serene Recruitment (Uganda)",cats:["workforce"],type:"company",rel:"uncertain",status:"verify",country:["Uganda"],url:"",logo:null,conf:"low",published:false,short:"Listed by the labour ministry; named as an Inaries partner.",long:"",internal:"Group ownership unverified.",src:[11,12]},
/* IMPACT */
{id:"ruparelia-foundation",name:"Ruparelia Foundation",cats:["impact"],type:"foundation",rel:"group-brand",status:"active",country:["Uganda"],url:"https://rupareliafoundation.org",logo:"ruparelia-foundation",conf:"high",published:true,
 short:"The family's philanthropic foundation, established in 2012.",
 long:"Dr and Mrs Sudhir Ruparelia established the Ruparelia Foundation in 2012. Its work includes education scholarships and community health programmes such as free eye camps.",facts:{"Established":"2012"},src:[18,40]},
{id:"rr-rally-team",name:"RR Rally Team",cats:["impact"],type:"team",rel:"group-brand",status:"verify",country:["Uganda"],url:"",logo:null,conf:"low",published:false,short:"Motorsport team.",long:"",internal:"Status after 2025 needs confirming with the family before any mention.",src:[5,18]},
/* HISTORICAL / NOT GROUP — CMS only */
{id:"crane-bank",name:"Crane Bank Limited",cats:["insurance"],type:"company",rel:"group-company",status:"historical",country:["Uganda"],url:"",logo:"crane-bank",conf:"high",published:false,short:"Former bank.",long:"",internal:"Bank of Uganda took over management Oct 2016; dfcu acquired assets Jan 2017.",src:[14]},
{id:"crane-bank-rwanda",name:"Crane Bank Rwanda Limited",cats:["insurance"],type:"company",rel:"group-company",status:"historical",country:["Rwanda"],url:"",logo:null,conf:"high",published:false,short:"Former subsidiary.",long:"",internal:"Acquired by Commercial Bank of Africa.",src:[16]},
{id:"crane-forex",name:"Crane Forex, Karibu Forex, Redfox Forex",cats:["insurance"],type:"company",rel:"group-company",status:"historical",country:["Uganda"],url:"",logo:"crane-forex-bureau",conf:"high",published:false,short:"Former forex bureaus.",long:"",internal:"Licences withdrawn 2017.",src:[15]},
{id:"premier-credit",name:"Premier Credit Uganda",cats:["insurance"],type:"company",rel:"not-group",status:"verify",country:["Uganda"],url:"",logo:null,conf:"high",published:false,short:"Credit company.",long:"",internal:"CONFLICT: named on the group's sample page, but IFC identifies it as a Platcorp Holdings subsidiary. Remove from group materials.",src:[4,17]},
{id:"serene-uk",name:"Serene Recruitment (UK) Ltd",cats:["workforce"],type:"company",rel:"affiliate",status:"historical",country:["United Kingdom"],url:"",logo:null,conf:"high",published:false,short:"Former affiliate.",long:"",internal:"Companies House: dissolved 17 Feb 2026 (no. 14430528).",src:[5,13]}
];

const NEWS=[
 {id:"paradise-island",date:"2026-11-03",cat:"hospitality",title:"Paradise Island Resort to welcome first guests on 1 December",body:"The group's 38-unit resort on a 19-acre private island in Lake Victoria will open on 1 December 2026. Guests reach the island by a 20-minute boat ride from Speke Resort Munyonyo.",ent:"paradise-island-resort",src:[20,27]},
 {id:"goldstar-30",date:"2026-06-15",cat:"insurance",title:"Goldstar Insurance marks 30 years with its AA(UG) rating affirmed",body:"Goldstar Insurance celebrated three decades in Uganda's general insurance market. GCR Ratings reaffirmed its AA(UG) national-scale financial strength rating with a stable outlook in May 2026.",ent:"goldstar-insurance",src:[37]},
 {id:"kabira",date:"2026-03-03",cat:"hospitality",title:"Redevelopment designs released for Kabira Country Club",body:"Designs for a redeveloped Kabira Country Club show high-rise towers and a five-star hotel replacing the current low-rise layout in Bukoto.",ent:"kabira-country-club",src:[30]},
 {id:"kingdom-2",date:"2026-01-23",cat:"real-estate",title:"Kingdom Kampala begins its second phase",body:"Phase two of Kingdom Kampala is anchored by a 21-storey tower rising from a podium joined to the existing mall complex.",ent:"kingdom-kampala",src:[31]},
 {id:"pearl-one",date:"2025-07-10",cat:"real-estate",title:"RR Pearl Tower One completed at Pearl Business Park",body:"Meera Investments completed the 19-storey Grade-A office tower on Yusuf Lule Road, the first phase of Pearl Business Park.",ent:"pearl-business-park",src:[28]}
];

const SOURCES={
 1:{t:"Ruparelia Group | Pearl Business Park brochure",tier:"B"},2:{t:"Speke Group of Hotels | Official portfolio",tier:"B",url:"https://spekegroup.com/"},3:{t:"Crane Management Services | Company and properties",tier:"B",url:"https://cms.co.ug/"},
 4:{t:"Ruparelia Group | Sector descriptions",tier:"B",url:"https://rupareliagroup.com/sample-page/"},5:{t:"Serene Recruitment UK | Company profile and group logos",tier:"D"},6:{t:"Uganda Ministry of Finance | FY 2024/25 sector report",tier:"A"},
 7:{t:"Uganda Media Council | Electronic media register",tier:"A"},8:{t:"PPDA Appeals Tribunal | Goldstar insurance decision",tier:"A"},9:{t:"Uganda labour ministry | Premier Recruitment",tier:"A"},
 10:{t:"Uganda labour ministry | Sphere Recruitment",tier:"A"},11:{t:"Inaries Training Centre | Activities and partners",tier:"B",url:"https://inaries.com/what-we-do/"},12:{t:"Uganda labour ministry | Serene Recruitment",tier:"A"},
 13:{t:"Companies House | Serene Recruitment (UK) Ltd",tier:"A"},14:{t:"ULII | Crane Bank court record",tier:"A"},15:{t:"The EastAfrican | Forex bureau licences",tier:"C"},16:{t:"NCBA Group | Crane Bank Rwanda acquisition",tier:"B"},
 17:{t:"IFC | Platcorp and Premier Credit Uganda",tier:"A"},18:{t:"Ruparelia Foundation | Official site",tier:"B",url:"https://rupareliafoundation.org/"},19:{t:"The Pearl Times | Premier Sand and Kampala Tourist Hotel",tier:"C"},
 20:{t:"ATC News | Paradise Island Resort opening announcement",tier:"C"},21:{t:"The Standard | Arie Towers",tier:"C"},22:{t:"URSB | Official registry search",tier:"A"},23:{t:"Companies House | Ruparelia Limited controlling party",tier:"A"},
 24:{t:"Companies House mirror | Leicester holding company",tier:"D"},25:{t:"Premier Advertising & Media | Official site",tier:"B",url:"https://premieradvertising.com/about-us/"},26:{t:"Tourist Hotel | Company profile",tier:"B"},
 27:{t:"Billionaires.Africa | Paradise Island opens 1 Dec (3 Nov 2026)",tier:"C",url:"https://www.billionaires.africa/2026/11/03/ugandas-richest-man-sudhir-ruparelia-to-open-19-acre-island-resort-on-lake-victoria/"},
 28:{t:"Matooke Republic | Pearl Tower One unveiled (Jul 2025)",tier:"C",url:"https://www.matookerepublic.com/business/20250710/pearl-tower-one-meera-investments-unveils-kampalas-landmark-grade-a-office-building/"},
 29:{t:"Front Line Media | CMS property portfolio (Dec 2022)",tier:"D"},
 30:{t:"Trumpet News | Kabira Country Club redevelopment (Mar 2026)",tier:"C",url:"https://trumpetnews.co.ug/2026/03/03/sudhir-ruparelia-unveils-ambitious-kabira-country-club-redevelopment-featuring-high-rise-towers-and-5-star-hotel/"},
 31:{t:"Billionaires.Africa | Kingdom Kampala phase two (Jan 2026)",tier:"C",url:"https://www.billionaires.africa/2026/01/23/ugandan-billionaire-sudhir-ruparelia-kicks-off-kingdom-kampala-expansion-with-21-storey-tower-and-helipad"},
 32:{t:"Billionaires.Africa | One-10 Apartments, Kololo",tier:"C",url:"https://www.billionaires.africa/tag/ruparelia-group/"},
 33:{t:"PML Daily | Lotis Towers renamed Arie Towers (May 2024)",tier:"C",url:"https://pmldaily.com/news/2024/05/sudhir-renames-lotis-arie-towers.html"},
 34:{t:"Wikipedia | Victoria University Uganda",tier:"D",url:"https://en.wikipedia.org/wiki/Victoria_University_Uganda"},
 35:{t:"Doris / WhereNext school profiles (KISU, DPS)",tier:"D",url:"https://www.doris.school/schools/uganda/delhi-public-school-international"},
 36:{t:"Pulitzer Center | Rosebud and Premier Roses registration records",tier:"C",url:"https://pulitzercenter.org/node/36404"},
 37:{t:"Daily Monitor | Goldstar marks 30 years (2026)",tier:"C",url:"https://www.monitor.co.ug/uganda/business/insurance/goldstar-insurance-marks-30-years-as-premiums-market-share-grow-5607212"},
 38:{t:"Sanyu FM | Contact & about",tier:"B",url:"https://sanyufm.com/"},
 39:{t:"New Vision | Premier Recruitment licence (2019)",tier:"C",url:"https://www.newvision.co.ug/new_vision/news/1494634/premier-recruitment-agency-create-jobs"},
 40:{t:"Ruparelia Foundation | About",tier:"B",url:"https://rupareliafoundation.org/?p=154"}
};

const METRICS=[
 {v:"7",l:"Business sectors",src:"Group sector descriptions"},
 {v:"13",l:"Hotels, resorts & venues",src:"Speke Group published portfolio"},
 {v:"4",l:"Education institutions",src:"Group brochure: Victoria University, KISU, Kampala Parents' School, DPS International"},
 {v:"5",l:"Countries with group interests",src:"Group brochure: Uganda, Rwanda, South Sudan, UK, UAE"}
];

/* Collected 16 Nov 2026 from each business's own website. Photos load from those sites; replace with original files before launch. */
const SG="https://spekegroup.com/wp-content/uploads/";
const FROM_SITES={
 "speke-group":{imgs:[SG+"2024/06/Speke-Resort-Convention-Centre.jpg",SG+"2021/09/munyonyo-commonwealth-swimming-pool-1200x600-1-400x400.jpg",SG+"2021/08/Deluxe-twin-room-1200x600-0x0-1-400x400.jpg"],contact:{a:"4th Floor, Crane Chambers, Kampala Road",p:"+256 707 711 750 · +256 702 711 142",e:"info@spekegroup.com"},facts:{"Facilities":"Restaurants and bars, meetings and events, weddings, Calabash Spa, gyms, marina, pony camp, pools, sports grounds"}},
 "speke-hotel":{imgs:[SG+"2021/08/Speke-Hotel-Deluxe-Double-Room_1-1-400x400.jpg"],url:"https://spekegroup.com/speke-hotel/",contact:{p:"+256 707 711 750",e:"info@spekegroup.com"}},
 "speke-resort-munyonyo":{imgs:[SG+"2021/08/Deluxe-twin-room-1200x600-0x0-1-400x400.jpg","https://paradiseisland-resort.com/wp-content/uploads/2026/04/speke-resort-munyonyo-marina-boat.jpg"],contact:{p:"+256 707 711 750",e:"info@spekegroup.com"}},
 "munyonyo-commonwealth-resort":{imgs:[SG+"2021/09/munyonyo-commonwealth-swimming-pool-1200x600-1-400x400.jpg"],url:"https://spekegroup.com/munyonyo-commonwealth-resort/"},
 "speke-resort-convention-centre":{imgs:[SG+"2024/06/Speke-Resort-Convention-Centre.jpg"],url:"https://spekegroup.com/speke-resort-convention-centre/"},
 "kabira-country-club":{imgs:[SG+"2021/08/kabira-country-club-Deluxe-Studio-Room-400x400.jpg"]},
 "forest-cottages":{imgs:[SG+"2021/10/forest-cottages-1f-400x400.jpg"],url:"https://spekegroup.com/forest-cottages-hotel/"},
 "dolphin-suites":{imgs:[SG+"2021/10/dolphin-suites-room-1a-400x400.jpg"],url:"https://spekegroup.com/dolphin-suites-hotel/"},
 "speke-apartments":{imgs:[SG+"2021/08/speke-apartments-wampewo-bedroom-400x400.jpg",SG+"2021/09/speke_apartments_kitante-400x400.jpg",SG+"2021/08/naguru-apartments-kampala-400x400.jpg",SG+"2021/08/two-bedroom-bkt-heights-400x400.jpg"]},
 "paradise-island-resort":{imgs:["https://paradiseisland-resort.com/wp-content/uploads/2026/07/paradise-Island-Resort-Cottages-1024x683.jpg","https://paradiseisland-resort.com/wp-content/uploads/2026/07/paradise-Island-Resort-Cottages-3-1024x683.jpg","https://paradiseisland-resort.com/wp-content/uploads/2026/05/Sunset.jpg"],contact:{p:"+256 417 716 000 · +256 752 711 714"},facts:{"Facilities":"Pools, spa and fitness centre, overwater observatory, beach and water sports, Omusana Bar & Restaurant, conference and wedding services","Sustainability":"Solar power, water recycling, electric golf carts"}},
 "crane-management-services":{contact:{a:"4th Floor, Crane Chambers, Plot 38 Kampala Road",p:"+256 414 343 552 · +256 752 711 750",e:"info@cms.co.ug"},facts:{"Portfolio":"Residential, commercial, office and warehouse listings"}},
 "victoria-university":{imgs:["https://vu.ac.ug/_nuxt/discover.C5Bocn6e.png"],contact:{a:"Victoria Towers, 1–13 Jinja Road, Kampala",p:"0800 205 355 (toll free) · +256 701 596 155",e:"admissions@vu.ac.ug"},edu:{level:"Undergraduate, postgraduate, upgrading, continuing education",admissions:"https://vu.ac.ug/programmes/under-graduate"},facts:{"Study model":"Trimester system, one module per month; in-person and online"}},
 "kisu":{imgs:["https://www.kisu.com/wp-content/uploads/2021/03/KISU-Drone-shot-compressed-1.jpeg","https://www.kisu.com/wp-content/uploads/2021/03/Sports-at-KISU-1024x683.jpeg","https://www.kisu.com/wp-content/uploads/2024/09/KISU-Drama-1024x683.jpg"],contact:{a:"Plot 447, Block 213, Kyebando–Kisalosalo Road, Bukoto",p:"+256 752 711 882 (admissions)",e:"admissions@kisu.com"},edu:{level:"Early Years to IB Diploma",admissions:"https://www.kisu.com/admissions/"},facts:{"Students":"450+ from 46+ nationalities","Affiliations":"IB, University of Cambridge, Cognia"}},
 "kampala-parents-school":{imgs:["https://kampalaparents.com/wp-content/uploads/2024/02/Kampala-Parents-School-Visit-Us-8.jpg","https://kampalaparents.com/wp-content/uploads/2024/02/Kampala-Parents-School-Facilities.jpg"],long:"Kampala Parents' School is a private mixed day primary school in Naguru, founded in 1975. It follows the Uganda National Curriculum and teaches more than 2,500 pupils from pre-primary to primary, with a day-care programme.",short:"Private day primary school in Naguru, founded in 1975.",contact:{a:"Plot 17–25 Saddler Way, Naguru",p:"+256 752 711 913",e:"info@kampalaparents.com"},edu:{level:"Day care, pre-primary and primary",admissions:"https://kampalaparents.com/admission-office/"},facts:{"Founded":"1975","Pupils":"2,500+","Curriculum":"Uganda National Curriculum"}},
 "dps-international":{imgs:["https://dpsuganda.com/wp-content/uploads/2026/02/Focused-2.jpg","https://dpsuganda.com/wp-content/uploads/2026/02/Sports-2.jpg"],long:"Delhi Public School International, established in 2005, follows the CBSE (Indian) curriculum from pre-school to senior secondary. Its Naguru campus opened on 31 October 2015 and has about 750 students.",contact:{a:"Plot 17–25 Saddler Way, Naguru",p:"+256 759 711 190 (admissions)",e:"admissions@dpsuganda.com"},edu:{level:"Pre-school to Senior Secondary (ages 2.5–18)",admissions:"https://dpsuganda.com/admissions-2/"},facts:{"Established":"2005","Students":"About 750","Affiliation":"CBSE New Delhi, no. 7630001"}},
 "rosebud":{imgs:["https://rosebudlimited.com/wp-content/uploads/2025/05/Rosebud-Slide-5.jpg","https://rosebudlimited.com/wp-content/uploads/2025/05/1.jpg","https://rosebudlimited.com/wp-content/uploads/2025/05/3.jpg"],long:"Rosebud began operations in 2000 on 13 hectares of greenhouses off Entebbe Road and describes itself as Uganda's largest rose exporter. It is Fairtrade certified, a Sedex member, and markets through an office in Aalsmeer, Netherlands.",contact:{a:"Farm: Plot 8 Namulanda-A, off Entebbe Road",p:"+256 414 343 500"},list:["Moonwalk","Double Date","Madam Cerise","Gold Strike","Orange Wave","Magma","Ace Cerise","Madam Red","Athena","Rise and Shine","Ace Pink","Pink Athena"],listTitle:"Rose varieties",facts:{"Operating since":"2000","Certification":"Fairtrade International; Sedex member"}},
 "premier-roses":{imgs:["https://rosebudlimited.com/wp-content/uploads/2025/05/2.jpg"]},
 "goldstar-insurance":{imgs:["https://goldstarinsurance.com/wp-content/uploads/2024/11/GoldStar-TravelPal.jpg"],contact:{a:"Crane Chambers, Plot 38 Kampala Road",p:"+256 200 250 110 (24/7)",e:"marketing@goldstarinsurance.com"},list:["Motor: car, motorcycle, commercial","Home, buildings and contents","Personal and students' accident","Travel (GoldStar TravelPal)","Commercial property and all risks","Liability and professional indemnity","Engineering and machinery","Marine cargo and hull, aviation, bonds, cash in transit, cyber"],listTitle:"Insurance products",facts:{"Incorporated":"1996"}},
 "sanyu-fm":{imgs:["https://sanyufm.com/wp-content/uploads/2026/04/Sanyu-Fm-The-Break-Fast-Club.jpg","https://sanyufm.com/wp-content/uploads/2026/04/Sanyu-Fm-The-Drive-Show.jpg"],contact:{a:"6th Floor, Crane Chambers, Plot 38 Kampala Road",p:"+256 414 234 230",e:"sanyu@sanyufm.com"},facts:{"Tagline":"Tune In & Get Hooked"}},
 "premier-advertising":{imgs:["https://premieradvertising.com/wp-content/uploads/2024/12/Premier-Advertising-Slider-4.jpg"],long:"Premier Advertising & Media is a full-service advertising and marketing agency in Kampala, organised into strategy, client services, creative and media teams.",short:"Full-service advertising and marketing agency in Kampala.",contact:{a:"3rd Floor, Crane Chambers, Plot 38 Kampala Road",p:"+256 414 343 584",e:"info@premieradvertising.com"},list:["Creative design","Web development","Print and production","Video and photography","Online public relations","Social media management"],listTitle:"Services"},
 "premier-recruitment":{imgs:["https://premierrecruitment.com/wp-content/uploads/2021/04/premier-recruitment-head-quarter-office.jpg"],contact:{a:"1st Floor, Crane Chambers (Entrance B), Plot 38 Kampala Road",p:"+256 200 411 100",e:"operations@premierrecruitment.com"},facts:{"Placements in":"Uganda, UAE, Saudi Arabia, Qatar","Sectors":"Security, hospitality, accountancy, marketing, legal, construction, oil and gas"},internal:"Licences shown on its website expired Dec 2021. Confirm current MGLSD licence numbers before publishing them."},
 "inaries":{imgs:["https://inaries.com/wp-content/uploads/2023/03/Inaries-Training-Session-3.jpg"],long:"Inaries Training Centre is an approved training institution accredited by the Ministry of Gender, Labour and Social Development. It prepares workers for overseas employment, covering workplace safety, customer service and employment contracts, with practical lessons.",short:"Accredited training centre preparing workers for overseas employment.",contact:{a:"Speke Resort Munyonyo, Makindye, Kampala",e:"info@inaries.com"},facts:{"Accreditation":"Ministry of Gender, Labour and Social Development","Partners":"Premier, Sphere and Serene Recruitment"}},
 "ruparelia-foundation":{imgs:["https://www.rupareliafoundation.org/wp-content/uploads/2016/06/fesh-kid-750x500.jpg","https://www.rupareliafoundation.org/wp-content/uploads/2019/05/donate-blood-750x500.jpg"],contact:{a:"4th Floor, Crane Chambers, Kampala Road",p:"+256 702 711 271",e:"info@rupareliafoundation.org"},facts:{"Motto":"Enriching Lives Together","Focus":"Education, health, community support, sports, start-ups, wildlife and environment"}}
};
