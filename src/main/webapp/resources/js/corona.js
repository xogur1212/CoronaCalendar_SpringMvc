function showCorona(_date) {
    const sendData = {
        date: _date
    }
    $.ajax({
        url: "ApiCall.do",
        dataType: "json",
        data: sendData,
        success: function (data) {
            console.log(data.response.body.items.item);

            const coronaArray = data.response.body.items.item;
            const total = coronaArray.length;
                $("#coronaList").html("");
            $.each(coronaArray, function (i, item) {

                

                $("#coronaList").append(`
                                    <li>
                                        <h2>${item.gubun}</h2>
                                        <p class="num">${item.localOccCnt}</p>
                                      
                                    </li>`);
            });
            gsap.fromTo("#coronaList >li", {
                y: -1000
            }, {
                y: 0,
                ease: "back.out",
                duration: 1.5,
                rotation: function (i, item) {
                    if (i != total - 1) {
                        return Math.random() * 10 - 5
                    } else {
                        return 0
                    }
                },
                stagger: 0.1
            })
        }
    });
}


$("body").on("click", "#coronaList >li", function () {
    gsap.to($(this), {
        y: 1500,
        ease: "power4.in",
        rotation: Math.random() * 180 - 90,
        duration: 1.5,
        onComplete: function (item, num) {
            console.log(item, num); //onCompleteParams에 있는것들이들어옴
            $("#coronaList").prepend(item);
            gsap.set(item, {
                y: 0,
                rotation: Math.random() * 10 - 5
            });
        },
        onCompleteParams: [$(this), 20]
    })
});


/*
jSuites.calendar(document.getElementById('calendar'), {
    format: 'YYYYMMDD',
    onupdate: function(a,b) {
      var c=b.substring(0,10);
      var d=c.replace(/\-/g,"")
      //console.log(b,   c, c.replace(/\-/g,""));
    
      showCorona(d);
  

    }
});
*/
////////////////////////calender

let now = new Date();
console.log("now", now);
let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const monthList = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const nonLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
console.log(firstDay);
const pickedNow = new Date();
let pageYear;

function makeCalendar(pickedYear, pickedMonth, pickedDate) {
    firstDay = new Date(pickedYear, pickedMonth, pickedDate);
    const firstYear = firstDay.getFullYear();
    const month = monthList[pickedMonth];


    //윤년판단

    if (firstYear % 4 === 0) {
        if (firstYear % 100 === 0) {
            pageYear = nonLeapYear; //윤년아님
        } else {
            pageYear = leapYear;
        }
    } else {
        pageYear = nonLeapYear; //윤년아님
    }

    if (firstYear % 400 === 0) {
        pageYear = leapYear;
    }
    $("#calendar .monthTitle .year").text(pickedYear);
    $("#calendar .monthTitle .month").text(month);

    let count = 1;
    $("#calendar .dates .itemList").html("");
    console.log(firstDay.getDay());
    console.log(firstDay.getMonth());
    for (let i = 0; i < 42; i++) {
        //요일을 가지고 판단
        if (i < firstDay.getDay()) {
            $("#calendar .dates .itemList").append(`<li class="blank"><span></span></li>`);
        } else {
            $("#calendar .dates .itemList").append(`<li data-num="${count}"><span>${count}</span></li>`);
            if (pickedNow.getFullYear() === now.getFullYear() && pickedNow.getMonth() == now.getMonth() &&
                count === now.getDate()) {
                $(`#calendar .dates .itemList li:nth-child(${i+1})`).addClass("today");
            }
            count++;
        }
        if (count > pageYear[firstDay.getMonth()]) {
            break;
        }
    }
}

makeCalendar(now.getFullYear(), now.getMonth(), now.getDate());

function addZero(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return "" + num;
    }
}

$("#calendar .header .btnNextMonth").on("click", function () {
    now = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), 1);
    makeCalendar(now.getFullYear(), now.getMonth(), 1);
})

$("#calendar .header .btnPrevMonth").on("click", function () {
    now = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate(), 1);
    makeCalendar(now.getFullYear(), now.getMonth(), 1);
})

$("body").on("click", "#calendar .dates .itemList > li", function () {
    console.log("난 출력이 되지 않습니다");
    console.log($(this).data("num"));
    const clickedDate = $(this).data("num");
    now = new Date(now.getFullYear(), now.getMonth(), clickedDate);

    console.log("showcorona(", now.getFullYear() + "" + addZero(now.getMonth() + 1) + "" + addZero(now.getDate()), ")");


    $(this).addClass("on").siblings().removeClass("on");
    showCorona(now.getFullYear() + "" + addZero(now.getMonth() + 1) + "" + addZero(now.getDate()));

    $(".calendarWrap .dataBox input").val(pickedNow.getFullYear() + "/" + addZero(pickedNow.getMonth() + 1) + "/" + addZero(pickedNow.getDate()));
    $("#calendar").hide();
})

$(".calendarWrap .dataBox input").on("click", function () {
    $("#calendar").toggle();
    //  $(".calendarWrap .dataBox input").val("2021/10/01");

})