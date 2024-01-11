
export const generateToken = (n) => {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var token = '';
    for (var i = 0; i < n; i++) {
        token += chars[Math.floor(Math.random() * chars.length)];
    }
    return token;
}

export const generateHashPass = async (password) => {
    if (password !== '') {
        const encoder = new TextEncoder();
        const data = await encoder.encode(password);
        const hash = await crypto.subtle.digest("SHA-256", data);
        const hashArray = await Array.from(new Uint8Array(hash));
        const hashHex = await hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
        return hashHex;
    }
}


