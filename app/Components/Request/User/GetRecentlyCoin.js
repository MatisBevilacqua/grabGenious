export default function GetRecentlyCoin(token) {
    return new Promise((resolve, reject) => {
        fetch(`http://127.0.0.1:3000/api/v1/users/last_coin_update/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '4f5405038e4ead84e794c713c9314a13f5c66054da675a72d3b17e9f75a86ad90552bfddb3b7f0f7a0dac7bc3f7154c64fb5'
            },
            credentials: 'include',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            console.error('Error during GET request:', error);
            reject(error);
        });
    });
}
