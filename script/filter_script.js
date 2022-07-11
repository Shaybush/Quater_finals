        // filter contries own code
        let rhodes, rome, budapest, paris, amsterdam, arr;
        window.onload = () => {
            rhodes = document.querySelector("#rhodes");
            rome = document.querySelector("#rome");
            budapest = document.querySelector("#budapest");
            paris = document.querySelector("#paris");
            amsterdam = document.querySelector("#amsterdam");
            arr = [rhodes, rome, budapest, paris, amsterdam];
            arr.forEach((e) => {e.classList.add("active");})
        }
        const change_Country = () => {
            // מחזיר ערך נבחר של select
            // return rhodes,rome,budapest,paris,amsterdam - מחזיר את אובייקטים האלה כ- string
            let select_country = document.querySelector("#id_select").value;
            // לא להתייחס
            if(select_country == "all")
            {
                document.querySelector("#id_span").innerHTML = "Each Contry";
            }
            else{
                document.querySelector("#id_span").innerHTML = select_country;
            }
            // עד לפה

            // אני רוצה במקום לבדוק אחד אחד 
            // להשתמש בערך של select 
            // ושהוא יזהה את זה כאובייקט שלי למעלה
            if (select_country == 'rhodes') {
                arr.forEach((e, index) => {
                    if (index == 0) {
                        // e.classList.add("active");
                        e.classList.add("active");
                    }
                    else {
                        e.classList.remove("active");
                    }
                })
            }
            else if (select_country == 'rome') {
                arr.forEach((e, index) => {
                    if (index == 1) {
                        e.classList.add("active");
                    }
                    else {
                        e.classList.remove("active");
                    }
                })
                // arr[1].classList.add("active");
            }
            else if (select_country == 'budapest') {
                arr.forEach((e, index) => {
                    if (index == 2) {
                        e.classList.add("active");
                    }
                    else {
                        e.classList.remove("active");
                    }
                })
            }
            else if (select_country == 'paris') {
                arr.forEach((e, index) => {
                    if (index == 3) {
                        e.classList.add("active");
                    }
                    else {
                        e.classList.remove("active");
                    }
                })
            }
            else if (select_country == 'amsterdam') {
                arr.forEach((e, index) => {
                    if (index == 4) {
                        e.classList.add("active");
                    }
                    else {
                        e.classList.remove("active");
                    }
                })
            }
            else {
                arr.forEach((e, index) => {
                    e.classList.add("active");
                })
            }
        }