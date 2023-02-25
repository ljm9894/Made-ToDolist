const quotes = [
    { 
        quote : "삶이 있는 한 희망은 있다",
        author : "키케로",
    },{
        quote : "산다는 것 그것은 치열한 전투이다.",
        author : "로망로랑"
    },{
        quote : "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해",
        author : "찰리채플린"
    },{
        quote : "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안된다",
        author : "단테"
    },{
        quote : "성공의 비결은 단 한거지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
        author : "톰 모나건"
    },{
        quote : "자신감 있는 표정을 지으면 자신감이 생긴다.",
        author : "찰스다윈"
    },{
        quote : "평생 살 것처럼 꿈을 꾸어라. 그리고 내일 죽을 것처럼 오늘을 살아라",
        author : "로망로랑"
    },{
        quote : "인생은 자신을 찾는 것이 아닙니다. 인생은 자신을 만다는 것입니다.",
        author : "조지 버나드 쇼"
    },{
        quote : "성공하는 사람이 되지말고 가치 있는 사람이 되십시오",
        author : "알버트 아인슈타인"
    }
]
const quote = document.querySelector("#quote :first-child");
const author = document.querySelector("#quote span:last-child");

const TodaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = TodaysQuote.quote;
author.innerText = TodaysQuote.author