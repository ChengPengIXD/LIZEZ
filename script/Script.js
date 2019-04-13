// JavaScript source code
var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
//navItems.forEach(function (e, i) {
//    e.addEventListener("click", function (e) {
//        navItems.forEach(function (e2, i2) {
//            e2.classList.remove("mobile-bottom-nav__item--active");
//        })
//        this.classList.add("mobile-bottom-nav__item--active");
//    });
//});


$(function () {

    $("#filter-detail").hide();

    $(".mobile-bottom-nav__item").on('click', function () {
        var id = $(this).attr("id");
        switch (id) {
            case "Cars":
                window.location.href = 'CarList.html';
                break;

            case "Chatroom":
                window.location.href = 'ChatRoom.html';
                break;

            case "Consulting":
                window.location.href = 'Consulting.html';
                break;

            case "Guidline":
                window.location.href = 'Guidline.html';
                break;
        }
    })

    $(".consultant").on('click', function () {
        window.location.href = "consultingDetail.html";
    })

    $("#goToConsultingList").on('click', function () {
        window.location.href = 'Consulting.html';
    })

    $(".goToGuideline").on('click', function () {
        window.location.href = 'Guidline.html';
    })

 
    $(".goToGuideLineDetail").on('click', function () {
        window.location.href = 'guidelineDetail.html';
    })

    $(".goToMessage").on('click', function () {
        window.location.href = 'message.html';
    })

    $(".carlist-car-div").on('click', function () {
        window.location.href = 'carDetail.html';
    })

    $("#goToCarList").on('click', function () {
        window.location.href = 'CarList.html';
    })


    $(".goToChatRoom").on('click', function () {
        window.location.href = 'ChatRoom.html';
    })

    $(".input-chat").on('input', function () {
        if ($(this).val().length > 0) {
            $("#MsgAddIcon").hide();
            $("#MsgSendIcon").show();
        }
        else {
            $("#MsgAddIcon").show();
            $("#MsgSendIcon").hide();
        }
    })

    $('#MsgSendIcon').on('click', function () {
        var useInput = $(".input-chat").val();
        var resp = "";
        if (useInput.toLowerCase().indexOf('hi') >= 0 || useInput.toLowerCase().indexOf('hello') >= 0) {
            resp = "Hi whats up, let me know if you have questions about the car. ";
        }
        else {
            resp = "It is a good deal."
        }
        var message = [useInput, resp, "May I ask why does the lease holder wants to transfer this car?", "The lease holder wants to buy a new car."];
        $('#messages').chatBubble({
            messages: message,
            typeingSpeed: 5000,
        });
        $(".input-chat").val(" ");
    })


    $('#processLease').on('click', function () {
        $(".msg-bubble").hide();
        $(".msg-notification").show();
    })

    //$(".msg-notification").on('click', function () {
    //    window.location.href = 'guidelineDetail.html';
    //})

    $(".changeable-icon").on('click', function () {
        $(this).toggleClass("changeable-icon-color");
    })

    $(".signin_button").on('click', function () {
        window.location.href = "login.html";
    })

    $(".step-div").on('click', function () {
        window.location.href = "guidelineStep.html";
    })

    $currIcon = $(this).find("span.the-btn"); 

    $('.toggle-nav').click(function () {
        toggleNavigation();
    });

    $('#closeSideBar').click(function () {
        toggleNavigation();
    })

    $("#toggle > li > div").click(function () {
        if (false == $(this).next().is(':visible')) {
            $('#toggle ul').slideUp();
        }

        var $currIcon = $(this).find("span.the-btn");

        $("span.the-btn").not($currIcon).addClass('fa-plus').removeClass('fa-minus');

        $currIcon.toggleClass('fa-minus fa-plus');

        $(this).next().slideToggle();

        $("#toggle > li > div").removeClass("active");
        $(this).addClass('active');

    });            
})


// The toggleNav function itself
function toggleNavigation() {
    if ($('#container').hasClass('display-nav')) {
        // Close Nav
        $('#container').removeClass('display-nav');
    } else {
        // Open Nav
        $('#container').addClass('display-nav');
    }
}            

function showFilter() {
    $("#filter-trigger").hide();
    $("#filter-detail").show();
}

function HideFilter() {
    $("#filter-trigger").show();
    $("#filter-detail").hide();
}

function ShowSearchResult() {
    $("#filter-trigger").show();
    $("#filter-detail").hide();
}

function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("button-tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" button-tab-active", " ");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " button-tab-active";
}



