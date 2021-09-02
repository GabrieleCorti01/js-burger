


let bottone = document.getElementById("bottone-calcolo-prezzo");
console.log(bottone);

bottone.addEventListener('click',  
    function () {        

        let nomePanino = document.getElementById("nome-panino");
        console.log(nomePanino);

        if (nomePanino.value.length === 0){
            alert("Inserisci il nome del panino");
        } else { 


            let coupons = ["PaninazzoPazzo", "bestpaninoever", "Ermeiopanino"]
            let prezzo = 10;        
            let ingredienti = document.getElementsByClassName("ingredienti-lista"); 

            for ( let i = 0 ; i < ingredienti.length ; i++){        

                console.log(ingredienti[i]);

                if (ingredienti[i].checked == true){   
                    prezzo = prezzo + parseInt( ingredienti[i].value);
                    
                }
            }
            console.log(ingredienti);
            
            
            let coupon = document.getElementById("coupon-sconto");

            
            if (coupon.value.length > 0 ){  
                if ( coupons.includes(coupon.value) ){  
                    prezzo = prezzo * 0.75;             
                    
                    document.getElementById("valid-coupon").className = "text-success";
                    document.getElementById("unvalid-coupon").className = "d-none";
                }            
            } else {
                document.getElementById("valid-coupon").className = "d-none";
                document.getElementById("unvalid-coupon").className = "text-danger";
                console.log("Questo coupon non esiste");
            }

            document.getElementById("somma").innerHTML = "&euro; " + prezzo;

            console.log(prezzo);
        }     
    });
