import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/login";
import Feed from "./Pages/Feed";
import Messages from "./Pages/Messages";
import Chatbox from "./Pages/Chatbox";
import Connections from "./Pages/Connections";
import Discover from "./Pages/Discover";
import Profile from "./Pages/Profile";
import CreatePost from "./Pages/CreatePost";
import { useUser } from "@clerk/clerk-react";
import Layout from "./Pages/Layout";

const App = () => {
  const { user } = useUser();
  return (
    <>
      <Routes>
        <Route path="/" element={!user ? <Login /> : <Layout />}>
          <Route index element={<Feed />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:userId" element={<Chatbox />} />
          <Route path="connections" element={<Connections />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
