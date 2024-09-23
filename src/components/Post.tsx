import React from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography,
    Box,
} from '@mui/material';
import {
    FavoriteBorder,
    ChatBubbleOutline,
    BookmarkBorder,
    MoreVert,
    Share,
} from '@mui/icons-material';

interface PostProps {
    username: string;
    avatarUrl: string;
    imageUrl: string;
    caption: string;
    likes: number;
    comment: string;
    commentNumber: number;
}

const Post: React.FC<PostProps> = ({ username, avatarUrl, imageUrl, caption, likes, comment, commentNumber }) => {

    return (
        <Card sx={{ maxWidth: { xs: '100%', sm: 600 }, margin: 'auto', marginTop: 2 }}>
            <CardHeader
                avatar={<Avatar src={avatarUrl} />}
                title={username}
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
            />
            <CardMedia
                component="img"
                image={imageUrl}
                alt={`${username}'s post`}
                sx={{ height: 300, objectFit: 'cover' }} // Ajustar tamaño de imagen
            />
            <CardActions disableSpacing>
                <IconButton>
                    <FavoriteBorder />
                </IconButton>
                <IconButton>
                    <ChatBubbleOutline />
                </IconButton>
                <IconButton>
                    <Share />
                </IconButton>
                <Typography variant="body2" color="textSecondary" sx={{ marginLeft: '10px' }}>
                    {likes} likes
                </Typography>
                <IconButton sx={{ marginLeft: 'auto' }}>
                    <BookmarkBorder />
                </IconButton>
            </CardActions>
            <CardContent>
                <Typography variant="body2">
                    <strong>{username}</strong> {caption}
                </Typography>
                <Box>
                    <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px' }}>
                        Ver todos los {commentNumber} comentarios
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" sx={{ marginTop: '10px' }}>
                    <Avatar src={avatarUrl} sx={{ width: 24, height: 24 }} /> {/* Ajustar tamaño del avatar */}
                    <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1 }}>
                        <strong>{username}</strong> {comment}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Post;
