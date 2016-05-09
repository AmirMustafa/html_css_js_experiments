function fun2()
{
	var a=document.getElementById('fname').value;
	var p1=/(^[A-Z]{1,1})+([a-z]{2,19})$/;
	if(a=="")
	{
		msg1.innerHTML='Enter First name here';
		document.getElementById('fname').focus();
		msg1.style.color='red';
	}

	else if(!a.match(p1))
	{
		msg1.innerHTML='Enter First name like Aamir, Rahul, Sourav etc.';
		document.getElementById('fname').focus();
	}
	
	else
	{
		msg1.innerHTML='Correct !!'
		document.getElementById('ename').focus();
		msg1.style.color='red';
	}

}

function fun3()
{
	var b=document.getElementById('ename').value;
	var p2=/(^[a-z){1,1})+([a-z0-9]{0,19})+([._]{0,1})([a-z0-9]{1,10})+([@]{1,1})+([a-z0-9]{2,10})+([.]{1,1})([a-z]{1,2})+([.]{0,1})([a-z]{1,3})$/;
	if(b=="")
	{
		msg2.innerHTML='Enter E-mail id here....';
		document.getElementById('ename').focus();
		msg2.style.color='red';
	}

	else if(!b.match(p2))
	{
		msg2.innerHTML='Enter E-mail Id like abc@gmail.com';
		document.getElementById('ename').focus();
		msg2.style.color='red';
	}

	else
	{
		msg2.innerHTML='Correct !!';
		document.getElementById('pname').focus();
		msg2.style.color='red';
	}
}

function fun4()
{
	var document.getElementById('pname').value;
	var c=/(^[a-zA-Z0-9!@#$%^&*]{3,7})+([!@#$%^&*]{1,1})+([a-zA-Z0-9!@#$%^&*]{1,10})$/;

	if (c="")
	{
		msg3.innerHTML='Enter password here....';
		document.getElementbyId('pname').focus();
		msg3.style.color='red';
	}

	else if(!c.match(p3))
	{
		msg3.innerHTML='Enter password in a format eg. Pass@1234....';
		document.getElementbyId('pname').focus();
		msg3.style.color='red';
	}

	else
	{
		msg3.innerHTML='Correct !!';
		document.getElementbyId('pname').focus();
		msg3.style.color='red';
	}
}

function fun5()
{
	var c=document.getElementById('pname').value;
	var d=document.getElementById('cpname').value;

	if(d=="")
	{
		msg4.innerHTML='Enter confirmed password here...';
		document.getElementById('cpname').focus();
		msg4.style.color='red';
	}

	else if(d!=c)
	{
		msg4.innerHTML='Confirm password should be same as you have entered in Password';
		document.getElementById('cpname').focus();
		msg4.style.color='red';
	}

	else
	{
		msg4.innerHTML='Correct !!';
		document.getElementById('mname').focus();
		msg4.style.color='red';
	}

}

function fun6()
{
	var e=document.getElementById("mname");
	if(e="")
	{
		msg5.innerHTML='Enter mobile number here...'
		document.getElementById('mname').focus();
		msg5.style.color='red';

	}

	else if(!c.match(p3))
	{
		msg5.innerHTML='Enter mobile number in a format eg. 7377618756.'
		document.getElementById('mname').focus();
		msg5.style.color='red';
	}

	else
	{
		msg5.innerHTML='Correct !!';
		msg5.style.color='red';
	}
}