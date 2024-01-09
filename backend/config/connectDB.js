const mongoose=require('mongoose')

const conectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://moha1:Iktkj9JsfaSLrvFq@cluster0.n06tzyl.mongodb.net/?retryWrites=true&w=majority')
        console.log('SUccessfull')
    } catch (err) {
        console.log(err)
    }
}

module.exports=conectDB