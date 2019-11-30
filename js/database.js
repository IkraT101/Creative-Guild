if('serviceworker' in navegaitor){
navegaitor.serviceworker.register(/sw.js)
  .then((reg) => console.log('service worker registered', reg))
  .catch((err) => console.log('service worker not registered', err))

}
