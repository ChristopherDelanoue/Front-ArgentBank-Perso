const BASE_URL = "http://localhost:3001/api/v1";

export async function apiLogin(email, password) {
    const res = await fetch(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Login failed");
    }
    const token = data.body.token;
    localStorage.setItem("token", token);

    //récupération du detail user
    const user = await fetch(`${BASE_URL}/user/profile`, {
        method: "GET",
        headers: { "Content-Type": "application/json", authorization: `Bearer ${token}` },
    })
    if (!user.ok) {
        console.log('marche pô');
    }
    const userData = await user.json();
    const userDetails = userData.body;
    return {token: token, user: userDetails};
}

export async function apiUserInfo(token) {
    const user = await fetch(`${BASE_URL}/user/profile`, {
        method: "GET",
        headers: { "Content-Type": "application/json", authorization: `Bearer ${token}` },
    })
    if (!user.ok) {
        console.log('marche pô');
    }
    const userData = await user.json();
    const userDetails = userData.body;
    return userDetails
}