import React from 'react';
import styles from './Post.module.css';
import PostComments from '../PostComments';

type Props = {
    children: React.ReactNode;
    imageUrl: string;
};

const Post: React.FC<Props> = ({ children, imageUrl }) => (
    <div className={styles.post}>
        <img className={styles['post-image']} src={imageUrl} alt="" />
        <p className={styles['post-text']}>{children}</p>
        <PostComments />
    </div>
);

export default Post;
