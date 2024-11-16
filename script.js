const keys = document.querySelectorAll(".key");
for(const key of keys){
    if(key.id != "del"){
        key.addEventListener('click', function(e){
            addChar(this.textContent);
        });
    }
}

function addChar(char){
    document.querySelector("#userName").value = document.querySelector("#userName").value + char;
}

document.querySelector("#del").addEventListener('click', function(e){
    var text = document.querySelector("#userName").value;
    text = text.slice(0, -1);
    document.querySelector("#userName").value = text;
});