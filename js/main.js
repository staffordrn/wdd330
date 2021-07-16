

function make_list() {
  const links = [
    {
      label: "Week 1 Notes",
      url: "week1/index.html"
    },
    {
      label: "Week 2 Notes",
      url: "week2/index.html"
    }, 
    {
      label: "Week 3 Notes",
      url: "week3/index.html"
    },
    {
      label: "Week 4 Notes",
      url: "week4/index.html"
    },
    {
      label: "Week 5 Notes",
      url: "week5/index.html"
    },
    {
      label: "Week 6 Challenge 1",
      url: "week6/index.html"
    },
    {
      label: "Week 7 Notes",
      url: "week7/index.html"
    },
    {
      label: "Week 8 Notes",
      url: "week8/index.html"
    },
    {
      label: "Week 9 Notes",
      url: "week9/index.html"
    },
    {
      label: "Week 10 Notes",
      url: "week10/index.html"
    },
    {
      label: "Week 11 Notes",
      url: "week11/index.html"
    },
    {
      label: "Final Project - Noisemaker App",
        url: "noisemaker/index.html"
    }//, <--dont forget the comma in between array elements
  ]
  links.forEach((link)=> {
  
  document.getElementById("activity_list").innerHTML += "<a href=\"" + link.url + "\">" + link.label + "<br>";
  });
}

make_list();