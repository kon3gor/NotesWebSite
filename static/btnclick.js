init()

function btnclicked(text, j) {
  var el = document.createElement("div")
  el.setAttribute("class", "card")
  var color = ["#cdf3af", "#f3f2af", "#f3b7af", "#aff3d3", "#aff3f3"]
  var ind = getRandomInt(5)
  el.setAttribute("style", `background: ${color[ind]};`)
  el.setAttribute("onclick", `showFullText(this)`)
  el.setAttribute("id", `${j}`)
  console.log(localStorage.getItem("i"))
  el.innerHTML = `<p>${text}</p>`.trim()
  document.getElementById("main").appendChild(el);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function showdialog(){
  bootbox.prompt("Enter your note", function(result){
    if (result != null && result != ""){
      let i = localStorage.getItem("i")
      localStorage.setItem(`${i}`, result)
      btnclicked(result, i)
      i++
      localStorage.setItem("i", `${i}`)
    }
  })
}

function showFullText(el){
  var dialog = bootbox.dialog({
    title: 'Note',
    message: $(el).text(),
    size: 'large',
    buttons: {
        delete: {
            label: "Delete note",
            className: 'btn-danger',
            callback: function() {
                deleteNote(el)
            }

        },
        ok: {
            label: "Ok!",
            className: 'btn-info',
            callback: function(){
                console.log('Custom OK clicked');
            }
        }
    }
  });

}

function init(){
  var i = localStorage.getItem("i")
  if (i == null){
    i = 0
    localStorage.setItem("i", i)
  }
  for (let j = 0; j < i; j++){
    var text = localStorage.getItem(`${j}`)
    if (text != null){
      btnclicked(text, j)
    }
  }
}

function deleteNote(item){
  localStorage.removeItem(`${item.id}`)
  console.log(item.id)
  item.parentNode.removeChild(item)
}
