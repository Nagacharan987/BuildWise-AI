function money(n){return "₹"+Math.round(n).toLocaleString("en-IN")}
function plan(){
const loc=document.getElementById("location").value||"Not specified",a=+document.getElementById("area").value||0,f=+document.getElementById("floors").value||1,b=+document.getElementById("beds").value||0,ba=+document.getElementById("baths").value||0,budget=+document.getElementById("budget").value||0;
const built=a*f,cost=built*1800,cement=Math.round(built*.40),steel=Math.round(built*4),sand=Math.round(built*1.6);
document.getElementById("result").innerHTML=`<div class="summary"><div><small>LOCATION</small><strong>${loc}</strong></div><div><small>BUILT-UP AREA</small><strong>${built.toLocaleString()} sq.ft</strong></div><div><small>FLOORS</small><strong>G+${Math.max(0,f-1)}</strong></div><div><small>BEDROOMS</small><strong>${b}</strong></div><div><small>BATHROOMS</small><strong>${ba}</strong></div><div><small>INDICATIVE COST</small><strong>${money(cost)}</strong></div></div><h3>Preliminary materials</h3><p>🧱 Cement: <b>${cement} bags</b> &nbsp; 🔩 Steel: <b>${steel.toLocaleString()} kg</b> &nbsp; 🏖️ Sand: <b>${sand.toLocaleString()} cu.ft</b></p><p class="notice">Entered budget: <b>${money(budget)}</b> • Difference: <b>${money(budget-cost)}</b></p>`;
document.getElementById("estimate").scrollIntoView({behavior:"smooth"});
}
async function verify(){
const text=document.getElementById("doc").value.trim();if(!text){document.getElementById("hash").textContent="Please enter document text first.";return}
const d=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(text));const h=[...new Uint8Array(d)].map(x=>x.toString(16).padStart(2,"0")).join("");
document.getElementById("hash").textContent="SHA-256 fingerprint:\n"+h+"\n\nStatus: Fingerprint generated successfully.";
}