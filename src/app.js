(function(){
"use strict";
/* ---------- state & storage ---------- */
const KEY="rg-cms-v3";
SOURCES[41]={t:"Each business's own website (checked 16 Nov 2026)",tier:"B"};
let DB=load();
function enrich(list){list.forEach(e=>{if(PHOTO_MAP[e.id])e.photos=PHOTO_MAP[e.id];const x=FROM_SITES[e.id];if(!x)return;["contact","long","short","list","listTitle","url","edu"].forEach(k=>{if(x[k])e[k]=x[k]});if(x.facts)e.facts=Object.assign({},e.facts,x.facts);if(x.internal)e.internal=(e.internal?e.internal+" ":"")+x.internal;e.src=[...(e.src||[]),41]});return list}
function seed(){return{entities:enrich(JSON.parse(JSON.stringify(ENTITIES))),categories:JSON.parse(JSON.stringify(CATEGORIES)),news:JSON.parse(JSON.stringify(NEWS)),
 audit:[{t:new Date().toISOString(),u:"System",a:"Imported",r:"Portfolio directory (15 Nov 2026) and online checks (16 Nov 2026)"}],
 workflow:{"arie-towers":"Legal review","vcon":"Legal review","premier-credit":"Legal review","kampala-tourist-hotel":"Research review","premier-sand":"Research review","rr-rally-team":"Research review","serene-recruitment-ug":"Research review","premier-central-properties":"Research review"}}}
function load(){try{const s=localStorage.getItem(KEY);if(s)return JSON.parse(s)}catch(e){}return seed()}
function save(){try{localStorage.setItem(KEY,JSON.stringify(DB))}catch(e){}}
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const pub=()=>DB.entities.filter(e=>e.published&&e.status!=="historical");
const byId=id=>DB.entities.find(e=>e.id===id);
const cat=id=>DB.categories.find(c=>c.id===id);
const visCats=()=>DB.categories.filter(c=>c.visible);
const initials=n=>n.replace(/\(.*?\)/g,"").split(/\s+/).filter(w=>/^[A-Z0-9]/.test(w)).slice(0,2).map(w=>w[0]).join("");
const logo=(e,cls="")=>e.logo&&LOGOS[e.logo]?`<img src="${LOGOS[e.logo]}" alt="${esc(e.name)} logo" class="${cls}">`:`<span class="mono">${esc(initials(e.name))}</span>`;
const IMG=e=>(e.photos||[]).map(k=>PHOTOS[k]).filter(Boolean);
const full=u=>u.replace(/-\d+x\d+(\.(jpe?g|png|webp))$/i,"$1");
const photo=(u,alt,cls="")=>u.startsWith("data:")?`<img class="${cls}" src="${u}" alt="${esc(alt)}" decoding="async">`:`<img class="${cls}" src="${esc(full(u))}" data-t="${esc(u)}" alt="${esc(alt)}" loading="lazy" onerror="if(this.src!==this.dataset.t){this.src=this.dataset.t}else{this.parentNode.classList.add('noimg');this.remove()}">`;
const fmtDate=d=>new Date(d+"T12:00:00").toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});
const SWOOSH=(stroke="#ce2230",w=3)=>`<svg viewBox="0 0 240 150" aria-hidden="true"><ellipse cx="120" cy="75" rx="112" ry="48" transform="rotate(-14 120 75)" fill="none" stroke="${stroke}" stroke-width="${w}"/></svg>`;
function statusTag(e){const s=e.status;const c=s==="active"?"positive":s==="pre-opening"?"caution":"critical";return `<span class="rg-tag rg-tag--${c}">${STATUS_LABEL[s]}</span>`}
function confTag(c){return `<span class="rg-tag rg-tag--${c==="high"?"positive":c==="medium"?"caution":"critical"}">${c[0].toUpperCase()+c.slice(1)}</span>`}

/* ---------- shared pieces ---------- */
function card(e){const c=cat(e.cats[0]);return `<a class="rg-card" href="#/b/${e.id}">${IMG(e).length?`<div class="rg-card__photo">${photo(IMG(e)[0],e.name)}<span class="badge">${logo(e)}</span></div>`:`<div class="rg-card__logo">${logo(e)}</div>`}<div class="rg-card__body"><p class="rg-card__name">${esc(e.name)}</p><p class="rg-card__desc">${esc(e.short)}</p><div class="tags">${c?`<span class="rg-tag">${esc(c.name)}</span>`:""}<span class="rg-tag">${esc(TYPE_LABEL[e.type]||e.type)}</span>${e.status==="pre-opening"?statusTag(e):""}</div></div></a>`}
const SECTOR_PHOTO={"hospitality":"speke-group-2","real-estate":"pearl-business-park-2","education":"kisu-1","floriculture":"rosebud-1","media":"premier-advertising-1","workforce":"inaries-1","insurance":"kingdom-kampala-2"};
function sectorTile(c,light){const n=pub().filter(e=>e.cats.includes(c.id)).length;const ph=!light&&PHOTOS[SECTOR_PHOTO[c.id]];return `<a class="rg-sector${light?" rg-sector--light":""}${ph?" rg-sector--photo":""}" href="#/businesses/${c.id}">${ph?`<img class="sp" src="${ph}" alt="" decoding="async">`:""}${SWOOSH()}<span class="rg-sector__count">${esc(c.count||n+" businesses")}</span><span class="rg-sector__name">${esc(c.name)}</span></a>`}
function newsArt(seed){const r=(seed.length*37)%30-15;return `<svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice"><rect width="400" height="170" fill="#4a0e12"/><rect x="${250+r}" width="150" height="170" fill="#5e151a"/><ellipse cx="${260+r}" cy="90" rx="190" ry="62" transform="rotate(-14 260 90)" fill="none" stroke="#ce2230" stroke-width="3"/><ellipse cx="${300+r}" cy="70" rx="140" ry="40" transform="rotate(-14 300 70)" fill="none" stroke="rgba(247,244,239,.35)" stroke-width="1.5"/></svg>`}
function newsCard(n){const c=cat(n.cat);const ne=byId(n.ent);const ph=ne&&IMG(ne)[0];return `<a class="news-card" href="#/news/${n.id}"><div class="art">${ph?`<img src="${ph}" alt="" style="width:100%;height:100%;object-fit:cover;display:block">`:newsArt(n.id)}</div><div class="b"><span class="eyebrow">${esc(c?c.name:"Group")}</span><h3 class="serif">${esc(n.title)}</h3><span class="muted" style="font-size:14px">${fmtDate(n.date)}</span></div></a>`}
function pageHero(eyebrow,title,lead,crumbs,img){return `<section class="page-hero">${img?`<div class="hero-photo">${photo(img,"")}</div>`:""}<div class="hero-art">${SWOOSH("rgba(206,34,48,.9)",2).replace("<svg",'<svg style="position:absolute;right:-80px;top:-40px;width:560px;opacity:.7"')}</div><div class="wrap">${crumbs?`<div class="crumbs">${crumbs}</div>`:""}${eyebrow?`<div class="eyebrow">${esc(eyebrow)}</div>`:""}<h1 class="h-l" style="margin-top:10px">${title}</h1>${lead?`<p>${lead}</p>`:""}</div></section>`}

