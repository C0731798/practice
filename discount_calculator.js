function discount_price(price,discount_rate){
	var discount_price = (price*discount_rate)/100;
	return discount_price;
}
function net_price(price)	{
	var net_price = price - 1;
	return net_price;
}
function calculator(){
var price= parseFloat(document.getElementById("price").value);
var discount_rate= parseFloat(document.getElementById("discount_rate").value);
if (isNaN(price)||isNaN(discount_rate))
			{
				alert("one or more values are invalid")
			}
			else
			{
				if (price < 0 || price > 1000){
	alert ("Item price must be in range of 0 or 1000");
}
else
	{
		if (discount_rate < 0 || discount_rate > 70)
		{
			alert("discount % must be in range of 0 and 70")
		}
		else
		{

				document.getElementById("discount_price").value= discount_price(price,discount_rate);
				document.getElementById("net_price").value= net_price(price);
			}
		}
	}
}
window.onload = function(){
    document.getElementById("calculator").onclick = calculator;
}