const Koa=require('koa');
const app= new Koa;
app.use(async (ctx,next)=>{
    ctx.body="幻灵"
})
app.listen(4455)