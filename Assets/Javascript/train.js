var config = {
    apiKey: "AIzaSyCxftWCKMIHCw0nlnCV21Be-doJnKE1xAE",
    authDomain: "train-schedule-65d79.firebaseapp.com",
    databaseURL: "https://train-schedule-65d79.firebaseio.com",
    projectId: "train-schedule-65d79",
    storageBucket: "train-schedule-65d79.appspot.com",
    messagingSenderId: "47200728348"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $(#"add-train-btn").on('click', function(event){
      event.preventDefault()
  }