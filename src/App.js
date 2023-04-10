import React from 'react'
import ProfileSearch from './ProfileSearch'
// import { profilesData } from './ProfilesData' // import user data

function App() {
  // const [searchQuery, setSearchQuery] = useState('') // state to store search query
  // const filteredData = profilesData.filter(
  //   // filter data based on search query
  //   (user) =>
  //     user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  // )

  // const handleSearch = (event) => {
  //   // update search query on user input
  //   setSearchQuery(event.target.value)
  // }

  return (
    <div className='App'>
      <ProfileSearch />
    </div>
  )
}

export default App
