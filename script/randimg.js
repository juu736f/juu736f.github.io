var randomImage = {
    paths: [
        '/img/404/404_0.jpg',
        '/img/404/404_1.jpg',
        '/img/404/404_2.jpg'
    ],

    generate: function(){
      var path = randomImage.paths[Math.floor(Math.random()*randomImage.paths.length)];
      var img = new Image();
      img.src = path;
      $("#randomImage a").html(img);
      $("#randomImage a").attr("href", path);
    }
  }

  randomImage.generate();
    