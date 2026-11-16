css=open('src/style.css').read();data=open('src/data.js').read();app=open('src/app.js').read();logos=open('build/logos.json').read();import json as J;pj=J.load(open('build/photos.json'))
html=f'''<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Ruparelia Group</title>
<meta name="description" content="Ruparelia Group: a diversified Ugandan group in hospitality, real estate, education, floriculture, insurance, media and workforce services.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Libre+Caslon+Text:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
<style>{css}</style></head>
<body><a class="skip" href="#main">Skip to content</a><div id="app"></div>
<div class="so" id="so" role="dialog" aria-label="Search"><div class="so-box"><input id="soq" type="search" placeholder="Search businesses, hotels, schools…" aria-label="Search"><div class="so-res" id="sores"></div></div></div>
<aside class="drawer" id="drawer" aria-label="Editor"></aside><div class="toast" id="toast" role="status"></div>
<script>const LOGOS={logos};const PHOTOS={J.dumps(pj["photos"])};const PHOTO_MAP={J.dumps(pj["map"])};</script>
<script>{data}</script>
<script>{app}</script>
</body></html>'''
open('index.html','w').write(html)
