import React, { useState, useEffect } from "react";
import './App.css';
import { UserButton } from "./UserButton";
import { PostList } from "./PostList";
import Button from '@mui/material/Button';

const baseUrl = "https://jsonplaceholder.typicode.com";
const usersUrl = `${baseUrl}/users`;

export function CommentsDashboard() {
  const [users, setUsers] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState();
  const [chosenButton, setChosenButton] = useState();
  const [displayPostsOrPhotos, setDisplayPostsOrPhotos] = useState(true)

  useEffect(() => {
    fetch(usersUrl)
        .then((res) => res.json())
        .then((usersArray) => setUsers(usersArray));
  }, []);

  const onUserClick = (userId) => setSelectedUserId(userId);

  return (
      <main>
          <Button variant="outlined" onClick={() => setDisplayPostsOrPhotos(true)} >Display Posts</Button>
          <Button variant="outlined" onClick={() => setDisplayPostsOrPhotos(false)} >Display Photos</Button>
        <div>
          {users
              ? users.map((user) => (
                  <UserButton user={user} onUserClick={onUserClick} setChosenButton={() => setChosenButton(user.id)} activeButton={user.id === chosenButton} />
              ))
              : "Loading..."}
        </div>
          <PostList userId={selectedUserId} />
      </main>
  );
}

