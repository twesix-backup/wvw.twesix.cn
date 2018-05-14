const app = require('reply-to-visit')(4011, '/love/')

app.serveStatic('/web/sites/www.twesix.cn/love')

app.addQuestion
(
    {
        question: '我希望我们的时间',
        tip: '永远停留在',
        answer: '八点二十六分'
    }
)
app.addQuestion
(
    {
        question: '我们的指挥官去哪儿了！？',
        tip: '他哪儿也没去',
        answer: '他只是长大了'
    }
)