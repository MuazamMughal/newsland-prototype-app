export { GET, POST } from "../../../../../auth"

//now apter his we have t got to the 3000/api/auth/login/
//this error will occures
//{"message":"There was a problem with the server configuration. Check the server logs for more information.","code":"MissingSecret"}
//thn gotto tis link
//https://errors.authjs.dev#missingsecret
// then go to env file add the Auth Secret

//now after adding the auth secret to env we we have to add a midleware from docs