        // filter contries own code
        let rhodes, rome, budapest, paris, amsterdam, arr;
        function init(){
            rhodes = document.querySelector("#rhodes");
            rome = document.querySelector("#rome");
            budapest = document.querySelector("#budapest");
            paris = document.querySelector("#paris");
            amsterdam = document.querySelector("#amsterdam");
            arr = [rhodes, rome, budapest, paris, amsterdam];
        }
        const change_Country = () => {
            let select_country = document.querySelector("#id_select").value;
            // arr.map(e => e.classList.remove("active"));
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