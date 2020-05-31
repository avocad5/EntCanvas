const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
let painting = false;

ctx.strokeStyle = '#202020';
ctx.lineWidth = '50';
ctx.fillStyle = 'white';
ctx.fillRect(0,0,canvas.width,canvas.height);




canvas.addEventListener('mousemove',onmousemove)
canvas.addEventListener('mousedown',startpainting)
canvas.addEventListener('mouseup',stoppainting)
canvas.addEventListener('mouseleave',stoppainting)




function onmousemove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting){
    ctx.beginPath();
    ctx.moveTo(x,y);
  }else{
    ctx.lineTo(x,y);
    ctx.stroke();
  }
}

function startpainting(event) {
  painting = true;
}

function stoppainting(event){
  painting = false;
}

function changecolor(color) {
  ctx.strokeStyle = color;
}

function changewidth(){
  ctx.lineWidth = document.getElementById('slider').value;
}

function fill(){
  ctx.fillStyle = ctx.strokeStyle;
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function save() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth()+1;
  let date = today.getDate();

  const name = year+'/'+month+'/'+date+' 작품';
  const img = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = img;
  link.download = prompt('제목을 입력해주세요',name);
  link.click();
}
