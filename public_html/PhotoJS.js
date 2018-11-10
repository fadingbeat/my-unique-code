/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function myFunction() {
    var x = document.getElementById("mytopresnav");
    if (x.className === "topnav-centered") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav-centered";
    }
}

window.onload = function() {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var img=document.getElementById("landthumb");
    ctx.drawImage(img,10,10);
    ctx.drawImage("f0c6", 10,175);
    
    ctx.font="f0c6";
};

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('landscape');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var im = document.getElementById('parsley');
var mi = document.getElementById("img02");

var image = document.getElementById('cupcake');
var mimage = document.getElementById("img03");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

im.onclick = function() {
    modal.style.display = "block";
    mi.src = this.src;
    captionText = document.getElementById("caption");
};

image.onclick = function() {
    modal.style.display = "flex";
    mimage.src = this.src;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

