

const boxes = document.getElementById('boxes');
const keyname = document.getElementById('keyname')
window.addEventListener("keydown", (e) => {

    boxes.innerHTML = '';
    const key = e.key;
    const location = e.location;
    const code = e.code;
    keyname.textContent = key;


    const items = [{ "key": "key", "value": key },
    { "key": "location", "value": location },
    { "key": "code", "value": code },
    ]

    items.forEach(item => {

        let box = `    <div class="box">
                <div class="header">
                    <p>${item.key}</p>
                </div>
                <div class="body">
                    <h4>${item.value}</h4>
                </div>
            </div`

        boxes.innerHTML += box;
    })




})