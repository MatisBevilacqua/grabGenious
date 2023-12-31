import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import GetCookies from './Request/getCookie';

export default function Home(){

    useEffect( () => {
        GetCookies();
    })

    return(
        <></>
    );
}