/* ---------- pages ---------- */
function home(){
 const feat=pub().filter(e=>e.featured).sort((a,b)=>a.featured-b.featured).slice(0,6);
 const f=byId("ruparelia-foundation");
 return `
<section class="hero"><div class="hero-photo">${photo(PHOTOS["speke-resort-munyonyo-1"],"Speke Resort Munyonyo on Lake Victoria")}</div><div class="hero-art"><svg viewBox="0 0 880 520" aria-hidden="true"><ellipse cx="520" cy="260" rx="380" ry="150" transform="rotate(-14 520 260)" fill="none" stroke="#ce2230" stroke-width="4"/><ellipse cx="560" cy="240" rx="300" ry="110" transform="rotate(-14 560 240)" fill="none" stroke="rgba(247,244,239,.28)" stroke-width="1.5"/><ellipse cx="600" cy="300" rx="220" ry="74" transform="rotate(-14 600 300)" fill="none" stroke="rgba(247,244,239,.16)" stroke-width="1"/></svg></div>
<div class="wrap"><div class="eyebrow" style="color:#ffb3b7">Ruparelia Group · Kampala, Uganda</div>
<h1 class="h-xl" style="margin-top:16px">Building enduring businesses.<br><i>Creating lasting impact.</i></h1>
<p class="lead">A diversified Ugandan group in hospitality, real estate, education, floriculture, insurance, media and workforce services.</p>
<div class="acts"><a class="rg-btn rg-btn--primary" href="#/businesses">Explore our businesses</a><a class="rg-btn rg-btn--on-dark" href="#/about">About Ruparelia Group</a></div>
<div class="line"><span class="quote" style="color:rgba(247,244,239,.9)">“Serving to Grow and Growing to Serve”</span></div></div></section>

<section class="section"><div class="wrap"><div class="sec-head"><div><div class="eyebrow">Our sectors</div><h2 class="h-l" style="margin-top:10px">Seven sectors, one group</h2></div><a class="link-arrow" href="#/businesses">View all businesses →</a></div>
<div class="grid g4">${visCats().map((c,i)=>sectorTile(c,false)).join("")}<a class="rg-sector rg-sector--photo" href="#/impact"><img class="sp" src="${PHOTOS["ruparelia-foundation-3"]}" alt="" decoding="async">${SWOOSH()}<span class="rg-sector__count">Philanthropy</span><span class="rg-sector__name">Foundation & impact</span></a></div></div></section>

<section class="section section--stone"><div class="wrap"><div class="sec-head"><div><div class="eyebrow">Selected businesses</div><h2 class="h-l" style="margin-top:10px">Across the portfolio</h2></div><a class="link-arrow" href="#/businesses">Business directory →</a></div>
<div class="grid g3">${feat.map(card).join("")}</div></div></section>

<section class="section"><div class="wrap split"><div><div class="eyebrow">Who we are</div><h2 class="h-l" style="margin-top:10px">A Ugandan group built over four decades</h2></div>
<div><p style="font-size:18px;line-height:30px;margin-top:0">Ruparelia Group brings together businesses that serve Ugandans every day: the hotels where they meet, the buildings where they work, the schools where their children learn, and the farms that carry Ugandan roses to the world.</p>
<p class="muted">Each business runs under its own management and brand. The group provides capital, property and a shared commitment to long-term investment in Uganda.</p>
<a class="link-arrow" href="#/about">More about the group →</a></div></div>
<div class="wrap" style="margin-top:56px"><div class="stats">${METRICS.map(m=>`<div class="stat" title="Source: ${esc(m.src)}"><b>${m.v}</b><span>${esc(m.l)}</span></div>`).join("")}</div></div></section>

<section class="section" style="padding-top:0"><div class="wrap"><div class="impact">${f&&f.logo?`<img src="${LOGOS[f.logo]}" alt="Ruparelia Foundation logo">`:""}<div><div class="eyebrow" style="color:#ffb3b7">Impact</div><h2 class="h-m" style="margin:8px 0">Ruparelia Foundation</h2><p style="margin:0;color:rgba(247,244,239,.85)">Since 2012, the foundation has funded scholarships and community health programmes, including free eye camps, alongside the group's businesses.</p></div><a class="rg-btn rg-btn--on-dark" href="#/impact">Our impact</a></div></div></section>

<section class="section section--stone"><div class="wrap"><div class="sec-head"><div><div class="eyebrow">News</div><h2 class="h-l" style="margin-top:10px">Latest from the group</h2></div><a class="link-arrow" href="#/news">All news →</a></div>
<div class="grid g3">${DB.news.slice().sort((a,b)=>b.date.localeCompare(a.date)).slice(0,3).map(newsCard).join("")}</div></div></section>`}

function about(){
 return pageHero("About","Ruparelia Group","A privately owned Ugandan group with businesses across seven sectors, headquartered in Kampala.",`<a href="#/">Home</a> / About`)+
 `<section class="section"><div class="wrap split"><div class="prose"><div class="eyebrow">Our story</div><h2 class="h-m" style="margin:10px 0 20px">From trading to a diversified group</h2>
<p>The group traces its start to 1985, when its founder, Dr Sudhir Ruparelia, returned to Uganda and began trading. Over the following decades it grew into hospitality, property, education, floriculture, insurance, media and recruitment.</p>
<p>Today its businesses include the Speke Group of Hotels, Crane Management Services and Meera Investments in property, Victoria University and three schools, Goldstar Insurance, 88.2 Sanyu FM, and the rose exporters Rosebud and Premier Roses.</p>
<p class="muted">The group also reports commercial and real estate interests in Rwanda, South Sudan, the United Kingdom and the United Arab Emirates.</p></div>
<div><div class="panel"><p class="quote" style="margin:0 0 16px">“Serving to Grow and Growing to Serve”</p><p class="muted" style="margin:0">The group's guiding line: businesses grow by serving their customers and communities well, and growth is a means to serve more of them.</p></div>
<div class="panel" style="margin-top:20px"><div class="eyebrow">Leadership</div><p style="margin:8px 0 0" class="muted">Leadership profiles will appear here once approved by the group.</p></div></div></div></section>
<section class="section section--stone"><div class="wrap"><div class="sec-head"><div><div class="eyebrow">Our sectors</div><h2 class="h-l" style="margin-top:10px">Where we work</h2></div></div><div class="grid g4">${visCats().map(c=>sectorTile(c,true)).join("")}</div></div></section>
<section class="section"><div class="wrap"><div class="eyebrow">How we present our portfolio</div><h2 class="h-m" style="margin:10px 0 16px">Clear about every relationship</h2>
<p class="muted" style="max-width:720px">Each business page says what the business is (a company, a brand, a property) and how it relates to the group: group company, group brand, managed property, joint venture or affiliate. Where a public body holds a stake, the page says so.</p></div></section>`}

