export default function UpdateCoin(token) {
    return new Promise((resolve, reject) => {
        fetch(`http://74.208.106.113/api/v1/users/add_coins/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
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
