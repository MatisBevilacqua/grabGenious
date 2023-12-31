export default function getCookie(){
  fetch('https://www.vinted.fr/', {
  method: 'GET',
  headers: {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.1 Safari/537.36', // Remplace cela avec le User-Agent de ton navigateur
  },
  credentials: 'include'
})
  .then(response => {
    const headers = response.headers;
    const allCookies = headers.get('Set-Cookie');
    
    if (allCookies) {
      const cookiesArray = allCookies.split(', ');

      const cookiesToRetrieve = ['__cf_bm', '_vinted_fr_session', 'anon_id', 'anonymous-locale', 'v_sid', 'v_udt'];
      const extractedCookies = {};

      cookiesArray.forEach(cookie => {
        const cookieParts = cookie.split(';')[0]; 
        const [cookieName, cookieValue] = cookieParts.split('=');

        if (cookiesToRetrieve.includes(cookieName)) {
          extractedCookies[cookieName] = cookieValue;

        }
      });


      let formattedCookies = '';
        Object.keys(extractedCookies).forEach((key, index) => {
        formattedCookies += `${key}=${extractedCookies[key]}`;
        if (index !== Object.keys(extractedCookies).length - 1) {
            formattedCookies += '; ';
        }
        });
    } else {
      console.log('Aucun cookie trouvé dans la réponse.');
    }
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des cookies : ', error);
  });
}