
function createrow() {

     var table = document.getElementById("tableau");
     var newRow = table.insertRow(table.length);
     var cell1 = newRow.insertCell(0);
     var cell2 = newRow.insertCell(1);

     var cell3 = newRow.insertCell(2);
     var cell4 = newRow.insertCell(3);
     var cell5 = newRow.insertCell(4);
     var cell6 = newRow.insertCell(5)
     var cell7 = newRow.insertCell(6);

     
          title = document.getElementById("title").value,
          author = document.getElementById("author").value,
          price = document.getElementById("price").value,
          pub = document.getElementById("pub").value,
          lang = document.getElementById("lang").value;
          var type = document.getElementsByClassName("type");
     var test = "";
     for (i = 0; i < type.length; i++) {
          if (type[i].checked) {
               test = type[i].value;


          }


     }







     cell1.innerHTML = title;
     cell2.innerHTML = author;
     cell3.innerHTML = price;
     cell4.innerHTML = pub;
     cell5.innerHTML = lang;
     cell6.innerHTML = test;
     cell7.innerHTML = `<button onClick='EditRow(this)'value="edit" id="btnedit" type="submit">Edit</button>` +
                         `<button onClick='onDelete(this)'>Delete</button>`

                         
}

var table = document.getElementById("tableau");

function onDelete(td) {
     if (confirm('Are u sure u want to delete this informations')) {
          row = td.parentElement.parentElement;
          document.getElementById('tableau').deleteRow(row.rowIndex);
     }
     


}




function EditRow(r) {
     

     var type=document.getElementsByClassName("type");
var i = r.parentNode.parentNode.rowIndex;
var R=table.rows[i];
if(document.getElementById("btnedit").value=="edit"  ){
    document.getElementById("title").value = R.cells[0].innerHTML;
    document.getElementById("author").value= R.cells[1].innerHTML;
    document.getElementById("price").value= R.cells[2].innerHTML;
    document.getElementById("pub").value= R.cells[3].innerHTML;
    document.getElementById("lang").value=R.cells[4].innerHTML;
    for(i=0;i<type.length;i++)
    {
        if(R.cells[5].innerHTML==type[i].value)
        {
            type[i].checked=true;
        }
    }
    document.getElementById("btnedit").value="save"
    document.getElementById('btn').setAttribute("disabled","true");
} 

else{
    R.cells[0].innerHTML = document.getElementById("title").value;
    R.cells[1].innerHTML =  document.getElementById("author").value;
    R.cells[2].innerHTML =   document.getElementById("price").value;
    R.cells[3].innerHTML =  document.getElementById("pub").value;
    R.cells[4].innerHTML =  document.getElementById("lang").value;
    for(i=0;i<type.length;i++)
    {
        if(type[i].checked==true)
        {
            R.cells[5].innerHTML=type[i].value;
        }
    } 
    document.getElementById("btnedit").value="edit"
    document.getElementById('btn').removeAttribute("disabled");
    resetForm();
}
     
}






