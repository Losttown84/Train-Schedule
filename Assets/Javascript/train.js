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

$("#add-train-btn").on('click', function(event){
    event.preventDefault()

    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainFrequency = $("#frequency-input").val().trim();
    var nextArrival = $("#next-arrival-input").val().trim();
    var minutesAway = $("#minutes-away-input").val().trim();

    var newTrain = {
        name: trainName,
        destination: trainDestination,
        frequency: trainFrequency,
        arrival: nextArrival,
        far: minutesAway

    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.frequency);
    console.log(newTrain.arrival);
    console.log(newTrain.far);    








  }