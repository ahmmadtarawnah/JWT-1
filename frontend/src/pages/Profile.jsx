import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/profile', {
                    method: 'GET',
                    credentials: 'include'
                });
                const data = await response.json();
                if (!response.ok) {
                    setError(data.message);
                } else {
                    setProfileData(data);
                }
            } catch (err) {
                setError('Failed to fetch profile data');
            }
        };

        fetchProfile();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
       <div class="p-6 font-sans bg-gray-50 rounded-lg shadow-md border border-gray-200">
    <h2 class="text-2xl font-semibold text-blue-600 mb-5">Profile Data</h2>
    <div class="space-y-4">
        <p class="text-sm text-gray-800"><strong class="font-bold text-gray-600">Name:</strong> { profileData.name }</p>
        <p class="text-sm text-gray-800"><strong class="font-bold text-gray-600">Email:</strong> {profileData.email }</p>
        <p class="text-sm text-gray-800"><strong class="font-bold text-gray-600">JWT:</strong> { profileData.jwt }</p>
        <p class="text-sm text-gray-800"><strong class="font-bold text-gray-600">Hashed Password:</strong> { profileData.hashedPassword }</p>
        <p class="text-sm text-gray-800"><strong class="font-bold text-gray-600">Unhashed Password:</strong> { profileData.unHashedPassword }</p>
    </div>
</div>

    );
};

export default Profile;
