//zoom pictures START
document.querySelector('.flex_element_om_mig').addEventListener('click', function(e) {
  if (e.target.tagName === 'IMG') {

    var myElement = document.createElement('div');
    myElement.className = 'preview';
    e.target.parentNode.appendChild(myElement);

    var myImg = document.createElement('img');
    var imgLoc = e.target.src;
    myImg.src = imgLoc.substr(0, imgLoc.length-7) + '.jpg';
    myElement.appendChild(myImg);
  } // check to see that I clicked on IMG only
}, false); // click event


    //zoom pictures FINISH
//hide the paragraph start
document.getElementById('button').addEventListener('click', function() {
  let arr = document.getElementsByClassName('block_none')
for (item of arr) {
		item.classList.add('block_visible')
	}
  })
document.getElementById('mindre').addEventListener('click', function() {
  let arr = document.getElementsByClassName('block_none')
for (item of arr) {
		item.classList.remove('block_visible')
	}
  })
  //hide the paragraph finish
