// Force a sea-kayak playthrough: set offeredDisciplines=['seakayak'], buy fleet,
// take a diff-1 kayak trip, verify the put-in pool and on-water pool fire kayak-only
// events and that the trip resolves cleanly.
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

globalThis.initGame('Kayak-Test', 'captain', ['water']);
globalThis.S.cash = 2000;
globalThis.S.offeredDisciplines = ['seakayak'];
globalThis.S.certs = ['kayakBasic']; // M2 will grant this at creation for kayak-starter
globalThis.buyFleet('clientkayak','seakayak');
globalThis.buyFleet('clientpfd','seakayak');
// Stock some kayak safety kit so packing has options
['pfd','paddle','drybag','towline','sprayskirt','vhf','compass'].forEach(id => {
  globalThis.S.owned[id] = globalThis.freshOwned(id,'standard');
});
globalThis.startDay();

console.log('--- Bookings ---');
for(const b of globalThis.S.bookings) console.log(`  ${b.activity} ${b.route} (diff ${b.diff}, group ${b.group})  lock: ${globalThis.bookingLock(b)||'OK'}`);

const idx = globalThis.S.bookings.findIndex(b => !globalThis.bookingLock(b));
if(idx < 0){ console.log('No runnable kayak booking, retrying day'); globalThis.startDay(); }
const target = globalThis.S.bookings[idx];
console.log(`\n--- Run: ${target.route} ---`);
console.log(`recommended():`, [...globalThis.recommended(target, globalThis.S.weather)].join(', '));
console.log(`conditionsLine():`, globalThis.conditionsLine(target, globalThis.S.weather));

globalThis.pickBooking(idx);
// Pack everything kayak-relevant we own
const owned = Object.keys(globalThis.S.owned).filter(id => globalThis.itemForActivity(id, target.activity||'hike'));
console.log(`ownedItems for activity:`, owned.join(', '));
globalThis.S.loadout = owned.slice(0, globalThis.S.packSize);
console.log(`loadout:`, globalThis.S.loadout.join(', '));
globalThis.setOff();

// Trailhead
let h2 = (els.scene.innerHTML.match(/<h2>([\s\S]*?)<\/h2>/)||[])[1] || '';
console.log(`\nTrailhead event title: "${h2}"`);
const meetMatch = els.scene.innerHTML.match(/resolveMeet\((\d+)\)/g) || [];
console.log(`Trailhead has ${meetMatch.length} choices`);
if(meetMatch.length){ globalThis.resolveMeet(0); }
// Walk on
const walkOn = els.scene.innerHTML.match(/runEvent\(\)/);
if(walkOn) globalThis.runEvent();
// Trail event
h2 = (els.scene.innerHTML.match(/<h2>([\s\S]*?)<\/h2>/)||[])[1] || '';
console.log(`Trail event title: "${h2}"`);
const evMatch = els.scene.innerHTML.match(/resolveP\((\d+)\)/g) || [];
if(evMatch.length){ globalThis.resolveP(0); }
// Maybe another event, or trip complete
while(globalThis.S.trip && globalThis.S.trip.done < globalThis.S.trip.total){
  const r = els.scene.innerHTML.match(/runEvent\(\)/);
  if(r){ globalThis.runEvent();
    const e = els.scene.innerHTML.match(/resolveP\((\d+)\)/);
    if(e) globalThis.resolveP(0);
  } else break;
}

console.log(`\nTrip resolved. Final cash: €${globalThis.S.cash}, rep: ${globalThis.S.rep}`);
console.log(`Last scene title: "${(els.scene.innerHTML.match(/<h2>([\s\S]*?)<\/h2>/)||[])[1]||'(none)'}"`);
