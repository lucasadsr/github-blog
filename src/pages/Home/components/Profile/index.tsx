import { useState, useEffect } from 'react'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Description,
  Info,
  ProfileContainer,
  ProfileContent,
  ProfileInfoContainer,
} from './styles'
import { api } from '../../../../lib/axios'

interface ProfileDataType {
  login: string
  name: string
  html_url: string
  bio: string
  avatar_url: string
  company?: string
  followers: number
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileDataType>(
    {} as ProfileDataType,
  )

  async function fetchProfileData() {
    const response = await api.get('/users/lucasadsr')
    setProfileData(response.data)
  }

  useEffect(() => {
    fetchProfileData()
  }, [])

  return (
    <ProfileContainer>
      <img src={profileData.avatar_url} alt="" />
      <ProfileContent>
        <header>
          <h3>{profileData.name}</h3>
          <a href={profileData.html_url} target="_blank" rel="noreferrer">
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <Description>{profileData.bio}</Description>
        <ProfileInfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} color="#3A536B" />{' '}
            <p>{profileData.login}</p>
          </Info>
          {profileData.company && (
            <Info>
              <FontAwesomeIcon icon={faBuilding} color="#3A536B" />{' '}
              <p>Empresa</p>
            </Info>
          )}
          <Info>
            <FontAwesomeIcon icon={faUserGroup} color="#3A536B" />{' '}
            <p>{profileData.followers} seguidores</p>
          </Info>
        </ProfileInfoContainer>
      </ProfileContent>
    </ProfileContainer>
  )
}
