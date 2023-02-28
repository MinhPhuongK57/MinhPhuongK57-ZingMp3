import React from 'react';
import { useSelector } from 'react-redux';

function App() {
    const { test } = useSelector((state) => state.app);
    console.log(test);
    return <>Zing MP3</>;
}

export default App;