function directory(q){
 const params=new URLSearchParams(q||"");
 const st={q:params.get("q")||"",cat:(params.get("category")||"").split(",").filter(Boolean),type:(params.get("type")||"").split(",").filter(Boolean),status:(params.get("status")||"").split(",").filter(Boolean),rel:(params.get("rel")||"").split(",").filter(Boolean)};
 const all=pub().filter(e=>!e.cats.includes("impact"));
 const types=[...new Set(all.map(e=>e.type))];const rels=[...new Set(all.map(e=>e.rel))];const stats=[...new Set(all.map(e=>e.status))];
 const box=(name,val,label,arr)=>`<label><input type="checkbox" data-f="${name}" value="${val}" ${arr.includes(val)?"checked":""}> ${esc(label)}</label>`;
 return pageHero("Business directory","Our businesses","Search the group's companies, brands, institutions and properties. Filter by sector, type, status or relationship.",`<a href="#/">Home</a> / Businesses`)+
 `<section class="section" style="padding-top:48px"><div class="wrap dir"><aside class="filters" aria-label="Filters"><input class="search" id="dq" type="search" placeholder="Search businesses" value="${esc(st.q)}" aria-label="Search businesses">
<h4>Sector</h4>${visCats().map(c=>box("category",c.id,c.name,st.cat)).join("")}
<h4>Type</h4>${types.map(t=>box("type",t,TYPE_LABEL[t]||t,st.type)).join("")}
<h4>Status</h4>${stats.map(s=>box("status",s,STATUS_LABEL[s],st.status)).join("")}
<h4>Relationship</h4>${rels.map(r=>box("rel",r,REL_LABEL[r],st.rel)).join("")}
<h4>Country</h4><label><input type="checkbox" checked disabled> Uganda</label></aside>
<div><div class="dir-bar"><span id="dcount" class="muted"></span><span id="dchips" class="tags"></span></div><div class="grid g3" id="dres"></div></div></div></section>`}
function directoryWire(){
 const run=()=>{const q=$("#dq").value.trim().toLowerCase();const f={};$$("[data-f]").forEach(i=>{if(i.checked){(f[i.dataset.f]=f[i.dataset.f]||[]).push(i.value)}});
  let r=pub().filter(e=>!e.cats.includes("impact"));
  if(q)r=r.filter(e=>(e.name+" "+e.short+" "+(e.list||[]).join(" ")).toLowerCase().includes(q));
  if(f.category)r=r.filter(e=>e.cats.some(c=>f.category.includes(c)));
  if(f.type)r=r.filter(e=>f.type.includes(e.type));if(f.status)r=r.filter(e=>f.status.includes(e.status));if(f.rel)r=r.filter(e=>f.rel.includes(e.rel));
  r.sort((a,b)=>((a.featured||99)-(b.featured||99))||DB.categories.findIndex(c=>c.id===a.cats[0])-DB.categories.findIndex(c=>c.id===b.cats[0])||a.name.localeCompare(b.name));
  $("#dres").innerHTML=r.length?r.map(card).join(""):`<div class="empty" style="grid-column:1/-1"><p class="h-m serif">No businesses match</p><p class="muted">Try fewer filters or a different word.</p></div>`;
  $("#dcount").textContent=r.length+(r.length===1?" business":" businesses");
  const p=new URLSearchParams();if(q)p.set("q",q);Object.entries(f).forEach(([k,v])=>p.set(k,v.join(",")));
  const qs=p.toString();history.replaceState(null,"","#/businesses"+(qs?"?"+qs:""));
  $("#dchips").innerHTML=Object.keys(f).length||q?`<button class="chip" id="dclear">Clear filters ✕</button>`:"";
  const c=$("#dclear");if(c)c.onclick=()=>{$("#dq").value="";$$("[data-f]").forEach(i=>i.checked=false);run()}};
 $("#dq").addEventListener("input",run);$$("[data-f]").forEach(i=>i.addEventListener("change",run));run()}

function category(id){
 const c=cat(id);if(!c||!c.visible)return notFound();
 const ents=pub().filter(e=>e.cats.includes(id));const lead=ents.find(e=>IMG(e).length&&e.featured)||ents.find(e=>IMG(e).length);const news=DB.news.filter(n=>n.cat===id);
 return pageHero(c.count,esc(c.name),esc(c.intro),`<a href="#/">Home</a> / <a href="#/businesses">Businesses</a> / ${esc(c.name)}`,lead&&IMG(lead)[0])+
 `<section class="section"><div class="wrap"><div class="sec-head"><div><div class="eyebrow">Portfolio</div><h2 class="h-m" style="margin-top:10px">${ents.length} ${ents.length===1?"business":"businesses"} in ${esc(c.name.toLowerCase())}</h2></div><a class="link-arrow" href="#/businesses?category=${id}">Open in directory →</a></div><div class="grid g3">${ents.map(card).join("")}</div></div></section>`+
 (news.length?`<section class="section section--stone"><div class="wrap"><div class="sec-head"><div><div class="eyebrow">News</div><h2 class="h-m" style="margin-top:10px">Recent ${esc(c.name.toLowerCase())} news</h2></div></div><div class="grid g3">${news.map(newsCard).join("")}</div></div></section>`:"")}

function entity(id){
 const e=byId(id);if(!e||!e.published||e.status==="historical")return notFound();
 const c=cat(e.cats[0]);const parent=e.parent&&byId(e.parent);const kids=pub().filter(x=>x.parent===e.id);const news=DB.news.filter(n=>n.ent===e.id);
 const facts=Object.entries(e.facts||{});
 const link=e.url?`<a class="rg-btn rg-btn--primary" href="${esc(e.url)}" target="_blank" rel="noopener">${e.type==="hotel"||e.type==="resort"||e.type==="apartments"||e.type==="club"?"Book or enquire":e.edu?"Admissions":"Visit website"} ↗</a>`:"";
 return pageHero(c?c.name:"Impact",esc(e.name),esc(e.short),`<a href="#/">Home</a> / <a href="#/businesses">Businesses</a> / ${c?`<a href="#/businesses/${c.id}">${esc(c.name)}</a> / `:""}${esc(e.name)}`)+
 `${IMG(e).length?`<section class="gallery"><div class="wrap"><div class="gal g${Math.min(IMG(e).length,3)}">${IMG(e).slice(0,3).map(u=>`<figure>${photo(u,e.name)}</figure>`).join("")}</div><p class="credit">Photos: ${esc(e.name.split(" (")[0])} / Ruparelia Group businesses</p></div></section>`:""}<section class="section" style="padding-top:56px"><div class="wrap ent"><div class="prose">
 <div class="tags" style="margin-bottom:24px">${e.cats.map(x=>cat(x)).filter(Boolean).map(x=>`<a class="rg-tag" style="text-decoration:none" href="#/businesses/${x.id}">${esc(x.name)}</a>`).join("")}<span class="rg-tag">${esc(TYPE_LABEL[e.type]||e.type)}</span><span class="rg-tag">${esc(REL_LABEL[e.rel])}</span><span class="rg-tag">${esc(e.country.join(", "))}</span>${e.status!=="active"?statusTag(e):""}</div>
 <p style="font-size:18px;line-height:30px">${esc(e.long||e.short)}</p>
 ${e.ownership?`<div class="panel" style="margin:24px 0"><div class="eyebrow">Ownership note</div><p style="margin:8px 0 0">${esc(e.ownership)}</p></div>`:""}
 ${e.list?`<h3 class="h-m" style="margin:32px 0 12px">${e.listTitle||(e.type==="apartments"?"Properties":"Includes")}</h3><ul class="list">${e.list.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}
 ${kids.length?`<h3 class="h-m" style="margin:40px 0 16px">${e.type==="brand"?"Properties":"Related"}</h3><div class="grid g2">${kids.map(card).join("")}</div>`:""}
 ${news.length?`<h3 class="h-m" style="margin:40px 0 16px">News</h3><div class="grid g2">${news.map(newsCard).join("")}</div>`:""}
 <div style="margin-top:32px;display:flex;gap:12px;flex-wrap:wrap">${link}<a class="rg-btn rg-btn--secondary" href="#/contact?about=${e.id}">Contact us about ${esc(e.name.split(" (")[0])}</a></div></div>
 <aside><div class="ent-logo">${logo(e)}</div><div class="panel"><dl>
 ${e.legal?`<dt>Legal name</dt><dd>${esc(e.legal)}</dd>`:""}
 <dt>Relationship</dt><dd>${esc(REL_LABEL[e.rel])}</dd>
 ${parent?`<dt>Part of</dt><dd><a href="#/b/${parent.id}">${esc(parent.name)}</a></dd>`:""}
 ${facts.map(([k,v])=>`<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}
 ${e.edu?`<dt>Level</dt><dd>${esc(e.edu.level)}</dd>`:""}
 ${e.contact&&e.contact.a?`<dt>Address</dt><dd>${esc(e.contact.a)}</dd>`:""}${e.contact&&e.contact.p?`<dt>Phone</dt><dd>${esc(e.contact.p)}</dd>`:""}${e.contact&&e.contact.e?`<dt>Email</dt><dd><a href="mailto:${esc(e.contact.e)}">${esc(e.contact.e)}</a></dd>`:""}${e.edu&&e.edu.admissions?`<dt>Admissions</dt><dd><a href="${esc(e.edu.admissions)}" target="_blank" rel="noopener">Apply or enquire ↗</a></dd>`:""}
 ${e.url?`<dt>Website</dt><dd><a href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.url.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,""))}</a></dd>`:""}
 </dl><div class="note">Sources: ${(e.src||[]).map(n=>SOURCES[n]?(SOURCES[n].url?`<a href="${esc(SOURCES[n].url)}" target="_blank" rel="noopener">${esc(SOURCES[n].t)}</a>`:esc(SOURCES[n].t)):"").filter(Boolean).join(" · ")}</div></div></aside></div></section>`}

