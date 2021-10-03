import React from 'react';
import Masonry from 'masonry-layout';

import Navbar from "../components/Navbar";

export default function ConversationsPage() {
    var msnry = new Masonry( '.grid');
    return <>
    <Navbar />
    <h1>This is the Conversations page boilerplate</h1>
    <p>Soon My Son, please don't desperate</p>
    </>
}