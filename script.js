$(function(){
    $(".lang li").click(function(){
        $(".lang li").removeClass('act')
        $(this).addClass('act');

        return false
    });

    let scaleValue = 1;

    window.addEventListener("wheel", function (event) {
        let img = document.querySelector(".img img");
        
        if (event.deltaY > 0) { // 아래로 스크롤 (축소)
            scaleValue = Math.max(0.7, scaleValue - 0.05);
        } else { // 위로 스크롤 (확대)
            scaleValue = Math.min(1, scaleValue + 0.05);
        }
        
        img.style.transform = `scale(${scaleValue})`;
    });
})