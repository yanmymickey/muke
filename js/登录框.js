function login() {
	var username = document.getElementById('AccountNumber').value;
	var password = document.getElementById('password').value;
	var code = document.getElementById('vc').value;
	var ajax = new XMLHttpRequest();
	
	ajax.open('POST',"http://tech.sky31.top/login.php","false");
	
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	
	ajax.send("username="+username+"&password="+password+"&code="+code);
	
	ajax.onreadystatechange = function(){
		if (ajax.readyState == 4 && ajax.status == 200) {
			result = JSON.parse(ajax.responseText);
			console.log(result);
			change(result);
			alert(result.data.name +"   "+ result.data.age +"岁      "+ sex +"性      "+"电话号码："+ result.data.other.phone +"      家庭住址："+result.data.other.address);
		}
	}
	
	function change (result) {
		switch (result.data.sex){
			case "0":
				sex = "男";
				break;
			case "1":
				sex = "女";
				break;
		}
		console.log(result.data.sex);
	}
}
