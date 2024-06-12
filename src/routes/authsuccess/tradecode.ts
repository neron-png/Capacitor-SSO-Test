export async function postCode(code: string) {
    // POST Request to trade the code for a token
    // Return the token
    // tokenURL = https://idp.sso.tools/aristomate/oauth2/token
    const tokenURL = 'https://idp.sso.tools/aristomate/oauth2/token';
    
    const res = await fetch(tokenURL, {method: 'POST', body: JSON.stringify({
        code: code,
        client_id: '8cd28957-0085-4407-8739-592e96987c70',
        client_secret: 'O1MACN1TLFJYU32SL19U9N71OD63WOUL',
        grant_type: 'authorization_code',
        redirect_uri: 'https://applink.aristomate.gr/authsuccess',
    })
    , headers: {
        'Content-Type': 'application/json'
    }
});
    
    return await res.json();
}

export async function apiTest(token: string) {
    
    const apiURL = "https://idp.sso.tools/aristomate/api/users/me";
    const res = fetch(apiURL, {method: 'GET', headers: {
        Authorization: token,
    }});
    return (await res).json();
}