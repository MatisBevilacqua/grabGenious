export default function LoginRequest(userData) {
    return new Promise((resolve, reject) => {
        fetch('http://74.208.106.113/api/v1/users/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
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
            console.error('Error during registration:', error);
            reject(error); 
        });
    });
}
