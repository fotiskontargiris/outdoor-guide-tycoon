// Influencer — volatile fame: tier 5 → 3 reviews + extra rep; tier ≤ 2 → extra rep hit.
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

// Run a controlled trip with a forced repDelta + tip to land on a specific review tier.
// tierFor: score>=8 || tips>=35 → 5; >=3 → 4; >=-1 → 3; >=-7 → 2; else → 1.
function runTrip(heroId, repDelta, tip){
  globalThis.initGame('X','medic',['water'],'hike','bank','gemista');
  globalThis.S.you.heroId = heroId;
  const b={route:'r', activity:'hike', region:'local', diff:1, base:60, client:'a family', ctype:'family', group:4, pay:60, tags:['river','forest'], cancelled:false};
  globalThis.S.bookings=[b]; globalThis.S.loadout=['water'];
  globalThis.S.trip={b, payMul:1, tips:tip, done:0, total:1, logs:[], prepRisk:0, repDelta};
  const startRep = globalThis.S.rep;
  const startCount = globalThis.S.history.length;
  globalThis.finishPlayerTrip();
  const newLog = globalThis.S.history.slice(startCount).map(h=>h.t);
  return {
    repChange: globalThis.S.rep - startRep,
    repDelta: globalThis.S.trip ? globalThis.S.trip.repDelta : null,
    log: newLog,
  };
}

console.log('=== Tier 5 great trip (score 10, tip 40) ===');
let r = runTrip('medic', 10, 40);
console.log(`Medic    — rep change: +${r.repChange}, log: ${r.log.find(l=>l.includes('trip')||l.includes('Stories'))||'(no notable line)'}`);
r = runTrip('influencer', 10, 40);
console.log(`Influencer — rep change: +${r.repChange}, log: ${r.log.find(l=>l.includes('Stories'))||'(no Stories line)'}`);

console.log('\n=== Tier 1 disaster (score -10, tip 0) ===');
r = runTrip('medic', -10, 0);
console.log(`Medic    — rep change: ${r.repChange}, log: ${r.log.find(l=>l.includes('clip'))||'(no clip line)'}`);
r = runTrip('influencer', -10, 0);
console.log(`Influencer — rep change: ${r.repChange}, log: ${r.log.find(l=>l.includes('clip'))||'(no clip line)'}`);

console.log('\n=== Tier 3 ordinary trip (score 0, tip 10) ===');
r = runTrip('medic', 0, 10);
console.log(`Medic    — rep change: +${r.repChange}, no special line`);
r = runTrip('influencer', 0, 10);
console.log(`Influencer — rep change: +${r.repChange}, no special line (tier 3 shouldn't trigger volatile)`);

console.log('\n=== Review count on great trip ===');
// Probe via reviewsHTML rendered in scene
function runAndCountReviews(heroId, repDelta, tip){
  globalThis.initGame('X','medic',['water'],'hike','bank','gemista');
  globalThis.S.you.heroId = heroId;
  const b={route:'r', activity:'hike', region:'local', diff:1, base:60, client:'a family', ctype:'family', group:4, pay:60, tags:['river','forest'], cancelled:false};
  globalThis.S.bookings=[b]; globalThis.S.loadout=['water'];
  globalThis.S.trip={b, payMul:1, tips:tip, done:0, total:1, logs:[], prepRisk:0, repDelta};
  globalThis.finishPlayerTrip();
  const html = els.scene.innerHTML;
  return (html.match(/★/g)||[]).length; // stars across all reviews
}
const medicStars = runAndCountReviews('medic', 10, 40);
const infStars = runAndCountReviews('influencer', 10, 40);
console.log(`Medic    great trip stars: ${medicStars} (2 reviews × ~5 stars = ~10)`);
console.log(`Influencer great trip stars: ${infStars} (3 reviews × ~5 stars = ~15 — should be higher than medic)`);

console.log('\nDone.');
