function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.sounClassifier("", modelReady);
}

function modelReady(){
    console.log("Model is loaded");
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);

    }
    else{
        console.log(results);
    }

}