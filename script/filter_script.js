        // filter contries own code
        const change_Country = () => {
            const rhodes = document.querySelector("#rhodes");
            const rome = document.querySelector("#rome");
            const budapest = document.querySelector("#budapest");
            const paris = document.querySelector("#paris");
            const amsterdam = document.querySelector("#amsterdam");
            const arr = [rhodes, rome, budapest, paris, amsterdam];
            // const select = document.querySelector("#id_select");
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