// JavaScript - tiedosto index.html tiedostolle. 
// Luonut Toni Jukkola.
const ERROR = "Hakupainiketta ei voi painaa jos hakukenttä on tyhjä!";
// estetään haku ilman input arvoa.
function tyhja() {
    document.getElementById("data").innerHTML = "";
    document.getElementById("inputvalue").value = "";
}

// Tapahtumankäsittelijä inputille/hae painikkeella 
// luo HTTP/request inputin perusteella.
function haku() {

    let uri ="http://universities.hipolabs.com/search?country=" + document.getElementById("inputvalue").value;
// HTTP request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", uri, true); 
// send request
xmlhttp.send();

xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){ 
        document.getElementById("data").innerHTML ="<ul>";
        
        let domains = JSON.parse(xmlhttp.response);
        domains.forEach(element => {
            document.getElementById("data").innerHTML += "<li>" + "<a href='" + element.web_pages + "'>" + element.name + "</a>"  + "</li>" + "<br>";
            
        });
        document.getElementById("data").innerHTML += "</ul>";
        console.log(domains);
    }

}

}