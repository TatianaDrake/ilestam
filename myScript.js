//zoom pictures START
document.querySelector('img.om_mig').addEventListener('click', function(e) {
  var lowRes = e.target.src;
  var myOverlay = document.querySelector('.overlay_om_mig');
  var highRes = document.createElement('img');
  var imgLoc = e.target.src;

  myOverlay.style.display = 'block';
  highRes.className = 'bgImg';
  highRes.src = imgLoc.substr(0, imgLoc.length-7) + '.jpg';
  myOverlay.appendChild(highRes);

  highRes.addEventListener('click', function() {
  myOverlay.parentNode.removeChild(myOverlay);
  });

  }, false);

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
