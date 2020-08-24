import React from 'react';
import '../stylesheets/layouts/_header.scss';
import Navbar from '../components/Navbar';

export default function Header() {
    return <header class="header">
            <Navbar></Navbar>
            <img></img>
    </header>;
}