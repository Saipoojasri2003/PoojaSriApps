const UserLog=(props)=>{
    return <h1>user logged in</h1>;
}
const Guestlog=(props)=> {
    return <h1>invalid user</h1>;
}
const Signedin =(props)=>{
    const flag=props.isloggedin
    if(flag<10){
        return <UserLog />;
    }
    else{
        return <Guestlog />;
    }
}
export default Signedin;