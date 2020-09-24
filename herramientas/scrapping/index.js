const puppeter = require('puppeteer');

(async () => {
  // Nuestro código
  console.log('Lanzamos navegador');
  //   const browser = await puppeter.launch();
  const browser = await puppeter.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://es.wikipedia.org/wiki/Node.js');

  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    console.log(h1.innerHTML);
    return h1.innerHTML;
  });

  console.log('titulo1 :>> ', titulo1);

  console.log('Cerramos navegador...');
  browser.close();
  console.log('Navegador cerrado');
})();
