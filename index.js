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
let xmlhttps = new XMLHttpRequest();
xmlhttps.open("GET", uri, true); 
// send request
xmlhttps.send();

xmlhttps.onreadystatechange=function() {
    if(xmlhttps.readyState === 4 && xmlhttps.status === 200){ 
        document.getElementById("data").innerHTML ="<ul>";
        
        let domains = JSON.parse(xmlhttps.response);
        domains.forEach(element => {
            document.getElementById("data").innerHTML += "<li>" + "<a href='" + element.web_pages + "'>" + element.name + "</a>"  + "</li>" + "<br>";
            
        });
        document.getElementById("data").innerHTML += "</ul>";
        console.log(domains);
    }

}

}