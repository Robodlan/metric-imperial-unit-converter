

let input = document.getElementById("inputMeter")
document.getElementById('output').style.visibility = 'hidden'


input.addEventListener('input', function(e) {
    document.getElementById('output').style.visibility = 'visible'
    let num = e.target.value
     document.getElementById('feet').textContent = num
     document.getElementById('gallons').textContent = num
     document.getElementById('pounds').textContent = num
     document.getElementById('meters').textContent = num
     document.getElementById('liters').textContent = num
     document.getElementById('kilos').textContent = num
     document.getElementById('meter-feet').textContent = num * Math.round(3.2808);
     document.getElementById('feet-meter').textContent = num / Math.floor(3.2808);
     document.getElementById('liter-gallon').textContent = num * Math.round(3.78541);
     document.getElementById('gallon-liter').textContent = num / Math.round(3.78541);
     document.getElementById('kilos-pounds').textContent = num * Math.round(2.2046);
     document.getElementById('pounds-kilos').textContent = num / Math.round(2.2046);
     
})














 