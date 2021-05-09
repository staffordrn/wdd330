

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
    }//, <--dont forget the comma in between array elements
  ]
  links.forEach((link)=> {
  
  document.getElementById("activity_list").innerHTML += "<a href=\"" + link.url + "\">" + link.label + "<br>";
  });
}

make_list();