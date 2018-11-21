// Select color input
var height,width,color;
// Select size input
var table = $('#pixelCanvas');
// When size is submitted by the user, call makeGrid()
$(document).ready(function (){
  $('#sizePicker').submit(function (event){
    event.preventDefault();
    var height = $('#inputHeight').val();
    var weight = $('#inputWeight').val();
    makeGrid(height,weight);
   })
function makeGrid(N,M) {
  $('tr').remove();
  //to make user defined grid
  for(let i=1;i<=N;i++){
    table.append('<tr id=row' + i '></tr>');
      for(let j=1;j<=M;j++){
        $('#row'+i).append('<td></td>');
      }
  }
  //To add color to the grid
  $('td').click(function addcolor(){
    color = $('#colorPicker').val();
    
    if($(this).attr('style')){
      $(this).removeAttr('style')
    }
    else
    {
      $(this).attr('style','background-color:' + color);
    }
  })
}

// Your code goes here!
});
