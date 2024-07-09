$('.homeleyer span').click(function (e) { 
  $("#menu").animate({width:'260px'},50)
  $(".openNav").animate({marginLeft:"250px"},50)
})


$(".close").click(function(e){
  $("#menu").animate({width:"0px"},50)
  // $("#homecontent").animate({marginLeft:"0px"},500)
  $(".openNav").animate({marginLeft:"0px"},500)
})
$('.toggle1').click(
  function()
  {
    $('.inner-text1').slideToggle();
  }
)
$('.toggle2').click(
  function()
  {
    $('.inner-text2').slideToggle();
  }
)
$('.toggle3').click(
  function()
  {
    $('.inner-text3').slideToggle();
  }
)
$('.toggle4').click(
  function()
  {
    $('.inner-text4').slideToggle();
  }
)




function time()
{
  const countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
  setInterval(function () {
    let now = new Date().getTime();

    let distance = Math.abs(countDownDate - now);

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // console.log(days);
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);
    Display(days,hours,minutes,seconds)
  }, 1000);
 
}
time()
function Display(days,hours,minutes,seconds)
{
  console.log("mahmoud")
  co=``
  co+=
  `
   <div class="col-md-3">
              <div class="box">
                <span class="days">-${days}</span>
              </div>
            </div>
            <div class="col-md-3">
              <div class="box">
                <span class="hours">${hours}</span>
              </div>
            </div>

            <div class="col-md-3">
              <div class="box">
                <span class="minutes">${minutes}</span>
              </div>
            </div>

            <div class="col-md-3">
              <div class="box">
                <span class="seconds">${seconds}</span>
              </div>
            </div>`

            document.getElementById("row_id").innerHTML=co;
}



$('textarea').keyup(function (e) { 
  let x=$(this).val().length;
  $('#count').text(
    100-x<=0? "your avilable char finished" : 100-x
  )
})