function impact(){
 const f=byId("ruparelia-foundation");
 return pageHero("Impact","Ruparelia Foundation","Established in 2012 by Dr and Mrs Sudhir Ruparelia to support education and community health in Uganda.",`<a href="#/">Home</a> / Impact`)+
 `<section class="section"><div class="wrap split"><div><div class="ent-logo" style="height:220px">${f?logo(f):""}</div>${f&&IMG(f).length?`<div class="gal g2" style="margin-top:20px">${IMG(f).map(u=>`<figure>${photo(u,"Ruparelia Foundation programme")}</figure>`).join("")}</div>`:""}</div><div class="prose">
<div class="eyebrow">What the foundation does</div><h2 class="h-m" style="margin:10px 0 20px">Education and health</h2>
<p><b>Scholarships.</b> The foundation and the family fund scholarships at Victoria University, including 100 fully funded master's scholarships announced in October 2025 in memory of the late Rajiv Ruparelia.</p>
<p><b>Community health.</b> Free eye camps run with Mulago National Referral Hospital and partners, such as the camp in Bukedea held in Rajiv Ruparelia's honour.</p>
<p class="muted">Programme figures and an annual impact summary will be published here once confirmed by the foundation.</p>
${f&&f.url?`<a class="rg-btn rg-btn--primary" href="${f.url}" target="_blank" rel="noopener">Visit the foundation ↗</a>`:""}</div></div></section>`}

function news(){return pageHero("News","News & announcements","Announcements from across the group's businesses.",`<a href="#/">Home</a> / News`)+`<section class="section"><div class="wrap"><div class="grid g3">${DB.news.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(newsCard).join("")}</div></div></section>`}
function article(id){const n=DB.news.find(x=>x.id===id);if(!n)return notFound();const e=byId(n.ent);
 return pageHero(cat(n.cat)?cat(n.cat).name:"News",esc(n.title),fmtDate(n.date),`<a href="#/">Home</a> / <a href="#/news">News</a>`,e&&IMG(e)[0])+`<section class="section"><div class="wrap" style="max-width:820px"><p style="font-size:19px;line-height:32px">${esc(n.body)}</p>${e&&e.published?`<p><a class="link-arrow" href="#/b/${e.id}">About ${esc(e.name)} →</a></p>`:""}<div class="note">Sources: ${n.src.map(s=>SOURCES[s]&&SOURCES[s].url?`<a href="${SOURCES[s].url}" target="_blank" rel="noopener">${esc(SOURCES[s].t)}</a>`:esc((SOURCES[s]||{}).t||"")).join(" · ")}</div></div></section>`}

function careers(){const hiring=pub().filter(e=>e.url&&!["brand","property"].includes(e.type)&&!e.cats.includes("impact"));
 return pageHero("Careers","Work with us","Each business recruits for its own roles. Find the business you'd like to join, or register with our recruitment company.",`<a href="#/">Home</a> / Careers`)+
 `<section class="section"><div class="wrap split"><div><div class="eyebrow">Open roles</div><h2 class="h-m" style="margin:10px 0 16px">Current vacancies</h2><div class="empty"><p style="margin:0" class="muted">No vacancies are listed right now. Vacancies are posted by each business; check their sites below.</p></div>
<div class="panel" style="margin-top:24px"><div class="eyebrow">Recruitment</div><h3 class="h-m" style="margin:8px 0">Premier Recruitment</h3><p class="muted" style="margin:0 0 16px">Our licensed recruitment company places candidates with employers in Uganda and abroad.</p><a class="rg-btn rg-btn--secondary" href="#/b/premier-recruitment">About Premier Recruitment</a></div></div>
<div><div class="eyebrow">Careers by business</div><ul class="list" style="margin-top:16px">${hiring.map(e=>`<li><a href="#/b/${e.id}" style="text-decoration:none;font-weight:500">${esc(e.name)}</a><a href="${esc(e.url)}" target="_blank" rel="noopener" class="muted" style="font-size:14px">Website ↗</a></li>`).join("")}</ul></div></div></section>`}

function contact(q){const about=new URLSearchParams(q||"").get("about");
 return pageHero("Contact","Get in touch","For enquiries about a specific business, contact it directly from its page. For group enquiries, use the form.",`<a href="#/">Home</a> / Contact`)+
 `<section class="section"><div class="wrap split"><form class="form" id="cform" novalidate><div class="row"><label>Full name<input name="n" required autocomplete="name"></label><label>Email<input name="e" type="email" required autocomplete="email"></label></div>
<label>Phone (optional)<input name="p" type="tel" autocomplete="tel"></label>
<label>Your enquiry is about<select name="b"><option value="">The group in general</option>${pub().filter(e=>!["property"].includes(e.type)).sort((a,b)=>a.name.localeCompare(b.name)).map(e=>`<option value="${e.id}" ${about===e.id?"selected":""}>${esc(e.name)}</option>`).join("")}</select></label>
<label>Message<textarea name="m" required></textarea></label><div id="cmsg" role="status"></div><div><button class="rg-btn rg-btn--primary" type="submit">Send enquiry</button></div></form>
<div><div class="panel"><div class="eyebrow">Group office</div><p style="margin:8px 0 0">Kampala, Uganda</p><p class="muted" style="font-size:14px;margin:8px 0 0">Address, phone and email to be confirmed by the group.</p></div>
<div class="panel" style="margin-top:20px"><div class="eyebrow">Media enquiries</div><p class="muted" style="margin:8px 0 0">Press contact to be confirmed.</p></div></div></div></section>`}
function contactWire(){$("#cform").addEventListener("submit",ev=>{ev.preventDefault();const f=ev.target;const bad=[...f.querySelectorAll("[required]")].filter(i=>!i.value.trim()||(i.type==="email"&&!/^\S+@\S+\.\S+$/.test(i.value)));
 $("#cmsg").innerHTML=bad.length?`<div class="alert crit">Please fill in ${bad.map(b=>b.closest("label").firstChild.textContent.trim().toLowerCase()).join(", ")}.</div>`:`<div class="ok">Thank you. Your enquiry is ready to send. (This prototype doesn't send messages yet; the live site will deliver it to the right team.)</div>`;if(!bad.length)f.reset()})}

