/* eslint-disable @next/next/no-html-link-for-pages */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { projectsArray } from 'shared/data/projects'
import { BaseButton, BaseTypography, Card } from 'shared/ui'
import { CategoriesConstants } from 'widgets/projects-categories/model/types'

const Projects = () => {
    const { t } = useTranslation('common')
    const [active, setActive] = useState(CategoriesConstants.Frontend)

    const projects = projectsArray

    return (
        <>
            <Head>
                <title>Sieugene | Projects</title>
            </Head>
            <div
                css={css`
                    margin-top: 25px;
                `}
            >
                <BaseTypography
                    variant="h3"
                    css={css`
                        font-weight: 700;
                        color: cornflowerblue;
                    `}
                >
                    {t('links.projects')}
                </BaseTypography>
                <BaseTypography
                    variant="caption"
                    css={css`
                        display: block;
                        white-space: pre-line;
                    `}
                >
                    {t('projects.info')}
                </BaseTypography>
                <BaseTypography
                    variant="caption"
                    css={css`
                        display: block;
                        white-space: pre-line;
                        font-weight: bold;
                    `}
                >
                    {t('projects.warning')}
                </BaseTypography>
                {/* <ProjectsCategories active={active} setActive={setActive} /> */}

                <BaseTypography
                    variant="caption"
                    css={css`
                        color: blue;
                        border: 1px solid;
                        padding: 2px;
                    `}
                >
                    {' '}
                    <Link href="/post/pet-projects">More about it</Link>
                </BaseTypography>
            </div>

            <Cards>
                {projects?.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </Cards>

            <h2>
                {t('empty.check_on')}{' '}
                <a
                    href="https://github.com/sieugene"
                    target="_blank"
                    rel="noreferrer"
                    css={css`
                        color: blue;
                    `}
                >
                    {t('empty.git')}
                </a>
            </h2>
        </>
    )
}

const Cards = styled.div`
    margin-top: 25px;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-auto-rows: minmax(min-content, max-content);
    grid-gap: 30px;
    justify-content: space-between;
    ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
        justify-content: center;
    }
`

export default Projects
