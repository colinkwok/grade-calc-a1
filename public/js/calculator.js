document.getElementById("weight").addEventListener('click', function(){
    console.log(document.querySelector("input[name = 'a1w']").value);
});

document.addEventListener('keyup', function(){
    var x = document.getElementById("a1n").value;
    var y = document.getElementById("a1d").value;

    if (isNaN(x) || isNaN(y)) {
        document.getElementById("a1grade").innerHTML = "";
    } else {
        var result = getGradeTotal(x, y)
        if (!isNaN(result)) {
            document.getElementById("a1grade").innerHTML = result;
        } else {
            document.getElementById("a1grade").innerHTML = "";
        }
    }
});

document.addEventListener('keyup', function(){
    var x = document.getElementById("a2n").value;
    var y = document.getElementById("a2d").value;

    if (isNaN(x) || isNaN(y)) {
        document.getElementById("a2grade").innerHTML = "";
    }  else {
        var result = getGradeTotal(x, y)
        if (!isNaN(result)) {
            document.getElementById("a2grade").innerHTML = result;
        } else {
            document.getElementById("a2grade").innerHTML = "";
        }
    }
});

document.addEventListener('keyup', function(){
    var x = document.getElementById("a3n").value;
    var y = document.getElementById("a3d").value;

    if (isNaN(x) || isNaN(y)) {
        document.getElementById("a3grade").innerHTML = "";
    }  else {
        var result = getGradeTotal(x, y)
        if (!isNaN(result)) {
            document.getElementById("a3grade").innerHTML = result;
        } else {
            document.getElementById("a3grade").innerHTML = "";
        }
    }
});

document.addEventListener('keyup', function(){
    var x = document.getElementById("a4n").value;
    var y = document.getElementById("a4d").value;

    if (isNaN(x) || isNaN(y)) {
        document.getElementById("a4grade").innerHTML = "";
    }  else {
        var result = getGradeTotal(x, y)
        if (!isNaN(result)) {
            document.getElementById("a4grade").innerHTML = result;
        } else {
            document.getElementById("a4grade").innerHTML = "";
        }
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

document.getElementById("addrow").addEventListener('click', function() {
    var tableRef = document.getElementById('table');
    var newRow = tableRef.insertRow();
    var number = tableRef.rows.length - 1;

    var cell0 = newRow.insertCell(0);
    var newText0  = document.createTextNode('Activity ' + number);
    cell0.appendChild(newText0);

    var cell1 = newRow.insertCell(1);
    var newText1  = document.createTextNode('A' + number);
    cell1.appendChild(newText1);

    var cell2 = newRow.insertCell(2);
    var newWeight = document.createElement("INPUT");
    newWeight.setAttribute("type", "text");
    cell2.appendChild(newWeight);

    var cell3 = newRow.insertCell(3);
    var newN = document.createElement("INPUT");
    newN.setAttribute("type", "text");
    cell3.appendChild(newN);
    var newText3  = document.createTextNode('/');
    cell3.appendChild(newText3);
    var newD = document.createElement("INPUT");
    newD.setAttribute("type", "text");
    cell3.appendChild(newD);

    var cell4 = newRow.insertCell(4);
    var newText4  = document.createTextNode("");
    cell4.appendChild(newText4);
});

document.getElementById("findTarget").addEventListener('click', function() {
    // Required = (Goal − CurrentGrade × (100% − Remaining Weight)) / Remaining Weight
    var goal = document.getElementById("target").value;
    if (!isNaN(goal)) {
        goal = goal / 100;
        var currentGrade = getMean() / 100;
        var weightTotal = 0;
        for(var i = 1; i < table.rows.length; i++) {
            var wi = parseFloat(document.getElementById("a" + i + "w").value);
            if (!isNaN(wi)) {
                weightTotal = weightTotal + (wi / 100);
            }
        }
        if (weightTotal <= 100 && weightTotal >= 0 ) {
            var remainingWeight = 1 - weightTotal;
            // var required = (goal - (currentGrade * weightTotal)) / remainingWeight;
            var currentGrade = getWeighted() / 100;
            var required = (goal - (currentGrade*weightTotal)) / remainingWeight * 100;
            document.getElementById("targetresult").innerHTML = required.toFixed(3);
        } else {
            document.getElementById("targetresult").innerHTML = "";
        }
    } else {
        document.getElementById("targetresult").innerHTML = "";
    }
    
});




