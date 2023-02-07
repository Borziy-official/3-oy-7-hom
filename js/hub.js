var elList = document.querySelector(".js-list")

var jalol = [
    {
        des: "Жалол Повапр",
        yrl: "../img/1.jpg",
        data: "2022 14 декабр"
    },
    {
        des: "Жалол Родился",
        yrl: "../img/2.jpg",
        data: "2022  23 сентябрь"
    },
    {
        des: "Жалол",
        yrl: "../img/3.jpg",
        data: "2023 36 яанварь"
    },
    {
        des: "Жалол",
        yrl: "../img/4.jpg",
        data: "2022 22 декабр"
    },
    {
        des: "Жалол ведушие",
        yrl: "../img/5.jpg",
        data: "2022 22 декабр"
    },
    {
        des: "Проста Жалол",
        yrl: "../img/6.jpg",
        data: "2022 22 декабр"
    },
    {
        des: "Жалол после уроков",
        yrl: "../img/7.jpg",
        data: "2022 22 декабр"
    },
    {
        des: "Жалол сигма",
        yrl: "../img/8.jpg",
        data: "2022 22 декабр"
    },
    {
        des: "Жалол Шелби",
        yrl: "../img/9.jpg",
        data: "2022 15 декабр"
    },
    {
        des: "День рождение Жалола",
        yrl: "../img/10.jpg",
        data: "???? ?? декабр"
    },
    {
        des: "Жалол во время урока",
        yrl: "../img/11.jpg",
        data: "2022 10 декабр"
    },
    {
        des: "Жалол с исом тв",
        yrl: "../img/12.jpg",
        data: "2022 30 октябрь"
    },
    {
        des: "Жалол с львом",
        yrl: "../img/13.jpg",
        data: "2022 6 ноябрь"
    },
    {
        des: "Жалол дебил",
        yrl: "../img/14.jpg",
        data: "2022 6 ноябрь"
    },
    {
        des: "Жалол оке",
        yrl: "../img/15.jpg",
        data: "2022 6 ноября"
    },
    {
        des: "Жалол ачкарик",
        yrl: "../img/17.jpg",
        data: "2022 22 декабрь"
    },
    {
        des: "ман Жалолман соболасиз",
        yrl: "../img/18.jpg",
        data: "2022 22 декабр"
    },
    {
        des: "Жалол",
        yrl: "../img/19.jpg",
        data: "2022 10 декабр"
    },
    {
        des: "Жалол типо крутое",
        yrl: "../img/20.jpg",
        data: "2022 12 декабр"
    },
]



function jalolOutput(array) {
    elList.innerHTML = "";
    for (var list of array) {
        var imgBox = document.createElement("div");
        imgBox.setAttribute("class", "imgBox");
        var JalolDes = document.createElement("h4");
        JalolDes.setAttribute("class", "card-id");
        JalolDes.textContent = `${list.des}.`;
        var JalolImg = document.createElement("img");
        JalolImg.setAttribute("src", list.yrl);
        JalolImg.setAttribute("alt", "jalol img");
        JalolImg.setAttribute("class" ,"img")
        var JalolData = document.createElement("p");
        JalolData.setAttribute("class", "jalol-height");
        JalolData.textContent = `Дата: ${list.data}`;
        var card2 = document.createElement("div");
        card2.setAttribute("class", "my_card  m-5 ggg text-center col-12 rounded");

        imgBox.appendChild(JalolImg);
        card2.appendChild(JalolDes);
        card2.append(JalolImg);
        card2.appendChild(JalolData);
        elList.appendChild(card2);
    }
}
jalolOutput(jalol);