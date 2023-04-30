import { css } from '@emotion/react'
import styled from '@emotion/styled'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Habr } from 'shared/icons'

const Footer = () => {
    const socials = [
        {
            link: 'https://github.com/sieugene',
            icon: <GitHubIcon />,
        },
        // {
        //   link: "https://career.habr.com/sieugene",
        //   icon: (
        //     <Habr
        //       css={css`
        //         height: 24px;
        //         width: 24px;
        //         border-radius: 50%;
        //       `}
        //     />
        //   ),
        // },
        {
            link: 'https://www.linkedin.com/in/sieugene',
            icon: <LinkedInIcon />,
        },
        {
            link: 'mailto:eugenepoluakov@gmail.com',
            icon: <AlternateEmailIcon />,
            withoutTarget: true,
        },
    ]

    return (
        <StyledFooter>
            <div>
                <h1>Eugene Poluakov</h1>
                <h3>Frontend developer.</h3>
            </div>
            <Social>
                {socials.map((social, index) => {
                    return (
                        <a
                            key={index}
                            target={social.withoutTarget ? '_self' : '_blank'}
                            href={social.link}
                            rel="noreferrer"
                        >
                            {social.icon}
                        </a>
                    )
                })}
            </Social>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    border-top: 1px solid ${(props) => props.theme.borders.grayBorder};
    margin-top: 60px;
    margin-bottom: 3rem;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    h1 {
        font-weight: ${(props) => props.theme.typography.fontWeightBold};
        color: ${(props) => props.theme.colors.grayish};
    }
    h3 {
        color: ${(props) => props.theme.colors.grayish};
        font-weight: ${(props) => props.theme.typography.fontWeightLight};
        margin-top: 10px;
    }
    ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
        flex-direction: column;
        align-items: flex-start;
    }
`

const Social = styled.div`
    a {
        &:not(:last-child) {
            margin-right: 10px;
        }
    }
    svg {
        cursor: pointer;
        &:hover {
            fill: ${(props) => props.theme.colors.moderateBlue};
        }
    }
    ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`

export default Footer
