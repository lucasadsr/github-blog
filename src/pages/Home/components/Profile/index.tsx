import { useContext } from 'react'
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
import { BlogContext } from '../../../../contexts/BlogContext'

export function Profile() {
  const { profileData } = useContext(BlogContext)

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
