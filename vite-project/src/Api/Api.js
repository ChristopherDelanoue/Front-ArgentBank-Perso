const BASE_URL = "http://localhost:3001/api/v1";

export async function apiLogin(email, password) {
    const res = await fetch(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    // ✅ stop ici si erreur
    if (!res.ok) {
        throw new Error(data.message || "Login failed");
    }

    // ✅ ici seulement c'est OK
    const token = data.body.token;
    localStorage.setItem("token", token);
    return token;
}