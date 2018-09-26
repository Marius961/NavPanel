let tabs = $(".tab");
let currentTab = "";

$(document).ready(function () {
    let url = location.href;
    let tabHref = url.substring(url.indexOf("#")+1);
    let tab = $(".tab[name='"+ tabHref +"']")[0];
    if (tab !== undefined) {
        try {
            selectTab($(tab)[0]);
        } catch (e) {
            selectTab($(tabs)[0]);
        }
    } else {
        let localTab = localStorage.getItem('lastTab') || '';
        if (localTab !== '') {
            try {
                tab = $(".tab[name='"+ localTab +"']")[0];
                selectTab($(tab)[0]);
            } catch (e) {
                selectTab($(tabs)[0]);
            }
        } else {
            selectTab($(tabs)[0]);
        }
    }
});


$(tabs).click( function () {
   selectTab($(this));
});

function selectTab(tab) {
    if ($(tab)[0] !== currentTab) {
        let href = $(tab).attr('href');
        $(tabs).removeClass("tab-active");
        $(".tab-content").fadeOut(100);
        $(tab).addClass("tab-active");
        setTimeout(function () {
            $(href).fadeIn(100);
        }, 100);
        currentTab = $(tab)[0];
        localStorage.setItem("lastTab", $(tab).attr('name'));
    }
}

