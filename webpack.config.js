const path=require('path');
const { node } = require('webpack');

module.exports={
    mode:'development',
    entry:'./src/app.ts',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js',
    },

    resolve:{
        extensions:['.ts','.js'],
    },

    module:{
        rules:[
            {
                test:/\.tsx?/,
                use:'ts-loader',
                exclude:/node_modules/,
            }
        ]
        
    }
}