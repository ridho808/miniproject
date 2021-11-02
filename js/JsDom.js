// JavaScript DOM


// Header -> Element
const Head = document.getElementById('header');
Head.innerHTML = "LIRA";
Head.style.fontSize = "60 px";

// Navigation
const navi = document.getElementsByTagName("a");
for(let i = 0 ; i < navi.length ; i++){
    if(navi[i] === navi[1]){
        navi[i].innerHTML = "Home";
    }else if(navi[i] === navi[2]){
        navi[i].innerHTML = "About Us"
    }
}

// about
const about = document.getElementById("about")

about.innerHTML = "The community where skincare enthuasists come make better decisions Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas laborum laboriosam nemo, distinctio sunt maiores quia hic porro ratione eius! Voluptas nihil pariatur adipisci possimus quos, suscipit sapiente numquam?"




