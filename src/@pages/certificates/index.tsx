import styled from '@emotion/styled'
import { css } from '@mui/material'
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { certificates } from '../../shared/data/certificates'
import { BaseTypography } from 'shared/ui'

const CertificatesPage: NextPage = () => {
    const { t } = useTranslation('common')
    return (
        <>
            <Head>
                <title>Sieugene | Certificates</title>
            </Head>
            <Wrapper>
                <BaseTypography
                    variant="h4"
                    css={css`
                        margin-bottom: 3rem;
                    `}
                >
                    {t('certificates.title')}
                </BaseTypography>

                <List>
                    {certificates
                        .sort((a, b) => b.year - a.year)
                        .map((cert, index) => (
                            <li key={index}>
                                <BaseTypography variant="caption">
                                    Name: {cert.name}
                                </BaseTypography>
                                <BaseTypography variant="caption">
                                    Organization: {cert.organization}
                                </BaseTypography>
                                <BaseTypography variant="caption">
                                    Year: {cert.year}{' '}
                                </BaseTypography>
                                <BaseTypography variant="caption">
                                    {' '}
                                    {cert.link ? (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Link
                                        </a>
                                    ) : (
                                        ''
                                    )}
                                </BaseTypography>
                            </li>
                        ))}
                </List>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    margin-top: 5rem;
    ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
        flex-direction: column;
    }
`

const List = styled.ul`
    padding: 0;
    margin: 25px 0 0;
    padding: 7px;
    width: fit-content;
    li {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: ${({ theme }) => theme.spaces.default};
        margin-bottom: 1rem;
        transition: 0.3s all ese;
    }
    a {
        color: ${({ theme }) => theme.colors.blue};
        &:hover {
            text-decoration: underline;
        }
    }
`

export default CertificatesPage
