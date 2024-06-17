const input = document.querySelector("textarea");
const btn = document.querySelector("button");
const image = document.querySelector("img");

async function getUrl(){
    const text = input.value;
    if(!text) return ;
    try {
        const data = {
            text
        }
        const json = JSON.stringify(data);
        const res = await fetch("http://127.0.0.1:8080/generate",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: json
        })
        const dataCame = await res.json();
        console.log(dataCame)
        image.src = dataCame.url;
    } catch (error) {
        console.log(error.message);
    }
}

btn.addEventListener("click", getUrl)