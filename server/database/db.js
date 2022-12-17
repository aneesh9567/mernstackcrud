import mongoose from 'mongoose';


const Connection= async (username,password) =>{
const URL=`mongodb://${username}:${password}@ac-dv4eygh-shard-00-00.fzbzjle.mongodb.net:27017,ac-dv4eygh-shard-00-01.fzbzjle.mongodb.net:27017,ac-dv4eygh-shard-00-02.fzbzjle.mongodb.net:27017/?ssl=true&replicaSet=atlas-zev6p3-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       await mongoose.set('strictQuery', false);
       await mongoose.connect(URL,{useUnifiedTopology:true ,useNewUrlParser:true });
       console.log('database connected successfully');
    } catch (error) {
        console.log('error while connecting with the database',error);
    }
}
export default Connection;