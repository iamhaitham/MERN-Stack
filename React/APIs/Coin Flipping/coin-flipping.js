function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
    
    function fiveHeads() {
        return new Promise( (resolve, reject) => {
            let headsCounter=0;
            let attempts=0;
            while(headsCounter<5){
                attempts++;
              if(tossCoin()=="heads"){
                  headsCounter++;
              }
                  headsCounter=0;
            }
            if(attempts<100){
            resolve(`Done in ${attempts} attempts`)
            }
            else if(attempts>100){
                reject("More than 100");
            }
        });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    