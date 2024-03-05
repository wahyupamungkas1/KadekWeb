//file ini digunakan untuk mengurus bussiness logic
//file ini digunakan untuk mengelola data seprti CRUD

class User {

    constructor() {
        this.users = this.getUsers() || [];
    }

    saveUser(userData) {
        const newUser = {
            id: Date.now(),
            ...userData,
        };

        this.users.push(newUser)
        localStorage.setItem('users', JSON.stringify(this.users))

        // return window.location.href = "../index.html"
        return {
            success: true,
        }
    }

    singInUser(usernameByInput){
        // proses pemeriksaan data username pada localsotrage
        const userExist = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());

        if (userExist) {
             //proses pengembalian data ke signIn.js controller 
            return {
             success : true,
             username,
            };
        }
        else {
            return {
             success : false,
             message: "User Not Found ",
            }
        }
      
    }





    getUsers() {
         return JSON.parse(localStorage.getItem('users')) || [];
    }


    
}