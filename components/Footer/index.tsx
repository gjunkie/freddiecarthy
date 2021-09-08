import * as React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { GitHubIcon } from '../icons/GitHub'
import { TwitterIcon } from '../icons/Twitter'

import {
  StyledContents,
  StyledFooter
} from './styles';

export const Footer: React.FC = () => {
  const theme = useTheme()

  return (
    <StyledFooter className={theme}>
      <StyledContents>
        <div className="copyright">Freddie Carthy © 2021</div>
        <div>
          <a
            className="link twitter"
            href="https://twitter.com/freddiecarthy"
            rel="noreferrer"
            target="_blank"
            title="@freddiecarthy">
            <TwitterIcon />
          </a>
          <a
            className="link github"
            href="https://github.com/gjunkie"
            rel="noreferrer"
            target="_blank"
            title="GitHub Profile">
            <GitHubIcon />
          </a>
        </div>
      </StyledContents>
    </StyledFooter>
  )
}
