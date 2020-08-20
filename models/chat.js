const Chat = require("../schemas/chat")


let chatInsert = async (params) => {
    let query = {
        user: {
            _id: params.sender_id
        },
    	receiver_id: params.receiver_id,
        sender_id: params.sender_id,
        text: params.text,
        chatdate: params.chatdate
    } 
    let add = new Chat(query)
    let result = await add.save()
   // console.log(result, "Result");
    return result
}
let getChatList = async (params) => {
    let result = await Chat.find().sort({"createAt":-1})
    return result
}


module.exports = {
    chatInsert,
    getChatList
};
