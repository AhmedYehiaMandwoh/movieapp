
class Auth {
    constructor () {
        this.token = window.localStorage.getItem('token');
       
    }
    check () {
        return !! this.token;
    }
    logout () {
       window.localStorage.removeItem('token');
       window.location.reload();
    }
   

}
export default new Auth();
