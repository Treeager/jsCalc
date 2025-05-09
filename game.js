function won(arg) {
    if (!arg) {
        document.getElementById("overlay").hidden = true
        document.getElementById("destruction").hidden = false

        timer(5)
        
        setTimeout(function() {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }, 5000);

        
    } else {
        document.getElementById("overlay").hidden = true
        document.getElementById("congrats").hidden = false

            setTimeout(function() {
                for (let c = 1; c <= 5; c++) {
                    alert("👏 ".repeat(c))
                }
            }, 5000)
    }

}


function timer(secondsDelay) {
    for (let c = secondsDelay-1; c >= 0; c--) {
        setTimeout( function() {document.getElementById("timer").innerHTML = c}, 1000*(secondsDelay-c))
    }
}