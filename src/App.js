import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [menuItems, setMenuItems] = useState(items)

  const categoriesArray = [
    'All',
    ...new Set(items.map((item) => item.category)),
  ]
  const [categories, setCategories] = useState(categoriesArray)

  console.log(categories)
  const getCategories = (e) => {
    e == 'All'
      ? setMenuItems(items)
      : setMenuItems(
          items.filter((item) => {
            return item.category === e
          })
        )
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} getCategories={getCategories} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
