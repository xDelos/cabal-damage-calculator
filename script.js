function calcularDano() {
  const atkBase = parseFloat(document.getElementById("atkBase").value) || 0;
  const amp = parseFloat(document.getElementById("amp").value) || 0;
  const critDmg = parseFloat(document.getElementById("critDmg").value) || 0;
  const penetration = parseFloat(document.getElementById("penetration").value) || 0;
  const finalDmg = parseFloat(document.getElementById("finalDmg").value) || 0;
  const boss = document.getElementById("bossSelect").value;

  let bossDef = 0;
  if (boss === "phantom") bossDef = 800;
  else if (boss === "mech") bossDef = 1200;

  // Fórmula simplificada de dano
  const ampBonus = atkBase * (amp / 100);
  const penBonus = atkBase * (penetration / 100);
  const rawDmg = atkBase + ampBonus + penBonus;
  const dmgAfterDef = rawDmg - bossDef;
  const critBonus = dmgAfterDef * (critDmg / 100);
  const final = (dmgAfterDef + critBonus) * (1 + finalDmg / 100);

  document.getElementById("resultado").innerHTML = `
    <p><strong>Dano Base:</strong> ${rawDmg.toFixed(2)}</p>
    <p><strong>Dano após Defesa:</strong> ${dmgAfterDef.toFixed(2)}</p>
    <p><strong>Dano Crítico:</strong> ${critBonus.toFixed(2)}</p>
    <p><strong>Dano Final:</strong> ${final.toFixed(2)}</p>
  `;
}