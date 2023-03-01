import axios from "axios";

export async function getRefreshToken(oldToken:string, oldRefreshToken:string) {
  try {
    const resp = await axios.post("/token/refresh",{
      token: oldToken,
      refreshToken: oldRefreshToken,
    });
    const {token, refreshToken} = resp.data;
    
    return {
      token,
      refreshToken,
    };
  } catch(e) {
    return false;
  }
}