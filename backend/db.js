const mongoose = require('mongoose');
const mongoURI = 'mongodb://eatEaze:Sanskruti09%23@ac-poamroe-shard-00-00.zutcdei.mongodb.net:27017,ac-poamroe-shard-00-01.zutcdei.mongodb.net:27017,ac-poamroe-shard-00-02.zutcdei.mongodb.net:27017/eatEazeMERN?ssl=true&replicaSet=atlas-k2wlof-shard-0&authSource=admin&retryWrites=true&w=majority';

const mongoDB = async() => {
 await mongoose.connect(mongoURI, { useNewUrlParser: true ,useUnifiedTopology: true },async (err,result) => {
    if (err) {
      console.log("---"+ err);
    } else {
      console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("food_category");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

          
        })
        // if (err) console.log(err);
        // else {
        //   global.food_items =data;
         
        // }
      });
    }
  });
};

module.exports = mongoDB;
