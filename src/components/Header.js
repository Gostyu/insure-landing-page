import React from 'react';
import '../stylesheets/layouts/_header.scss';
import Navbar from '../components/Navbar';
import HeaderContent from "../components/HeaderContent";
export default function Header() {
    return <header class="header">
            <Navbar></Navbar>
            <HeaderContent></HeaderContent>
    </header>;
}