


  const links = [
    {
      label: "Week 1",
      url: "../week1/index.html"
    },
    {
      label: "Week 2",
      url: "../week2/index.html"
    }, 
    {
      label: "Week 3",
      url: "../week3/index.html"
    },
    {
      label: "Week 4",
      url: "../week4/index.html"
    },
    {
      label: "Week 5",
      url: "../week5/index.html"
    },
    {
      label: "Week 6 - Challenge 1",
      url: "../week6/index.html"
    },
    {
      label: "Week 7",
      url: "../week7/index.html"
    },
    {
      label: "Week 8",
      url: "../week8/index.html"
    },
    {
      label: "Week 9",
      url: "../week9/index.html"
    },
    {
      label: "Week 10",
      url: "../week10/index.html"
    },
    {
      label: "Final Project - Noisemaker App",
        url: "../noisemaker/index.html"
    }//, <--dont forget the comma in between array elements
  ];
  /* function make_list() {
  links.forEach((link)=> {
  
  document.getElementById("activity_list").innerHTML += "<a href=\"" + link.url + "\">" + link.label + "<br>";
  });
}

make_list(); */

function displayNav() {
   links.forEach((link)=> {
  
  document.getElementById("navigation").innerHTML += "<a href=\"" + link.url + "\">" + link.label + "<br>";
  });
}
displayNav();