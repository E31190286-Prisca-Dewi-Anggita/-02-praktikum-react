import React, { useState } from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import Example from './Example';
import TodoList from './TodoList';  

// Komponen Header
function Header() {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

// Komponen Main
function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Saya!</h2>
      <p>Ini Adalah area konten utama.</p>
    </main>
  );
}

// KOmponen footer
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Aplikasi React Saya</p>
    </footer>
  );
}

// Komponen App yang menggunakan Header, Main, dan Footer
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Greeting name="John" />
      <Counter />
      <Example />
      <TodoList/>
      <Footer />
    </div>
  );
}


export default App;