type Certificate = {
    name: string
    link?: string
    externalLink?: string
    organization: string
    year: number
}
export const certificates: Certificate[] = [
    {
        name: 'DWCERT-070-6 "Protecting Windows workstations and file servers from the actions of encryption programs',
        link: 'https://st.drweb.com/upload/c82d21d55154df8406cfda4a8271bdc7_1575317372_6481527_tcrt.png',
        externalLink: '',
        organization: 'Dr.Web',
        year: 2021,
    },
    {
        name: 'Programming in Python',
        link: 'https://stepik.org/cert/181976',
        externalLink: '',
        organization: 'Academy.Yandex',
        year: 2019,
    },
    {
        name: 'Web technologies',
        link: 'https://stepik.org/cert/152016',
        externalLink: '',
        organization: 'Mail.Ru Group',
        year: 2018,
    },
    {
        name: 'Introduction to Programming (C++)',
        link: 'https://stepik.org/cert/151388',
        externalLink: '',
        organization: 'Academy.Yandex',
        year: 2018,
    },
    {
        name: 'CCNA: Introduction to Networks',
        organization: 'Cisco',
        year: 2019,
    },
    {
        name: 'IT Essentials 5.0',
        organization: 'Cisco',
        year: 2018,
    },
]
