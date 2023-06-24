import db from "./mongoConnect.js"

const itemsDb = db.collection("items")

export const addItems = async (req,res) => {
   const newItems = {type: "backpack", color: "black", special: false, price: 48.99, in_stock:false} 
   const newItemsAdd = await itemsDb.insertOne(req.body) 
   console.log(newItemsAdd)

   res.status(201).send(newItemsAdd)
}

export const getAllItems =  async (req,res) => {
    try {
        const data = await itemsDb.find({}).limit(10).toArray(); 
        res.status(200).send(data)
    } catch (error) { 
    res.status(400).send(error)
}
}

