prediction1 ="sad"
prediction2 ="angry"

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'pnt',
    png_quality: 90
});

camera = document.getElementById('camera');

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src=" + data_uri +'>";'
    })
}

console.log('ml5 Version: ' + ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ekMQlXYu4/model.json",modelloaded);

function modelloaded(){
    console.log('Model Loaded!');

}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 ="The first prediction is "+ prediction1;
    speak_data_2 ="The second prediction is "+ prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);  
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
    }

    if (results[0].label == "OK"){
        document.getElementById("update_emoji").innerHTML = "👌"
    }

    if (results[0].label == "FIVE"){
        document.getElementById("update_emoji").innerHTML = "🖐️"
    }

    if (results[0].label == "THREE"){
        document.getElementById("update_emoji").innerHTML = "&#128406;"
    }

    if (results[0].label == "TWO"){
        document.getElementById("update_emoji").innerHTML = "✌️"
    }

    if (results[1].label == "OK"){
        document.getElementById("update_emoji2").innerHTML = "👌"
    }

    if (results[1].label == "FIVE"){
        document.getElementById("update_emoji2").innerHTML = "🖐️"
    }

    if (results[1].label == "THREE"){
        document.getElementById("update_emoji2").innerHTML = "&#128406;"
    }

    if (results[1].label == "TWO"){
        document.getElementById("update_emoji2").innerHTML = "✌️"
    }

    }
