        // filter contries own code
        let rhodes, rome, budapest, paris, amsterdam, arr;
        window.onload = () => {
            rhodes = document.querySelector("#rhodes");
            rome = document.querySelector("#rome");
            budapest = document.querySelector("#budapest");
            paris = document.querySelector("#paris");
            amsterdam = document.querySelector("#amsterdam");
            arr = [rhodes, rome, budapest, paris, amsterdam];
            cities = ['rhodes', 'rome', 'budapest', 'paris', 'amsterdam'];
            arr.forEach((e) => {e.classList.add("active");})
        }
        const change_Country = () => {
            // מחזיר ערך נבחר של select
            // return rhodes,rome,budapest,paris,amsterdam - מחזיר את אובייקטים האלה כ- string
            let select_country = document.querySelector("#id_select").value;
            // לא להתייחס
            if(select_country == "all")
            {
                document.querySelector("#id_span").innerHTML = "";
            }
            else{
                document.querySelector("#id_span").innerHTML = ` in ${select_country}`;
            }
            // עד לפה
            cities.forEach((e, index) =>{
                if(e == select_country){
                    arr[index].classList.add("active");
                }
                else if(select_country == "all"){
                    arr.forEach((e) => {
                        e.classList.add("active");
                    })
                }
                else{
                    arr[index].classList.remove("active");
                }
            })
        }