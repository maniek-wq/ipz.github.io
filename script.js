const btn = document.getElementById("myBtn");

function check(){
    console.log("działa!");
}

btn.addEventListener("click",check);

btn.addEventListener("click",function(){
    
    btn.style.display="none";
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id","nowyDiv");
    newDiv.style.position="fixed";
    newDiv.style.left="50%";
    newDiv.style.transform="translateY(-50%)";
    newDiv.style.top="30%";
    newDiv.style.transform="translateX(-50%)";
    newDiv.style.width="600px";
    newDiv.style.height="400px";
    newDiv.style.backgroundColor="white";
    newDiv.style.zIndex="997";
    newDiv.style.boxShadow="0px 0px 7px 8px lightblue";
    newDiv.style.whiteSpace="pre-wrap";
    newDiv.style.textAlign="center";
    newDiv.style.paddingTop="30px";
    const newBtn = document.createElement("button");
    newBtn.setAttribute("id","nowyBtn");
    newDiv.textContent = "Twórcy: \nMikołaj Sitek, \nJakub Wasilewski, \nKrzysztof Warpachowicz, \nPatryk Gendek, \nKlaudia Małolepsza\n\nData rozpoczęcia: 05.10.2022\nData zakończenia: 07.07.2023\n\nNazwa projektu: Street Game";
    newBtn.textContent="Wyświetl zdjęcia!";
    newDiv.style.display="flex";
    newDiv.style.flexDirection="column";
    newBtn.style.width="max-content";
    newDiv.style.justifyContent="center";
    newDiv.style.justifyItems="center";
    newDiv.style.alignItems="center";
    newDiv.style.gap="15px";
    newBtn.style.borderRadius="30px";
    newBtn.style.border="none";
    newBtn.style.padding="7px 7px";
    document.body.appendChild(newDiv);
    nowyDiv.appendChild(newBtn);
    
    newBtn.addEventListener("click",function(){
        newDiv.style.display="none";
        const newJpgDiv = document.createElement("div");
        newJpgDiv.setAttribute("id","jpg");
        newJpgDiv.style.position="fixed";
        newJpgDiv.style.left="50%";
        newJpgDiv.style.transform="translateY(-50%)";
        newJpgDiv.style.top="30%";
        newJpgDiv.style.transform="translateX(-50%)";
        // newJpgDiv.style.backgroundColor="green";
        newJpgDiv.style.width="400px";
        newJpgDiv.style.height="550px";
        newJpgDiv.style.zIndex="999";
        document.body.appendChild(newJpgDiv);
        const nextBtn = document.createElement("button");
        nextBtn.setAttribute("id","nxtBtn");
        nextBtn.style.zIndex="999";
        nextBtn.textContent=">>>";
        document.body.appendChild(nextBtn);

        nextBtn.addEventListener("click",function(){
            newJpgDiv.style.display="none";
            nextBtn.style.display="none";
            const newJpgDiv1 = document.createElement("div");
            newJpgDiv1.setAttribute("id","jpg1");
            newJpgDiv1.style.position="fixed";
            newJpgDiv1.style.left="50%";
            newJpgDiv1.style.transform="translateY(-50%)";
            newJpgDiv1.style.top="30%";
            newJpgDiv1.style.transform="translateX(-50%)";
            newJpgDiv1.style.width="400px";
            newJpgDiv1.style.height="550px";
            newJpgDiv1.style.zIndex="999";

            document.body.appendChild(newJpgDiv1);
            const nextBtn1 = document.createElement("button");
            nextBtn1.setAttribute("id","nxtBtn1");
            nextBtn1.style.zIndex="999";
            nextBtn1.textContent="Wyjdź!";
            document.body.appendChild(nextBtn1);

            nextBtn1.addEventListener("click",function(){
                nextBtn1.style.display="none";
                newJpgDiv1.style.display="none";
                newDiv.style.display="flex";
                newDiv.style.flexDirection="column";
            })
        });
    });


});