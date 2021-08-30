import * as api from '../api/index'
export const signIn = (formdata,history)=>async(dispatch)=>{
    console.log(history)
    try {
        const {data} = await api.signin(formdata)
        dispatch({type:'AUTH',data})
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}
export const signUp = (formdata,history)=>async(dispatch)=>{
    try {
        console.log(formdata)
        const {data} = await api.signup(formdata)
        dispatch({type:'AUTH',data})
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}