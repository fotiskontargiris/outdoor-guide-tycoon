// Engineer — compounding systems: gear lasts +50%, repairs half-price,
// off-season infra 25% off, infra payouts higher, tips lag until rep ≥ 60.
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

console.log('=== Starter kit lifetime ===');
globalThis.initGame('M','medic',['water'],'hike','bank','gemista');
globalThis.S.you.heroId='medic';
console.log(`Medic water trips: ${globalThis.S.owned.water.trips} (baseline 4)`);

globalThis.initGame('E','engineer',['water'],'hike','bank','gemista');
globalThis.S.you.heroId='engineer';
console.log(`Engineer water trips: ${globalThis.S.owned.water.trips} (expect 6 — 4 × 1.5)`);
console.log(`Engineer firstaid trips: ${globalThis.S.owned.firstaid.trips} (expect 38 — 25 × 1.5, granted by hero hook)`);
console.log(`Engineer packSize: ${globalThis.S.packSize} (expect 6)`);

console.log('\n=== Buy a new item — engineer +50% lifetime applies ===');
globalThis.S.cash = 200;
globalThis.buyItem('poles','standard');
console.log(`Engineer-bought poles trips: ${globalThis.S.owned.poles.trips} (expect 75 — 50 × 1.5)`);

console.log('\n=== Service price ===');
globalThis.initGame('E','engineer',['water'],'hike','bank','gemista');
globalThis.S.you.heroId='engineer';
globalThis.S.gear = 50; globalThis.S.cash = 100;
globalThis.serviceGear();
console.log(`Engineer service: cash 100 → ${globalThis.S.cash} (expect €80, cost €20 — half of €40)`);

console.log('\n=== Winter infra discount (website €2200 → €1650 for engineer) ===');
globalThis.initGame('E','engineer',['water'],'hike','bank','gemista');
globalThis.S.you.heroId='engineer'; globalThis.S.season='winter';
globalThis.S.cash = 5000; globalThis.S.winterWeeksUsed = 0;
globalThis.enrollInfra('website');
console.log(`Engineer website: cash 5000 → ${globalThis.S.cash} (expect €3350, cost €1650 — €2200 × 0.75)`);

console.log('\n=== Infra payouts ===');
function runTrip(heroId, hasPickup, hasHotel, ctype, rep){
  globalThis.initGame('X','medic',['water'],'hike','bank','gemista');
  globalThis.S.you.heroId = heroId; globalThis.S.rep = rep;
  if(hasPickup) globalThis.S.infra.push('pickup');
  if(hasHotel) globalThis.S.infra.push('hotelDeal');
  const b={route:'r', activity:'hike', region:'local', diff:1, base:60, client:'c', ctype, group:4, pay:60, tags:[], cancelled:false};
  globalThis.S.bookings=[b]; globalThis.S.loadout=['water'];
  globalThis.S.trip={b, payMul:1, tips:30, done:0, total:1, logs:[], prepRisk:0, repDelta:0};
  const before = globalThis.S.cash;
  globalThis.finishPlayerTrip();
  return globalThis.S.cash - before;
}

console.log(`Medic   + pickup + family       → €${runTrip('medic','pickup','none','family',70)} (60 + 10 pickup + 30 tips = €100)`);
console.log(`Engineer + pickup + family rep70 → €${runTrip('engineer','pickup','none','family',70)} (60 + 18 pickup + 30 tips = €108)`);
console.log(`Medic   + hotel + tourist       → €${runTrip('medic','none','hotel','tourist',70)} (60 + 20 hotel + 30 tips = €110)`);
console.log(`Engineer + hotel + tourist rep70 → €${runTrip('engineer','none','hotel','tourist',70)} (60 + 32 hotel + 30 tips = €122)`);

console.log('\n=== Tip lag ===');
console.log(`Engineer rep 50 + family        → €${runTrip('engineer','none','none','family',50)} (60 + 18 tips capped = €78)`);
console.log(`Engineer rep 65 + family        → €${runTrip('engineer','none','none','family',65)} (60 + 30 tips full = €90)`);

console.log('\nDone.');
