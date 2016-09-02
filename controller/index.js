module.exports = {
    index: async (ctx, next) => {
    	await ctx.render('index', {
	    title:'jhoncy的博客',
	    name:'jhoncy'
	  });
    }
}