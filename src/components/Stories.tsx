"use client";

import React, { useEffect, useState } from 'react';
import { Avatar, Stack, Box, Typography } from '@mui/material';
import axios from 'axios';

interface User {
    id: string;
    name: string;
    username: string;
    avatarUrl: string;
}

function Stories() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=10');
                const usersWithAvatars = response.data.results.map((user: any) => ({
                    id: user.login.uuid,
                    name: user.name.first + ' ' + user.name.last,
                    username: user.login.username,
                    avatarUrl: user.picture.thumbnail,
                }));
                setUsers(usersWithAvatars);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const getRandomGradient = () => {
        const colors = ['#4caf50', '#ff4081', '#2196f3', '#ffeb3b', '#9c27b0'];
        const color1 = colors[Math.floor(Math.random() * colors.length)];
        const color2 = colors[Math.floor(Math.random() * colors.length)];
        return `linear-gradient(45deg, ${color1}, ${color2})`;
    };

    return (
        <Stack direction="row" spacing={2} sx={{ overflowX: 'auto', padding: 2 }}>
            {users.map(user => (
                <Box key={user.id} sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box
                        sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            background: getRandomGradient(),
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 1,
                        }}
                    >
                        <Avatar
                            src={user.avatarUrl}
                            sx={{
                                width: 56,
                                height: 56,
                                border: '2px solid white',
                            }}
                        />
                    </Box>
                    <Typography variant="caption" sx={{ textAlign: 'center', fontSize: '9px' }}>
                        {user.username}
                    </Typography>
                </Box>
            ))}
        </Stack>
    );
}

export default Stories;