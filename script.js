function getFormvalue() {
    //Write your code here
	let form = document.getElementById('form1')
	const submitBtn = document.querySelector('input[type="submit"]');
	const name = form.elements.fname
	const lname = form.elements.lname

	submitBtn.addEventListener('click',(e)=>{
		e.preventDefault()
		alert(name.value + " "+ lname.value)
  })

}
getFormvalue()