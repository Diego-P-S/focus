import ApiManager from "./ApiManager"

export const user_login = async data =>{
    try{
        const result = await ApiManager('username/password', {
    method: 'POST',
    headers: { 'content-type': 'application/json', },
    data:data,
   
});
return result;
console.log(data)
} catch (error){
    return error.response.data;
}
};