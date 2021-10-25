$(function(){

    $(".flexing li").hide()
    var currImg = $("li").first()
    var currIdx = 0
    
    currImg.show()
    $("#nextBtnHome").click(function(){
        currImg.hide(400)
        if(currIdx!= $("li").length - 1){
            currImg = currImg.next()
            currIdx += 1
        } else{
            currIdx = 0
            currImg = $("li").first()
        }
        currImg.show(400)
    })

    $("#prevBtnHome").click(function(){
        currImg.hide(400)
        if(currIdx!= 0){
            currImg = currImg.prev()
            currIdx -= 1
        } else{
            currIdx = $("li").length - 1
            currImg = $("li").last()
        }
        currImg.show(400)
    })

    $("#nextBtn").click(function(){
        currImg.hide(500)
        if(currIdx!= $("li").length - 1){
            currImg = currImg.next()
            currIdx += 1
        } else{
            currIdx = 0
            currImg = $("li").first()
        }
        currImg.show(500)
    })

    $("#prevBtn").click(function(){
        currImg.hide(500)
        if(currIdx!= 0){
            currImg = currImg.prev()
            currIdx -= 1
        } else{
            currIdx = $("li").length - 1
            currImg = $("li").last()
        }
        currImg.show(500)
    })

    
})



