var request = new recastai.request('8c5b637d65bbad514d68a197284fcf29');

request.analyseText('O que é S/4 Hana Cloud? Teste de post')
  .then(function(res) {
    var intent = res.intent();
    console.log(intent);
  });