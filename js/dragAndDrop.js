(function() {
    var $gco = function(arg) { 
      // ensure to use the `new` operator
      if (!(this instanceof $gco))
        return new $gco(arg);
      // store an argument for this example
      this.myArg = arg.replace(/#/g,'');
    };
  
    // create `fn` alias to `prototype` property
    $gco.fn = $gco.prototype = {
      init: function () {  }
    };
  
    // expose the library
    window.$gco = $gco;   
  })();

$gco.fn.draganddrop = function (options) { 

  //Config  by default
  var defaultConfig = {
    phpPathTarget       : "./",
    filesPathTarget     : "../target/",
    acceptFiles         : [],
    onSuccess           : function (response) {},
  }; 

  var settings = extend(defaultConfig, options);


  function extend(){ 
    for(var i=1; i<arguments.length; i++) 
      for(var key in arguments[i]) 
        if(arguments[i].hasOwnProperty(key)) arguments[0][key] = arguments[i][key];
     return arguments[0]; 
  }

    var id_draganddrop = new Date().getTime();

    //https://www.w3schools.com/jsref/event_ondragenter.asp 
    document.getElementById(this.myArg).innerHTML = "\
      <div id='"+id_draganddrop+"' class='cubeForm'\
      ondragenter='event.stopPropagation(); event.preventDefault();'\
      ondragover='event.stopPropagation();event.preventDefault();'\
      ondrop='event.stopPropagation();event.preventDefault();'>\
      </div>\
    ";

    gcoNoHover()

    document.getElementById(id_draganddrop).addEventListener("dragover", function( event ) {
      gcoHover()
    })

    document.getElementById(id_draganddrop).addEventListener("dragleave", function( event ) {
      gcoNoHover()
    })

    document.getElementById(id_draganddrop).addEventListener("drop", function( event ) {

      var dt = event.dataTransfer;
      var files = dt.files;

      for (var i = 0; i < files.length; i++) { 

          let formData = new FormData();
          formData.append("file", files[i]);
          formData.append("target", settings.filesPathTarget);
          formData.append("type", settings.acceptFiles);
          
          fetch(settings.phpPathTarget + "php/dragAndDrop.php", {method: "POST", body: formData}).then(function(response) {

              response.json().then(data => {
                  settings.onSuccess.call(this, data);
              });

          });

      }

      gcoNoHover()

    })

      function gcoNoHover(){
        document.getElementById(id_draganddrop).style.backgroundColor="#f1f1f1";
        document.getElementById(id_draganddrop).textContent = "DÉPOSEZ VOS FICHIERS ICI";   
      }
      function gcoHover(){
        document.getElementById(id_draganddrop).style.backgroundColor="#d0f3c5";
        document.getElementById(id_draganddrop).textContent = "CIBLE VERROUILLÉE";
      }


  };

  



 

