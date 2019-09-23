// var b = document.getElementById("weight");
// b.onclick = function(){
//     document
// }

document.getElementById("weight").addEventListener('click', function(){
    // document.getElementById("para").innerHTML = "FIRST PARAGRAPH!!";
    console.log(document.querySelector("input[name = 'a1w']").value);
});

document.addEventListener('keyup', function(){
    var x = document.getElementById("a1n").value;
    var y = document.getElementById("a1d").value;
    var result = getGradeTotal(x, y)
    if (!isNaN(result)) {
        document.getElementById("a1grade").innerHTML = result;
    }
    
});

document.addEventListener('keyup', function(){
    var x = document.getElementById("a2n").value;
    var y = document.getElementById("a2d").value;
    var result = getGradeTotal(x, y)
    if (!isNaN(result)) {
        document.getElementById("a2grade").innerHTML = result;
    }
    
});

document.addEventListener('keyup', function(){
    var x = document.getElementById("a3n").value;
    var y = document.getElementById("a3d").value;
    var result = getGradeTotal(x, y)
    if (!isNaN(result)) {
        document.getElementById("a3grade").innerHTML = result;
    }
    
});

document.addEventListener('keyup', function(){
    var x = document.getElementById("a4n").value;
    var y = document.getElementById("a4d").value;
    var result = getGradeTotal(x, y)
    if (!isNaN(result)) {
        document.getElementById("a4grade").innerHTML = result;
    }
    
});

document.getElementById("mean").addEventListener('click', function(){
    var mean = getMean()
    // if (!isNaN(result)) {
    document.getElementById("result").innerHTML = mean;
    // }    
});

document.getElementById("weight").addEventListener('click', function(){
    var weighted = getWeighted()
    // if (!isNaN(result)) {
    document.getElementById("result").innerHTML = weighted;
    // }    
});

function getGradeTotal(numerator, denominator) {
    var result = parseFloat(numerator) / parseFloat(denominator) * 100;
    return result.toFixed(3);
}

function getMean() {
    var table = document.getElementById("table")
    var sumVal = 0;
    for(var i = 1; i < table.rows.length; i++) {
        sumVal =  sumVal + parseFloat(document.getElementById("a" + i + "grade").innerHTML);
    }
    var numVal = table.rows.length - 1;
    return (sumVal / numVal).toFixed(3);
}

function getWeighted() {
    
    var table = document.getElementById("table")
    var num = 0;
    var denom = 0;
    for(var i = 1; i < table.rows.length; i++) {
        var ai = parseFloat(document.getElementById("a" + i + "grade").innerHTML);
        var wi = parseFloat(document.getElementById("a" + i + "w").value);
        num =  num + (ai*wi);
        denom = denom + wi;
    }
    return (num / denom).toFixed(3);

    // var a1 =  document.getElementById("a1grade").innerHTML;
    // var a2 =  document.getElementById("a2grade").innerHTML;
    // var a3 =  document.getElementById("a3grade").innerHTML;
    // var a4 =  document.getElementById("a4grade").innerHTML;

    // var w1 = document.getElementById("a1w").value;
    // var w2 = document.getElementById("a2w").value;
    // var w3 = document.getElementById("a3w").value;
    // var w4 = document.getElementById("a4w").value;

    // var numerator = (parseFloat(a1)*parseFloat(w1) + parseFloat(a2)*parseFloat(w2) + parseFloat(a3)*parseFloat(w3) + parseFloat(a4)*parseFloat(w4));
    // var denominator = parseFloat(w1) + parseFloat(w2) + parseFloat(w3) + parseFloat(w4);
    // var result =  numerator/denominator;
    // return result; 

}


