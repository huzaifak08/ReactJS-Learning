import React from "react";

const UserContext = React.createContext();

export default UserContext;

/* all these inside can get access of user context(what ever stored inside it)
<UserContext>
    <Login/>
    <Card/>
    <Data/>
</UserContext>
*/
