export default function GetUserByToken(token) {
    return new Promise((resolve, reject) => {
        fetch(`http://127.0.0.1:3000/api/v1/users/${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
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
