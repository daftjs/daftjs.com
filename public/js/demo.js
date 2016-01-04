window.define(function (require) {
  return new window.Daft.Namespace('catAndMouse', {
    domData: {
      cat: {
        data: 'Tom'
      },
      mouse: {
        data: 'Jerry'
      }
    },
    catAndMouse: function (response) {
      console.log('The ' + response.key + ' is now called ' + response.data + '. It used to be ' + response.previous + '.')
    }

  })
})
