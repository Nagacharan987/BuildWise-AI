function plan(){
 const a=Number(document.getElementById('area').value), f=Number(document.getElementById('floors').value),
 b=Number(document.getElementById('beds').value), budget=Number(document.getElementById('budget').value);
 const built=a*f, cost=Math.round(built*1800), cement=Math.round(built*0.40), steel=Math.round(built*4);
 document.getElementById('result').innerHTML=`<h2>AI Preliminary Plan</h2>
 <p><b>Built-up area:</b> ${built.toLocaleString()} sq.ft</p>
 <p><b>Bedrooms:</b> ${b}</p>
 <p><b>Indicative construction cost:</b> ₹${cost.toLocaleString()}</p>
 <p><b>Approx. cement:</b> ${cement} bags (demo estimate)</p>
 <p><b>Approx. steel:</b> ${steel} kg (demo estimate)</p>
 <p><b>Budget entered:</b> ₹${budget.toLocaleString()}</p>
 <p class="note">Demo estimates only. Consult a qualified engineer for actual design and quantities.</p>`;
}
async function verify(){
 const text=document.getElementById('doc').value;
 if(!text){document.getElementById('hash').textContent='Enter document content first.';return;}
 const data=new TextEncoder().encode(text);
 const digest=await crypto.subtle.digest('SHA-256',data);
 const hash=[...new Uint8Array(digest)].map(x=>x.toString(16).padStart(2,'0')).join('');
 document.getElementById('hash').textContent='SHA-256 fingerprint:\n'+hash+'\n\nIn a production version this fingerprint can be recorded on a blockchain.';
}