function notFound(){return pageHero("Not found","Page not found","The page you're looking for isn't here.",`<a href="#/">Home</a>`)+`<section class="section"><div class="wrap"><a class="rg-btn rg-btn--primary" href="#/businesses">Browse businesses</a></div></section>`}

/* ---------- CMS ---------- */
const AUTH={user:"admin",salt:"ca353dc9da5f1e08",hash:"3ba64f75082133b2ba8250ef5ad9a9bb96e904507b159e7b1e5d7ad8625f9371"};
const authed=()=>{try{return sessionStorage.getItem("rg-cms-auth")===AUTH.hash}catch(e){return window.__rgAuth===AUTH.hash}};
async function sha(t){const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}
function login(){return `<div class="login"><form class="panel form" id="lform" autocomplete="on"><div class="eyebrow">Ruparelia Group</div><h1 class="h-m" style="margin:6px 0 4px">Portfolio CMS</h1><p class="muted" style="margin:0 0 8px;font-size:14px">Sign in to manage businesses, categories and news.</p>
<label>Username<input name="u" autocomplete="username" required></label><label>Password<input name="p" type="password" autocomplete="current-password" required></label><div id="lmsg" role="alert"></div><button class="rg-btn rg-btn--primary" type="submit">Sign in</button><a href="#/" class="muted" style="font-size:14px">← Back to website</a></form></div>`}
function loginWire(){const f=$("#lform");f.u.focus();f.onsubmit=async ev=>{ev.preventDefault();const lock=+(sessionStorage.getItem("rg-cms-lock")||0);if(Date.now()<lock){$("#lmsg").innerHTML=`<div class="alert crit">Too many attempts. Try again in ${Math.ceil((lock-Date.now())/1000)} seconds.</div>`;return}
 const h=await sha(AUTH.salt+":"+f.u.value.trim().toLowerCase()+":"+f.p.value);
 if(h===AUTH.hash){try{sessionStorage.setItem("rg-cms-auth",h);sessionStorage.removeItem("rg-cms-fails")}catch(e){window.__rgAuth=h}log("Signed in",f.u.value.trim());save();route()}
 else{const n=+(sessionStorage.getItem("rg-cms-fails")||0)+1;sessionStorage.setItem("rg-cms-fails",n);if(n>=5){sessionStorage.setItem("rg-cms-lock",Date.now()+60000);sessionStorage.setItem("rg-cms-fails",0)}f.p.value="";$("#lmsg").innerHTML='<div class="alert crit">Wrong username or password.</div>'}}}
function admin(sub,q){if(!authed())return login();
 const nav=[["","Dashboard"],["businesses","Businesses"],["categories","Categories"],["news","News"],["sources","Sources"],["audit","Audit log"]];
 const warn=warnings().length;
 const side=`<aside class="adm-side"><div style="font-family:var(--font-serif);font-size:20px;padding:4px 12px 16px">Portfolio CMS</div>${nav.map(([k,l])=>`<a href="#/admin${k?"/"+k:""}" class="${(sub||"")===k?"on":""}">${l}${k==="businesses"&&warn?`<span class="rg-tag rg-tag--critical" style="padding:0 8px">${warn}</span>`:""}</a>`).join("")}
 <a href="#/" style="margin-top:16px">← View website</a><div class="who">Signed in as admin<br>Changes save in this browser only.<br><button class="rg-btn rg-btn--sm rg-btn--on-dark" id="aout" style="margin:10px 8px 0 0">Sign out</button><button class="rg-btn rg-btn--sm rg-btn--on-dark" id="areset" style="margin-top:10px">Reset demo data</button></div></aside>`;
 let main="";
 if(!sub)main=admDash();else if(sub==="businesses")main=admEnts(q);else if(sub==="categories")main=admCats();else if(sub==="news")main=admNews();else if(sub==="sources")main=admSources();else if(sub==="audit")main=admAudit();
 return `<div class="adm">${side}<div class="adm-main">${main}</div></div>`}
