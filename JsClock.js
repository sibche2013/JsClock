        /*
        This File Was Coded By Amin Arjmand | Email: aminarj2000@gmail.com | Site: aminarjmand.com | Github Profile : https://github.com/sibche2013
        */
		
    //Live Clock , Update Clock Every 1 Second
    var clock = setInterval(function () {
        jsClock();
    }, 1000)

    //Clock Function
    function jsClock() {
        var date = new Date();
        document.getElementById("cas").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    //Stop & Start Clock Function
    function toggleClock() {
        if (clock > 0) {
            clearInterval(clock);
            //clearInterval Only Stop The Work, We Should 0 Clock OurSelf
            clock = 0;
        } else {
            setInterval(function () {
                jsClock();
            }, 1000)
        }
    }