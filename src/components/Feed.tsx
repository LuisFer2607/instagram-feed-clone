import React from 'react';
import { Container } from '@mui/material';
import Post from './Post';
import Stories from './Stories';

const Feed: React.FC = () => {
    const posts = [
        {
            username: 'Luis Fernando',  
            avatarUrl: '/avatars/avatar1.jpg',  
            imageUrl: '/posts/post1.jpg',  
            caption: 'Simulación de la esfera de Dyson: "El poder del sol en la palma de la mano, pulsada con una intensidad que parece vibrar en mis huesos! Era como si el universo entero estuviera concentrado en ese punto brillante. 🌟🌞 ¡Qué increíble sensación de energía ilimitada! ¡Un espectáculo que desafía la imaginación! 🚀✨', // Descripción extendida con emoticones.
            likes: 26,  
            comment: '¡Lo máximo, sigue así! 💪✨ Me inspiras a seguir aprendiendo y explorando este increíble universo. ¡La ciencia no tiene límites! 🚀🌌',  // Comentario extendido con emoticones.
            commentNumber: 198  
        },
        {
            username: 'NASA',  
            avatarUrl: '/avatars/avatar2.jpg',  
            imageUrl: '/posts/post2.jpg',  
            caption: '¡Nunca había visto nada igual! Era como si la naturaleza misma hubiera esculpido una obra de arte cósmica, perfecta en su complejidad y belleza. 🌌✨ Cada estrella parecía contar una historia milenaria, tejiendo un tapiz de luz a través del universo infinito. ¡Un verdadero espectáculo celestial! 🌠🌍', // Descripción extendida con emoticones.
            likes: 69,  
            comment: '¡Yo quiero ir! 🌟💫 Imagínate estar ahí, entre las estrellas, explorando lo desconocido. ¡Sería un sueño hecho realidad! 🚀🌠',  // Comentario extendido con emoticones.
            commentNumber: 265  
        },
    ];
    

    return (
        <div>
            <Container maxWidth="sm">
                <Stories />
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        username={post.username}
                        avatarUrl={post.avatarUrl}
                        imageUrl={post.imageUrl}
                        caption={post.caption}
                        likes={post.likes}
                        comment={post.comment}
                        commentNumber={post.commentNumber}
                    />
                ))}
            </Container>
        </div>
    );
};

export default Feed;