function warnings(){return DB.entities.filter(e=>(e.internal||"").startsWith("CONFLICT")||(e.rel==="group-company"&&e.status!=="historical"&&!(e.src||[]).some(s=>SOURCES[s]&&["A","B"].includes(SOURCES[s].tier))))}
function admDash(){const E=DB.entities;const pubN=E.filter(e=>e.published).length;const drafts=E.filter(e=>!e.published&&e.status!=="historical").length;
 const conflicts=E.filter(e=>(e.internal||"").startsWith("CONFLICT"));const review=Object.entries(DB.workflow);
 const unsourcedSub=E.filter(e=>e.rel==="group-company"&&e.status!=="historical"&&!(e.src||[]).some(s=>SOURCES[s]&&["A","B"].includes(SOURCES[s].tier)));
 return `<div class="eyebrow">Dashboard</div><h1 class="h-l" style="margin-top:8px">Portfolio overview</h1>
<div class="kpis"><div class="kpi"><b>${pubN}</b><span>Published entities</span></div><div class="kpi"><b>${drafts}</b><span>Unpublished drafts</span></div><div class="kpi"><b>${review.length}</b><span>Awaiting review</span></div><div class="kpi warn"><b>${conflicts.length+unsourcedSub.length}</b><span>Verification warnings</span></div>
<div class="kpi"><b>${DB.categories.length}</b><span>Categories</span></div><div class="kpi"><b>${E.filter(e=>e.type==="property"||e.type==="hotel"||e.type==="resort"||e.type==="apartments").length}</b><span>Properties & hotels</span></div><div class="kpi"><b>${E.filter(e=>e.status==="historical").length}</b><span>Archived records</span></div><div class="kpi"><b>${DB.news.length}</b><span>News articles</span></div></div>
<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:28px"><button class="rg-btn rg-btn--primary rg-btn--sm" data-new>+ Add business</button><a class="rg-btn rg-btn--secondary rg-btn--sm" href="#/admin/categories">Manage categories</a><a class="rg-btn rg-btn--secondary rg-btn--sm" href="#/admin/news">Add news</a></div>
<div class="grid g2"><div class="panel"><h3 class="h-m" style="font-size:22px">Records with conflicting ownership</h3>${conflicts.map(e=>`<div class="alert crit" style="margin-top:12px"><b>${esc(e.name)}</b>: ${esc(e.internal.replace("CONFLICT: ",""))} <a href="#" data-edit="${e.id}">Open</a></div>`).join("")||'<p class="muted">None.</p>'}</div>
<div class="panel"><h3 class="h-m" style="font-size:22px">Awaiting approval</h3><table class="t" style="margin-top:12px"><tr><th>Record</th><th>Stage</th></tr>${review.map(([id,s])=>{const e=byId(id);return e?`<tr><td><a href="#" data-edit="${id}">${esc(e.name)}</a></td><td>${statusPill(s)}</td></tr>`:""}).join("")}</table></div>
<div class="panel"><h3 class="h-m" style="font-size:22px">"Group company" without a Tier A/B source</h3>${unsourcedSub.length?`<ul class="list" style="margin-top:12px">${unsourcedSub.map(e=>`<li><a href="#" data-edit="${e.id}">${esc(e.name)}</a>${confTag(e.conf)}</li>`).join("")}</ul>`:'<p class="muted">Every group company has a Tier A or B source.</p>'}</div>
<div class="panel"><h3 class="h-m" style="font-size:22px">Recent activity</h3><ul class="list audit" style="margin-top:12px">${DB.audit.slice(-6).reverse().map(a=>`<li><span><b>${esc(a.u)}</b> ${esc(a.a)} ${esc(a.r)}</span><span class="muted">${new Date(a.t).toLocaleString("en-GB",{dateStyle:"short",timeStyle:"short"})}</span></li>`).join("")}</ul></div></div>`}
function statusPill(s){return `<span class="rg-tag rg-tag--${/Legal/.test(s)?"critical":"caution"}">${esc(s)}</span>`}
function admEnts(q){const p=new URLSearchParams(q||"");const f=p.get("f")||"all";
 const filt={all:()=>true,published:e=>e.published,drafts:e=>!e.published&&e.status!=="historical",verify:e=>e.status==="verify",historical:e=>e.status==="historical"};
 const rows=DB.entities.filter(filt[f]||filt.all);
 return `<div class="sec-head" style="margin-bottom:16px"><div><div class="eyebrow">Businesses</div><h1 class="h-l" style="margin-top:8px">Portfolio records</h1></div><button class="rg-btn rg-btn--primary" data-new>+ Add business</button></div>
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">${Object.keys(filt).map(k=>`<a href="#/admin/businesses?f=${k}" class="rg-tag" style="text-decoration:none;${k===f?"background:var(--ink);color:#fff":""}">${k[0].toUpperCase()+k.slice(1)} (${DB.entities.filter(filt[k]).length})</a>`).join("")}<input class="search" id="aq" placeholder="Filter by name" style="max-width:260px;padding:6px 12px;margin-left:auto"></div>
<div class="tbl-wrap"><table class="t" id="atbl"><tr><th>Name</th><th>Sector</th><th>Relationship</th><th>Status</th><th>Confidence</th><th>Public</th><th></th></tr>
${rows.map(e=>`<tr data-name="${esc(e.name.toLowerCase())}"><td><b>${esc(e.name)}</b>${DB.workflow[e.id]?`<br>${statusPill(DB.workflow[e.id])}`:""}</td><td>${esc((cat(e.cats[0])||{name:"Impact"}).name)}</td><td>${esc(REL_LABEL[e.rel])}</td><td>${statusTag(e)}</td><td>${confTag(e.conf)}</td><td>${e.published?"Yes":"—"}</td><td><button class="rg-btn rg-btn--secondary rg-btn--sm" data-edit="${e.id}">Edit</button></td></tr>`).join("")}</table></div>`}
function admCats(){return `<div class="eyebrow">Categories</div><h1 class="h-l" style="margin:8px 0 24px">Sectors</h1><p class="muted">Rename, reorder or hide sectors without a developer. Changes update the menu and home page.</p>
<div class="tbl-wrap"><table class="t"><tr><th>Order</th><th>Name</th><th>Count line</th><th>Businesses</th><th>Visible</th><th></th></tr>${DB.categories.map((c,i)=>`<tr><td><button class="icon-btn" data-up="${i}" aria-label="Move up">↑</button><button class="icon-btn" data-dn="${i}" aria-label="Move down">↓</button></td><td><input class="search" style="padding:6px 10px" data-cn="${i}" value="${esc(c.name)}"></td><td><input class="search" style="padding:6px 10px" data-cc="${i}" value="${esc(c.count)}"></td><td>${DB.entities.filter(e=>e.cats.includes(c.id)&&e.published).length}</td><td><input type="checkbox" data-cv="${i}" ${c.visible?"checked":""} style="accent-color:var(--red);width:18px;height:18px"></td><td><a href="#/businesses/${c.id}">View</a></td></tr>`).join("")}</table></div>`}
function admNews(){return `<div class="eyebrow">News</div><h1 class="h-l" style="margin:8px 0 24px">Articles</h1>
<form class="form panel" id="nform" style="margin-bottom:24px"><div class="row"><label>Title<input name="title" required></label><label>Date<input name="date" type="date" required value="${new Date().toISOString().slice(0,10)}"></label></div><div class="row"><label>Sector<select name="cat">${DB.categories.map(c=>`<option value="${c.id}">${esc(c.name)}</option>`).join("")}</select></label><label>Related business<select name="ent"><option value="">None</option>${pub().map(e=>`<option value="${e.id}">${esc(e.name)}</option>`).join("")}</select></label></div><label>Body<textarea name="body" required></textarea></label><div><button class="rg-btn rg-btn--primary rg-btn--sm">Publish article</button></div></form>
<table class="t"><tr><th>Date</th><th>Title</th><th>Sector</th><th></th></tr>${DB.news.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(n=>`<tr><td>${n.date}</td><td><a href="#/news/${n.id}">${esc(n.title)}</a></td><td>${esc((cat(n.cat)||{}).name||"")}</td><td><button class="rg-btn rg-btn--secondary rg-btn--sm" data-ndel="${n.id}">Delete</button></td></tr>`).join("")}</table>`}
function admSources(){return `<div class="eyebrow">Sources & verification</div><h1 class="h-l" style="margin:8px 0 16px">Source register</h1>
<div class="alert">Tier A: registry, regulator, government, audited accounts. Tier B: official group or company site. Tier C: credible media. Tier D: directories, social media, old brochures — never enough alone to claim ownership.</div>
<div class="tbl-wrap"><table class="t"><tr><th>#</th><th>Source</th><th>Tier</th><th>Used by</th></tr>${Object.entries(SOURCES).map(([k,s])=>`<tr><td>${k}</td><td>${s.url?`<a href="${s.url}" target="_blank" rel="noopener">${esc(s.t)}</a>`:esc(s.t)}</td><td><span class="rg-tag ${s.tier==="A"?"rg-tag--positive":s.tier==="D"?"rg-tag--critical":""}">${s.tier}</span></td><td style="font-size:13px">${DB.entities.filter(e=>(e.src||[]).includes(+k)).map(e=>esc(e.name)).join(", ")}</td></tr>`).join("")}</table></div>`}
function admAudit(){return `<div class="eyebrow">Audit log</div><h1 class="h-l" style="margin:8px 0 24px">Every change</h1><table class="t"><tr><th>When</th><th>Who</th><th>Action</th><th>Record / change</th></tr>${DB.audit.slice().reverse().map(a=>`<tr><td style="white-space:nowrap">${new Date(a.t).toLocaleString("en-GB",{dateStyle:"short",timeStyle:"short"})}</td><td>${esc(a.u)}</td><td>${esc(a.a)}</td><td>${esc(a.r)}</td></tr>`).join("")}</table>`}
function log(a,r){DB.audit.push({t:new Date().toISOString(),u:"Group Admin",a,r})}

function openEditor(id){
 const e=id?byId(id):{id:"",name:"",legal:"",cats:[DB.categories[0].id],type:"company",rel:"group-company",status:"active",country:["Uganda"],url:"",conf:"medium",published:false,short:"",long:"",ownership:"",internal:"",featured:0,src:[]};
 const d=$("#drawer");const opt=(o,v)=>Object.entries(o).map(([k,l])=>`<option value="${k}" ${k===v?"selected":""}>${esc(l)}</option>`).join("");
 const conflict=(e.internal||"").startsWith("CONFLICT");
 d.innerHTML=`<header><div><div class="eyebrow">${id?"Edit record":"New business"}</div><b style="font-size:18px">${esc(e.name||"Untitled")}</b></div><button class="icon-btn" data-close aria-label="Close">✕</button></header>
<form class="body form" id="eform">${conflict?`<div class="alert crit">${esc(e.internal)}</div>`:""}${DB.workflow[e.id]?`<div class="alert">Workflow: ${esc(DB.workflow[e.id])}</div>`:""}
<label>Display name<input name="name" required value="${esc(e.name)}"></label><label>Exact legal name<input name="legal" value="${esc(e.legal||"")}"></label>
<div class="row"><label>Primary sector<select name="cat">${DB.categories.map(c=>`<option value="${c.id}" ${c.id===e.cats[0]?"selected":""}>${esc(c.name)}</option>`).join("")}<option value="impact" ${e.cats[0]==="impact"?"selected":""}>Impact</option></select></label><label>Entity type<select name="type">${opt(TYPE_LABEL,e.type)}</select></label></div>
<div class="row"><label>Relationship to group<select name="rel">${opt(REL_LABEL,e.rel)}</select></label><label>Status<select name="status">${opt(STATUS_LABEL,e.status)}</select></label></div>
<div class="row"><label>Confidence<select name="conf">${opt({high:"High",medium:"Medium",low:"Low / verify"},e.conf)}</select></label><label>Homepage priority (0 = not featured)<input name="featured" type="number" min="0" max="20" value="${e.featured||0}"></label></div>
<label>Official website<input name="url" type="url" value="${esc(e.url||"")}"></label>
<label>Short description (cards)<textarea name="short" style="min-height:70px">${esc(e.short)}</textarea></label>
<label>Long description<textarea name="long">${esc(e.long||"")}</textarea></label>
<label>Public ownership note<textarea name="ownership" style="min-height:60px">${esc(e.ownership||"")}</textarea></label>
<label>Internal notes (never public)<textarea name="internal" style="min-height:60px">${esc(e.internal||"")}</textarea></label>
<label style="display:flex;flex-direction:row;gap:10px;align-items:center"><input type="checkbox" name="published" ${e.published?"checked":""} style="width:18px;height:18px;accent-color:var(--red)"> Published on the website</label>
<p class="muted" style="font-size:13px;margin:0">Sources linked: ${(e.src||[]).map(s=>SOURCES[s]?`${s} (${SOURCES[s].tier})`:"").join(", ")||"none"}</p><div id="emsg"></div></form>
<footer>${id?`<a class="rg-btn rg-btn--secondary rg-btn--sm" href="#/b/${e.id}" target="_self">Preview</a>`:""}<button class="rg-btn rg-btn--secondary rg-btn--sm" data-close>Cancel</button><button class="rg-btn rg-btn--primary rg-btn--sm" id="esave">Save</button></footer>`;
 d.classList.add("open");$$("[data-close]",d).forEach(b=>b.onclick=()=>d.classList.remove("open"));
 $("#esave").onclick=()=>{const f=$("#eform");const v=Object.fromEntries(new FormData(f));v.published=f.published.checked;
  if(!v.name.trim()){$("#emsg").innerHTML='<div class="alert crit">A display name is required.</div>';return}
  const tierAB=(e.src||[]).some(s=>SOURCES[s]&&["A","B"].includes(SOURCES[s].tier));
  if(v.published&&v.rel==="group-company"&&!tierAB){$("#emsg").innerHTML='<div class="alert crit">Can\'t publish as "Group company" without a Tier A or B source or a management document. Change the relationship or link a source first.</div>';return}
  const legalChanged=id&&e.published&&["legal","rel","status","ownership"].some(k=>(e[k]||"")!==(v[k]||""));
  const changes=[];["name","legal","rel","status","conf","url","short","long","ownership","internal","type"].forEach(k=>{if((e[k]||"")!==(v[k]||""))changes.push(k)});
  if(e.cats[0]!==v.cat)changes.push("sector");if(!!e.published!==v.published)changes.push(v.published?"published":"unpublished");if((+e.featured||0)!==(+v.featured||0))changes.push("homepage priority");
  Object.assign(e,{name:v.name.trim(),legal:v.legal,type:v.type,rel:v.rel,status:v.status,conf:v.conf,url:v.url,short:v.short,long:v.long,ownership:v.ownership,internal:v.internal,published:v.published,featured:+v.featured||0});
  if(e.cats[0]!==v.cat)e.cats=[v.cat,...e.cats.filter(c=>c!==v.cat)].slice(0,2);
  if(!id){e.id=v.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"business-"+Date.now();while(byId(e.id))e.id+="-2";DB.entities.push(e);DB.workflow[e.id]="Research review";log("Created",e.name)}
  else log("Edited",e.name+(changes.length?": "+changes.join(", "):""));
  if(legalChanged){DB.workflow[e.id]="Legal review";e.published=false;log("Sent to legal review",e.name+" (ownership-related field changed)")}
  save();d.classList.remove("open");toast(legalChanged?"Saved. Ownership fields changed, so the record went back to legal review and was unpublished.":"Saved.");route()}}
function adminWire(){if(!authed())return loginWire();const o=$("#aout");if(o)o.onclick=()=>{try{sessionStorage.removeItem("rg-cms-auth")}catch(e){}window.__rgAuth=null;log("Signed out","admin");save();location.hash="#/admin";route()};
 $$("[data-edit]").forEach(b=>b.onclick=ev=>{ev.preventDefault();openEditor(b.dataset.edit)});$$("[data-new]").forEach(b=>b.onclick=()=>openEditor(null));
 const aq=$("#aq");if(aq)aq.oninput=()=>$$("#atbl tr[data-name]").forEach(r=>r.style.display=r.dataset.name.includes(aq.value.toLowerCase())?"":"none");
 $$("[data-up],[data-dn]").forEach(b=>b.onclick=()=>{const i=+(b.dataset.up??b.dataset.dn);const j=b.dataset.up!=null?i-1:i+1;if(j<0||j>=DB.categories.length)return;const c=DB.categories;[c[i],c[j]]=[c[j],c[i]];log("Reordered","Categories");save();route()});
 $$("[data-cn]").forEach(i=>i.onchange=()=>{const c=DB.categories[+i.dataset.cn];log("Renamed category",c.name+" → "+i.value);c.name=i.value;save();toast("Category renamed.")});
 $$("[data-cc]").forEach(i=>i.onchange=()=>{DB.categories[+i.dataset.cc].count=i.value;save();toast("Saved.")});
 $$("[data-cv]").forEach(i=>i.onchange=()=>{const c=DB.categories[+i.dataset.cv];c.visible=i.checked;log(i.checked?"Showed category":"Hid category",c.name);save();toast(i.checked?"Category visible.":"Category hidden from the site.")});
 const nf=$("#nform");if(nf)nf.onsubmit=ev=>{ev.preventDefault();const v=Object.fromEntries(new FormData(nf));if(!v.title.trim()||!v.body.trim())return toast("Title and body are required.");DB.news.push({id:"n"+Date.now(),date:v.date,cat:v.cat,title:v.title,body:v.body,ent:v.ent,src:[]});log("Published news",v.title);save();route();toast("Article published.")};
 $$("[data-ndel]").forEach(b=>b.onclick=()=>{const n=DB.news.find(x=>x.id===b.dataset.ndel);DB.news=DB.news.filter(x=>x!==n);log("Deleted news",n.title);save();route()});
 const r=$("#areset");if(r)r.onclick=()=>{DB=seed();save();route();toast("Demo data reset.")}}
function toast(m){const t=$("#toast");t.textContent=m;t.style.display="block";clearTimeout(toast.t);toast.t=setTimeout(()=>t.style.display="none",3800)}

/* ---------- shell ---------- */
function header(){return `<div class="concept">Website concept for Ruparelia Group, prepared by Bright Thoughts Services Limited</div>
<header class="hdr"><div class="wrap"><a class="brand" href="#/" aria-label="Ruparelia Group home"><img src="${LOGOS["ruparelia-group"]}" alt="Ruparelia Group"></a>
<nav class="nav" id="nav" aria-label="Main"><a href="#/about" data-n="about">About</a><div class="mm" data-n="businesses"><button aria-haspopup="true" onclick="location.hash='#/businesses'">Businesses ▾</button><div class="mm-panel">${visCats().map(c=>`<a href="#/businesses/${c.id}"><b>${esc(c.name)}</b><span>${esc(c.count)}</span></a>`).join("")}<a class="all" href="#/businesses">Full business directory →</a></div></div>
<a href="#/impact" data-n="impact">Impact</a><a href="#/news" data-n="news">News</a><a href="#/careers" data-n="careers">Careers</a><a href="#/contact" data-n="contact">Contact</a></nav>
<div style="display:flex;gap:4px"><button class="icon-btn" id="sbtn" aria-label="Search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg></button><button class="icon-btn burger" id="burger" aria-label="Menu" aria-expanded="false"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button></div></div></header>`}
function footer(){return `<footer class="ftr"><div class="wrap"><div class="ftr-top"><div><span class="ftr-logo"><img src="${LOGOS["ruparelia-group"]}" alt="Ruparelia Group"></span><p class="quote" style="font-size:18px;line-height:26px;margin:20px 0 0;color:rgba(247,244,239,.85)">Serving to Grow and Growing to Serve</p></div>
${[["Hospitality","hospitality"],["Real estate","real-estate"],["Education","education"]].map(([t,id])=>`<div><h5>${t}</h5><ul>${pub().filter(e=>e.cats[0]===id&&e.type!=="property").slice(0,6).map(e=>`<li><a href="#/b/${e.id}">${esc(e.name.replace(" (KISU)",""))}</a></li>`).join("")}</ul></div>`).join("")}
<div><h5>Group</h5><ul><li><a href="#/about">About</a></li><li><a href="#/businesses">All businesses</a></li><li><a href="#/impact">Foundation</a></li><li><a href="#/news">News</a></li><li><a href="#/careers">Careers</a></li><li><a href="#/contact">Contact</a></li></ul></div></div>
<div class="ftr-bot"><span>© ${new Date().getFullYear()} Ruparelia Group. Kampala, Uganda.</span><span><a href="#/privacy">Privacy</a> · <a href="#/legal">Legal notices</a></span></div></div></footer>`}
function simple(t){return pageHero("",t,"This page will hold the group's approved "+t.toLowerCase()+" text.",`<a href="#/">Home</a>`)}

function route(){
 if(/^\/admin\/?$/.test(location.pathname)&&!location.hash){history.replaceState(null,"","/#/admin")}
 const h=location.hash.slice(1)||"/";const [path,q]=h.split("?");const parts=path.split("/").filter(Boolean);
 let html,wire;const isAdmin=parts[0]==="admin";
 switch(parts[0]){
  case undefined:html=home();break;case "about":html=about();break;
  case "businesses":if(parts[1]){html=category(parts[1])}else{html=directory(q);wire=directoryWire}break;
  case "b":html=entity(parts[1]);break;case "impact":html=impact();break;
  case "news":html=parts[1]?article(parts[1]):news();break;case "careers":html=careers();break;
  case "contact":html=contact(q);wire=contactWire;break;case "privacy":html=simple("Privacy");break;case "legal":html=simple("Legal notices");break;
  case "admin":html=admin(parts[1],q);wire=adminWire;break;default:html=notFound()}
 $("#app").innerHTML=header()+`<main id="main">${html}</main>`+(isAdmin?"":footer());
 const nav=$("#nav");$$("[data-n]",nav).forEach(a=>a.classList.toggle("on",a.dataset.n===(parts[0]==="b"?"businesses":parts[0])));
 $("#burger").onclick=()=>{const o=nav.classList.toggle("open");$("#burger").setAttribute("aria-expanded",o)};
 $("#sbtn").onclick=openSearch;
 document.title=(parts[0]?($("h1")?$("h1").textContent.trim()+" | ":""):"")+"Ruparelia Group";
 if(wire)wire();if(!h.includes("?")||parts[0]!=="businesses")window.scrollTo(0,0)}
function openSearch(){const so=$("#so");so.classList.add("open");const i=$("#soq");i.value="";i.focus();renderSearch("")}
function renderSearch(v){const q=v.trim().toLowerCase();const r=q?pub().filter(e=>(e.name+" "+e.short+" "+(e.list||[]).join(" ")).toLowerCase().includes(q)).slice(0,8):pub().filter(e=>e.featured).slice(0,6);
 $("#sores").innerHTML=r.map((e,i)=>`<a href="#/b/${e.id}" class="${i===0?"act":""}"><span>${esc(e.name)}</span><small>${esc((cat(e.cats[0])||{name:"Impact"}).name)}</small></a>`).join("")||`<p class="muted" style="padding:16px 24px">No matches. <a href="#/businesses">Browse the directory</a></p>`}
document.addEventListener("DOMContentLoaded",()=>{
 const so=$("#so");$("#soq").addEventListener("input",e=>renderSearch(e.target.value));
 $("#soq").addEventListener("keydown",e=>{if(e.key==="Enter"){const a=$("#sores a");if(a){location.hash=a.getAttribute("href");so.classList.remove("open")}}});
 so.addEventListener("click",e=>{if(e.target===so||e.target.closest("a"))so.classList.remove("open")});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"){so.classList.remove("open");$("#drawer").classList.remove("open")}if(e.key==="/"&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();openSearch()}});
 window.addEventListener("hashchange",route);route()});
})();
