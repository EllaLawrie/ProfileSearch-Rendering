import React, { useState } from 'react'
import { profilesData } from './ProfilesData'

const ProfileSearch = () => {
  const [searchInput, setSearchInput] = useState('')
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value)
  }
  const filteredProfiles = profilesData.filter((profile) =>
    profile.firstName.toLowerCase().includes(searchInput.toLowerCase())
  )

  const renderProfiles = filteredProfiles.map((profile) => (
    <li key={profile.id} className='list-item'>
      <img src={profile.picture} alt='Profile' />
      <div>
        <p className='profile-id'>{profile.id}</p>
        <p className='profile-name'>
          {profile.title} {profile.firstName} {profile.lastName}
        </p>
      </div>
    </li>
  ))

  return (
    <div>
      <div>
        <input
          className='input-field'
          type='text'
          placeholder='Search by name...'
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>
      <ul className='list-container'>{renderProfiles}</ul>
    </div>
  )
}

export default ProfileSearch
