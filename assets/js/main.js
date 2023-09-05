$(function(){

     /** side-nav */
     $('.header .btn-menu').click(function(e){
         e.preventDefault();
         $('.group-header,.header .side-nav').toggleClass('on')
    })
        
      
    
    $(document).mousemove(function(e){
        xVal = e.clientX;
        yVal = e.clientY;

        gsap.to('.header .circle',{
            x: xVal,
            y: yVal
        })

    })
    //마우스 도달 했을때 나타나는마우스효과 
    $('.header .menu-box').hover(function(){
        $('.header .circle').addClass('on')
    },function(){
        $('.header .circle').removeClass('on')
    })
                



/**
 * @intro
 * 
 */
gsap.from('.sc-visual .title .parent span',1,{ /**1초동안 0.1초 간격으로 실행 */
    yPercent:100,
    stagger:0.2 /**순차적으로 올리는 효과 0.1.초 간격으로 실행 */
})


gsap.to('.sc-visual',{
    scrollTrigger:{
        trigger:".sc-visual", //기준점:".sc-visual임"
        start:"0% 0%", //앞자리 % :트리거기준 시작지점 , 
                       //뒷자리 % : 윈도우기준시작지점 -> 두 지점이 만나면 실행
        end:"100% 0%",//앞자리100%: 끝지점.
        // markers:true, 
        scrub:0,//영역 전체가 내려갈때 딜레이 되는 수치
    },
    yPercent:50,
    ease:'none',//일정하게 
})



 gsap.set('.sc-intro .img-box',{
    yPercent:100
 }) //미리 위치 세팅하기 
 
 
 gsap.to('.sc-intro .img-box',{
    scrollTrigger:{
        trigger:".sc-intro", //기준점:".sc-intro"
        start:"0% 50%", //앞자리 % :트리거기준 시작지점 , 뒷자리 % : 윈도우기준시작지점 -> 두 지점이 만나면 실행
        end:"100% 70%",//앞자리100%: 끝지점.
        // markers:true,//표시자
        scrub:1,//영역 전체가 내려갈떄 딜레이 되는 수치 
    },
    yPercent:-30,
    ease:'none',//일정하게 
})

//글씨 순서대로 나오게
// gsap.set('.sc-intro .group-text > *',{opacity:0, yPercent:40}) 

// gsap.to('.sc-intro .group-text > *',{
//    scrollTrigger:{
//        trigger:".sc-intro", //기준점:".sc-visual"
//        start:"0% 50%", //앞자리 % :트리거기준 시작지점 , 뒷자리 % : 윈도우기준시작지점 -> 두 지점이 만나면 실행
//        end:"100% 70%",//앞자리100%: 끝지점.
//     //    markers:true,//표시자
      
//    },
//    opacity:1,
//    stagger:1,//순차적으로 나오게
//    yPercent:0,
// })
    gsap.set('.sc-intro .group-text > *',{opacity:0, yPercent:40}) 

    gsap.to('.sc-intro .group-text > *',{
           scrollTrigger:{
               trigger:".sc-intro", //기준점:".sc-visual"
               start:"0% 50%", //앞자리 % :트리거기준 시작지점 , 뒷자리 % : 윈도우기준시작지점 -> 두 지점이 만나면 실행
               end:"100% 70%",//앞자리100%: 끝지점.
            //    markers:true,//표시자
              
           },
           opacity:1,
           stagger:0.5,//순차적으로 나오게
           yPercent:0,
        })

        $(document).mousemove(function(e){
            xVal = e.clientX;
            yVal = e.clientY;

          gsap.to('.sc-prd .prd-img',1,{
                x: xVal,
                y: yVal
          })
          gsap.to('.sc-prd .circle',2,{
                x: xVal,
                y: yVal
          })

        })

    //마우스 도달 했을때 나타나는마우스효과 
    $('.sc-prd .img-box').hover(function(){
        $('.sc-prd .prd-img, .sc-prd .circle').addClass('on')
    },function(){
        $('.sc-prd .prd-img, .sc-prd .circle').removeClass('on')
    })
        
    
    //카드섹션
    gsap.set('.sc-card .card-area .img',{
        yPercent:100
    })
    
    $('.sc-card .card-area').hover(function(){
        gsap.to($(this).find('.img'),{
            yPercent:0
        })
    },function(){
        gsap.to($(this).find('.img'),{
            yPercent:-100,
            onComplete:function(){
                gsap.set('.sc-card .card-area .img', {yPercent:100})
            }
        })
    })
    
    // gsap.to('.sc-card .card-area:hover .img',{
        //     yPercent:0
        // })
        
        // gsap.to('.sc-card .card-area:hover .img',{
            //     yPercent:-100
            // })
            
            
            

          
    
    $(document).mousemove(function(e){
        xVal = e.clientX;
        yVal = e.clientY;

        gsap.to('.sc-video .circle',{
            x: xVal,
            y: yVal
        })

    })
    //마우스 도달 했을때 나타나는마우스효과 
    $('.sc-video .img-box').hover(function(){
        $('.sc-video .circle').addClass('on')
    },function(){
        $('.sc-video .circle').removeClass('on')
    })
                
    
 gsap.set('.sc-scroll .img-box',{
    yPercent:50
 }) //미리 위치 세팅하기 
 
 
 gsap.to('.sc-scroll .img-box',{
    scrollTrigger:{
        trigger:".sc-scroll", //기준점:".sc-visual"
        start:"0% 50%", //앞자리 % :트리거기준 시작지점 , 뒷자리 % : 윈도우기준시작지점 -> 두 지점이 만나면 실행
        end:"100% 70%",//앞자리100%: 끝지점.
        // markers:true,//표시자
        scrub:1,//영역 전체가 내려갈떄 딜레이 되는 수치 
    },
    yPercent:-50,
    ease:'none',//일정하게 
})

// 푸터 글씨 순차적으로 나오게

gsap.set('.footer .group-top .flex span',{opacity:0, yPercent:0}) 

gsap.to('.footer .group-top .flex span',{
       scrollTrigger:{
           trigger:".footer", //기준점
           start:"0% 60%", //앞자리 % :트리거기준 시작지점 , 뒷자리 % : 윈도우기준시작지점 -> 두 지점이 만나면 실행
           end:"100% 70%",//앞자리100%: 끝지점.
        //    markers:true,//표시자
          
       },
       opacity:1,
       stagger:0.5,//순차적으로 나오게
       yPercent:0,
    })
    
    //이메일
    
 

    //이메일 언더
    ScrollTrigger.create({
        trigger:".footer",
        start:"0% 70%",
        end:"100% 70%",
        // markers:true,
        // toggleClass:"active"
        onEnter:function(){
            $('.footer').addClass('active')
        }
    })

})//지우지말것 