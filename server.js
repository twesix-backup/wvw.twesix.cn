const app = require('reply-to-visit')(4011)

app.serveStatic('/web/sites/wvw.twesix.cn')

app.addQuestion
(
    {
        question: '我希望我们的时间',
        tip: '永远停留在',
        answer: '八点二十六分'
    },
)