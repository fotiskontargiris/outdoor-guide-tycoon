// Verify the sea-kayak fleet rule:
//   - offered seakayak, no fleet → all kayak bookings locked (no boats)
//   - buy 1 kayak + 1 PFD set → fleetCapacity('seakayak')===1; bookings unlock
//   - openShop renders both safety and fleet sections; buyFleet deducts cash
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

globalThis.initGame('Fleet-Test','medic',['water']);
globalThis.S.cash = 1000;
globalThis.S.offeredDisciplines = ['seakayak'];
globalThis.S.certs = ['kayakBasic']; // M2 will grant this at creation
globalThis.startDay();

console.log('=== Step 1: seakayak offered, no fleet ===');
console.log('fleetCapacity seakayak:', globalThis.fleetCapacity('seakayak'));
console.log('bookings:');
for(const b of globalThis.S.bookings){
  console.log(`  ${b.activity} ${b.route} (diff ${b.diff})  →  lock: ${globalThis.bookingLock(b)||'OK'}`);
}

console.log('\n=== Step 2: buy 1 kayak + 1 PFD set ===');
globalThis.buyFleet('clientkayak','seakayak');
globalThis.buyFleet('clientpfd','seakayak');
console.log('cash:', globalThis.S.cash, 'fleet:', JSON.stringify(globalThis.S.fleet));
console.log('fleetCapacity seakayak:', globalThis.fleetCapacity('seakayak'));
globalThis.startDay();
console.log('bookings after fleet purchase:');
for(const b of globalThis.S.bookings){
  console.log(`  ${b.activity} ${b.route} (diff ${b.diff})  →  lock: ${globalThis.bookingLock(b)||'OK'}`);
}

console.log('\n=== Step 3: shop section renders ===');
globalThis.openShop();
const sceneHtml = els.scene.innerHTML;
console.log('sections seen:', ['Essentials','Hiking kit','Sea-kayak safety','Sea-kayak fleet'].filter(s => sceneHtml.includes(s)).join(' · '));
console.log('shop has buyFleet onclicks:', (sceneHtml.match(/buyFleet/g)||[]).length);
console.log('shop has Sea-kayak safety items (pfd/paddle/etc):', ['PFD','Paddle','Tow-line','Dry bag'].filter(s => sceneHtml.includes(s)).join(', ')||'none');
