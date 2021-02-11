var btn = document.getElementById("share");
btn.addEventListener("click", (e) => { 
	if (navigator.share) {
		  navigator.share({
			  text: "Know all about Sector 58 on 99acres https://www.99acres.com/property-investment-in-sector-78-noida-piffid",
		  })
			  .then(() => console.log('Successful share'))
			  .catch((error) => console.log('Error sharing', error));
	} else {
		alert("Share not allowed! 12")
	  }
})