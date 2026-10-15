const fs = require('fs');
const path = require('path');

const version = process.env.WIREMOCK_VERSION || '3.9.1';
const file = `wiremock-standalone-${version}.jar`;
const dest = path.resolve(__dirname, '..', file);
const url = `https://repo1.maven.org/maven2/org/wiremock/wiremock-standalone/${version}/${file}`;

(async () => {
  if (fs.existsSync(dest)) {
    console.log(`${file} já existe. Nada a fazer.`);
    return;
  }
  console.log(`Baixando ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Falha no download: HTTP ${res.status}`);
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  console.log(`Salvo em ${dest}`);
})().catch((err) => {
  console.error(err.message);
  process.exit(1);
});