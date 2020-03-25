
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
