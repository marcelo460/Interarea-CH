const Q=[
{q:"Quem foi Maria Felipa no contexto da Independência da Bahia?",
 o:["Uma pescadora e marisqueira negra que liderou mulheres na resistência às tropas portuguesas, na Ilha de Itaparica","Uma sinhá que financiou o exército imperial","Uma religiosa que escreveu a declaração de independência","Uma professora que alfabetizou os soldados"],
 a:0,e:"Maria Felipa de Oliveira, mulher negra trabalhadora do mar, liderou outras mulheres na vigilância do litoral e no enfrentamento às forças portuguesas, e é símbolo da luta popular pela independência."},
{q:"Por que as Vedetas da Praia e as Caretas do Mingau são mencionadas no manifesto? O que significa dizer que as histórias dessas mulheres foram apagadas ou pouco registradas?",
 o:["Porque eram figuras lendárias sem relação com fatos históricos","Porque representam a atuação coletiva de mulheres na guerra, como vigilância da costa e apoio às tropas. Dizer que foram apagadas é apontar que a história oficial quase não as registrou","Porque foram as únicas mulheres que receberam honrarias oficiais","Porque seus nomes constam em todos os livros didáticos"],
 a:1,e:"O manifesto cita esses grupos para mostrar que a independência também foi feita por mulheres comuns. “Apagadas” quer dizer que documentos e livros deixaram de registrá-las, silenciando seu papel."},
{q:"O que significa reconhecer mulheres negras como sujeitas históricas?",
 o:["Considerá-las apenas como personagens secundárias de grandes homens","Admitir que elas existiram, mas sem influência nos acontecimentos","Reconhecê-las como agentes que pensaram, decidiram e transformaram a sociedade, e não apenas como figurantes ou vítimas","Dar a elas um título honorário sem rever a história"],
 a:2,e:"Ser sujeita histórica é ter protagonismo: atuar, tomar decisões e deixar marcas. Isso exige reescrever narrativas que as ignoraram."},
{q:"Como a preservação da memória de mulheres negras pode contribuir para a sociedade atual?",
 o:["Fortalece identidades, combate o racismo e o machismo e inspira novas gerações com referências reais","Serve apenas para decorar datas comemorativas","Não contribui, pois o passado não influencia o presente","Divide a sociedade ao destacar diferenças"],
 a:0,e:"Preservar essas memórias amplia a representatividade, valoriza a cultura local, como a de Saubara, e ajuda a construir uma sociedade mais justa e consciente de sua história."}
];
let i=0,pts=0,done=false;
const box=document.getElementById('quiz');
function render(){
  if(i>=Q.length){
    const p=Math.round(pts/Q.length*100);
    const m=pts===Q.length?"Excelente! Você honrou a memória dessas mulheres.":pts>=Q.length/2?"Muito bem! Revise as questões erradas para aprofundar.":"Vale conhecer melhor essa história. Tente de novo!";
    box.innerHTML=`<div class="card"><p class="score">${pts}/${Q.length}</p><h2>${p}% de acertos</h2><p>${m}</p><button class="btn" id="re">Refazer o quiz</button></div>`;
    document.getElementById('re').onclick=()=>{i=0;pts=0;render()};
    return;
  }
  done=false;const c=Q[i];
  box.innerHTML=`<div class="meta"><span>Pergunta ${i+1} de ${Q.length}</span><span>Pontuação: <b id="pt">${pts}</b> / ${Q.length}</span></div><div class="bar"><i style="width:${i/Q.length*100}%"></i></div>
  <div class="card"><h2>${c.q}</h2><div id="opts">${c.o.map((t,k)=>`<button class="opt" data-k="${k}">${t}</button>`).join("")}</div><div id="fb"></div><button class="btn" id="next" style="display:none">${i===Q.length-1?"Ver resultado":"Próxima"}</button></div>`;
  box.querySelectorAll('.opt').forEach(b=>b.onclick=()=>answer(+b.dataset.k));
  document.getElementById('next').onclick=()=>{i++;render()};
}
function answer(k){
  if(done)return;done=true;const c=Q[i];
  if(k===c.a)pts++;
  document.getElementById('pt').textContent=pts;
  box.querySelectorAll('.opt').forEach((b,n)=>{b.disabled=true;if(n===c.a)b.classList.add('ok');else if(n===k)b.classList.add('bad')});
  document.getElementById('fb').innerHTML=`<div class="fb"><strong>${k===c.a?"Correto!":"Não foi dessa vez."}</strong> ${c.e}</div>`;
  document.getElementById('next').style.display='inline-block';
}
function route(){
  const v=(location.hash||'#inicio').slice(1);
  const id=['inicio','quiz','sobre'].includes(v)?v:'inicio';
  document.querySelectorAll('.view').forEach(s=>s.classList.toggle('on',s.id==='v-'+id));
  document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.dataset.v===id));
  window.scrollTo(0,0);
}
addEventListener('hashchange',route);route();render();