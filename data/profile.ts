export type ProfileDataProps = {
  title: string
  items: {
    title: string
    subTitle?: string,
    link?: string,
	linkText?: string,
    date: string
    description: string
  }[]
}

export const profileData = [
	{
		title: 'Work Experience',
		items: [
			{
				title: 'Senior Software Engineer at Lockheed Martin',
				subTitle: 'TS/SCI',
				date: 'December 2024 – Present',
				description:
					'Joined Lockheed Martin Space to leverage my software engineering skills by contributing to groundbreaking space missions.',
			},
			{
				title: 'Senior Software Engineer at Apple (Contract)',
				subTitle: 'iPhone Tech Ops',
				date: 'September 2024 – November 2024',
				description:
					'Contracted with Apple’s iPhone Tech Ops via TEKsystems to enhance manufacturing efficiency, leading to optimized workflows and productivity gains. Led the migration from DAW to OAuth2 and OIDC for multiple applications, streamlining authentication and authorization with Apple’s IdMS',
			},
			{
				title: 'Senior Software Engineer at IBM',
				linkText: 'Expert Developer',
				link: 'https://www.credly.com/badges/e9d18622-5b2d-48db-ae99-b1cdb44c7f05',
				date: 'October 2023 – August 2024',
				description:
					'Contributed to IBM\'s inner-source initiatives by developing a Tekton-based CI/CD pipeline for hundreds of teams. Built and scaled CI/CD DevSecOps platform delivering ~100,000+ monthly builds of critical business applications to ~250,000 IBMers.',
			},
			{
				title: 'Software Engineer II at IBM',
				linkText: 'Experienced Developer',
				link: 'https://www.credly.com/badges/e47e2860-0c63-49c6-bd87-f315ac009662',
				date: 'May 2021 – October 2023',
				description:
					'Developed IBM\'s Intercompany Agreement (ICA) SaaS for 5,000 IBMers.',
			},
			{
				title: 'Software Engineer I at IBM',
				subTitle: '',
				date: 'May 2019 – May 2021',
				description:
					'Built IBM\'s next generation Global Ledger SaaS application used by ~16,000 IBM accountants.',
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: "Master's Degree in Computer Science",
				subTitle: 'Georgia Institute of Technology',
				date: '2021 - 2024',
				description: 'Specialized in software engineering, system design, and security.',
			},
			{
				title: "Bachelor's Degree in Computer Science",
				subTitle: 'Cornell College',
				date: '2016 - 2020',
				description: 'Graduated with a focus on algorithms and data structures.',
			},
		],
	},
];
