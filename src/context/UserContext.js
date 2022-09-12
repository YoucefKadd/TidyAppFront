import React from 'react';


export default React.createContext({
    user: {
        token: "",
        userId: 0,
        userName: ""
    },
    updateUser: user => { }
});
